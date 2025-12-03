# Test Cases - Registration

## Module Info
| Item | Details |
|------|---------|
| **Module** | Authentication |
| **Feature** | User Registration |
| **Jira Task** | SCRUM-1 |
| **Author** | Zakaria Boumarouane|
| **Date** | December 2025 |

---

## Form Fields
| Field | Type | Validation |
|-------|------|------------|
| Username | Text | Min 3 characters |
| Email | Email | Valid email format |
| Password | Password | Min 6 characters |
| Confirm Password | Password | Must match Password |

---

## Test Cases

### TC-REG-001: Successful registration with valid data
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User is on /auth page with Register tab selected, email not already registered |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to noveli.app/auth | Auth page is displayed with Login tab active |
| 2 | Click "Register" tab | Registration form is displayed |
| 3 | Enter valid username (3+ chars): "testuser" | Field accepts input |
| 3 | Enter valid email: "test@example.com" | Field accepts input |
| 4 | Enter valid password (6+ chars): "Test123" | Field accepts input (masked) |
| 5 | Enter matching confirm password: "Test123" | Field accepts input (masked) |
| 6 | Click "Create Account" | Account created, verification email sent |

---

### TC-REG-002: Registration with empty username
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave username field empty | - |
| 2 | Fill other fields with valid data | - |
| 3 | Click "Create Account" | Error: "Username must be at least 3 characters" |

---

### TC-REG-003: Registration with username less than 3 characters
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: "ab" (2 chars) | - |
| 2 | Fill other fields with valid data | - |
| 3 | Click "Create Account" | Error: "Username must be at least 3 characters" |

---

### TC-REG-004: Registration with username exactly 3 characters
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: "abc" (3 chars) | Field accepts input |
| 2 | Fill other fields with valid data | - |
| 3 | Click "Create Account" | Registration successful |

---

### TC-REG-005: Registration with empty email
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Leave email field empty | - |
| 3 | Fill password fields with valid data | - |
| 4 | Click "Create Account" | Error: "Please enter a valid email address" |

---

### TC-REG-006: Registration with invalid email format
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Register tab selected |

**Test Data:**
| Invalid Email | Reason |
|---------------|--------|
| plaintext | No @ symbol |
| user@ | No domain |
| @domain.com | No local part |
| user@domain | No TLD |
| user@@domain.com | Double @ |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Enter invalid email (from test data) | - |
| 3 | Fill password fields with valid data | - |
| 4 | Click "Create Account" | Error: "Please enter a valid email address" |

---

### TC-REG-007: Registration with empty password
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username and email | - |
| 2 | Leave password field empty | - |
| 3 | Click "Create Account" | Error: "Password must be at least 6 characters" |

---

### TC-REG-008: Registration with password less than 6 characters
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username and email | - |
| 2 | Enter password: "12345" (5 chars) | - |
| 3 | Enter confirm password: "12345" | - |
| 4 | Click "Create Account" | Error: "Password must be at least 6 characters" |

---

### TC-REG-009: Registration with password exactly 6 characters
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username and email | - |
| 2 | Enter password: "123456" (6 chars) | - |
| 3 | Enter matching confirm password | - |
| 4 | Click "Create Account" | Registration successful |

---

### TC-REG-010: Registration with mismatched passwords
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username and email | - |
| 2 | Enter password: "Test123" | - |
| 3 | Enter confirm password: "Test456" | - |
| 4 | Click "Create Account" | Error: "Passwords do not match" (or similar) |

---

### TC-REG-011: Registration with already registered email
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | Email "existing@example.com" is already registered |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Enter already registered email | - |
| 3 | Enter valid matching passwords | - |
| 4 | Click "Create Account" | Error: "Email already in use" (or similar) |

---

### TC-REG-012: Registration with already taken username
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Negative |
| **Precondition** | Username "existinguser" is already taken |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter already taken username | - |
| 2 | Enter valid unique email | - |
| 3 | Enter valid matching passwords | - |
| 4 | Click "Create Account" | Error: "Username already taken" (or similar) |

---

### TC-REG-013: Registration form field validation on blur
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | UI/UX |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter invalid username (2 chars) | - |
| 2 | Click outside field (blur) | Error shown immediately without submitting |
| 3 | Repeat for email with invalid format | Error shown on blur |
| 4 | Repeat for short password | Error shown on blur |

---

### TC-REG-014: Registration with special characters in username
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Exploratory |
| **Precondition** | User is on /auth page with Register tab selected |

**Test Data:**
| Username | Expected |
|----------|----------|
| user_name | TBD - Test if allowed |
| user-name | TBD - Test if allowed |
| user.name | TBD - Test if allowed |
| user@name | TBD - Test if allowed |
| user name | TBD - Test if spaces allowed |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username with special characters | Document which are allowed/rejected |

---

### TC-REG-015: Registration with very long inputs
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Register tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter 100+ character username | Should reject or truncate |
| 2 | Enter 100+ character email | Should reject or truncate |
| 3 | Enter 100+ character password | Should reject or handle gracefully |

---

## Test Case Summary

| Priority | Count |
|----------|-------|
| P1 - Critical | 9 |
| P2 - High | 3 |
| P3 - Medium | 3 |
| **Total** | **15** |

---

## Notes
- Test on Chrome, Firefox, Safari
- Test on mobile viewport
- Check for password visibility toggle if exists
- Verify error messages are user-friendly
