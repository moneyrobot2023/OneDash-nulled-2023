var a = ['finish_login', 'parse', 'type', '2fa_tg', 'warning', 'Nuestro robot de Telegram le ha enviado un mensaje.<br>Para ingresar, siga las instrucciones.<br><b>No cierre la aplicación.</b>', '.modal', 'modal', '#modal-2fa-gg-login', 'show', 'Почта или пароль указаны неверно.', 'error', 'Incorrect email or password.', 'msg', 'Вы слишком часто пытаетесь авторизоваться.', 'You try to log in too often.', 'Intenta iniciar sesión con demasiada frecuencia.', 'El correo electrónico o la contraseña son incorrectos.', 'token', 'user_email', '#email-login', 'val', 'success', 'Вы успешно авторизовались.<br>Пожалуйста, перезайдите в приложение.', 'Has iniciado sesión correctamente.<br>Vuelve a la aplicación.', 'You have successfully logged in.<br>Please go back to the application.', '#token-2fa-gg-login', 'mask', 'body', '.open_browser', 'preventDefault', 'click', 'keyup', 'keyCode', 'which', '#password-login', 'shown.bs.modal', 'focus', 'addClass', 'red', 'removeClass', 'length', 'Минимальное количество символов для пароля - 6.', 'El número mínimo de caracteres para una contraseña es 6.', 'The minimum number of characters for a password is 6.', 'Максимальное количество символов для пароля - 50.', 'El número máximo de caracteres para una contraseña es 50', 'The maximum number of characters for a password is 50.', 'Email указан неверно.', 'El correo electrónico no es válido', 'Email is invalid.', 'false_app', 'login', ':email', ':cap', ':hash', 'charAt', 'floor', 'random', 'test', 'button', '#login-btn-2fa-gg', 'replace', 'css', '1px solid #ff0000bf', 'border', ':pass', ':code', 'reload-window', 'electron-store', 'electron', 'shell', 'remote', 'app', 'has', 'language', 'set', 'getLocale', '[translate]', 'each', 'text', 'attr', 'translate', 'input[translate]', 'tooltip', 'hasAttr', 'placeholder', '[translate][tooltip]', '[translate2]', 'translate2', '[translate2][tooltip]', 'socket'];
(function (c, d) {
    var e = function (f) {
        while (--f) {
            c['push'](c['shift']());
        }
    };
    e(++d);
}(a, 0xa1));
var b = function (c, d) {
    c = c - 0x0;
    var e = a[c];
    return e;
};
const Store = require(b('0x0'));
const store = new Store();
const shell = require(b('0x1'))[b('0x2')];
var remoter = require(b('0x1'))[b('0x3')];
var aprp = remoter[b('0x4')];
const room_hash = generate_room(0x12c);
var socket;
$['fn']['hasAttr'] = function (c) {
    return this['attr'](c) !== undefined;
};
if (!store[b('0x5')](b('0x6'))) store[b('0x7')](b('0x6'), aprp[b('0x8')]());
const lang = store['get'](b('0x6'));
if (lang && lang == 'en') {
    $(b('0x9'))[b('0xa')](function (d, e) {
        var f = $(e);
        if (!f['hasAttr']('tooltip')) {
            f[b('0xb')](f[b('0xc')](b('0xd')));
        }
    });
    $(b('0xe'))[b('0xa')](function (g, h) {
        var i = $(h);
        if (!i['hasAttr'](b('0xf')) && i[b('0x10')](b('0x11'))) {
            i[b('0xc')](b('0x11'), i['attr'](b('0xd')));
        }
    });
    $(b('0x12'))[b('0xa')](function (j, k) {
        var l = $(k);
        l[b('0xc')](b('0xf'), l[b('0xc')]('translate'));
    });
} else if (lang && lang == 'es') {
    $(b('0x13'))[b('0xa')](function (m, n) {
        var o = $(n);
        if (!o[b('0x10')](b('0xf'))) {
            o['text'](o[b('0xc')](b('0x14')));
        }
    });
    $('input[translate2]')[b('0xa')](function (p, q) {
        var r = $(q);
        if (!r[b('0x10')]('tooltip') && r[b('0x10')](b('0x11'))) {
            r[b('0xc')](b('0x11'), r[b('0xc')](b('0x14')));
        }
    });
    $(b('0x15'))[b('0xa')](function (s, t) {
        var u = $(t);
        u[b('0xc')](b('0xf'), u['attr'](b('0x14')));
    });
}
const {
    ipcRenderer
} = require(b('0x1'));
$(document)['ready'](() => {
    socket = io(consts[b('0x16')]);
    socket['on'](b('0x17'), function (v) {
        v = JSON[b('0x18')](v);
        if (v[b('0x19')] == b('0x1a')) {
            if (lang == 'ru') {
                noty(b('0x1b'), 'Наш Telegram бот отправил вам сообщение.<br>Чтобы войти, следуйте инструкции.<br><b>Не закрывайте приложение.</b>', 0x2328);
            } else if (lang == 'es') {
                noty('warning', b('0x1c'), 0x2328);
            } else {
                noty(b('0x1b'), 'Our Telegram bot has sent you a message.<br>To enter, follow the instructions.<br><b>Do not close the application.</b>', 0x2328);
            }
            return ![];
        } else if (v[b('0x19')] == '2fa_gg') {
            $(b('0x1d'))[b('0x1e')]('hide');
            $(b('0x1f'))['modal'](b('0x20'));
            return ![];
        }
        if (!v[b('0x19')]) {
            if (v['msg'] == b('0x21') && lang == 'en') return noty(b('0x22'), b('0x23'));
            if (v[b('0x24')] == b('0x25') && lang == 'en') return noty(b('0x22'), b('0x26'));
            if (v[b('0x24')] == b('0x25') && lang == 'es') return noty(b('0x22'), b('0x27'));
            if (v[b('0x24')] == b('0x21') && lang == 'es') return noty(b('0x22'), b('0x28'));
            return noty(b('0x22'), v[b('0x24')]);
        }
        store[b('0x7')]('user_token', v[b('0x29')]);
        store[b('0x7')](b('0x2a'), $(b('0x2b'))[b('0x2c')]());
        if (lang == 'ru') {
            noty(b('0x2d'), b('0x2e'));
        } else if (lang == 'es') {
            noty(b('0x2d'), b('0x2f'));
        } else {
            noty(b('0x2d'), b('0x30'));
        }
        setTimeout(function () {
            restart_window();
        }, 0x2 * 0x3e8);
    });
    $(b('0x31'))[b('0x32')]('999 999');
});
$(b('0x33'))['on']('click', b('0x34'), function (w) {
    w[b('0x35')]();
    var x = $(this)[b('0xc')]('to');
    shell['openExternal'](x);
});
$(b('0x33'))['on'](b('0x36'), '.form-btn[type=\"login\"]', function () {
    login();
});
$(b('0x2b'))['on'](b('0x37'), function (y) {
    var z = event[b('0x38')] ? event[b('0x38')] : event[b('0x39')];
    if (z == 0xd) {
        login();
    }
});
$(b('0x3a'))['on'](b('0x37'), function (A) {
    var B = event['keyCode'] ? event[b('0x38')] : event[b('0x39')];
    if (B == 0xd) {
        login();
    }
});
$('#modal-2fa-gg-login')['on'](b('0x3b'), function () {
    $(b('0x31'))[b('0x3c')]();
});

