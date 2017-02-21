var Generator = require('yeoman-generator');
var glob = require('glob');
var _ = require('lodash');

module.exports = Generator.extend({

  initializing: {

    init: function() {
      this.params = this.params || {};
      this.params._ = _;
    }

  },

  prompting: {

    appName: function() {
      return this.prompt([{
        type: 'input',
        name: 'appName',
        message: 'Your project name in kebab-case',
        default: this.appname
      }, {
        type: 'input',
        name: 'description',
        message: 'Your project description',
        default: 'Project description'
      }, {
        type: 'input',
        name: 'domain',
        message: 'Your project domain',
        default: 'domain'
      }, {
        type: 'input',
        name: 'tags',
        message: 'Your project tags',
        default: this.appname + ', angular'
      }]).then(function(answers) {
        this.params.appName = answers.appName;
        this.params.description = answers.description;
        this.params.domain = answers.domain;
        this.params.tags = answers.tags;
      }.bind(this));
    }

  },

  configuring: {},

  default: {},

  writing: {

    /**
     * Write all templates files (*.tpl) using `prompting` params phase
     */
    writeTemplates: function() {
      glob(this.templatePath('**/*.tpl'), function(er, files) {

        files.forEach(function(file) {

          var src = file.split('app/templates/');
          src = src[1];

          this.fs.copyTpl(
            this.templatePath(src),
            this.destinationPath(src.replace('.tpl', '')),
            this.params
          );

        }.bind(this));

      }.bind(this));

    },

    /**
     * Copy all normal files to target folder
     */
    copyScaffolding: function() {

      var ncp = require('ncp').ncp;

      ncp.limit = 16;
      var done = this.async();
      ncp(this.sourceRoot(), this.destinationRoot(), {
        filter: function(fileName) {
          return fileName && fileName.endsWith && !fileName.endsWith('.tpl');
        }
      }, function(err) {
        if (err) {
          return console.error(err);
        }
        console.log('done!');
        done();
      });

    }

  },

  conflicts: {},

  install: {

    npm: function() {
      this.npmInstall();
    },

    bower: function() {
      this.bowerInstall();
    }

  },

  end: {}

});
