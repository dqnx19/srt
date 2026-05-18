function checkLoadingPreference() {
    if (localStorage.getItem("loading_preference") === "setup") {
        showSetup();
    } else {
        if (localStorage.getItem("lastPage") === "home") {
            showSetupWarning();
        } else {
            showHome();
        }
    }
}