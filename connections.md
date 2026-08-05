# Connections

Registry of every system your AIOS can reach. Filled by `/onboard` from Q4-Q7 answers; expanded over time as you wire new tools. `/audit` checks this file for domain coverage and freshness.

| # | Domain | Tool | Mechanism | Auth | Last checked |
|---|---|---|---|---|---|
| 1 | Website / Hosting | sadhanawithflo.org | GitHub Pages (deploy from `website/` folder) | GitHub token (auto) | 2026-08-04 ✅ |
| 2 | Revenue / Financials | PayPal (donations + €12.99 online class), cash donation box (untracked) | not yet connected | — | — |
| 3 | Customer interactions | Instagram (@sadhanawithflo) — analytics + DM tracking + post scheduling | script (Python weekly analytics pull + upload) | Access token | 2026-08-04 ✅ |
| 4 | Calendar | Google Calendar (schedule classes, events, posts) | MCP (Claude.ai integration) | OAuth via MCP | 2026-08-04 ✅ |
| 5 | Communication | WhatsApp (primary), Instagram (primary), Telegram (rare) | not yet connected | — | — |
| 6 | Website Analytics | Google Analytics 4 (website performance tracking) | script (Python weekly report) | OAuth token (.pickle) | 2026-08-04 (in progress) |
| 7 | Project / task tracking | none — no tracker in use, ideas unstructured | not yet connected | — | — |
| 8 | Meeting intelligence | none — no recordings/notes system | not yet connected | — | — |
| 9 | Knowledge / files | Laptop folders (class photos, handout, practice material) — unorganized; dormant email + Mailchimp account | not yet connected | — | — |

**Mechanism options:** `mcp` (MCP server), `script` (Python/Bash hitting an API, in `scripts/`), `export` (CSV/JSON dump pipeline), `key+ref` (`.env` key + `references/{tool}-api.md` guide), `not yet connected`.

When you wire a new tool, also save `references/{tool}-api.md` capturing endpoints, auth flow, and common queries — researched-once-saved-forever.
