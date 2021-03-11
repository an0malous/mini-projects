const fs = require('fs');
const chalk = require('chalk')
const path = require('path');

class Runner {
	constructor() {
		this.testFiles = [];
	}

	async runTests() {
		for (let file of this.testFiles) {
         console.log(chalk.gray(`--- ${file.shortname}`))
			const beforeEaches = [];
			global.beforeEach = (fn) => {
				beforeEaches.push(fn);
			};
			global.it = (desc, fn) => {
				beforeEaches.forEach((func) => func());
            try {
               fn()
               console.log(chalk.red(` OK --- ${desc}`))
            } catch (err) {
               console.log(chalk.red(` X --- ${desc}`))
          
               console.log('\t', err.message)
            }
			};
         try {
            require(file.name);
            console.log(chalk.green(` OK --- ${file.name}`))
         } catch (err){
            console.log(chalk.red(` X --- ${file.name}`))
            console.log('\t', err)
         }
		
		}
	}

	async collectFiles(targetPath) {
		const files = await fs.promises.readdir(targetPath);
		for (let file of files) {
			const filepath = path.join(targetPath, file);
			const stats = await fs.promises.lstat(filepath);

			if (stats.isFile()) {
				this.testFiles.push({ name: filepath, shortname: file });
			} else if (stats.isDirectory() && file.includes('.test.js')) {
				const childFiles = await fs.promises.readdir(filepath);

				files.push(...childFiles.map((f) => path.join(file, f)));
			}
		}
	}
}

module.exports = Runner;
