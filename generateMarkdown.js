// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache'){
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === 'Boost Software'){
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license === 'BSD-3 Clause') {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else {
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
    return (`This application is protected under ` + (license) + ` license`)
  }
  return 'N/A';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title} \n

  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseSection(data.license)}\n
  ${renderLicenseLink(data.license)} \n

  ## Table of Contents
  [Description](#quick-description-about-the-project)\n
  [How to Install](#how-to-install-the-project)\n
  [How to Use This Project](#how-to-use-this-project)\n
  [Contributing](#contributing-to-this-project)\n
  [Problems Faced](#main-problems-faced-when-working-on-the-project)\n
  [Things Learned](#main-take-aways-from-the-project)\n
  [Tests](#tests)\n
  [Questions](#questions)\n

  ## Quick Description about the project \n
  ${data.description} \n
  ## How to install the project \n
  To use this project, please 'git clone' the following repository link: \n
  ${data.install} \n
  ## How to use this project \n
  ${data.usage} \n
  ## Contributing to this project
  ${data.contribution} \n
  ## Main problems faced when working on the project \n 
  ${data.problems} \n
  ## Main take aways from the project \n
  ${data.learning} \n
  ## Tests \n
  ${data.tests} \n
  ## Questions \n
  If you have any questions, please contact me at: \n 
  Github Profile: [${data.userName}](https://github.com/${data.userName})  \n
  Email: ${data.userEmail} \n
  LinkedIn: ${data.linkedin}
`;
}

module.exports = generateMarkdown;
