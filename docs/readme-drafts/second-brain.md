# second-brain

> Agentic automation layer over an Obsidian vault. Inbox notes are auto-classified and routed; weekly LLM passes generate review documents; a health monitor flags zones drifting toward entropy.

A Python automation layer that turns an Obsidian vault into a self-organizing knowledge graph. The goal: collapse the curation cost from "manual hours per week" to "LLM passes per week" — same discipline shape, automated.

## Why this exists

Knowledge graphs decay without curation. PARA (Projects · Areas · Resources · Archive) and similar systems are powerful in theory but operationally expensive — you spend the time you saved categorizing notes manually. LLMs are good at exactly this kind of structured-text triage. This repo wires that capability into a daily/weekly cadence so the vault keeps itself organized.

## What it does

| Component               | Function                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| **LLM classifier**      | New inbox notes are tagged + routed via Anthropic API using a PARA-tuned prompt schema    |
| **Weekly review agent** | Summarizes the week's notes, surfaces orphans, drafts a review document                   |
| **Health monitor**      | Tracks file age, link density, orphan ratio per folder; flags decaying zones              |
| **Idempotent manifest** | Every operation can be replayed from a single source-of-truth state file                  |

## Architecture

```
+---------------------+      +-----------------------+      +--------------------+
|   Obsidian Vault    | ---> |   Inbox Watcher       | ---> |  LLM Classifier    |
|   (markdown files)  |      |   (file system poll)  |      |  (Anthropic API)   |
+---------------------+      +-----------------------+      +--------------------+
                                                                      |
                                                                      v
+---------------------+      +-----------------------+      +--------------------+
|   Health Monitor    | <--- |   Manifest Store      | <--- |  Router            |
|   (cron · weekly)   |      |   (idempotent state)  |      |  (PARA folders)    |
+---------------------+      +-----------------------+      +--------------------+
         |
         v
+---------------------+
|   Weekly Review     |
|   (LLM draft)       |
+---------------------+
```

## Stack

- **Python 3.11+**
- **Anthropic API** (Claude Sonnet for classification, Claude Opus for weekly review drafts)
- Markdown AST parsing
- Cron-driven scheduler
- Optional: local vector index for orphan detection

## Status

This is a private working repo. Documenting design + usage as the system stabilizes.

| Component               | State    |
| ----------------------- | -------- |
| Inbox classifier        | Working  |
| PARA router             | Working  |
| Weekly review agent     | Working  |
| Health monitor          | Working  |
| Orphan detection (vector) | Backlog |
| Multi-vault support     | Backlog  |

## Configuration

```bash
# Required
ANTHROPIC_API_KEY=sk-ant-...
VAULT_PATH=/path/to/obsidian/vault

# Optional
CLASSIFIER_MODEL=claude-sonnet-4-6   # default
REVIEW_MODEL=claude-opus-4-7         # default
WEEKLY_REVIEW_DAY=sunday             # default
HEALTH_THRESHOLD_DAYS=90             # files older flagged
```

## Why I built this

Featured in my portfolio under the **AI Engineering · LLM Agents** track — see [renatolagos.com](https://renatolagos.com) for context.

Knowledge management is a recurring drain for anyone doing technical work. The right shape isn't another app, it's automation that respects the vault you already have. This repo proves the agentic side of that shape — LLM passes that act on local files with idempotent semantics — without lock-in to any commercial product.

---

**Author**: Renato Lagos · [renatolagos.com](https://renatolagos.com) · [github.com/RenatoLagos](https://github.com/RenatoLagos)
