import { createPlateau, Plateau, Coordinate } from './plateau';

describe('createPlateau', () => {
    test('should return a plateau with the correct width and height', () => {
        const width = 10;
        const height = 5;
        const plateau = createPlateau(width, height);
        expect(plateau).toEqual({ width, height });
    });
});