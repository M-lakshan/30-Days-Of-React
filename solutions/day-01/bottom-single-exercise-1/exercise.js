const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: ['HTML','CSS','JavaScript','React','Redux',
    'Node','MongoDB','Python','D3.js',],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

function getPersonInfo(current_obj) {
  let obj = Object.assign(current_obj);
  const arrToString = (arr,placehold=' ') => {
    return arr.join(', ').substring(0,(arr.join(', ').lastIndexOf(', ')))
      +' and'+placehold+arr[arr.length-1];
  }

  return `${obj.firstName+' '+obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is `+
    `${((obj.job[0].match[/[aeiou]/]) ? 'an ' : 'a ')+obj.job}. `+
    `He teaches ${arrToString(obj.skills)}. He speaks ${arrToString(obj.languages," a little bit of ")}.`
}

console.log(getPersonInfo(person));