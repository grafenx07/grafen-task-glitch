# Test Plan & Validation 🧪

## Overview
This document outlines comprehensive testing procedures to validate all bug fixes and ensure the application works correctly.

---

## Pre-Testing Setup

### Environment
- **Browser:** Chrome/Firefox/Safari (latest versions)
- **Screen Sizes:** Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- **Tools:** Browser DevTools Console

### Initial State
1. Clear browser cache and localStorage
2. Open browser DevTools (F12)
3. Navigate to the Console tab
4. Load the application

---

## Bug Fix Validation Tests

### ✅ Test Case 1: Double Fetch Issue

**Objective:** Verify that tasks are fetched only once on page load

**Steps:**
1. Open DevTools Console
2. Add a console.log in useTasks.ts load function (optional)
3. Refresh the page (F5)
4. Observe Network tab

**Expected Results:**
- [ ] Only ONE fetch request to `/tasks.json` appears in Network tab
- [ ] No duplicate tasks in the task list
- [ ] Loading spinner appears only once
- [ ] No console errors

**Pass Criteria:** ✅ Single fetch confirmed

---

### ✅ Test Case 2: Undo Snackbar Bug

**Objective:** Verify lastDeleted state is cleared when snackbar closes

**Test 2A: Auto-close scenario**

**Steps:**
1. Click "Add Task" and create "Task A"
2. Delete "Task A"
3. Observe snackbar appears with "Undo" button
4. Wait 4 seconds for auto-close
5. Create and delete "Task B"
6. Click "Undo" when snackbar appears

**Expected Results:**
- [ ] Only "Task B" is restored
- [ ] "Task A" does NOT reappear
- [ ] Task list is correct

**Test 2B: Manual close scenario**

**Steps:**
1. Create and delete "Task C"
2. Manually close snackbar (click X or outside)
3. Create and delete "Task D"
4. Click "Undo"

**Expected Results:**
- [ ] Only "Task D" is restored
- [ ] "Task C" does NOT reappear

**Pass Criteria:** ✅ Only the most recently deleted task can be undone

---

### ✅ Test Case 3: Unstable Sorting

**Objective:** Verify tasks with same ROI and priority maintain consistent order

**Test Setup:**
1. Create the following tasks:
   - "Alpha" - Revenue: $1000, Time: 10h, Priority: High → ROI: 100
   - "Beta" - Revenue: $1000, Time: 10h, Priority: High → ROI: 100
   - "Gamma" - Revenue: $1000, Time: 10h, Priority: High → ROI: 100

**Steps:**
1. Note the order of tasks in the table
2. Refresh the page (F5) - 5 times
3. Filter by status/priority and reset
4. Add a new task and remove it
5. Check order after each action

**Expected Results:**
- [ ] Order remains: Alpha → Beta → Gamma (alphabetical)
- [ ] No flickering or reordering occurs
- [ ] Order is consistent across all operations

**Pass Criteria:** ✅ Alphabetical ordering maintained consistently

---

### ✅ Test Case 4: Double Dialog Opening

**Objective:** Verify only the intended dialog opens on button clicks

**Test 4A: Edit button**

**Steps:**
1. Click the Edit icon (pencil) on any task
2. Observe which dialogs open

**Expected Results:**
- [ ] ONLY the Edit dialog opens
- [ ] Task Details dialog does NOT open
- [ ] No error in console

**Test 4B: Delete button**

**Steps:**
1. Click the Delete icon (trash) on any task
2. Observe which dialogs open

**Expected Results:**
- [ ] ONLY the delete confirmation snackbar appears
- [ ] Task Details dialog does NOT open
- [ ] Edit dialog does NOT open

**Test 4C: Table row click**

**Steps:**
1. Click on the task row (not on buttons)
2. Observe which dialogs open

**Expected Results:**
- [ ] ONLY the Task Details dialog opens
- [ ] No other dialogs open

**Pass Criteria:** ✅ Event propagation properly controlled

---

### ✅ Test Case 5: ROI Calculation Errors

**Objective:** Verify ROI handles edge cases gracefully

**Test 5A: Division by zero**

**Steps:**
1. Create task "Zero Time Test"
2. Revenue: $1000
3. Time Taken: 0
4. Save and observe

**Expected Results:**
- [ ] ROI displays "N/A" (not "Infinity")
- [ ] Task saves successfully
- [ ] No console errors

**Test 5B: Invalid revenue**

**Steps:**
1. Inspect element on revenue field
2. Manually set value to invalid number (if possible via form)
3. OR create task with very large number: 999999999999999

**Expected Results:**
- [ ] ROI calculates correctly OR shows "N/A"
- [ ] No "NaN" displayed
- [ ] No "Infinity" displayed

**Test 5C: Negative time**

**Steps:**
1. Try to create task with negative time
2. Form should prevent OR handle gracefully

**Expected Results:**
- [ ] Time validation prevents negative values OR
- [ ] ROI handles negative correctly

**Test 5D: Normal calculation**

**Steps:**
1. Create task "Normal ROI"
2. Revenue: $5000
3. Time: 25h
4. Calculate: 5000 ÷ 25 = 200

**Expected Results:**
- [ ] ROI displays "200.0"
- [ ] Decimal formatting is correct
- [ ] Sorting uses this value correctly

**Pass Criteria:** ✅ All edge cases handled without errors

---

## Feature Integration Tests

### Test 6: Complete CRUD Operations

**Create:**
- [ ] Can add new task
- [ ] Required fields validated
- [ ] Task appears in list
- [ ] ROI calculated correctly

**Read:**
- [ ] Tasks display in table
- [ ] Click row opens details dialog
- [ ] All fields shown correctly

**Update:**
- [ ] Can edit existing task
- [ ] Changes save correctly
- [ ] ROI recalculates
- [ ] Sorting updates if needed

