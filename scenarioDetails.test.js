const scenarioDetails = require('./scenarioDetails');

test('Converts details correctly when already provided', () => {
    const testDetails = {
        gridSize: '11 2',
        robots: ['(10, 3, E) LFLRF', '(0, 0, N) NRLF']
    }

    const expectedValues = {
        gridDimensions: {
            maxX: 11,
            maxY: 2,
            minX: 0,
            minY: 0
        },
        robotDetails: [
            {
                xLocation: 10,
                yLocation: 3,
                direction: 'E',
                commands: ['L','F','L','R','F'],
            }, {
                xLocation: 0,
                yLocation: 0,
                direction: 'N',
                commands: ['N','R','L','F'],
            }
        ]    
    }
    
    const output = scenarioDetails(testDetails);

    expect(output).toEqual(expectedValues)
})

test('Errors if X dimension of Grid Size is not valid', () => {
    const testDetails = {
        gridSize: 'I@M NOT VALID 2',
        robots: ['(10, 3, E) LFLRF', '(0, 0, N) NRLF']
    }

    expect(() => scenarioDetails(testDetails)).toThrow('Grid size must be numerical')
})
test('Errors if Y dimension of Grid Size is not valid', () => {
    const testDetails = {
        gridSize: '11 I@MVALIDEITHER',
        robots: ['(10, 3, E) LFLRF', '(0, 0, N) NRLF']
    }

    expect(() => scenarioDetails(testDetails)).toThrow('Grid size must be numerical')
})

test('Errors if Invalid Robot Starting X location', () => {
    const testDetails = {
        gridSize: '11 2',
        robots: ['(INVALID, 3, E) LFLRF']
    }

    expect(() => scenarioDetails(testDetails)).toThrow('Robot Details were invalid. Ensure are in format "(#, #, DIR) COMMANDS"')
})
test('Errors if Invalid Robot Starting Y location', () => {
    const testDetails = {
        gridSize: '11 2',
        robots: ['(10, INVALID, E) LFLRF']
    }

    expect(() => scenarioDetails(testDetails)).toThrow('Robot Details were invalid. Ensure are in format "(#, #, DIR) COMMANDS"')
})

test('Errors if Invalid Robot Starting Direction', () => {
    const testDetails = {
        gridSize: '11 2',
        robots: ['(10, 4, A) LFLRF']
    }

    expect(() => scenarioDetails(testDetails)).toThrow('Robot Direction must be one of N,S,E,W')
})

test('Errors if Missing Robot Commands', () => {
    const testDetails = {
        gridSize: '11 2',
        robots: ['(10, 4, E)']
    }

    expect(() => scenarioDetails(testDetails)).toThrow('Robot Details were invalid. Ensure are in format "(#, #, DIR) COMMANDS"')
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
                    xLocation: 3,
                    yLocation: 2,
                    direction: 'E',
                    commands: ['L','F'],
                }, {
                    xLocation: 1,
                    yLocation: 4,
                    direction: 'N',
                    commands: ['N','R'],
                }
            ]    
        }
        const output = scenarioDetails();
    
        expect(output).toEqual(expectedValues)
    
    })    
}
