(() => {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    //sets a variable that lets us turn on and off the script
    let isRunning = false;

    //generates random number between 1-10 for grabbing purposes
    function getRandomNum(isRunning) {
        While (isRunning == true); {
        return Math.floor(Math.random() * 10);
        }
    }

    browser.runtime.onMessage.addListener((message) => {
        if(message.command === "intiate"){
            isRunning = true;
            getRandomNum();

        } else if (message.command === "stop") {
            isRunning = false;
            //stop script
        }
    })
})