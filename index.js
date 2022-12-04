let user =
{
    login: 'vasya123',
    name: 'Вася Пупкин',
    regDate: new Date(11, 11, 2011),
    url: '1.jpg',
    orders: [111, 1213, 3323]
}

let comment =
{
    date: new Date(11, 11, 2011),
    text: "Текст на русском языке",
    author: "vasya123",

    showComment() {
        return `${this.author}: ${this.text} at ${this.date}`;
    }
}

console.log(comment);

let cat = {
    name: 'Барсик',
    age: 3,
    weigth: 5.5,
    happiness: 3,

    feedCat() {
        this.happiness = this.happiness + 5;
    }
}

let calc = {
    sum(a, b) {
        return a + b;
    }
}

let car = {}

car.brand = 'BMW';
car.drive = function test() {
    console.log('Хочу на тест-драйв!');
}





class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    showInfo() {
        console.log(`Это ` + this.type);
    }
}

let animal1 = new Animal('Снежок', 'кот');
let animal2 = new Animal('Шарик', 'пес');

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`Поехали на ${this.brand}`);
    }
}

let car1 = new Car('BMW', "X5");
car1.drive();

let car2 = new Car('Land Cruiser', "200");
car2.drive();




class Validation {
    static CheckEmpty(collection) {
        let isEmpty = false;
        for (let input of Collection) {
            if (input.value == '')
                isEmpty = true;
        }
        return isEmpty;
    }
}

if (Validation.CheckEmpty(document.getElementsByClassName('test)'))) {
    //есть пустой эдемент
    alert('Есть пустой элемент!');
}