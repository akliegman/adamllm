# __adam/

Working documents for this repository. Copy this directory into a repository that needs it.

**What goes here:** implementation plans, architecture decisions and their rejected alternatives,
migration notes, refactor strategies, UI audits, portfolio reviews, security review output, research
notes, interview and résumé material derived from this codebase.

**What does not:** anything the repository itself should own — README content, contributing guides,
API documentation, ADRs the team shares. Those belong in the repository proper. This directory is
your working surface, not project documentation.

**Naming:** `<kind>-<subject>.md` — `plan-auth-rewrite.md`, `ui-audit-checkout.md`,
`portfolio-review.md`, `security-review-2026-07.md`. Date-prefix only when chronology matters.

**Git:** decide per repository. Committing keeps decisions with the code and is usually right for
plans and architecture notes. Gitignoring is right for job-search material and anything quoting
sensitive data. If unsure, gitignore it — moving a file into version control later is easy, and
un-publishing one is not.

**Secrets:** never. No tokens, no credentials, no customer data, no production snapshots. Audits
quote code freely, so check what you paste before committing.

Skills that write here: `/portfolio-audit`, `/job-story`, `ui-auditor`, `security-reviewer`.
