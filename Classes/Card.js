/**
 * Created by Admin on 6/22/2017.
 */
/**
 *
 * @param {string} from - the place of departure
 * @param {string} to - the place of arrival
 * @param {string} type - the type of transportation
 * @param {string} details - transportation details
 * @constructor
 */
function Card(from, to, type, details) {
    this.placeFrom = from;
    this.placeTo = to;
    this.transportType = type;
    this.transportDetails = details;

    cardArray.push(this);

    if (!placeMap[this.placeFrom]) {
        placeMap[this.placeFrom()] = new Place(this.placeFrom());
        placeMap[this.placeFrom()].setNextPlace(this.placeTo());
    }

    transportMap[this.placeFrom()] = new Transport(this.transportType, this.transportDetails);
}