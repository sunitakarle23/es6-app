/**
 * Static methods declaird using static keyword
 * Static method allows to access method without creating instance of class
 * It allows access methods using classnames
 */

class Person {

	static display() {
		console.log(`My name is Sunita.`);  			//My name is Sunita.
	}
}

let person = Person.display();  //we can directly access static methods using class keyword

export default person;