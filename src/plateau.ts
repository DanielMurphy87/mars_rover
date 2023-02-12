export interface Plateau {
    width: number;
    height: number;
}

export function createPlateau(width: number, height: number): Plateau {
    return { width, height };
}