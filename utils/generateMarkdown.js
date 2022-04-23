// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache'){
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === 'Boost Software'){
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license === 'BSD-3 Clause') {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else if (license === 'BSD-2 Clause') {
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
      case "Apache":
          link = `https://opensource.org/licenses/Apache-2.0`;
          break;
      case "Boost Software":
          link = `https://opensource.org/licenses/BSL-1.0`;
          break;
      case "BSD-3 Clause":
          link = `https://opensource.org/licenses/BSD-3-Clause`;
          break;
      case "BSD-2 Clause":
          link = `https://opensource.org/licenses/BSD-2-Clause`;
          break;
      default: 
          link = ''; 
          break;
  }
  return link
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (`This application is protected under ${license}`)
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title} \n

  ${renderLicenseBadge(data.license)} 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)} \n

  ## Table of Contents
  [Description](#description)\n
  [How to Install](#install)\n
  [Main Objective](#purposeOfProject)\n
  [Problems Faced](#problems)\n
  [Things Learned](#learning)\n
  [How This Project Stands Out](#standout)\n
  [Contact](#userName)\n

  ## Quick Description about the project \n
  \t ${data.description} \n
  ## How to install the project \n
  \t ${data.install} \n
  ## Main motive for the project \n
  \t ${data.purposeOfProject} \n
  ## Main problems faced when working on the project \n 
  \t ${data.problems} \n
  ## Main take aways from the project \n
  \t ${data.learning} \n
  ## How This project stands out \n
  \t ${data.standout} \n
  ## Contact Info \n
  \t GitHub User Name: ${data.userName} \n
  \t Email: ${data.userEmail} \n
  \t LinkedIn: ${data.linkedin}
`;
}

module.exports = generateMarkdown;
