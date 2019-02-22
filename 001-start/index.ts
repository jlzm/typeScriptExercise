const greeter = (person: string) => {
    console.log('person :', person);
    return  `hello,${person}`;
}

let user = 'jlzm';

greeter(user);