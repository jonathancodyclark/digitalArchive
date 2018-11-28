This is the Digital Archive Project 
Team members: Jonathan Clark, Neeraj Sabapathy, Parsa Hassanipak, Kenan Herbert, Kai Roman, Burke Taylor

When pulling for development:

Make sure to install Node.js and Angular before attempting to run.
https://angular.io/guide/quickstart

Build Instructions:
1. Install maven
2. Go to digitalArchive/digitalArchive directory in command line or terminal
3. mvn install:install-file -Dfile=\\path\\to\\(digitalArchive\digitalArchive)\\ojdbc7.jar 
      -DgroupId=com.oracle -DartifactId=ojdbc7 -Dversion=12.1.0 -Dpackaging=jar
4. Build Entire Java Project
5. Run DemoApplication


Next:
cd digitalArchive/dArchiveUI
npm install

This installs necessary packages for Angular Material and Swimlane ngx-datatable widget.

Finally, to run the front end at localhost:/4200 run the command:
ng serve -o
