# Creative Writing Prompt Generator
## Created by Ike Esquivel-Pilloud, Masha Ivy, Pete Podrid, and Lara Bjork, December 2019
### Project Description

We created this project for the team week portion of the Intermediate JavaScript class at Epicodus. The task description was as follows:
_You're a team and you're building something awesome!

Spend time together as a team brainstorming your vision. Decide how you want to communicate and work together over the next 4 days. All ideas should be welcome and all members given roles. You can change partners daily or play to the strengths and preferences of your members (business logic vs user interface logic). Remember that in addition to coding skills, communication is one of the most important elements of building great applications. Let your team be one that fosters direct, honest communication and encourages every member's voice!

For the presentation, determine what the minimum viable product for demonstration is. A minimum viable product, or MVP, is a development approach where an application is created with the minimum sufficient features necessary to demonstrate it to users and/or investors. Additional features are implemented when/if time and resources allow. When you create an MVP, it should be a prototype of your idea and have the basic core elements in place so your audience (e.g. peers, investors, clients, future employers, future users, etc.) can understand what your vision is. Try to be both ambitious and realistic. Use a whiteboard or paper or online storyboard application if that would help everyone with the overview and the plan!

You are going to create something incredible. Dive in!_

We decided to build a program that would give a writer choices about what kind of writing prompt they want to use (GIFs from an API call, photos from another API call, short phrases from an array that we created, a list of words from a third API call that had to be included in whatever they wrote about--or a random selection of any of those options) and how difficult they wanted their task to be (easy [longest time limit] , intermediate [medium time limit], or hard [shortest time limit and a list of words that the writer should avoid]).

The program provides a space to see the chosen prompt and to write, and then submit that writing.

Our stretch goals (for future work) include developing a database to store the writer's submissions and the ability to connect to other users and offer feedback, as well as cross references to make sure their submission matched the words called from our words API.

### Specifications
1. The user should be able to enter their name, the type of prompt they want to use, and the difficulty level.
Input: Pete, GIF, Easy
Output: redirect to page with randomly generated GIF and space to writer

2. The user should be able to type in their writing and hit submit before the time runs out.
Input: _This prompt makes me think of many things..._
Output: After submit, redirect to page that says "This is what you wrote, Pete: '_This prompt makes me think of many things..._'"

3. When "hard" mode is selected, the user should get feedback about whether any of the "forbidden" words were used.
Input: _Well, well, well,_ [well is one of the forbidden words]
Output: After submit, redirect to page that says "This is what you wrote, Pete: '_Well, well, well_' Wow. You used one or more of the forbidden words. No points for you."
Input: _I love flowers_ [no forbidden words]
Output:  "This is what you wrote, Pete: '_I love flowers_'. Congratulations! You didn't use any of the forbidden words! You are awarded 10 points!"


### Technologies Used
HTML, CSS, JavaScript, Node.js, Chrome Node dev tools, babel 7.6.4, babel plugin 7.6.0,,clean-webpack-plugin 3.0.0, css-loader 3.2.0, eslint 6.3.0, dotenv-webpack 1.7.0, eslint-loader 3.0.0, html-webpack-plugin 3.2.0, jest 24.9.0, style-loader 1.0.0, uglifyjs-webpack-plugin 2.2.0, webpack 4.39.3, webpack-cli 3.3.8, webpack-dev-server 3.8.0, bootstrap 4.3.1, jquery 3.4.1, and popper.js 1.16.0.

Project was written using Google Chrome; no other browsers were tested for compatibility.

### Project Setup instructions
1. Ensure that you have Node.js installed; check that **node** (v4.0.x or higher) and **npm** (v.3.6.x or higher) are in place.
2. After cloning the project locally, you can run **npm install -y** to download the necessary dependencies. You can then run **npm run build** to bundle your version of this project. If something doesn't display correctly or goes wrong somehow, please contact us at <lara.m.bjork@gmail.com>, <pete.s.podrid@gmail.com>, <mashaivy9@gmail.com>, and <ikesquivelpilloud@gmail.com>, and we will do our best to troubleshoot for you.
3. You will need to generate your own API keys for two of the APIs:
  * Place each token in an .env file at the top level of your directory.
  * Visit https://random-word-api.herokuapp.com/ and click “get an API key”. Call this API_KEY in your .env file.
  * Visit https://developers.giphy.com/docs/sdk/, click "create an App", and follow subsequent directions to get your key. Call this API_KEY2 in your .env file.
  * Include .env in .gitignore.
  * Make sure to run **npm run start** after adding these keys.


### Known Issues and Limitations
* Although we have set the "name" field to be required, the program often allows the user to skip this field.

### License
This software is licensed under the MIT license.

Copyright (c) 2019 Ike Esquivel-Pilloud, Masha Ivy, Pete Podrid, and Lara Bjork
