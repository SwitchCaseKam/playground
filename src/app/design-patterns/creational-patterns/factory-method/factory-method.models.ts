interface Transport {
    name: string;
    price: number;
    move(): void;
}

class Truck implements Transport {
    name: string = 'truck';
    price: number = 100;
    public move(): void {
        console.log('for this order it is better to use truck and road transport');
    }
}

class Ship implements Transport {
    name: string = 'ship';
    price: number = 100;
    public move(): void {
        console.log('for this order it is better to use ship and sea transport');
    }
}

class Plane implements Transport {
    name: string = 'plane';
    price: number = 50000;
    public move(): void {
        console.log('for this order it is better to use plane and fly transport');
    }
}

export abstract class OrderCreator {
    public abstract createTransport(): Transport;
    public logTransportInfo(): string[] {
        const transport = this.createTransport();
        transport.move();
        return [`
        transport method: ${transport.name},
        transport price: ${transport.price},
      `, `assets/${transport.name}.png`];
    }
}

export class RoadTransportOrderCreator extends OrderCreator {
    public createTransport(): Transport {
        return new Truck();
    }
}

export class SeaTransportOrderCreator extends OrderCreator {
    public createTransport(): Transport {
        return new Ship();
    }
}

export class FlyTransportOrderCreator extends OrderCreator {
    public createTransport(): Transport {
        return new Plane();
    }
}