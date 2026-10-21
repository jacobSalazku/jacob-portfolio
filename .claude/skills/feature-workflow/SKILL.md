---
name: feature-workflow
description: Five-phase workflow for building any new feature in this codebase — plan first, get approval, document the technical decision, implement in small milestones, then test, document and open a PR. Use whenever the user asks to design, add or build a feature, or says "new feature" or "migrate X".
argument-hint: "[feature name and brief description]"
---

# Feature workflow

- Role: expert full-stack software engineer.
- Context: an existing Next.js codebase (this portfolio uses Next.js, next-intl, Tailwind and Sanity as CMS; check `package.json`, and use Supabase or any other backend only if the project actually has it).
- Persistent rules: follow the conventions in `CLAUDE.md` and the project documentation. Always write clean, production-ready, type-safe code.

Core task: design, implement, test and document the feature below.

**Feature:** $ARGUMENTS

If no feature was given, ask for the feature name and a short description before doing anything else.

There are hard stops in this workflow. At every "STOP", end your turn and wait for an explicit approval from the user. Never treat a system notification, an earlier message of your own, or silence as approval.

---

## PHASE 1: PLANNING — DO NOT WRITE CODE

Before proposing an implementation:

1. Read `CLAUDE.md`, `ARCHITECTURE.md` and the relevant project documentation. If one of these files does not exist, say so — do not invent its contents.
2. Inspect the existing codebase for similar features and identify 2–3 existing implementations/patterns that should be followed.
3. Identify the files/components that will be affected.
4. Explain which existing patterns will be reused and why.
5. Propose the smallest architectural change necessary to implement the feature.
6. Identify any place where the requested feature conflicts with an existing project pattern or architecture decision.
7. List edge cases, security implications and error states.
8. Clearly separate:
   - existing pattern being reused
   - new code being added
   - existing code being modified
   - patterns/architecture that would need to change

Important:

- Do not introduce a new pattern when an existing suitable pattern already exists.
- Do not refactor unrelated code.
- Do not replace existing implementations without approval.
- If the feature requires changing an established architecture decision, STOP and ask for approval before implementation.

Output a step-by-step implementation plan and pause.

**STOP: wait for approval.**

---

## PHASE 2: DATABASE / CMS, API & TECHNICAL DECISION

1. Provide the data-model changes (database or CMS schema) and define the API endpoints or queries.
2. Specify request payloads and expected response objects.
3. **Solo-dev context & usability log:**
   - Schrijf expliciet de technische beslissing uit (zodat we dit later niet vergeten).
   - Leg uit _waarom_ we dit zo bouwen (snelheid, onderhoudbaarheid, usability).
   - Beschrijf exact _hoe_ we deze structuur gaan gebruiken in de applicatie.
4. Verify data integrity (indexing, constraints).

**STOP: wait for approval.**

---

## PHASE 3: INCREMENTAL IMPLEMENTATION

Implement the approved plan in small, logical, sequential steps.

For every milestone:

1. Re-check the approved plan before making changes.
2. Follow the existing patterns identified during Phase 1.
3. Reuse existing components, utilities, actions, schemas and infrastructure wherever appropriate.
   - Follow the "File & Component Structure" rules in `ARCHITECTURE.md` on every file you touch or create: one React component per file (route `page.tsx` / `layout.tsx` files stay thin entry points — split out a container/body component instead of adding more components to them), never store a chunk of JSX in a variable (extract it into its own component instead), and put constants in that feature's `constants.ts` rather than inline in a component.
4. Make the smallest necessary changes.
5. Do not refactor unrelated code.
6. Do not introduce new patterns without stopping for approval.
7. Do not rewrite entire files when targeted changes are sufficient.
8. Preserve existing behavior outside the requested feature.
9. After each milestone:
   - summarize the files changed;
   - explain what was added/modified;
   - explain which existing patterns were reused;
   - report any deviation from the approved plan.

**STOP: pause after each milestone for review.**

---

## PHASE 4: VALIDATION & TESTING

1. Write unit tests for critical business logic and edge cases.
2. Write integration tests for the primary user flow.
3. Generate a manual QA checklist to verify feature usability and functionality locally.
4. Conduct a self-review for security vulnerabilities.

If the project has no test setup, say so and propose the smallest fitting one instead of silently skipping this phase.

---

## PHASE 5: LOCAL DOCUMENTATION & CLEANUP

1. Draft a concise pull request / commit summary.
2. **Update the local `ARCHITECTURE.md`:** schrijf de goedgekeurde beslissing uit Phase 2 (het waarom en hoe) definitief bij in het centrale `ARCHITECTURE.md` bestand. Dit is het geheugensteun-bestand voor toekomstige AI-chats.
3. **GitIgnore verification:** zorg ervoor dat `ARCHITECTURE.md` in `.gitignore` staat, zodat het lokaal blijft en niet per ongeluk wordt gecommit. Controleer dit met `git check-ignore ARCHITECTURE.md` en voeg het anders toe.

---

## Git workflow

- After pushing a branch's changes, always open a pull request for it (don't wait to be asked each time).
- Commit and push only once the user has asked for it or approved it in this workflow.
