---
title: "Second Brain — LLM Knowledge Automation"
summary: "Agentic automation layer over an Obsidian vault. LLM-powered note classification, routing, and weekly review generation, plus a health monitor that flags neglected zones of the knowledge graph."
stack:
  - Python
  - Anthropic API
  - LLM Classification
  - Obsidian
  - Markdown AST
  - Cron / Scheduler
  - Vector Search
images:
  - /projects/second-brain.webp
cover: /projects/second-brain.webp
show: true
order: 3
date: 2026-03-09
client: "Own Project"
role: "Solo Engineer"
status: active
accent: cyan
links:
  source: "https://github.com/RenatoLagos/second-brain"
---

## Second Brain — Agentic Automation over an Obsidian Vault

Python automation layer that turns an Obsidian vault into a self-organizing knowledge graph. Inbox notes are auto-classified and routed to the correct PARA folder; weekly LLM passes generate review documents; a health monitor flags vault zones that have decayed.

### What it does
- **LLM classification** — each new note is tagged + routed via Anthropic API with a prompt schema tuned for PARA organization
- **Weekly review agent** — summarizes the week's notes, surfaces orphans, drafts a review document
- **Health monitor** — tracks file age, link density, and orphan ratio per folder; flags zones drifting toward entropy
- **Idempotent + rerunnable** — every operation can be replayed from a single source-of-truth manifest

Knowledge graphs decay without curation. This collapses the curation cost from "manual hours per week" to "LLM passes per week" — same discipline shape, automated.
