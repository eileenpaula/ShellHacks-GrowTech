'use strict';
// Access all the figures using the class
let pictures = document.querySelectorAll(".card-image");
let again = document.querySelector("#take-again");
let againButton = document.querySelector("#take-again-button");

let result1 = document.querySelector("#leader-introvert");
let result2 = document.querySelector("#leader-extrovert");
let result3 = document.querySelector("#creative-introvert");
let result4 = document.querySelector("#creative-extrovert");

// Fill in the object
let quizValues = {
  friendDescribe: ["leader", "leader", "creative", "creative"],
  selfDescribe: ["introvert", "introvert", "extrovert", "extrovert"],
  assignment: ["leader", "leader", "creative", "creative"],
  success: ["introvert", "introvert", "extrovert", "extrovert"],
  decision: ["leader", "leader", "creative", "creative"],
  group: ["introvert", "introvert", "extrovert", "extrovert"],
  job: ["leader", "leader", "creative", "creative"],
};

// 'quizTaker' object here
let quizTaker = {
   leader: 0,
   creative: 0,
   extrovert: 0,
   introvert: 0,
 };

// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");
    console.log(choice);

    // Change the background 
    picture.classList.toggle("has-background-light");
    picture.classList.toggle("has-background-link");

    // Increment the right personality trait
    let answer = quizValues[choice[0]][choice[1]];
    console.log(answer);
    
    quizTaker[answer]++;
    console.log(quizTaker);

    // Unhide question one at a time .
    if(choice[0] === "friendDescribe") {
      let next = document.querySelector("#q2");
      console.log(next);
      next.classList.remove("hidden");
    }
    if(choice[0] === "selfDescribe") {
      let next = document.querySelector("#q3");
      console.log(next);
      next.classList.remove("hidden");
    }
    if(choice[0] === "assignment") {
      let next = document.querySelector("#q4");
      console.log(next);
      next.classList.remove("hidden");
    }
    if(choice[0] === "success") {
      let next = document.querySelector("#q5");
      console.log(next);
      next.classList.remove("hidden");
    }
    if(choice[0] === "decision") {
      let next = document.querySelector("#q6");
      console.log(next);
      next.classList.remove("hidden");
    }
    if(choice[0] === "group") {
      let next = document.querySelector("#q7");
      console.log(next);
      next.classList.remove("hidden");
    }

    document.body.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    // If its the last question, unhide the result.
    if (choice[0] === "job") {
      let resultID;

      if (quizTaker.leader > quizTaker.creative) {
        resultID = "#leader-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");

      document.body.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

      again.classList.remove("hidden");
    }
  });
});

pictures.forEach((picture) => {
  againButton.addEventListener("click", (e) => {
    picture.classList.remove("has-background-light");
    picture.classList.remove("has-background-link");

    let q2 = document.querySelector("#q2");
    q2.classList.add("hidden");
    let q3 = document.querySelector("#q3");
    q3.classList.add("hidden");
    let q4 = document.querySelector("#q4");
    q4.classList.add("hidden");
    let q5 = document.querySelector("#q5");
    q5.classList.add("hidden");
    let q6 = document.querySelector("#q6");
    q6.classList.add("hidden");
    let q7 = document.querySelector("#q7");
    q7.classList.add("hidden");

    result1.classList.add("hidden");
    result2.classList.add("hidden");
    result3.classList.add("hidden");
    result4.classList.add("hidden");
    again.classList.add("hidden");
  });
});
