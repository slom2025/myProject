

function isPrime(value) {
    for (let i = 2; i <= value / 2; ++i) {
        if (value % i === 0) {
            return false;
        }
    }

    return true;
}

function getNthPrime(n) {
    let currentValue = 1;
    let primeNumber = 0;

    while (primeNumber < n) {
        let a = isPrime(currentValue);

        if (a === true) {
            primeNumber += 1;
        }
        
        if (primeNumber === n) {
            return currentValue;
        }

        currentValue += 1;
    }

    return null;
}



let t = getNthPrime(5);
let d = getNthPrime(110);


let students = [
    {name: 'Vasya', age: 20}, 
    {name: 'Petya', age: 19},
];



let petya = students.find(student => student.name == 'Petya' ? true : false);

let badStudents = students.map(student => {
    student.name = student.name + ' Durak';
    return student;
});