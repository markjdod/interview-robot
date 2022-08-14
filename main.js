const scenarioDetails = require("./scenarioDetails")
const moveRobot = require("./moveRobot")
const defaultScenario = require("./scenario.json")

const details = process.env.MANUAL ? scenarioDetails() : scenarioDetails(defaultScenario);

details.robotDetails.forEach(robot => {
    const finalRobotLocation = moveRobot(details.gridDimensions, robot);
    console.log(finalRobotLocation)    
});