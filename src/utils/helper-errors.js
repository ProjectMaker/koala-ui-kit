export const isInputWithError = meta => {
  return !!(meta.touched && (meta.error || meta.submitError))
}

const getErrorMessages = (meta, t) => {
  const messages = [];

  (meta.error || []).forEach(error =>
    messages.push(getErrorMessage(error, t))
  );

  (meta.submitError || []).forEach(error =>
    messages.push(error) // server errors are already translated
  );

  return messages
}

const getErrorMessage = (error) => {
  let message = error.code

  for(let key in error.options) {
    message = message.replace(`%{${key}}`, error.options[key])
  }

  return message
}

export const InputError = meta => {
  if (!isInputWithError(meta)) return null

  return getErrorMessages(meta).join(', ')
}
