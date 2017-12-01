const basic = () => {
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

}

export default basic;
