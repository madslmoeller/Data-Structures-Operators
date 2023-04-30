'use strict';

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,


  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex, mainIndex, address, time}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${time} at ${address}`);
  },

  orderPasta: function(Ing1, Ing2, Ing3) {
    console.log(`Here is your delicious pasta with ${Ing1}, ${Ing2} and ${Ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*
  underscore_case
  first_name
  Some_Variable 
    calculate_AGE
  delayed_departure
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function() {

//   const text = document.querySelector('textarea').value;
//   const newLine = text.split('\n');

//   for (const [i, line] of newLine.entries()) {
//     const [firstLine, secondLine] = line.toLowerCase().trim().split('_');
//     const output = `${firstLine}${secondLine.replace(secondLine[0], secondLine[0].toUpperCase())}`

//     console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
//   }
// })


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase();

  for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';')

    const output = `${type.startsWith('_Arrival') ? '🟢' : ''}${type.startsWith('_Departure') ? '🟡' : ''}${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ').trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44);

    console.log(output);
  }


// const cardNumber = function(number) {

//   const str = number + '';
//   const lastFour = str.slice(-4);

//   return lastFour.padStart(str.length, '*');
// }

// console.log(cardNumber(1234567834569876));
// console.log(cardNumber(5678345698764545));



// const email = 'madsmoeller1995@hotmail.com';
// const loginEmail = '          MadSMoeLLer1995@hotmAil.cOm   \n';

// const emailtoLower = loginEmail.toLowerCase();
// const emailCorrect = emailtoLower.trim();
// console.log(emailCorrect);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceEU = '250,00€';
// console.log(priceEU);

// const priceUS = priceEU.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 99. Boarding door 99!';
// console.log(announcement);

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// const passenger = 'maDs';
// console.log(passenger);

// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const fixName = function(name) {
//   const toLower = name.toLowerCase();
//   const correctCase = toLower[0].toUpperCase() + toLower.slice(1);
//   console.log(correctCase);
// }

// fixName('maDs');
// fixName('fREdErIk');

// const checkMiddleSeat = function(seat) {

//   const s = seat.slice(-1);

//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('Unlucky brother, you did not get a middle seat');
//   }
// }

// checkMiddleSeat('20A');
// checkMiddleSeat('31B');
// checkMiddleSeat('42C');
// checkMiddleSeat('15E');

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow Card'],
//   [69, 'Red Card'],
//   [70,  'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow Card'],
// ]);

// // 1.
// //console.log(gameEvents.values());
// const events = new Set(gameEvents.values());
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else if (key > 90) {
//     console.log(`[OVERTIME] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// };










// const quiz = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Python'],
//   [4, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Well done! Of course it is JavaScript'],
//   [false, "C'mon.. you can do better than this.. Try again"]
// ]);

// console.log(quiz);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(quiz.get('question'));

// for (const [key, value] of quiz) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// };

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// quiz.get(quiz.get('correct') === answer);

// const rest = new Map();
// rest.set('name', 'Restauranto SKRID');
// rest.set('Opened in', 1968);
// rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
// rest.set('Open', 11).set('Close', 23);
// rest.set(true, 'We are open');
// rest.set(false, 'We are closed :(')

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get('Categories'));

// const time = 11;
// console.log(rest.get(time >= rest.get('Open') && time < rest.get('Close')));



// const ordersSet = new Set([
//   'Pizza',
//   'Burger',
//   'Pommes Frites',
//   'Kebab',
//   'Kebab',
//   'Pizza',
//   'Burger'
// ]);
// console.log(ordersSet);

// console.log(new Set('Mads'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Durum'));
// console.log(ordersSet.has('Kebab'));
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.add('Garlic Bread'));
// ordersSet.delete('Kebab');
// ordersSet.delete('Burger');
// // ordersSet.clear();
// console.log(ordersSet);


// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);


// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `

// for (const day of properties) {
//   openStr += `${day}, `
// }

// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.fri?.open);
// console.log(restaurant.openingHours?.sat?.open);

