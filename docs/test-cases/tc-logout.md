# Test Cases - Logout

## Module Info
| Item | Details |
|------|---------|
| **Module** | Authentication |
| **Feature** | User Logout |
| **Jira Task** | SCRUM-17 |
| **Author** | Zakaria Boumarouane |
| **Date** | December 2025 |

---

## Logout Locations
| Location | Element |
|----------|---------|
| Top right | Profile dropdown menu → "Logout" |
| Bottom left | Sidebar → "Log Out" link |

---

## Test Cases

### TC-LOGOUT-001: Successful logout via profile dropdown
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User is logged in and on dashboard |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click profile icon (top right) | Dropdown menu appears |
| 2 | Click "Logout" option | User is logged out |
| 3 | Observe redirect | Redirected to /auth page |
| 4 | Try to access dashboard URL directly | Should redirect to /auth (cannot access) |

---

### TC-LOGOUT-002: Successful logout via sidebar
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User is logged in and on dashboard |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Log Out" link (bottom left sidebar) | User is logged out |
| 2 | Observe redirect | Redirected to /auth page |
| 3 | Try to access dashboard URL directly | Should redirect to /auth (cannot access) |

---

### TC-LOGOUT-003: Session cleared after logout
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Security |
| **Precondition** | User is logged in |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Logout using either method | Logout successful |
| 2 | Press browser back button | Should NOT return to authenticated page |
| 3 | Check browser cookies/storage | Session token should be cleared |

---

### TC-LOGOUT-004: Logout from different pages
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Positive |
| **Precondition** | User is logged in |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Characters page | Page loads |
| 2 | Logout via profile dropdown | Logout successful, redirected to /auth |
| 3 | Login again | - |
| 4 | Navigate to Worldbuilding page | Page loads |
| 5 | Logout via sidebar | Logout successful, redirected to /auth |

---

### TC-LOGOUT-005: Logout with unsaved work
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Exploratory |
| **Precondition** | User is logged in and has unsaved changes in editor |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open editor and make changes (don't save) | Unsaved work exists |
| 2 | Click logout | Document: Is there a confirmation warning? |
| 3 | Document behavior | Does it warn about unsaved work or logout immediately? |

---

### TC-LOGOUT-006: Multiple tabs logout
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | User is logged in with app open in 2 browser tabs |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open Noveli in Tab 1 and Tab 2 | Both tabs logged in |
| 2 | Logout in Tab 1 | Tab 1 redirects to /auth |
| 3 | Refresh Tab 2 | Tab 2 should also be logged out |

---

### TC-LOGOUT-007: Logout button visibility
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | UI/UX |
| **Precondition** | User is logged in |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Check sidebar | "Log Out" link visible at bottom left |
| 2 | Click profile icon | Dropdown shows "Logout" option |
| 3 | Verify both are accessible | Both logout options work |

---

### TC-LOGOUT-008: Logout redirects to correct page
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Positive |
| **Precondition** | User is logged in |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Logout | User logged out |
| 2 | Check URL | Should be /auth or home page |
| 3 | Check page state | Login tab should be active |

---

## Test Case Summary

| Priority | Count |
|----------|-------|
| P1 - Critical | 3 |
| P2 - High | 4 |
| P3 - Medium | 1 |
| **Total** | **8** |

---

## Notes
- Two logout options exist (profile dropdown and sidebar)
- Both should behave identically
- Verify session is fully cleared after logout
- Test browser back button after logout
