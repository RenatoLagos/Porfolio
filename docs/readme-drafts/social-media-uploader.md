# Social Media Video Uploader

> Python CLI that ships a single short-form video to **YouTube Shorts**, **Instagram Reels**, and **TikTok** with AI-generated platform-optimized descriptions. OpenAI Whisper + GPT-4 + fault-tolerant fan-out.

Most "AI content tools" are SaaS wrappers. This is the opposite — a thin, dependable orchestrator you own, run locally from a terminal, and extend.

## Features

- **Whisper transcription** of source audio → seed text for descriptions
- **GPT-4 platform-aware copywriting** — separate prompts per platform (YT long-form, IG caption, TT hook)
- **Fault-tolerant fan-out** — if one platform fails, the rest continue. Structured logs for postmortems.
- **Click-based CLI** with progress indicators and clear error surfaces
- **Robust error handling** — designed for the operator, not a SaaS dashboard

## Requirements

- Python 3.11+
- OpenAI account with API key
- YouTube credentials (Google Cloud)
- Instagram professional account (optional)
- Approved TikTok app (optional — TikTok app approval can take weeks)

## Quickstart

### 1. Clone and set up environment

```bash
git clone https://github.com/RenatoLagos/social-media-uploader.git
cd social-media-uploader

# Create virtual environment
python -m venv venv

# Activate
# Linux / macOS:
source venv/bin/activate
# Windows:
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env with your credentials
```

## API Configuration

### OpenAI (Required)

1. Get a key at <https://platform.openai.com/api-keys>
2. Add to `.env`:
   ```
   OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
   ```

### YouTube (Required for YouTube Shorts)

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a project
2. Enable **YouTube Data API v3**
3. Create OAuth 2.0 Desktop app credentials → download JSON
4. Save the file as `credentials/youtube_client_secret.json`
5. Run initial authentication:
   ```bash
   python scripts/authenticate_youtube.py
   ```

### Instagram (Optional)

Uses `instagrapi` library for direct uploads via username/password.

```
INSTAGRAM_USERNAME=your_username
INSTAGRAM_PASSWORD=your_password
ENABLE_INSTAGRAM=true
```

> ⚠️ Unofficial library — Instagram may flag automation. Use at your own risk.

### TikTok (Optional — requires approval)

1. Register at [TikTok for Developers](https://developers.tiktok.com/)
2. Create app with Content Posting API access
3. Wait for app approval (weeks)
4. Add to `.env`:
   ```
   TIKTOK_CLIENT_KEY=awxxxxxxxxxx
   TIKTOK_CLIENT_SECRET=xxxxxxxxxxxx
   TIKTOK_ACCESS_TOKEN=act.xxxxxxxxxx
   ENABLE_TIKTOK=true
   ```

## Usage

### Basic

```bash
python upload.py /path/to/video.mp4
```

### With options

```bash
# Custom title
python upload.py video.mp4 --title "My awesome video"

# Skip platforms ad-hoc
python upload.py video.mp4 --skip tiktok

# Dry-run (transcribe + generate copy without uploading)
python upload.py video.mp4 --dry-run
```

## Architecture

```
+----------------+      +-------------------+      +---------------------+
|  video.mp4     | ---> |  Whisper          | ---> |  GPT-4 (per-target  |
|                |      |  (transcribe)     |      |  copywriting)       |
+----------------+      +-------------------+      +---------------------+
                                                              |
                                                              v
                          +-------------------+      +---------------------+
                          |  YouTube Shorts   | <--- |  Fault-tolerant     |
                          |  Instagram Reels  | <--- |  fan-out + retry    |
                          |  TikTok           | <--- |  + structured logs  |
                          +-------------------+      +---------------------+
```

## Status

Active. Production use for personal content distribution. Token refresh + retry semantics audited; structured logs go to stdout in JSON when `LOG_FORMAT=json`.

## Context

Featured in my portfolio under **AI Engineering · Backend Automation** — see [renatolagos.com](https://renatolagos.com).

The shape this proves: thin, owned, terminal-first orchestrators beat SaaS wrappers for any creator who's willing to spend 10 minutes on setup.

---

**Author**: Renato Lagos · [renatolagos.com](https://renatolagos.com) · Backend / AI Engineer · Berlin
