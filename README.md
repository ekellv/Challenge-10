
  
# Team Profile Generator

## Description 

This is an application run in the command line using node and tested in jest meant to create a simple HTML page based upon the user's answers to several prompts from inquirer. 

![Github license](http://img.shields.io/badge/License-MIT-yellow.svg)

[A version of the deployed website can be viewed here.](https://ekellv.github.io/Team-Profile-Generator/)

## Contents
1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance Criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Technologies](#technologies)
2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

After installing the modules, the user can run node index.js in the command line and will be prompted with several questions about which employees they'd like to add to their team. The employee's chosen role will change which questions are run in the prompts. After selecting and inputting their desired roles and information, users can create a simple but aesthetically appealing HTML page to view their team and their profiles. 

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria 

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Visuals: 

![Team Profile Generator GIF](assets\team-profile-recording-gif.gif)
![Team Profile Generator Recording](assets\team-profile-maker-recording.mp4)
![Team Profile Generator Node](assets\team-profile-maker-node.png)
![Team Profile Generator HTML](assets\team-profile-maker-html.png)

## Technologies



## Installation 

Please run the following dependencies to install the application: 

`
npm i
`

## License 

This reposititory is licensed under the MIT license. 

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Usage 



## Contributing 

This repository is currently not accepting contributions. 

## Testing 

The command to run tests on this application is: 

`
npm run test
`

## Authors and Acknowledgements

Built by: Erin Voelker

## Contact Information

* GitHub: [ekellv](https://github.com/ekellv)
* Email: [erinkvoelker@gmail.com](mailto:erinkvoelker@gmail.com)

