// Links to pages
var link_Page_Home = "https://elypsoengine.com";
var link_Page_Docs = "https://elypsoengine.com/pages/docs.html";

document.getElementById("btn_Home").addEventListener("click", function () {
    window.location.href = link_Page_Home;
});

document.getElementById("btn_Docs").addEventListener("click", function () {
    window.location.href = link_Page_Docs;
});

// Links to download engine versions
var link_LatestDownload = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.13-prototype/Elypso.engine.0.0.13.7z";
var link_0_0_12 = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.12-prototype/Elypso.engine.0.0.12.7z";

document.getElementById("btn_DownloadEngine").addEventListener("click", function () {
    window.location.href = link_LatestDownload;
});

document.getElementById("btn_Download0-0-12").addEventListener("click", function () {
    window.location.href = link_0_0_12;
});