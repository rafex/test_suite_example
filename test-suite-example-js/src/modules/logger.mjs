function logMessage(message, level = 'info') {
  switch(level) {
    case 'info':
      console.info(message);
      break;
    case 'warning':
      console.warn(message);
      break;
    case 'error':
      console.error(message);
      break;
    case 'debug':
      console.debug(message);
      break;
    case 'trace': 
      console.trace(message);
      break;
    default:
      console.log(message);
  }
}

export default logMessage;