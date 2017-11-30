/**
 *const is keyword we cannot override its value we can append
 */

	const hello = () => {
		const emails = ['sunita@optcentral.com' , 'somasumbe@gmail.com'];
		//emails = []; error because const variable cannot resasigned
		emails.push('amol@gmail.com'); // worked because we added  ne value
		console.log(emails);
		emails.map((v) => {
			console.log(v);
		})
	}

hello();

//control with block scoping
	let limit = 10;
	{
		let limit = 20;
		console.log("backstatte limit" , limit);  // 20
	}
		console.log("gloabal limit" , limit); // 10


/**
 * template literals
 * using template literals es6 allows access js variables directly in expressin no need to concat
 * e.g const greet = (message) => console.log(`Hello ! ${message}`); alternate for this
 * const greet = (message) => console.log(`Hello ! ${message}`);
 */

	const greet = (message) => console.log(`Hello ! ${message}`);

	const	greeting = () => console.log( greet.call(greeting , 'Shivansh') )

	greeting(); // Hello ! Shivansh


/**
 * Spread operator{...} & rest parameters (...a)
 * e.g - let b = [10,...a, 50];
 * we can access all arguments in a varialble
 */

	let a = [20, 30, 40];
	let b = [10, ...a, 50];
	console.log(b);  // [10,20,30,40,50]

	const arrayList = ( ...a ) => {
		console.log(a);
	}

	arrayList( 1,2,3,4,5,6,7,8,9 );   // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Destructuring Assignment of arrays & objects
 * here wild find first index & pet find second index of animals array & returns it values
 * For object
 */

	// Destruction assignment of array
	 let animals = ['lion', 'dog', 'yak'];
	 let [wild ,pet] = animals;  // let wild = animals[0] ; let pet = animals[1]
	 console.log(wild ,pet);   //lion dog

	//destruction assignment of object
		let king = {
			name: 'Shivaji' ,
			state: 'Maharashtra'
		}

		let {name , state} = king;  //let name= king.name ; let state = king.state;
		console.log(name , state);  // Shivaji Maharashtra

	//to accessing declared variables in destruction syntax

	 let n ;
	 let s;

	 ({n , s} = king);
	 console.log(n , s); // Shivaji Maharashtra

/**
 * Arrow function  - by default it is an anonymous function
 * .map() - creates new array using original array element
 * .filter() - creates new arrays using original array using some test cases
 */

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

/**
 * Built in methods in ES6
 */

  // 1. String.repeat()

  let str = "Sunita Shivansh".repeat(3) + '';
  console.log("repeated str=>" ,str);  // repeated str=> Sunita ShivanshSunita ShivanshSunita Shivansh
  console.log("repeated str=>" ,str + ''.repeat(2) +'Somnath Sumbe');  // rrepeated str=> Sunita ShivanshSunita ShivanshSunita ShivanshSomnath Sumbe

  // 2- method using literal syntax

   let newstr = `Shivansh Sunita ${'Somnath'.repeat(2) + 'Sumbe'}`;
   console.log("newstr" , newstr);  // newstr Shivansh Sunita SomnathSomnathSumbe

  // .endsWith & .startsWith

  console.log(newstr.endsWith('Sumbe'));  // true
  console.log(newstr.endsWith('Somnath '));  // false
  console.log(newstr.startsWith('Shivansh'));  // true
  console.log(newstr.startsWith('Somnath '));  // false

  // .includes
  console.log(newstr.includes('van'));  // true
  console.log(newstr.includes('Somnath'));  // true
  console.log(newstr.includes('ar'));  // false

	// checking numbers
