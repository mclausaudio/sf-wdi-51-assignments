let foodInventory = [

];

let InventoryItem = function(name, img, category, price) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.category = category;
}

let cereal = new InventoryItem('Cereal', './images/cereal.jpeg', 'food', 1.99);
foodInventory.push(cereal);
let sushi = new InventoryItem('Sushi', './images/sushi.jpeg', 'food', 12);
foodInventory.push(sushi);
let tacos = new InventoryItem('Tacos', './images/tacos.jpeg', 'food', 4);
foodInventory.push(tacos);
let ramen = new InventoryItem('Ramen', './images/ramen.jpeg', 'food', 8);
foodInventory.push(ramen);
let pho = new InventoryItem('Pho', './images/pho.jpeg', 'food', 9);
foodInventory.push(pho);


let beer = new InventoryItem('Beer', './images/beer.jpeg', 'drink', 3.50);
foodInventory.push(beer);
let wine = new InventoryItem('Wine', './images/wine.jpeg', 'drink', 4);
foodInventory.push(wine);
let coffee = new InventoryItem('Coffee', './images/coffee.jpeg', 'drink', 3);
foodInventory.push(coffee);
let lemonade = new InventoryItem('Lemonade', './images/lemonade.jpeg', 'drink', 2.50);
foodInventory.push(lemonade);
let sparklingwater = new InventoryItem('Sparkling Water', './images/sparklingwater.jpeg', 'drink', 1.99);
foodInventory.push(sparklingwater);

let chips = new InventoryItem('Chips', './images/chips.jpeg', 'snack', 1.50);
foodInventory.push(chips);
let peas = new InventoryItem('Wasabi Peas', './images/peas.jpeg', 'snack', 2);
foodInventory.push(peas);
let pretzel = new InventoryItem('Pretzel', './images/pretzel.jpeg', 'snack', 3);
foodInventory.push(pretzel);
let peanuts = new InventoryItem('Peanuts', './images/peanuts.jpeg', 'snack', 2);
foodInventory.push(peanuts);
let trailmix = new InventoryItem('Trail Mix', './images/trailmix.jpeg', 'snack', 1.25);
foodInventory.push(trailmix);
