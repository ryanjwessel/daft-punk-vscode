const { writeFileSync } = require('fs');
const { DaftPunk } = require('./themes');
const getColors = require('./getColors');
const getTokenColors = require('./getTokenColors');
const palette = require('./palette');

const themeMeta = Object.assign(palette, DaftPunk);
const colors = getColors(themeMeta);
const tokenColors = getTokenColors(themeMeta);

const content = {
	colors,
	tokenColors,
};

writeFileSync('./themes/DaftPunk.json', JSON.stringify(content));
