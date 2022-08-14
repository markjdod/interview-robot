const scenarioDetails = require("./scenarioDetails")
const moveRobot = require("./moveRobot")

const details = scenarioDetails({
    gridSize: '11 2',
    robots: ['(10, 3, E) LFLF', '(0, 0, N) NRLF']
});

// const details = scenarioDetails();
// console.log(details)

// Move some robots

const currentRobot = details.robotDetails[0];

const movedBot = moveRobot(details.gridSize, currentRobot);

console.log(movedBot)