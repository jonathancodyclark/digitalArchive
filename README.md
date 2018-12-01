# Digital Archive Project
This is the Digital Archive Project for Sights and Sounds Museum

Team members: Jonathan Clark, Neeraj Sabapathy, Parsa Hassanipak, Kenan Herbert, Kai Roman, Burke Taylor

# Release Version 1.0 Notes

## New Features:
1. Added dialog boxes to double check if user wants to delete or update something
2. Added profile page for user
3. Added search in all pages

## Bug Fixes:
1. Deleted some buttons on homepage which did not work properly
2. Fixed a bug where edited user could not login after admin edited user
3. Fixed a bug where image would not be set to artifact image

## Known Bugs and Defects:
1. Format for Homepage and Forgot Password only works when screen is maximized, will scrunch up buttons when minimized
2. No timeout for login

# Install Guide

## Pre-Requisites:
Will need to have resources folder which contains passwords of database and s3bucket to use application, which would be located at digitalArchive/digitalArchive/src/main/resources

## Download Instructions:
1. Click Clone or Download button
2. Click Download Zip

## Install Dependent Libraries:
1. Node.js (https://nodejs.org/en/)
2. Angular (https://angular.io/guide/quickstart)
3. IntelliJ (https://www.jetbrains.com/idea/)

## Build Instructions and Installation of Actual Application:
Make sure to do both builds for the application to be fully built

### Java Build:
1. Install IntelliJ
2. Download Repository ether by git clone or downloading zip from GitHub
3. Go to digitalArchive/digitalArchive directory and open project in IntelliJ
4. View -> Tool Windows -> Maven Projects -> Maven Console
5. Run mvn install:install-file -Dfile=\\path\\to\\(digitalArchive\digitalArchive)\\ojdbc7.jar 
      -DgroupId=com.oracle -DartifactId=ojdbc7 -Dversion=12.1.0 -Dpackaging=jar
6. Build Entire Java Project
7. Run DemoApplication

Troubleshoot: Make sure to import all so that application will work, IntelliJ will have a Pop-up appear and click Enable All Imports

### Angular Build:
1. Go to digitalArchive/dArchiveUI directory using command prompt or terminal
2. Put in command npm install (This installs necessary packages for Angular Material and Swimlane ngx-datatable widget.)
3. Put in command ng serve -o (Will open application in browser at localhost:4200/)

Troubleshoot: For mac's might need to run sudo npm install instead because of security

## Run Instructions:
### Locally Run:
1. Run DemoApplication in IntelliJ (digitalArchive/digitalArchive/src/main/java/demo/DemoApplication)
2. Run ng serve -o in terminal or command line like stated above

### Website Run:
Go to link

## Troubleshooting:
1. Make sure to import all as told above when opening project in IntelliJ
2. Run sudo npm install as told above when using mac which has security problems with npm
3. Make sure to put full path to ojdbc.jar not just from digitalArchive folder, but from where you saved the folder
