# Akan Name Generator

A simple tool for generating Akan names based on birth day and gender.

## Features

- Determines the Akan day name from a date of birth
- Supports male/female name generation
- Easy to use from the command line or as a library

## Installation

```bash
git clone https://github.com/yourusername/akan-name-generator.git
cd akan-name-generator
```
view the live project here
 https://chemutdor-web.github.io/Akan-name/

## Usage

```bash
# Example usage
node index.js
```

Or import the generator in your code:

```js
const { getAkanName } = require('./index');

const name = getAkanName('1990-01-01', 'female');
console.log(name);
```

## Contributing

- Fork the repository
- Create a feature branch
- Open a pull request

## License

MIT