var esg = require('./'),
    test = require('tape');

var earth = {
    radius: 6.371E+6,
    mass: 5.972E+24,
    gravity: 9.91810989409835,
    escape: 11241.732796619975,
    orbit: 7949.105492777197
};

test('Gravity calculation functions.', function(assert) {
    assert.plan(4);
    assert.equal(esg.gravity(earth.mass, earth.radius), earth.gravity);
    assert.equal(esg.relative(earth.mass, earth.radius), 1);
    assert.equal(esg.escape(earth.mass, earth.radius), earth.escape);
    assert.equal(esg.orbit(earth.mass, earth.radius), earth.orbit);
});
