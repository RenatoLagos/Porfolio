---
title: "wifi-sensing-edge"
summary: "Ambient perception infrastructure for senior care. Edge inference on ~$130 of off-the-shelf hardware (ESP32-S3 + Jetson Nano) — no cameras, no cloud, no wearables. Built on IEEE 802.11bf-2025 + open-source CSI foundation models."
stack:
  - Python
  - C / ESP-IDF
  - WiFi CSI
  - Edge ML
  - PyTorch
  - Jetson Nano
  - WiFo-2
  - Tiny-WiFo
images:
  - /projects/wifi-sensing-edge.webp
cover: /projects/wifi-sensing-edge.webp
show: true
order: 1
date: 2026-05-15
client: "Own Project"
role: "Founding Backend / Edge ML Engineer"
status: wip
accent: green
links:
  source: "https://github.com/RenatoLagos/wifi-sensing-edge"
  site: "https://renatolagos-site.vercel.app"
---

## wifi-sensing-edge — Ambient Perception for Senior Care

WiFi CSI (Channel State Information) sensing platform running inference **on-device** on a Jetson Nano, fed by ESP32-S3 RF frontends. Target use case: passive presence, breath rate, motion, and fall detection for assisted living, home care, and aging-in-place — without cameras, wearables, or raw RF data leaving the room.

**Why now (May 2026):** IEEE 802.11bf-2025 just ratified WLAN sensing as a native amendment to 802.11. Open-source CSI foundation models (WiFo-2, AM-FM, Tiny-WiFo) matured for fine-tuning. GDPR + EU AI Act make on-device biometric inference a regulatory posture, not just an optimization.

**Beachhead:** wellness/safety monitoring for senior living. FDA 510(k) clearance + CMS RPM reimbursement (CPT 99453/99454) is Year 2-3.
