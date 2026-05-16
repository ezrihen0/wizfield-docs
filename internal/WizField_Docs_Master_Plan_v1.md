# WizField Docs Master Plan v1
## Public Knowledge Engine for `docs.wizfield.com`

**Document status:** Locked planning baseline
**Project:** WizField Docs
**Primary audience:** Product users, buyers, and operators
**Writing posture:** Technical precision without casual marketing
**Language:** English only
**Tone:** Professional & Direct - Stripe / Vercel-level clarity

---

# 1. Executive Decision

`docs.wizfield.com` will be the **public knowledge layer of WizField**.

It is not:

- a blog
- a raw export of internal markdown files
- a marketing microsite
- a developer portal in v1

It is:

> A structured public knowledge system that explains WizField clearly to users, supports buyer confidence, improves product adoption, reduces support friction, and makes WizField easier for AI search systems to retrieve accurately.

---

# 2. Strategic Purpose

The Docs initiative exists to serve four business engines:

| Engine | Outcome |
|---|---|
| Product Understanding | Users understand what WizField does and how to use it correctly |
| Buyer Confidence | Prospects see a serious, coherent, well-explained product |
| Support Reduction | Repetitive questions become self-serve |
| AI Discoverability | AI search systems can retrieve accurate public truth about WizField |

## 2.1 Commercial Impact

A strong docs system should improve:

- conversion
- onboarding completion
- feature activation
- retention
- sales enablement
- organic discovery
- future AI-assisted product search visibility

---

# 3. Locked Decisions

## 3.1 Primary Audience

**Locked decision:**

> Product users, buyers, and operators.
> Written with technical precision, not casual marketing.

The v1 docs system is **product-first**, not developer-first.

### Implication

The docs should explain:

- what WizField is
- how the product works
- how onboarding and activation work
- how major product systems behave
- what users can and cannot do
- how different workflows operate

The docs should **not** lead with:

- public API references
- SDK documentation
- internal database schemas
- engineering implementation details

Developer / API Reference remains a **future page type**, not a v1 core track.

---

## 3.2 Language

**Locked decision:**

> English only.

All public docs content will be written in English.

---

## 3.3 Tone

**Locked decision:**

> Professional & Direct.
> Stripe / Vercel-level clarity.

### Tone rules

- Answer first
- Explain second
- No hype
- No filler
- No vague marketing language
- No exaggerated AI claims
- No "coming soon" treated as current product truth
- Every sentence must clarify:
  - a product truth
  - a workflow
  - a boundary
  - or a user action

---

## 3.4 Public Docs Truth Hierarchy

**Locked decision:**

```text
1. Verified shipped behavior
2. Canonical internal Source of Truth docs
3. Codebase evidence
4. Live UI / runtime inspection
5. Human context
```

## 3.5 Conflict Rule

If two sources disagree:

1. Do not publish the docs page yet.
2. Flag the contradiction.
3. Resolve the product truth first.
4. Publish only once the truth is consistent.

Public Docs must never become a place where contradictions are silently papered over.

---

## 3.6 Page Types for v1

**Locked page types:**

1. Getting Started / Quick Start
2. Conceptual Reference
3. Workflow Guide
4. Troubleshooting / FAQ

**Future page type, not v1 core:**

5. Developer / API Reference

---

# 4. Source Transformation Rule

Internal markdown files are **not copied directly** into `docs.wizfield.com`.

The correct model is:

```text
Internal Canonical Truth
-> Public Knowledge Transformation
-> Published docs page
```

## 4.1 Internal Source Documents Used as Inputs

The public docs plan will derive from canonical internal WizField documents, including:

- WizField Master Source of Truth
- WizField AI Master Source of Truth
- WizField Growth Center Source of Truth
- WizField Language Store Source of Truth
- Engineering closeout references where needed for verified status
- Launch / activation truth where needed for onboarding explanations

## 4.2 What Must Never Be Published Raw

Do not publish raw versions of:

- execution prompts
- verification logs
- internal closeout documents
- smoke-test runbooks
- migration notes
- internal risk registers
- repo-specific agent instructions
- implementation-only audit artifacts

These may support public docs creation, but they are not public docs themselves.

