'use strict';

// Home Page
const navleft = document.querySelector("#navleft");
const navright = document.querySelector("#navright");

let index = 0;

const title = document.querySelector("#title");
const salary = document.querySelector("#salary");
const eligibility = document.querySelector("#eligibility");
const description = document.querySelector("#description");

const titles = ["Entry-Level Roles in the Tech Industry", "Customer Success Manager (CSM):", "Help Desk Support Technician", "Technical Consultant", "Social Media Strategist", "Web Developer", "Talent Acquisition Coordinator",
"Software Developer", "UX Designer"];
const salaries = ["Sources:", "Average Salary: $69,829", "Average Salary: $41,686", "Average Salary: $76,522", "Average Salary: $53,534", "Average Salary: $60,287", "Average Salary: $49,369",
"Average Salary: $72,619", "Average Salary: $74,776"];
const eligibilitys = ["\"8 Entry-Level Roles to Break Into the Technology Industry\" by Yanira Guzman", "Minimum Eligibility Requirements: 1-3 years of experience, a Bachelor's Degree is recommended but not always mandatory", "Minimum Eligibility Requirements: Associate's Degree", "Minimum Eligibility Requirements: Bachelor's Degree", "Minimum Eligibility Requirements: Bachelor's Degree and/or 3 years of experience", "Minimum Eligibility Requirements: No set requirements, as long as you can showcase your skills", "Minimum Eligibility Requirements: A high school diploma, but pursuing an undergraduate degree is recommended. Work experience can \"replace\" lack of a degree",
"Minimum Eligibility Requirements: Bachelor's Degree is highly recommended, and must be able to showcase skills", "Minimum Eligibility Requirements: Bachelor's Degree is highly recommended"];
const descriptions = ["", "- Engage with customer's to recieve feedback that can ensure a companies selling of a service runs as smoothly as possible.", "- Use their expertise with hardware, software, and network configuration to fix technological problems when customers reach out.", "- Advise others in their area of expertise in the tech industry. Typically, will first go through a lengthly rotational training prior to the position.", "- Create content for a companies social media account(s) while organizing and managing the account.", "- Build and update websites for companies using programming languages such as HTML, JavaScript, C++, etc.", "- Assist recruitors in promising candidates by scheduling interviews, following up with the candidate, and assissting in anything else they may need.",
"- Code new programs and/or features. They also solve problems with existing software.", "- Collaborate with others to design what users interact with when using technology."];

navleft.addEventListener("click", (event) => {
  if(index == 0){
    index = 9;
  }
  index--;
  title.textContent = titles[index];
  salary.textContent = salaries[index];
  eligibility.textContent = eligibilitys[index];
  description.textContent = descriptions[index];

});

navright.addEventListener("click", (event) => {
  if(index == 8){
    index = -1;
  }
  index++;
  title.textContent = titles[index];
  salary.textContent = salaries[index];
  eligibility.textContent = eligibilitys[index];
  description.textContent = descriptions[index];
});




