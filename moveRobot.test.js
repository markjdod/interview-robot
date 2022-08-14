const moveRobot = require('./moveRobot');

test('Correct output for non LOST', () => {
    const gridSize = ['4', '8']
    const robotDetails = {
        initX: 2,
        initY: 3,
        direction: 'E',
        commands: 'LFRFF'.split('')
    }
    const output = moveRobot(gridSize, robotDetails)
    expect(output).toEqual('(4, 4, E)')
});
test('Correct output for LOST', () => {
    const gridSize = ['4', '8']
    const robotDetails = {
        initX: 0,
        initY: 2,
        direction: 'N',
        commands: 'FFLFRFF'.split('')
    }
    const output = moveRobot(gridSize, robotDetails)
    expect(output).toEqual('(0, 4, W) LOST')
})
test('Correct output for non LOST', () => {
    const gridSize = ['4', '8']
    const robotDetails = {
        initX: 2,
        initY: 3,
        direction: 'N',
        commands: 'FLLFR'.split('')
    }
    const output = moveRobot(gridSize, robotDetails)
    expect(output).toEqual('(2, 3, W)')
});
test('Correct output for LOST', () => {
    const gridSize = ['4', '8']
    const robotDetails = {
        initX: 1,
        initY: 0,
        direction: 'S',
        commands: 'FFRLF'.split('')
    }
    const output = moveRobot(gridSize, robotDetails)
    expect(output).toEqual('(1, 0, S) LOST')
})