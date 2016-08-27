![](/banner.png)

# ESG
ESG-short for **E**quatorial **S**urface **G**ravity-is a small functional library which returns the [surface gravity][1] of a spherical body as derived from the Newton's [gravitational constant][3].

[![Build Status](https://travis-ci.org/bhalash/gravity.svg?branch=master)](https://travis-ci.org/bhalash/gravity)

## Installation

    npm install esg

## Usage

    var esg = new (require('esg')).ESG();

    // Surface gravity in m/s.
    esg.gravity(5.972E+24, 6.371E+6) // 9.91810989409835

    // Relative surface gravity to Earth's, expressed as a ratio.
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
The code is under the [MIT license][2].

[1]: https://en.wikipedia.org/wiki/Surface_gravity "Surface gravity"
[2]: /LICENSE "LICENSE"
[3]: https://en.wikipedia.org/wiki/Gravitational_constant "Gravitational Constant"
