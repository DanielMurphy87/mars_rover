import readline from 'readline';
import { createPlateau } from './plateau/plateau';
import { createRover, performActions, Rover, RoverInstruction } from './rover/rover';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// State variables
let plateau: ReturnType<typeof createPlateau>;
let rover: Rover;

console.log('Welcome to the Mars Rover Program!\n');

rl.question('Please enter the plateau\'s dimensions in the format "X Y": ', (dimensions: string) => {
    const [width, height] = dimensions.split(' ').map(Number);
    plateau = createPlateau(width, height);
    console.log(`\nPlateau created with dimensions ${width} x ${height}.\n`);

    rl.question('Please enter the rover\'s initial position and direction in the format "X Y D": ', (position: string) => {
        const [x, y, direction] = position.toLocaleUpperCase().split(' ');
        rover = createRover(Number(x), Number(y), direction as Rover['direction']);
        console.log(`\nRover created at position ${x}, ${y} facing ${direction}.\n`);

        rl.question('Please enter the rover\'s movements: ', (movement: string) => {
            const actions = movement.toLocaleUpperCase().split('') as RoverInstruction[];
            performActions(rover, plateau, actions);
            console.log(`\nRover finished at position ${rover.x} ${rover.y} facing ${rover.direction}.\n`);

            endProgram();
        });
    });
});

function endProgram() {
    rl.close();
    console.log('\nThank you for using the Mars Rover Program!');
}