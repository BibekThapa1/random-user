let url = "https://randomuser.me/api/";

const fetchUser = async () => {
  let response = await fetch(url);
  let data = await response.json();
  let person = data.results[0];

  // Destructuring
  const { first, last } = person.name;
  const { email, phone } = person;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  const {
    login: { password },
  } = person;
  const { large: img } = person.picture;

//   returning the values
  return {
    name: `${first} ${last}`,
    email,
    phone,
    age,
    street: `${number} ${name}`,
    password,
    img,
  };
};


export default fetchUser;