function getServerURL(success, failure) {
    cordova.exec(
        function (url) {
            success(url);
        }, function (err) {
            failure(err);
        }, "CBLite", "getURL", []);
}

function isReplicating(dbName, success, failure) {
    cordova.exec(
        function (url) {
            success(url);
        },
        function (err) {
            failure(err);
        },
        "CBLite",
        "isReplicating",
        [dbName]);
}

function closeManager(success, failure) {
    cordova.exec(
        function (url) {
            success(url);
        },
        function (err) {
            failure(err);
        },
        "CBLite",
        "closeManager",
        []);
}

function relaunchManager(success, failure) {
    cordova.exec(
        function (url) {
            success(url);
        },
        function (err) {
            failure(err);
        },
        "CBLite",
        "relaunchManager",
        []);
}

function stopReplication(dbName, success, failure) {
    cordova.exec(
        function (url) {
            success(url);
        },
        function (err) {
            failure(err);
        },
        "CBLite",
        "stopReplication",
        [dbName]);
}

module.exports = {
    closeManager:closeManager,
    getServerURL: getServerURL,
    isReplicating:isReplicating,
    stopReplication: stopReplication,
    relaunchManager:relaunchManager
};