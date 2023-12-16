const data = [
    { name: "john", age: 27, profession: "developer" },
    { name: "jane", age: 24, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter((person) => person.profession === "developer");
    developers.forEach((developer) => {
      console.log(
        `Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`
      );
    });
  }
  
  // 2. Add Data
  function addData() {
    let personName = prompt("Enter Name.");
    let personAge = parseInt(prompt("Enter age."));
    let personProfession = prompt("Enter Profession.");
  
    if (!personName || isNaN(personAge) || !personProfession) {
      alert("Invalid input. Please enter valid details.");
      return;
    }
    let newObj = {
      name: personName,
      age: personAge,
      profession: personProfession,
    };
    data.push(newObj);
    console.log("New data object:", data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let newData = data.filter((person) => person.profession !== "admin");
    console.log(newData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyData = [
      { name: "Anusha", age: 23, profession: "developer" },
      { name: "Ram", age: 25, profession: "admin" },
    ];
  
    let concatenateArr = data.concat(dummyData);
    console.log("Concatenated Array:", concatenateArr);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    // console.log(totalAge)
    // console.log(data.length)
    const average = parseInt(totalAge / data.length);
    console.log("Average age of all people in the array:", average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let validate = data.some((person) => person.age > 25);
    console.log(
      "Validating if there's at least one person in the array who's older than 25:",
      validate
    );
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professionsSet = new Set(data.map((person) => person.profession));
    const uniqueProfessionsArray = Array.from(professionsSet);
    console.log(
      "Distinct professions present in the array:",
      uniqueProfessionsArray
    );
  }
  
  // 8. Sort by Age
  function sortByAge() {
    let sortedArr = data.slice().sort((a, b) => a.age - b.age);
    console.log("Organizing the array by age in ascending order:", sortedArr);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.map((person) => {
      if (person.name === "john") {
        person.profession = "manager";
      }
    });
    console.log("Adjusting 'john's profession to 'manager:", data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCounts = data.reduce((counts, person) => {
      counts[person.profession] = (counts[person.profession] || 0) + 1;
      return counts;
    }, {});
  
    console.log("Developer count:", professionCounts["developer"] || 0);
    console.log("Admin count:", professionCounts["admin"] || 0);
  }
  