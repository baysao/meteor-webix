Package.describe({
  name: 'baysao:meteor-webix',
  version: '0.1.0-7',
  summary: 'Meteor Webix',
  git: 'https://github.com/baysao/meteor-webix.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.addFiles([
     './codebase/webix_debug.js',
'./codebase/i18n/be.js',
'./codebase/i18n/fr.js',
'./codebase/i18n/de.js',
'./codebase/i18n/it.js',
'./codebase/i18n/ru.js',
'./codebase/i18n/es.js',
'./codebase/i18n/pt.js',
'./codebase/i18n/ja.js',
'./codebase/i18n/en.js',
'./codebase/i18n/zh.js',
    //'./codebase/webix.js',
    './codebase/webix.css'
  ], 'client');
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
    './codebase/fonts/PTS-bold.ttf',
    './codebase/legacy/swfobject.js',
    './codebase/legacy/excanvas/excanvas.js'
    ], 'client');
  api.export('webix', 'client');
});

