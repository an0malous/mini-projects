#!/usr/bin/env node
const chokidar = require('chokidar');
const prog = require('caporal');
const fs = require('fs');
const { spawn } = require('child_process');

const debounce = (func, delay = 1000) => {
   let timeoutId;
   return (...args) => {
       if(timeoutId) {
           clearTimeout(timeoutId);
       }
       timeoutId = setTimeout(() => {
           func.apply(null, args);
       }, delay)
   };
};

prog
   .version('0.0.1')
	.argument('[filename]', 'Name of a file or execute')
	.action(async ({ filename }) => {
		const name = filename || 'index.js';

		try {
			await fs.promises.access(name);
		} catch (err) {
			throw new Error(`Could not find file ${name}`);
		}

      let proc;
      const start = debounce(()=> {
         if(proc){
            proc.kill();
         }
         console.log('>>>>>>>>>STARTING PROCESS>>>>>>>>>')
         proc = spawn('node', [name], { stdio: 'inherit' })
      }, 200)
		chokidar
			.watch('.')
			.on('add', start)
			.on('change', start)
			.on('unlink', start);
	});

prog.parse(process.argv);
