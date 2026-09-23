# Gubba Tag Staff – Vercel API

This is a simple Next.js app that serves a live staff list for the C# client.

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Upload this folder (or connect a GitHub repo)
4. Click **Deploy**

After deploy, your API will be at:
```
https://your-project-name.vercel.app/api/staff
```

## Features

- **GET** `/api/staff` → returns the full staff JSON
- **POST** `/api/staff` → add a name  
  Body: `{ "role": "FOUNDERS", "name": "UNITY" }`
- **DELETE** `/api/staff` → remove a name  
  Body: `{ "role": "FOUNDERS", "name": "UNITY" }`

There is also a web UI at the root (`/`) where you can add/remove names visually.

## Important Note

The staff list is stored **in memory**.  
It will reset when the serverless function goes cold or when you redeploy.  

For permanent storage later you can switch to:
- Vercel KV
- Vercel Postgres
- Supabase / Firebase / MongoDB

## Example Response

```json
{
  "title": "\\ GUBBA TAG STAFF //",
  "roles": {
    "FOUNDERS": ["UNITY", "UNITY"],
    "CO FOUNDERS": ["FROG", "SOT BUNNY"],
    "OWNERS": ["CRACK"],
    "CO OWNERS": [],
    ...
  }
}
```
