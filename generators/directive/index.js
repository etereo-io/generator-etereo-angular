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

    moduleName: function() {
      this.prompt([{
        type: 'input',
        name: 'moduleName',
        message: 'Your module name in camelCase',
        default: 'moduleName'
      }, {
        type: 'input',
        name: 'directiveName',
        message: 'Your directive name in camelCase',
        default: 'directiveName'
      }, {
        type: 'input',
        name: 'description',
        message: 'Your module description',
        default: ''
      }]).then(function(answers) {
        this.params.moduleName = answers.moduleName;
        this.params.directiveName = answers.directiveName;
        this.params.description = answers.description;
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
          var src = file.split('directive/templates/');
          src = src[1];

          var dest = 'app/modules/' + this.params.moduleName + '/components/';

          this.fs.copyTpl(
            this.templatePath(src),
            this.destinationPath(dest + src.replace('.tpl', '')
              .replace('directive', this.params.directiveName)),
            this.params
          );

        }.bind(this));

      }.bind(this));

    }

  },

  conflicts: {},

  install: {},

  end: {}

});
