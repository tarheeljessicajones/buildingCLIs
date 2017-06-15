'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What\'s your name?'
  },
  {
    type: 'confirm',
    name: 'books',
    message: 'Tar Heels love reading...Do you like to read books?',
  },
  {
    type: 'list',
    name: 'size',
    message: 'What\'s your favorite genre of books?',
    choices: ['Fiction', 'Non-fiction', 'Humor', 'Fantasy', 'Horror', 'Drama','Poetry','Other'],
    filter: function (val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'list',
    name: 'theme',
    message: 'What is the best university in North Carolina?',
    choices: [
      'UNC',
      'UNC Chapel Hill',
      'Carolina',
      'I am not familiar with excellence, so my choice has not been displayed',
      new inquirer.Separator(),
      {
        name: 'Dook',
        disabled: 'Unavailable at this time'
      },
    ]
  },
  {
    type: 'password',
    message: 'Enter the password: TAR... ',
    name: 'password1',
    mask: '*'

  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
  
  if (answers.password1 === 'HEELS') {
    console.log("You are awesome, Tar Heel!")
  }
  else {
    console.log("Wrong answer... You are not a true Tar Heel!")
  };

});