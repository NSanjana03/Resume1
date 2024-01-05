function openTab(tabId) {
    var activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth' });
    }
}