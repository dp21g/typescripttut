# Testing Typescript and using VSCode

## Configure Auto Save
To configure Auto Save, open User Settings or Workspace Settings 
and find the associated settings:

files.autoSave: Can have the values off to disable auto save, 
afterDelay to save files after a configured delay and onFocusChange to save files when focus 

## Format the code properly
Alt Shift F

## Move line
Alt up / down

## Run build task from ts to js
In command line type `gulp` to transpile from TS to JS

All the typescript config is within the gulp file tsify. 

> `tsconfig.json` not used, expect for visual studio.

## Getting live-reload to work with gulp-connect
see the gulp file on how implment gulp connect.


## Gottcha

Empty array must be set to as follows
let `myBooks: string[] = [];`

else if you left it at `myBooks: string[];`

then it will be undefined by default. Very important since the typescript linter doesn't tell you that.
