# Noveli - Test Plan

## Document Info

| Item | Details |
|------|---------|
| **Project** | Noveli QA Testing |
| **Application** | Noveli - Creative Writing Platform |
| **Version** | 1.0 |
| **Author** | Zakaria Boumarouane |
| **Date** | December 2025 |
| **Status** | Active |

---

## 1. Introduction

### 1.1 Purpose
This test plan defines the testing approach, scope, resources, and schedule for quality assurance testing of the Noveli application - a Next.js creative writing platform with AI-powered content generation.

### 1.2 Objectives
- Verify all features function as expected
- Identify and document defects
- Ensure application stability and reliability
- Validate AI integration points
- Confirm data integrity across modules

---

## 2. Scope

### 2.1 In Scope

| Module | Features to Test |
|--------|------------------|
| Authentication | Registration, email verification, login, logout, password reset |
| Subscription | Free/paid plans, credit system, zero-credit behavior |
| Brainstorming | Story canon, story elements, main vision generation |
| Characters | Manual/AI creation, portraits, relationships, knowledge, network |
| Worldbuilding | All 8 element types (manual and AI generation) |
| Timeline & Plot | 8 story structures, plot points, chapter mapping |
| AI Understanding | Context generation, context manager |
| Editor | Text generation, consistency check, preferences, version control |
| Profile | Novel management, PDF/EPUB export, account deletion |

### 2.2 Out of Scope
- Third-party API internals (Replicate, AI providers)
- Payment processor internals (LemonSqueezie)
- Server infrastructure and hosting
- Browser rendering engine bugs

---

## 3. Test Approach

### 3.1 Testing Types

| Type | Description | When |
|------|-------------|------|
| Functional Testing | Verify features work correctly | All phases |
| UI Testing | Check interface elements, layout, responsiveness | Phase 2 |
| Integration Testing | Test module interactions (e.g., Characters → Editor) | Phase 2-3 |
| API Testing | Validate backend endpoints | Phase 3 |
| Regression Testing | Ensure new changes don't break existing features | Ongoing |
| Exploratory Testing | Unscripted testing to find edge cases | Phase 2 |

### 3.2 Testing Techniques
- Equivalence Partitioning
- Boundary Value Analysis
- Positive and Negative Testing
- Error Guessing
- User Flow Testing

---

## 4. Test Environment

### 4.1 Browsers
| Browser | Versions | Priority |
|---------|----------|----------|
| Chrome | Latest | P1 |
| Firefox | Latest | P2 |
| Safari | Latest | P2 |
| Edge | Latest | P3 |

### 4.2 Devices
| Type | Sizes |
|------|-------|
| Desktop | 1920x1080, 1366x768 |
| Tablet | 1024x768 |
| Mobile | 390x844, 375x667 |

### 4.3 Test Data
- Test user accounts (free and paid)
- Sample novels with characters and worldbuilding
- Edge case data (empty fields, max length, special characters)

---

## 5. Entry & Exit Criteria

### 5.1 Entry Criteria
- [ ] Application is deployed and accessible
- [ ] Test environment is stable
- [ ] Test accounts are created
- [ ] Feature inventory is complete

### 5.2 Exit Criteria
- [ ] All planned test cases executed
- [ ] All Critical/High bugs resolved
- [ ] Test summary report completed
- [ ] 90%+ test case pass rate

---

## 6. Modules & Test Priority

### Priority Levels
- **P1 (Critical)**: Core functionality, blocks user completely if broken
- **P2 (High)**: Important features, major impact on user experience
- **P3 (Medium)**: Secondary features, workarounds may exist
- **P4 (Low)**: Minor features, cosmetic issues

### Module Priority

| Module | Priority | Reason |
|--------|----------|--------|
| Authentication | P1 | Users can't access app without it |
| Editor | P1 | Core purpose of the application |
| Characters | P1 | Central to story creation |
| Subscription/Credits | P1 | Affects feature access |
| Brainstorming | P2 | Starting point for new users |
| Worldbuilding | P2 | Important for story context |
| AI Understanding | P2 | Powers editor AI accuracy |
| Timeline & Plot | P2 | Structural planning feature |
| Profile/Export | P3 | Account management |

---

## 7. Test Schedule

| Phase | Weeks | Focus |
|-------|-------|-------|
| Phase 1 | 1-2 | Setup, planning, feature discovery |
| Phase 2 | 3-5 | Manual test case creation & execution |
| Phase 3 | 6-8 | Test automation (Playwright, Postman) |
| Phase 4 | 9-10 | CI/CD integration, final documentation |

### Sprint Breakdown

| Sprint | Module Focus | Deliverables |
|--------|--------------|--------------|
| Sprint 1 | Authentication | Test cases, execution, bug reports |
| Sprint 2 | Editor, Characters | Test cases, execution, bug reports |
| Sprint 3 | Worldbuilding, Brainstorming | Test cases, execution, bug reports |
| Sprint 4 | Timeline, AI Understanding, Profile | Test cases, execution, bug reports |
| Sprint 5-6 | Automation | Playwright tests for P1 modules |
| Sprint 7 | API Testing | Postman collection |
| Sprint 8 | CI/CD & Wrap-up | GitHub Actions, documentation |

---

## 8. Defect Management

### 8.1 Severity Levels

| Severity | Description | Example |
|----------|-------------|---------|
| Critical | App crash, data loss, security issue | Can't login, data deleted unexpectedly |
| High | Feature broken, no workaround | Can't save characters, editor won't generate |
| Medium | Feature impaired, workaround exists | Export fails but can copy/paste |
| Low | Cosmetic, minor inconvenience | Typo, slight misalignment |

### 8.2 Bug Report Format
All bugs logged in Jira with:
- Title (clear, concise)
- Steps to reproduce
- Expected result
- Actual result
- Severity/Priority
- Screenshots/video
- Environment details

### 8.3 Bug Lifecycle
```
New → Open → In Progress → Fixed → Verified → Closed
                ↓
            Reopened (if fix failed)
```

---

## 9. Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| AI API downtime | Can't test AI features | Medium | Mock responses, test non-AI features |
| Credit depletion | Can't test AI generation | Medium | Use test account with credits |
| Environment instability | Blocked testing | Low | Document issues, test locally |
| Scope creep | Delayed timeline | Medium | Stick to defined scope |

---

## 10. Deliverables

| Deliverable | Location |
|-------------|----------|
| Feature Inventory | `docs/feature-inventory.md` |
| Test Plan | `docs/test-plan.md` |
| Test Cases | `docs/test-cases/` |
| Bug Reports | Jira Project |
| Automation Scripts | `playwright/` |
| API Tests | `api-tests/postman/` |
| CI/CD Pipeline | `.github/workflows/` |
| Test Reports | `reports/` |

---

## 11. Tools

| Tool | Purpose |
|------|---------|
| Jira | Bug tracking, sprint management |
| GitHub | Version control, portfolio |
| Playwright | E2E test automation |
| Postman | API testing |
| GitHub Actions | CI/CD pipeline |

---

## 12. Approvals

| Role | Name | Date |
|------|------|------|
| QA Lead | Zakaria Boumarouane | |
| Reviewed By | Faycal Ihabritane | |

---

*Document Version: 1.0*
*Last Updated: December 2025*