---

# 5. WizField Public Knowledge Standard v1

A dedicated internal standards file should govern how every future docs page is written:

```text
internal/WizField_Public_Knowledge_Standard_v1.md
```

This standard is mandatory for every public docs page.

---

# 6. Page Blueprint

Every public docs page must follow this structure:

```text
1. Frontmatter / Metadata
2. Opening Answer Block
3. Semantic H2 / H3 structure
4. Atomic content sections
5. Scannable formatting
6. Contextual internal links
7. Related docs / next step
```

---

# 7. Frontmatter Rules

Every page must include at minimum:

```yaml
title:
description:
```

## 7.1 Title Rules

A title must match the user's likely intent.

### Use action titles for guides

Examples:

- How to Activate Your WizField Subscription
- How to Switch Organizations in WizField
- How to Review an AI SMS Draft

### Use entity titles for concepts

Examples:

- Shared Billing Accounts in WizField
- Multi-Business Workspaces in WizField
- Growth Center Publishing in WizField

---

## 7.2 Description Rules

Each description must:

- be unique to the page
- summarize exactly what the page teaches
- avoid vague marketing wording
- aim for approximately 140-160 characters when practical
- prioritize clarity over forced length

---

# 8. Opening Answer Block

Every page must begin with an **Opening Answer Block**.

## 8.1 Hard Rule

```text
Maximum length: 50 words.
```

## 8.2 Requirements

The opening block must:

- appear immediately after the page title
- answer the central question directly
- avoid storytelling
- avoid long context-setting
- avoid repeated framing
- give AI retrieval systems enough context to understand page relevance immediately

---

# 9. Semantic H2 / H3 Structure

Every H2 and H3 must be explicit and useful.

## 9.1 Noun / Verb Rule

Every H2/H3 must contain at least one of:

- a concrete action verb
- a specific entity noun

## 9.2 Invalid Headers

```md
## Advanced Settings
## Important Notes
## Background
## More Details
```

## 9.3 Valid Headers

```md
## Configure Environment Variables in WizField
## How WizField Shared Billing Accounts Work
## Review AI-Generated SMS Drafts Before Sending
```

---

# 10. Atomic Content Blocks

Every H2 section must be **self-contained**.

If an AI system extracts only that section:

- the section must still make sense
- the subject must be explicit
- the section must not depend heavily on previous context
- vague pronouns must be minimized

## 10.1 Example Principle

Avoid:

> It becomes active after that.

Prefer:

> A WizField subscription becomes active only after verified billing synchronization confirms the subscription state.

---

# 11. Answer-First Writing

Each paragraph should follow this sequence:

```text
Answer first.
Explanation second.
Example third.
```

## 11.1 Example

Bad:

> Because subscription confirmation requires a few background steps and may not be immediate, the success page sometimes does not show full access right away.

Better:

> WizField does not activate a subscription from the checkout redirect alone. Access becomes valid only after billing synchronization confirms the subscription state.

---

# 12. Entity-Based Writing

Public docs must explicitly name entities, features, and systems.

## 12.1 Avoid vague referents

Avoid:

- it
- this
- that
- they

when the meaning could be unclear outside the surrounding paragraph.

## 12.2 Prefer explicit entities

Examples:

- WizField Growth Center
- WizField Language Store
- Shared Billing Account
- Active Organization
- AI SMS Draft
- Publish Job
- Translation Unit

---

# 13. Scannable Formatting

Use structure only when structure improves comprehension.

## 13.1 Use numbered lists for

- steps
- flows
- procedures
- activation paths
- troubleshooting sequences

## 13.2 Use bullets for

- characteristics
- exclusions
- capability summaries
- constraints

## 13.3 Use tables for

- comparisons
- status matrices
- role capability breakdowns
- limits and entitlement rules
- request / response or cause / resolution patterns where applicable

---

# 14. Code Block Rules

Every code block must include:

1. an explicit language tag
2. a file path or execution context when relevant

## 14.1 Terminal Example

```bash
# Terminal
npm run build
```

## 14.2 TypeScript Example

```typescript
// src/app/example/page.tsx
export default function Page() {
  return <main>WizField</main>;
}
```

