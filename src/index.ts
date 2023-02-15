// import { Rover, createRover, performActions } from "./rover";
// import { createPlateau } from './plateau';

// const rovers: Rover[] = [];

// // const rover1 = createRover(1, 2, "N");

// const plateau = createPlateau(10, 5);
// // rovers.push(rover1);

// // const actions1 = "LMLMLMLMM";
// // for (let action of actions1) {
// //     switch (action) {
// //         case "L":
// //             turnLeft(rover1);
// //             break;
// //         case "R":
// //             turnRight(rover1);
// //             break;
// //         case "M":
// //             move(rover1, plateau);
// //             break;
// //     }
// // }

// let rover2 = createRover(1, 1, "N");
// rovers.push(rover2);

// // console.log(plateau);
// const actions2 = "RAMMMMMMMMMM";

// for (let rover of rovers) {
//     performActions(rover, plateau, actions2);
//     console.log(plateau);
//     console.log(`Final position: ${rover.x} ${rover.y} ${rover.direction}`);
//     console.table(rover.inventory);
// }

import readline from 'readline';
import { createPlateau } from './plateau';
import { createRover, performActions, Rover, RoverInstruction } from './rover';

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