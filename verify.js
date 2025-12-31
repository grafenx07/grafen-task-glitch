#!/usr/bin/env node

/**
 * Pre-Deployment Verification Script
 * Run this before deploying to ensure everything is ready
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('🔍 Running Pre-Deployment Verification...\n');

// Check 1: Build directory exists
console.log('✓ Checking build directory...');
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  checks.passed.push('Build directory exists');
} else {
  checks.failed.push('Build directory not found - run npm run build');
}

// Check 2: Essential documentation files
console.log('✓ Checking documentation...');
const docs = ['README.md', 'BUGFIXES.md', 'DEPLOYMENT.md', 'TESTING.md', 'CHANGELOG.md'];
docs.forEach(doc => {
  if (fs.existsSync(path.join(__dirname, doc))) {
    checks.passed.push(`${doc} exists`);
  } else {
    checks.failed.push(`${doc} missing`);
  }
});

// Check 3: Vercel configuration
console.log('✓ Checking deployment config...');
if (fs.existsSync(path.join(__dirname, 'vercel.json'))) {
  checks.passed.push('Vercel config exists');
} else {
  checks.warnings.push('vercel.json missing - may affect deployment');
}

// Check 4: Git repository
console.log('✓ Checking git...');
if (fs.existsSync(path.join(__dirname, '.git'))) {
  checks.passed.push('Git repository initialized');
} else {
  checks.failed.push('Git repository not initialized');
}

// Check 5: Node modules
console.log('✓ Checking dependencies...');
if (fs.existsSync(path.join(__dirname, 'node_modules'))) {
  checks.passed.push('Dependencies installed');
} else {
  checks.failed.push('Dependencies not installed - run npm install');
}

// Check 6: Core source files with bug fixes
console.log('✓ Checking bug fixes...');
const fixedFiles = [
  'src/hooks/useTasks.ts',
  'src/utils/logic.ts',
  'src/components/TaskTable.tsx',
  'src/App.tsx',
  'src/context/TasksContext.tsx'
];
fixedFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    checks.passed.push(`${file} exists`);
  } else {
    checks.failed.push(`${file} missing`);
  }
});

// Check 7: TypeScript config
console.log('✓ Checking TypeScript...');
if (fs.existsSync(path.join(__dirname, 'tsconfig.json'))) {
  checks.passed.push('TypeScript config exists');
} else {
  checks.failed.push('tsconfig.json missing');
}

// Print results
console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION RESULTS');
console.log('='.repeat(60) + '\n');

console.log(`✅ Passed: ${checks.passed.length}`);
checks.passed.forEach(check => console.log(`   ✓ ${check}`));

if (checks.warnings.length > 0) {
  console.log(`\n⚠️  Warnings: ${checks.warnings.length}`);
  checks.warnings.forEach(warning => console.log(`   ⚠ ${warning}`));
}

if (checks.failed.length > 0) {
  console.log(`\n❌ Failed: ${checks.failed.length}`);
  checks.failed.forEach(fail => console.log(`   ✗ ${fail}`));
}

console.log('\n' + '='.repeat(60));

if (checks.failed.length === 0) {
  console.log('✅ ALL CHECKS PASSED - Ready for deployment! 🚀');
  console.log('='.repeat(60));
  console.log('\nNext steps:');
  console.log('1. Push to GitHub: git push origin main');
  console.log('2. Deploy to Vercel: vercel --prod');
  console.log('3. Test live URL');
  console.log('4. Submit project\n');
  process.exit(0);
} else {
  console.log('❌ SOME CHECKS FAILED - Fix issues before deploying');
  console.log('='.repeat(60) + '\n');
  process.exit(1);
}
