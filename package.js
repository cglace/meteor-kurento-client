Package.describe({
    summary: 'Media API for the Kurento Web SDK via the NPM kurento-client-js package',
    version: "0.1",
    name: "cglace:kurento-client",
    git: "https://github.com/cglace/meteor-kurento-client"
});

Npm.depends({
   'kurento-client': '6.0.2'
});

Package.onUse(function(api) {
    api.addFiles
});