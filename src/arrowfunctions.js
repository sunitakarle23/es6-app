/**
 * Arrow function  - by default it is an anonymous function
 * .map() - creates new array using original array element
 * .filter() - creates new arrays using original array using some test cases
 */

const arrFun = () => {
// 1 Method
	let double = [20,30,40];

	double =  double.map( (n) => {
		return n+20;
	})

	console.log(double);

// 2 Method
	let v = [20,30,40].map( (n) => { return n+20 } );
	console.log(v); // [40, 50, 60]

  // .filter() - 1 Method

		let higherNumber = [10, 20, 85, 65, 45];
		higherNumber = higherNumber.filter( (n) => {
			return n > 40;
		})
		console.log('higherNumber', higherNumber); //[85, 65, 45]

	// filter() - 2 method

		let maxNmuber = [10, 20, 85, 65, 45].filter( (n) =>  n > 40 );
		console.log('maxNmuber' ,maxNmuber); //[85, 65, 45]
}

export default arrFun;