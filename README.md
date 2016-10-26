# 05-SanDiegoTopSpots

In this project, I turned a provided JSON file into a table in HTML with links to Google Maps using jQuery.

This is the mockup:

<img src="http://i.imgur.com/4UU4Ye4.png" />

## Yak Shaving
1. Downloaded and installed the LTS version of NodeJS (4.4.3) from https://nodejs.org/
2. Opened up command line and ran the following command `npm install -g node-static` to install a quick-and-easy HTTP server. This is important because the `$.getJSON` will use an HTTP request to grab a JSON file.

## Tasks
1. Created a folder named `05-SanDiegoTopSpots`on local hard drive
2. Setup my Git workflow.
  - Initialized an empty git repository in `05-SanDiegoTopspots` by running `git init` in the command prompt.
  - Created a repository on GitHub called `05-SanDiegoTopspots` and followed the instructions to add a remote origin.
3. Opened this folder in Sublime.
4. Created an `index.html` file and a corresponding `index.js` file.
5. Downloaded [topspots.json]("https://github.com/OriginCodeAcademy/2016-SC-SummerCohort/tree/master/Projects/Week%201/05-SanDiegoTopSpots/topspots.json") to my `05-SanDiegoTopspots` folder.
6. Created an HTML `table` structure with the headers you in the image above.
7. Wrote the following JavaScript in my `index.js` file
   - Used the `$.getJSON` method to download the contents of [topspots.json]("https://github.com/OriginCodeAcademy/2016-CW-SpringCohort/tree/master/Projects/Week%201/05-SanDiegoTopSpots/topspots.json")
   - Iterated through the top spots and created rows for each spot.
   - Created a link to the location using the longitude and latitude provided. (Example https://www.google.com/maps?q=33.09745,-116.99572)
8. To start/test application - navigated to `05-SanDiegoTopSpots` in command line and ran `static .` to start a web server that I can access by going to `http://localhost:8080`.
