let a = 3;
const recordVideoOne = new Promise((resolve, reject) => {
  if (a == 3) {
    resolve('Video 1 Recorded'
    )} else {
      reject('Video 1 not Recorded')
    }
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

//all promises are run at the same time
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages);
}).catch(messages => {
  console.log('Fail ' + messages);
})

//only get the first return value of recordVideoOne
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message);
}).catch(message => {
  console.log('Fail ' + message);
})