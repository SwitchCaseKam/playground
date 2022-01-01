export class Car {
    engine: Engine;
    body: CarBody;
    wheels: Wheels

    constructor(engine: Engine, body: CarBody, wheels: Wheels) {
        this.engine = engine;
        this.body = body;
        this.wheels = wheels;
    }

    public displayInfo(): string {
        return `
            Info:
            ${this.engine.getInfo()}
            ${this.body.getInfo()}
            ${this.wheels.getInfo()}
        `;
    }
}

interface Engine {
    getInfo(): string;
}

class SportEngine implements Engine {
    getInfo(): string {
        return 'engine info: 250 KM, 2.8';
    }
}

class CompactEngine implements Engine {
    getInfo(): string {
        return 'engine info: 110 KM, 1.6';
    }
}

interface CarBody {
    getInfo(): string;
}

class SportCarBody implements CarBody {
    getInfo(): string {
        return 'car body info: 2 doors, 2 seats';
    }
}

class CompactCarBody implements CarBody {
    getInfo(): string {
        return 'car body info: 4 doors, 5 seats';
    }
}

interface Wheels {
    getInfo(): string;
}

class SportWheels implements Wheels {
    getInfo(): string {
        return 'wheels info: R18, 250';
    }
}

class CompactWheels implements Wheels {
    getInfo(): string {
        return 'wheels info: R16, 195';
    }
}

export interface CarFactory {
    createEngine(): Engine;
    createBody(): CarBody;
    createWheels(): Wheels;
}

export class SportsCarFactory {
    public createEngine(): SportEngine {
        return new SportEngine();
    }
    public createBody(): SportCarBody {
        return new SportCarBody();
    }
    public createWheels(): SportWheels {
        return new SportWheels();
    }
}

export class CompactCarFactory {
    public createEngine(): CompactEngine {
        return new CompactEngine();
    }
    public createBody(): CompactCarBody {
        return new CompactCarBody();
    }
    public createWheels(): CompactWheels {
        return new CompactWheels();
    }
}