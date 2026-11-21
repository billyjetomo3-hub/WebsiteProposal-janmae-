# Generate high-quality SVG food illustrations for BiteDash menu
$imagesDir = "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images"
if (-not (Test-Path $imagesDir)) { New-Item -ItemType Directory -Path $imagesDir -Force | Out-Null }

function W($f,$b1="#fff7ed",$b2="#fecaca",$c=""){ 
  $svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='$b1'/><stop offset='100' stop-color='$b2'/></linearGradient><linearGradient id='p' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#f8fafc'/><stop offset='100' stop-color='#94a3b8'/></linearGradient><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#000' stop-opacity='.15'/><stop offset='100' stop-color='#000' stop-opacity='0'/></linearGradient></defs><rect width='600' height='400' fill='url(#g)'/><circle cx='70' cy='60' r='55' fill='#fed7aa' opacity='.45'/><circle cx='530' cy='40' r='38' fill='#fca5a5' opacity='.35'/><circle cx='500' cy='360' r='50' fill='#fde68a' opacity='.4'/><circle cx='40' cy='340' r='30' fill='#a7f3d0' opacity='.3'/><ellipse cx='300' cy='335' rx='190' ry='16' fill='url(#s)'/><ellipse cx='300' cy='324' rx='200' ry='34' fill='url(#p)'/><ellipse cx='300' cy='314' rx='200' ry='30' fill='none' stroke='#64748b' stroke-width='2'/>$c</svg>"
  $svg | Set-Content "c:\Users\billy\OneDrive\Desktop\Activities\WebsiteProposal(janmae)\images\$f" -Encoding UTF8
  Write-Host "Created $f"
}

# 1-3
W -f "sisig.jpg" -b1 "#fff7ed" -b2 "#fca5a5" -c @"
<ellipse cx='300' cy='280' rx='135' ry='48' fill='#991b1b' opacity='.85'/>
<ellipse cx='300' cy='280' rx='118' ry='40' fill='#7f1d1d' opacity='.8'/>
<rect x='230' y='255' width='140' height='55' rx='6' fill='#f6e05e' opacity='.9'/>
<polygon points='375,240 390,278 355,278' fill='#dc2626' opacity='.9'/>
<ellipse cx='362' cy='252' rx='17' ry='14' fill='#fde68a'/>
<rect x='195' y='272' width='45' height='32' rx='4' fill='#fecaca' opacity='.7'/>
<circle cx='255' cy='235' r='6' fill='#22c55e' opacity='.8'/>
"@

W -f "chicken-inalas.jpg" -b1 "#fffbeb" -b2 "#f59e0b" -c @"
<ellipse cx='300' cy='275' rx='110' ry='55' fill='#b45309' opacity='.85'/>
<ellipse cx='300' cy='275' rx='92' ry='48' fill='#92400e' opacity='.8'/>
<rect x='215' y='260' width='170' height='55' rx='8' fill='#f6e05e' opacity='.92'/>
<ellipse cx='270' cy='255' rx='12' ry='9' fill='#b91c1c' opacity='.55'/>
<circle cx='345' cy='248' r='7' fill='#d97706' opacity='.7'/>
"@

W -f "beef-pares.jpg" -b1 "#fff7ed" -b2 "#fde68a" -c @"
<rect x='225' y='250' width='150' height='65' rx='8' fill='#f6e05e' opacity='.92'/>
<ellipse cx='340' cy='305' rx='95' ry='22' fill='#b91c1c' opacity='.75'/>
<ellipse cx='340' cy='308' rx='80' ry='17' fill='#991b1b' opacity='.7'/>
<ellipse cx='340' cy='312' rx='65' ry='14' fill='#7f1d1d' opacity='.6'/>
<polygon points='200,195 300,215 250,205 200,220' fill='#dc2626' opacity='.3'/>

# 4. Pearl Wintermelon Milk Tea
W -f "milk-tea.jpg" -b1 "#e0e7ff" -b2 "#8b5cf6" -c @"
<path d='M215,175 L215,295 Q215,315 240,315 L360,315 Q385,315 385,295 L385,175 Q385,155 360,155 Z' fill='#cbd5e1'/>
<path d='M235,185 L235,285 Q235,308 260,308 L340,308 Q365,308 365,285 L365,185 Q365,165 340,165 Z' fill='#f59e0b'/>
<rect x='265' y='205' width='70' height='9' rx='4' fill='#1d4ed8' opacity='.85'/>
<path d='M242,212 L270,224' stroke='#1d4ed8' stroke-width='3' fill='none' stroke-linecap='round'/>
<ellipse cx='250' cy='195' rx='8' ry='4' fill='#fff' opacity='.8'/>
"@

# 5. Special Halo-Halo Overload
W -f "halo-halo.jpg" -b1 "#fde68a" -b2 "#f59e0b" -c @"
<ellipse cx='300' cy='310' rx='150' ry='30' fill='#b45309' opacity='.6'/>
<circle cx='255' cy='255' r='10' fill='#fde68a' opacity='.9'/>
<circle cx='275' cy='245' r='7' fill='#dc2626' opacity='.8'/>
<circle cx='325' cy='250' r='8' fill='#fde68a' opacity='.9'/>
<circle cx='345' cy='238' r='6' fill='#b91c1b' opacity='.8'/>
<rect x='270' y='240' width='60' height='6' rx='3' fill='#94a3b8' opacity='.6'/>
<rect x='275' y='230' width='50' height='5' rx='2.5' fill='#22c55e' opacity='.6'/>
<rect x='260' y='220' width='80' height='5' rx='2.5' fill='#f59e0b' opacity='.6'/>
<ellipse cx='300' cy='295' rx='130' ry='12' fill='#a16207' opacity='.7'/>
"@

# 6. Fiesta Crispy Pata
W -f "crispy-pata.jpg" -b1 "#fef3c7" -b2 "#b45309" -c @"
<path d='M180,150 C160,120 140,110 130,100 C120,90 110,85 105,80 Q100,75 110,75 L110,120 C115,115 125,115 130,125 C135,130 140,135 145,135 C160,135 175,130 185,125 L190,110 L175,150 Z' fill='#b45309' opacity='.9'/>
<path d='M190,140 C170,115 155,105 145,95 C135,85 125,80 120,75 Q115,70 122,72 L122,112 C128,108 138,108 144,118 C150,123 158,128 166,128 C180,128 192,122 198,118 L202,105 L188,138 Z' fill='#92400e' opacity='.85'/>
<ellipse cx='180' cy='250' rx='80' ry='10' fill='#fde68a' opacity='.5'/>
<circle cx='160' cy='240' r='5' fill='#15803d' opacity='.6'/>
"@

"@
