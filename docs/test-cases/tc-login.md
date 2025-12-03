# Test Cases - Login

## Module Info
| Item | Details |
|------|---------|
| **Module** | Authentication |
| **Feature** | User Login |
| **Jira Task** | SCRUM-16 |
| **Author** | Zakaria Boumarouane |
| **Date** | December 2025 |

---

## Form Fields
| Field | Type | Validation |
|-------|------|------------|
| Username | Text | Min 3 characters |
| Password | Password | Min 6 characters |

## Additional Elements
- "Forgot your password?" link
- "Register here" link
- Login/Register tab toggle

---

## Test Cases

### TC-LOGIN-001: Successful login with valid credentials
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Positive |
| **Precondition** | User account exists with username "testuser" and password "Test123" |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to noveli.app/auth | Auth page displayed with Login tab active |
| 2 | Enter username: "testuser" | Field accepts input |
| 3 | Enter password: "Test123" | Field accepts input (masked) |
| 4 | Click "Log In" button | User logged in, redirected to dashboard |

---

### TC-LOGIN-002: Login with empty username
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave username field empty | - |
| 2 | Enter valid password | - |
| 3 | Click "Log In" button | Error: "Username must be at least 3 characters" |

---

### TC-LOGIN-003: Login with empty password
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Leave password field empty | - |
| 3 | Click "Log In" button | Error: "Password must be at least 6 characters" |

---

### TC-LOGIN-004: Login with invalid username (not registered)
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | Username "fakeuser123" does not exist |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: "fakeuser123" | - |
| 2 | Enter any password | - |
| 3 | Click "Log In" button | Error: Generic "Invalid credentials" message |

**Note:** Error should NOT reveal whether username exists (security best practice)

---

### TC-LOGIN-005: Login with valid username, wrong password
| Item | Details |
|------|---------|
| **Priority** | P1 - Critical |
| **Type** | Negative |
| **Precondition** | User "testuser" exists with password "Test123" |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: "testuser" | - |
| 2 | Enter wrong password: "WrongPass" | - |
| 3 | Click "Log In" button | Error: Generic "Invalid credentials" message |

---

### TC-LOGIN-006: Login with username less than 3 characters
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: "ab" (2 chars) | - |
| 2 | Enter valid password | - |
| 3 | Click "Log In" button | Error: "Username must be at least 3 characters" |

---

### TC-LOGIN-007: Login with password less than 6 characters
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Boundary |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Enter password: "12345" (5 chars) | - |
| 3 | Click "Log In" button | Error: "Password must be at least 6 characters" |

---

### TC-LOGIN-008: Login with case-sensitive username
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Exploratory |
| **Precondition** | User "TestUser" exists |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: "testuser" (all lowercase) | - |
| 2 | Enter correct password | - |
| 3 | Click "Log In" button | Document result: Does it match or fail? |

**Note:** Test to determine if username is case-sensitive

---

### TC-LOGIN-009: Login with case-sensitive password
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Exploratory |
| **Precondition** | User exists with password "Test123" |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Enter password: "test123" (wrong case) | - |
| 3 | Click "Log In" button | Login should fail (passwords are case-sensitive) |

---

### TC-LOGIN-010: Forgot password link navigation
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Positive |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Forgot your password?" link | Navigates to password reset page/form |

---

### TC-LOGIN-011: Register here link navigation
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Positive |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Register here" link | Switches to Register tab |

---

### TC-LOGIN-012: Login button state with empty fields
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | UI/UX |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Observe "Log In" button with empty fields | Document: Is button disabled or enabled? |
| 2 | Fill only username | Document button state |
| 3 | Fill both fields | Button should be enabled/clickable |

---

### TC-LOGIN-013: Password field masking
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Security |
| **Precondition** | User is on /auth page with Login tab selected |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter password in password field | Characters are masked (shown as dots/asterisks) |

---

### TC-LOGIN-014: Login with spaces in username
| Item | Details |
|------|---------|
| **Priority** | P3 - Medium |
| **Type** | Exploratory |
| **Precondition** | User "testuser" exists |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter username: " testuser " (with spaces) | - |
| 2 | Enter correct password | - |
| 3 | Click "Log In" button | Document: Does it trim spaces and login? |

---

### TC-LOGIN-015: Multiple failed login attempts
| Item | Details |
|------|---------|
| **Priority** | P2 - High |
| **Type** | Security |
| **Precondition** | Valid user account exists |

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid username | - |
| 2 | Enter wrong password | Login fails |
| 3 | Repeat steps 1-2 five more times | Document: Is there rate limiting or account lockout? |

---

## Test Case Summary

| Priority | Count |
|----------|-------|
| P1 - Critical | 5 |
| P2 - High | 6 |
| P3 - Medium | 4 |
| **Total** | **15** |

---

## Notes
- Login uses USERNAME, not email
- Test on multiple browsers
- Check session persistence after login
- Verify redirect destination after successful login