## 14.3 JSON Example

```json
{
  "status": "active_trialing"
}
```

---

# 15. Internal Linking Rules

The docs site must behave like a structured knowledge graph.

## 15.1 Contextual Internal Linking

When a page mentions a concept with its own dedicated docs page, it should link to that page.

## 15.2 Anchor Text Rule

Do not use vague anchor text such as:

- click here
- learn more
- this page

Use semantic anchor text instead:

- Read more about Shared Billing Accounts in WizField.
- See how Growth Center Opportunities work.
- Review how Customer-Facing English Output works.

---

# 16. Category Hub Rule

Every main docs category should have a pillar page that:

- defines the category
- explains what the reader will learn
- links to the category's child pages
- acts as a retrieval hub for search engines and AI systems

---

# 17. Recommended Site Architecture

## 17.1 Sidebar Navigation v1

```text
1. Start Here
2. Getting Started
3. Product Foundations
4. AI in WizField
5. Growth Center
6. Language Store
7. Billing & Activation
8. Troubleshooting
9. Glossary
```

---

# 18. Category Plans

## 18.1 Start Here

**Purpose:** Define WizField clearly and orient the reader.

### Planned pages

1. Welcome to WizField Docs
2. What Is WizField?
3. How WizField Works for Field-Service Businesses
4. How to Use These Docs

---

## 18.2 Getting Started

**Purpose:** Explain the first user journey from signup to workspace readiness.

### Planned pages

1. Create Your WizField Workspace
2. Activate Your WizField Subscription
3. What Happens After Stripe Checkout
4. Access Your Workspace After Activation
5. Understand Your First Workspace

---

## 18.3 Product Foundations

**Purpose:** Explain the core operating model of WizField.

### Planned pages

1. Multi-Business Workspaces in WizField
2. How Organization Switching Works
3. Shared Billing Accounts in WizField
4. How WizField Keeps Business Data Organization-Scoped
5. Public Booking and Customer Portal Access
6. How Document Snapshots Preserve Historical Accuracy

---

## 18.4 AI in WizField

**Purpose:** Explain what WizField AI does today and what it does not automate.

### Planned pages

1. What WizField AI Does Today
2. How Business Brain V1 Works
3. How AI SMS Drafts Work
4. How Guarded AI SMS Sending Works
5. How AI Reply Observation Works
6. What WizField AI Does Not Automate
7. Voice Intake Pilot in WizField

---

## 18.5 Growth Center

**Purpose:** Explain WizField's marketing operations layer.

### Planned pages

1. What Is WizField Growth Center?
2. How Growth Center Opportunities Work
3. How Content Drafts Work in Growth Center
4. How Explicit Publishing Works
5. How Campaigns Work in Growth Center
6. How Marketing Automations Work
7. How Growth Center Analytics Work
8. What Growth Center Does Not Do Yet

---

## 18.6 Language Store

**Purpose:** Explain multilingual worker support and customer-facing English output.

### Planned pages

1. What Is WizField Language Store?
2. How Worker Language Preferences Work
3. How Organization-Level Language Access Works
4. How Customer-Facing English Output Works
5. How Translation Units Work
6. Why Final Customer Documents Stay Stable
7. What Language Store Does Not Translate in V1

---

## 18.7 Billing & Activation

**Purpose:** Reduce confusion around access, activation, and shared billing.

### Planned pages

1. How WizField Subscription Activation Works
2. Why Billing Success May Still Show Processing
3. How Shared Billing Covers Multiple Businesses
4. How Plan Limits Affect Additional Businesses
5. What Happens When a Workspace Is Not Yet Activated

---

## 18.8 Troubleshooting

**Purpose:** Provide symptom-first answers to high-friction questions.

### Planned pages

1. Why Can't I Access the CRM After Signup?
2. Why Does Billing Success Still Show Processing?
3. Why Can't I Add Another Business?
4. Why Can't a Dispatcher Publish in Growth Center?
5. Why Did an AI SMS Draft Require Review Before Sending?
6. Why Did My Language Preference Fall Back to English?
7. Why Can't I See Another Organization's Records?

---

## 18.9 Glossary

**Purpose:** Maintain a consistent entity vocabulary across the docs system.

