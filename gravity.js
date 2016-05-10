// The gravitational constant: 6.741 * 10^-11
const G = 6.741E-11;
// Earth's equatorial surface gravity, expressed in m/s.
const ESG_EARTH = 9.819679163952204;

/**
 * Calculate the gravity of a planetary body, and other fun related things.
 */

var ESG = function() {}

/**
 * Calculate the equatorial surface gravity of a spherical body.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Surface gravity in meters/second.
 */

ESG.prototype.gravity = function(mass, radius) {
    return G * mass / Math.pow(radius, 2);
}

/**
 * Express the gravity of a spherical body as a ratio of the Earth's.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Relative surface gravity as a ratio.
 */

ESG.prototype.relative = function(mass, radius) {
    return Math.ceil(ESG_EARTH / this.gravity(mass, radius));
}

/**
 * Calculate the escape velocity of a spherical body.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Escape velocity in meters/second.
 */

ESG.prototype.escape = function(mass, radius) {
    return Math.sqrt(2 * G * mass / radius);
}

/**
 * Calculate the velocity required to orbit a spherical body.
 * Measure is approximate. It assumes:
 *
 * 1. Orbiting body is negligible in mass.
 * 2. Orbit is circular.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Orbital velocity in meters/second.
 */

ESG.prototype.orbit = function(mass, radius) {
    return Math.sqrt(G * mass / radius);
}

module.exports = Object.create(ESG.prototype);
