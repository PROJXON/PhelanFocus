PhelanFocus Cloudflare Web Analytics patch

This adds the Cloudflare Web Analytics beacon using Next.js next/script
to avoid the @next/next/no-sync-scripts build error.

From the PhelanFocus repo root:

1. Run:
   powershell -ExecutionPolicy Bypass -File .\apply-cloudflare-web-analytics.ps1

2. Test:
   npm run build

3. If the build passes:
   git add src/app/layout.tsx
   git commit -m "Add Cloudflare Web Analytics"
   git push

The script creates:
src/app/layout.tsx.cloudflare-backup

Rollback, if needed:
powershell -ExecutionPolicy Bypass -File .\rollback-cloudflare-web-analytics.ps1
