//#Exercise

//Q1
const reptelians = [];

//Q2
const mamels = ["elephant", "zebra", "lion", "dolphin", "blue-whale"];

//Q3
console.log(mamels.length);

//Q4
console.log(mamels[0]);
console.log(mamels[parseInt(mamels.length/2)]);
console.log(mamels[mamels.length-1]);

//Q5
const mixedDataTypes = ["ABC", 'A', 2, ['abc'], false, {name: "ted"}];
console.log(mixedDataTypes.length > 5);

//Q6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//Q7
console.log(itCompanies);

//Q8
console.log(itCompanies.length);

//Q9
console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);

//Q10
for(let company of itCompanies) {
  console.log(company)
}

//Q11
itCompanies.forEach(company => console.log(company.toUpperCase()));

//Q12
console.log(itCompanies.join(", "));

//Q13
console.log((itCompanies.includes("Amazon") ? "Amazon" : "company is not found"));

//Q14
let filtered_companies = [];
let char_count = 0;
for(let company of itCompanies) {
  company.split('').forEach(char => (char=='o') && char_count++);
  if(char_count>1) { filtered_companies.push(company); }
  char_count = 0;
}
console.log(filtered_companies);

//Q15
console.log(itCompanies.sort());

//Q16
console.log(itCompanies.reverse());

//Q17
console.log(itCompanies.slice(0,3));

//Q18
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

//Q19
let slice_removals = [];
if(itCompanies.length%2==0) {
  console.log(itCompanies.slice((itCompanies.length/2)-1,(itCompanies.length/2)+1));
} else {
  console.log(itCompanies.slice(parseInt(itCompanies.length/2),parseInt(itCompanies.length/2)+1));
}

//Q20
console.log(itCompanies.splice(0,1));

//Q21
let splice_removals = [];
if(itCompanies.length%2==0) {
  splice_removals = itCompanies.splice((itCompanies.length/2)-1,2);
} else {
  splice_removals = itCompanies.splice(parseInt(itCompanies.length/2),1);
}
console.log((splice_removals));

//Q22
console.log(itCompanies.splice(itCompanies.length-1,itCompanies.length));

//Q23
console.log(itCompanies.splice());
