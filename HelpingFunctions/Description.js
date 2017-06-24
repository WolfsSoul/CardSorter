/**
 * Created by Admin on 6/23/2017.
 */
/**
 *
 * @param {Array} cardArray - the set of cards
 */
description = function (cardArray) {
    var length = cardArray.length;
    for (var i = 0; i<length; i++) {
        return console.log("From " + cardArray[i].placeFrom + " to " + cardArray[i].placeTo + " take " +
            cardArray[i].transportType + ". Journey details: " + cardArray[i].transportDetails);
    }
};
