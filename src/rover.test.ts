import { createRover, turnLeft, turnRight, move, Rover } from './rover';

describe('createRover', () => {
    it('creates a new rover object with the correct properties', () => {
        const rover = createRover(1, 2, 'N');
        expect(rover).toEqual({ x: 1, y: 2, direction: 'N', inventory: [] });
    });
});

describe('turnLeft', () => {
    it('turns the rover to the left correctly', () => {
        const rover = createRover(0, 0, 'N');
        turnLeft(rover);
        expect(rover).toEqual({ x: 0, y: 0, direction: 'W', inventory: [] });
    });
});

describe('turnRight', () => {
    it('turns the rover to the right correctly', () => {
        const rover = createRover(0, 0, 'N');
        turnRight(rover);
        expect(rover).toEqual({ x: 0, y: 0, direction: 'E', inventory: [] });
    });
});

describe('move', () => {
    it('moves the rover in the correct direction', () => {
        const rover = createRover(0, 0, 'N');
        const plateau = { width: 1, height: 1 };
        move(rover, plateau);
        expect(rover).toEqual({ x: 0, y: 1, direction: 'N', inventory: [] });
    });
});