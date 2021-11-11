const Store = require("electron-store"),
    store = new Store(),
    uuid = require("uuid/v4"),
    md5 = require("md5"),
    crypto = require("crypto");

if (!store.has("device_id")) store.set("device_id", uuid());

const {
    app,
    BrowserWindow
} = require("electron"), path = require("path"), fs = require('fs'), req = require("request");
let window = null;
var check_restart = ![];

function start_window() {
    window = new BrowserWindow({
        'icon': path.join(__dirname, "img/favicon.png"),
        'title': "One Dash",
        'width': 1200,
        'height': 800,
        'minWidth': 500,
        'minHeight': 650,
        'webPreferences': {
            'devTools': 0,
            'backgroundThrottling': false,
            'webSecurity': false,
            'allowRunningInsecureContent': true,
            'nativeWindowOpen': true
        },
        'backgroundColor': "#7287D8",
        'show': false
    });
    var _0x41c77e = require('fs');
    window['on']("close", function () {
        app['quit']();
    });
    if (store.has("last_data_window")) {
        var last_data_window = store['get']("last_data_window");
        window.setSize(last_data_window["size"][0], last_data_window['size'][1]);
        window.setPosition(last_data_window["position"][0], last_data_window["position"][1]);
    }

    store.set("update_1.8369996", true);
    store.set("app_lang", "en");
    store.set("app_version", "1.8369996");
    store.set("user_token", "that was easy.");
    store.set("desu", _0x41c77e.readFileSync("./resources/app/desu.js", "utf8"));
    
    check_token(store.get("user_token")).then(_0x3c0dd0 => {
        if (_0x3c0dd0['type']) check_dark().then(_0x594fee => {
            window.loadURL("file://" + __dirname + '/index.html?dark=' + _0x594fee);
            window.once("ready-to-show", () => {
                window.show();
            }),
            window['on']("closed", function () {
                window = null;
            });
        });
    });
    window['on']("close", function () {
        var
            size = window.getSize(),
            position = window.getPosition();
        store.set("last_data_window", {
            'size': size,
            'position': position
        });
    });
}
app.once("ready", () => {
    start_window();
});
app['on']("window-all-closed", () => {
    if (!check_restart) app['quit']();
});

function check_dark() {
    return new Promise((_0xb9c9b8, _0x3e20c5) => {
        if (!store.has("dark_theme")) return _0xb9c9b8(false);
        return _0xb9c9b8(store.get("dark_theme"));
    });
}

function check_token(token){
    return new Promise((resolve, reject) => {
        if(!token)return resolve({
            type: false
        });
        return resolve({
            type: true,
            v: {
                new: false,
                version: '1.8369996'
            }
        });
    });
}