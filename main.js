console.log('You were particularly difficult to place. But I stand by what I said last year. You would have done well in Slytherin.');


// utility functions

const accioHtml = (divId, htmlRender) => {
  const divRender = document.querySelector(divId);
  divRender.innerHTML = htmlRender;
};

// getting stuff on that dom

// const hatOnDom = () => {

//   const hatDomString =

// `<div class="card" id="hat-card">
//   <div class="card-header" id="card-header-splash">
//   The Sorting Hat
//   </div>
//   <div class="card-body" id="card-body-splash">
//     <h5 class="card-title" id="card-title-splash">Oh, you may not think I'm pretty, but don't judge on what you see, I'll eat myself if you can find a smarter hat than me.</h5>
//     <p class="card-text" id="card-text-splash">So put me on! Don't be afraid!
//     And don't get in a flap!
//     You're in safe hands (though I have none)
//     for I'm a thinking cap!</p>
//     <a href="#" class="btn btn-primary" id="hat-btn">Step forward.</a>
//   </div>
// </div>`

// accioHtml("#sorting-hat", hatDomString);

const postSplash = () => {

  // hides greeting element 
const hatOffDom = () =>  {
  document.querySelector("#sorting-hat").style.display = "none";
};

const hatActions = () => {
  sortFormOnDom();
  hatOffDom();
  accioStudents(studentBody);
  accioDeatheaters();
  buttonsOnDom();
};

  document.querySelector("hat-btn").addEventListener("click", () => {
  hatActions();
})

};

};

// FUNCTION
// hatOnDom();


const sortFormOnDom = () => {
  const sortFormDomString =
  `<div class="input-group mb-3" id="sort-form">
    <input type="text" class="form-control" id="input-name" placeholder="Name" aria-label="Name" aria-describedby="button-addon2"  required>
    <button type="submit" class="btn btn-outline-secondary" id="button-addon2">But where to put you?</button>
  </div>`
  
    accioHtml("#sorting-container", sortFormDomString);
  };
  
  const buttonsOnDom = () => {
  const btnString = 
  
  `<button type="button" id="gryffindor-btn">Gryffindor</button>
  <button type="button" id="hufflepuff-btn">Hufflepuff</button>
  <button type="button" id="ravenclaw-btn">Ravenclaw</button>
  <button type="button" id="slytherin-btn">Slytherin</button>
  <button type="button" id="hogwarts-btn">All Houses</button>`
  
  accioHtml("#btn-row", btnString);
  };
  
  
  // // data arrays
  
  // const studentArr = [
  //   {
  //     id: 1,
  //     name: "Harry Potter",
  //     house: "Slytherin",
  //     expelled: false
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Nunan",
  //     house: "Hufflepuff",
  //     expelled: false
  //   }
  // ];
  // const deatheaterArr = [
  //   {
  //     id: 3,
  //     name: "Tom Riddle",
  //     house: "Deatheater",
  //     expelled: true
  //   }
  // ];
  // const allMagicUsers = [
  //   studentArr,
  //   deatheaterArr
  // ];
  
  // // Object creation functions
  
  // const magicLicense = (num, num2) => {
  //   // function to create unique id, first checking to see if a student object already has same id
  //   let idNum = num + num2 + 1;
  //   for (let arr of allMagicUsers) {
  //     for (let obj of arr) {
  //       if (idNum === obj.id) {
  //         return idNum += 7;
  //       }
  //     }
  //   }
  //   return idNum;
  // };
  // // sorting function using random numbers
  // const houseSort = () => {
  //   const sortNum = Math.floor(Math.random() * 4);
  //   let houseName = "";
  //    switch (sortNum) {
  //    case 0: houseName ="Gryffindor";
  //    break;
  //    case 1: houseName = "Hufflepuff";
  //    break;
  //    case 2: houseName = "Ravenclaw";
  //    break;
  //    case 3: houseName = "Slytherin";
  //    break;
  //    default: return console.log("Sorting error")
  //   }
  //   return houseName
  //  };
   
  // //  functions to put cards on dom
  // const studentBody = allMagicUsers[0];
  // const deatheaters = allMagicUsers[1];

// const accioStudents = (arr) => {
//   let studentCardDomString ="";

//   for (let student of arr) {

//     studentCardDomString += 
//     `<div class="card mb-3 studentCard ${student.house}-bg" id="card-${student.id}"style="max-width: 540px;">
//       <div class="row g-0">
//         <div class="col-md-4">
//            <img src="${student.house}.jpg" class="img-fluid rounded-start card-img" alt="...">
//         </div>
//         <div class="col-md-8">
//           <div class="card-body">
//             <h5 class="card-title">${student.name}</h5>
//             <p class="card-text">${student.house}</p>
//             <p class="card-text"><small class="text-muted">Welcome to Hogwarts</small></p>
//           </div>
//           <button type="button" class="cardBtn" id="expel-${student.id}">Or worse...EXPELLED</button>
//         </div>
//       </div>
//   </div>`
//   }

//   accioHtml("#student-body", studentCardDomString);
// }

// const accioDeatheaters = () => {
//   let deatheaterCardDomString = "";

