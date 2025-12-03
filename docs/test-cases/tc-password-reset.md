# Test Cases - Password Reset

## Module Info
| Item | Details |
|------|---------|
| **Module** | Authentication |
| **Feature** | Password Reset |
| **Jira Task** | SCRUM-18 |
| **Author** | Zakaria Boumarouane |
| **Date** | December 2025 |

---

## Flow Overview
1. User clicks "Forgot your password?" on Login tab
2. User enters email on Reset Password tab
3. User clicks "Send reset link"
4. User receives email with reset link
5. User clicks link → "Set new password" page
6. User enters new password + confirmation
7. User clicks "Reset password"

---

## Part 1: Request Reset Link

### TC-RESET-001: Successful reset link request
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User account exists with email "test@example.com" |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to /auth | Auth page displayed |
| 2 | Click "Reset Password" tab | Reset password form displayed |
| 3 | Enter registered email: "test@example.com" | Field accepts input |
| 4 | Click "Send reset link" | Success message: "Check your email" |
| 5 | Check email inbox | Reset email received |

---

### TC-RESET-002: Reset request with unregistered email
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Security |
| **Precondition** | Email "fake@notregistered.com" is not in system |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Go to Reset Password tab | Form displayed |
| 2 | Enter unregistered email | Field accepts input |
| 3 | Click "Send reset link" | Same success message shown (security - doesn't reveal if email exists) |
| 4 | Check email | No email received |

**Note:** Message should be identical for registered and unregistered emails

---

### TC-RESET-003: Reset request with empty email
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on Reset Password tab |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave email field empty | - |
| 2 | Click "Send reset link" | Error: validation message for empty email |

---

### TC-RESET-004: Reset request with invalid email format
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on Reset Password tab |

**Test Data:**
| Invalid Email |
|---------------|
| plaintext |
| user@ |
| @domain.com |
| user@domain |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter invalid email format | - |
| 2 | Click "Send reset link" | Error: "Please enter a valid email address" |

---

### TC-RESET-005: Back to login navigation
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Positive |
| **Precondition** | User is on Reset Password tab |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Back to login" button | Returns to Login tab |

---

### TC-RESET-006: Login here link navigation
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Positive |
| **Precondition** | User is on Reset Password tab |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Login here" link | Returns to Login tab |

---

## Part 2: Set New Password

### TC-RESET-007: Successful password reset
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User clicked valid reset link from email |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click reset link in email | "Set new password" page displayed |
| 2 | Enter new password (6+ chars): "NewPass123" | Field accepts input |
| 3 | Enter confirm password: "NewPass123" | Field accepts input |
| 4 | Click "Reset password" | Success message, password changed |
| 5 | Login with new password | Login successful |

---

### TC-RESET-008: Password reset with mismatched passwords
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on "Set new password" page |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter new password: "NewPass123" | - |
| 2 | Enter confirm password: "DifferentPass" | - |
| 3 | Click "Reset password" | Error: "Passwords do not match" |

---

### TC-RESET-009: Password reset with short password
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Boundary |
| **Precondition** | User is on "Set new password" page |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter new password: "12345" (5 chars) | - |
| 2 | Enter matching confirm password | - |
| 3 | Click "Reset password" | Error: "Password must be at least 6 characters" |

---

### TC-RESET-010: Password reset with empty fields
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on "Set new password" page |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave both fields empty | - |
| 2 | Click "Reset password" | Validation error shown |

---

### TC-RESET-011: Expired reset link
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | Reset link was generated but time has passed (if links expire) |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click old/expired reset link | Error: "Link expired" or redirected to request new link |

**Note:** Document if/when links expire

---

### TC-RESET-012: Used reset link (already used)
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | Reset link was already used to change password |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click same reset link again | Error: "Link already used" or invalid |

---

### TC-RESET-013: Old password no longer works after reset
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Security |
| **Precondition** | User successfully reset password from "OldPass" to "NewPass" |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Try to login with old password | Login fails |
| 2 | Login with new password | Login succeeds |

---

## Test Case Summary

| Priority | Count |
|----------|-------|
| P1 - Critical | 9 |
| P2 - High | 2 |
| P3 - Medium | 2 |
| **Total** | **13** |

---

## Notes
- Security: Same message shown for registered/unregistered emails
- Test reset link expiration (if applicable)
- Test multiple reset requests (does old link become invalid?)
- Password requirements: minimum 6 characters
