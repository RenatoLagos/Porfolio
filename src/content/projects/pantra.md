---
id: pantra
title: "Pantra — Multilingual AI Assistant for Dental Clinics"
summary: "Production WhatsApp AI assistant for Berlin dental clinics. FastAPI backend (PostgreSQL, Redis, Celery) with Anthropic LLM and prompt engineering for human-tone DE/EN conversations — booking, reminders, and human handoff."
stack:
  - Python
  - FastAPI
  - PostgreSQL
  - Redis
  - Celery
  - Anthropic API
  - WhatsApp Business API
  - LLM Prompt Engineering
  - Async Pipelines
images:
  - /projects/pantra.webp
cover: /projects/pantra.webp
show: true
order: 2
date: 2026-04-01
client: "Pantra (Berlin)"
role: "Backend / AI Engineer"
status: live
accent: magenta
links:
  source: "https://github.com/RenatoLagos/Pantra"
---

## Pantra — Multilingual AI Assistant for Dental Clinics

Built the FastAPI backend (PostgreSQL + Redis + Celery) for a WhatsApp AI assistant serving real Berlin dental clinics. Anthropic LLM with prompt engineering tuned for **human-tone DE/EN conversations** — booking, reminders, and human handoff when the agent's confidence drops.

### Architecture
- **FastAPI** core handling WhatsApp Business API webhooks
- **Anthropic LLM** with prompt schemas per intent (booking, reschedule, FAQ, handoff)
- **Celery + Redis** async pipelines for low-latency responses at scale
- **PostgreSQL** for session state, conversation memory, clinic-specific tuning
- **Human handoff** path so reception teams stay in the loop

### Why it matters
Healthcare-adjacent AI deployment in the EU is a regulatory minefield. Pantra ships into real clinics with multilingual coverage and a handoff escape valve — proving that LLM agents can sit inside a real operational workflow without being a chatbot toy.
