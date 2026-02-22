function listenForClicks() {
    document.addEventListener("click", (e) => {

        function intiate(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "intitate",
            })
        }

        function stop(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "stop",
            });
        };

        
        if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
            return;
        }

        if  (e.target.type === "stop") {
            browser.tabs
            .query({ active: true, currentWindow: true})
            .then(stop)
            
        } else {
            browser.tabs
            .query({ active: true, currentWindow: true})
            .then(intiate)
        }
    });
}