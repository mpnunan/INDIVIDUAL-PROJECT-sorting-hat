console.log('You were particularly difficult to place. But I stand by what I said last year. You would have done well in Slytherin.');



// utility functions

const accioHtml = (divId, htmlRender) => {
  const divRender = document.querySelector(divId);
  divRender.innerHTML = htmlRender;
};

// getting stuff on that dom

const hatOnDom = () => {

  const hatDomString =

`<div class="card" id="hat-card">
  <div class="card-header" id="card-header-splash">
  The Sorting Hat
  </div>
  <div class="card-body" id="card-body-splash">
    <h5 class="card-title" id="card-title-splash">Oh, you may not think I'm pretty, but don't judge on what you see, I'll eat myself if you can find a smarter hat than me.</h5>
    <p class="card-text" id="card-text-splash">So put me on! Don't be afraid!
    And don't get in a flap!
    You're in safe hands (though I have none)
    for I'm a thinking cap!</p>
    <a href="#" class="btn btn-primary" id="hat-btn">Step forward.</a>
  </div>
</div>`

accioHtml("#sorting-hat", hatDomString);

}

hatOnDom();


const sortFormOnDom = () => {
const sortFormDomString =
`<div class="input-group mb-3" id="sort-form">
  <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2" id="sort-form-name" required>
  <button type="submit" class="btn btn-outline-secondary" id="button-addon2">But where to put you?</button>
</div>`

  accioHtml("#sorting-form", sortFormDomString);
};



const studentArr = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Slytherin",
    expelled: false
  },
  {
    id: 2,
    name: "Michael Nunan",
    house: "Hufflepuff",
    expelled: false
  }
];
const deatheaterArr = [
  {
    id: 3,
    name: "Tom Riddle",
    house: "Deatheater",
    expelled: true
  }
];
const allMagicUsers = [
  studentArr,
  deatheaterArr
];



// Object creation functions


const magicLicense = (num, num2) => {
  // function to create unique id, first checking to see if a student object already has same id
  let idNum = num + num2 + 1;
  for (let arr of allMagicUsers) {
    for (let obj of arr) {
      if (idNum === obj.id) {
        return idNum += 7;
      }
    }
  }
  return idNum;
};

const magicLicenseNumber = magicLicense(studentArr.length, deatheaterArr.length);
console.log(magicLicenseNumber);

const houseSort = () => {
  const sortNum = Math.floor(Math.random() * 4);
  let houseName = "";
   switch (sortNum) {
   case 0: houseName ="Gryffindor";
   break;
   case 1: houseName = "Hufflepuff";
   break;
   case 2: houseName = "Ravenclaw";
   break;
   case 3: houseName = "Slytherin";
   break;
   default: return console.log("Sorting error")
  }
  return houseName
 };
 
 let house = houseSort();
 console.log(house);
 



// const witchWizard = () => {
//   return {
//   id: magicLicenseNumber,
//   name: document.querySelector("#sort-form-name").value,
//   house: house,
//   expelled: false
//   };

// };






const studentBody = allMagicUsers[0];
const deatheaters = allMagicUsers[1];

const accioStudents = () => {
  let studentCardDomString ="";

  for (let student of studentBody) {

    studentCardDomString += 
    `<div class="card mb-3" id="card-${student.id}"style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          // <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <p class="card-text"><small class="text-muted">Welcome to Hogwarts</small></p>
          </div>
          <button class="studentCardBtn" id="studentCardBtn-${student.id}"></button>
        </div>
      </div>
  </div>`
  }

  accioHtml("#student-body", studentCardDomString);

}

const accioDeatheaters = () => {
  let deatheaterCardDomString = "";

  for (let deatheater of deatheaters) {
    deatheaterCardDomString += 
    `<div class="card mb-3" id="card-${deatheater.id}"style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        // <img src="..." class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${deatheater.name}</h5>
          <p class="card-text">${deatheater.house}</p>
          <p class="card-text"><small class="text-muted">Morsmordre</small></p>
        </div>
        <button class="deatheaterCardBtn" id="deatheaterCardBtn-${deatheater.id}"></button>
      </div>
    </div>
</div>`
  }
accioHtml("#deatheaters", deatheaterCardDomString)

}








// sortFormOnDom();

// const showSortingForm = document.querySelector("#button-addon2");

const hideSortingForm = () =>  {
  document.querySelector("#hat-card").style.display = "none";
};



document.querySelector("#hat-btn").addEventListener("click", () => {
  sortFormOnDom();
  hideSortingForm();
  accioStudents();
  accioDeatheaters();
  
});



const newStudent = (e) => {
  e.preventDefault();



  const witchWizardObj = {

    id: magicLicenseNumber,
    name: document.querySelector("#sort-form-name").value,
    house: house,
    expelled: false
  }

 


  studentBody.push(witchWizardObj);
  accioStudents();
  accioDeatheaters();
  document.querySelector("#sort-form").reset();
 

}

console.log(newStudent());


document.querySelector("#button-addon2").addEventListener("click", () => {
  newStudent();

});
