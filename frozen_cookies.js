var FrozenCookies = {
	'baseUrl': baseUrl,
	'branch' : 'Σ',
	'version': '1.9.3'
};
FrozenCookies.loadInterval = setInterval(function() {
  if (Game && Game.ready) {
    Game.goldenCookie.time = Game.goldenCookie.minTime;
Game.goldenCookie.life = 0;
Game.goldenCookie.spawn();
  }
}, 1000);
