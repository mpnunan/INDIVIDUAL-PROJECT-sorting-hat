# Sorting Hat [![Netlify Status](https://api.netlify.com/api/v1/badges/5683836a-2e15-4bcb-8168-8111b64d86a4/deploy-status)](https://app.netlify.com/sites/nitwit-blubber-oddment-tweak/deploys)


Here I am putting an overview of what my project is about. It comes below the name of my project so that others can read what it is about and get more details.

[View App](https://nitwit-blubber-oddment-tweak.netlify.app)



## About the User 
- The ideal user for this application is a teacher
- They have students in their classrooms that they would like to put into random groups and they have a love and passion of Harry Potter
- The problem this app solves for them is it allows them to get their students involved and excited about being in random groups. The students have felt that the groups have not been so random and based on favorites.

## Features 
- When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Deatheaters: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME
[Loom walkthrough](https://www.loom.com/share/22be669c4bfe47929ec1166c204747bf)

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://nitwit-blubber-oddment-tweak.netlify.app)
- [Wireframes](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


## Code Snippet 
- Function used to sort users into houses
- 
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

## Contributors
- [Michael Nunan](https://github.com/mpnunan/)
