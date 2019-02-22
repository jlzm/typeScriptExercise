interface Person {
    firstName?: string;
    lastName?: string;
    testNumber?: number;
    readonly x: number;
    readonly y: number;
}

const greeter = (person: Person) => {
    return `hello ${person.firstName} ${person.lastName}`;
}

let user = {
    firstName: 'jlzm',
    lastName: 'man'
}

let a: number[] = [1, 2, 3, 4];

let ro: ReadonlyArray<number> = a; 

// console.log('greeter(user) :', greeter(user));
let p: Person = {
    x: 10,
    y: 20
}