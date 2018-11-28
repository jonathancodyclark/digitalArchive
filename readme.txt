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


For the Frontend to start:
cd ..
cd dArchiveUI
npm install

This installs necessary packages for Angular Material and Swimlane ngx-datatable widget.

Finally, to run the front end at localhost:4200/ run the command:
ng serve -o

Resources:
Will only work if you create resources folder at digitalArchive/digitalArchive/src/main/resources which contains application.properties and application.yml also have to make email used allow less secure apps.

application.properties format:
#Database connection
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=


spring.datasource.hikari.connection.timeout=12000
spring.datasource.hikari.maximum-pool-size=10

logging.level.org.springframework.security= DEBUG
logging.level.org.hibernate= DEGUG

#springboot-starter-mail properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=
spring.mail.password=


spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.transport.protocol=smtps
spring.mail.properties.mail.smtps.quitwait=false
spring.mail.properties.mail.smtp.socketFactory.port = 25
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.ssl.enable=true

#application-properties
send.from.email=

application.yml format:
amazonProperties:
    endpointUrl: 
    accessKey: 
    secretKey: 
    bucketName: 
    region: 

