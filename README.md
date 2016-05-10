![](/banner.png)

# ESG
TODO

[![Build Status](https://travis-ci.org/bhalash/wordscramble.svg?branch=master)](https://travis-ci.org/bhalash/wordscramble)
[![Dependency Status](https://david-dm.org/bhalash/wordscramble.svg)](https://david-dm.org/bhalash/wordscramble)
[![devDependency Status](https://david-dm.org/bhalash/wordscramble/dev-status.svg)](https://david-dm.org/bhalash/wordscramble#info=devDependencies)
[![npm version](https://badge.fury.io/js/wordscramble.svg)](https://badge.fury.io/js/wordscramble)

## Installation

    npm install gravity

## Usage

    var esg = require('./');

    // Surface gravity in m/s.
    esg.gravity(5.972E+24, 6.371E+6) // 9.91810989409835

    // Relative surface gravity as ratio.
    esg.relative(5.972E+24, 6.371E+6); // 1

    // Escape velocity in m/s.
    esg.escape(5.972E+24, 6.371E+6); // 11241.732796619975

    // Orbital velocity in m/s.
    esg.orbit(5.972E+24, 6.371E+6); // 7949.105492777197

### Testing

    npm test

## Contributing
Pull requests welcome.

## License
The code is under the [MIT license](/LICENSE).