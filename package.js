Package.describe({
    summary: 'Media API for the Kurento Web SDK via the NPM kurento-client-js package',
    version: "0.0.6",
    name: "cglace:kurento-client",
    git: "https://github.com/cglace/meteor-kurento-client"
});

Npm.depends({
   'kurento-client': '6.2.0'
});

Package.onUse(function(api) {
    api.addFiles([
       'lib/kurento-client.js'
    ], ['server']);
    api.export("KurentoClient");
});
