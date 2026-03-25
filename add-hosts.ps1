# Run this as Administrator
$hostsPath = "C:\Windows\System32\drivers\etc\hosts"
$domain = "terlik.com"
$ip = "127.0.0.1"

# Check if already exists
$content = Get-Content $hostsPath
if ($content -notmatch $domain) {
    Add-Content -Path $hostsPath -Value "$ip $domain" -Encoding ASCII
    Add-Content -Path $hostsPath -Value "$ip www.$domain" -Encoding ASCII
    Write-Host "Domain added successfully!"
} else {
    Write-Host "Domain already exists in hosts file"
}
