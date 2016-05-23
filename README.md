# Nutforms Example

Example application using automatic aspect-oriented form generation.

## Installation

This project is managed my [Maven](http://maven.apache.org), which must
be installed on your system.

First, you need to install and build [Adaptive RESTful API](https://travis-ci.org/jSquirrel/adaptive-restful-api).

```
$ git clone git@github.com:jSquirrel/adaptive-restful-api.git ./adaptive-restful-api
$ cd ./adaptive-restful-api
$ mvn install
```

Second, download and install the Nutforms Server library and build it.

```
$ git clone https://github.com/jSquirrel/nutforms-server ./nutforms-server
$ cd ./nutforms-server
$ mvn install
```

Third, download and install the Nutforms Rules library and build it.

```
$ git clone https://github.com/jSquirrel/nutforms-rules-server ./nutforms-rules-server
$ cd ./nutforms-rules-server
$ mvn install
```

Finally, you can install this example application.

```
$ git clone https://github.com/jSquirrel/nutforms-example ./nutforms-example
$ cd ./nutforms-example
$ mvn install
```

## Deployment

Before you deploy the application, you must install all javascript libraries the example depends on.
The [NPM](https://www.npmjs.com) package management system must be installed on your machine in order to do this.
Then, naviage to `src/main/webapp` folder and install the dependencies.

```
$ cd ./src/main/webapp
$ npm install
```

The application can be deployed to any server supporting WAR artifacts,
for example [Apache Tomcat](http://tomcat.apache.org).

Alternatively, the example can be deployed to Heroku cloud hosting.
Navigate to the repository where you installed your Nutforms Example.
Then build the project and deploy it using
[Heroku Toolbelt Deploy Plugin](https://devcenter.heroku.com/articles/war-deployment#deployment-with-the-heroku-toolbelt).

```
$ mvn install
$ cd ./target
$ heroku deploy:war --war example-1.0-SNAPSHOT.war --app nutforms
```

## Contributing

Feel free to contribute to the project by reporting [issues](https://github.com/jSquirrel/nutforms-example/issues)
or creating [pull requests](https://github.com/jSquirrel/nutforms-example/pulls).

## License

This software is provided under [MIT License](https://opensource.org/licenses/MIT).

## Documentation

For better understanding of this example application,
please see [documentation](https://github.com/jSquirrel/nutforms-example/tree/master/docs/en/index.md).
