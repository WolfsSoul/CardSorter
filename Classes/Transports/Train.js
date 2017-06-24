/**
 * Created by Admin on 6/22/2017.
 */
function Train(car, seat) {
    this.car = car;
    this.seat = seat;
}

Train.prototype = new Transport();