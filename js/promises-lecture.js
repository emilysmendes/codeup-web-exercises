const getPerson = (id = 1) => {
    const url = `https://swampi.dev/api/people/${id}/`;
    const options = {
        /* The default method for a fetch is a 'GET' request so stating an options variable is sometimes redundant. The only time it is required is when you are changing the token or the request or adding more info. It doesn't hurt to build the options anyway just to be safe. */
        method: "GET",
        headers: {
            "Content-Type": "applications/json"
        }
        /* Most of the things that go into the options variable will be objects except for the method which could be GET or POST, etc. */
    }
    return /* in order to return the data OUTSIDE of the function, you must return the fetch itself. you cannot return a data in the same stream, therfor you must push it outside of the stream. */fetch(url /*where you are going to find the data or object */, options /* the logic behind what you are trying to do to your data*/)
        .then((response/* This is what you're getting from the data, you are getting a response. You can name it whatever you want*/) => {
            return /*This is how you want the data to be returned. 95% of the time it is returned in json and this is the first and most IMPORTANT step in using the .then() method */ response.json()
        })
}

const getFilm = (url) => {
    const filmURL = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "applications/json"
        }
    }
    return fetch(url, options)
        /* Remember to return the fetch itself in order to push it outside of the function*/
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            alert(error.message);
        })
}

// (() => { /* IIFE (Immediately invoked function expression. With IIFE statements, we are able to immediately run function without having to use JQuery or call the function itself */
// getPerson(1) /* by changing the number you can cycle through the different objects as if you are using an index */.then((person) => {
//     /* after pushing the returned data outside of the stream, you must now add conditionals to your returned data */
//     console.log(person);
//     })
// getFilm(person.films[0]/* previously this was called URL but now we need to call the data*/).then((data) => {
//         console.log(film);
// })
// })();

// ASYNC FUNCTION
/* traditional declaration , the async comes first */
async function getFilm(url {
}

)

/* arrow declaration*/
const getFilm = async (url) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "applications/json"
        }
    }
    const response = await fetch(url, options);
    const data = response.json();
    return data;
}
(() => {
    getFilm(/*insert URL here*/ 'https://swampi.dev/api/').then((film) => {
        console.log(film);

    })
})();

//     ^^^^^^ OR vvvvvvvvvvv //

(async ()=> {
    const luke = await getFilm('URL');
    console.log(luke)
})();

