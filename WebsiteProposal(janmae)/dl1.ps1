# Download known food images
$imgDir = "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images"
if (-not (Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir -Force | Out-Null }
Remove-Item -Path $imgDir\* -Force -ErrorAction SilentlyContinue

$imgs = @(
  "sisig.jpg|Sizzling_Sisig_Set.jpg"
  "chicken-adobo.jpg|Chicken_adobo.jpg"
  "chicken-inalas.jpg|Filipino_Chicken_Adobo_with_rice_2.jpg"
  "halo-halo.jpg|A_glass_of_Halo-Halo_(shaved_or_crushed_ice_dessert_in_the_Philippines).jpg"
  "crispy-pata.jpg|Sizzling_Sisig_at_La_Herencia_Comida.jpg"
  "spaghetti.jpg|Spaghetti_a_l_olio.jpg"
)

foreach ($line in $imgs) {
  $parts = $line -split "\|"
  $filename = $parts[0]
  $fileKey = $parts[1]
  $url = "https://upload.wikimedia.org/wikipedia/commons/$fileKey"
  $dest = Join-Path $imgDir $filename
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 15
    $sz = if (Test-Path $dest) { [IO.File]::GetFileSize($dest) } else { 0 }
    Write-Host "OK: $filename ($sz bytes)"
  } catch {
    Write-Host "ERR: $filename - $_"
  }
}

Get-ChildItem -Path $imgDir -File | Select-Object -ExpandProperty Name | Sort-Object
Write-Host "Total: $(Get-ChildItem -Path $imgDir -File | Measure-Object | Select-Object -ExpandProperty Count)"