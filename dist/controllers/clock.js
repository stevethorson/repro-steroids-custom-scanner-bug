
function deviceReady(){
	clockUI.init();
}


var clockUI = {
	scheduleView: null,
	init: function(){

		//preload schedule view
		clockUI.scheduleView = new steroids.views.WebView( "/views/schedule/index.html" );
		clockUI.scheduleView.preload({}, {
			onSuccess: function() {
				clockUI.activateDrawerGestures();
			}
		});

		var startEvent = Hammer($('.menu-btn')[0]).on("tap", clockUI.hamburgerHandler);
	},

	openDrawer: function() {
		var myAnimation = new steroids.Animation({
		  transition: "slideFromLeft",
		  duration: 0.7,
		  curve: "linear"
		});

	  	steroids.drawers.show( {
			    view: clockUI.scheduleView,
			    edge: steroids.screen.edges.LEFT,
			    keepLoading: true,
			    animation: myAnimation
 			}, {
			    onSuccess: function() {
			    },
			    onFailure: function(error) {
			      alert("Could not show the drawer: " + error.errorDescription);
			    }
		});
	},
	closeDrawer: function(){
			steroids.drawers.hide({}, {
				onSuccess: function() {
				},
				onFailure: function(error) {
				alert("Could not dismiss the drawer: " + error.errorDescription);
				}
			});
	},
	activateDrawerGestures: function(){
			steroids.drawers.enableGesture(clockUI.scheduleView);
	},
	deactivateDrawerGestures: function(){
		steroids.drawers.disableGesture(clockUI.scheduleView);
	},
	hamburgerHandler: function(){
		clockUI.openDrawer();
	},
};

document.addEventListener("deviceready", deviceReady, false);
