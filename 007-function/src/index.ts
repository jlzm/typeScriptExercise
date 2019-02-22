let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
         return () => {
             let pickedCard = Math.floor(Math.random() * 52);
             let pickedSuit = Math.floor(pickedCard / 13);
              return {
                  suit: this.suits[pickedSuit], 
                  card: pickedCard % 13
              };
         }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card ' + pickedCard.card + ' of ' + pickedCard.suit);

//this类型指定
interface UIElement {
    addClickListtener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
       console.log('click');
    }
}

let h = new Handler();
uiElement.addClickListtener(h.onClickBad);