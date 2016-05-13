
# Installation


This project is managed my [Maven](http://maven.apache.org), which must
be installed on your system.

First, you need to install and build [Adaptive RESTful API](https://travis-ci.org/jSquirrel/adaptive-restful-api).

```
$ git clone git@github.com:jSquirrel/adaptive-restful-api.git ./adaptive-restful-api
$ cd ./adaptive-restful-api
$ mvn install
```

Then, download and install the Nutforms Server library and build it.

```
$ git clone https://github.com/jSquirrel/nutforms-server ./nutforms-server
$ cd ./nutforms-server
$ mvn install
```

Finally, you can install this example application.

```
$ git clone https://github.com/jSquirrel/nutforms-example ./nutforms-example
$ cd ./nutforms-example
$ mvn install
```

# Contributing

Feel free to contribute to the project by reporting [issues](https://github.com/jSquirrel/nutforms-example/issues)
or creating [pull requests](https://github.com/jSquirrel/nutforms-example/pulls).

# License

This software is provided under [MIT License](https://opensource.org/licenses/MIT).

# Documentation

For better understanding of this example application,
please see [documentation](https://github.com/jSquirrel/nutforms-example/tree/master/docs/en/index.md).