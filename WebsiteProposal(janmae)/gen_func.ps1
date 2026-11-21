# Function for generating SVG food illustrations
$imagesDir = "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images"
if (-not (Test-Path $imagesDir)) { New-Item -ItemType Directory -Path $imagesDir -Force | Out-Null }

function W($f,$b1="#fff7ed",$b2="#fecaca",$c=""){ 
  $svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='$b1'/><stop offset='100' stop-color='$b2'/></linearGradient><linearGradient id='p' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#f8fafc'/><stop offset='100' stop-color='#94a3b8'/></linearGradient><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#000' stop-opacity='.15'/><stop offset='100' stop-color='#000' stop-opacity='0'/></linearGradient></defs><rect width='600' height='400' fill='url(#g)'/><circle cx='70' cy='60' r='55' fill='#fed7aa' opacity='.45'/><circle cx='530' cy='40' r='38' fill='#fca5a5' opacity='.35'/><circle cx='500' cy='360' r='50' fill='#fde68a' opacity='.4'/><circle cx='40' cy='340' r='30' fill='#a7f3d0' opacity='.3'/><ellipse cx='300' cy='335' rx='190' ry='16' fill='url(#s)'/><ellipse cx='300' cy='324' rx='200' ry='34' fill='url(#p)'/><ellipse cx='300' cy='314' rx='200' ry='30' fill='none' stroke='#64748b' stroke-width='2'/>$c</svg>"
  $svg | Set-Content "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images\$f" -Encoding UTF8
  Write-Host "Created $f"
}
