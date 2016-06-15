
function Car(plateNumber){
    var speed = 3;

    function dupa() {
        console.log('dupa');
    }

    this.plateNumber = plateNumber;
    this.position = {x: 0, y: 0};

    this.drive = function (dX, dY) {
        this.position.x += dX * speed;
        this.position.y += dY * speed;
        console.log('car', this.plateNumber , 'driving to', this.position.x, 'x', this.position.y);
    };
}

Car.prototype.washYourself = function () {
    console.log('car', this.plateNumber, 'has washed itself');
};


var car1 = new Car('GDA12345');
car1.drive(5, 10);
car1.washYourself();