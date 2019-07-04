#!/bin/bash
cat ./counter.js > todoist.js; cat ./todoist-shortcuts-28/src/todoist-shortcuts.js >> todoist.js
nativefier 'https://todoist.com/app' --name 'Todoist' --icon ./todoist-icon.png --inject ./todoist.js --counter --bounce --single-instance --overwrite
