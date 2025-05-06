# analyze.ps1
Write-Host "Running ESLint code analysis..."
npx eslint ./src --ext .ts,.tsx --max-warnings=0

Write-Host "Checking for TypeScript compile errors..."
npx tsc --noEmit

Write-Host "Checking for unused dependencies..."
$npxArgs = @(
  "depcheck",
  "--ignores=autoprefixer,postcss,tailwindcss,@typescript-eslint/eslint-plugin,@typescript-eslint/parser,eslint-plugin-react-hooks,eslint-plugin-react-refresh,depcheck"
)
npx @npxArgs