

(() => {
    const url = '../data/houses.json';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
    // ^^^ this is a promise so it stores it until it is requested. it is essentially a ticket that eventually will be redeemed. You have to be very specific when you are giving data to fetch
        .then(response => {
            // ^^ this is the instructions for the request. This will detail the action in how you'd like the response to perform and for this example you are requesting it to be returned in json
            return response.json();
        })
        .then(houses => {
            console.log(houses);
            // ^^ this is a console log to confirm you are pulling the correct data you are trying to traverse and locate within the file . In this example you are pulling info from the Houses array
            // the problem is asking you to display new data, in order to do that you will need to create a new array and utilize a for loop to display the data you are trying to filter through

                                                // OLD WAY vvv //
            // const housesTwoBedPlus = [];
            // for(let house of houses) {
            //     const numberOfBeds = parseFloat(house.beds)
            //     // ^^ in the data, house.beds is a string so you must parseFloat it to make it an integer
            //     if (numberOfBeds >= 2) {
            //         housesTwoBedPlus.push(house)
            //         // ^^ if the loop confirms your house object has more than 2 beds, you can push() the new array and only include all the house objects that fit that conditional
            //     }
            // }
                                               // NEW WAY vvv //
            const housesTwoBedsPlus = houses.filter(house => {
                const numberOfBeds = parseFloat(house.beds)
                const numberOfBaths = parseFloat(house.baths)
                // ^^ you can add any number of conditionals to refine your search as well
                return  numberOfBeds >= 2 && numberOfBaths >= 3;
                // ^^ this is the same as the above for loop, essentially it is a simpler way to take the houses array, filter through it and return only the house objects that have more than 2 beds. This is the shorter syntax of looping through an array

            })
            console.log(housesTwoBedsPlus)
            // ^^ you can console log your new array to check what data passed the conditional


            // Map Method

            //When do you want to use a Map?
            //      When you want to TRANSFORM each element in an array and RETURN a new array with the transformed elements


            let housesPriceRange = houses.map(house => {
                const priceRange = 200_000;
                const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes!';
                 // ^^ This is a turnary statement. The ? represent what your boolean options are, the colon (:) separates your two options. In this case, 'Nope' means true and 'Yes!' means false.
                if (parseFloat(house.price) > priceRange) {

                }
                // ^^ you can add conditions to
                const newValue = `
                Address: ${house.address}
                Can I afford it: ${canBuy};
                `
                return newValue;
                // ^^ this will return all objects and only display the address and if you can buy it
            }).filter(house => house);
                // ^^^ this will filter through your map and return only the reformatted objects that fit your criteria. Without the filter, it will return all objects whether it has a price attached to it or not, as some objects may not include the {house.price}, in this case it will come back as undefined.
            for(let house of housesPriceRange) {
                // ^^^ this will loop through your new array that will transform your original array and display if you can afford it and what the address is
                console.log(housesPriceRange);
            }

            // Reduce Method

            // Find the most expensive house
            const largestPrice = houses.reduce(/* function parameter */(accumulator, currentValue, index) => {
                let price = parseFloat(house.price)
                if (price > accumulator) {
                    accumulator = price;
                    // ^^ this is saying if the accumulator is LESS than the price, make the price value the new accumulator value. For example, 0 will always be less so it will take on a new value as it loops through the array and will eventually become the highest price.
                }
                return accumulator
             },
                /* This is the initial value for the accumulator */ 0 );
            console.log(largestPrice);

            const cheapestPrice = houses.reduce(/* function parameter */(accumulator, currentValue, index) => {
                    let price = parseFloat(house.price)
                    if (price > accumulator) {
                        accumulator = price;
                    }
                    return accumulator
                },
                /* This will start your loop at the first object in the array and will only change once it finds the object with a lower price, so on and so forth until it eventually finds the cheapest house */ parseFloat(houses[0].price) );
            console.log(cheapestPrice);

            const allPrice = houses.reduce(/* function parameter */(accumulator, house/*currentValue */, index) => {
                    let price = parseFloat(house.price)
                    if (price > accumulator) {
                        accumulator += price;
                        return accumulator
                    }
                },
                /* This will start your loop at the first object in the array and will only change once it finds the object with a lower price, so on and so forth until it eventually finds the cheapest house */ parseFloat(houses[0].price) );
            console.log(allPrice);

                                                    // Reduce: to come to a single variable or come to a single conclusion 
            const dashboardObj = house.reduce((accumulator, currentValue, index) => {
                accumulator.totalHouses+= 1;
                let price = parseFloat(house.price);
                if(price > accumulator.mostExpensive) {
                    accumulator.mostExpensive = price;
                    return accumulator;
                }
            }, {
                totalHouses: 0,
                mostExpensive: 0,
                cheapestHouse: parseFloat(house[0].price),
                totalMarketValue: 0
            });
            console.log(dashboardObj);
        })
})();