**Delete:**
- [ ] Delete button removes task
- [ ] Snackbar appears
- [ ] Undo restores task
- [ ] Permanent delete after snackbar closes

---

### Test 7: Search & Filters

**Search:**
- [ ] Search by title works
- [ ] Case-insensitive search
- [ ] Real-time filtering

**Status Filter:**
- [ ] Filter by Todo
- [ ] Filter by In Progress
- [ ] Filter by Done
- [ ] "All Statuses" shows everything

**Priority Filter:**
- [ ] Filter by High
- [ ] Filter by Medium
- [ ] Filter by Low
- [ ] "All Priorities" shows everything

**Combined Filters:**
- [ ] Search + Status filter
- [ ] Search + Priority filter
- [ ] All three combined

---

### Test 8: Metrics & Analytics

**Metrics Bar:**
- [ ] Total Revenue calculates correctly
- [ ] Time Efficiency percentage correct
- [ ] Average ROI displayed
- [ ] Performance Grade updates

**Charts:**
- [ ] Charts render without errors
- [ ] Data reflects current tasks
- [ ] Responsive on different screens

---

### Test 9: CSV Export

**Steps:**
1. Add several tasks
2. Click "Export CSV"
3. Open downloaded file

**Expected Results:**
- [ ] CSV file downloads
- [ ] All tasks included
- [ ] Columns are correct
- [ ] Data is accurate

---

### Test 10: Responsive Design

**Desktop (1920x1080):**
- [ ] All features accessible
- [ ] Table displays fully
- [ ] Charts render correctly

**Tablet (768x1024):**
- [ ] Layout adapts
- [ ] Buttons accessible
- [ ] Dialogs fit screen

**Mobile (375x667):**
- [ ] Stack layout works
- [ ] Touch targets large enough
- [ ] Scrolling smooth
- [ ] No horizontal scroll

---

## Performance Tests

### Test 11: Large Dataset

**Steps:**
1. Import/create 100+ tasks
2. Perform operations

**Expected Results:**
- [ ] List renders quickly (< 1s)
- [ ] Scrolling is smooth
- [ ] Sorting doesn't lag
- [ ] Filtering is instant

---

### Test 12: Memory Leaks

**Steps:**
1. Open DevTools → Performance
2. Take heap snapshot
3. Perform 50 add/delete operations
4. Take another heap snapshot
5. Compare

**Expected Results:**
- [ ] Memory usage stable
- [ ] No significant growth
- [ ] Event listeners cleaned up

---

## Accessibility Tests

### Test 13: Keyboard Navigation

**Expected Results:**
- [ ] Tab navigates through buttons
- [ ] Enter activates buttons
- [ ] Escape closes dialogs
- [ ] Focus indicators visible

---

### Test 14: Screen Reader

**Expected Results:**
- [ ] Buttons have aria-labels
- [ ] Form fields have labels
- [ ] Dialogs have roles
- [ ] Tables have proper structure

---

## Browser Compatibility

### Test 15: Cross-Browser Testing

**Chrome:**
- [ ] All features work
- [ ] No console errors

**Firefox:**
- [ ] All features work
- [ ] No console errors

**Safari:**
- [ ] All features work
- [ ] No console errors

**Edge:**
- [ ] All features work
- [ ] No console errors

---

## Security Tests

### Test 16: XSS Prevention

**Steps:**
1. Create task with notes: `<script>alert('XSS')</script>`
2. Save and view task

**Expected Results:**
- [ ] Script does NOT execute
- [ ] Notes display as plain text
- [ ] No security warnings

---

### Test 17: Input Validation

**Expected Results:**
- [ ] Duplicate titles prevented
- [ ] Negative numbers handled
- [ ] Empty required fields blocked
- [ ] SQL injection not applicable (no backend)

---

## Regression Tests

### Test 18: Existing Features Still Work

After all bug fixes, verify:
- [ ] Activity log records actions
- [ ] Advanced analytics display
- [ ] User context maintains state
- [ ] LocalStorage persistence works
- [ ] Dark/light theme (if applicable)

---

## Test Execution Checklist

### Pre-Deployment
- [ ] All Test Cases 1-18 pass
- [ ] No console errors or warnings
- [ ] Build succeeds: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] TypeScript compiles: `npx tsc --noEmit`

### Post-Deployment
- [ ] Production URL loads correctly
- [ ] Spot-check key features
- [ ] Performance acceptable (Lighthouse score > 90)
- [ ] No CORS errors
- [ ] Analytics tracking works (if configured)

---

## Bug Report Template

If a test fails:

```markdown
**Test Case:** [Test number and name]
**Expected:** [What should happen]
**Actual:** [What actually happened]
**Steps to Reproduce:**
1.
2.
3.

**Environment:**
- Browser:
- OS:
- Screen Size:

**Screenshots:**
[Attach screenshots]

**Console Errors:**
[Paste any errors]
```

---

## Test Coverage Summary

| Category | Tests | Status |
|----------|-------|--------|
| Bug Fixes | 5 | ⏳ Pending |
| CRUD Operations | 1 | ⏳ Pending |
| Filters | 1 | ⏳ Pending |
| Analytics | 1 | ⏳ Pending |
| CSV Export | 1 | ⏳ Pending |
| Responsive | 1 | ⏳ Pending |
| Performance | 2 | ⏳ Pending |
| Accessibility | 2 | ⏳ Pending |
| Cross-Browser | 1 | ⏳ Pending |
| Security | 2 | ⏳ Pending |
| Regression | 1 | ⏳ Pending |
| **Total** | **18** | **Ready** |

---

**Document Version:** 1.0
**Last Updated:** December 31, 2025
**Status:** Ready for Testing
