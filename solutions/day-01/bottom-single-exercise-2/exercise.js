const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Q1
products.forEach(prd => {
  console.log(prd['product']+" : "+((typeof(prd['price'])=='number') ? prd['price'] : 0));
});

//Q2
products.forEach(prd => {
  console.log(
    `The price of ${prd['product']} is ${((typeof(prd['price'])=='number') ? prd['price']+" euros" 
    : "unknown")}.`);
});

//Q3
let sumOfPrices = 0;
products.forEach(prd => {
  sumOfPrices += ((typeof(prd['price'])=='number') ? parseFloat(prd['price']) : 0);
});
console.log("Sum of Products: "+sumOfPrices+" euros.");

//Q4
let prices = [];
products.map(prd => prices.push(((typeof(prd['price'])=='number') ? parseFloat(prd['price']) : 0)));
console.log(prices);

//Q5
console.log(products.filter(prd => (typeof(prd['price'])=='number')));

//Q6
console.log(
  products.filter(prd => (typeof(prd['price'])=='number')).
  map(_prd => _prd['price']).reduce((a,b) => a+b)
);

//Q7
console.log(products.reduce((a,b) => a+((typeof(b['price'])=='number') ? b['price'] : 0),0));

//Q8
console.log(products.find(prd => (typeof(prd['price'])!='number')));

//Q9
console.log(products.findIndex(prd => (typeof(prd['price'])!='number')));

//Q10
console.log(products.some(prd => (typeof(prd['price'])!='number')));

//Q11
console.log(products.every(prd => (typeof(prd['price'])!='number')));

//Q12
  /* forEach -> a higher order function that works as a loop only on arrays 
                + execute method/s on each element of the array, one at a time. */
  /* map -> iterate through an array and manipulate the data one element at a time without affecting the original array
            + return a new array with manipulated elements of the original. */
  /* filter -> iterate through an array and filter out each element according to a given criteria 
              + return a new array with filtered elements as the result. */
  /* reduce -> iterate through all the elements of an array and work them on a common.
              + returns a single associated value based on those work-results. */

//Q13
  /* filter -> iterate through an array and filter out each element according to a given criteria up to
              the given array-length. */
  /* find -> iterate on an array but returns the first element that equals to the given condition */
  /* findIndex -> iterate on an array but returns the first element's index that equals to the given condition */

//Q14
  /* some -> checks each an every element of an array met the given condition.
              + returns a boolean value depend on one or more given array elements */
  /* every -> same as 'some' method but result is depend on each an every element of the given array
              + returns single boolean values just as method 'some'. */
