function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function(){
        document.write(this.make + " " + this.model + " " + "released" + " " + "in" + this.year + "<br/>" + "<br/>")
    };
}

function Person(name,age,cars){
    this.name = name;
    this.age = age;
    this.driveCar = function(car){
        document.write(this.name + " " + "is" + " " +this.age + " " + "years old and he has a car, which is" +" " + car.make + " " + car.model + " " + "released" + " " + "in" + car.year)
    }
}


var mashina = new Car("chevrolet","impala",1967)
mashina.getCarInfo();

var tom = new Person("tom", 24)
tom.driveCar(mashina);