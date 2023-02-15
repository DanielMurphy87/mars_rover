import { Plateau } from "../plateau/plateau";

export type RoverInstruction = "L" | "R" | "M" | "A";
type RoverDirection = "N" | "E" | "S" | "W";


export interface Rover {
    x: number;
    y: number;
    direction: RoverDirection;
    inventory: MartianObject[];
}

export function createRover(x: number, y: number, direction: RoverDirection, inventory: MartianObject[] = []): Rover {
    return { x, y, direction, inventory };
}

const turnRightMap: Record<RoverDirection, RoverDirection> = {
    N: "E",
    E: "S",
    S: "W",
    W: "N"
} as const;

const turnLeftMap: Record<RoverDirection, RoverDirection> = {
    N: "W",
    W: "S",
    S: "E",
    E: "N"
} as const;

const moveMap: Record<RoverDirection, { x: number, y: number }> = {
    N: { x: 0, y: 1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 }
} as const;

type MartianObject = {
    name: string;
    weight: number;
    size: number;
}

export function turnRight(rover: Rover) {
    rover.direction = turnRightMap[rover.direction];
}

export function turnLeft(rover: Rover) {
    rover.direction = turnLeftMap[rover.direction];
}

export function move(rover: Rover, plateau: Plateau) {
    const movement = moveMap[rover.direction];
    let newX = rover.x + movement.x;
    let newY = rover.y + movement.y;
    if (newX >= 0 && newX <= plateau.width && newY >= 0 && newY <= plateau.height) {
        rover.x = newX;
        rover.y = newY;
        return true;
    } else {
        console.error(`Rover went out of bounds of the plateau. Final position: ${rover.x} ${rover.y} ${rover.direction}`);
        return false;
    }
}

export function addToInventory(rover: Rover, object: MartianObject) {
    rover.inventory.push(object);
}

export function performActions(rover: Rover, plateau: Plateau, actions: RoverInstruction[] | string) {
    if (typeof actions === "string") {
        actions = convertStringToRoverInstructions(actions.toUpperCase());
    }
    for (let action of actions) {
        switch (action) {
            case "L":
                turnLeft(rover);
                break;
            case "R":
                turnRight(rover);
                break;
            case "M":
                if (move(rover, plateau)) {
                    return false;
                }
                break;
            case "A":
                const object = findMartianObject();
                console.log(`Found ${object.name}!`)
                addToInventory(rover, object);
                break;
        }
    }
}

export function convertStringToRoverInstructions(actions: string): RoverInstruction[] {
    return actions.toUpperCase().split("").filter(action => ["L", "R", "M", "A"].includes(action)) as RoverInstruction[];
}

export function findMartianObject(): MartianObject {
    return { name: "Martian rock", weight: 10, size: 5 };
}