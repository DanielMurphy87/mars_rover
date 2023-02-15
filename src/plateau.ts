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