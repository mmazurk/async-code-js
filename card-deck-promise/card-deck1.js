

// Parts 1 and 2

let url = "https://deckofcardsapi.com/api/deck/";

let deck_id, card1value, card1suit, card2value, card2suit

axios.get(url+"new/shuffle/?deck_count=1").then(function(response) {
    deck_id = response.data.deck_id;
    console.log(response)
    return axios.get(url+`${deck_id}/draw/?count=1`)
}).then(function(response) {
    console.log(response)
    card1suit = response.data.cards[0].suit
    card1value = response.data.cards[0].value
    //console.log("We have the " + value + " of " + suit)
    return axios.get(url+`${deck_id}/draw/?count=1`)
}).then(function(response) {
    console.log(response)
    card2suit = response.data.cards[0].suit
    card2value = response.data.cards[0].value
    console.log(`We have the ${card1value} of ${card1suit} and ${card2value} of ${card2suit} from deck ${deck_id}`)
}).catch(function(error) {
    console.log(error)
});

// Part 3

// axios.get('https://deckofcardsapi.com/api/deck/new/shuffle').then(function(response) {
//     deck_id = response.data.deck_id;
//     return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
// }).then(function(response) {

//     let counter = 0
//     $('#card-container').on('click', "button", function(event) {
//         // Prevent the default link behavior
//             event.preventDefault();
            
//             $('#image-container').empty()
//             $('#image-container').append(`<img src=${response.data.cards[counter].image}>`)

//             counter++
//             console.log(counter)
//             if(counter === 52) {
//                 $('#card-container').off();
//             }
  
//     })
// })