### Initial glossary entries

- Active Organization
- Membership
- Workspace
- Shared Billing Account
- Trialing Subscription
- Marketing Opportunity
- Publish Job
- Automation Rule
- Worker Language
- Translation Unit
- Document Snapshot
- AI Recommendation Run
- Guarded Send
- Customer Reply Observation

---

# 19. Content Production Workflow

Every docs page should follow this workflow:

## Step 1 - Select the page

Choose one item from the approved backlog.

## Step 2 - Identify truth sources

List the internal sources that govern the page.

## Step 3 - Verify shipped behavior

Confirm the page reflects current shipped or owner-accepted product truth.

## Step 4 - Draft against the Knowledge Standard

Apply:

- answer-first structure
- 50-word opener
- semantic H2/H3
- entity-explicit language
- scannable formatting
- contextual internal links

## Step 5 - Truth review

Check:

- no roadmap presented as current product truth
- no overclaim
- no conflict with AI boundaries
- no conflict with Growth Center or Language Store truth
- no silent contradiction with billing or activation model

## Step 6 - Publish

Add the page to `docs.wizfield.com`.

## Step 7 - Update the knowledge graph

Add or revise contextual internal links from related pages.

## Step 8 - Maintenance trigger

If the underlying Source of Truth changes, review the affected docs page.

---

# 20. Recommended Release Sequence

The docs system should be built in controlled batches.

---

## 20.1 Launch Batch 1 - Foundation Set

**Goal:** Turn the docs site from a shell into a credible public knowledge center.

### 10 initial pages

1. Welcome to WizField Docs
2. What Is WizField?
3. How WizField Works for Field-Service Businesses
4. Create Your WizField Workspace
5. Activate Your WizField Subscription
6. Multi-Business Workspaces in WizField
7. Shared Billing Accounts in WizField
8. What WizField AI Does Today
9. What Is WizField Growth Center?
10. What Is WizField Language Store?

### Why this batch matters

This batch defines:

- identity
- onboarding
- commercial model
- product differentiation
- first AI-search footprint

---

## 20.2 Launch Batch 2 - Deep Product Truth

**Goal:** Explain the systems that make WizField meaningfully different.

### Planned pages

11. How Organization Switching Works
12. How WizField Keeps Business Data Organization-Scoped
13. How Business Brain V1 Works
14. How AI SMS Drafts Work
15. What WizField AI Does Not Automate
16. How Growth Center Opportunities Work
17. How Explicit Publishing Works
18. How Marketing Automations Work
19. How Worker Language Preferences Work
20. How Customer-Facing English Output Works
21. Why Final Customer Documents Stay Stable
22. How Translation Units Work

---

## 20.3 Launch Batch 3 - Troubleshooting and Conversion Support

**Goal:** Answer user friction questions directly.

### Planned pages

23. Why Can't I Access the CRM After Signup?
24. Why Does Billing Success Still Show Processing?
25. Why Can't I Add Another Business?
26. Why Can't a Dispatcher Publish in Growth Center?
27. Why Did an AI SMS Draft Require Review Before Sending?
28. Why Did My Language Preference Fall Back to English?
29. What Happens When a Workspace Is Not Yet Activated?
30. How Shared Billing Covers Multiple Businesses
31. What Growth Center Does Not Do Yet
32. What Language Store Does Not Translate in V1

---

## 20.4 Launch Batch 4 - Glossary and Link Graph Reinforcement

**Goal:** Strengthen terminology, retrieval, and internal linking.

### Deliverables

- Create the glossary landing page
- Publish at least 15 glossary entries
- Link all major concept pages back to relevant glossary terms
- Add cross-links between:
  - billing
  - activation
  - workspace model
  - AI boundaries
  - Growth Center workflows
  - Language Store behavior

---

# 21. Internal Planning Files to Create in the Docs Repository

The Docs repository should contain three internal planning files:

```text
internal/WizField_Docs_Master_Plan_v1.md
internal/WizField_Public_Knowledge_Standard_v1.md
internal/WizField_Docs_Content_Backlog_v1.md
```

## 21.1 File Purpose

### `WizField_Docs_Master_Plan_v1.md`

