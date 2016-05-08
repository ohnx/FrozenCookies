var FrozenCookies = {
    'branch': 'Σ',
    'version': '1.9.3'
};

function startClickFrenzy(time) {
    Game.clickFrenzy = Game.fps * time;
    Game.recalculateGains = 1;
    Game.Popup('Click frenzy! Clicking power x777 for ' + time + ' seconds!');
}

FrozenCookies.loadInterval = setInterval(function() {
    if (Game && Game.ready) {
        console.log("loaded!");
        clearInterval(FrozenCookies.loadInterval);
        document.addEventListener('keydown', function(event) {
            if (!Game.promptOn) {
                if (event.keyCode == 71) {
                    Game.goldenCookie.time = Game.goldenCookie.minTime;
                    Game.goldenCookie.life = 0;
                    Game.goldenCookie.spawn();
                    console.log("giving you a GC!");
                } else if (event.keyCode == 70) {
                    startClickFrenzy(77);
                }
            }
        });
        
    }
}, 1000);
