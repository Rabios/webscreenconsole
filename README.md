# webscreenconsole

My attempt to do a custom web console with JavaScript :)

<img src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/120943836_645157386374213_434817603923516791_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=Nkf4-Cow77kAX8TTQ-0&_nc_ht=scontent-mrs2-1.xx&oh=d8c3af2ff2bcaf3cad9fd0567c623307&oe=5FA07654">

### Usage

You can take look at [this example](https://github.com/Rabios/webscreenconsole/blob/master/test.html) that explains usage of it!

### Functions

- `console.load(elem);` Loads console which takes element.
- `console.close();` Closes console and removes all content within it (With removing it).
- `console.show();` Shows console.
- `console.hide();` Hides console (Without taking space).
- `console.log(msg);` Logs simple log message.
- `console.info(msg);` Logs info log message.
- `console.warning(msg);` Logs warning log message.
- `console.error(msg);` Logs error log message.
- `console.clear();` Clears console!

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