The canonical planning document for the docs initiative.

### `WizField_Public_Knowledge_Standard_v1.md`

The writing and structure standard every docs page must follow.

### `WizField_Docs_Content_Backlog_v1.md`

The operational backlog of pages, priorities, source documents, and publication status.

---

# 22. Suggested Backlog Fields

The content backlog should track:

| Field | Purpose |
|---|---|
| Page Title | Public-facing docs title |
| Category | Docs navigation group |
| Page Type | Guide / Concept / FAQ / Quick Start |
| Priority | P0 / P1 / P2 |
| Batch | Launch Batch 1 / 2 / 3 / 4 |
| Truth Sources | Internal canonical inputs |
| Status | Planned / Drafting / Review / Published |
| Internal Links Needed | Related pages to connect |
| Notes | Boundary issues or verification reminders |

---

# 23. Explicit Non-Goals

The v1 docs program must not:

- publish raw internal planning files
- create a public developer API section prematurely
- expose engineering verification detail as public documentation
- turn into a blog
- turn into a generic SEO article farm
- present roadmap work as shipped capability
- publish AI overclaims
- contradict the canonical Source of Truth set
- create empty category navigation with no real content behind it

---

# 24. Definition of Done for the Docs Foundation Program

The initial Docs Foundation Program is complete when:

1. `docs.wizfield.com` is live and branded as WizField Docs.
2. The Docs repository contains:
   - Master Plan
   - Public Knowledge Standard
   - Content Backlog
3. Navigation v1 is implemented.
4. Launch Batch 1 is fully published.
5. Every published page includes:
   - metadata
   - direct opening answer block
   - semantic H2/H3
   - entity-explicit wording
   - scannable formatting
   - internal links
6. No page conflicts with canonical product truth.
7. AI, Growth Center, Language Store, Billing, and Workspace model are represented clearly.
8. The site feels like a real knowledge product, not a starter template.

---

# 25. Risk Register

| Risk | Why It Matters | Mitigation |
|---|---|---|
| Docs drift from product truth | Public misinformation destroys trust | Use strict truth hierarchy |
| Raw internal docs published publicly | Exposes wrong audience content | Public transformation only |
| SEO-style filler content | Weakens authority | Enforce Knowledge Standard |
| Overclaiming AI capability | Creates sales and trust risk | Use AI boundary rules |
| Empty navigation categories | Site looks unfinished | Publish categories with content |
| Developer docs opened too early | Misaligns with product audience | Defer API docs |
| No maintenance discipline | Docs go stale | Tie updates to SoT changes |

---

# 26. Business Impact Summary

The WizField Docs initiative is expected to improve:

## 26.1 Acquisition

Public knowledge pages can support organic search and future AI search retrieval.

## 26.2 Conversion

Buyers understand the product faster and enter sales conversations with less friction.

## 26.3 Activation

Users receive clear explanations for signup, billing, and first-use behavior.

## 26.4 Retention

Users who understand advanced systems are more likely to adopt them and remain active.

## 26.5 Sales Enablement

Sales and support can send precise docs pages instead of repeating the same explanation manually.

---

# 27. Recommended Next Execution Package

The next implementation step should be a bounded **Package 1** for the Docs repository.

## Package 1 - Docs Foundation Setup

### Scope

- Create the three internal planning files
- Replace starter-template identity with WizField Docs identity
- Establish initial navigation structure
- Prepare category shells only where immediate content will be added
- Do **not** write all content pages yet unless separately approved

### Deliverables

```text
internal/WizField_Docs_Master_Plan_v1.md
internal/WizField_Public_Knowledge_Standard_v1.md
internal/WizField_Docs_Content_Backlog_v1.md
```

### Why this package comes first

Before publishing pages at scale, the system needs:

- architecture
- writing discipline
- backlog control
- consistent public truth rules

This prevents content sprawl and keeps the Docs initiative aligned with product reality.

---

# 28. Final Product Statement

`docs.wizfield.com` exists to make WizField understandable.

The product itself remains the system of record.
The internal Source of Truth documents remain the truth authority.
The public docs transform that truth into clear, structured, publishable knowledge for real users and AI retrieval systems.
