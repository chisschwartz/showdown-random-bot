(() => {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    //sets a variable that lets us turn on and off the script
    let isRunning = false;

    //generates random number between 1-10 for grabbing purposes
    function getRandomNum(isRunning) {
        while (isRunning == true) {
            return Math.floor(Math.random() * 10);
        }
    }

    //commands for the buttons to start and stop the script
    browser.runtime.onMessage.addListener((message) => {
        if(message.command === "intiate"){
            isRunning = true;
            getRandomNum(isRunning);

        } else if (message.command === "stop") {
            isRunning = false;
        }
    })
})