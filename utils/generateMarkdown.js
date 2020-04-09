function generateMarkdown(data, gitAvatar) {
  let GH = "https://img.shields.io/github/license/mashape/apistatus";
  if (data.License == "Github") {
    GH = "https://img.shields.io/github/license/mashape/apistatus";
  } else if (data.License == "NPM") {
    GH = "https://img.shields.io/npm/l/express";
  } else {
    GH = "https://img.shields.io/cpan/l/Config-Augeas"
  };
  return `

## GitHub Avatar
![Avatar](${gitAvatar})

# Title
${data.title}

## Description
${data.Description}

## Table of Contents
* [Installation](#Installation)
* [Description](#Description)
* [Usage](#Usage)
* [License](#License)
* [Tests](#Tests)


## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}
![badge](${GH})

## Contributing
${data.Contributing}

## Tests
${data.Tests}


`;
}

module.exports = generateMarkdown;


//markdown the format of the README first, and input information here. refer to: https://guides.github.com/features/mastering-markdown/
//go through the prompt, and update the generateMarkdown and commit it with the gnereateMarkdown.md