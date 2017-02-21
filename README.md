# AngularJS generator by [etéreo](http://etereo.io)

An AngularJS generator for generic etéreo webapp project

> Yeoman generator for AngularJS - lets you quickly set up a project with sensible defaults and best practices.

## Usage

Install `yo`, `grunt-cli`, `bower` and `generator-etereo-angular`:
```
npm install -g grunt-cli bower yo generator-etereo-angular
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo etereo-angular`:
```
yo etereo-angular
```

Run `grunt` for building and `grunt serve` for preview


## Generators

Available generators:

* [etereo-angular](#app) (aka [etereo-angular:app](#app))
* [etereo-angular:module](#module) (aka [etereo-angular:module](#module))
* [etereo-angular:directive](#directive) (aka [etereo-angular:directive](#directive))

### App
Sets up a new AngularJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap and additional AngularJS modules, such as angular-translate, angularitics, ...

Example:
```bash
yo etereo-angular
```

### Module
Sets up a new AngularJS module, generating all the boilerplate you need to define a new module.

Example:
```bash
yo etereo-angular:module
```

### Directive
Sets up a new AngularJS directive, generating all the boilerplate you need to define a new element directive.

Example:
```bash
yo etereo-angular:directive
```

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks
* angular-bootstrap
* angular-translate
* angular-sanitize
* angular-ui-router
* ngstorage
* angulartics
* angular-moment


The following additional modules are available as components on bower, and installable via `bower install`:

* angular-animate
* angular-aria
* angular-cookies
* angular-messages
* angular-resource

All of these can be updated with `bower update` as new versions of AngularJS are released.

