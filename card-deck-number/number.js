

// You have to use jQuery inside of the .then() or else the values will be undefined. That's because JS will just charge ahead.

let first, second, third; 

let url = "http://numbersapi.com/";

axios.get(url + "7?json")
.then(res => {
    first = res.data.text
    $('#results').append(`<li>${first}</li>`);
    return axios.get(url + "8?json")
      })
.then(res => {
    second = res.data.text
    $('#results').append(`<li>${second}</li>`);
    return axios.get(url + "9?json")
    })
.then(res => {
    third = res.data.text
    $('#results').append(`<li>${third}</li>`);
    })
.catch(err => {
    console.log(err);
    });

// Looping axios requests

    for(i = 0; i < 4; i++) {
        axios.get(url + "7?json")
        .then(res => {
            fact = res.data.text
            $('#four-facts').append(`<li>${fact}</li>`);
              })
        .catch(err => console.log(err));
    }