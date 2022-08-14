const prompt = require("prompt-sync")();

module.exports = (inputDetails) => {
    var gridSize;
    var robotDetails = [];
    if (inputDetails) {
        gridSize = inputDetails.gridSize.split(" ")
        inputDetails.robots.forEach(robot => {
            robotDetails.push(getRobotDetails(robot))
        });
    }
    else {
        var { gridSize, robotDetails } = getInputDetailsFromUser();
    }

    return {
        gridSize,
        robotDetails
    }
}

function getInputDetailsFromUser() {
    const gridSize = prompt("What is the grid size?: [X,Y] -").split(" ");
    input = 'Dummy';
    let robotDetails = [];
    console.log('Please enter Robot details - Enter no values to exit');
    while (input !== '') {
        input = prompt("Details of Robot: (X,Y, DIR) COMMANDS - ");

        let currentRobot = getRobotDetails(input);

        if (input !== '') {
            robotDetails.push(currentRobot);
        }
    }
    return { gridSize, robotDetails };
}
function getRobotDetails(input) {
    const tidiedInput = input.replace("(", ",").replace(")", ",").replace(/\s/g, '').split(',');

    let currentRobot = {
        initX: parseInt(tidiedInput[1]),
        initY: parseInt(tidiedInput[2]),
        direction: tidiedInput[3],
        commands: tidiedInput[4].split(''),
    };
    return currentRobot;
}

