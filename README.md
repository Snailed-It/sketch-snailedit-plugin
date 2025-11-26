# Our Custom Sketch Plugin

Provides useful utilities we've developed in house

1. Rename screenshots for export

## Installation

1. Download and install snailed-it.sketchplugin [from the latest release](https://github.com/Snailed-It/sketch-snailedit-plugin/releases)
2. The plugin should then be listed in Sketch, ensure it is enabled.
![[assets/Sketch_Preferences.png]]
3. You can now access the plugins tools from the `Plugins` menu in any Sketch Workspace.

## Developments

[Sketch Plugins](https://developer.sketch.com/plugins/create-a-plugin) are javascript scripts built via npm.
As such, to create a new version:

1. Make your changes in `src/`
2. If adding a new command, update `src/manifest.json` to list the entry point
3. Update the version number in `src/manifest.json`
4. Run `npm run build`
5. Install and test the new `snailed-it.sketchplugin`
6. Push to GitHub and create a new release, including a direct download of the plugin asset.
