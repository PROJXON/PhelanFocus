param(
    [string]$LayoutPath = ".\src\app\layout.tsx"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $LayoutPath)) {
    throw "Could not find $LayoutPath. Run this script from the PhelanFocus repo root."
}

$content = Get-Content -LiteralPath $LayoutPath -Raw
$token = "826e2c59f64d4eb692a55112f427995d"

if ($content -match [regex]::Escape($token)) {
    Write-Host "Cloudflare Web Analytics beacon is already present. No changes made."
    exit 0
}

$backup = "$LayoutPath.cloudflare-backup"
Copy-Item -LiteralPath $LayoutPath -Destination $backup -Force

# Add next/script import if needed.
if ($content -notmatch "from ['""]next/script['""]") {
    $content = "import Script from 'next/script';`r`n" + $content
}

if ($content -notmatch '</body>') {
    throw "Could not find </body> in $LayoutPath. No changes made."
}

$beacon = @'
      {/* Cloudflare Web Analytics */}
      <Script
        id="cloudflare-web-analytics"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
        data-cf-beacon='{"token":"826e2c59f64d4eb692a55112f427995d"}'
      />
'@

$content = $content -replace '(?s)(\s*</body>)', "`r`n$beacon`$1"
Set-Content -LiteralPath $LayoutPath -Value $content -Encoding UTF8

Write-Host "Cloudflare Web Analytics beacon added to $LayoutPath"
Write-Host "Backup created at $backup"
Write-Host "Next: run npm run build"
