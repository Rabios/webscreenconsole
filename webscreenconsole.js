// Started by Rabia Alhaffar in 14/July/2020
// Continue project and finished in 5/October/2020
// My attempt in creating a simple web console that runs on HTML document
// WARNING: Loading this library does huge changes to main JavaScript API
var console = {
	screen: undefined,
    log_colors: { head: "violet", log: "white", info: "lime", warning: "yellow", error: "red" },
    font: "monospace",
    font_size: 24,
	background_color: "black",
	background_image: undefined
}

console.load = function(elem) {
	if (document.body) {
		console.screen = elem;
		if (!console.background_image) {
		    elem.style.backgroundColor = console.background_color;
		} else {
			elem.style.backgroundImage = "url(" + console.background_image + ")";
		}
		elem.style.visibility = "visible";
		elem.style.font = console.font_size + "px " + console.font;
		elem.style.justifyContent = "space-between";
		
		// Create head of console!
		var _ = document.createElement("p");
	    _.style.color = console.log_colors.log;
	    _.style.margin = 0;
	    _.style.padding = 0;
		_.style.color = console.log_colors.head;
	    _.innerHTML = "============= WEB CONSOLE =============";
		_.style.textAlign = "center";
	    console.screen.appendChild(_);
		console.screen.appendChild(document.createElement("br"));
    }
};

console.close = function() {
	if (console.screen) {
		console.screen.innerHTML = "";
        console.screen.style.visibility = "hidden";
	    console.screen = undefined;
	}
};

console.show = function() {
	if (console.screen) console.screen.style.display = "block";
};

console.hide = function() {
	if (console.screen) console.screen.style.display = "none";
};

console.log = function(msg) {
	if (console.screen) {
	    var _ = document.createElement("p");
	    _.style.color = console.log_colors.log;
	    _.style.margin = 0;
	    _.style.padding = 0;
	    _.innerHTML = "LOG: " + msg;
	    console.screen.appendChild(_);
	}
};

console.info = function(msg) {
	if (console.screen) {
	    var _ = document.createElement("p");
	    _.style.color = console.log_colors.info;
	    _.style.margin = 0;
	    _.style.padding = 0;
	    _.innerHTML = "INFO: " + msg;
	    console.screen.appendChild(_);
	}
};

console.warning = function(msg) {
	if (console.screen) {
	    var _ = document.createElement("p");
	    _.style.color = console.log_colors.warning;
	    _.style.margin = 0;
	    _.style.padding = 0;
	    _.innerHTML = "WARNING: " + msg;
	    console.screen.appendChild(_);
	}
};
	
console.error = function(msg) {
	if (console.screen) {
	    var _ = document.createElement("p");
	    _.style.color = console.log_colors.error;
	    _.style.margin = 0;
	    _.style.padding = 0;
	    _.innerHTML = "ERROR: " + msg;
	    console.screen.appendChild(_);
	}
};

console.clear = function() {
	if (console.screen) {
		for (var i = console.screen.getElementsByTagName("p").length - 1; i > 0; i--) {
			if (!(i == 0)) console.screen.removeChild(console.screen.getElementsByTagName("p")[i]);
		}
	}
}