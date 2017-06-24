/**
 * Created by Admin on 6/22/2017.
 */
/**
 *
 * @param {Array} cardArray - the set of cards
 * @returns {*}
 */
cardSort = function (cardArray) {
        var length = cardArray.length;
        var count=1;

        findLast(cardArray);

        SearchLoop:
        while (count<length-1) {
            for (var i=0; i<length-count; i++) {
                if (cardArray[i].placeTo === cardArray[length-count].placeFrom) {
                    cardArray.swap(length-count, i);
                    count++;
                    continue SearchLoop;
                }
                else {
                    window.alert("No match found!");
                }
            }
        }
        return cardArray;
};