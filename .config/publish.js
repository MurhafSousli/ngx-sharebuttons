const execSync = require('child_process').execSync,
  packages = [
    'core',
    'button',
    'buttons'
  ];

packages.map(function (package) {
  const packagePath = `${__dirname}/../build/${package}`;
  execSync(`cd ${packagePath} && npm publish`);
});
