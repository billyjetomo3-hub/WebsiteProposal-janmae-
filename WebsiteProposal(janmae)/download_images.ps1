# Download real food photos from Wikimedia Commons
$imgDir = "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images"
if (-not (Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir -Force | Out-Null }

# Delete existing files to start fresh with real photos
Get-ChildItem -Path $imgDir -File | Remove-Item -Force -ErrorAction SilentlyContinue

Write-Host "=== Downloading real food photos ==="

# Image file => search query for Wikimedia Commons
$images = @(
    ,@("sisig.jpg", "Sizzling Sisig Set"),
    ,@("chicken-adobo.jpg", "Chicken adobo Filipino"),
    ,@("chicken-inalas.jpg", "Chicken adobo rice Filipino"),
    ,@("halo-halo.jpg", "Halo Halo shaved ice"),
    ,@("crispy-pata.jpg", "Crispy Pata La Herencia"),
    ,@("beef-pares.jpg", "Beef pares rice bowl"),
    ,@("milk-tea.jpg", "Milk tea Filipino"),
    ,@("fried-chicken.jpg", "Fried chicken plate"),
    ,@("beef-tapa.jpg", "Beef Tapa rice"),
    ,@("cheese-burger.jpg", "Cheese burger"),
    ,@("french-fries.jpg", "French fries plate"),
    ,@("chicken-nuggets.jpg", "Chicken nuggets"),
    ,@("siomai.jpg", "Siomai steamed pork"),
    ,@("spaghetti.jpg", "Spaghetti tomato sauce"),
    ,@("pancit-malabon.jpg", "Pancit Malabon"),
    ,@("carbonara.jpg", "Spaghetti carbonara"),
    ,@("iced-tea.jpg", "Iced tea glass"),
    ,@("calamansi-juice.jpg", "Calamansi juice"),
    ,@("softdrinks.jpg", "Soft drinks can"),
    ,@("leche-flanc.jpg", "Leche Flan"),
    ,@("mango-float.jpg", "Mango Float")
)

foreach ($item in $images) {
    $filename = $item[0]
    $search = $item[1]
    $search = $search -replace " ", "%20"
    $apiUrl = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=$search&srnamespace=6&format=json&srlimit=3"
    try {
        $searchResult = Invoke-RestMethod -Uri $apiUrl -UseBasicParsing
        $pages = $searchResult.query.search
        if ($pages -and $pages.Count -gt 0) {
            $best = $pages[0]
            $fileTitle = $best.title
            $titleClean = $fileTitle -replace "File:", ""
            $titleClean = $titleClean -replace "\s", "%20"
            $urlApi = "https://commons.wikimedia.org/w/api.php?action=query&titles=$fileTitle&prop=imageinfo&iiprop=url&format=json"
            $urlResult = Invoke-RestMethod -Uri $urlApi -UseBasicParsing
            $imageUrl = $urlResult.query.pages[0].imageinfo[0].url
            $cleanUrl = $imageUrl -replace "\?utm.*$", ""
            $dest = Join-Path $imgDir $filename
            Invoke-WebRequest -Uri $cleanUrl -OutFile $dest -UseBasicParsing -TimeoutSec 30
            $size = [IO.File]::GetFileSize($dest)
            Write-Host "OK: $filename ($size bytes)"
        } else {
            Write-Host "No results for: $filename ($search)"
        }
    } catch {
        Write-Host "API Error: $filename - $_"
    }
}

Write-Host "=== Done ==="
Write-Host "Total images: $(Get-ChildItem -Path $imgDir -File | Measure-Object | Select-Object -ExpandProperty Count)"