var PLUGIN_NAME = "FirebaseMessaging";
// @ts-ignore
var exec = require("cordova/exec");

exports.subscribe = function (topic) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "subscribe", [topic]);
  });
};

exports.unsubscribe = function (topic) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "unsubscribe", [topic]);
  });
};

exports.onTokenRefresh = function (callback, errorCallback) {
  exec(callback, errorCallback, PLUGIN_NAME, "onTokenRefresh", []);
};

exports.onMessage = function (callback, errorCallback) {
  exec(callback, errorCallback, PLUGIN_NAME, "onMessage", []);
};

exports.onBackgroundMessage = function (callback, errorCallback) {
  exec(callback, errorCallback, PLUGIN_NAME, "onBackgroundMessage", []);
};

exports.clearNotifications = function () {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "clearNotifications", []);
  });
};

exports.deleteToken = function () {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "deleteToken", []);
  });
};

exports.getToken = function (format) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "getToken", [format || ""]);
  });
};

exports.setBadge = function (badgeValue) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "setBadge", [badgeValue]);
  });
};

exports.getBadge = function () {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, PLUGIN_NAME, "getBadge", []);
  });
};

exports.grantPermission = function (options) {
  return new Promise(function (resolve, reject) {
    if (options) {
      if (
        typeof options.forceShow !== "boolean" &&
        typeof options.forceShow !== "undefined"
      ) {
        return reject(new TypeError("forceShow option must be a boolean"));
      }
    }

    exec(resolve, reject, PLUGIN_NAME, "grantPermission", [options || {}]);
  });
};

exports.hasPermission = function (success, error) {
  exec(success, error, PLUGIN_NAME, "hasPermission", []);
};
