/*
 * The game screen is a singleton view that consists of
 * a scoreboard and a collection of molehills.
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
import src.MoleHill as MoleHill;



/* The GameScreen view is a child of the main application.
 * By adding the scoreboard and the molehills as it's children,
 * everything is visible in the scene graph.
 */
exports = Class(ui.View, function (supr) {
	this.init = function (opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			width: 320,
			height: 480,
		});
		supr(this, 'init', [opts]);
		this.build();
	};

	/*
	 * Layout the qrCode
	 */
	this.build = function () {
		/* The start event is emitted from the start button via the main application.
		 */
		this.style.width = 320;
		this.style.height = 480;

		this._molehills = [];
		var molehill = new MoleHill();
		molehill.style.x = 60
		molehill.style.y = 140
		this.addSubview(molehill);
		this._molehills.push(molehill);

		
	};
});





