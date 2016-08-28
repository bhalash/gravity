"use strict";
var ESG;
(function (ESG) {
    var G = 6.741e-11;
    var ESG_EARTH = 0.982e+1;
    function precision(value, precision) {
        if (precision === void 0) { precision = 0; }
        return +value.toFixed(precision);
    }
    ESG.precision = precision;
    function gravity(mass, radius) {
        return G * mass / Math.pow(radius, 2);
    }
    ESG.gravity = gravity;
    function relative(mass, radius) {
        return ESG_EARTH / gravity(mass, radius);
    }
    ESG.relative = relative;
    function escape(mass, radius) {
        return Math.sqrt(2 * G * mass / radius);
    }
    ESG.escape = escape;
    function orbit(mass, radius) {
        return Math.sqrt(G * mass / radius);
    }
    ESG.orbit = orbit;
})(ESG = exports.ESG || (exports.ESG = {}));