// Example
// const days = ['mon', 'tue', 'wed','thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open ${open} 'a clock`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// restaurant.orderPizza?.('Kebab', 'Salat', 'Creme fraiche', 'Cucumber', 'Tomato') ?? 'Method does not exist';

// const users = [
//   {name: 'Mads', email: 'madsmoeller1995@hotmail.com'}
// ];

// console.log(users[0]?.name ?? 'User array empty');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

// const myMenuLength = menu.length;
// console.log(myMenuLength);

// for (let i = 0; i < myMenuLength; i++) {
//   console.log(menu[i]);
//   // Do something
// }

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log('Mads' || 23); // Mads
// console.log('' || true); // true
// console.log('Jonas' || 40 || null); // Jonas
// console.log(undefined || null || '' || 'Hello' || 50 || false || true); // Hello

// restaurant.numGuests = 25;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests1 = restaurant.numGuests || 10;
// console.log(guests1);

// console.log('---- AND ----');
// console.log(0 && 'Mads');
// console.log(20 && 'Mads');
// console.log('Hello' && 25 && null & 'Mads');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Kebab', 'Salat', 'Creme fraiche', 'Cucumber', 'Tomato')
// }

// restaurant.orderPizza && restaurant.orderPizza('Kebab', 'Salat', 'Creme fraiche', 'Cucumber', 'Tomato')

// SPREAD because on RIGHT side of "="
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST because on LEFT side of "="
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [x, , y, ...rest] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(x, y, rest);

// Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(sat, weekdays);

// Functions

// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//   sum += numbers[i]
//   console.log(sum);
// };

// add(2, 5);
// add(4, 8, 10, 15);
// add(20, 40, 2);
// add(7, 8, 5, 24, 38, 5, 89);

// const z = [40, 20, 10];
// add(...z);

// restaurant.orderPizza('Kebab', 'Salat', 'Creme fraiche', 'Cucumber', 'Tomato');



// const arr = [7, 8, 9];
// console.log(arr);

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(restaurant.mainMenu);

// const newMainMenu = [...restaurant.mainMenu, 'Burger'];
// console.log(newMainMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredients 1?'), prompt('Ingredients 2?'), prompt('Ingredients 3?')
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = {foundedIn: 2010, ...restaurant, founder: 'Mads Møller'};
// console.log(newRestaurant);


// restaurant.orderDelivery({
//   time: '20:00pm',
//   address: 'Hagenæs 24',
//   starterIndex: 3,
//   mainIndex: 0
// });

// const {name, openingHours, categories} = restaurant;
// console.log(name, categories, openingHours);
// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, tags, hours);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 360;
// let b = 420;
// const obj = {a: 1, b: 2, c: 3};
// console.log(a, b);
// ({a, b} = obj);
// console.log(a, b);

// // nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// --- Without destructuring 
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// --- With destructuring
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [d, , e] = nested;
// console.log(d, e);
// const [d, , [e, f]] = nested;
// console.log(d, e, f);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r);

// const madsi = {
//   name: 'Mads',
//   birthYear: 1995,
//   gender: 'Male',

//   calcAge: function() {
//     return 2021 - this.birthYear;
//   }
// };

// console.log(madsi.calcAge?.() ?? 'Ingen metode her');

// Coding challenge

// 'game'-object with DATA
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
//     ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   },
// };

// ---- Coding challenge 2 starts here ----
// 1.
// for (const item of game.scored.entries()) {
//   console.log(`Goal ${item[0] + 1}: ${item[1]}`);
// }

// 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds)
//   average += odd;
//   average /= odds.length;
//   console.log(average);

// 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// ---- Coding challenge 1 starts here ----
// 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perísic']
// console.log(players1Final);

// // 5.
// const {
//   odds: {team1, x: draw, team2}
// } = game;

// console.log(team1, draw, team2);

// // 6.
// const printGoals = function(...players) {
//   console.log(`${players.length} goals scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7. 
// team1 < team2 && console.log('Team 1 is most likely to win');
// team1 > team2 && console.log('Team 2 is most likely to win');
