import readline from 'readline';
import { createPlateau } from './plateau/plateau';
import { createRover, performActions, Rover, RoverInstruction } from './rover/rover';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let plateau: ReturnType<typeof createPlateau>;
let rover: Rover;

function startProgram() {
    console.log('Welcome to the Mars Rover Program!\n');

    rl.question('Please enter the plateau\'s dimensions in the format "X Y": ', (dimensions: string) => {
        const pattern = /^(\d+)\s+(\d+)$/;
        const match = dimensions.match(pattern);

        if (!match) {
            console.error('Invalid input. Please enter dimensions in the format "X Y".');
            endProgram();
            return;
        }

        const [width, height] = match.slice(1).map(Number);
        plateau = createPlateau(width, height);
        console.log(`\nPlateau created with dimensions ${width} x ${height}.\n`);

        rl.question('Please enter the rover\'s initial position and direction in the format "X Y D": ', (position: string) => {
            const pattern = /^(\d+)\s+(\d+)\s+([NSEW])$/;
            const match = position.toUpperCase().match(pattern);

            if (!match) {
                console.error('Invalid input. Please enter the initial position and direction in the format "X Y D".');
                endProgram();
                return;
            }

            const [x, y, direction] = match.slice(1);
            rover = createRover(Number(x), Number(y), direction as Rover['direction']);
            console.log(`\nRover created at position ${x}, ${y} facing ${direction}.\n`);

            rl.question('Please enter the rover\'s movements: ', (movement: string) => {
                const pattern = /^[LMRA]*$/;
                const match = movement.toUpperCase().match(pattern);

                if (!match) {
                    console.error('Invalid input. Please enter the rover\'s movements using only "L", "M", and "R" characters.');
                    endProgram();
                    return;
                }

                const actions = movement.toUpperCase().split('') as RoverInstruction[];
                performActions(rover, plateau, actions);
                console.log(`\nRover finished at position ${rover.x} ${rover.y} facing ${rover.direction}.\n`);

                rl.question('Would you like to restart the program? (Y/N)', (answer: string) => {
                    if (answer.toUpperCase() === 'Y') {
                        startProgram();
                    } else {
                        endProgram();
                    }
                });
            });
        });
    });
}

function endProgram() {
    rl.close();
    console.log('\nThank you for using the Mars Rover Program!');
}

startProgram();