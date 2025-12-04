# Test Cases - Email Verification

## Module Info
| Item | Details |
|------|---------|
| **Module** | Authentication |
| **Feature** | Email Verification |
| **Jira Task** | SCRUM-19 |
| **Author** | Zakaria Boumarouane |
| **Date** | December 2025 |

---

## Flow Overview
1. User registers new account
2. User redirected to /verify-email?blocked=true
3. User cannot access app until verified
4. User clicks verification link in email
5. "Account is active" message shown
6. Auto-redirects to dashboard

---

## Test Cases

### TC-VERIFY-001: Verification page shown after registration
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User just completed registration |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Complete registration form | Registration successful |
| 2 | Observe redirect | Redirected to /verify-email?blocked=true |
| 3 | Verify page content | "Email Verification Required" message displayed |
| 4 | Verify email shown | Logged in email address is displayed |

---

### TC-VERIFY-002: Successful email verification
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User registered but not verified, verification email received |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open verification email | Email contains verification link |
| 2 | Click verification link | Page loads with "Account is active" message |
| 3 | Wait for redirect | Auto-redirects to dashboard |
| 4 | Verify access | User can now access all app features |

---

### TC-VERIFY-003: Unverified user blocked from app
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Security |
| **Precondition** | User registered but NOT verified |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Try to navigate to /dashboard | Redirected to verification page |
| 2 | Try to navigate to /characters | Redirected to verification page |
| 3 | Try to navigate to /editor | Redirected to verification page |

**Note:** All protected routes should redirect to verification page

---

### TC-VERIFY-004: Resend verification email
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User is on verification page |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Resend Verification Email" button | Button shows loading/processing |
| 2 | Observe confirmation | Success message shown |
| 3 | Check email inbox | New verification email received |

---

### TC-VERIFY-005: Resend verification multiple times
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Exploratory |
| **Precondition** | User is on verification page |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Resend Verification Email" | Email sent |
| 2 | Click again immediately | Document: Is there rate limiting? |
| 3 | Click 5 more times | Document: Any restrictions? |

**Note:** Check if there's rate limiting to prevent spam

---

### TC-VERIFY-006: Logout from verification page
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Positive |
| **Precondition** | User is on verification page |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Logout" button | User logged out |
| 2 | Observe redirect | Redirected to /auth page |

---

### TC-VERIFY-007: Login with unverified account
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Security |
| **Precondition** | User registered but not verified, then logged out |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Go to /auth login tab | Login form displayed |
| 2 | Enter valid credentials | - |
| 3 | Click "Log In" | Login succeeds but... |
| 4 | Observe redirect | Redirected to verification page (still blocked) |

---

### TC-VERIFY-008: Expired verification link
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | Verification link is old/expired (if links expire) |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click old verification link | Error message or prompt to resend |

**Note:** Document if/when verification links expire

---

### TC-VERIFY-009: Already used verification link
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | User already verified their account |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click same verification link again | Should handle gracefully (already verified or redirect to dashboard) |

---

### TC-VERIFY-010: Invalid verification link
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | None |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Manually modify verification URL token | Error message: invalid link |

---

### TC-VERIFY-011: Verification page shows correct email
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | UI/UX |
| **Precondition** | User registered with "test@example.com" |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Observe verification page | Shows "Logged in as: test@example.com" |

---

### TC-VERIFY-012: Verification email content
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Positive |
| **Precondition** | User just registered |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open verification email | Email has clear subject line |
| 2 | Check email content | Contains verification link |
| 3 | Check branding | Noveli branding present |
| 4 | Test link | Link is clickable and works |

---

## Test Case Summary

| Priority | Count |
|----------|-------|
| P1 - Critical | 5 |
| P2 - High | 5 |
| P3 - Medium | 2 |
| **Total** | **12** |

---

## Notes
- Users are BLOCKED from app until email verified
- Verification page URL: /verify-email?blocked=true
- "Account is active" message shown after clicking link
- Auto-redirect to dashboard after verification
- Check rate limiting on resend button
