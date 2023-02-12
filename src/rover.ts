type RoverInstruction = "L" | "R" | "M";
type RoverDirection = "N" | "E" | "S" | "W";


export interface Rover {
    x: number;
    y: number;
    direction: RoverDirection;
}

export function createRover(x: number, y: number, direction: RoverDirection): Rover {
    return { x, y, direction };
}

export function turnRight(rover: Rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
}

export function turnLeft(rover: Rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
}

export function move(rover: Rover) {
    switch (rover.direction) {
        case "N":
            rover.y += 1;
            break;
        case "E":
            rover.x += 1;
            break;
        case "S":
            rover.y -= 1;
            break;
        case "W":
            rover.x -= 1;
            break;
    }
}