/**
 * Calculate the gravity of (most) spherical bodies.
 */

export class ESG {
    // The gravitational constant: 6.741 * 10^-11
    G: number = 6.741e-11;
    // Earth's equatorial surface gravity: 9.82 m/s.
    ESG_EARTH: number = 0.982e+1;

   /**
    * Round a number to a given decimal place.
    *
    * @param {number} value - Value to round.
    * @param {number} [precision=0] - Rounding precision.
    * @return {number} Number
    */

    precision(value:number, precision:number = 0):number {
        return +value.toFixed(precision);
    }

    /**
     * The equatorial surface gravity of a spherical body.
     *
     * @param {number} mass - Mass in kilograms.
     * @param {number} radius - Radius in kilometers.
     * @returns {number} - Surface gravity in meters/second.
     */

    gravity(mass:number, radius:number):number {
        return this.G * mass / Math.pow(radius, 2);
    }

    /**
     * Express the gravity of a spherical body as a ratio of the Earth's.
     *
     * @param {number} mass - Mass in kilograms.
     * @param {number} radius - Radius in kilometers.
     * @returns {number} - Relative surface gravity as a ratio.
     */

    relative(mass:number, radius:number):number {
        return this.ESG_EARTH / this.gravity(mass, radius);
    }

    /**
     * Calculate the escape velocity of a spherical body.
     *
     * @param {number} mass - Mass in kilograms.
     * @param {number} radius - Radius in kilometers.
     * @returns {number} - Escape velocity in meters/second.
     */

    escape(mass:number, radius:number):number {
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

    orbit(mass:number, radius:number):number {
        return Math.sqrt(this.G * mass / radius);
    }
}
