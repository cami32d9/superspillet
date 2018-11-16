let showSettingsEffektSound = true;
let showSettingsMusic = true;
//let score = 0;
//let timeLeft = 15;

let points = 6;
let busPosition = 1;
let mouth = 1;

window.addEventListener("load", pageLoaded);

function pageLoaded() {
    console.log("page loaded");


    showStart();



}

function showStart() {
    console.log("show start");


    document.querySelector("#play_but").addEventListener("click", showAbout);
    document.querySelector("#start_elements").classList.remove("hidden");

    document.querySelector("#settings_but").addEventListener("click", showSettings);

}
function hideStart() {
    console.log("hide start");

    document.querySelector("#sfx1").play();
    document.querySelector("#start_elements").classList.add("fade_out");
    // Kan tilføjes til andre fade-outs, eks. når vi skal fra start til settings og tilbage
    document.querySelector("#start_elements").addEventListener("animationend", function _listener() {
        document.querySelector("#start_elements").classList.add("hidden");
        document.querySelector("#start_elements").removeEventListener("animationend", _listener);
    });
    //


    //rydde op:
    document.querySelector("#play_but").removeEventListener("click", hideStart);

    document.querySelector("#settings_but").removeEventListener("click", showSettings);

    //rydde op slut

    document.querySelector("#pop_screen").addEventListener("animationend", showAbout);

    document.querySelector("#myMusic").play();
    document.querySelector("#myMusic").loop = true;
    document.querySelector("#myMusic").volume = 0.4;


}

function showSettings() {
    console.log("show settings");
    document.querySelector("#start_elements").classList.add("hidden");
    document.querySelector("#sfx1").play();
    document.querySelector("#settings_elements").classList.remove("hidden");

    document.querySelector("#music").addEventListener("click", toggleMusic);

    document.querySelector("#sfx").addEventListener("click", toggleSound);

    document.querySelector("#settings_exit").addEventListener("click", hideSettings);


}
function hideSettings() {

    console.log("hideSettings");
    document.querySelector("#settings_elements").classList.add("hidden");
    document.querySelector("#sfx1").play();
    showStart();
}

function toggleMusic() {

    console.log("toggleMusic");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();
    }

    document.querySelector("#sfx1").play();
}
function musicOff() {
    console.log("musicOff");

    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

    document.querySelector("#myMusic").muted = true;
}
function musicOn() {
    console.log("musicOn");

    document.querySelector("#music").classList.remove("off");
    document.querySelector("#music").classList.add("on");

    document.querySelector("#myMusic").muted = false;

}

function toggleSound() {

    console.log("toggleSound");


    //Tjek lyden, er lyden lig med true, dvs = =, skal lyden være lig med false, og føre ned til soundsOff.

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();
    }

    document.querySelector("#sfx1").play();
}
function soundsOff() {
    console.log("soundsOff");

    document.querySelector("#sfx").classList.remove("on");
    document.querySelector("#sfx").classList.add("off");

    document.querySelector("#sfx1").muted = true;
    document.querySelector("#sfx2").muted = true;
    //    document.querySelector("#sfx3").muted = true;
}
function soundsOn() {
    console.log("soundsOn");

    document.querySelector("#sfx").classList.remove("off");
    document.querySelector("#sfx").classList.add("on");

    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;
    //    document.querySelector("#sfx3").muted = false;

}

function showAbout() {
    console.log("show about");
    hideStart()
    document.querySelector("#about_screen").classList.remove("hidden");
    document.querySelector("#about_screen").classList.add("fade_in");

    //    document.querySelector("#myMusic").play();
    //    document.querySelector("#myMusic").loop = true;
    //    document.querySelector("#myMusic").volume = 0.7;
    //document.querySelector("#about").classList.remove("hide");

    document.querySelector("#play_boy").addEventListener("click", playBoy);
    document.querySelector("#play_girl").addEventListener("click", playGirl);

}

function playBoy () {
    document.querySelector("#character").classList.add("boy");
    startGame();
}

function playGirl () {
    document.querySelector("#character").classList.add("girl");
    startGame();
}

function hideAbout () {
    document.querySelector("#about_screen").classList.add("fade_out");
    document.querySelector("#about_screen").addEventListener("animationend", function _listener() {
        document.querySelector("#about_screen").classList.add("hidden");
        document.querySelector("#about_screen").removeEventListener("animationend", _listener);
    });
    document.querySelector("#pop_screen").classList.add("fade_out");
    document.querySelector("#pop_screen").addEventListener("animationend", function _listener() {
        document.querySelector("#pop_screen").classList.add("hidden");
        document.querySelector("#pop_screen").removeEventListener("animationend", _listener);
    });
}

function startGame() {
    hideAbout();
    console.log("start game")

    document.querySelector("#sfx1").play();

    //Reset:

    //    score = 0;
    //    timeLeft = 15;

    //Ryd op:
    document.querySelector("#about_screen").classList.add("hidden");
    document.querySelector("#game_screen").classList.remove("hidden");
    Bubbles.shuffle();
    Bubbles.enable();

    //ryd op slut


    //start animation:




    //start tid:

    // timeLeft();




}

// GAME





// Not in use yet?

function timeLeftFc() {
    console.log("function time_left=" + timeLeft);

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);

        document.querySelector("#time").innerHTML = timeLeft;
    } else if (score >= 5) {

        gameWon();
    } else {
        gameOver();
    }





}

function gameOver() {
    console.log("game over")

    document.querySelector("#gameover_screen").classList.remove("hidden");
    timeLeft = 0;

    document.querySelector("#sfx2").pause();
    document.querySelector("#gosound").play();


    document.querySelector("#playagain1").addEventListener("click", startGame);

    //    document.querySelector("#playagain_knap").addEventListener("click", gameReset);

}


