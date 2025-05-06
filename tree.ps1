# tree.ps1

function Show-Tree {
    param (
        [string]$Path,
        [string]$Indent = ""
    )

    Get-ChildItem -Path $Path | ForEach-Object {
        if ($_.PSIsContainer) {
            Write-Host "$Indent- [$($_.Name)]"
            Show-Tree -Path $_.FullName -Indent ("$Indent    ")
        } else {
            Write-Host "$Indent- $($_.Name)"
        }
    }
}

Write-Host "Project structure under .\src:"
Show-Tree -Path ".\src"
