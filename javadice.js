var pizza = {
    crust : ["deep dish","hand tossed"],
    sauce : ["traditional","marinara"],
    protien :["pepperoni","sausage","none"],
    cheese : ["mozzarella", "feta"],
    toppings : ["mushroom", "olives","onions","none"],
    
    
}
function pizzaOven(crust, sauce, protein, cheese, toppings){
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.protein = protein;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;

}
var s1 = pizzaOven("deepdish", "traditional", ["pepperoni" ,"sausage"],"mozzarella","none");
var s2 = pizzaOven("hand tossed", "marinara","none", ["mozzarella","feta"], ["mushroom","olives","onions"]);
var s3 = pizzaOven("deepdish", "marinara", "pepperoni","mozzarella","olives");
var s4 = pizzaOven("hand tossed", "traditional", ["pepperoni" ,"sausage"],["mozzarella","feta"],["mushroom","olives","onions"]);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);