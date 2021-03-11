const jsdom = require('jsdom');
const path = require('node:path');
const { JSDOM } = jsdom;

const render = async (filename) => {
	const filePath = path.join(process.cwd(), filename);
	const dom = await JSDOM.fromFile(filePath, {
		runScripts: 'dangerously',
		resources: 'usable',
	});

	return dom;
};

module.exports = render;