//   for (let deatheater of deatheaters) {
//     deatheaterCardDomString += 
//     `<div class="card mb-3 deatheaterCard deatheater-bg" id="card-${deatheater.id}"style="max-width: 540px;">
//     <div class="row g-0">
//       <div class="col-md-4">
//          <img src="Deatheater.jpg" class="img-fluid rounded-start deatheater-card-img" alt="...">
//       </div>
//       <div class="col-md-8">
//         <div class="card-body">
//           <h5 class="card-title">${deatheater.name}</h5>
//           <p class="card-text">${deatheater.house}</p>
//           <p class="card-text"><small class="text-muted">Morsmordre</small></p>
//         </div>
//         <button type="button" class="cardBtn deatheaterCardBtn1" id="redeem--${deatheater.id}">Redeem</button>
//         <button type="button" class="cardBtn deatheaterCardBtn2" id="kill--${deatheater.id}">Not my daughter you bitch</button>
//       </div>
//     </div>
// </div>`
//   }
// accioHtml("#deatheaters", deatheaterCardDomString);
// }

// // hides greeting element 
// const hatOffDom = () =>  {
//   document.querySelector("#sorting-hat").style.display = "none";
// };



// functions that run when greeting button is clicked

// const postSplash = () => {

//   // hides greeting element 
// const hatOffDom = () =>  {
//   document.querySelector("#sorting-hat").style.display = "none";
// };

// const hatActions = () => {
//   sortFormOnDom();
//   hatOffDom();
//   accioStudents(studentBody);
//   accioDeatheaters();
//   buttonsOnDom();
// };

//   document.querySelector("hat-btn").addEventListener("click", () => {
//   hatActions();
// })

// };
// functions to use input name to generate card  

// const form = document.querySelector("form");

// const newStudent = (e) => {
//   e.preventDefault();

//   const witchWizardObj = {

//     id: magicLicense(studentArr.length, deatheaterArr.length),
//     name: document.querySelector("#input-name").value,
//     house: houseSort(),
//     expelled: false
//   }

//   studentBody.push(witchWizardObj);
//   accioStudents(studentBody);
//   accioDeatheaters();
//   form.reset();
// }



// const filter = (array, house) => {
//   const houseArr = [];


//   for (const student of array) {
//     if (student.house === house) {
//       houseArr.push(student);
//     }
//   }

//   return houseArr;
// }
// const filterActions = () => {
// const gryffindorBtn = document.querySelector("#gryffindor-btn");
// const hufflepuffBtn = document.querySelector("#hufflepuff-btn");
// const ravenclawBtn = document.querySelector("#ravenclaw-btn");
// const slytherinBtn = document.querySelector("#slytherin-btn");
// const allStudentsBtn = document.querySelector("#hogwarts-btn");


// allStudentsBtn.addEventListener('click', () => {
//   accioStudents(studentArr);
// });

// gryffindorBtn.addEventListener('click', () => {
//   const gryffindorStudents = filter(studentArr, "Gryffindor");
//   accioStudents(gryffindorStudents);
// });

// hufflepuffBtn.addEventListener('click', () => {
//   const hufflepuffStudents = filter(studentBody, "Hufflepuff");
//   console.log(accioStudents(hufflepuffStudents));
//   accioStudents(hufflepuffStudents);

// });

// ravenclawBtn.addEventListener('click', () => {
//   const ravenclawStudents = filter(studentBody, "Ravenclaw");
//   accioStudents(ravenclawStudents);
// });

// slytherinBtn.addEventListener('click', () => {
//   const slytherinStudents = filter(studentBody, "Slytherin");
//   accioStudents(slytherinStudents);
// });

// };

// const cardActions = () => {
  
//   const allStudents = document.querySelector("#student-body");

// allStudents.addEventListener('click', (e) => {
//   if (e.target.id.includes('expel')) {
//     const [, id] = e.target.id.split('--');
//     const index = studentArr.findIndex(e => e.id === Number(id)); 
//     const newlyDark = studentArr[index];
//     deatheaterArr.splice(newlyDark);
//     studentArr.splice(index, 1);

//     accioStudents(studentArr);
//     accioDeatheaters();

//   }
// });

// const darkWizards = document.querySelector("#student-body");

// allStudents.addEventListener('click', (e) => {
//   if (e.target.id.includes('redeem')) {
//     const [, id] = e.target.id.split('--');
//     const index = deatheaterArr.findIndex(e => e.id === Number(id)); 
//     const backToLight = deatheaterArr[index];
//     studentArr.splice(backToLight);
//     deatheaterArr.splice(index, 1);

//     accioStudents(studentArr);
//     accioDeatheaters();

//   }
// });

// darkWizards.addEventListener('click', (e) => {
//   if (e.target.id.includes('kill')) {
//     const [, id] = e.target.id.split('--');
//     const index = deatheaterArr.findIndex(e => e.id === Number(id)); 
//     deatheaterArr.splice(index, 1);
//     accioDeatheaters();

//   }
// });
// };

const startApp = () => {
  hatOnDom();
  // postSplash();
  filterActions();
  cardActions();
  
  
};

startApp();
