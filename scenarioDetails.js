const prompt = require("prompt-sync")();

module.exports = (automatedScenarioDetails) => {
    var gridDetails;
    var robotDetails = [];
    if (automatedScenarioDetails) {
        var { gridDetails, robotDetails } = getScenarioFromAutomatedInput(automatedScenarioDetails);
    }
    else {
        var { gridDetails, robotDetails } = getScenarioFromUser();
    }

    validateGridDetails(gridDetails, robotDetails);

    return {
        gridDimensions: {
            maxX: parseInt(gridDetails[0]),
            maxY: parseInt(gridDetails[1]),
            minX: 0,
            minY: 0
        },
        robotDetails
    }
}

function validateGridDetails(gridSize) {
    if (isNaN(gridSize[0]) || isNaN(gridSize[1])) {
        throw new Error('Grid size must be numerical')
    }
}

function getScenarioFromAutomatedInput(scenarioDetails) {
    var robotDetails = [];
    scenarioDetails.robots.forEach(robot => {
        robotDetails.push(getRobotDetails(robot))
    });
    return {
        gridDetails: scenarioDetails.gridSize.split(" "),
        robotDetails
    }
}

function getScenarioFromUser() {
    const gridDetails = prompt("What is the grid size?: M x N seperate by space - ").split(" ");
    input = 'placeholder';
    let robotDetails = [];
    console.log('Please enter Robot details - Enter no value to exit');
    while (input !== '') {
        input = prompt("Details of Robot: (X, Y, DIR) COMMANDS - ");

        if (input !== '') {            
            robotDetails.push(getRobotDetails(input));
        }

    }
    return { gridDetails, robotDetails };
}

function getRobotDetails(input) {
    const tidiedInput = input.replace("(", ",").replace(")", ",").replace(/\s/g, '').split(',');

    let robotDetails = {
        xLocation: parseInt(tidiedInput[1]),
        yLocation: parseInt(tidiedInput[2]),
        direction: tidiedInput[3],
        commands: tidiedInput[4].split(''),
    };

    validateRobotDetails(robotDetails);
    return robotDetails;
}

function validateRobotDetails(currentRobot) {
    if (isNaN(currentRobot.xLocation) ||
        isNaN(currentRobot.yLocation) ||
        currentRobot.direction === undefined ||
        currentRobot.commands.length === 0) {
        throw new Error('Robot Details were invalid. Ensure are in format "(#, #, DIR) COMMANDS"');
    }

    if (!['N', 'S', 'E', 'W'].includes(currentRobot.direction)) {
        throw new Error('Robot Direction must be one of N,S,E,W');
    }
}

