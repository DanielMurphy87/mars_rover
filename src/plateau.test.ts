import { createPlateau, isWithinBounds, Plateau, Coordinate } from './plateau';

describe('createPlateau', () => {
    test('should return a plateau with the correct width and height', () => {
        const width = 10;
        const height = 5;
        const plateau = createPlateau(width, height);
        expect(plateau).toEqual({ width, height });
    });
});

describe('isWithinBounds', () => {
    let plateau: Plateau;
    beforeEach(() => {
        plateau = createPlateau(10, 5);
    });

    test('should return true when coordinate is within bounds', () => {
        const coordinate: Coordinate = { x: 2, y: 3 };
        const result = isWithinBounds(plateau, coordinate);
        expect(result).toBe(true);
    });

    test('should return false when x is out of bounds', () => {
        const coordinate: Coordinate = { x: 12, y: 3 };
        const result = isWithinBounds(plateau, coordinate);
        expect(result).toBe(false);
    });

    test('should return false when y is out of bounds', () => {
        const coordinate: Coordinate = { x: 2, y: -1 };
        const result = isWithinBounds(plateau, coordinate);
        expect(result).toBe(false);
    });

    test('should return false when x and y are out of bounds', () => {
        const coordinate: Coordinate = { x: 12, y: -1 };
        const result = isWithinBounds(plateau, coordinate);
        expect(result).toBe(false);
    });
});