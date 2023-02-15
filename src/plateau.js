"use strict";
exports.__esModule = true;
exports.createPlateau = void 0;
;
function createPlateau(width, height) {
    return { width: width, height: height };
}
exports.createPlateau = createPlateau;
var isWithinBounds = function (plateau, coordinate) {
    return (coordinate.x >= 0 &&
        coordinate.x <= plateau.width &&
        coordinate.y >= 0 &&
        coordinate.y <= plateau.height);
};
