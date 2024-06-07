// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  ## Installation
  To install the necessary dependencies, run the following command<br>
  \`\`\`${data.command} \`\`\`
  ## Usage
  ${data.usage}
  # Contributing 
  ${data.contributing}
  # Tests
 \`\`\`${data.test} \`\`\`
  # Questions
  If you have any questions about the repo, open an issue or contact me directly at <${data.userEmail}>. you can find more of my work at [${data.userName}](https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
