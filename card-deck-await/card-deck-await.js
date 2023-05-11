
let allCards;

async function getNewCards() {
    let baseURL = "https://deckofcardsapi.com/api";
    let new_deck = await axios.get(`${baseURL}/new/`);
    let deckId = new_deck.data.deck_id;
    let shuffle_deck = await axios.get(`${baseURL}/deck/${deckId}/shuffle/`);
    let get_cards = await axios.get(`${baseURL}/deck/${deckId}/draw/?count=52`);
    let card_array = get_cards.data.cards;
    return(card_array) 
  }

getNewCards().then(cards => {
    allCards = cards;

    let counter = 0;

    $('#card-container').on('click', "button", function(event) {
        // Prevent the default link behavior
            event.preventDefault();
    
            $('#image-container').empty()
            $('#image-container').append(`<img src=${cards[counter].image}>`)
    
            counter++
            console.log(counter)
            if(counter === 51) {
                $('#card-container').off();
            }
    })
})




