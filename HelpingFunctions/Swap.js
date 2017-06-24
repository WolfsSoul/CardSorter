/**
 * Created by Admin on 6/22/2017.
 */
/**
 *
 * @param x - an element of the array
 * @param y - an element of the array
 * @returns {Array}
 */
Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
};