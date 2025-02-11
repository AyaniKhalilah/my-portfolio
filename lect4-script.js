const user = {
    name: "Alice",
    age: 25,
    gpa: 3.6
  };
  
  const {name, age, gpa} = user;
  console.log(name, age, gpa);
  
  const numbers = [1, 2, 3, 4, 5];
  let [a, b, c] = numbers;
  console.log(c);
  const [one, two] = [1, 2];
  console.log(one, two);
  
  [a, b, d, ...c] = [1, 2, 3, 4, 5, 6];
  console.log(a);
  console.log(b);
  console.log(c);
  
  const newNumbers = [...numbers, 4, 5];
  console.log(newNumbers);
  
  const printArguments = (...args) => {
    console.log("Arguments passed:", args);
  };
  
  printArguments(1,2,3);
  
  printArguments("alice", "bob", "charlie");
  
  const userJSON = JSON.stringify(user);
  console.log(userJSON);
  
  const parsedUser = JSON.parse(userJSON);
  console.log(parsedUser);
  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        console.log(`ID: ${post.id}, Title: ${post.title}`);
      })
    })
    .catch((error) => console.log("Error fetching data: ", error));