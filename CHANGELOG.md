# Changelog

All notable changes to the TaskGlitch project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-31

### 🐛 Bug Fixes

#### Fixed Bug #1: Double Fetch Issue
- **Problem:** Tasks were loaded twice on page load due to React StrictMode and duplicate useEffect
- **Solution:** Added `fetchedRef` guard and removed redundant useEffect
- **Impact:** 50% reduction in API calls, faster load time, no duplicate data
- **Files:** `src/hooks/useTasks.ts`

#### Fixed Bug #2: Undo Snackbar Bug
- **Problem:** `lastDeleted` state not cleared when snackbar closed, causing phantom data recovery
- **Solution:** Implemented `clearLastDeleted()` function and proper cleanup handlers
- **Impact:** Predictable undo behavior, proper state management
- **Files:** `src/hooks/useTasks.ts`, `src/context/TasksContext.tsx`, `src/App.tsx`

#### Fixed Bug #3: Unstable Sorting
- **Problem:** Tasks with identical ROI/priority reordered randomly due to `Math.random()` comparator
- **Solution:** Replaced with deterministic alphabetical sorting by title
- **Impact:** Stable UI, no flickering, consistent ordering
- **Files:** `src/utils/logic.ts`

#### Fixed Bug #4: Double Dialog Opening
- **Problem:** Edit/Delete buttons triggered both action dialog and details dialog due to event bubbling
- **Solution:** Added `e.stopPropagation()` to button handlers
- **Impact:** Clean UX, only intended dialog opens
- **Files:** `src/components/TaskTable.tsx`

#### Fixed Bug #5: ROI Calculation Errors
- **Problem:** Division by zero and invalid inputs caused "Infinity" and "NaN" displays
- **Solution:** Comprehensive input validation and safe calculation logic
- **Impact:** Robust handling of edge cases, clean UI display
- **Files:** `src/utils/logic.ts`

### 🔐 Security Fixes

#### Removed XSS Vulnerability
- **Problem:** Task notes rendered with `dangerouslySetInnerHTML`
- **Solution:** Render notes as plain text
- **Impact:** Prevents XSS attacks, secure user input handling
- **Files:** `src/components/TaskTable.tsx`

### ✨ Enhancements

#### Documentation
- Added comprehensive `README.md` with project overview, features, and setup instructions
- Created detailed `BUGFIXES.md` with technical analysis of each fix
- Added `DEPLOYMENT.md` with deployment guides for Vercel, Netlify, and GitHub Pages
- Created `TESTING.md` with 18 test cases covering all functionality
- Added `CONTRIBUTING.md` for future contributors
- Included `CHANGELOG.md` (this file)

#### CI/CD
- Added GitHub Actions workflow for automated builds and deployments
- Configured Vercel deployment settings

#### Code Quality
- Fixed TypeScript type signatures for better type safety
- Added inline comments explaining bug fixes
- Improved code organization and consistency
- Fixed ESM module imports in vite.config.ts
- Added @types/node for proper Node.js type support

### 📦 Dependencies

#### Added
- `@types/node` (dev dependency) - For Node.js type definitions

### 🔧 Configuration

#### Updated
- `tsconfig.node.json` - Added Node.js types
- `vite.config.ts` - Fixed ESM imports for path resolution
- Created `vercel.json` for Vercel deployment configuration

### 📝 Files Added
- `README.md` - Main project documentation
- `BUGFIXES.md` - Detailed bug fix documentation
- `DEPLOYMENT.md` - Deployment guide
- `TESTING.md` - Comprehensive test plan
- `CONTRIBUTING.md` - Contribution guidelines
- `CHANGELOG.md` - This file
- `.github/workflows/ci-cd.yml` - CI/CD pipeline
- `vercel.json` - Vercel configuration

### 📝 Files Modified
- `src/hooks/useTasks.ts` - Bug fixes #1, #2, #5
- `src/utils/logic.ts` - Bug fixes #3, #5
- `src/components/TaskTable.tsx` - Bug fixes #4, security fix
- `src/App.tsx` - Bug fix #2
- `src/context/TasksContext.tsx` - Bug fix #2
- `src/components/TaskForm.tsx` - TypeScript type fixes
- `vite.config.ts` - ESM import fixes
- `tsconfig.node.json` - Node types configuration

---

## Summary

**Total Bugs Fixed:** 5 mandatory + 1 security issue = 6 fixes
**Files Modified:** 8 files
**Documentation Added:** 6 comprehensive documents
**Lines Changed:** ~150 lines
**Build Status:** ✅ Passing
**TypeScript:** ✅ No errors
**Ready for Deployment:** ✅ Yes

---

## Upgrade Notes

This is the initial release after bug fixes. To use:

```bash
npm install
npm run build
npm run preview
```

For deployment:
```bash
vercel --prod
```

Or follow instructions in `DEPLOYMENT.md`

---

## Credits

**Author:** Grafen
**Project:** TaskGlitch - SDE Assignment
**Date:** December 31, 2025
**Repository:** https://github.com/yourusername/grafen-taskglitch

---

[1.0.0]: https://github.com/yourusername/grafen-taskglitch/releases/tag/v1.0.0
