var FrozenCookies = {
	'branch' : 'Σ',
	'version': '1.9.3'
};
FrozenCookies.loadInterval = setInterval(function() {
  if (Game && Game.ready) {
  	console.log("loaded!");
document.addEventListener('keydown', function(event) {
  if (!Game.promptOn) {
    if(event.keyCode == 71) {
Game.goldenCookie.time = Game.goldenCookie.minTime;
Game.goldenCookie.life = 0;
Game.goldenCookie.spawn();
console.log("giving you a GC!");
    }
  }
});
  }
}, 1000);
