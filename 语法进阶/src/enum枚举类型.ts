enum Status {
  offline,
  online,
  error
}

console.log(Status.offline, Status.online, Status.error)

function getResult(status) {
  let result = '';
  switch (status) {
    case Status.offline:
      result = 'offline'
      break;
    case Status.online:
      result = 'online'
      break;
    case Status.error:
      result = 'err'
      break;
  }
  // console.log('result', result)
  return result;
}

const result = getResult(1);
console.log(result)