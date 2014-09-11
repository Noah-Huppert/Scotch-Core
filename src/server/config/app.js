/* Scotch namespace */
var scotch = {};
scotch.deps = {};

scotch.config = {};

/* Node require */
scotch.deps.extend = require("extend");

scotch.config.enviroment = proccess.argv[2] !== undefined ? process.argv[2] : "development";

module.exports = function (userData) {
    var userSecrets = userData.secrets !== undefined ? userData.secrets : {};
    var userSettings = userData.settings !== undefined ? userData.settings : {};
    
    var appSecrets = userSecrets[scotch.config.enviroment] !== undefined ? userSecrets[scotch.config.enviroment] : {};
    var appSettings = userSettings[scotch.config.enviroment] !== undefined ? userSettings[scotch.config.enviroment] : {};
    
    scotch.config.secrets = appSecrets;
    scotch.config.app = appSettings;

    return scotch.config;
};