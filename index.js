const core = require('@actions/core');

try {
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  console.log("Hello World");
} catch (error) {
  core.setFailed(error.message);
}
