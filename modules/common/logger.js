var log4js = require('log4js');
var logger = log4js.getLogger('info');
var loggerDebug = log4js.getLogger("debug");
var loggerError = log4js.getLogger("error");
var DEFAULT_FORMAT = ':remote-addr - -' +
    ' ":method uri[:url] HTTP/:http-version"' +
    ' :status :content-length';

function init(config) {
    log4js.configure(config);
    return log4js.connectLogger(log4js.getLogger('info'), {
        level: log4js.levels.INFO,
        format: DEFAULT_FORMAT
    });
}

function info(...value) {
    logger.info(value.toString());
}

function debug(value) {
    loggerDebug.debug(value);
}

function warn(...value) {
    logger.warn(value.toString());
}

function error(value) {
    if (typeof(value) != 'object') {
        logger.error(value);
        loggerError.error(value);
    } else {
        logger.error(value.stack);
        loggerError.error(value.stack);
    }
}

module.exports = {
    init: init,
    info: info,
    debug: debug,
    warn: warn,
    error: error
}