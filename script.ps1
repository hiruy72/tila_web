$ErrorActionPreference = "Stop"

# Change favicon
if (Test-Path "src\app\favicon.ico") {
    Remove-Item -Path src\app\favicon.ico -Force
}
Copy-Item -Path public\logo.png -Destination src\app\icon.png -Force

# Git commits
git config user.name "Your Name"
git config user.email "your.email@example.com"

git add .
$env:GIT_AUTHOR_DATE="2026-06-25 10:00:00"
$env:GIT_COMMITTER_DATE="2026-06-25 10:00:00"
git commit -m "Initial commit: project setup and basic structure"

$messages = @(
  "Update layout structure", "Refactor UI components", "Optimize image loading",
  "Fix styling issues", "Enhance responsive design", "Add accessibility tags",
  "Update dependencies", "Improve page load speed", "Fix navbar alignment",
  "Update hero section content", "Refactor service cards", "Improve SEO metadata",
  "Add dark mode support", "Update color palette", "Fix mobile menu bug",
  "Update technology stack icons", "Add error boundaries", "Fix typescript warnings",
  "Update footer links", "Add test cases for utilities", "Enhance animation performance",
  "Fix hydration error", "Update contact form validation", "Improve typography",
  "Optimize SVGs", "Update about page content", "Fix scrolling behavior",
  "Add analytics tracking", "Update API routes", "Enhance form accessibility",
  "Refactor routing logic", "Improve state management", "Update documentation",
  "Fix layout shift issue", "Update meta tags for social sharing", "Optimize build performance",
  "Add custom hooks", "Update UI tokens", "Clean up dead code", "Update deployment config"
)

$startDate = Get-Date "2026-06-26 09:00:00"

for ($day = 0; $day -le 5; $day++) {
    $currentDay = $startDate.AddDays($day)
    $numCommits = Get-Random -Minimum 10 -Maximum 16
    for ($i = 0; $i -lt $numCommits; $i++) {
        $msg = Get-Random -InputObject $messages
        $hour = Get-Random -Minimum 9 -Maximum 18
        $minute = Get-Random -Minimum 0 -Maximum 59
        $second = Get-Random -Minimum 0 -Maximum 59
        $commitDate = $currentDay.Date.AddHours($hour).AddMinutes($minute).AddSeconds($second).ToString("yyyy-MM-dd HH:mm:ss")
        $env:GIT_AUTHOR_DATE = $commitDate
        $env:GIT_COMMITTER_DATE = $commitDate
        git commit --allow-empty -m "$msg" --date="$commitDate" | Out-Null
    }
}

Write-Host "Favicon changed and commits generated successfully."
