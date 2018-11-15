var greeter = function (person) {
    return "hello " + person.firstName + " " + person.lastName;
};
var user = {
    firstName: 'jlzm',
    lastName: 'man'
};
console.log('greeter(user) :', greeter(user));
