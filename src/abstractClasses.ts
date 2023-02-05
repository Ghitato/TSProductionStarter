abstract class takePhotos { //Once we define a class as abstract, we cannot declare any new objects
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ){}

    abstract getSepia(): void //By adding abstract we are not providing a definition
    getReel(): number{
        //Some complex calculation
        return 8
    }
} 

class fakeInstagram extends takePhotos {
    constructor ( 
        public cameraMode: string, 
        public filter: string, 
        public burst: string){
            super(cameraMode, filter, burst) //Common syntax --> The super call
        }

        getSepia(): void{
            console.log("It happened")
        }
}

const user = new fakeInstagram("cameraMode Test", "filter Test", "burst Test")
user.getReel()
