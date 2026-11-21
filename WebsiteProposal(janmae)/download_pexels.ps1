# Download real food photos from Pexels
$imgDir = "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images"
if (-not (Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir -Force | Out-Null }
Remove-Item -Path $imgDir\* -Force -ErrorAction SilentlyContinue

# Pexels image URL pattern
function Get-PexelsUrl($id) {
    return "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=800"
}

$images = @(
    ,@("sisig.jpg", 30355484)          # Sizzling Sisig with Rice
    ,@("chicken-inalas.jpg", 6896058)   # Chicken Adobo with Rice (closest available)
    ,@("beef-pares.jpg", 17952225)      # Rice and Beef
    ,@("milk-tea.jpg", 38006844)        # Iced Milk Tea with Tapioca
    ,@("halo-halo.jpg", 30028551)       # Halo-halo
    ,@("crispy-pata.jpg", 32067295)     # Crispy Fried Chicken Wings
    ,@("chicken-adobo.jpg", 6896058)    # Pork Adobo with Rice
    ,@("fried-chicken.jpg", 1860202)    # Fried Chicken
    ,@("beef-tapa.jpg", 17952225)       # Rice and Beef (closest available)
    ,@("cheese-burger.jpg", 19247569)   # Burger and French Fries
    ,@("french-fries.jpg", 12178045)    # Fried Chicken with Fries
    ,@("chicken-nuggets.jpg", 31300944) # Crispy Nuggets
    ,@("siomai.jpg", 8625454)           # Cooked Food on Green Plate
    ,@("spaghetti.jpg", 19062760)       # Spaghetti Carbonara
    ,@("pancit-malabon.jpg", 33522083)  # Hearty Meal with Pasta
    ,@("carbonara.jpg", 19062760)       # Spaghetti Carbonara
    ,@("iced-tea.jpg", 37076559)        # Sate Ayam with Iced Tea
    ,@("calamansi-juice.jpg", 37048267) # Spicy Noodles with Lime and Tea
    ,@("softdrinks.jpg", 6369303)       # Coca Cola and Fries
    ,@("leche-flanc.jpg", 8625454)      # Cooked Food on Green Plate (closest available)
    ,@("mango-float.jpg", 36247832)     # Tasty Pasta and Fries
)

foreach ($item in $images) {
    $filename = $item[0]
    $id = $item[1]
    $url = Get-PexelsUrl $id
    $dest = Join-Path $imgDir $filename
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 15
        $sz = if (Test-Path $dest) { [IO.File]::GetFileSize($dest) } else { 0 }
        Write-Host "OK: $filename ($sz bytes)" -ForegroundColor Green
    } catch {
        Write-Host "ERR: $filename - $_" -ForegroundColor Red
    }
}

Write-Host "=== Done ==="
Get-ChildItem -Path $imgDir -File | Select-Object -ExpandProperty Name | Sort-Object
Write-Host "Total: $(Get-ChildItem -Path $imgDir -File | Measure-Object | Select-Object -ExpandProperty Count)"