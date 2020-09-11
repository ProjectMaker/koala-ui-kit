import isEmail from 'validator/lib/isEmail'
import isInt from 'validator/lib/isInt'
import isHexColor from 'validator/lib/isHexColor'
import isURL from 'validator/lib/isURL'
import isISO8601 from 'validator/lib/isISO8601'
import { get, set } from 'lodash'

export const validationMethods = {
  isRequired: value => !!value && value.toString().length > 0,
  isEmail: value => !!value && isEmail(value),
  isEqualTo: (value, matchValue) => value === matchValue,
  isExludedFrom: (value, excludes) => excludes.indexOf(value) === -1,
  minLength: (value, min) => value && value.toString().length >= min,
  maxLength: (value, max) => value && value.toString().length <= max,
  containsNumber: value => value && /[0-9]+/.test(value),
  containsCapital: value => value && /[A-Z]+/.test(value),
  isAccepted: value => value === true,
  isConfirmationCode: value => value && /^[0-9]{4}$/.test(value.toString()),
  isInteger: value => value && isInt(value),
  isCreditCard: value => value && /^[0-9]{16}$/.test(value.toString()),
  isCVV: value => value && /^[0-9]{3}$/.test(value),
  isHexColor: value => value && isHexColor(value),
  isURL: value => value && isURL(value, { require_protocol: true, allow_underscores: true, allow_protocol_relative_urls: true }),
  isDate: value => value && isISO8601(value, { strict: true })
}

class ValuesValidator {

  constructor(values, validations) {
    this.values = values
    this.validations = validations
    this.errors = {}
  }

  validate = (field, rules) => {
    const value = get(this.values, field)

    if (!value && rules.indexOf('isRequired') === -1 && rules.indexOf('isAccepted') === -1) return

    rules.some(rule => {
      const method = typeof rule === 'string' ? rule : rule[0]
      const options = typeof rule === 'string' ? {} : rule[1]

      if (typeof validationMethods[method] == 'function') {
        if (!this.execValidation(method, value, options)) {
          this.addError(field, method, options)
          return true // exits the loop
        }
      }
      else {
        console.error(`Unknown validator ${rule} on field ${field}`)
      }

      return false
    })
  }

  execValidation = (method, value, options) => {
    switch(method) {
      case 'isEqualTo':
        return validationMethods.isEqualTo(value, this.values[options.field])
      case 'isExludedFrom':
        return validationMethods.isExludedFrom(value, options.values)
      case 'minLength': case 'maxLength':
        return validationMethods[method](value, options.count)
      default:
        return validationMethods[method](value)
    }
  }

  addError = (field, rule, options = {}) => {
    const error = this.getErrorMessage(rule, options)
    const errors = get(this.errors, field) || []
    errors.push(error)
    set(this.errors, field, errors)
    return error
  }

  getErrorMessage(rule, options = {}) {
    return { code: `formErrors.${rule}`, options }
  }

  getErrors() {
    for(let field in this.validations) {
      this.validate(field, this.validations[field])
    }

    return this.errors
  }

}

export default ValuesValidator
