const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

                                        // My solution
// let userLanguage = users.filter(language => {
//     let newArray = []
//     if (users.languages > 3)
//     newArray.push(userLanguage)
// })
//
// let userEmail = users.email.map(userEmail)
//
// const reduceYears = users.reduce(users.yearsOfExperience)
// console.log(reduceYears);
//
// const totalYearsAverage = reduceYears/users.yearsOfExperience.length
// console.log(totalYearsAverage)
//
// const longestEmail = users.reduce((accumulator, currentValue, index) => {
//     let emailLength = users.email.length
//     if (emailLength > accumulator) {
//         accumulator = emailLength
//     }
//     return accumulator
// }, 0);
// console.log(longestEmail);
//
// const instructors = users.reduce((accumulator, currentValue, index) => {
//     let instructorNames = users.name
//     if ()
//
// }, 0);


                                                // Class Solution
const threeLang = users.filter(user => users.languages.length >= 3)
console.log('Users with three languages: =>',  threeLang);

const emailArray = users.map(user => user.email)
console.log('Users email addresses: =>', emailArray);

const reduceYears = users.reduce((accumulator, user, index )=>{
    accumulator += parseFloat(user.yearsOfExperience);
    if (users.length-1 === index) {
        accumulator = accumulator / users.length;
    }
    return accumulator;
}, 0);
console.log(reduceYears/users.length)

const longestEmail = users.reduce((accumulator, currentValue, index) => {
    let emailLength = users.email.length
    let accumulatorLength = 0
    if (emailLength > accumulatorLength) {
        accumulator = user.email;
    }
    return accumulator
}, 0);
console.log(longestEmail);

const userString = users.reduce((accumulator, currentValue, index) => {
    if (index === (users.length - 1)) {
        accumulator += `and ${user.name}.`
    } else {
        accumulator += `${user.name}, `
    }
    return accumulator
}, 'your instructors are: ')
console.log(userString);