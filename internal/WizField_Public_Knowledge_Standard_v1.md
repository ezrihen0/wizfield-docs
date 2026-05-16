# WizField Public Knowledge Standard v1

**Status:** Internal standard
**Applies to:** Public docs pages published under `content/docs`
**Audience:** Product users, buyers, and operators
**Language:** English only
**Tone:** Professional and direct

---

## Purpose

This standard governs every public WizField Docs page. Public docs must transform canonical product truth into clear, structured, publishable knowledge. Internal source documents, execution prompts, verification logs, and implementation-only notes must not be published directly.

---

## Truth Hierarchy

Use this source order when drafting or reviewing public docs:

1. Verified shipped behavior
2. Canonical internal Source of Truth docs
3. Codebase evidence
4. Live UI or runtime inspection
5. Human context

If sources conflict, do not publish the page. Flag the contradiction, resolve product truth first, then publish only after the truth is consistent.

---

## Allowed v1 Page Types

Public docs v1 supports these page types:

- Getting Started / Quick Start
- Conceptual Reference
- Workflow Guide
- Troubleshooting / FAQ

Developer / API Reference is a future page type and must not be treated as a v1 core track.

---

## Required Page Blueprint

Every public docs page must include:

1. Frontmatter with `title` and `description`
2. Opening Answer Block
3. Semantic H2 / H3 structure
4. Atomic content sections
5. Scannable formatting
6. Contextual internal links where related docs already exist
7. Related docs or a clear next step where appropriate

---

## Frontmatter Rules

Every page must include at minimum:

```yaml
title:
description:
```

Titles must match the reader's likely intent. Use action titles for guides, such as "How to Activate Your WizField Subscription." Use entity titles for concepts, such as "Shared Billing Accounts in WizField."

Descriptions must be unique to the page, summarize exactly what the page teaches, avoid vague marketing language, and prioritize clarity over forced length. Aim for 140-160 characters when practical.

---

## Opening Answer Block

Every page must begin with a direct answer immediately after the page title.

Rules:

- Maximum length: 50 words
- Answer the central question directly
- Avoid storytelling
- Avoid long context-setting
- Avoid repeated framing
- Provide enough context for AI retrieval systems to understand page relevance

---

## Heading Rules

Every H2 and H3 must be explicit and useful. Each heading must contain at least one concrete action verb or specific entity noun.

Avoid vague headings:

```md
## Advanced Settings
## Important Notes
## Background
## More Details
```

Prefer explicit headings:

```md
## Configure Environment Variables in WizField
## How WizField Shared Billing Accounts Work
## Review AI-Generated SMS Drafts Before Sending
```

---

## Atomic Content Rules

Every H2 section must be self-contained. If an AI system extracts only that section, the section must still make sense.

Each section should:

- name the subject explicitly
- minimize vague pronouns
- avoid depending on context from earlier sections
- clarify a product truth, workflow, boundary, or user action

---

## Answer-First Writing

Each paragraph should follow this order:

1. Answer first
2. Explanation second
3. Example third, only when useful

Avoid burying the answer behind setup. State what is true, then explain why or how.

---

## Entity-Based Writing

Public docs must explicitly name WizField entities, features, and systems.

Prefer names such as:

- WizField Growth Center
- WizField Language Store
- Shared Billing Account
- Active Organization
- AI SMS Draft
- Publish Job
- Translation Unit

Avoid vague referents such as "it," "this," "that," and "they" when the meaning could be unclear outside the surrounding paragraph.

---

## Scannable Formatting

Use structure only when structure improves comprehension.

Use numbered lists for:

- steps
- flows
- procedures
- activation paths
- troubleshooting sequences

Use bullets for:

- characteristics
- exclusions
- capability summaries
- constraints

Use tables for:

- comparisons
- status matrices
- role capability breakdowns
- limits and entitlement rules
- cause / resolution patterns

---

## Code Block Rules

Every code block must include an explicit language tag. Include a file path or execution context when relevant.

```bash
# Terminal
npm run build
```

---

## Internal Linking Rules

When a page mentions a concept with its own published docs page, link to that page. Do not link to pages that do not exist yet.

Do not use vague anchor text such as:

- click here
- learn more
- this page

Use semantic anchor text instead, such as "Read more about Shared Billing Accounts in WizField."

---

## Public Docs Non-Goals

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
