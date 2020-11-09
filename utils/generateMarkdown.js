

//function to list items
function renderList(obj, type) {
  if (Object.keys(obj).length <2) {
    return obj[Object.keys(obj)[0]]
  }
  let listString = '';
  let count = 1;
  for (let key in obj) {
    type === 'ol'
      ? (listString += `${count}. ${obj[key]}\n`)
      : (listString += `- ${obj[key]}\n`);
    count++
  }
  return listString
}

// function to generate markdown for README
function generateMarkdown(base, install, usage) {
  return `# ${base.title}

{license badge}

## Description

${base.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${renderList(install, 'ol')}

## Usage
${renderList(usage)}

## License
This project uses the ${base.license}

## Contribution
${base.contribution}

## Tests
${base.tests}

## Questions
[Creator Github profile](https://github.com/${base.questionsGithub})
Creator Email: ${base.questionsEmail}`;
}

module.exports = generateMarkdown;
