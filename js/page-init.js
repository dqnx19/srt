const load_preference = localStorage.getItem("loading_preference");
const last_page = localStorage.getItem("lastPage");

function init() {
    
}
function checkLoadPreference() {
    if (load_preference === ("setup")) {
        showSetup();
    } else {
        loadLastPage()
    }
}

function loadLastPage() {
    if (!last_page) {
        showPage(last_page);
    } else {
        showHome()
    }

}

loadLastPage()