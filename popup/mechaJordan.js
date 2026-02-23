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

        function getError(error) {
            console.error(`Could not intiate: ${error}`);
        }


        if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
            return;
        }

        if (e.target.type === "stop") {
            browser.tabs
                .query({ active: true, currentWindow: true })
                .then(stop)
                .catch(getError);


        } else {
            browser.tabs
                .query({ active: true, currentWindow: true })
                .then(intiate)
                .catch(getError);
        }
    });
}

function reportScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Could not intiate: ${error}`);
}

browser.tabs
.executeScript({ file: "/scripts/intiateJordan.js"})
.then(listenForClicks)
.catch(reportScriptError);