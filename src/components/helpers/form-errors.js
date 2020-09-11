export const isInputWithError = meta => {
  return !!(meta.touched && (meta.error || meta.submitError))
}

export const getErrorMessages = (meta, t = (err) => err) => {
  if (!isInputWithError(meta)) return []
  const messages = [];

  (meta.error || []).forEach(error =>
    messages.push(getErrorMessage(error, t))
  );

  (meta.submitError || []).forEach(error =>
    messages.push(error) // server errors are already translated
  );

  return messages
}

const getErrorMessage = (error, t) => {
  let message = t(error.code)

  for(let key in error.options) {
    message = message.replace(`%{${key}}`, error.options[key])
  }

  return message
}
