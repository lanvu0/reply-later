
document.addEventListener('DOMContentLoaded', function () {
    // Check if active tab is valid URL
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length === 0) {
            console.error("No active tab.");
            return;
        }

    });

})
