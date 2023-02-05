"use strict";
class takePhotos {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReel() {
        //Some complex calculation
        return 8;
    }
}
class fakeInstagram extends takePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst); //Common syntax --> The super call
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("It happened");
    }
}
const user = new fakeInstagram("cameraMode Test", "filter Test", "burst Test");
user.getReel();
