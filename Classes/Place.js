/**
 * Created by Admin on 6/22/2017.
 */
/**
 *
 * @param {string} name - name of the location
 * @constructor
 */
function Place(name){
    this.name = name;
    this.nextPlace = null;
    //this.isFirst = false;
    this.isLast = false;

    /*this.setFirst = function () {
        this.isFirst = true;
    }*/
    this.setLast = function () {
        this.isLast = true;
    };

    this.setNextPlace = function (placeName) {
        this.nextPlace = placeName;
    };
}