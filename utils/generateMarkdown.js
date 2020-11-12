//required local utilities
const badges = require('./badges')

//function to render list items
function renderList(obj, type) {
  //check if there is only one step
  if (Object.keys(obj).length === 1) {
    //and return a raw string if so
    return obj[Object.keys(obj)[0]]
  //check if there are no steps
  } else if (Object.keys(obj).length < 1) {
    //return an empty string
    return ''
  }
  let listString = ``;
  let count = 1;
  //loop across the entire object
  for (let key in obj) {
    //generate list items based on desired list type
    type === 'ol'
      ? (listString += `${count}. ${obj[key]}\n`)
      : (listString += `- ${obj[key]}\n`);
    count++
  }
  return listString
}

// function to generate markdown for README
function generateMarkdown(base, install, usage, credits) {
  return `# ${base.title}

${badges[base.license]}

## Description

${base.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## Installation

${renderList(install, "ol")}

## Usage

${renderList(usage)}

## Contribution

${base.contribution}

## Tests

${base.tests}

## Credits

${renderList(credits)}

## Questions

For questions or comments, contact me on GitHub:
Github: [https://github.com/${base.questionsGithub}](https://github.com/${base.questionsGithub})

Or send me an email:
Email: ${base.questionsEmail}

## License

This project uses the ${base.license} license`;

}

module.exports = generateMarkdown;
