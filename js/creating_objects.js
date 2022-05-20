// creating object using obj literal
let car = {
    noOfWheels: 4,
    noOfDoor: 2,
    engineCapacity: "1390cc",
    model: "city",
    brand: "honda",
    makeYear: 2018,
    start: function () {
        console.log("car is starting");
    },
    leftTurn: function () {
        console.log("car is taking left turn");
    },
    rightTurn: function () {
        console.log("car is taking right turn");
    },
    stop: function () {
        console.log("car has stopped");
    }

}

console.log(`CAR: ${car.brand} ${car.model} ${car.makeYear}`);
car.start();
car.leftTurn();
car.rightTurn();
car.stop();

// creating by new Object 

let room = new Object(
    {
        noOfDoor: 2,
        noOfWindow: 3,

        openDoor: function () {
            console.log("door has opened")
        },
        closeDoor: function () {
            console.log("door has closed")
        }



    }
)

console.log( `Room : ${room.noOfDoor} ${room.noOfWindow}`);
room.closeDoor();
room.openDoor();


//Create an object using Constructor Function

function Vehicle(color) {
    this.model= "Duster",
    this.brand ="Renault",
    this.color = color;
    this.start= function () {
        console.log("car is starting");
    },
    this.leftTurn= function () {
        console.log("car is taking left turn");
    }

}

let vehicle1 = new Vehicle("Blue");
let vehicle2 = new Vehicle("Red");
console.log(vehicle1);
console.log(vehicle2);
console.log(`CAR: ${vehicle1.brand} ${vehicle1.model} ${vehicle1.color}`);
console.log(`CAR: ${vehicle2.brand} ${vehicle2.model} ${vehicle2.color}`);