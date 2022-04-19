let p = new Promise((resolve, reject) => {
  let a = 3;
  if (a == 2) {
    resolve('Sucess')
  } else {
    reject('Failed')
  }
})

p.then(message => {
  console.log('this is in the then ' + message);
}).catch (message => {
  console.log('this is in the catch ' + message);
})