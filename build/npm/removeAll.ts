
import glob from 'glob';
import path from 'path';
import fs from 'fs';
import { REPO_ROOT } from '../utils';

const files = glob.sync('**/package-lock.json', {
	cwd: REPO_ROOT,
	ignore: ['**/node_modules/**', '**/out/**']
});

for (const file of files) {
	const filePath = path.join(REPO_ROOT, file);
	console.log(`Deleting ${file}...`);
	fs.unlinkSync(filePath);
}
