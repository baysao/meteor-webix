Package.describe({
  name: "baysao:meteor-webix",
  version: "0.1.0-7",
  summary: "Meteor Webix",
  git: "https://github.com/baysao/meteor-webix.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.1.0.2");
  api.addFiles([
    "./codebase/webix.js",
    // "./codebase/i18n/be.js",
    // "./codebase/i18n/fr.js",
    // "./codebase/i18n/de.js",
    // "./codebase/i18n/it.js",
    // "./codebase/i18n/ru.js",
    // "./codebase/i18n/es.js",
    // "./codebase/i18n/pt.js",
    // "./codebase/i18n/ja.js",
    // "./codebase/i18n/en.js",
    // "./codebase/i18n/zh.js",
    // "./codebase/webix.css",

    ], "client");
  api.addAssets([

    "./codebase/skins/clouds.css",
    "./codebase/skins/glamour.css",
    "./codebase/skins/light.css",
    "./codebase/skins/terrace.css",
    "./codebase/skins/material.css",
    "./codebase/skins/aircompact.css",
    "./codebase/skins/touch.css",
    "./codebase/skins/flat.css",
    "./codebase/skins/metro.css",
    "./codebase/skins/compact.css",
    "./codebase/skins/web.css",
    "./codebase/skins/air.css",


    "./codebase/fonts/fontawesome-webfont.svg",
    "./codebase/fonts/fontawesome-webfont.ttf",
    "./codebase/fonts/fontawesome-webfont.woff",
    "./codebase/fonts/fontawesome-webfont.eot",
    "./codebase/fonts/PTS-webfont.ttf",
    "./codebase/fonts/PTS-webfont.woff",
    "./codebase/fonts/PTS-webfont.eot",
    "./codebase/fonts/PTS-bold.eot",
    "./codebase/fonts/PTS-bold.woff",
    "./codebase/fonts/PTS-bold.ttf",

    "./codebase/fonts/Roboto-Medium-webfont.eot",
    "./codebase/fonts/Roboto-Regular-webfont.woff",
    "./codebase/fonts/Roboto-Medium-webfont.woff",
    "./codebase/fonts/Roboto-Medium-webfont.svg",
    "./codebase/fonts/Roboto-Regular-webfont.eot",
    "./codebase/fonts/Roboto-Medium-webfont.ttf",
    "./codebase/fonts/Roboto-Regular-webfont.ttf",
    "./codebase/fonts/Roboto-Regular-webfont.svg",


    "./codebase/legacy/swfobject.js",
    "./codebase/legacy/uploader.swf",
    "./codebase/legacy/excanvas/excanvas.js",
    "./codebase/webix.js.map"
    ], "client");
  api.export("webix", "client");
});

