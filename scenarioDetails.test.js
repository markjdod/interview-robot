const scenarioDetails = require('./scenarioDetails');

test('Converts details correctly when already provided', () => {
    const testDetails = {
        gridSize: '11 2',
        robots: ['(10, 3, E) LFLRF', '(0, 0, N) NRLF']
    }

    const expectedValues = {
        gridSize: ['11', '2'],
        robotDetails: [
            {
                initX: 10,
                initY: 3,
                direction: 'E',
                commands: ['L','F','L','R','F'],
            }, {
                initX: 0,
                initY: 0,
                direction: 'N',
                commands: ['N','R','L','F'],
            }
        ]    
    }
    
    const output = scenarioDetails(testDetails);

    expect(output).toEqual(expectedValues)
})

if (process.env.MANUAL_TESTS) {
    test('Convert details when manually provided', () =>{
        console.log('Please enter following (within quotations);')
        console.log('GridSize - "9 1"');
        console.log('Robot 1 - "(3, 2, E) LF"')
        console.log('Robot 2 - "(1, 4, N) NR"')
        const expectedValues = {
            gridSize: ['9', '1'],
            robotDetails: [
                {
                    initX: 3,
                    initY: 2,
                    direction: 'E',
                    commands: ['L','F'],
                }, {
                    initX: 1,
                    initY: 4,
                    direction: 'N',
                    commands: ['N','R'],
                }
            ]    
        }
        const output = scenarioDetails();
    
        expect(output).toEqual(expectedValues)
    
    })    
}
