interface Builder {
    build(): void;
    addCheese(cheese: string): void;
    addTomato(tomato: string): void;
    addPepperoni(pepperoni: string): void;
    addBecon(becon: string): void;
    addChicken(chicken: string): void;
    addMushrooms(mushrooms: string): void;
}

export class PizzaBuilder implements Builder {
    private pizza: Pizza;

    constructor() {
        this.pizza = this.build();
    }

    public build(): Pizza {
        return new Pizza();
    }

    public setPizzaName(name: string) {
        this.pizza.setName(name);
    }

    public addCheese(cheese: string): void {
        this.pizza.setCheese(cheese);
    }
    public addTomato(tomato: string): void {
        this.pizza.setTomato(tomato);
    }
    public addPepperoni(pepperoni: string): void {
        this.pizza.setPepperoni(pepperoni);
    }
    public addBecon(becon: string): void {
        this.pizza.setBecon(becon);
    }
    public addChicken(chicken: string): void {
        this.pizza.setChicken(chicken);
    }
    public addMushrooms(mushrooms: string): void {
        this.pizza.setMushrooms(mushrooms);
    }

    public getPizza(): Pizza {
        return this.pizza;
    }
}


export class Pizza {
    private name: string = '';
    private ingredients: string[];
    private cheese: string = '';
    private tomato: string = '';
    private pepperoni: string = '';
    private becon: string = '';
    private chicken: string = '';
    private mushrooms: string = '';

    public constructor() {
        this.ingredients = [];
    }

    public displayIngredients(): void {
        console.log(`Pizza: ${this.name}; ingeredients: ${this.ingredients.join('\n')}\n`);
    }

    public getIngredients(): string[] {
        return this.ingredients;
    }

    public setName(name: string) {
        this.ingredients = [];
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setCheese(cheese: string) {
        this.cheese = cheese;
        this.ingredients.push(this.cheese);
    }
    public setTomato(tomato: string) {
        this.tomato = tomato;
        this.ingredients.push(this.tomato);
    }
    public setPepperoni(pepperoni: string) {
        this.pepperoni = pepperoni;
        this.ingredients.push(this.pepperoni);
    }
    public setBecon(becon: string) {
        this.becon = becon;
        this.ingredients.push(this.becon);
    }
    public setChicken(chicken: string) {
        this.chicken = chicken;
        this.ingredients.push(this.chicken);
    }
    public setMushrooms(mushrooms: string) {
        this.mushrooms = mushrooms;
        this.ingredients.push(this.mushrooms);
    }
}

export class Director {
    private pizzaBuilder: PizzaBuilder = new PizzaBuilder();

    public setBuilder(builder: PizzaBuilder): void {
        this.pizzaBuilder = builder;
    }

    public getBuilder(): PizzaBuilder {
        return this.pizzaBuilder;
    }

    public buildMargherita(): void {
        console.log('margetita')
        this.pizzaBuilder.setPizzaName('margherita');
        this.pizzaBuilder.addCheese('cheese');
    }

    public buildFunghi(): void {
        console.log('fungi')
        this.pizzaBuilder.setPizzaName('funghi');
        this.pizzaBuilder.addCheese('cheese');
        this.pizzaBuilder.addMushrooms('mushrooms');
    }

    public buildMeatPizza(): void {
        this.pizzaBuilder.setPizzaName('meat');
        this.pizzaBuilder.addCheese('cheese');
        this.pizzaBuilder.addBecon('mushrooms');
        this.pizzaBuilder.addChicken('chicken');
        this.pizzaBuilder.addPepperoni('pepperoni');
    }
}

