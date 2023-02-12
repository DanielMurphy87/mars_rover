import { createPlateau, Plateau } from './plateau';

describe('createPlateau', () => {
    it('creates a new plateau object with the correct properties', () => {
        const plateau = createPlateau(5, 10);
        expect(plateau).toEqual({ width: 5, height: 10 });
    });
});