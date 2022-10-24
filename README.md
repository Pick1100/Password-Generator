

# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

t also needs quotes
white_check_mark
eyes
raised_hands





6:36
document.querySelector("#password")
6:36
var password = document.querySelector("#password")
password.textContent = password.toString()
6:36
I forgot passwordArray isnt the final password my fault
6:37
Oh
6:37
something I just noticed was on line 7 password isn't an array
6:38
so instead of doing password[i] = passwordArray[Math.random() * passwordArray.length] ;
6:38
you can just do the += operator
6:38
password += passwordArray[Math.random() * passwordArray.length] ;
6:39
It'll just concatenate it to the end of the string
6:39
var passwordBox = document.querySelector("#password")
passwordBox.textContent = password
6:39
Sorry if that's confusing


Ben Orlowski
  6:40 PM
Ok, I am reading this, a few times.
So what you are saying, the password generator is creating an array, and in orderr to do something with the array I need to password.textContent = password.toString()
:bust_in_silhouette:
abradshaw
APP  6:40 PM
Here let me see if I can explain it better
6:41
The password generator makes a passwordArray that you are accessing values of on line 41 with the Math.random function
6:42
you're trying to do password[i] but that is unnecessary
6:42
All you need to do is password
6:42
As for the assignment operator
6:42
it needs to be changed to a += to concatenate whatever passwordArray[Math.random * passwordArray.length] generates
6:42
Lastly,
6:43
to display the final generated password you need to access the textarea
6:43
you're accomplishing this with the query selector
New
6:44
Once you access the textarea you have to set the textContent of the area to the final password
6:44
And I changed the variable to passwordBox because you already have a var password
6:44
var passwordBox = document.querySelector("#password")
passwordBox.textContent = password
6:46
Does that make more sense?