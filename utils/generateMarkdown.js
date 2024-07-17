// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    default:
      return ""
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)"
    case "APACHE 2.0":
      return "[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)"
    case "GPL 3.0":
      return "[https://www.gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)"
    case "BSD 3":
      return "[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)"
    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  // console.log(license)
  switch(license){
  case 'none':
    return "";
  default:
    return "## License"
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license)
  let licenseHeader = renderLicenseSection(data.license)
  let licenseLink = renderLicenseLink(data.license)

  return `# ${data.title} 
  ${badge} 
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  ## Installation
  To install the necessary dependencies, run the following command<br>
  >${data.command} 
  ## Usage
  ${data.usage}
  ${licenseHeader}
  ${licenseLink}
  ## Contributing 
  ${data.contributing}
  ## Tests
 >${data.test}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at <${data.userEmail}>. you can find more of my work at [${data.userName}](https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
