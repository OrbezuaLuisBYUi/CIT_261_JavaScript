/**
 * Created by jloin on 9/23/2019.
 */



//this class "Car" is the father class
class Car{
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
//this class Model is the daughter of class Car, we know because the keyword "extends"
class Model extends Car {
    constructor(brand, mod, year, miles) {
        super(brand); // super is calling father class constructor.
        this.model = mod;
        this.year = year;
        this.miles = miles;
    }
    show() {
        return this.present() + ', your vehicle model is: ' + this.model + ', and the year is: '+ this.year + ' And your car has ' + this.miles + ' miles ';
    }
    sellCar(){
        var date = new Date();
        var currentYear = date.getFullYear();
        var sellData = {brand:this.present(), model:this.model, year:this.year, miles: this.miles};
        var txt = "";
        var x;
        for (x in sellData) {

            txt += sellData[x];
        }
        return txt + " The last price will be: " +parseFloat(((this.miles - this.year) - (currentYear - this.year)) / (currentYear - this.year)).toFixed(2);
    }
}
function informationCars(){
    var brand = prompt("Enter brand of car");
    var model = prompt("Enter model for your car");
    var year = prompt( "Enter year for the car");
    var miles = prompt( "Enter the miles from your car");

    mycar = new Model(brand, model, year,miles);
    document.getElementById("resultCars").innerHTML = mycar.show();
    //var sell = prompt("Would you like to sell your vehicle?")
    if (confirm('Would you like to sell your vehicle?')) {
    //Save it!
        alert("Your car is available to sell for the amount of: " + mycar.sellCar());
    }
    else
    {
        alert( "Please if you change your mind, we will be here to sell your car, Thank you!")
    }
}

