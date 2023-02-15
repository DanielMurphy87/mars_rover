import { createRover, turnLeft, turnRight, move, Rover, addToInventory, performActions } from './rover';

describe('createRover', () => {
    test('creates a new rover object with the correct properties', () => {
        const rover = createRover(1, 2, 'N');
        expect(rover).toEqual({ x: 1, y: 2, direction: 'N', inventory: [] });
    });
});

describe('performActions', () => {
    const plateau = { width: 5, height: 5 };

    test('performs left turn', () => {
        const rover = createRover(2, 3, 'N', []);
        performActions(rover, plateau, 'L');
        expect(rover.direction).toBe('W');
    });

    test('performs right turn', () => {
        const rover = createRover(2, 3, 'N', []);
        performActions(rover, plateau, 'R');
        expect(rover.direction).toBe('E');
    });

    test('moves north', () => {
        const rover = createRover(2, 3, 'N', []);
        performActions(rover, plateau, 'M');
        expect(rover.y).toBe(4);
    });

    test('moves south', () => {
        const rover = createRover(2, 3, 'S', []);
        performActions(rover, plateau, 'M');
        expect(rover.y).toBe(2);
    });

    test('moves east', () => {
        const rover = createRover(2, 3, 'E', []);
        performActions(rover, plateau, 'M');
        expect(rover.x).toBe(3);
    });

    test('moves west', () => {
        const rover = createRover(2, 3, 'W', []);
        performActions(rover, plateau, 'M');
        expect(rover.x).toBe(1);
    });

    test('ignores move command that would take the rover out of bounds', () => {
        const rover = createRover(0, 0, 'S', []);
        performActions(rover, plateau, 'M');
        expect(rover.y).toBe(0);
    });
});