// In what order will the following fire?

// setTimeout( () => { console.log(1) }, 5000);

// setTimeout( () => { console.log(2) }, 2000);

// setTimeout( () => { console.log(3) }, 1000);

// What does the following return?
const randomTime = () => Math.floor( Math.random() * 5000);

// In what order will the following fire?
// setTimeout( () => { console.log(1) }, randomTime() );

// setTimeout( () => { console.log(2) }, randomTime() );

// setTimeout( () => { console.log(3) }, randomTime() );

// When will the number be logged?
const randomWait = (number) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => { resolve(number) }, randomTime() );
  });
};

// randomwait(5).then( (number) => {
//   console.log(number);
// });

// gives back everything in order specified
// Promise.all();

randomWait(1).then(console.log(1));
randomWait(2).then(console.log(2));
randomWait(3).then(console.log(3));

// Promise.all([
//   randomWait(1),
//   randomWait(2),
//   randomWait(3)
//   ]).then( (numbers) => {
//     console.log(numbers);
//   });

//

Promise.race([
  randomWait('Kora'),
  randomWait('Barret')
]).then((res) => {
  console.log(res);
});
