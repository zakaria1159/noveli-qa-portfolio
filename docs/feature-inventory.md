# Noveli - Feature Inventory

## Document Info
| Item | Details |
|------|---------|
| **Application** | Noveli |
| **Type** | Next.js Creative Writing Platform |
| **Version** | [Add current version] |
| **Date** | December 2024 |
| **Author** | [Your Name] |

---

## 1. Authentication

| Feature | Description | Inputs |
|---------|-------------|--------|
| Registration | Create new account | Username, Email, Password, Confirm Password |
| Email Verification | Verify email after registration | Email link click |
| Login | Access existing account | Email, Password |
| Logout | End session | - |
| Password Reset | Recover account access | Email |

**Notes:**
- New users receive 2,500 free AI credits monthly
- After verification, user lands on dashboard

---

## 2. Subscription / Credits

| Feature | Description |
|---------|-------------|
| Free Plan | 2,500 monthly AI credits |
| Paid Plan | 50,000 monthly AI credits |
| Credit Usage | Consumed by AI generation features |
| Zero Credits | App usable but AI features disabled |

**Notes:**
- At 0 credits, user can still use manual features
- AI generation blocked until credits refresh/upgrade

---

## 3. Brainstorming Module

| Feature | Description |
|---------|-------------|
| Story Canon Generation | AI-assisted discussion to build story foundation |
| Story Elements Generation | Generate 8 universal elements + 8 genre-specific elements |
| Main Vision Generation | Create primary source of truth for the novel |

**Notes:**
- Main Vision becomes the context for AI generation of characters and worldbuilding
- Story elements based on genre selection

---

## 4. Characters Module

### 4.1 Character Tab

| Feature | Description | Method |
|---------|-------------|--------|
| Create Character | Add new character | Manual |
| AI Generate Character | Create character with AI | Random or Prompt-based |
| Generate Portrait | Create character image | Replicate API |

**Character Fields:**
- Name
- Gender
- Personality Type
- Occupation
- Appearance
- Backstory
- Role in Story

### 4.2 Relationships

| Feature | Description |
|---------|-------------|
| Add Relationship | Link character to another character |
| Relationship Type | Define type of relationship |
| Relationship Description | Describe the relationship |
| Relationship Strength | Set strength level |
| AI Relationship Insight | AI analysis based on personalities, goals, backstories |
| Relationship Tags | Casual, Conflicting, Hostile, Cold, Friendly, etc. |

**Notes:**
- Relationship tags affect editor AI text generation accuracy

### 4.3 Knowledge Tab

| Feature | Description |
|---------|-------------|
| Create Character Knowledge | Add secrets/information a character knows |
| Knowledge Scope | Who knows: Only character, Some characters, Reader knows/doesn't know |

**Notes:**
- Affects what AI can/cannot reveal in generated text

### 4.4 Network Tab

| Feature | Description |
|---------|-------------|
| Character Network | Visual representation of character relationships |

---

## 5. Worldbuilding Module

| Feature | Description | Method |
|---------|-------------|--------|
| Create Element | Add worldbuilding element | Manual |
| AI Generate Element | Create element with AI | Random or Prompt-based |

**Element Types:**
- Locations
- Organizations
- Cultural Practices
- Power Systems
- Character Archetypes
- Events
- Items & Artifacts
- Environment

---

## 6. Timeline & Plot Module

### 6.1 Story Structure

**Classic Structures:**
| Structure Type | Description |
|----------------|-------------|
| No Structure | Freeform plotting |
| Hero's Journey | Mythic story structure |
| Three-Act Structure | Traditional beginning, middle, end |
| Freytag's Pyramid | Exposition, rising action, climax, falling action, resolution |

**Modern Structures:**
| Structure Type | Description |
|----------------|-------------|
| Dan Harmon's Story Circle | 8-step circular narrative |
| Fichtean Curve | Rising action with multiple crises |
| Save the Cat Beat Sheet | Blake Snyder's 15-beat structure |
| Seven-Point Story Structure | Hook, plot turns, pinch points, resolution |

### 6.2 Plot Points

| Feature | Description | Method |
|---------|-------------|--------|
| Create Plot Point | Add story beat | Manual |
| AI Generate Plot Point | Generate events for plot point | AI suggests 3 events, user selects |
| Map to Chapter | Link plot point/event to editor chapter | Manual |

---

## 7. AI Understanding Module

| Feature | Description |
|---------|-------------|
| Generate AI Understanding | Create comprehensive context including characters, worldbuilding |
| Context Manager | Select what to include in AI context |
| Modular Context | Toggle elements on/off for context |

**Notes:**
- This is the main context fed to the editor AI

---

## 8. Editor Module

### 8.1 Text Generation

| Feature | Description |
|---------|-------------|
| Generate Text | AI writes content |
| Length Control | Set generation length |
| Position Setting | Where in story (beginning, middle, end) |
| Scene Setting | Current scene context |
| Content Style | Style/tone of generation |

### 8.2 Consistency Tools

| Feature | Description |
|---------|-------------|
| Consistency Check | Verify text against characters, events, context |

### 8.3 Writing Preferences

| Feature | Description |
|---------|-------------|
| Author Style | Set writing style preference |
| Words to Avoid | Blacklist specific words |
| Words to Limit | Restrict overuse of words |

### 8.4 Version Control

| Feature | Description |
|---------|-------------|
| Version History | View previous versions |
| Restore Version | Revert to older version |

---

## 9. Profile & Account Management

| Feature | Description |
|---------|-------------|
| Profile Page | Access user settings and novels |
| View Novels | List of user's novels |
| Export Novel (PDF) | Download novel as PDF |
| Export Novel (EPUB) | Download novel as EPUB |
| Delete Account | Remove account and data |

**Notes:**
- No notification system currently

---

## Feature Count Summary

| Module | Feature Count |
|--------|---------------|
| Authentication | 5 |
| Subscription | 4 |
| Brainstorming | 3 |
| Characters | 10+ |
| Worldbuilding | 10 |
| Timeline & Plot | 4+ |
| AI Understanding | 3 |
| Editor | 7+ |
| Profile & Account | 5 |
| **Total** | **50+** |

---

## Next Steps

- [x] Document all features
- [ ] Commit this to GitHub repository
- [ ] Create Test Plan document
- [ ] Create Jira epics for each module
