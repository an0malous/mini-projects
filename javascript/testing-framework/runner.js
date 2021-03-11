const fs = require('fs');
const path = require('path');

class Runner {
	constructor() {
		this.testFiles = [];
	}

   async runTests () {
      for(let files of this.testFiles){
         require(file.name)
   }

	async collectFiles(targetPath) {
		const files = await fs.promises.readdir(targetPath);
		for (let file of files) {
			const filepath = path.join(targetPath, file);
			const stats = await fs.promises.lstat(filepath);

			if (stats.isFile()) {
				this.testFiles.push({ name: filepath });
			} else if (stats.isDirectory() && file.includes('.test.js')) {
				const childFiles = await fs.promises.readdir(filepath);

				files.push(...childFiles.map((f) => path.join(file, f)));
			}
		}
	}
}

module.exports = Runner;
