# webscreenconsole

My attempt to do a custom web console with JavaScript :)

<img src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/120943836_645157386374213_434817603923516791_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=Nkf4-Cow77kAX8TTQ-0&_nc_ht=scontent-mrs2-1.xx&oh=d8c3af2ff2bcaf3cad9fd0567c623307&oe=5FA07654">

### Usage

Add `webscreenconsole.js` to your webpage and if you have element for example a `<div>` with id so...

```js
<!DOCTYPE html>
<html>
    <head>
	    <title>Webscreenconsole test</title>
		<script src="webscreenconsole.js"></script>
	</head>
	<body>
	    <h1 style="font-family: monospace;">Console</h1>
		<div id="console"></div>
		<script>console.load(document.getElementById('console'));</script>
		<script>
			console.log("Hello World!");
			console.info("Made with love and JavaScript!");
			console.warning("This is something experimental :)");
			console.error("This is harmful!");
			console.error("THE WAR BEGINS!");
		</script>
	</body>
</html>
```

### Console properties

This custom web console is customizable, It allows anyone to set background, Font with a size, Or even colors!

```js
var console = {
    log_colors: { head: "violet", log: "white", info: "lime", warning: "yellow", error: "red" }, // Log colors
    font: "monospace",
    font_size: 24,
    background_color: "black",
    background_image: undefined // Put image link here to replace color with image as background!
}
```
