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

const moveMap: Record<string, { x: number, y: number }> = {
    N: { x: 0, y: 1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 }
} as const;

export function turnRight(rover: Rover) {
    rover.direction = turnRightMap[rover.direction];
}

export function turnLeft(rover: Rover) {
    rover.direction = turnLeftMap[rover.direction];
}

export function move(rover: Rover) {
    const movement = moveMap[rover.direction];
    rover.x += movement.x;
    rover.y += movement.y;
}