function login() {
    var C = $(b('0x2b'))[b('0x2c')]();
    var D = $(b('0x3a'))[b('0x2c')]();
    if (!C || C == '') {
        $(b('0x2b'))[b('0x3d')](b('0x3e'));
        setTimeout(() => {
            $('#email-login')[b('0x3f')](b('0x3e'));
        }, 0x3 * 0x3e8);
        return ![];
    }
    if (!D || D == '') {
        $(b('0x3a'))[b('0x3d')](b('0x3e'));
        setTimeout(() => {
            $('#password-login')[b('0x3f')](b('0x3e'));
        }, 0x3 * 0x3e8);
        return ![];
    }
    if (D[b('0x40')] < 0x6) {
        $('#password-login')[b('0x3d')](b('0x3e'));
        setTimeout(() => {
            $('#password-login')[b('0x3f')]('red');
        }, 0x3 * 0x3e8);
        if (lang == 'ru') {
            noty(b('0x22'), b('0x41'));
        } else if (lang == 'es') {
            noty(b('0x22'), b('0x42'));
        } else {
            noty(b('0x22'), b('0x43'));
        }
        return ![];
    }
    if (D[b('0x40')] > 0x32) {
        $(b('0x3a'))[b('0x3d')](b('0x3e'));
        setTimeout(() => {
            $('#password-login')['removeClass'](b('0x3e'));
        }, 0x3 * 0x3e8);
        if (lang == 'ru') {
            noty(b('0x22'), b('0x44'));
        } else if (lang == 'es') {
            noty(b('0x22'), b('0x45'));
        } else {
            noty(b('0x22'), b('0x46'));
        }
        return ![];
    }
    if (!validate_email(C)) {
        $(b('0x2b'))[b('0x3d')](b('0x3e'));
        setTimeout(() => {
            $(b('0x2b'))[b('0x3f')](b('0x3e'));
        }, 0x3 * 0x3e8);
        if (lang == 'ru') {
            noty('error', b('0x47'));
        }
        if (lang == 'es') {
            noty(b('0x22'), b('0x48'));
        } else {
            noty('error', b('0x49'));
        }
        return ![];
    }
    var E = b('0x4a');
    D = md5(D);
    socket['emit'](b('0x4b'), C + b('0x4c') + D + ':pass' + E + b('0x4d') + room_hash + b('0x4e'));
}

