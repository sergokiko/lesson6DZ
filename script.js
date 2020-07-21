// // - создать массив с 20 числами.
//
// let arr = [2,3,41,4,8,56,54,223,54,3,1,346,70,56,45,23,60,765,98,21]
//
//
//
// // -- при помощи метода sort и колбека  отсортировать массив.
//
// arr.sort((a,b)=>(a-b))
//
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
//
// arr.sort((a,b)=>b-a)
//
//
// // -- при помощи filter получить числа кратные 3
// let arrNewTwo = arr.filter(elem => !(elem%3));
//
//
//
// // -- при помощи filter получить числа кратные 10
//
// let arrNewThree = arr.filter(elem => !(elem%10));
//
//
//
// // -- перебрать (проитерировать) массив при помощи foreach();
//
// arr.forEach(elem => console.log(elem))
//
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше;
//  let newArrOne = arr.map(elem => elem*3);
// // console.log(newArr);
//
// //
// // - создать массив со словами на 15-20 элементов.;
//
// let words = ['Hogwards', 'Life','Good','event', 'Eye' ,'Revesre', 'Function', 'javaScript', 'Apple', 'Romeo','Spain', 'table','Mouse', 'morning', 'Clouds', 'Iphone','Lol' ];
//
//
//
//
// // -- отсортировать его по алфавиту в восходящем порядке.
//
//
//
//
// // words.sort((a,b)=> {
// //     if (a.toLowerCase() < b.toLowerCase()) {
// //         return -1
// //     }
// //     if (a.toLowerCase() > b.toLowerCase()) {
// //         return 1
// //     }
// //     if (a.toLowerCase() === b.toLowerCase()) {
// //         return 0
// //     }})
//
// // or
// // words.sort((a,b)=>(a.toLowerCase() < b.toLowerCase() ? -1 : 1))
//
//
// // -- отсортировать его по алфавиту  в нисходящем порядке.
//
// // words.sort((a,b)=>(a.toLowerCase() < b.toLowerCase() ? 1 : -1))
//
//
// // words.sort((a,b)=> {
// //     if (a.toLowerCase() < b.toLowerCase()) {
// //         return 1
// //     }
// //     if (a.toLowerCase() > b.toLowerCase()) {
// //         return -1
// //     }
// //     if (a.toLowerCase() === b.toLowerCase()) {
// //         return 0
// //     }})
// // console.log(words);
//
//
//
// // -- отфильтровать слова длиной менее 4х символов
//
// let newArrFour = words.filter(elem => elem.length >= 4)
// console.log(newArrFour);
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let newArrFive = words.map(word => word+'!');
// console.log(newArrFive);
//
//
//
//
// // Все робити через функції масивів (foreach, map ...тд)
// // Дан масив :
//
//
    let users = [   {name: 'vasya', age: 31, status: false},
                    {name: 'petya', age: 30, status: true},
                    {name: 'kolya', age: 29, status: true},
                    {name: 'olya', age: 28, status: false},
                    {name: 'max', age: 30, status: true},
                    {name: 'anya', age: 31, status: false},
                    {name: 'oleg', age: 28, status: false},
                    {name: 'andrey', age: 29, status: true},
                    {name: 'masha', age: 30, status: true},
                    {name: 'olya', age: 31, status: false},
                    {name: 'max', age: 31, status: true} ];
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
//
//
// users.sort((a,b)=> a.age - b.age);
// users.sort((a,b)=> b.age - a.age);
//
//
// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання);
//
// users.sort((a,b)=>a.name.length - b.name.length);
// users.sort((a,b)=>b.name.length - a.name.length);
//
//
//
// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу,
// // його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін);
//
//
//
// let  newArr = []
//
// //   users.map((user, i) => {
// //     newArr[i]= {};
// //     for (let keys in user) {
// //         if(user.hasOwnProperty(keys)){
// //             newArr[i][keys] = user[keys];
// //         }
// //     }
// //     newArr[i].id = i;
// //     return user
// // })
//
let newUser = [...users]
let newArray = newUser.map((newUser, index) => {

    newUser.id = index
    return newUser
});

console.log(users);
console.log(newArray);

//  newArr.sort((a,b)=> b.id - a.id)
// console.log(newArr);


