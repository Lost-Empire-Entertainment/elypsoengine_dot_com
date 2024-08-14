// Links to pages
var dev_link_Page_Home = "file:///C:/Users/sande/Documents/_WEBSITE PROJECTS/elypsoengine_dot_com/index.html";
var dev_link_Page_Docs = "file:///C:/Users/sande/Documents/_WEBSITE PROJECTS/elypsoengine_dot_com/pages/docs.html";
var dev_link_Page_Tutorials = "file:///C:/Users/sande/Documents/_WEBSITE PROJECTS/elypsoengine_dot_com/pages/tutorials.html"

var link_Page_Home = "https://elypsoengine.com";
var link_Page_Docs = "https://elypsoengine.com/pages/docs.html";
var link_Page_Tutorials = "https://elypsoengine.com/pages/tutorials.html";

// Links to download engine versions
var link_LatestDownload = "https://github.com/Lost-Empire-Entertainment/Elypso-engine/releases/download/v0.0.14-prototype/Elypso.engine.0.0.14.7z";

window.onload = function () {
    var btnHome = document.getElementById("btn_Home");
    var btnDocs = document.getElementById("btn_Docs");
    var btnTutorials = document.getElementById("btn_Tutorials");

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

    if (btnTutorials) {
        btnTutorials.addEventListener("click", function () {
            window.location.href = dev_link_Page_Tutorials;
        });
    }

    var btnDownloadEngine = document.getElementById("btn_DownloadEngine");

    if (btnDownloadEngine) {
        btnDownloadEngine.addEventListener("click", function () {
            window.location.href = link_LatestDownload;
        });
    }
};