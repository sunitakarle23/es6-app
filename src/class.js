class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}
	hello() {
		console.log(`Hi! I am ${this.name} King of Animals. `)
	}
}

class Lion extends Animal{
	constructor( name, height, color){
		super(name, height);
		this.color = color;
	}
}

const animal  = new Lion( 'Lion', 6, 'Golden' );
animal.hello();  				//Hi! I am Lion King of Animals.

export default animal;