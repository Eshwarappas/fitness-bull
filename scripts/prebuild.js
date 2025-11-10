import fs from 'fs';
import path from 'path';

// Example: update version in package.json (optional)
const packageJsonPath = path.resolve('package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Increment patch version
const [major, minor, patch] = packageJson.version.split('.').map(Number);
packageJson.version = `${major}.${minor}.${patch + 1}`;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`Updated package.json version to ${packageJson.version}`);

// Example: update .env variable
const envPath = path.resolve('.env');
let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
envContent = envContent.replace(/VITE_BUILD_TIME=.*/g, `VITE_BUILD_TIME=${Date.now()}`);
if (!envContent.includes('VITE_BUILD_TIME')) {
  envContent += `\nVITE_BUILD_TIME=${Date.now()}\n`;
}
fs.writeFileSync(envPath, envContent);
console.log(`Updated .env with current build time`);
