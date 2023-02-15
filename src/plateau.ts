export interface Plateau {
    width: number;
    height: number;
}

export interface Coordinate {
    x: number;
    y: number;
};

export function createPlateau(width: number, height: number): Plateau {
    return { width, height };
}

export function isWithinBounds(plateau: Plateau, coordinate: Coordinate): boolean {
    return (
        coordinate.x >= 0 &&
        coordinate.x <= plateau.width &&
        coordinate.y >= 0 &&
        coordinate.y <= plateau.height
    );
};