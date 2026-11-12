[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$jsonPath = "C:\Users\user\Projects\lingua-quest\phrases.json"
$baseOut = "C:\Users\user\Projects\lingua-quest\public\audio"

$raw = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$phrases = $raw | ConvertFrom-Json

Write-Output "Processing $($phrases.Count) phrases..."

$count = 0
foreach ($p in $phrases) {
    $langDir = Join-Path $baseOut $p.lang
    if (-not (Test-Path $langDir)) {
        New-Item -ItemType Directory -Path $langDir -Force | Out-Null
    }

    $outPath = Join-Path $langDir "$($p.id).mp3"
    if ((Test-Path $outPath) -and ((Get-Item $outPath).Length -gt 200)) {
        continue
    }

    $clean = $p.text.Split('/')[0].Trim()
    $clean = [regex]::Replace($clean, "\([^)]*\)", "").Trim()
    $clean = [regex]::Replace($clean, "\[[^\]]*\]", "").Trim()

    if ([string]::IsNullOrWhiteSpace($clean)) {
        continue
    }

    $enc = [System.Uri]::EscapeDataString($clean)
    $url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=$($p.tl)&q=$enc"

    try {
        Invoke-WebRequest -Uri $url -Headers @{"User-Agent"="Mozilla/5.0"} -OutFile $outPath -TimeoutSec 10 -UseBasicParsing
        $count++
        Write-Output "[$count] Downloaded $($p.lang)/$($p.id).mp3 -> $clean"
        Start-Sleep -Milliseconds 60
    } catch {
        Write-Output "[FAIL] $($p.lang)/$($p.id): $_"
    }
}

Write-Output "Finished all remaining downloads!"
