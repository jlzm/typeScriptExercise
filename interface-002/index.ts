interface Person {
    firstName: string;
    lastName: string;
}

const greeter = (person: Person) => {
    return `hello ${person.firstName} ${person.lastName}`;
}

let user = {
    firstName: 'jlzm',
    lastName: 'man'
}

console.log('greeter(user) :', greeter(user));