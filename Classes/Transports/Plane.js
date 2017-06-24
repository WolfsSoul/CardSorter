/**
 * Created by Admin on 6/22/2017.
 */
function Plane(gate, seat) {
    this.gate = gate;
    this.seat = seat;
}

Plane.prototype = new Transport();