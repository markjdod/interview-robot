const cloneDeep = require('lodash.clonedeep');

module.exports = (gridSize, robot) => {
    var currentBot = cloneDeep(robot);
    var botStatus = '';
    currentBot.commands.every(command => {
        switch (command) {
            case 'F':
                switch (currentBot.direction) {
                    case 'N':
                        if (currentBot.initY + 1 > parseInt(gridSize[1])) {
                            botStatus = ' LOST';
                            return false;
                        }
                        currentBot.initY += 1;
                        break;
                    case 'S':
                        if (currentBot.initY - 1 < 0) {
                            botStatus = ' LOST';
                            return false;
                        }
                        currentBot.initY -= 1;
                        break;
                    case 'E':
                        if (currentBot.initX + 1 > parseInt(gridSize[0])) {
                            botStatus = ' LOST';
                            return false;
                        }
                        currentBot.initX += 1;
                        break;
                    case 'W':                        
                        if (currentBot.initX - 1 < 0) {
                            botStatus = ' LOST';
                            return false;
                        }
                        currentBot.initX -= 1;
                        break;
                    default:
                        break;
                }
                break;
            case 'L':
                switch (currentBot.direction) {
                    case 'N':
                        currentBot.direction = 'W';
                        break;
                    case 'S':
                        currentBot.direction = 'E';
                        break;
                    case 'E':
                        currentBot.direction = 'N';
                        break;
                    case 'W':
                        currentBot.direction = 'S';
                        break;
                    default:
                        break;
                }
                break;
            case 'R':
                switch (currentBot.direction) {
                    case 'N':
                        currentBot.direction = 'E';
                        break;
                    case 'S':
                        currentBot.direction = 'W';
                        break;
                    case 'E':
                        currentBot.direction = 'S';
                        break;
                    case 'W':
                        currentBot.direction = 'N';
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }       
        return true;
    });

    return `(${currentBot.initX}, ${currentBot.initY}, ${currentBot.direction})${botStatus}`
}