//
// //
// // -- наисать функцию калькулятора с 2мя числами и колбеком;
//
// function calculate(a,b , callback){
//       return callback(a,b);
// }
// console.log(calculate(15, 18, (a, b) => a - b));
//
//
//
//
//
// // -- наисать функцию калькулятора с 3мя числами и колбеком
//
// let calculateThree = (a,b,c, callback) => callback(a,b,c);
// console.log(calculateThree(10,3,5, (a,b,c)=> (a-b)*c))
//
// // =============================================
// // =============================================
// // =============КЛАССНАЯ РАБОТА=================
// // =============================================
// // =============================================
// //
// //
// //
// //
//
//
//
// let cars = [    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//                 {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//                 {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//                 {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//                 {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//                 {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//                 {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//                 {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//                 {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//                 {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//                 {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//                 {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//                 {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ]
//
//
//
// //     - двигун більше 3х літрів
//
// let carsEngineVolumeMoreThree = cars.filter(car => car.volume > 2);
// console.log(carsEngineVolumeMoreThree);
//
//
//
//
// // - двигун = 2л
//
// let carsEngineVolumeTwo = cars.filter(car => car.volume === 2);
// console.log(carsEngineVolumeTwo);
//
//
//
//
// // - виробник мерс
// let carMercedes = cars.filter(car => car.producer === 'mercedes')
// console.log(carMercedes);
//
//
//
//
// // - двигун більше 3х літрів + виробник мерседес
// let carsVolumeTreeAndMercedes = cars.filter(car => car.volume === 3 && car.producer === 'mercedes');
// console.log(carsVolumeTreeAndMercedes);
//
//
//
//
// // - двигун більше 3х літрів + виробник субару
// let carsVolumeTreeAndSubaru = cars.filter(car => car.volume > 3 && car.producer === 'subaru');
//
//
//
//
// // - сили більше ніж 300
// let carsPowerMoreThreeHundred = cars.filter(car => car.power > 300);
//
//
//
// // - сили більше ніж 300 + виробник субару
// let carsPowerMoreThreeHundredAndSubaru = cars.filter(car => car.power > 300 && car.producer === 'subaru');
//
//
//
// // - мотор серіі ej
// let engineNameEj = cars.filter(car => car.engine.slice(0,2) === 'ej' )
//
//
//
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
//
// let findSomeSpecialCAr = cars.filter(car => car.power > 300 &&  car.producer === 'subaru' && car.engine.slice(0,2) === 'ej')
// console.log(findSomeSpecialCAr);
//
// // - двигун меньше 3х літрів + виробник мерседес;
//
// let carEngineLessThreeAndMercedes =  cars.filter(car => car.volume < 3 && car.producer === 'mercedes' )
//
// // - двигун більше 2л + сили більше 250
//
// let carEngineMOreTwoAndPower = cars.filter(car => car.volume > 2 && car.power > 250)
// // - сили більше 250  + виробник бмв
//
// let carPowerAndBMW = cars.filter(car => car.power > 250 && car.producer === 'bmw')
//
//
//
//
// // - взять слдующий массив
//
//
//  let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                          {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//                          {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                          {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//                          {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                          {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//                          {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//                          {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                          {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//                          {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                          {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
//
// // -- отсортировать его по id пользователей;
//
// usersWithAddress.sort((a,b)=> a.id - b.id);
// console.log(usersWithAddress);
// //
// // // -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a,b)=> b.id - a.id);
// console.log(usersWithAddress);
//
//
//
// // -- отсортировать его по возрасту пользователей;
// usersWithAddress.sort((a,b) => a.age - b.age)
//
//
//
// // -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a,b) => b.age - a.age)
//
//
//
//
// // -- отсортировать его по имени пользователей
// usersWithAddress.sort((a,b)=> {
//     if(a.name < b.name){
//         return -1
//     }if (a.name > b.name){
//         return 1
//     }if (a.name === b.name){
//         return 0
//     }
//
// })
//
//
//
// // -- отсортировать его по имени пользователей в обратном порядке
//
// usersWithAddress.sort((a,b)=> {
//     if(a.name < b.name){
//         return 1
//     }if (a.name > b.name){
//         return -1
//     }if (a.name === b.name){
//         return 0
//     }
//
// })
//
//
// // -- отсортировать его по названию улицы  в алфавитном порядке;
//
// usersWithAddress.sort((a,b)=> {
//     if(a.address.street < b.address.street){
//         return -1
//     }if (a.address.street > b.address.street){
//         return 1
//     }if (a.address.street === b.address.street){
//         return 0
//     }
//
// })
// // -- отсортировать его по номеру дома по возрастанию;
//
// usersWithAddress.sort((a,b) => a.address.number - b.address.number);
// console.log(usersWithAddress);
// // -- отфильтровать (оставить) тех кто младше 30
//
// let filtredUserYonger = usersWithAddress.filter(user => user.age < 30)
// console.log(filtredUserYonger);
// // -- отфильтровать (оставить) тех у кого отрицательный статус
//
// let usersWithTrueStat = usersWithAddress.filter(user => !user.status);
// console.log(usersWithTrueStat);
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
// let usersWithFalseAndYoung = usersWithAddress.filter( user => !user.status && user.age < 30 );
// console.log(usersWithFalseAndYoung);
// // -- отфильтровать (оставить) тех у кого номер дома четный
//
// let userWithEvenNumbers = usersWithAddress.filter(user => !(user.address.number%2));
// console.log(userWithEvenNumbers)
// //
// //
// // ===========================
// // ======ДОПОЛНИТЕЛЬНО========
// // ===========================
// //
// // Створити обєкт автомобіля з полями:
// //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// //     Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// //
//
// let carsWithOwners = [
//     {producer: 'BMW', power:260, owner:{name:'Sergio',age:29, experience: 10 },price: 25000, year: 2015},
//     {producer: 'Audi', power:290, owner:{name:'Taras',age:26, experience: 6 },price: 34000, year: 2017},
//     {producer: 'Ford', power:223, owner:{name:'Mary',age:27, experience: 4 },price: 18000, year: 2014},
//     {producer: 'Mercedes', power:180, owner:{name:'Tolik',age:49, experience: 28 },price: 8000, year: 2007},
//     {producer: 'Saab', power:255, owner:{name:'Max',age:30, experience: 12 },price: 14000, year: 2009},
//     {producer: 'Linkoln', power:280, owner:{name:'Roma',age:37, experience: 18 },price: 35000, year: 2017},
//     {producer: 'Ferrari', power:560, owner:{name:'Alfonce',age:28, experience: 5 },price: 225000, year: 2014},
//     {producer: 'Lexus', power:210, owner:{name:'Valik',age:24, experience: 6 },price: 11000, year: 2011},
//     {producer: 'Volkswagen', power:180, owner:{name:'Claus',age:29, experience: 8 },price: 13000, year: 2013},
//     {producer: 'Renault', power:140, owner:{name:'Andriy',age:35, experience: 15 },price: 9000, year: 2010},
//     {producer: 'Opel', power:195, owner:{name:'Misha',age:29, experience: 9 },price: 17000, year: 2018},
//     {producer: 'Fiat', power:120, owner:{name:'Den',age:22, experience: 3 },price: 7000, year: 2006}
// ]
//
// let drivers  =[
//     {name:'Vasyl', age:30, experience:12},
//     {name:'Petro', age:25, experience:6},
//     {name:'Ivan', age:38, experience:15},
//     {name:'Roman', age:45, experience:20},
//     {name:'Andrii', age:30, experience:4},
//     {name:'Oleh', age:20, experience:2},
//     {name:'Gnat', age:28, experience:4},
//     {name:'Danulo', age:19, experience:1},
//     {name:'Igor', age:30, experience:2}
//     ]
//
//
//
// carsWithOwners.forEach((car,i ) => {
//     if( !(i % 2)){
//         car.power +=car.power*0.1;
//         car.price += car.price*0.05;
//         if(drivers[i]){
//             car.owner = drivers[i]
//         }
//
//     }
//
// })
//
//
// let addedExpToDrivers = carsWithOwners.map( car =>{
//         if(car.owner.experience < 5 && car.owner.age >25){
//              car.owner.experience += 1;
//         }
//         return car
//         })
//
//
// let sumOftheCars = carsWithOwners.reduce((acc, car)=>(acc + car.price),0)
// console.log(sumOftheCars);
//
//
// console.log(addedExpToDrivers);
//
//
//
//
// // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// //     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// //     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// //
// // Пример:
// //     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.
//
//
//
//  let arr2 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
//
// let result = (arr, key) =>{
//     arrOfIndex = [];
//      newArr = arr.filter((elem, i) => {
//         if (elem === key){
//
//             arrOfIndex.push(i)
//             return elem;
//
//         }
//         })
//       if(newArr.length === 0){
//           return '-1'
//       }
//       return `Answer: MinIndex = ${minOfArr(arrOfIndex)}, MaxIndex = ${maxOfarr(arrOfIndex)}.`
//     // or
//    //  return `Answer: MinIndex = ${arrOfIndex[0]}, MaxIndex = ${arrOfIndex[arrOfIndex.length -1]}.`
// }
//
// function maxOfarr(arr){
//     let max  = arr[0];
//     for (let elem of arr) {
//         if(elem > max){
//             max = elem
//         }
//     }
//     return max
// }
//
// function minOfArr(arr){
//
//     let min  = arr[0];
//     for (let elem of arr) {
//         if(elem < min){
//             min = elem;
//         }
//     }
//     return min;
// }
//
// console.log(result(arr2, 4));
//
//
//
