# dump.ps1

$outFile = "craps_dump.txt"

if (Test-Path $outFile) {
    Remove-Item $outFile
}

Write-Host "Generating code dump into $outFile..."

Get-ChildItem -Path .\src -Recurse -Include *.ts, *.tsx, *.css -Exclude *.d.ts | ForEach-Object {
    $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
    Add-Content -Path $outFile -Value "`n===== FILE: $relativePath =====`n"
    Get-Content $_.FullName | Add-Content -Path $outFile
}

Write-Host "Code dump complete: $outFile"
