/**
 * Calculate the gravity of a planetary body, and other fun related things.
 */

var ESG = function(opts) {
    console.log(opts);
}

// The gravitational constant: 6.741 * 10^-11
ESG.prototype.G = 6.741e-11;
// Earth's equatorial surface gravity: 9.82 m/s.
ESG.prototype.ESG_EARTH = 0.982e+1;

/**
 * Round a number to a given decimal place.
 *
 * @param {number} value - Value to round.
 * @param {number} [precision=0] - Rounding precision.
 */

ESG.prototype.precision = function(value, precision) {
    precision = precision || 0;
    return +value.toFixed(precision);
}

/**
 * Calculate the equatorial surface gravity of a spherical body.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Surface gravity in meters/second.
 */

ESG.prototype.gravity = function(mass, radius) {
    return this.G * mass / Math.pow(radius, 2);
}

/**
 * Express the gravity of a spherical body as a ratio of the Earth's.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Relative surface gravity as a ratio.
 */

ESG.prototype.relative = function(mass, radius) {
    return this.ESG_EARTH / this.gravity(mass, radius);
}

/**
 * Calculate the escape velocity of a spherical body.
 *
 * @param {number} mass - Mass in kilograms.
 * @param {number} radius - Radius in kilometers.
 * @returns {number} - Escape velocity in meters/second.
 */

ESG.prototype.escape = function(mass, radius) {
    return Math.sqrt(2 * this.G * mass / radius);
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
    return Math.sqrt(this.G * mass / radius);
}

module.exports = Object.create(ESG.prototype);
// module.exports = new ESG();