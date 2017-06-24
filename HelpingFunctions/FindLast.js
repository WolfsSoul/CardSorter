/**
 * Created by Admin on 6/22/2017.
 */
/**
 *
 * @param {Array} cardArray - the set of cards
 * @returns {*}
 */
findLast = function (cardArray) {
    var length = cardArray.length;
    for (var i = 0; i<length; i++) {
        if (!placeMap[cardArray[i].placeTo]) {
            placeMap[cardArray[i].placeTo] = new Place(cardArray[i].placeTo);
            placeMap[cardArray[i].placeTo].setLast();
            cardArray.swap(length - 1, i);
        }
    }
    return cardArray;
};