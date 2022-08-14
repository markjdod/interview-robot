const cloneDeep = require('lodash.clonedeep');

module.exports = (gridDimensions, robot) => {
    var botDetails = cloneDeep(robot);

    const finalBotStatus = moveRobotAroundGrid(botDetails, gridDimensions);

    return `(${finalBotStatus.xLocation}, ${finalBotStatus.yLocation}, ` +
        `${finalBotStatus.direction})${finalBotStatus.status}`
}

function moveRobotAroundGrid(robot, gridDimensions) {
    var botDetails = cloneDeep(robot);
    var botIsLost = false;

    botDetails.commands.every(command => {
        switch (command) {
            case 'F':
                // Move Forward
                switch (botDetails.direction) {
                    // 
                    case 'N':
                        var newLocation = botDetails.yLocation + 1;
                        if (newLocation > gridDimensions.maxY) {
                            botIsLost = true;
                            return false;
                        }
                        botDetails.yLocation = newLocation;
                        break;
                    case 'S':
                        var newLocation = botDetails.yLocation - 1;
                        if (newLocation < gridDimensions.minY) {
                            botIsLost = true;
                            return false;
                        }
                        botDetails.yLocation = newLocation;
                        break;
                    case 'E':
                        var newLocation = botDetails.xLocation + 1;
                        if (newLocation > gridDimensions.maxX) {
                            botIsLost = true;
                            return false;
                        }
                        botDetails.xLocation = newLocation;
                        break;
                    case 'W':
                        var newLocation = botDetails.xLocation - 1;
                        if (newLocation < gridDimensions.minX) {
                            botIsLost = true;
                            return false;
                        }
                        botDetails.xLocation = newLocation;
                        break;
                    default:
                        break;
                }
                break;
            case 'L':
                botDetails.direction = rotateRobotLeft(botDetails.direction);
                break;
            case 'R':
                botDetails.direction = rotateRobotRight(botDetails.direction);
                break;
            default:
                break;
        }
        return true;
    });
    return { ...botDetails, status: botIsLost ? ' LOST' : '' };
}

function rotateRobotRight(currentDirection) {
    switch (currentDirection) {
        case 'N':
            return 'E';
        case 'S':
            return 'W';
        case 'E':
            return 'S';
        case 'W':
            return 'N';
        default:
            console.error('Something has gone wrong - Direction must be one of N/S/E/W')
            break;
    }
}

function rotateRobotLeft(currentDirection) {
    switch (currentDirection) {
        case 'N':
            return 'W';
        case 'S':
            return 'E';
        case 'E':
            return 'N';
        case 'W':
            return 'S';
        default:
            console.error('Something has gone wrong - Direction must be one of N/S/E/W')
            break;
    }
}

