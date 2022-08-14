# Mars Rover Problem 

## To Run Program

 - Ensure Node/NPM are installed
 - Run `npm ci` to install dependencies
 - To use the default scenario, run `npm run start` in the CLI
	 - You can change the default scenario in the `scenario.json` file
 - To run the manual user input, run either `npm run start:manual:windows` or `npm run start:manual:linux` depending on your operating system.

- To run Unit tests, `npm run test` will run the automated tests assuming no user input, whilst `npm run test:manual:windows` and `npm run test:manual:linux` will test the path with user input

### User Input
For user input, follow these steps when running `npm run start:manual:{OS}`;
- Enter the Grid Size,
	- Format - M N eg: `10 2`
- Enter Individual Robot Details
	- Format - (X, Y, DIRECTION) COMMANDS eg: `(5, 1, E) FFFRLR`
	- DIRECTION must be one of `N, E, S, W`
	- COMMANDS must be only `F, R, L`
- To finish adding Robot Details, enter no values. 

## Assumptions
- Robots are not aware of each other, and cannot impact each other (i.e. if two robots are on the same space, they do not crash)
- Robots are immediately lost, and cannot re-enter the grid at all
- 

## Future Work
- Better validation, especially around the Commands. Could use Regex (though wanted to focus on task, and less on fighting with Regex!). 
- Better handling of the inputs (they have to space & comma perfect at the moment)
- Further refactoring potentially. The move Forward section in moveRobot.js is rather ugly, and it can probably be refactored a little more (though the times I was playing with it, it lost its readability). Rotate Left & Right could probably also be made common.
- More Unit tests. There's nothing on Main.js at the moment, and I mostly follow many of the happy paths.
- Stress testing - I've not run this for say 1000 robots. I'm not sure how it will scale at the moment.
- Better CLI messages - they feel a little clunky at the moment
- Addition of things like Linter/Prettier
- Pull out Commands & Directions into an Enum.
