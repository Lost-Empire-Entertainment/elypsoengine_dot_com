// Links to pages
var dev_link_Page_Home = "file:///C:/Users/Arvuti/Documents/websites/elypsoengine_dot_com/index.html";
var dev_link_Page_Docs = "file:///C:/Users/Arvuti/Documents/websites/elypsoengine_dot_com/pages/docs.html";

var link_Page_Home = "https://elypsoengine.com";
var link_Page_Docs = "https://elypsoengine.com/pages/docs.html";

// Links to download engine versions
var link_LatestDownload = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.13-prototype/Elypso.engine.0.0.13.7z";
var link_0_0_12 = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.12-prototype/Elypso.engine.0.0.12.7z";

window.onload = function () {
    var btnHome = document.getElementById("btn_Home");
    var btnDocs = document.getElementById("btn_Docs");

    if (btnHome) {
        btnHome.addEventListener("click", function () {
            window.location.href = link_Page_Home;
        });
    }

    if (btnDocs) {
        btnDocs.addEventListener("click", function () {
            window.location.href = link_Page_Docs;
        });
    }

    var btnDownloadEngine = document.getElementById("btn_DownloadEngine");
    var btnDownload012 = document.getElementById("btn_Download0-0-12");

    if (btnDownloadEngine) {
        btnDownloadEngine.addEventListener("click", function () {
            window.location.href = link_LatestDownload;
        });
    }

    if (btnDownload012) {
        btnDownload012.addEventListener("click", function () {
            window.location.href = link_0_0_12;
        });
    }
};