const coffeeMenu = require ("./coffee_data")

//2. Print an array of all the drinks on the menu.


const allDrinks = (item) => { //declare variable for the item
    return item.name //return the item value
}
console.log (coffeeMenu.map(allDrinks)) // print array of item values from coffeeMenu array using the map method



//3. Print an array of drinks that cost 5 and under.

const drinksUnderFive = (item) => {
    return item.price <= 5
} 
console.table(coffeeMenu.filter (drinksUnderFive))




//4. Print an array of drinks that are priced at an even number.

const pricedEven = (item) => {
    return item.price % 2 == 0
}
console.table (coffeeMenu.filter (pricedEven))




//Print drink prices in a new array 
//I had to do this for step 5

const drinkCost = (item) =>{
    return item.price
}
const drinkPrices = coffeeMenu.map(drinkCost)

console.log (drinkPrices)



//5. Print the total if you were to order one of every drink.

const drinksTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue
}
const drinksTotalPrice = drinkPrices.reduce(drinksTotalCost)
console.log (drinksTotalPrice)




//6. Print an array with all the drinks that are seasonal.

const seasonalCoffee = (item) => {
    return item.seasonal === true
}
const seasonalDrinks = coffeeMenu.filter(seasonalCoffee)
console.log (seasonalDrinks)




//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".


const withBeans = (item) => {
    return item.name
}
const withImported = seasonalDrinks.map(withBeans)

console.log(withImported[0]  + " with imported beans")
console.log(withImported[1] + " with imported beans")


