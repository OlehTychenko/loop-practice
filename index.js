// task 1

const USERS = [
    {
        name: 'John',
        points: 80
    },
    {
        name: 'Bill',
        points: 77
    },
    {
        name: 'David',
        points: 68
    },
    {
        name: 'Ryan',
        points: 88
    },
    {
        name: 'Nick',
        points: 95
    },
];

let avaragePoints = 0;

for (let i = 0; i < USERS.length; i++) {
    avaragePoints += USERS[i].points;
};

avaragePoints /= USERS.length;

avaragePoints <= 60 ? console.log('F')
    : avaragePoints > 60 && avaragePoints <= 70 ? console.log('D')
        : avaragePoints > 70 && avaragePoints <= 80 ? console.log('C')
            : avaragePoints > 80 && avaragePoints <= 90 ? console.log('B')
                : console.log('A');

// task 2

let sum = 0;

for (let i = 0; i < 1000; i += 5) {
    sum += i;
}


for (let i = 0; i < 1000; i += 3) {
    sum += i;
}

console.log(sum);

// task 3..

const COUNT_OF_LOOPS = 5;

let res = '';

for (let i = 1; i <= COUNT_OF_LOOPS; i++) {
    for (let j = 1; j <= i; j++) {
        res += '* '
    }
    res += `\n`;
}

console.log(res);