import animate;
import ui.View;
import ui.ImageView;
import ui.resource.Image as Image;
import src.soundcontroller as soundcontroller;

var mole_normal_img = new Image({url: "resources/images/cartoon_happy_basketball.png"}),
		mole_hit_img = new Image({url: "resources/images/cartoon_basketball.png"}),
		qrCode = new Image({url: "resources/images/qrCode.png"}),
		hole_front_img = new Image({url: "resources/images/hole_front.png"}),
		mole_up = 5,
		mole_down = 35;

exports = Class(ui.View, function (supr) {

	this.init = function (opts) {
		opts = merge(opts, {
			width:	100,
			height: 100
		});

		supr(this, 'init', [opts]);



		this.build();
	};


	

	/*
	 * Layout
	 */
	this.build = function () {
		var hole_back = new ui.ImageView({
			superview: this,
			image: qrCode,
			x: 0,
			y: 25,
			width: 200,
			height: 200
		});




		/* Create an animator object for mole.
		 */
		
	};
});
