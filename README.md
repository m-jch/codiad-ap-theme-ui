# Codiad Plugin Template

This is a base for building plugins for Codiad IDE. There are 3 main components:

* `init.js` which initializes your plugin into the system
* `plugin.json` which is what Codiad uses to identify your plugin
* `README.md` which should contain information for the end-user

You can add CSS files, images, other libraries, etc. as needed for the plugin to operate successfully.

Since you have access to the `global.codiad` object you can also utilize other components in the system to modify the 
editor, work with projects, run searches, etc.

For a style guide and icon listing view the `/style_guide.php` file in the root of your Codiad install instance.

## Explanation of `plugin.json`

The `plugin.json` file describes how the plugin will interact with Codiad. Most of the properties are self explanatory.

```
[{
    "author": "Your Name",
    "version": "Your Version",
    "name": "Your Plugin Name",
    "rightbar": [
        {
            "action": "codiad.MY_PLUGIN.SOME_METHOD();",
            "icon": "icon-NAME",
            "title": "This will be displayed in the rightbar"
        }
    ],
    "contextmenu": [
        {
            "action": "codiad.MY_PLUGIN.SOME_METHOD();",
            "icon": "icon-NAME",
            "applies-to": "both",
            "title": "This will be displayed in the contextmenu"
        }
    ]
}]
```

`author`, `version` and `name` are the core info, describing the plugin.

`rightbar` is used if you want the plugin to appear in the right-hand bar. The `action` parameter should 
call a method in the init.js file.

`contextmenu` is similar format to `rightbar` but gives the ability to add context menu items to the file manager. 
The `applies-to` property specifies whether the menu entry will appear for `directory`(s) `file`(s) or `both`.