Package.describe({
  name: 'baysao:meteor-webix',
  version: '0.1.0-6',
  // Brief, one-line summary of the package.
  summary: 'Meteor Webix',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/baysao/meteor-webix.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.addFiles([
    // './codebase/webix_debug.js',
    './codebase/webix.js',
    './codebase/webix.css'
  ], 'client');
  //api.addFiles(['./lib/core.js', './lib/menu.js'], 'client');
  api.addAssets([
    './codebase/fonts/fontawesome-webfont.svg',
    './codebase/fonts/fontawesome-webfont.ttf',
    './codebase/fonts/fontawesome-webfont.woff',
    './codebase/fonts/fontawesome-webfont.eot',
    './codebase/fonts/PTS-webfont.ttf',
    './codebase/fonts/PTS-webfont.woff',
    './codebase/fonts/PTS-webfont.eot',
    './codebase/fonts/PTS-bold.eot',
    './codebase/fonts/PTS-bold.woff',
    './codebase/fonts/PTS-bold.ttf'
    ], 'client');
  api.export('webix', 'client');
  //api.export('WebixRouter', 'client');
  //api.export('WebixMenuHelper', 'client');
  //api.export('WebixViews', 'client');
});

