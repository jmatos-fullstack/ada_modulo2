export class Numeros {
    num1: number;
    num2: number;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    get soma(): number {
        return this.num1 + this.num2;
    }
}

export function expon(a, b) {
    return a**b;
}