# Week19
1. Создайте класс Работник, который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. </br>Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

Вот так должен работать наш класс:</br>
var worker = new Worker('Иван', 'Иванов', 10, 31);</br>

console.log(worker.name); //выведет 'Иван'</br>
console.log(worker.surname); //выведет 'Иванов'</br>
console.log(worker.rate); //выведет 10</br>
console.log(worker.days); //выведет 31</br>
console.log(worker.getSalary()); //выведет 310 - то есть 10*31</br>

2. Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методов. </br>Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.</br>

3. Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление.</br> Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.</br>

4. Реализуйте класс Валидатор, который будет проверять строки. К примеру, у него будет метод isEmail, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. </br>Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.</br>
Сделайте 2 версии этого класса - стандартную и статическую.</br>

//стандартная вызывается вот так</br>
var validator = new Validator();</br>
console.log(validator.isEmail('alisa@mail.ru'));</br>
console.log(validator.isDomain('itgirlschool.ru'));</br>
console.log(validator.isDate('12.05.2021'));</br>
console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны</br>

//а статическая так</br>
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));</br>
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));</br>
console.log(ValidatorStatic.isDate('12.05.2021'));</br>
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
