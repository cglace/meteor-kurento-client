## Wrapper for the [kurento-client](https://www.npmjs.com/package/kurento-client) npm package

JavaScript Kurento Client for web applications and Node.js.

### Using

To use this package with meteor you should wrap all methods with Meteor.wrapAsync. For example:

 ```
 var wrappedCreate = Meteor.wrapAsync(KurentoClient.create, KurentoClient);
 var pipeline = wrappedCreate('MediaPipeline');


 var wrappedPipelineCreate = Meteor.wrapAsync(pipeline.create, pipeline);
 var webRtcEndpoint = wrappedPipelineCreate('WebRtcEndpoint');
 ```
