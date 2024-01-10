const person = {
    name: "Ryan",
    lastname: "Ray",
    age: 22,
    nickname: "ryan123",
    hobbies: ["sing", "read", "run"],
    address: {
      street: "liberty avenue",
      city: "london",
    },
    married: false,
  };

  console.log(person.name);
  console.log(person.lastname);
  console.log(person.age);

  // Convert Object literal to String and parse it to JSON
  console.log(JSON.stringify(person));

  // Array of objects
  // const friends = [
  //   { name: "fabian", nickname: "fazt" },
  //   { name: "jesus", nickname: "jesus123" },
  //   { name: "maria", nickname: "maria24" },
  //   { name: "luis", nickname: "luis123" },
  //   { name: "oscar", nickname: "oscar12" },
  // ];

  // console.log(friends[0]);
  // console.log(friends[1]);
  // console.log(friends[2]);

  // person.friends = friends;

  // console.log(JSON.stringify(person.friends));

  // let output = "";

  // for (let i = 0; i < friends.length; i++) {
  //   output += `<li>${friends[i].nombre} su nickname es ${friends[i].nickname}</li>`;
  // }

  // document.getElementById("friends").innerHTML = output;

  // Fetch data

  fetch("/people.json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let output = "";

      for (let i = 0; i < data.people.length; i++) {
        output += `<li>${data.people[i].name} su nickname es ${data.people[i].nickname}</li>`;
      }

      document.getElementById("friends").innerHTML = output;
    });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      return data.json();
    })
    .then((users) => {
      console.log(users);
      let output = "";

      for (let i = 0; i < users.length; i++) {
        output += `<li>${users[i].name} su nickname es ${users[i].username}</li>`;
      }

      document.getElementById("users").innerHTML = output;
    });