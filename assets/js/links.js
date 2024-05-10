// Download engine
var link_LatestDownload = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.13-prototype/Elypso.engine.0.0.13.7z";
var link_0_0_12 = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.12-prototype/Elypso.engine.0.0.12.7z";

document.getElementById("btn_DownloadEngine").addEventListener("click", function () {
    window.location.href = link_LatestDownload;
});

document.getElementById("btn_Download0-0-12").addEventListener("click", function () {
    window.location.href = link_0_0_12;
});