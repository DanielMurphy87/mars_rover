import readline from 'readline';
import { createPlateau } from './plateau/plateau';
import { createRover, performActions, Rover, RoverInstruction } from './rover/rover';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let plateau: ReturnType<typeof createPlateau>;
let rover: Rover;

async function getUserInput(question: string, pattern: RegExp): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (input: string) => {
            const match = input.match(pattern);
            if (!match) {
                console.error(`Invalid input. Please enter input that matches the pattern "${pattern}".`);
                endProgram();
                return;
            }
            resolve(input);
        });
    });
}

async function startProgram() {
    console.log('Welcome to the Mars Rover Program!\n');

    const dimensionsPattern = /^(\d+)\s+(\d+)$/;
    const dimensions = await getUserInput(
        'Please enter the plateau\'s dimensions in the format "X Y": ',
        dimensionsPattern
    );
    const dimensionsMatch = dimensions.match(dimensionsPattern);
    if (!dimensionsMatch) {
        console.error(`Invalid input. Please enter input that matches the pattern "${dimensionsPattern}".`);
        endProgram();
        return;
    }
    const [width, height] = dimensionsMatch.slice(1).map(Number);
    plateau = createPlateau(width, height);
    console.log(`\nPlateau created with dimensions ${width} x ${height}.\n`);

    const positionPattern = /^(\d+)\s+(\d+)\s+([NSEW])$/;
    const position = await getUserInput(
        'Please enter the rover\'s initial position and direction in the format "X Y D": ',
        positionPattern
    );
    const positionMatch = position.match(positionPattern);
    if (!positionMatch) {
        console.error(`Invalid input. Please enter input that matches the pattern "${positionPattern}".`);
        endProgram();
        return;
    }
    const [x, y, direction] = positionMatch.slice(1);
    rover = createRover(Number(x), Number(y), direction as Rover['direction']);
    console.log(`\nRover created at position ${x}, ${y} facing ${direction}.\n`);

    const movementPattern = /^[LMRA]*$/;
    const movement = await getUserInput(
        'Please enter the rover\'s movements: ',
        movementPattern
    );
    const actions = movement.toUpperCase().split('') as RoverInstruction[];
    performActions(rover, plateau, actions);
    console.log(`\nRover finished at position ${rover.x} ${rover.y} facing ${rover.direction}.\n`);

    const restart = await getUserInput('Would you like to restart the program? (Y/N)', /^[YN]$/i);
    if (restart.toUpperCase() === 'Y') {
        startProgram();
    } else {
        endProgram();
    }
}

function endProgram() {
    rl.close();
    console.log('\nThank you for using the Mars Rover Program!');
}

startProgram();