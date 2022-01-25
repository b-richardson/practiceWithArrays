
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1981, end: 2003},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 2009, end: 2010},
  {name: "Company Five", category: "Technology", start: 1987, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for(let i = 0; i< companies.length; i++){
//   console.log(companies[i]);
// }

// For Each

// companies.forEach(function(company){
//   console.log(company.name);
// });


// Filter

// With for loop below

// let canDrink =[];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
//
//
// console.log(canDrink);

// With filter BELOW

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// })

// console.log(canDrink);

// With simple arrow function below this!

// const canDrink = ages.filter(age => age >= 21)
//
//
// console.log(canDrink);


// Filter Retail companies

// const retailCompanies = companies.filter(function(comapny) {
//   if(comapny.category === 'Retail'){
//     return true;
//   }
// })
//
// console.log(retailCompanies);

// Filter usingarrow function again

// const retailCompanies = companies.filter(company => company.category === 'Retail')
//
//
//
// console.log(retailCompanies);

// Get 80's retailCompanies

//
// const eightiesComps = companies.filter(company => (company.start >= 1980 && company.start < 1990));
//
// console.log(eightiesComps);

// Get companies that lasted 10 years or more.

// for loop below

// const tenYear = companies.filter(function(company) {
//   if (company.end - company.start >= 10){
//     return true;
//   }
// })
//
// console.log(tenYear);

// SIMPLE ARROW BELOW
// const tenYear = companies.filter(company =>(company.end - company.start >= 10))
//
// console.log(tenYear);


// MAP METHOD below

// Create an array of Company Names

// const companyName = companies.map(function(company){
//   return company.name;
// })
//
// console.log(companyName);

// const testMap = companies.map(function(company){
//   return '${company.name} [${company.start} - ${company.end}]';
// })

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
//
//
//
// console.log(testMap);


// const agesSquare = ages.map(age => Math.sqrt(age))
//
// console.log(agesSquare);


// SORT METHOD below
// sort companies by ages

// const sortedCompanies = companies.sort((a,b ) => a.start >b.start ? 1 : -1)
//
// console.log(sortedCompanies);
//

// REDUCE METHOD below

//
// const ageSum = ages.reduce(function(total, age){
//   return total + age;
// }, 0)
//
// console.log(ageSum);

// short reduce METHOD

const ageSum = ags.reduce(total, age) => total + age, 0)
  
