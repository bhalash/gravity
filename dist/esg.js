"use strict";
var ESG = (function () {
    function ESG() {
        this.G = 6.741e-11;
        this.ESG_EARTH = 0.982e+1;
    }
    ESG.prototype.precision = function (value, precision) {
        if (precision === void 0) { precision = 0; }
        return +value.toFixed(precision);
    };
    ESG.prototype.gravity = function (mass, radius) {
        return this.G * mass / Math.pow(radius, 2);
    };
    ESG.prototype.relative = function (mass, radius) {
        return this.ESG_EARTH / this.gravity(mass, radius);
    };
    ESG.prototype.escape = function (mass, radius) {
        return Math.sqrt(2 * this.G * mass / radius);
    };
    ESG.prototype.orbit = function (mass, radius) {
        return Math.sqrt(this.G * mass / radius);
    };
    return ESG;
}());
exports.ESG = ESG;