function generate_room(F) {
    var G = '';
    var H = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=<>|\":{}}][/';
    var I = H[b('0x40')];
    for (var J = 0x0; J < 0xc8; J++) {
        G += H[b('0x4f')](Math[b('0x50')](Math[b('0x51')]() * I));
    }
    return sha1(sha1(G + F));
}

function validate_email(K) {
    var L = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return L[b('0x52')](K);
}

function noty(M, N, O = 0x1964) {
    new Noty({
        'text': N,
        'type': M,
        'layout': 'bottomRight',
        'theme': 'sunset',
        'closeWith': [b('0x36'), b('0x53')],
        'timeout': O
    })[b('0x20')]();
}
$(b('0x54'))['on'](b('0x36'), function () {
    login_2fa();
});
$(b('0x31'))['on'](b('0x37'), function (P) {
    var Q = P[b('0x38')] ? P[b('0x38')] : P[b('0x39')];
    if (Q == 0xd) {
        login_2fa();
    }
});

function login_2fa() {
    var R = $(b('0x2b'))['val']();
    var S = $(b('0x3a'))[b('0x2c')]();
    var T = b('0x4a');
    if (!R || R == '') {
        $(b('0x2b'))[b('0x3d')]('red');
        setTimeout(() => {
            $(b('0x2b'))[b('0x3f')](b('0x3e'));
        }, 0x3 * 0x3e8);
        return ![];
    }
    if (!S || S == '') {
        $(b('0x3a'))[b('0x3d')]('red');
        setTimeout(() => {
            $(b('0x3a'))['removeClass']('red');
        }, 0x3 * 0x3e8);
        return ![];
    }
    if (S[b('0x40')] < 0x6) {
        $(b('0x3a'))[b('0x3d')]('red');
        setTimeout(() => {
            $(b('0x3a'))[b('0x3f')](b('0x3e'));
        }, 0x3 * 0x3e8);
        if (lang == 'ru') {
            noty(b('0x22'), b('0x41'));
        } else if (lang == 'es') {
            noty(b('0x22'), b('0x42'));
        } else {
            noty(b('0x22'), b('0x43'));
        }
        return ![];
    }
    if (S['length'] > 0x32) {
        $(b('0x3a'))[b('0x3d')](b('0x3e'));
        setTimeout(() => {
            $(b('0x3a'))['removeClass'](b('0x3e'));
        }, 0x3 * 0x3e8);
        if (lang == 'ru') {
            noty(b('0x22'), b('0x44'));
        } else if (lang == 'es') {
            noty(b('0x22'), 'El número máximo de caracteres para una contraseña es 50');
        } else {
            noty(b('0x22'), b('0x46'));
        }
        return ![];
    }
    if (!validate_email(R)) {
        $(b('0x2b'))['addClass'](b('0x3e'));
        setTimeout(() => {
            $('#email-login')[b('0x3f')](b('0x3e'));
        }, 0x3 * 0x3e8);
        if (lang == 'ru') {
            noty(b('0x22'), b('0x47'));
        } else if (lang == 'es') {
            noty(b('0x22'), b('0x48'));
        } else {
            noty(b('0x22'), b('0x49'));
        }
        return ![];
    }
    S = md5(S);
    var U = $(b('0x31'))[b('0x2c')]();
    U = U[b('0x55')](' ', '');
    if (!U || U == '' || U[b('0x40')] != 0x6) {
        $(b('0x31'))[b('0x56')]('border', b('0x57'));
        setTimeout(function () {
            $(b('0x31'))[b('0x56')](b('0x58'), '');
        }, 0x3 * 0x3e8);
        return ![];
    }
    socket['emit'](b('0x4b'), R + b('0x4c') + S + b('0x59') + T + b('0x4d') + room_hash + b('0x4e') + U + b('0x5a'));
}

function restart_window() {
    ipcRenderer['send'](b('0x5b'), !![]);
}