// const getDate = (userId) => {
//     const url = `https://api.github.com/users/${userId}/events`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'Authorization': `token ${PROMISES_TOKEN}` /* the Syntax for referencing your token */
//         }
//     }
//
//     return fetch(url, options)
//         /* you can only return the fetch once it is INSIDE of the stream. */
//         .then((response) => {
//             return response.json() /* if it is NOT in a function, you simply return the response*/
//         })
//         .then((data) => {
//             return data[0].created_at;
//         })
// }

/// IIFE
//     (() => {
//         getDate('emilysmendes').then((user) => {
//             console.log(user);
//             /* In this example, getDate represents the FUNCTION, the ARGUMENT being passed is hard coded as 'emilysmendes' and the data we are passing is named USER. To see the new data, you can simply log the name of the new data which is named USER. */
//         })
//     })();
const getDate = async (userId = 0) => {
    try {
        const url = `https://api.github.com/users/${userId}/events`;
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `token ${PROMISES_TOKEN}`
            }
        }
        const response = await fetch(url, options);
        const user = await response.json();
        return user[0].created_at;
    } catch(error) {
        console.log(error);
    }
}

( async()=> {
    const logDate = await getDate(0);
    console.log(logDate);

})();

