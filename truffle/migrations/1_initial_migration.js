const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

// build 디렉토리 안의 HelloWorld json 파일 가져오기
const helloworld = artifacts.require('HelloWorld'); 
 
module.exports = function (deployer) {
    deployer.deploy(helloworld);
};
