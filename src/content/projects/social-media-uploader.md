---
title: "Social Media Uploader"
summary: "Python CLI that ships a single short-form video to YouTube Shorts, Instagram Reels, and TikTok with AI-generated platform-optimized descriptions. OpenAI Whisper transcription + GPT-4 copywriting + fault-tolerant fan-out."
stack:
  - Python
  - OpenAI Whisper
  - GPT-4
  - YouTube Data API
  - Instagram Graph API
  - TikTok API
  - Click CLI
  - Structured Logging
images:
  - /projects/social-media-uploader.webp
cover: /projects/social-media-uploader.webp
show: true
order: 6
date: 2026-02-01
client: "Own Project"
role: "Solo Engineer"
status: active
accent: orange
links:
  source: "https://github.com/RenatoLagos/social-media-uploader"
---

## Social Media Uploader — AI-Powered Multi-Platform Distribution

A Python CLI that takes one short-form video and ships it to YouTube Shorts, Instagram Reels, and TikTok with platform-optimized AI-generated descriptions.

### Features
- **Whisper transcription** of source audio → seed text for descriptions
- **GPT-4 platform-aware copywriting** — separate prompts per platform (YT long-form, IG caption, TT hook)
- **Fault-tolerant fan-out** — if one platform fails, the rest continue. Structured logs for postmortems.
- **Progress indicators + retry semantics** — designed for the operator running it from a terminal, not a SaaS dashboard.

Most "AI content tools" are SaaS wrappers. This is the opposite — a thin, dependable orchestrator you own, run locally, and extend.