function gameWon() {
    console.log("game won")

    //    document.querySelector("#gameover").classList.add("hide");

    document.querySelector("#levelcomplete_screen").classList.remove("hide");
    timeLeft = 0;


    document.querySelector("#sfx1").pause();
    document.querySelector("#winsound").play();


    document.querySelector("#playagain2").addEventListener("click", startGame);
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


const Bubbles = {
    bubbleContainer1: {
        /** @type Element */
        element: document.querySelector('#bubble_container_1'),
        type: 'bubble_1',
    },
    bubbleContainer2: {
        /** @type Element */
        element: document.querySelector('#bubble_container_2'),
        type: 'bubble_1',
    },
    bubbleContainer3: {
        /** @type Element */
        element: document.querySelector('#bubble_container_3'),
        type: 'bubble_1',
    },
    bubbleContainer4: {
        /** @type Element */
        element: document.querySelector('#bubble_container_4'),
        type: 'bubble_1',
    },
    types: {
        good: ['bubble_1', 'bubble_2', 'bubble_3'],
        bad: ['bubble_4', 'bubble_5', 'bubble_6', 'bubble_7', 'bubble_8', 'bubble_9'],
    },
    onGoodClick: function () {
        moveBus();
        clickIntimate();
        Bubbles.shuffle();
        Bubbles.enable();
    },
    onBadClick: function () {
        moveBus();
        clickComfortable();
        Bubbles.shuffle();
        Bubbles.enable();

    },
    _getClickEventForType: function (type) {
        if (Bubbles.types.good.includes(type)) {
            return Bubbles.onGoodClick;
        }
        return Bubbles.onBadClick;
    },
    _getType: function (isGood) {
        if (isGood) {
            return randomElement(Bubbles.types.good);
        }
        return randomElement(Bubbles.types.bad);
    },
    shuffle: function () {
        Bubbles.reset();
        // Get a random number to randomly pick a bubble to be the bad one
        let bad = randomNumber(1, 4);
        Bubbles.bubbleContainer1.type = Bubbles._getType(1 !== bad);
        Bubbles.bubbleContainer2.type = Bubbles._getType(2 !== bad);
        Bubbles.bubbleContainer3.type = Bubbles._getType(3 !== bad);
        Bubbles.bubbleContainer4.type = Bubbles._getType(4 !== bad);

        Bubbles.bubbleContainer1.element.classList.add(Bubbles.bubbleContainer1.type);
        Bubbles.bubbleContainer2.element.classList.add(Bubbles.bubbleContainer2.type);
        Bubbles.bubbleContainer3.element.classList.add(Bubbles.bubbleContainer3.type);
        Bubbles.bubbleContainer4.element.classList.add(Bubbles.bubbleContainer4.type);
    },
    enable: function () {
        Bubbles.bubbleContainer1.element.addEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer1.type));

        Bubbles.bubbleContainer2.element.addEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer2.type));

        Bubbles.bubbleContainer3.element.addEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer3.type));

        Bubbles.bubbleContainer4.element.addEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer4.type));
    },
    reset: function () {
        Bubbles.bubbleContainer1.element.removeEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer1.type));
        Bubbles.bubbleContainer1.element.classList.remove(Bubbles.bubbleContainer1.type);

        Bubbles.bubbleContainer2.element.removeEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer2.type));
        Bubbles.bubbleContainer2.element.classList.remove(Bubbles.bubbleContainer2.type);

        Bubbles.bubbleContainer3.element.removeEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer3.type));
        Bubbles.bubbleContainer3.element.classList.remove(Bubbles.bubbleContainer3.type);

        Bubbles.bubbleContainer4.element.removeEventListener("click", Bubbles._getClickEventForType(Bubbles.bubbleContainer4.type));
        Bubbles.bubbleContainer4.element.classList.remove(Bubbles.bubbleContainer4.type);
    }
};

function moveBus() {
    console.log("Moving bus");
    document.querySelector("#bus").classList.remove("bus_" + busPosition);
    busPosition++;
    let busCurrent = "bus_" + busPosition;
    document.querySelector("#bus").classList.add(busCurrent);
    if (busPosition === 7) {
        console.log("Game over");
    //    TILFØJ GAME-OVER SKÆRM
    }
}


function clickIntimate() {
    if (points === 11) {
        console.log("Click intimate");
        document.querySelector("#snak_o_meter").classList.remove("points_" + points);
        points++;
        let currentPoints = "points_" + points;
        document.querySelector("#snak_o_meter").classList.add(currentPoints);
    }
    else if (points < 11) {
        console.log("Click intimate");
        document.querySelector("#snak_o_meter").classList.remove("points_" + points);
        points += 2;
        let currentPoints = "points_" + points;
        document.querySelector("#snak_o_meter").classList.add(currentPoints);
    }

    if (mouth <= 4) {
        console.log("Change mouth" + mouth);
        document.querySelector("#mouth").classList.remove("mouth_" + mouth);
        mouth++;
        let currentMouth = "mouth_" + mouth;
        document.querySelector("#mouth").classList.add(currentMouth);
    }
};


function clickComfortable() {
    if (points !== 0) {
        console.log("Click comfortable");
        document.querySelector("#snak_o_meter").classList.remove("points_" + points);
        points--;
        let currentPoints = "points_" + points;
        document.querySelector("#snak_o_meter").classList.add(currentPoints);
    }

    if (mouth >= 2) {
        console.log("Change mouth" + mouth);
        document.querySelector("#mouth").classList.remove("mouth_" + mouth);
        mouth--;
        let currentMouth = "mouth_" + mouth;
        document.querySelector("#mouth").classList.add(currentMouth);
    }
};
