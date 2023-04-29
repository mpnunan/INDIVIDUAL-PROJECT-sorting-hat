console.log('You were particularly difficult to place. But I stand by what I said last year. You would have done well in Slytherin.');

const studentArr = [];
const deatheaterArr = [];
const worldOfMagicArr = [
  studentArr,
  deatheaterArr
];



// Object creation functions


const magicLicense = (num, num2) => {
  // function to create unique id, first checking to see if a student object already has same id
  let idNum = num + num2 + 1;
  for (let arr of data) {
    for (let obj of arr) {
      if (idNum === obj.id) {
        return idNum += 7;
      }
    }
  }
  return idNum;
};

let magicLicenseNumber = magicLicense(studentArr.length, deatheaterArr.length);

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
 



const witchWizard = (name) => {
  return {
  id: magicLicenseNumber,
  name: name,
  house: house,
  expelled: false
  };

};

// utility functions

const accioHtml = (divId, htmlRender) => {
  const divRender = document.querySelector(divId);
  divRender.innerHTML = htmlRender;
};
