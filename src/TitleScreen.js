/*
 * The title screen consists of a background image and a
 * start button. When this button is pressed, and event is
 * emitted to itself, which is listened for in the top-level
 * application. When that happens, the title screen is removed,
 * and the game screen shown.
 */

import ui.View;
import ui.ImageView;
import util.ajax as ajax;


/* The title screen is added to the scene graph when it becomes
 * a child of the main application. When this class is instantiated,
 * it adds the start button as a child.
 */
exports = Class(ui.ImageView, function (supr) {
	this.init = function (opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			image: "resources/images/interactiveFan.png"
		});

		supr(this, 'init', [opts]);

		this.build();
	};

	this.build = function() {
		/* Since the start button is a part the background image,
		 * we just need to create and position an overlay view that
		 * will register input events and act as button.
		 */
var joinButton = new ui.View({
			superview: this,
			x: 10,
			y: 125,
			width: 300,
			height: 67
		});
		var leaderboardButton = new ui.View({
			superview: this,
			x: 10,
			y: 212,
			width: 300,
			height: 67
		});
		var athleteButton = new ui.View({
			superview: this,
			x: 10,
			y: 305,
			width: 300,
			height: 67
		});
		var upcomingButton = new ui.View({
			superview: this,
			x: 10,
			y: 400,
			width: 300,
			height: 67
		});

		/* Listening for a touch or click event, and will dispatch a
		 * custom event to the title screen, which is listened for in
		 * the top-level application file.
		 */
		joinButton.on('InputSelect', bind(this, function () {
		//	new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
			this.emit('titlescreen:start');
		}));
		leaderboardButton.on('InputSelect', bind(this, function () {
			window.alert("Leaderboard!");
			ajax.post({
				  url: 'https://api.parse.com/1/classes/Login',
				  headers: {'Content-Type': 'application/json',
				  			'X-Parse-Application-Id': '06RHjxRMWOQFMilpGgidqUBeNRIcmokmHJqNG0Vf',
				  			'X-Parse-REST-API-Key': 'W7yETRg7NeXfITxjU7EM3kgwI89cU4HZkAJz0Kvg'
				},
				  data: {'Score': '1337', 'PlayerName': 'Scott Grandpre', 'cheatMode': false}
				}, function (err, response) {
				  if (err) {
				    console.error('someting went wrong');
				  } else {
				    console.log(response);
				  }
			});
		}));
		athleteButton.on('InputSelect', bind(this, function () {
			window.alert("Edit Your Athlete!!");
		}));
		upcomingButton.on('InputSelect', bind(this, function () {
			window.alert("Upcoming Games!");
		}));

	};
});

function square(x){

	return x/2;
}

function background(){

	return "resources/images/interactiveFan.png";
}
