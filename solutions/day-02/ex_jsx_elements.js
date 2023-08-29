// Q 01] What is a JSX element?
  //- HTML embedded Javascript code

// Q 02] Write your name in a JSX element and store it in a name variable
const MyName = () => {
  let name = "Lakshan";

  return <h3>user's name is : {name}</h3>
}

// Q 03] Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const myDetatils = {
  title: "Mr.",
  full_name: "Lakshan Edirishinge",
  country: "Sri Lanka",
  gender: "male",
  email: "emlakshan92@yahoo.com",
  contact: 94772390192
}

const User = (props) => {
  const [ title, full_name, country, gender, email, contact ] = props.user_detatils;

  return (
    <div>
      <h1>user: {title}&nbsp;{full_name}</h1>
      <p>from: {country}</p>
      <p>gender: {gender}</p>
      <p>e-contact:{email}</p>
      <p>mobile: +{contact}</p>
    </div>
  );
}

// Q 04] Write a footer JSX element
const Footer = <div><p>This is the page Footer!</p></div>;