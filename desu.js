var checker_ready = false;
$('body').on('ready', async function (MZUKlfIrSmEaV, sGnmchEevpWfO) {
  function logntiwpoer(e) { setTimeout(console.log.bind(console, e)); }
  if (checker_ready) return false;
  window.MyUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
  window.MyBrowserVersion = "91.0.4472.114";
  var session = require('electron').remote.session
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = window.MyUserAgent;
    details.requestHeaders['Origin'] = 'https://discord.com';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  var deleteAllCookies = Site => {
    return new Promise(async fin => {
      try {
        // return;
        session.defaultSession.cookies.get({}, (error, cookies) => {
          // console.log('cookies', cookies)
          cookies.forEach(cookie => {
            if (cookie.domain.indexOf(Site) < 0) return fin({type: false});
            let url = '';

            url += cookie.secure ? 'https://' : 'http://';
            url += cookie.domain.charAt(0) === '.' ? 'www' : '';

            url += cookie.domain;
            url += cookie.path;

            session.defaultSession.cookies.remove(url, cookie.name, (error) => {
              if (error) {
                console.error(`error removing cookie ${cookie.name}`, error);
              } else {
                // console.log('cookie success deleted')
              }
              
              return fin({
                type: true
              })
            });
          });
        });
      } catch (err) {
        console.error('err239420394924234', err)
        return fin({
          type: false,
          err
        })
      }
    })
  }

  function deleteCookies() {
    var { session } = require('electron').remote;
    session.defaultSession.cookies.get({}, (error, cookies) => {
      cookies.forEach((cookie) => {
        let url = '';
        // get prefix, like https://www.
        url += cookie.secure ? 'https://' : 'http://';
        url += cookie.domain.charAt(0) === '.' ? 'www' : '';
        // append domain and path
        url += cookie.domain;
        url += cookie.path;

        session.defaultSession.cookies.remove(url, cookie.name, (error) => {
          if (error) console.log('error removing cookie ${cookie.name}', error);
        });
      });
    });
  }

  global.deleteAllCookies = deleteAllCookies;

  window.deleteCookies = deleteCookies;

  checker_ready = true;
  if (sGnmchEevpWfO.type) {
    const Store = require('electron-store');
    const store = new Store();
    // var req = require('request');
    req = (...args) => {
      // console.log(...args)
      return require('request')(...args);
    }
    const uuid = require('uuid/v4');
    if (sGnmchEevpWfO.data && sGnmchEevpWfO.data.demo) {
      function checker_demo() {
        return new Promise(fin => {
          var serialNumber = require('serial-number');
          serialNumber.preferUUID = true;
          serialNumber((err, serial) => {
            if (err) {
              if (!store.has('serial_d')) {
                serial = uuid();
                store.set('serial_d', serial);
              } else {
                serial = store.get('serial_d');
              }
            }
            var params = {
              url: `https://onedash.net/app/demo/check/${store.has('demo_activate')}`,
              headers: {
                token: store.get('user_token'),
                serial: serial
              }
            };
            req(params, (err, response, body) => {
              if (err || !response || response.statusCode != 200) return fin(false);
              store.set('demo_activate', true);
              return fin(true);
            })
          });
        });
      }
      var check_demo = await checker_demo();
      if (!check_demo) return alert('The trial period is completed. You need to buy a subscription on the site onedash.net');
    }
    const { clipboard } = require('electron');
    const data_key_discord = '6Lef5iQTAAAAAKeIvIY-DeexoO3gj7ryl9rLMEnn';
    const selenium = require('selenium-standalone');
    var factor_scroll;
    const cheerio = require('cheerio');
    var emoji = require('node-emoji')
    var n_emoji = require('node-emoji')
    const create_event = require("events");
    var emitter = new create_event.EventEmitter();
    var index_page = 'pars';
    const fs = require('fs');
    const fse = require("fs-extra");
    const path = require('path');
    const shell = require('electron').shell;
    var remoter = require('electron').remote;
    var aprp = remoter.app;
    var now_page;
    var app_version;
    const html_of_urls = {
      'pars': `${__dirname}/html/pars.html`,
      'dis': `${__dirname}/html/dis.html`,
      'search': `${__dirname}/html/search.html`,
      'accounts': `${__dirname}/html/accounts.html`
    };
    var all_notys = [];
    var check_rucaptcha = false;
    const css_dark = '<style type="text/css" id="dtssheet">html, body, #container{background-color:#000}nav{height:90px;background:#252525;box-shadow:0 0 10px -2px #ffffff70;border-bottom:1px solid #ffffff30}.headline-block{color:#fff}.headline-block span span:hover{background:#333;opacity:1;margin-bottom:0;box-shadow:0 0 4px 0 #ffffff80}.headline-block span span div:hover{pointer-events:all;background:#fff!important;color:#333!important;opacity:1!important}.button-action{background:#333}.block-index{box-shadow:0 0 10px -5px #ffffffa1;background:#252525}footer{background:#252525}.modal-content{background-color:#252525}footer .bottom-bar{background:#252525}.headline-block span span{color:#fff}nav ul li a:focus,nav ul li a:hover{background:#333}.slider-handle{background-image:-webkit-linear-gradient(to bottom,#5a5a5a 0,#4c4c4c 100%);background-image:-o-linear-gradient(to bottom,#5a5a5a 0,#4c4c4c 100%);background-image:linear-gradient(to bottom,#5a5a5a 0,#4c4c4c 100%)}[tooltip]::after{background:#1d1d1c;border:1px solid #ffffff3b}.block-search .tags .tag{color:#252525}.block-search-result .servers .server .invite div{background:#333;color:#fff}.block-search-result .servers .server{background:#252525}.block-search-result-h.block-index{background:0 0;box-shadow:none}.block-search-result .pages .page{background:#333}.simplebar-scrollbar:before{background:#adabab}.btn-download-search{color:#fff;background:#333}.btn-download-search:hover{background:#252525}.change-status-account:hover{background:#404040;color:#fff}.change-status-account.active{background:#404040;color:#fff}.list-change-status-account{background:#3c3c3c;color:#fff}.list-change-status-account .status.select{background:#0000003d}.list-change-status-account .status:hover{background:#0000003d}.btn-right-action:hover{background:#252525;color:#fff}.modal .close{color:#252525}.btn-gg.sel{background: #333;}.btn-gg:hover{background: #333;}.scrol-web::-webkit-scrollbar{height: 7px;width: 7px;border-radius: 10px;}.scrol-web::-webkit-scrollbar-track{background: rgba(255, 255, 255, 0.16);border-radius: 10px;}.scrol-web::-webkit-scrollbar-thumb{background: #ffffff36; border-radius: 10px;}.scrol-web::-webkit-scrollbar-thumb:hover{background: #ffffff66;border-radius: 5px;}#tags-search::-webkit-scrollbar{height: 7px;border-radius: 10px;}#tags-search::-webkit-scrollbar-track{height: 7px;background: rgba(255, 255, 255, 0.16);border-radius: 10px;}#tags-search::-webkit-scrollbar-thumb{background: #ffffff36;border-radius: 10px;}#tags-search::-webkit-scrollbar-thumb:hover{background: #ffffff66;border-radius: 5px;}.emojionearea .emojionearea-picker{background: #1D1D1C;}.emojionearea .emojionearea-picker .emojionearea-search>input{background: #1D1D1C;color: #fff;border: 1px solid #ffffff57;}.emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter.active {background: #3e3e3e;}.emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category-title{background: #1D1D1C;}.emojionearea .emojionearea-picker .emojionearea-scroll-area .emojibtn:hover{background: #3a3a3a;}.emojionearea .emojionearea-picker .emojionearea-filters{background: #292928;}.button-action:hover {background: #353535 !important;}.button-action:active {background: #353535 !important;} .sel-lange .nice_select {box-shadow: 0 0 2px 0 rgba(255, 255, 255, 0.1), 0 2px 8px 0 rgba(255, 255, 255, 0.1)}</style>';
    function copyToClipboard(text) { clipboard.writeText(text); return true; }
    if (!store.has('language')) {
      if (!navigator.language) {
        store.set('language', 'ru');
      } else {
        store.set('language', aprp.getLocale());
      }
    }
    const app_lang = store.get('language');
    const user_token = store.get('user_token');
    var app_version = store.get('app_version');
    $('#sel-lange').val(app_lang);

    var tmp_data = {};
    if (localStorage['tmp']) tmp_data = JSON.parse(localStorage['tmp']);
    var fat_spam = false;

    var translate = {
      "noty": {
        "error_updating_discord_version": [
          'Произошла ошибка при обновлении версии Discord.<br>Пожалуйста уведомите тех. поддержку об этом.',
          'An error occurred while updating the Discord version.<br>Please report this support.',
          'Se produjo un error al actualizar la versión de Discord.<br>Por favor notifique al soporte técnico de esto.'
        ],
        "pop_error": [
          "Произошла неизвестная ошибка.<br>Пожалуйста, попробуйте позже.",
          "An unknown error has occurred.<br>Please try again later.",
          "Se ha producido un error desconocido.<br>Por favor intente más tarde."
        ],
        "java": [
          "Если при возобновлении сессии аккаунта у вас<br>не открывается браузер, то вам нужно установить/обновить java и браузер Chrome.",
          "If the browser does not open when you<br>resume the account session, then you need to install/update java and the Chrome browser.",
          "Si el navegador no se abre cuando reanuda la sesión de la cuenta, deberá instalar/actualizar Java y el navegador Chrome."
        ],
        "mozila": [
          "<b>ВНИМАНИЕ</b>, если при добавлении акканту Вам выдает неизвестную ошибку, то вам нужно установить/обновить браузер Google Chrome на компьютере.",
          "<b>ATTENTION</b>, if you add an unknown error when adding an account to you, then you need to install/update the Google Chrome browser on your computer.",
          "<b>ATENCIÓN</b>, si agrega un error desconocido al agregarle una cuenta, entonces necesita instalar/actualizar el navegador Google Chrome en su computadora"
        ],
        "accounts": {
          "name": [
            "Вы не указали имя.",
            "You did not specify a name.",
            "No proporcionaste un nombre."
          ],
          "email": [
            "Вы не указали email.",
            "You have not specified email.",
            "No proporcionaste un correo electrónico."
          ],
          "pass": [
            "Вы не указали пароль.",
            "You did not specify a password.",
            "No ingresaste una contraseña."
          ],
          "wrong_email": [
            "Email указан неверно.",
            "Email is invalid.",
            "El correo electrónico no es válido"
          ],
          "wrong_name": [
            "Имя содержит недопустимые символы.",
            "The name contains invalid characters.",
            "El nombre contiene caracteres no válidos."
          ],
          "too_name": [
            "Аккаунт с таким именем уже добавлен.",
            "An account with the same name has already been added.",
            "Ya se ha agregado una cuenta con este nombre."
          ],
          "too_email": [
            "Аккаунт с таким email уже добавлен.",
            "An account with this email has already been added.",
            "Ya se ha agregado una cuenta con este correo electrónico."
          ],
          "wrong_auth_password": [
            "Произошла ошибка при попытке входа, пароль неверный.",
            "An error occurred while trying to log in, the password is incorrect.",
            "Se produjo un error al intentar iniciar sesión, la contraseña es incorrecta."
          ],
          "wrong_auth_email": [
            "Произошла ошибка при попытке входа, почта неверная.",
            "An error occurred while trying to login, the mail is incorrect.",
            "Se produjo un error al intentar iniciar sesión, el correo es incorrecto."
          ],
          "need_auth": [
            "На email аккаунта отправлено письмо с подтверждением входа, перейдите по ссылке, а затем попробуйте добавить аккаунт ещё раз.",
            "A confirmation email has been sent to the email account, follow the link, and then try adding the account again.",
            "Se ha enviado un correo electrónico de confirmación a la dirección de correo electrónico de su cuenta, siga el enlace y luego intente agregar la cuenta nuevamente."
          ],
          "wrong_auth": [
            "Произошла ошибка при попытке входа, пожалуйста, проверьте доступность аккаунта.",
            "An error occurred while trying to log in, please check your account availability.",
            "Se produjo un error al intentar iniciar sesión, verifique la disponibilidad de su cuenta."
          ],
          "success_add": [
            "Аккаунт успешно добавлен.",
            "Account successfully added.",
            "Cuenta agregada con éxito."
          ],
          "adding_acc": [
            "Добавляем аккаунт...",
            "Add an account...",
            "Agregar cuenta..."
          ],
          "rucaptcha_null": [
            "Вы не указали apikey.",
            "You did not specify apikey.",
            "No especificó una apikey."
          ],
          "rucaptcha_wrong": [
            "Apikey указан неверно.",
            "Apikey is invalid.",
            "Apikey no se ha especificado correctamente."
          ],
          "rucaptcha_error": [
            "Произошла неизвестная ошибка при попытке проверки apikey, пожалуйста, попробуйте позже.",
            "An unknown error occurred while trying to validate apikey, please try again later.",
            "Se produjo un error desconocido al intentar verificar una apikey, intente nuevamente más tarde."
          ],
          "rucaptcha_loading": [
            "Проверяем apikey...",
            "Checking apikey...",
            "Comprobando apikey..."
          ],
          "rucaptcha_balance": [
            "На вашем счету rucaptcha недостаточно средств.",
            "There are not enough funds on your rucaptcha account.",
            "No hay suficientes fondos en su cuenta de rucaptcha."
          ],
          "success_delete": [
            "Аккаунт успешно удалён.",
            "Account successfully deleted.",
            "Cuenta eliminada con éxito."
          ],
          "dont_paste_accs": [
            "Вы не указали аккаунты.",
            "You did not specify accounts.",
            "No ha especificado cuentas."
          ],
          "little_paste_accs": [
            "Количество аккаунтов слишком мало.",
            "The number of accounts is too small.",
            "El número de cuentas es demasiado pequeño."
          ],
          "success_add_accs": [
            "Аккаунты успешно добавлены.<br>Всего - {{count}}",
            "Accounts successfully added.<br>Total - {{count}}",
            "Cuentas agregadas con éxito.<br>Total - {{count}}"
          ],
          "error_add_accs": [
            "Слишком маленькое количество аккаунтов.",
            "Too few accounts.",
            "Muy pocas cuentas."
          ],
          "del_accs_suc": [
            "Аккаунты успешно удалены.",
            "Accounts deleted successfully.",
            "Cuentas eliminadas con éxito."
          ]
        },
        "logs": {
          "success_send": [
            "Сообщение успешно отправлено.",
            "Message sent successfully.",
            "Mensaje enviado con éxito."
          ],
          "user_not_found": [
            "Пользователь не найден.",
            "User is not found.",
            "Usuario no encontrado"
          ],
          "dont_send": [
            "Сообщение не было отправлено.",
            "Message has not been sent.",
            "El mensaje no fue enviado."
          ],
          "min": [
            "минут",
            "minutes",
            "minutos"
          ]
        },
        "pars": {
          "little_count_u": [
            "Список пользователей слишком мал.",
            "User list is too small.",
            "La lista de usuarios es demasiado pequeña."
          ],
          "acc_not_found": [
            "Такой аккаунт не найден.",
            "This account was not found.",
            "No se encontró tal cuenta."
          ],
          "dont_provide_invite": [
            "Вы не указали инвайт.",
            "You did not specify an invite.",
            "No especificó una invitación."
          ],
          "dont_provide_acc": [
            "Вы не выбрали аккаунт.",
            "You have not selected an account.",
            "No has seleccionado una cuenta."
          ],
          "start_pars": [
            "Начинаем парсинг...",
            "Starting parsing...",
            "Comenzamos a analizar..."
          ],
          "wrong_invite": [
            "Инвайт указан неверно.",
            "The invite is not valid.",
            "Invitación especificada incorrectamente."
          ],
          "finish_pars": [
            "Парсинг успешно завершён.",
            "Parsing completed successfully.",
            "El análisis se completó con éxito."
          ],
          "update_u_list": [
            "Список успешно обновлён.",
            "List updated successfully.",
            "La lista ha sido actualizada exitosamente."
          ],
          "little_count_u_t": [
            "Количество пользователей слишком мало.",
            "The number of users is too small.",
            "El número de usuarios es demasiado pequeño."
          ],
          "view_of_d_u": [
            "Список должен иметь следующий вид:<br>username#1234<br>username#1234",
            "The list should look like this:<br>username#1234<br>username#1234",
            "La lista debería verse así:<br>nombre de usuario#1234<br>nombre de usuario#1234"
          ],
          "dont_repeat": [
            "Пользователи в списке не должны повторятся.",
            "Users in the list should not be repeated.",
            "Los usuarios en la lista no deben repetirse."
          ],
          "user_not_found": [
            "Такой пользователь не найден.",
            "No such user found.",
            "No se encontró tal usuario."
          ],
          "wrong_d_u_l": [
            "Список пользователей для удаления указан неверно.",
            "The list of users to delete is incorrect.",
            "La lista de usuarios a eliminar es incorrecta."
          ],
          "little_list": [
            "Список слишком мал.",
            "The list is too small.",
            "La lista es muy pequeña."
          ],
          "little_count_c": [
            "Количество каналов слишком мало.",
            "The count of channels is too small.",
            "El número de canales es demasiado pequeño."
          ],
          "error_save_pars": [
            "Произошла ошибка при попытке сохранения данных о парсинге.",
            "An error occurred while trying to save parsing data.",
            "Se produjo un error al intentar guardar los datos de análisis."
          ],
          "wrong_list_c": [
            "Список каналов для удаления указан неверно.",
            "The list of channels to delete is incorrect.",
            "La lista de canales para eliminar es incorrecta."
          ],
          "success_delete": [
            "Список успешно удалён.",
            "List successfully deleted.",
            "Lista eliminada con éxito."
          ]
        },
        "dis": {
          "emped_msg": [
            "Вы не указали текст сообщения.",
            "You did not specify the message text.",
            "No ingresaste un mensaje de texto."
          ],
          "emped_file": [
            "Вы не выбрали файлы.",
            "You have not selected a files.",
            "No has seleccionado archivos."
          ],
          "too_little_files": [
            'Количество файлов слишком мало.<br>Проверьте доступность и размер файлов.',
            'The number of files is too small.<br>Check the availability and size of files.',
            'El número de archivos es demasiado pequeño. Compruebe la disponibilidad y el tamaño de los archivos.'
          ],
          "number_end_files": [
            ['файл', 'файла', 'файлов'],
            ['file', 'files', 'files'],
            ['archivo', 'archivos', 'archivos'],
          ],
          "max_count_comment": [
            "Максимальная длина комментария - 2000 символов.",
            "Maximum comment length is 2000 characters.",
            "La longitud máxima del comentario es de 2000 caracteres."
          ],
          "max_count_msg": [
            "Максимальная длина сообщения - 2000 символов.",
            "The maximum message length is 2000 characters.",
            "La longitud máxima del mensaje es de 2000 caracteres."
          ],
          "emped_list_u": [
            "Вы не выбрали список пользователей.",
            "You have not selected a list of users.",
            "No ha seleccionado una lista de usuarios."
          ],
          "emped_accounts": [
            "Вы не выбрали аккаунты.",
            "You have not selected accounts.",
            "No has seleccionado cuentas."
          ],
          "finish_dis": [
            "Рассылка успешно завершена.<br>Всего отправлено - {{count}}",
            "Spamming successfully completed.<br>Total sent - {{count}}",
            "Boletín completado con éxito.<br>Total enviado - {{count}}"
          ],
          "start_dis": [
            "Начинаем рассылку...",
            "Starting spam...",
            "Comience el boletín..."
          ],
          "emped_logs": [
            "Список логов ещё не сформирован.",
            "The list of logs is not yet formed.",
            "La lista de registros aún no se ha formado."
          ],
          "too_file": [
            "Файл должен быть не более 8 МБ.",
            "The file should be no more than 8 MB.",
            "El archivo no debe tener más de 8 MB."
          ],
          "wrong_type_file": [
            "Неизвестный тип файла.",
            "Unknown file type.",
            "Tipo de archivo desconocido"
          ],
          "dont_upload_file": [
            "Не удалось загрузить файл.",
            "Failed to upload file.",
            "No se pudo cargar el archivo."
          ],
          "emped_channels": [
            "Вы не выбрали список каналов.",
            "You have not selected a channel list.",
            "No ha seleccionado una lista de canales."
          ],
          "success_delete": [
            "Рассылка успешно удалена.",
            "Spam successfull deleted.",
            "Boletín eliminado con éxito."
          ]
        },
        "selenium": {
          "captcha": [
            "Пожалуйста, пройдите капчу.",
            "Please go through the captcha.",
            "Por favor pasa el captcha."
          ],
          "captcha_work": [
            "Решаем капчу...",
            "We solve captcha...",
            "Resolvemos un captcha..."
          ],
          "captcha_error": [
            "Ошибка при решении капчи.<br>Пожалуйста, попробуйте позже.",
            "Error solving captcha.<br>Please try again later.",
            "Error al resolver captcha.<br>Vuelva a intentarlo más tarde."
          ],
          "enter_2fa_dis": [
            "Введите 2FA код.<br>Затем нажмите кнопку входа или enter.",
            "Enter the 2FA code.<br>Then press the enter button or enter.",
            "Ingrese el código 2FA.<br>Luego presione el botón enter o enter."
          ],
          "ban_account": [
            "Аккаунт ({{account}}) заблокирован.",
            "Account ({{account}}) has been banned.",
            "La cuenta ({{cuenta}}) ha sido suspendida."
          ]
        },
        "number_end": {
          "secs": [
            ['секунда', 'секунды', 'секунд'],
            ['second', 'seconds', 'seconds'],
            ['segundo', 'segundos', 'segundos']
          ],
          "unsuccessful_logs": [
            ['неудачном логе', 'неудачных лога подряд', 'неудачных логов подряд'],
            ['unsuccessful log', 'unsuccessful logs in a row', 'unsuccessful logs in a row'],
            ['registro fallido', 'registros fallidos seguidos', 'registros fallidos seguidos']
          ],
          "rules": [
            ['правило', 'правила', 'правил'],
            ['rule', 'rules', 'rules'],
            ['regla', 'reglas', 'reglas']
          ],
          "activer": [
            [
              'активный',
              'активных',
              'активных'
            ],
            [
              'active',
              'active',
              'active'
            ],
            [
              'activo',
              'activos',
              'activos'
            ],
          ],
          "accs": [
            [
              " аккаунт",
              " аккаунта",
              " аккаунтов"
            ],
            [
              " account",
              " accounts",
              " accounts"
            ],
            [
              " cuenta",
              " cuentas",
              " cuentas"
            ]
          ],
          "users": [
            [
              " пользователь",
              " пользователя",
              " пользователей"
            ],
            [
              " user",
              " users",
              " users"
            ],
            [
              " usuario",
              " usuarios",
              " usuarios"
            ]
          ],
          "statuses": [
            [
              " статус",
              " статуса",
              " статусов"
            ],
            [
              " status",
              " statuses",
              " statuses"
            ],
            [
              " estado",
              " estados",
              " estados"
            ]
          ],
          "activity": [
            [
              " игра",
              " игры",
              " игр"
            ],
            [
              " game",
              " games",
              " games"
            ],
            [
              " juego",
              " juegos",
              " juegos"
            ]
          ],
          "roles": [
            ['роль', 'роли', 'ролей'],
            ['role', 'roles', 'roles'],
            ['rol', 'roles', 'roles'],
          ],
          "time": {
            "now": [
              "менее минуты назад",
              "less than a minute ago",
              "Hace menos de un minuto"
            ],
            "mins": [
              [
                "минуту",
                "минуты",
                "минут"
              ],
              [
                "minute",
                "minutes",
                "minutes"
              ],
              [
                "minuto",
                "minutos",
                "minutos"
              ]
            ],
            "hours": [
              [
                "час",
                "часа",
                "часов"
              ],
              [
                "hour",
                "hours",
                "hours"
              ],
              [
                "hora",
                "horas",
                "horas"
              ]
            ],
            "hour": [
              "час назад",
              "hour ago",
              "hace una hora"
            ],
            "ago": [
              "назад",
              "ago",
              "hace"
            ]
          },
          "channels": [
            [
              " канал",
              " канала",
              " каналов"
            ],
            [
              " channel",
              " channels",
              " channels"
            ],
            [
              " canal",
              " canales",
              " canales"
            ]
          ],
          "msgs": [
            [
              " сообщение",
              " сообщения",
              " сообщений"
            ],
            [
              " message",
              " messages",
              " messages"
            ],
            [
              " mensaje",
              " mensajes",
              " mensajes"
            ]
          ],
          "logs": [
            [
              " лог",
              " лога",
              " логов"
            ],
            [
              " log",
              " logs",
              " logs"
            ],
            [
              " registros",
              " registros",
              " registros"
            ]
          ],
          "success_logs": [
            [
              " успешный",
              " успешного",
              " успешных"
            ],
            [
              " successfull",
              " successfull",
              " successfull"
            ],
            [
              " exitoso",
              " exitoso",
              " exitoso"
            ]
          ],
          "usernames": [
            [
              " юзернейм",
              " юзернейма",
              " юзернеймов"
            ],
            [
              " username",
              " usernames",
              " usernames"
            ],
            [
              " nombre de usuario",
              " nombres de usuario",
              " nombres de usuario"
            ]
          ],
          "avatars": [
            [
              " изображение",
              " изображения",
              " изображений"
            ],
            [
              " image",
              " images",
              " images"
            ],
            [
              " imagen",
              " images",
              " imágenes"
            ]
          ],
          "invites": [
            [
              " инвайт",
              " инвайта",
              " инвайтов"
            ],
            [
              " invite",
              " invites",
              " invites"
            ],
            [
              " invitación",
              " invitaciones",
              " invitaciones"
            ]
          ],
          "days": [
            [
              " день",
              " дня",
              " дней"
            ],
            [
              " day",
              " days",
              " days"
            ],
            [
              " dia",
              " dias",
              " dias"
            ]
          ]
        },
        "other": {
          "copied": [
            "Скопировано.",
            "Copied.",
            "Copiado"
          ],
          "dont_copied": [
            "Ошибка при копировании текста.",
            "Error while copying text.",
            "Error al copiar texto."
          ],
          "total": [
            "Всего",
            "Total",
            "Total"
          ],
          "selected": [
            "Выделено",
            "Selected",
            "Resaltado"
          ],
          "tab_emoji": [
            "Используй TAB, чтобы быстрее вставить эмодзи",
            "Use TAB to quickly insert Emoji",
            "Usa TAB para insertar emoji más rápido"
          ],
          "search": [
            "Поиск",
            "Search",
            "Buscar"
          ],
          "server": [
            "Сервер",
            "Guild",
            "Servidor"
          ],
          "accs_not_found": [
            "Аккаунты не найдены",
            "No accounts found",
            "No se encontraron cuentas."
          ],
          "add_low": [
            "Добавить",
            "Add",
            "Agregar"
          ],
          "add_high": [
            "ДОБАВИТЬ",
            "ADD",
            "AGREGAR"
          ],
          "turn_off": [
            "Выключен",
            "Switched off",
            "Apagado"
          ],
          "turn_on": [
            "Включен",
            "Switched on",
            "Incluido"
          ],
          "copy_pass": [
            "Скопировать пароль",
            "Copy password",
            "Copiar contraseña"
          ],
          "copy_btn": [
            'Скопировать',
            'Copy',
            'Copia'
          ],
          "copied_pass": [
            "Скопирован",
            "Copied",
            "Copiado"
          ],
          "list_of_users_up": [
            "Список пользователей успешно обновлён.",
            "The user list has been updated successfully.",
            "La lista de usuarios se ha actualizado correctamente."
          ],
          "userers": [
            "пользователей",
            "users",
            "de usuarios"
          ],
          "usererd": [
            'польз.',
            'users',
            'usuario'
          ],
          "chaneles": [
            "каналов",
            "channels",
            "canales"
          ],
          "type_spam_text": [
            "Отправка сообщений",
            "Sending messages",
            "Enviando mensajes"
          ],
          "type_spam_files": [
            "Отправка файлов",
            "Sending files",
            "Enviando archivos"
          ],
          "select_file": [
            "Выберите файл",
            "Select a file",
            "Elegir archivo"
          ],
          "add_files": [
            'Прикрепить файлы',
            'Attach files',
            'Adjuntar archivos'
          ],
          "updating": [
            "Загружаю обновление...",
            "Downloading update...",
            "Descargando actualización..."
          ],
          "updating_nearly": [
            "Почти готово...",
            "Almost done...",
            "Casi hecho..."
          ],
          "updating_finish": [
            "Начнём работу?",
            "Start work?",
            "¿Empecemos?"
          ],
          "updating_error": [
            "Произошла неизвестная ошибка при обновлении.<br>Пожалуйста, уведомите об этом администратора.",
            "An unknown error occurred during the update.<br>Please notify the administrator.",
            "Se produjo un error de actualización desconocido.<br>Notifique al administrador."
          ],
          "little_black_list": [
            "Список слишком мал, либо ещё не создан.",
            "The list is too small or has not been created yet.",
            "La lista es demasiado pequeña o aún no se ha creado."
          ],
          "error_black_list": [
            "Новый список содержит слишком мало пользователей.",
            "The new list contains too few users.",
            "La nueva lista contiene muy pocos usuarios."
          ],
          "fail_permis_updating": [
            "Не удалось установить обновление. Закройте приложение и запустите с правами администратора. Failed to install update. Close the application and run as administrator. No se pudo instalar la actualización. Cierre la aplicación y ejecútela como administrador.",
            "Failed to install update. Close the application and run as administrator.",
            "No se pudo instalar la actualización. Cierre la aplicación y ejecútela como administrador."
          ],
          "success_clear_cache": [
            "Кэш успешно очищен.",
            "Cache successfully cleared.",
            "La caché se sonrojó con éxito."
          ],
          "error_permissions": [
            "Не удалось загрузить файл.<br>Попробуйте запустить приложение с правами администратора.",
            "The file could not be loaded.<br>Try running the application with administrator rights.",
            "Error al cargar el archivo.<br>Intente ejecutar la aplicación con privilegios de administrador."
          ],
          "new_update": [
            "Обновление успешно загружено, но некоторые функции могут не работать. Чтобы это исправить удалите приложение с ПК и скачайте новое с сайта.",
            "The update has been successfully downloaded, but some features may not work. To fix this, delete the application from the PC and download the new one from the site.",
            "La actualización se descargó correctamente, pero algunas características pueden no funcionar. Para solucionar esto, desinstale la aplicación de la PC y descargue una nueva del sitio."
          ],
          "dont_get_dir": [
            "Не удалось получить доступ к папке.<br>Попробуйте запустить программу с правами администратора, либо выберети другую папку.",
            "Unable to access the folder.<br>Try running the program with administrator privileges, or select another folder.",
            "Error al acceder a la carpeta.<br>Intente ejecutar el programa con derechos de administrador o seleccione una carpeta diferente."
          ],
          "dont_get_proxy_file": [
            "Не удается получить доступ к файлу.<br>Попробуйте запустить программу с правами администратора, либо выберети другую папку.",
            "Unable to access the file.<br>Try running the program with administrator privileges, or select another folder.",
            "No se puede acceder al archivo.<br>Intente ejecutar el programa con derechos de administrador o seleccione una carpeta diferente."
          ],
          "dont_get_proxy_from_file": [
            "Не можем получить прокси из файла.",
            "We can not get a proxy from the file.",
            "No podemos obtener el proxy del archivo."
          ],
          "proxy_namer": [
            'прокси',
            'proxy',
            'proxies'
          ],
          "little_count_proxy": [
            "Слишком маленькое количество прокси.",
            "Too few proxies.",
            "Muy poco poder."
          ],
          "add_accs_button": [
            "Добавить несколько аккантов",
            "Add multiple accounts",
            "Agregue algunos acentos"
          ],
          "add_acc_button": [
            "Добавить один аккант",
            "Add one account",
            "Añadir un acento"
          ],
          "dont_set_send_mess": [
            "Вы не указали количество отправленных сообщений.",
            "You did not specify the number of sent messages.",
            "No especificó la cantidad de mensajes enviados."
          ],
          "min_count_send_mess": [
            "Минимальное количество отправленных сообщений - 1",
            "Minimum number of sent messages - 1",
            "El número mínimo de mensajes enviados es 1"
          ],
          "max_count_send_mess": [
            "Максимальное количество отправленных сообщений - 500",
            "The maximum number of sent messages is 500",
            "El número máximo de mensajes enviados es 500"
          ],
          "dont_send_change_accs": [
            "Вы не указали аккаунты для замены.",
            "You did not specify accounts to replace.",
            "No ha especificado cuentas para reemplazar."
          ],
          "dont_set_delay_spam": [
            "Вы не указали задержку.",
            "You did not specify a delay.",
            "No especificó un retraso."
          ],
          "min_delay_spam": [
            "Минимальная задержка - 0 сек.",
            "Minimum delay - 0 seconds.",
            "El retraso mínimo es de 0 segundos."
          ],
          "wrong_delay_spam": [
            "Задержка указана неверно.",
            "The delay is incorrect.",
            "El retraso es incorrecto."
          ],
          "wrong_users_list_mass_adding": [
            'Количество пользователей для упоминаний указано неверно.',
            'The count of users for mentions is incorrect.',
            'El número de usuarios para las menciones es incorrecto.'
          ],
          "too_small_users_list_mass_adding": [
            'Количество пользователей для упоминаний слишком мало.',
            'The count of users to mention is too small.',
            'El número de usuarios a mencionar es demasiado pequeño.'
          ],
          "limit_auto_stop_wrong": [
            'Количество неудачных логов рассылки указано неверно.',
            'The number of unsuccessful spam logs is incorrect.',
            'El número de registros de spam fallidos es incorrecto.'
          ],
          "limit_auto_stop_small": [
            'Количество неудачных логов рассылки должно быть больше 0.',
            'The number of unsuccessful spam logs must be greater than 0.',
            'El número de registros de spam no exitosos debe ser mayor que 0.'
          ],
          "app_js_update": [
            "После установки обновления, пожалуйста, перезагрузите приложение, для корректной работы.",
            "After installing the update, please restart the application to work correctly.",
            "Después de instalar la actualización, reinicie la aplicación para que funcione correctamente."
          ],
          "secs": [
            "секунд",
            "seconds",
            "segundos"
          ],
          "edit": [
            "Редактировать",
            "Edit",
            "Editar"
          ],
          "selects": [
            "Выбрано",
            "Selected",
            "Seleccionado"
          ],
          "down_from_file": [
            "Загрузить из файла",
            "Upload from file",
            "Descargar desde archivo"
          ],
          "usernames_c": [
            "юзернеймов",
            "usernames",
            "nombres de usuario"
          ],
          "accountsr": [
            "аккаунтов",
            "accounts",
            "cuentas"
          ],
          "dont_p_jt": [
            "Вы не указали дату вхождения в чат.",
            "You did not enter a date for joining the chat.",
            "No ingresaste una fecha para unirte al chat."
          ],
          "dont_p_rt": [
            "Вы не указали дату регистрации пользователей.",
            "You did not enter a user registration date.",
            "No ingresó una fecha de registro de usuario."
          ],
          'not_f_oth_list_users': [
            'Другие списки пользователей не найдены.',
            'No other user lists found.',
            'No se encontraron otras listas de usuarios.'
          ],
          "wrong_jt": [
            "Дата вхождения в чат указана неверно.",
            "The date of joining the chat is incorrect.",
            "La fecha de unirse al chat es incorrecta."
          ],
          "wrong_rt": [
            "Дата регистрации пользователя указана неверно.",
            "User registration date is incorrect.",
            "La fecha de registro del usuario es incorrecta."
          ],
          "min_l_u": [
            "Минмальный лимит пользователей - 5",
            "Minimum user limit is 5",
            "Límite mínimo de usuario - 5"
          ],
          "max_l_u": [
            "Максимальный лимит пользователей - 50000000",
            "Maximum user limit - 50000000",
            "Límite máximo de usuario: 50,000,000"
          ],
          "dont_h_ar": [
            "На аккаунте (:account) не указан apikey rucaptcha.com",
            "No apikey rucaptcha.com on account (:account)",
            "No apikey rucaptcha.com en cuenta (:account)"
          ],
          "wrong_pars": [
            "Произошла ошибка при попытке парсинга сервера.<br>Err: :err",
            "An error occurred while trying to parse the server.<br>Err: :err",
            "Se produjo un error al intentar analizar el servidor.<br>Err: :err"
          ],
          "wrong_pars_roles": [
            "Произошла ошибка при попытке парса.<br>Err: :err",
            "An error occurred while trying to parse.<br>Err: :err",
            "Se produjo un error al intentar analizar.<br>Err: :err"
          ],
          "err_w_get_t_a": [
            'Ошибка при получение токена - :err',
            'Error getting token - :err',
            'Error al obtener el token - :err',
          ],
          "little_c_lis_r": [
            'Список ролей слишком маленький.',
            'The list of roles is too small.',
            'La lista de roles es demasiado pequeña.',
          ],
          "dont_have_tok_a": [
            "Не удалось получить токен от аккаунта.",
            "Failed to get token from account.",
            "No se pudo obtener el token de la cuenta."
          ],
          "start_check": [
            "Начинаем проверку...",
            "Getting started...",
            "Comenzando..."
          ],
          "err_checkr": [
            "Произошла ошибка при проверке.<br>Err_code: :err",
            "An error occurred while validating.<br>Err_code: :err",
            "Se produjo un error durante la validación.<br>Err_code: :err"
          ],
          "succ_check": [
            "Проверка успешно завершена.<br>Всего проверено: :count",
            "Verification completed successfully.<br>Total checked: :count",
            "Verificación completada con éxito.<br>Total verificado: :count"
          ],
          "err_prox_check": [
            "Ошибка при проверки аккаунта (:email)<br>Нерабочий прокси.",
            "Error verifying account (:email)<br>Broken proxy.",
            "Error al verificar la cuenta (:email)<br>Proxy roto."
          ],
          "err_c_get_acc_token": [
            "Не удалось получить токен от аккаунта.<br>Err: :err",
            "Failed to get token from account. Err: :err",
            "Error al obtener el token de la cuenta. Err: :err"
          ],
          "get_acc_token": [
            "Получаем токен от аккаунта (:acc)",
            "Getting the token from the account (:acc)",
            "Obtenemos el token de la cuenta (:acc)"
          ],
          "starting_pars_users": [
            "Начинаем парсинг пользователей...",
            "We start parsing users...",
            "Comenzamos a analizar usuarios..."
          ],
          "starting_pars": [
            "Начинаем парсинг...",
            "We start parsing...",
            "Comenzamos a analizar..."
          ],
          "err_w_g_c": [
            "Произошла ошибка при попытке получения каналов сервера.",
            "An error occurred while trying to get server channels.",
            "Se produjo un error al intentar obtener canales del servidor."
          ],
          "lim_g_c": [
            "Количество доступных каналов для этого аккаунта меньше одного.",
            "The number of channels available for this account is less than one.",
            "El número de canales disponibles para esta cuenta es inferior a uno."
          ],
          "edit_l_c": [
            "Редактировать список каналов",
            "Edit channel list",
            "Editar lista de canales"
          ],
          "succ_pars": [
            "Парсинг успешно завершен.<br>Всего получено: :count",
            "Parsing completed successfully.<br>Total received: :count",
            "El análisis se completó correctamente.<br>Total recibido: :count"
          ],
          "need_ver_a": [
            "Вам нужно верифицировать аккаунт (:acc)",
            "You need to verify your account (:acc)",
            "Debe verificar su cuenta (:acc)"
          ],
          "err_dis": [
            "Произошла ошибка рассылке.<br>Code: :err",
            "A spamming error has occurred.<br>Code: :err",
            "Se produjo un error en el boletín.<br>Code: :err"
          ],
          'err_pars_users_dis_channels': [
            'Произошла ошибка при попытке парсинга пользователей.',
            'An error occurred while trying to parse users.',
            'Se produjo un error al intentar analizar los usuarios.'
          ],
          "dont_p_i": [
            "Вы не указали инвайты.",
            "You did not specify an invites.",
            "No especificó una invitación."
          ],
          "min_count_invites_p": [
            'Минимальное количество инвайтов - 2.',
            'The minimum count of invites is 2.',
            'El número mínimo de invitaciones es 2.'
          ],
          "max_count_invites_p": [
            'Максимальное количество инвайтов - 100.',
            'The maximum number of invites is 100.',
            'El número máximo de invitaciones es 100.'
          ],
          "suc_u_i_mul_pars": [
            'Список инвайтов успешно обновлён.',
            'Invites list has been updated successfully.',
            'La lista de invitaciones se ha actualizado correctamente.'
          ],
          "err_in": [
            "Произошла ошибка при инвайтинге.<br>Err: :err",
            "An error occurred while inviting.<br>Err: :err",
            "Se produjo un error al invitar.<br>Err: :err"
          ],
          "suc_in": [
            "Инвайтинг успешно завершён.<br>Всего заинвайчено: :count",
            "Inviting successfully completed.<br>Total invite accounts: :count",
            "La invitación se ha completado con éxito.<br>Cantidad total de contribuciones: :count"
          ],
          "err_w_g_t_a": [
            "Произошла ошибка при получении токена (:email)",
            "An error occurred while getting the token (:email)",
            "Se produjo un error al obtener el token (:email)"
          ],
          "err_w_in": [
            "Произошла ошибка при попытке инвайтинга.<br>Err: :err",
            "An error occurred while trying to inviting.<br>Err: :err",
            "Se produjo un error al intentar invitar.<br>Err: :err"
          ],
          "need_pars_c": [
            "Вам нужно спарсить каналы серверов.",
            "You need to parse server channels.",
            "Debe analizar los canales del servidor."
          ],
          "go_channels_pars_c": [
            "Спарсить доступные каналы",
            "Parse available channels",
            "Analizar canales disponibles"
          ],
          "dont_p_l_m": [
            "Вы не указали лимит сообщений.",
            "You have not specified a message limit.",
            "No ha especificado un límite de mensajes."
          ],
          "min_l_m": [
            "Лимит сообщений слишком маленький.",
            "The message limit is too small.",
            "El límite del mensaje es demasiado pequeño."
          ],
          "max_l_m": [
            "Лимит сообщений слишком большой.",
            "The message limit is too large.",
            "El límite del mensaje es demasiado grande."
          ],
          "suc_dis": [
            "Рассылка успешно завершена.<br>Всего отправлено: :count",
            "Spam completed successfully.<br>Total sent: :count",
            "Boletín completado con éxito.<br>Total enviado: :count"
          ],
          "suc_dis_voice": [
            "Рассылка успешно завершена.",
            "Spam completed successfully.",
            "Boletín completado con éxito."
          ],
          "err_w_i_g": [
            "Ошибка при инвайтинге на сервер.",
            "Error inviting to server.",
            "Error al invitar al servidor."
          ],
          "min_c_f": [
            "Количество файлов слишком мало.",
            "The number of files is too small.",
            "El número de archivos es demasiado pequeño."
          ],
          "dont_get_u_f_f": [
            "Не можем получить юзернеймы из файла.",
            "Cannot get usernames from file.",
            "No se pueden obtener los nombres de usuario del archivo."
          ],
          "min_c_u": [
            "Слишком маленькое количество юзернеймов.",
            "Too few usernames.",
            "Muy pocos nombres de usuario."
          ],
          "min_c_u_s": [
            "Слишком маленькое количество юзернеймов.<br>Проверьте синтаксис указанных юзернеймов.",
            "Too few usernames.<br>Check the syntax of the specified usernames.",
            "Muy pocos nombres de usuario.<br>Verifique la sintaxis de los nombres de usuario especificados."
          ],
          "dont_o_fun": [
            "Ни одна из функций не включена.",
            "None of the features are enabled.",
            "Ninguna de las funciones está habilitada."
          ],
          "dont_p_u": [
            "Вы не указали юзернеймы.",
            "You did not specify usernames.",
            "No especificó nombres de usuario."
          ],
          "dont_p_a": [
            "Вы не указали аватары.",
            "You did not specify avatars.",
            "No especificaste avatares."
          ],
          "err_w_ch_ac": [
            "Произошла ошибка при смене данных.<br>Err: :err",
            "An error occurred while changing data.<br>Err: :err",
            "Se produjo un error al cambiar los datos.<br>Err: :err"
          ],
          "too_f_c_t_a": [
            "Вы слишком часто меняете свой тег (:acc)",
            "You change your tag too often (:acc)",
            "Cambia su etiqueta con demasiada frecuencia (:acc)"
          ],
          "get_u_l": [
            "Получаем список пользователей сервера (:acc)",
            "Get the list of server users (:acc)",
            "Obtenga la lista de usuarios del servidor (:acc)"
          ],
          "suc_get_t": [
            "Получили токен.",
            "Got a token.",
            "Tengo una ficha."
          ],
          "ban_s_a_i": [
            "Этот аккаунт заблокирован на сервере.<br>Попробуйте сменить инвайт/аккаунт.",
            "This account is blocked on the server.<br>Try changing the invite/account.",
            "Esta cuenta está bloqueada en el servidor.<br>Intente cambiar la invitación / cuenta."
          ],
          "ban_s_a_i_m": [
            "Этот аккаунт заблокирован на сервере: :invite",
            "This account has been blocked on the server: :invite",
            "Esta cuenta ha sido bloqueada en el servidor: :invite"
          ],
          "don_s_a_t": [
            "Вы не указали токен аккаунта.",
            "You did not specify an account token.",
            "No especificó un token de cuenta."
          ],
          "suc_sa_t_a": [
            "Токены успешно сохранены.",
            "Tokens successfully saved.",
            "Fichas guardadas con éxito."
          ],
          "min_del_l": [
            "Список для удаления слишком маленький.",
            "The removal list is too small.",
            "La lista de eliminación es demasiado pequeña."
          ],
          "acc_tokena": [
            "Токен от аккаунта...",
            "Token from account ...",
            "Token de la cuenta ..."
          ],
          "open_dia": [
            "Открыть диалог",
            "Open dialogue",
            "Diálogo abierto"
          ],
          "reference_noty_text": [
            'В нашем приложении появилась справка по работе с Discord.<br>Рекомендуем изучить её.',
            'Handbook for working with Discord has appeared in our application.<br>We recommend that you study it.',
            'El manual para trabajar con Discord ha aparecido en nuestra aplicación.<br>Recomendamos que lo estudies.'
          ],
          "reference_noty_action": [
            'Открыть',
            'Open',
            'Abierto'
          ],
          "install_update_c": [
            "Вышло новое обновление.",
            "A new update has been released.",
            "Una nueva actualización ha sido lanzada."
          ],
          "install_update": [
            "Установить",
            "Install",
            "Instalar"
          ],
          "not_sub": [
            "Ваша подписка закончится через :days",
            "Your subscription will end in :days",
            "Su suscripción finalizará en :days"
          ],
          "how_many_send_spam_channels": [
            'Всего отправится',
            'Total sent',
            'Total compensado',
          ],
          "prodl": [
            "Продлить",
            "Extend",
            "Extender"
          ],
          "err_with_change_acc_data": [
            'Произошла ошибка при попытке смены данных.<br>Err: :err',
            'An error occurred while trying to change data.<br>Err: :err',
            'Se produjo un error al intentar cambiar los datos.<br>Err: :err',
          ],
          'dont_set_d_au_sp': [
            'Вы не указали задержку для автоответчика.',
            'You did not specify a delay for the answering machine.',
            'No especificó un retraso para el contestador automático.'
          ],
          'wrong_delay_for_delete_message': [
            'Задержка для удаления сообщений указана неверно.',
            'The delay for deleting messages is incorrect.',
            'El retraso para eliminar mensajes es incorrecto.'
          ],
          'to_small_delay_for_delete_message': [
            'Задержка для удаления сообщений должна быть больше 0.',
            'The delay for deleting messages must be greater than 0.',
            'El retraso para eliminar mensajes debe ser mayor que 0.'
          ],
          'dont_set_rules_for_scripts': [
            'Вы не указали правила для сценариев автоотетчика.',
            'You did not specify rules for autotouch scripts.',
            'No especificó reglas para scripts de autotouch.'
          ],
          'min_d_au_sp': [
            'Минимальная задержка для автоответчика - 0 секунд.',
            'The minimum delay for an answering machine is 0 seconds.',
            'El retraso mínimo para un contestador automático es de 0 segundos.'
          ],
          'max_d_au_sp': [
            'Максимальная задержка для автоответчика - 500 секунд.',
            'The maximum delay for an answering machine is 500 seconds.',
            'El retraso máximo para un contestador automático es de 500 segundos.'
          ],
          'dont_sp_au_t_sp': [
            'Вы не указали текст для автоответчика.',
            'You did not enter text for the answering machine.',
            'No ha ingresado texto para un contestador automático.'
          ],
          'need_pars_roles_p_u': [
            'Вам нужно спарсить список ролей на сервере.',
            'You need to parse the list of roles on the server.',
            'Debe analizar la lista de roles en el servidor.'
          ],
          'max_l_t_au_sp': [
            'Максимальная длина текста автоответчика - 2000 символов.',
            'The maximum length of answering machine text is 2000 characters.',
            'La longitud máxima del texto del contestador automático es de 2000 caracteres.'
          ],
          'dont_acce_file_ch': [
            'Отправка файлов на этом канале запрещена.',
            'Uploading files on this channel is prohibited.',
            'Está prohibido cargar archivos en este canal.'
          ],
          'checking_user_id': [
            'Проверяем ID...',
            'Checking ID...',
            'Comprobando ID...'
          ],
          'dont_f_user_id': [
            'Пользователь с таким ID не найден, либо отправка сообщений этому пользователю ограничена.',
            'A user with this ID was not found, or sending messages to this user is limited.',
            'No se encontró un usuario con este ID o el envío de mensajes a este usuario es limitado.'
          ],
          'dont_provite_id_v': [
            'Вы не указали ID сообщения для верификации.',
            'You did not provide a message ID for verification.',
            'No proporcionó una identificación de mensaje para la verificación.'
          ],
          'wrong_m_id_v': [
            'ID сообщения указан неверно.',
            'The message ID is invalid.',
            'La identificación del mensaje no es válida.'
          ],
          'did_not_provid_channel_id': [
            'Вы не указали ID канала для верификации.',
            'You did not provide a channel ID for verification.',
            'No proporcionaste una ID de canal para la verificación.'
          ],
          'wrong_v_channel_id': [
            'ID канала указан неверно.',
            'The channel ID is invalid.',
            'La ID del canal no es válida.'
          ],
          'not_found_m_id_v': [
            'Сообщение для верификации с таким ID не найдено.',
            'A verification message with this ID was not found.',
            'No se encontró un mensaje de verificación con esta ID.'
          ],
          'error_with_export_pars': [
            'Ошибка при экспорте в файл.<br>Проверьте доступность файла.',
            'Error exporting to file.<br>Check file availability.',
            'Error al exportar al archivo.<br>Verifique la disponibilidad del archivo.'
          ],
          'error_with_import_pars': [
            'Ошибка при импорте в файл.<br>Проверьте доступность файла.',
            'Error importing to file.<br>Check file availability.',
            'Error al importar al archivo.<br>Verifique la disponibilidad del archivo.'
          ],
          'success_export': [
            'Экспорт успешно завершён.',
            'Export completed successfully.',
            'Exportación completada con éxito.'
          ],
          'success_import': [
            'Импорт успешно завершён.<br>Добавлено: :count.',
            'Import completed successfully.<br>Added: :count.',
            'Importación completada con éxito.<br>Agregado: :count.'
          ],
          'success_clear_blacklist': [
            'Список успешно очищен.',
            'List cleared successfully.',
            'Lista borrada con éxito.'
          ],
          'not_found_react_in_m_v': [
            'Реакция для верификации в этом сообщение не найдена.',
            'The response to verify this message was not found.',
            'No se encontró la respuesta para verificar este mensaje.'
          ],
          'dont_provid_user_id_sp': [
            'Вы не указали ID пользователя.',
            'You did not enter a user ID.',
            'No ingresó una identificación de usuario.'
          ],
          'wrong_user_id_sp': [
            'ID пользователя указан неверно.',
            'The user ID is invalid.',
            'La identificación de usuario no es válida.'
          ],
          'dont_put_invites_mut_servers': [
            'Вы не указали инвайты общих серверов.',
            'You did not specify shared server invites.',
            'No especificó las invitaciones compartidas del servidor.'
          ],
          'get_list_friends': [
            'Получить список друзей',
            'Get friends list',
            'Obtener lista de amigos'
          ],
          'dont_find_friends_list_for_acc': [
            'Список друзей на этом аккаунте не найден.',
            'No friends list was found on this account.',
            'No se encontró una lista de amigos en esta cuenta.'
          ],
          'dont_find_friends_list': [
            'Список друзей не найден.',
            'Friends list not found.',
            'Lista de amigos no encontrada.'
          ],
          'too_smal_list_friends': [
            'Список друзей слишком маленький.',
            'The friends list is too small.',
            'La lista de amigos es demasiado pequeña.'
          ],
          'err_with_get_friends_list': [
            'Произошла ошибка при получении друзей.<br>Err: :err',
            'An error occurred while getting friends.<br>Err: :err',
            'Se produjo un error al obtener amigos.<br>Err: :err'
          ],
          'success_get_friends_list': [
            'Список друзей успешно получен.',
            'Friends list received successfully.',
            'Lista de amigos recibida con éxito.'
          ],
          'need_verify_email_u': [
            'Вам нужно верифицировать аккаунт (email) для этого действия.',
            'You need to verify your account (email) for this action.',
            'Debe verificar su cuenta (correo electrónico) para esta acción.'
          ],
          "dont_set_statuses_editer": [
            'Вы не указали список статусов.',
            'You did not provide a list of statuses.',
            'No proporcionó una lista de estados.'
          ],
          "to_small_list_of_statuses": [
            'Список статусов слишком мал.',
            'The status list is too small.',
            'La lista de estado es demasiado pequeña.'
          ],
          "too_small_activitys_editer": [
            'Список игр слишком мал.',
            'The list of games is too small.',
            'La lista de juegos es demasiado pequeña.'
          ],
          "success_save_stasuses": [
            'Список статусов успешно сохранён.',
            'Status list successfully saved.',
            'Lista de estado guardada con éxito.'
          ],
          'dont_spicufy_usernames_for_adder': [
            'Вы не указали список юзернеймов для накрутки друзей.',
            'You did not specify a list of usernames for friends adder.',
            'No especificó una lista de nombres de usuario para engañar a amigos.'
          ],
          "dont_set_states_editer": [
            'Вы не указили статусы для аккаунтов.',
            'You have not specified statuses for accounts.',
            "No ha especificado estados para las cuentas"
          ],
          "dont_set_activity_editer": [
            'Вы не указили список игр для аккаунтов.',
            'You have not provided a list of games for the accounts.',
            'No ha proporcionado una lista de juegos para las cuentas.'
          ],
          "dont_set_status_time_editer": [
            'Вы не указили время удаления статуса для аккаунтов.',
            'You did not specify a time to clear status for accounts.',
            'No especificó un momento para eliminar el estado de las cuentas'
          ],
          'too_smal_usernames_list': [
            'Список юзернеймов слишком мал.',
            'The username list is too small.',
            'La lista de nombres de usuario es demasiado pequeña.'
          ],
          'has_name_for_answer_msg': [
            'Сообщение с таким именем уже существует.',
            'A message with the same name already exists.',
            'Ya existe un mensaje con el mismo nombre.'
          ],
          'err_save_file': [
            'Произошла ошибка при сохранении файла :name.',
            'An error occurred while saving the file :name.',
            'Se produjo un error al guardar el archivo :name.'
          ],
          'success_create_answer_msg': [
            'Сообщение успешно создано.',
            'Message created successfully.',
            'Mensaje creado con éxito.'
          ],
          'success_update_answer_msg': [
            'Сообщение успешно отредактировано.',
            'The message has been edited successfully.',
            'El mensaje ha sido editado con éxito.'
          ],
          'success_delete_answer_msg': [
            'Сообщение успешно удалено.',
            'Message deleted successfully.',
            'Mensaje eliminado exitosamente.'
          ],
          'dont_set_name_of_answ_rule': [
            'Вы не указали имя правила.',
            'You did not specify a rule name.',
            'No especificó un nombre de regla.'
          ],
          'has_answ_rule_with_this_name': [
            'Правило с таким именем уже существует.',
            'A rule with the same name already exists.',
            'Ya existe una regla con el mismo nombre.'
          ],
          'wrong_answer_rule': [
            'Правило указано неверно.',
            'The rule is incorrect.',
            'La regla es incorrecta.'
          ],
          'dont_set_message_for_answer_rule': [
            'Вы не выбрали сообщение для ответа.',
            'You did not select a message to reply to.',
            'No seleccionó un mensaje para responder.'
          ],
          'success_edit_answer_rule': [
            'Правило успешно отредактировано.',
            'The rule has been edited successfully.',
            'La regla ha sido editada con éxito.'
          ],
          'success_create_answer_rule': [
            'Правило успешно создано.',
            'The rule was created successfully.',
            'La regla fue creada con éxito.'
          ],
          'success_save_settings': [
            'Настройки успешно сохранены.',
            'Settings saved successfully.',
            'Configuración guardada con éxito.'
          ],
          'too_small_games_list': [
            'Список игр слишком маленький.',
            'The list of games is too small.',
            'La lista de juegos es demasiado pequeña.'
          ],
          'success_delete_answer_rule': [
            'Правило успешно удалено.',
            'The rule was successfully deleted.',
            'La regla se eliminó correctamente.'
          ],
          'dont_provide_games_list': [
            'Вы не указали список игр.',
            'You did not provide a list of games.',
            'No proporcionaste una lista de juegos.'
          ],
          'dont_provide_count_of_more_msgs': [
            'Вы не указали количество сообщений для одного пользователя.',
            'You did not specify the number of posts for one user.',
            'No especificó el número de publicaciones para un usuario.'
          ],
          'little_count_of_more_msgs': [
            'Количество сообщений для одного пользователя меньше двух.',
            'The number of messages for one user is less than two.',
            'El número de mensajes para un usuario es inferior a dos.'
          ],
          'need_one_answer_message': [
            'Вам нужно создать хотя бы одно сообщение.',
            'You need to create at least one message.',
            'Necesita crear al menos un mensaje.'
          ]
        }
      }
    }

    const default_lang = 'ru';
    function translater(titles, data = false, d_data = false) {
      if (titles.length <= 0) return false;
      var ru_index = 0;
      var en_index = 1;
      var es_index = 2;
      var i = ru_index;
      if (app_lang == 'en') {
        i = en_index;
      } else if (app_lang == 'es') {
        i = es_index;
      }
      var res = titles[i];
      if (!res) res = titles[en_index];
      if (data) {
        if (res.indexOf('{{count}}') >= 0) {
          res = res.replace('{{count}}', data);
        } else if (res.indexOf('{{account}}') >= 0) {
          res = res.replace('{{account}}', data);
        }
      }
      if (d_data) {
        for (const [key, value] of Object.entries(d_data)) {
          res = res.replace(`:${key}`, value);
        }
      }
      return res;
    }

    function get_update() {
      // Nobody cares.
      return;
    }

    function update_discord_version() {
      return new Promise(async _ => {
        try {
            /// Discord version.
            var version = 99031;
            window.localStorage.setItem('clien_idD', JSON.stringify(version));
        } catch (err) { }
      })
    }

    var check_admin = false;
    var check_updater = false;

    var last_files_for_spam = false;
    var last_type_of_file_for_spam = false;
    var last_files_for_spam_answer = false;
    var last_type_of_file_for_spam_answer = false;
    var last_files_for_spam_channels = false;
    var last_type_of_file_for_spam_channels = false;

    var files_data_for_new_answer_message = [];

    // if (!store.has('delete_old_pars') && store.has('pars') && store.get('pars').length > 0) {
    //   var time_before = 1564644420000;
    //   var neers = [];
    //   store.get('pars').forEach((e, ind, arr) => {
    //     if (e.time > time_before) neers.push(e);
    //     if (ind == arr.length - 1) store.set('pars', neers);
    //   })
    //   store.set('delete_old_pars', true);
    // }
    if (!store.has('app_version')) get_update();
    
    update_discord_version();
    if (!localStorage['delete_old_pars_lists']) {
      store.delete('pars_members');
      store.delete('pars');
      localStorage.setItem('delete_old_pars_lists', 'true');
    }
    if (!store.has('app_version') || !store.has('update_' + app_version)) {
      check_updater = true;
      var p = $('#loader p');
      p.css('transition', '.25s');
      setTimeout(() => {
        p.css('opacity', '0');
        setTimeout(() => {
          p.html(translater(translate.noty.other.updating));
          setTimeout(() => {
            p.css('opacity', '1');
            var params = {
              method: 'GET',
              url: 'https://onedash.net/app/get/upgrade',
              headers: {
                token: user_token
              }
            };
            req(params, (err, response, body) => {
              if (err || !response || response.statusCode != 200 || !body) {
                $('#loader').css('opacity', '0');
                setTimeout(function () {
                  $('#loader').remove();
                }, 200);
                noty('error', translater(translate.noty.other.updating_error), 15000);
                return false;
              }
              //logntiwpoer(body.substr(0, 2000));
              body = JSON.parse(body);
              var files = body.data;
              var restart = false;
              var close = false;
              setTimeout(() => {
                p.css('opacity', '0');
                setTimeout(() => {
                  selenium_start();
                  p.html(translater(translate.noty.other.updating_nearly));
                  setTimeout(() => {
                    p.css('opacity', '1');
                    setTimeout(() => {
                      p.css('opacity', '0');
                      files.forEach((e, ind, arr) => {
                        var path = e.name;
                        if (path.indexOf('index.html') >= 0) restart = true;
                        //if (path.indexOf('app.js') >= 0) noty('warning', translater(translate.noty.other.app_js_update), 86400 * 100);
                        var data = e.value;
                        data = Buffer.from(data, 'base64');
                        var check_end = false;
                        if (path == '/node_modules') {
                          var new_zip = new JSZip();
                          new_zip.loadAsync(data).then(function (zip) {
                            Object.keys(new_zip.files).forEach((e, inde, arre) => {
                              //var p = e;
                              ensureDirectoryExistence(`${__dirname}/node_modules/${e}`);
                              if (new_zip.file(e) != null) {
                                new_zip.file(e).async('string').then(r => {
                                  var con = r;
                                  fs.writeFile(`${__dirname}/node_modules/${e}`, con, function (err) {
                                    if (err) {
                                      close = err;
                                    }
                                    if (inde == arre.length - 1) {
                                      setTimeout(() => {
                                        p.html(translater(translate.noty.other.updating_finish));
                                        setTimeout(() => {
                                          p.css('opacity', '1');
                                        }, 50);
                                      }, 250);
                                      setTimeout(() => {
                                        if (close) {
                                          alert(translater(translate.noty.other.fail_permis_updating));
                                          return false;
                                        }
                                        store.set('update_' + app_version, true);
                                        if (restart) return restart_window();
                                        setTimeout(() => {
                                          $('#loader').css('opacity', '0');
                                          setTimeout(function () {
                                            $('#loader').remove();
                                            setTimeout(() => {
                                              check_upgrade_files()
                                            }, 1000);
                                          }, 200);
                                        }, 500);
                                      }, 1500);
                                    }
                                  });
                                });
                              }
                            })
                          });
                        } else {
                          fs.writeFile(`${__dirname}${path}`, data, function (err) {
                            if (err) close = true;
                          });
                        }
                      });
                    }, 2500);
                  }, 50);
                }, 200);
              }, 250);
            });
          }, 50);
        }, 250);
      }, 100);
    }

    if (store.has('spam')) fat_spam = store.get('spam');
    get_accounts();
    if (!check_updater && !tmp_data['noty_reference']) {
      setTimeout(() => {
        new Noty({
          text: translater(translate.noty.other.reference_noty_text),
          buttons: [
            Noty.button(translater(translate.noty.other.reference_noty_action), 'btn-right-action waves-effect', function (e) {
              $('.modal').modal('hide');
              $('#modal-reference').modal('show');
              Noty.closeAll();
            }, { 'action': 'new_account' }),
          ],
          type: 'warning',
          layout: 'bottomRight',
          theme: 'sunset',
          closeWith: ['click'],
          timeout: 60 * 1000
        }).show();
        update_tmp('noty_reference', true);
      }, 20 * 1000);
    }

    if (!check_updater) check_upgrade_files();

    // if (!store.has('new_update') && !check_updater) {
    //   setTimeout(() => {
    //     store.set('new_update', true);
    //     noty('warning', translater(translate.noty.other.new_update));
    //   }, 15 * 1000);
    // }

    deleteCookies();

    $('body').on('click', '[action="start_spam"]', deleteCookies);
    $('body').on('click', '[action="start_pars"]', deleteCookies);

    const pop_error = translater(translate.noty.pop_error);

    $.fn.hasAttr = function (name) {
      return this.attr(name) !== undefined;
    };

    function reload_translate() {
      if (app_lang && app_lang == 'en' && !check_updater) {
        $('[translate]').each(function (r, e) {
          var t = $(e);
          if (!t.hasAttr('tooltip') && !t.hasAttr('tooltip-data-id')) {
            t.html(t.attr('translate'));
          }
        });
        $('[translatesrc]').each(function (r, e) {
          $(e).attr('src', $(e).attr('translatesrc'))
        });
        $('[translatetippy]').each(function (r, e) {
          $(e).attr('data-tippy-content', $(e).attr('translatetippy'))
          tippy('translatetippy');
        });
        $('[translate][tooltip]').each(function (r, e) {
          var t = $(e);
          t.attr('tooltip', t.attr('translate'));
        });
        $('input[translate]').each(function (r, e) {
          var t = $(e);
          if (!t.hasAttr('tooltip') && !t.hasAttr('tooltip-data-id') && t.hasAttr('placeholder')) {
            t.attr('placeholder', t.attr('translate'));
            t.html('');
          }
        });
        $('textarea[translate]').each(function (r, e) {
          var t = $(e);
          if (!t.hasAttr('tooltip') && !t.hasAttr('tooltip-data-id') && t.hasAttr('placeholder')) {
            t.attr('placeholder', t.attr('translate'));
            t.html('');
          }
        });
      } else if (app_lang && app_lang == 'es' && !check_updater) {
        $('[translate2]').each(function (r, e) {
          var t = $(e);
          if (!t.hasAttr('tooltip') && !t.hasAttr('tooltip-data-id')) {
            t.html(t.attr('translate2'));
          }
        });
        $('[translatesrc2]').each(function (r, e) {
          $(e).attr('src', $(e).attr('translatesrc'))
        });
        $('[translatetippy2]').each(function (r, e) {
          $(e).attr('data-tippy-content', $(e).attr('translatetippy2'))
          tippy('translatetippy');
        });
        $('[translate2][tooltip]').each(function (r, e) {
          var t = $(e);
          t.attr('tooltip', t.attr('translate2'));
        });
        $('input[translate2]').each(function (r, e) {
          var t = $(e);
          if (!t.hasAttr('tooltip') && !t.hasAttr('tooltip-data-id') && t.hasAttr('placeholder')) {
            t.attr('placeholder', t.attr('translate2'));
            t.html('');
          }
        });
        $('textarea[translate]').each(function (r, e) {
          var t = $(e);
          if (!t.hasAttr('tooltip') && !t.hasAttr('tooltip-data-id') && t.hasAttr('placeholder')) {
            t.attr('placeholder', t.attr('translate'));
            t.html('');
          }
        });
      }
    }

    $(() => {
      function open_url(url) {
        if (check_updater) return false;
        if (url == now_page) return false;
        if (url.indexOf('onedash.net') >= 0 || url.indexOf('tg:') >= 0) {
          shell.openExternal(url);
          return false;
        } else {
          now_page = url;
          var block = $('#b-content');
          block.css('opacity', '0');
          load_html(url).then((data) => {
            if (!data.type) return false;
            data = data.data;
            setTimeout(() => {
              block.html(data);
              reload_js();
              if (url == 'accounts') push_accounts();
              if (url == 'pars') push_pars();
              if (url == 'dis') push_dis();
              setTimeout(() => {
                block.css('opacity', '1');
              }, 150);
              if (url == 'search') $('#input-for-search-servers').focus();
            }, 200);
          });
        }
      }
      function open_menu() {
        if ($('#show-menu').val() == 0) {
          $('.menu-bar-1').css('transform', 'translateY(10px) rotate(45deg)');
          if (rand(0, 100) > 50) {
            $('.menu-bar-2').css('transform', 'translateY(0) rotate(-45deg)');
          } else {
            $('.menu-bar-2').css('transform', 'translateY(0) rotate(45deg)');
          }
          $('.menu-bar-2').css('opacity', '0');
          setTimeout(function () {
            $('.menu-bar-2').css('display', 'block');
          }, 450);
          $('.menu-bar-3').css('transform', 'translateY(-10px) rotate(-45deg)');
          $('#show-menu').val('1');
          $('.menu-2').css('display', 'block');
          setTimeout(function () {
            $('.menu-2').css('margin-left', '0');
            $('.menu-2').css('opacity', '1');
          }, 100);
        } else {
          $('.menu-bar-1').css('transform', 'translateY(0) rotate(0)');
          $('.menu-bar-2').css('display', 'block');
          setTimeout(function () {
            $('.menu-bar-2').css('opacity', '1');
            $('.menu-bar-2').css('transform', 'translateY(0) rotate(0)');
          }, 100);
          $('.menu-bar-3').css('transform', 'translateY(0) rotate(0)');
          $('#show-menu').val('0');
          $('.menu-2').css('opacity', '0');
          $('.menu-2').css('margin-left', '-100%');
          setTimeout(function () {
            $('.menu-2').css('display', 'none');
          }, 200);
        }
      }

      function load_html(url) {
        return new Promise((fin, fal) => {
          var file = html_of_urls[url];
          fs.readFile(file, 'utf8', function (err, data) {
            if (err) return fin({ type: false, err: err });
            return fin({
              type: true,
              data: data
            });
          });
        });
      }
      $('#menu-trigger').on('click', function () {
        open_menu();
      });
      $('header a[to]').on('click', function (e) {
        e.preventDefault();
        var u = $(this).attr('to');
        if (u == 'search') return false;
        $('header a[to].sel').removeClass('sel');
        $(this).addClass('sel');
        open_url(u);
        open_menu();
      });
      $('a[to]').on('click', function (e) {
        e.preventDefault();
        var u = $(this).attr('to');
        if (u == 'search') return false;
        open_url(u);
      });
      $('header button[to]').on('click', function (e) {
        e.preventDefault();
        var u = $(this).attr('to');
        if (u == 'search') return false;
        $('header button[to].sel').removeClass('sel');
        $(this).addClass('sel');
        open_url(u);
      });
      $('#home').on('click', function () {
        $('button[to]').removeClass('sel');
        $('button[to="pars"]').addClass('sel');
        open_url('pars');
        if ($('.menu-2').css('display') == 'block') open_menu();
      });
      //now_page = index_page;
      $('button[to="pars"]').addClass('sel');
      open_url(index_page);

      function reload_js() {
        $('[data-toggle="datepicker"]').datepicker({
          autoHide: true,
          startDate: '06.03.2015',
          endDate: new Date().getDate() + '.' + Number(new Date().getMonth() + 1) + '.' + new Date().getFullYear(),
          format: 'dd.mm.yyyy',
          language: "ru-RU"
        });
        $('.modal .close').html('');
        $('.modal .close').addClass('waves-effect');
        reload_translate();
        tippy('.soc-block');
        push_accounts_html();
        setTimeout(() => {
          $('select:not([class="nice_select"])').selectric({
            maxHeight: 200,
            disableOnMobile: false,
            nativeOnMobile: false
          });
        }, 50);
        $('#tags-search').mousewheel(function (e, delta) {
          this.scrollLeft -= (delta * (80));
          e.preventDefault();
        });
        setTimeout(() => {
          update_tooltips()
        }, 1000);
      }
      $('body').on('keyup', '#modal-add-account input[name="name"]', function (e) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code == 13) add_accer()
      });
      $('body').on('keyup', '#modal-add-account input[name="apikey"]', function (e) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code == 13) add_accer()
      });
      $('body').on('keyup', '#modal-add-account input[name="token"]', function (e) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code == 13) add_accer()
      });
      $('body').on('keyup', '#modal-add-account input[name="password"]', function (e) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code == 13) add_accer()
      });
      $('body').on('keyup', '#modal-add-account input[name="login"]', function (e) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code == 13) add_accer()
      });
      function add_accer() {
        var tokens = [];
        if ($('.btn-add-account').hasClass('more')) {
          var val = $('#modal-add-account textarea').val();
          if (!val || val == '') return noty('error', translater(translate.noty.accounts.dont_paste_accs));
          var accounts = explode('\n', val);
          if (!accounts || accounts.length < 1) return noty('error', translater(translate.noty.accounts.dont_paste_accs));
          var rucap = false;
          if (check_rucaptcha) {
            rucap = $('.change-value-parameter-def-s-input[name="apikey"]').val();
            if (!rucap || rucap == '') return noty('error', translater(translate.noty.accounts.rucaptcha_null));
            if (rucap.length != 32) return noty('error', translater(translate.noty.accounts.rucaptcha_wrong));
            if ($('.change-value-parameter-def-s-input[name="apikey"]').val() != store.get('apikey_rucap')) {
              check_rucaptcha_key(rucap).then((check) => {
                logntiwpoer(check);
                if (check.type == 'wrong_key') return noty('error', translater(translate.noty.accounts.rucaptcha_wrong));
                if (check.type == 'balance') return noty('error', translater(translate.noty.accounts.rucaptcha_balance));
                if (!check.type) return noty('error', translater(translate.noty.accounts.rucaptcha_error));
                var accs = [];
                accounts.forEach((e, ind, arr) => {
                  if (e.indexOf(':') < 0 && e != '') {
                    var email = `${randomInteger(1000, 99999999999)}@${randomInteger(1000, 99999999999)}.com`;
                    var pass = `${randomInteger(100000, 99999999999)}`;
                    var token = e;
                  } else {
                    e = e.split(':');
                    var email = e[0];
                    var pass = e[1];
                    var token = false;
                    if (e.length >= 3) token = e[2];
                  }
                  if (token) {
                    tokens.push({
                      email: email,
                      token: token
                    });
                  }
                  if (validateEmail(email) && pass.length > 6) accs.push({ email: email, pass: pass });
                  if (ind == arr.length - 1) {
                    if (!accs || accs.length < 1) return noty('error', translater(translate.noty.accounts.little_paste_accs));
                    $('.btn-add-account').addClass('loading');
                    $('.btn-add-account').html('');
                    setTimeout(() => {
                      var accers = [];
                      accers = get_accounts();
                      if (!accers) accers = [];
                      var count = 0;
                      var success = [];
                      accs.forEach((e, ind, arr) => {
                        var name = e.email;
                        var email = e.email;
                        var pass = e.pass;
                        var check_l = false;
                        if (accers.length > 0) {
                          accers.forEach(function (r) {
                            if (r.login == email || r.name == name) check_l = true;
                          });
                        }
                        if (!check_l && success.indexOf(email) < 0) {
                          count++;
                          success.push(email);
                          accers.push({
                            name: name,
                            login: email,
                            rucaptcha: rucap,
                            pass: pass,
                            status: true,
                            time: new Date().getTime()
                          })
                        }
                        if (ind == arr.length - 1) {
                          store.set('accounts', accers);
                          fat_get_accounts = false;
                          $('.modal').modal('hide');
                          $('#modal-add-account input[name="name"]').val('');
                          $('#modal-add-account input[name="login"]').val('');
                          $('#modal-add-account input[name="password"]').val('');
                          $('#modal-add-account textarea').val('');
                          $('.btn-add-account').removeClass('loading');
                          $('.btn-add-account').html(translater(translate.noty.other.add_high));
                          if (success.length <= 0) return noty('error', translater(translate.noty.accounts.error_add_accs));
                          now_page = false;
                          open_url('accounts');
                          if (tokens.length > 0) {
                            if (fat_get_acc_token) {
                              var accounts_token = fat_get_acc_token;
                            } else {
                              var accounts_token = store.get('accounts_token');
                              fat_get_acc_token = accounts_token;
                              fat_get_acc_token_v = accounts_token;
                            }
                            if (!accounts_token) accounts_token = [];
                            tokens.forEach((e) => {
                              accounts_token.push(e);
                            });
                            store.set('accounts_token', accounts_token);
                            fat_get_acc_token = accounts_token;
                            fat_get_acc_token_v = accounts_token;
                          }
                          return noty('success', translater(translate.noty.accounts.success_add_accs, count));
                        }
                      });
                    }, 1000);
                  }
                });
              }).catch(() => {
                return noty('error', translater(translate.noty.accounts.rucaptcha_error));
              });
            } else {
              var accs = [];
              accounts.forEach((e, ind, arr) => {
                if (e.indexOf(':') < 0 && e != '') {
                  var email = `${randomInteger(1000, 99999999999)}@${randomInteger(1000, 99999999999)}.com`;
                  var pass = `${randomInteger(100000, 99999999999)}`;
                  var token = e;
                } else {
                  e = e.split(':');
                  var email = e[0];
                  var pass = e[1];
                  var token = false;
                  if (e.length >= 3) token = e[2];
                }
                if (token) {
                  tokens.push({
                    email: email,
                    token: token
                  });
                }
                if (validateEmail(email) && pass.length > 6) accs.push({ email: email, pass: pass });
                if (ind == arr.length - 1) {
                  if (!accs || accs.length < 1) return noty('error', translater(translate.noty.accounts.little_paste_accs));
                  $('.btn-add-account').addClass('loading');
                  $('.btn-add-account').html('');
                  setTimeout(() => {
                    var accers = [];
                    accers = get_accounts();
                    if (!accers) accers = [];
                    var count = 0;
                    var success = [];
                    accs.forEach((e, ind, arr) => {
                      var name = e.email;
                      var email = e.email;
                      var pass = e.pass;
                      var check_l = false;
                      if (accers.length > 0) {
                        accers.forEach(function (r) {
                          if (r.login == email || r.name == name) check_l = true;
                        });
                      }
                      if (!check_l && success.indexOf(email) < 0) {
                        count++;
                        success.push(email);
                        accers.push({
                          name: name,
                          login: email,
                          rucaptcha: rucap,
                          pass: pass,
                          status: true,
                          time: new Date().getTime()
                        })
                      }
                      if (ind == arr.length - 1) {
                        store.set('accounts', accers);
                        fat_get_accounts = false;
                        fat_get_accounts = false;
                        fat_get_acc_token = accounts_token;
                        fat_get_acc_token_v = accs; $('.modal').modal('hide');
                        $('#modal-add-account input[name="name"]').val('');
                        $('#modal-add-account input[name="login"]').val('');
                        $('#modal-add-account input[name="password"]').val('');
                        $('#modal-add-account textarea').val('');
                        $('.btn-add-account').removeClass('loading');
                        $('.btn-add-account').html(translater(translate.noty.other.add_high));
                        if (success.length <= 0) return noty('error', translater(translate.noty.accounts.error_add_accs));
                        now_page = false;
                        open_url('accounts');
                        if (tokens.length > 0) {
                          if (fat_get_acc_token) {
                            var accounts_token = fat_get_acc_token;
                          } else {
                            var accounts_token = store.get('accounts_token');
                            fat_get_acc_token = accounts_token;
                            fat_get_acc_token_v = accounts_token;
                          }
                          if (!accounts_token) accounts_token = [];
                          tokens.forEach((e) => {
                            accounts_token.push(e);
                          });
                          store.set('accounts_token', accounts_token);
                          fat_get_acc_token = accounts_token;
                          fat_get_acc_token_v = accounts_token;
                        }
                        return noty('success', translater(translate.noty.accounts.success_add_accs, count));
                      }
                    });
                  }, 1000);
                }
              });
            }
          } else {
            var accs = [];
            accounts.forEach((e, ind, arr) => {
              if (e.indexOf(':') < 0 && e != '') {
                var email = `${randomInteger(1000, 99999999999)}@${randomInteger(1000, 99999999999)}.com`;
                var pass = `${randomInteger(100000, 99999999999)}`;
                var token = e;
              } else {
                e = e.split(':');
                var email = e[0];
                var pass = e[1];
                var token = false;
                if (e.length >= 3) token = e[2];
              }
              if (token) {
                tokens.push({
                  email: email,
                  token: token
                });
              }
              if (validateEmail(email) && pass.length > 6) accs.push({ email: email, pass: pass });
              if (ind == arr.length - 1) {
                if (!accs || accs.length < 1) return noty('error', translater(translate.noty.accounts.little_paste_accs));
                $('.btn-add-account').addClass('loading');
                $('.btn-add-account').html('');
                setTimeout(() => {
                  var accers = [];
                  accers = get_accounts();
                  if (!accers) accers = [];
                  var count = 0;
                  var success = [];
                  accs.forEach((e, ind, arr) => {
                    var name = e.email;
                    var email = e.email;
                    var pass = e.pass;
                    var check_l = false;
                    if (accers.length > 0) {
                      accers.forEach(function (r) {
                        if (r.login == email || r.name == name) check_l = true;
                      });
                    }
                    if (!check_l && success.indexOf(email) < 0) {
                      count++;
                      success.push(email);
                      accers.push({
                        name: name,
                        login: email,
                        rucaptcha: rucap,
                        pass: pass,
                        status: true,
                        time: new Date().getTime()
                      })
                    }
                    if (ind == arr.length - 1) {
                      store.set('accounts', accers);
                      fat_get_accounts = false;
                      $('.modal').modal('hide');
                      $('#modal-add-account input[name="name"]').val('');
                      $('#modal-add-account input[name="login"]').val('');
                      $('#modal-add-account input[name="password"]').val('');
                      $('#modal-add-account textarea').val('');
                      $('.btn-add-account').removeClass('loading');
                      $('.btn-add-account').html(translater(translate.noty.other.add_high));
                      if (success.length <= 0) return noty('error', translater(translate.noty.accounts.error_add_accs));
                      now_page = false;
                      open_url('accounts');
                      if (tokens.length > 0) {
                        if (fat_get_acc_token) {
                          var accounts_token = fat_get_acc_token;
                        } else {
                          var accounts_token = store.get('accounts_token');
                          fat_get_acc_token = accounts_token;
                          fat_get_acc_token_v = accounts_token;
                        }
                        if (!accounts_token) accounts_token = [];
                        tokens.forEach((e) => {
                          accounts_token.push(e);
                        });
                        store.set('accounts_token', accounts_token);
                        fat_get_acc_token = accounts_token;
                        fat_get_acc_token_v = accounts_token;
                      }
                      return noty('success', translater(translate.noty.accounts.success_add_accs, count));
                    }
                  });
                }, 500);
              }
            });
          }
        } else {
          if ($('.btn-add-account').hasClass('loading')) return false;
          var name = $('#modal-add-account input[name="name"]').val();
          var login = $('#modal-add-account input[name="login"]').val();
          var pass = $('#modal-add-account input[name="password"]').val();
          if (!name || name == '') return noty('error', translater(translate.noty.accounts.name));
          if (!login || login == '') return noty('error', translater(translate.noty.accounts.email));
          if (!pass || pass == '') return noty('error', translater(translate.noty.accounts.pass));
          if (!validate_email(login)) return noty('error', translater(translate.noty.accounts.wrong_email));
          if (name.indexOf('"') >= 0 || name.indexOf('`') >= 0 || name.indexOf("'") >= 0) return noty('error', translater(translate.noty.accounts.wrong_name));
          var token = false;
          if ($('#token-acc-check').prop('checked')) {
            token = $('.change-value-parameter-def-s-input[name="token"]').val();
            if (!token || token == '') return noty('error', translater(translate.noty.other.don_s_a_t));
          }
          if (store.has('accounts')) {
            var check_l = false;
            var check = store.get('accounts');
            if (check.length < 1) return;
            check.forEach(function (e) {
              if (e.name == name) {
                check_l = true;
                return noty('error', translater(translate.noty.accounts.too_name));
              }
              if (e.login == login) {
                check_l = true;
                return noty('error', translater(translate.noty.accounts.too_email));
              }
            });
          }
          if (check_l) return false;
          var rucap = false;
          if (check_rucaptcha) {
            rucap = $('.change-value-parameter-def-s-input[name="apikey"]').val();
            if (!rucap || rucap == '') return noty('error', translater(translate.noty.accounts.rucaptcha_null));
            if (rucap.length != 32) return noty('error', translater(translate.noty.accounts.rucaptcha_wrong));
            if (store.has('apikey_rucap') && store.get('apikey_rucap') == rucap) {
              var btn = $('.btn-add-account');
              btn.html('');
              btn.addClass('loading');
              $('.modal').modal('hide');
              btn.removeClass('loading');
              btn.html(translater(translate.noty.other.add_high));
              noty('success', translater(translate.noty.accounts.success_add));
              $('#modal-add-account input[name="name"]').val('');
              $('#modal-add-account input[name="login"]').val('');
              $('#modal-add-account input[name="password"]').val('');
              if (!store.has('accounts')) {
                var accs = [{
                  name: name,
                  login: login,
                  rucaptcha: rucap,
                  pass: pass,
                  status: true,
                  time: new Date().getTime()
                }];
              } else {
                var accs = store.get('accounts');
                accs.push({
                  name: name,
                  login: login,
                  pass: pass,
                  rucaptcha: rucap,
                  status: true,
                  time: new Date().getTime()
                });
              }
              store.set('accounts', accs);
              fat_get_accounts = accs;
              now_page = false;
              open_url('accounts');
              if (token) {
                if (store.has('accounts_token')) {
                  if (fat_get_acc_token) {
                    var accounts_token = fat_get_acc_token;
                  } else {
                    var accounts_token = store.get('accounts_token');
                    fat_get_acc_token = accounts_token;
                    fat_get_acc_token_v = accounts_token;
                    setTimeout(() => {
                      fat_get_acc_token = false;
                    }, 5 * 1000);
                  }
                } else {
                  var accounts_token = [];
                }
                accounts_token.push({
                  email: login,
                  token: token
                });
                store.set('accounts_token', accounts_token);
                fat_get_acc_token = accounts_token;
                fat_get_acc_token_v = accounts_token;
              }
            } else {
              noty('warning', translater(translate.noty.accounts.rucaptcha_loading));
              check_rucaptcha_key(rucap).then((check) => {
                logntiwpoer(check);
                if (check.type == 'wrong_key') return noty('error', translater(translate.noty.accounts.rucaptcha_wrong));
                if (check.type == 'balance') return noty('error', translater(translate.noty.accounts.rucaptcha_balance));
                if (!check.type) return noty('error', translater(translate.noty.accounts.rucaptcha_error));
                var btn = $('.btn-add-account');
                btn.html('');
                btn.addClass('loading');
                store.set('apikey_rucap', rucap);
                $('.modal').modal('hide');
                btn.removeClass('loading');
                btn.html(translater(translate.noty.other.add_high));
                noty('success', translater(translate.noty.accounts.success_add));
                $('#modal-add-account input[name="name"]').val('');
                $('#modal-add-account input[name="login"]').val('');
                $('#modal-add-account input[name="password"]').val('');
                if (!store.has('accounts')) {
                  var accs = [{
                    name: name,
                    login: login,
                    rucaptcha: rucap,
                    pass: pass,
                    status: true,
                    time: new Date().getTime()
                  }];
                } else {
                  var accs = store.get('accounts');
                  accs.push({
                    name: name,
                    login: login,
                    pass: pass,
                    rucaptcha: rucap,
                    status: true,
                    time: new Date().getTime()
                  });
                }
                store.set('accounts', accs);
                fat_get_accounts = accs;
                now_page = false;
                open_url('accounts');
                if (token) {
                  if (store.has('accounts_token')) {
                    if (fat_get_acc_token) {
                      var accounts_token = fat_get_acc_token;
                    } else {
                      var accounts_token = store.get('accounts_token');
                      fat_get_acc_token = accounts_token;
                      fat_get_acc_token_v = accounts_token;
                      setTimeout(() => {
                        fat_get_acc_token = false;
                      }, 5 * 1000);
                    }
                  } else {
                    var accounts_token = [];
                  }
                  accounts_token.push({
                    email: login,
                    token: token
                  });
                  store.set('accounts_token', accounts_token);
                  fat_get_acc_token = accounts_token;
                  fat_get_acc_token_v = accounts_token;
                }
              }, (r) => {
                logntiwpoer('r: ' + r);
                return noty('error', translater(translate.noty.accounts.rucaptcha_error));
              })
            }
          } else {
            var btn = $('.btn-add-account');
            btn.html('');
            btn.addClass('loading');
            $('.modal').modal('hide');
            btn.removeClass('loading');
            btn.html(translater(translate.noty.other.add_high));
            noty('success', translater(translate.noty.accounts.success_add));
            $('#modal-add-account input[name="name"]').val('');
            $('#modal-add-account input[name="login"]').val('');
            $('#modal-add-account input[name="password"]').val('');
            if (!store.has('accounts')) {
              var accs = [{
                name: name,
                login: login,
                pass: pass,
                rucaptcha: rucap,
                status: true,
                time: new Date().getTime()
              }];
            } else {
              var accs = store.get('accounts');
              accs.push({
                name: name,
                login: login,
                pass: pass,
                rucaptcha: rucap,
                status: true,
                time: new Date().getTime()
              });
            }
            store.set('accounts', accs);
            fat_get_accounts = accs;
            now_page = false;
            open_url('accounts');
            if (token) {
              if (store.has('accounts_token')) {
                if (fat_get_acc_token) {
                  var accounts_token = fat_get_acc_token;
                } else {
                  var accounts_token = store.get('accounts_token');
                  fat_get_acc_token = accounts_token;
                  fat_get_acc_token_v = accounts_token;
                  setTimeout(() => {
                    fat_get_acc_token = false;
                  }, 5 * 1000);
                }
              } else {
                var accounts_token = [];
              }
              accounts_token.push({
                email: login,
                token: token
              });
              store.set('accounts_token', accounts_token);
              fat_get_acc_token = accounts_token;
              fat_get_acc_token_v = accounts_token;
            }
          }
        }
      }
      $('body').on('click', '.btn-add-account', function () {
        add_accer();
      });
    });

    var fat_get_timeout_for_spam = false;

    function get_timeout_for_spam() {
      if (!localStorage['select-timeout']) {
        return false;
      } else {
        if (fat_get_timeout_for_spam) {
          var timeout = fat_get_timeout_for_spam;
        } else {
          var timeout = JSON.parse(localStorage['select-timeout'])
          fat_get_timeout_for_spam = timeout;
          setTimeout(() => {
            fat_get_timeout_for_spam = false;
          }, 15 * 1000);
        }
        logntiwpoer(timeout)
        var secs = timeout * 60;
        if (secs > 30) {
          var text = timeout + ' min';
        } else {
          timeout = 30;
          var text = timeout + ' ' + translater(translate.noty.other.secs);
        }
        return { sec: secs, text: text };
      }
    }

    $(document).ready(() => {
      setTimeout(() => {
        if (!tmp_data['feedback-check'] && fs.existsSync(`${__dirname}/favicon.ico`) && fs.statSync(`${__dirname}/favicon.ico`).birthtimeMs < new Date().getTime() - ((86400 * 3) * 1000)) $('#block-feedback').addClass('active');
      }, 5000);
      $('body').on('click', '#block-search-accs i', function () {
        if ($('#block-search-accs').hasClass('active')) {
          $('#block-search-accs').removeClass('active');
        } else {
          $('#block-search-accs').addClass('active');
        }
      });
      $('body').on('keyup', '#block-search-accs input', function () {
        var val = $(this).val();
        if (val == '') return $('#table-accounts tbody tr').css('display', '');
        var check = false;
        $('#table-accounts tbody tr').css('display', 'none');
        $('#table-accounts tbody tr').each(function () {
          var t = $(this);
          if (t.find('name').text().indexOf(val) >= 0) t.css('display', '');
        });
      });
      $('body').on('change', '#autoanswer-check', function () {
        if ($(this).prop('checked')) {
          $('#block-autoanswer').addClass('active');
          setTimeout(() => {
            $('#block-autoanswer').css('opacity', 1);
          }, 100);
          if ($('#answer-rules-enable').prop('checked')) answer_scripts_block();
        } else {
          $('#block-autoanswer').css('opacity', '');
          setTimeout(() => {
            $('#block-autoanswer').removeClass('active');
          }, 50);
        }
        update_tmp('autoanswer-check', $(this).prop('checked'));
      });
      $('body').attr('lang', app_lang);
      $('body').on('click', '.open-in-browser', function () {
        shell.openExternal($(this).attr('url'));
      });
      $('body').on('click', '#open-reference', function () {
        $('.modal').modal('hide');
        $('#modal-reference').modal('show');
      });
      logntiwpoer(check_updater)
      setTimeout(() => {
        if (!localStorage['select-timeout'] && !localStorage['new_timeout_check']) {
          localStorage.setItem('select-timeout', JSON.stringify(5))
          localStorage.setItem('new_timeout_check', JSON.stringify(true))
        }
      }, 5 * 1000)
      $('body').on('click', '#save-edit-dis-channels', function () {
        var pars = store.get('last_pars_channels');
        if (pars.channels.length < 1) return noty('error', pop_error);
        var new_p = [];
        pars.channels.forEach(e => {
          if (delete_channels.indexOf(e.id) < 0) new_p.push(e);
        });
        var data = {
          guild: pars.guild,
          channels: new_p,
          verify: pars.verify
        }
        var count = data.channels.length;
        if (count < 1) return noty('error', translater(translate.noty.pars.little_count_c));
        count = count + NumberEnd(count, translater(translate.noty.number_end.channels));
        $('#count-of-pars-dis-channels').css('opacity', '0');
        setTimeout(() => {
          $('#count-of-pars-dis-channels').html(count);
          setTimeout(() => {
            $('#count-of-pars-dis-channels').css('opacity', '');
          }, 50);
        }, 150);
        noty('success', translater(translate.noty.pars.update_u_list));
        delete_channels = [];
        last_pars_data_channels = data;
        setTimeout(() => {
          store.set('last_pars_channels', data);
        }, 500);
      });
      selenium_start();
      if (store.has('proxy_type')) $('#select-type-proxy').val(store.get('proxy_type'))
      $('.nice_select').niceSelect();
      $('body').on('change', '#add-to-friend-checkbox', function () {
        update_tmp('add_to_friend_checkbox', $('#add-to-friend-checkbox').prop('checked'))
      });
      $('body').on('change', '#delete-messages-dis', function () {
        update_tmp('delete-messages-dis', $(this).val())
      });
      $('body').on('change', '#check-delete-messages-dis', function () {
        var v = $(this).prop('checked')
        if (v) {
          $('#delete-messages-dis-block').addClass('active');
        } else {
          $('#delete-messages-dis-block').removeClass('active');
        }
        update_tmp('check-delete-messages-dis', v)
      });
      $('body').on('change', '#delete-messages-dis-channels', function () {
        update_tmp('delete-messages-dis-channels', $(this).val())
      });
      $('body').on('keyup', '#delete-messages-dis-channels', function () {
        var val = parseInt($(this).val());
        if (isNaN(val)) return;
        $('[for="delete-messages-dis-channels"] pro').text(NumberEnd(val, translater(translate.noty.number_end.secs)));
      })
      $('body').on('keyup', '#delete-messages-dis', function () {
        var val = parseInt($(this).val());
        if (isNaN(val)) return;
        $('[for="delete-messages-dis"] pro').text(NumberEnd(val, translater(translate.noty.number_end.secs)));
      })
      $('body').on('change', '#check-delete-messages-dis-channels', function () {
        var v = $(this).prop('checked')
        if (v) {
          $('#delete-messages-dis-block-channels').addClass('active');
        } else {
          $('#delete-messages-dis-block-channels').removeClass('active');
        }
        update_tmp('check-delete-messages-dis-channels', v)
      });
      $('body').on('click', '.open-logs-from-spam', function () {
        var id = $(this).attr('spam-id');
        get_list_logs(id).then((logs) => {
          if (!logs.type) return noty('error', pop_error);
          var modal = $('#modal-logs-spam');
          var list = modal.find('.list-logs-spam');
          list.html('');
          logs = logs.data.logs;
          if (logs.length <= 0) return noty('warning', translater(translate.noty.dis.emped_logs));
          var count = logs.length;
          setTimeout(() => {
            get_count_messages_from_spam(id).then((success) => {
              if (!success.type) return false;
              update_count_logs(count, success.count);
            });
          }, 500);
          logs.forEach((e, ind, arr) => {
            if (e.type != 'timeout') {
              if (e.avatar) {
                var avatar = e.avatar;
                if (avatar.indexOf('assets') >= 0 || avatar.indexOf('null.png' || !avatar) >= 0) avatar = consts.app_data.undefind_avatar;
              } else {
                var avatar = consts.app_data.undefind_avatar;
              }
              var username = e.user;
              var type = e.type;
              if (type == 'send') {
                var v = `<div class="log">${translater(translate.noty.logs.success_send)}</div><i class="fa fa-check-circle success"></i>`;
              } else if (type == 'not_found') {
                var v = `<div class="log">${translater(translate.noty.logs.user_not_found)}</div><i class="fa fa-times-circle error"></i>`;
              } else {
                var v = `<div class="log">${translater(translate.noty.logs.dont_send)}</div><i class="fa fa-times-circle error"></i>`;
              }
              var html = `<div class="log-spam" style="margin-top: -65px;opacity:0;transition: .05s;">
                             <div class="avatar">
                               ` + /* <img src="${avatar}"> */  `
                             </div>
                             <div class="name" title="${username}">${username}</div>
                             ${v}
                           </div>`;
              list.prepend(html);
              var new_log = $('#modal-logs-spam .modal-body .list-logs-spam .log-spam:first-child');
            } else if (e.type == 'timeout') {
              if (e.timeout) {
                var html = `<div class="timeout" style="margin-top: -35px;opacity:0;">Timeout (${e.timeout})</div>`;
              } else {
                var html = `<div class="timeout" style="margin-top: -35px;opacity:0;">Timeout (5 ${translater(translate.noty.logs.min)})</div>`;
              }
              list.prepend(html);
              var new_log = $('#modal-logs-spam .modal-body .list-logs-spam .timeout:first-child');
            }
            new_log.css('margin-top', '');
            new_log.css('opacity', '');
            if (ind == arr.length - 1) {
              modal.attr('spam-id', id);
              $('.modal').modal('hide');
              modal.modal('show');
            }
          });
        });
      });

      $('body').on('click', '.open-account-i', function () {
        var acc = $(this).attr('hash');
        var accer = get_account(acc);
        login_discord(accer.login, accer.pass, false, accer.rucaptcha, get_acc_token(accer.login));
      });
      var onclick = [];

      $('body').on('click', '[onclick]', function () {
        var f = $(this).attr('onclick');
        if (onclick[f]) return false;
        onclick[f] = true;
        setTimeout(() => {
          delete onclick[f];
        }, 3);
        eval($(this).attr('onclick'));
      });
      $('body').on('change', '#token-acc-check', function () {
        if (!$(this).prop('checked')) return false;
        $('.change-value-parameter-def-s-os[name="Token"]').addClass('active');
        setTimeout(() => {
          $('.change-value-parameter-def-s-input[name="token"]').focus();
        }, 150);
      });
      $('body').on('click', '#turn-on-rucaptcha', () => {
        check_rucaptcha = true;
        $('.change-value-parameter-def-s-os[name="Rucaptcha"]').addClass('active');
        setTimeout(() => {
          $('.change-value-parameter-def-s-input[name="apikey"]').focus();
        }, 150);
      });
      $('body').on('mousedown', '.dThemeSwitch', function () {
        var check = $(this).find('input').prop('checked');
        if (check) $(this).find('.slider').addClass('active_e');
        $(this).find('.slider').addClass('active');
      });
      $('body').on('mouseup', '.dThemeSwitch', function () {
        if ($(this).find('.slider').hasClass('active_e')) $(this).find('.slider').removeClass('active_e');
        $(this).find('.slider').removeClass('active');
      });
      $('body').on('mouseout', '.dThemeSwitch', function () {
        $(this).find('.slider').removeClass('active');
      });
      var check_noty_ext = false;
      function update_online() {
        // Don't even try.
        return;
      }
      setTimeout(() => {
        update_online();
      }, 7500);
      setInterval(() => {
        update_online()
      }, 210 * 1000);
      $('.footer-version version').html(app_version);
      setTimeout(function () {
        if (check_updater) return false;
        $('#loader').css('opacity', '0');
        setTimeout(function () {
          setTimeout(() => {
            logntiwpoer(tmp_data['modal_media']);
            if (!tmp_data['modal_media']) {
              $('.modal').modal('hide')
              $('#modal-action-one').modal('show');
              $('body').on('hidden.bs.modal', '#modal-action-one', function () {
                update_tmp('modal_media', true);
              });
            } else {
              check_upgrade_files()
            }
          }, 500);
          $('#loader').remove();
          setTimeout(() => {
            if (store.has('proxys') && !process.env.proxys) process.env.proxys = JSON.stringify(store.get('proxys'));
            if (store.has('proxy_type') && !process.env.proxy_type) process.env.proxy_type = JSON.stringify(store.get('proxy_type'));
            process.setMaxListeners(10000);
          }, 250);
        }, 200);
      }, 300);
      Waves.attach('.btn-gg');
      Waves.init({
        duration: 500
      });
      // let rippleElements = document.getElementsByClassName("mripple");
      // for(var i = 0; i < rippleElements.length; i++) {
      //   rippleElements[i].onmousedown = function(e) {
      //     var that = $(this);
      //     let X = e.pageX - this.offsetLeft;
      //     let Y = e.pageY - this.offsetTop;
      //     let rippleDiv = document.createElement("div");
      //     rippleDiv.classList.add('ripple');
      //     rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
      //     let customColor = this.getAttribute('ripple-color');
      //     if(customColor) rippleDiv.style.background = customColor;
      //     this.appendChild(rippleDiv);
      //     setTimeout(() => {
      //       rippleDiv.parentElement.removeChild(rippleDiv);
      //     }, 1500);
      //   }
      // }
      // function update_tags_for_search() {
      //   return false;
      //   setTimeout(() => {
      //     var file = `${__dirname}/data/tags_search.json`;
      //     var params = {
      //       url: 'https://disboard.org/site/suggestion?q=',
      //       method: 'GET',
      //       headers: {
      //         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
      //         'cache-control': 'max-age=0',
      //         'accept-language': 'ru-RU,ru;q=0.9,ru-RU;q=0.8,en;q=0.7',
      //         'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
      //       },
      //       //proxy: 'http://'+proxy
      //     }
      //     req(params, function (err, response, body) {
      //       if (err || !response || !body) return logntiwpoer('Ошибка при попытке обновления тегов! err: '+err+' body: '+body.substr(0, 200));
      //       body = JSON.parse(body);
      //       if (body.length < 1) return logntiwpoer('Не удалось обновить теги для поиска! Не получили теги с сайта!');
      //       fs.writeFile(file, JSON.stringify(body), (err) => {
      //         if (err) return logntiwpoer('Не удалось обновить теги для поиска! Ошибка при записи тегов в файл!');
      //       });
      //     });
      //   }, 10 * 1000);
      // }
      // if (!fs.existsSync(`${__dirname}/data/tags_search.json`)) {
      //   update_tags_for_search()
      // } else {
      //   fs.stat(`${__dirname}/data/tags_search.json`, function(err, stat){
      //     if (err) return false;
      //     var time = new Date(stat.ctime).getTime() + 43200000;
      //     var now = new Date().getTime();
      //     if (!time || time <= now) update_tags_for_search()
      //   });
      // }
      $('body').on('click', '.modal-close-btn', function () {
        $('.modal').modal('hide');
      });
      //  $('body').on('click', '#edit-my-black-list', function () {
      //    if (fat_black_list_users && fat_black_list_users.length > 0) {
      //      var black_list_users = fat_black_list_users;
      //    } else {
      //      var black_list_users = store.get('black_list_users');
      //    }
      //    if (!black_list_users || black_list_users.length <= 0) return noty('error', translater(translate.noty.other.little_black_list));
      //    $('.modal').modal('hide');
      //    var s = [];
      //    $('#modal-edit-black-list textarea').val('');
      //    black_list_users.forEach((e) => {
      //      if (e.length != (39 + 1) && !s[e]) {
      //        s[e] = true;
      //        var val = $('#modal-edit-black-list textarea').val();
      //        val += e+'\n';
      //        $('#modal-edit-black-list textarea').val(val);
      //      }
      //    });
      //    $('#modal-edit-black-list').modal('show');
      //    $('#modal-edit-black-list textarea').css('height', '400px');
      //  });
      $('body').on('change', '#export-my-black-list', function () {
        setTimeout(() => {
          $('#export-my-black-list').val('');
        }, 300);
        var file = this.files;
        if (!file || file.length < 1) return;
        file = file[0];
        if (fat_black_list_users && fat_black_list_users.length > 0) {
          var black_list_users = fat_black_list_users;
        } else {
          var black_list_users = store.get('black_list_users');
        }
        if (!black_list_users || black_list_users.length <= 0) return noty('error', translater(translate.noty.other.little_black_list));
        var val = '';
        black_list_users.forEach(e => {
          val += `${e}\r\n`;
        });
        try {
          fs.writeFileSync(file.path, val, 'utf-8');
          noty('success', translater(translate.noty.other.success_export));
        } catch (err) {
          return noty('error', pop_error);
        }
      })
      $('body').on('change', '#import-my-black-list', function () {
        try {
          setTimeout(() => {
            $('#import-my-black-list').val('');
          }, 300);
          var file = this.files;
          if (!file || file.length < 1) return;
          file = file[0];
          var data = fs.readFileSync(file.path, 'utf8');
          if (!data || data.length < 1) return noty('error', pop_error);
          if (fat_black_list_users && fat_black_list_users.length > 0) {
            var all = fat_black_list_users;
          } else {
            var all = store.get('black_list_users');
          }
          if (!all) var all = [];
          data.split('\n').forEach(e => {
            e = e.replace('\r', '');
            e = e.replace('\n', '');
            if (all.indexOf(e) < 0) all.push(e);
          })
          fat_black_list_users = all;
          store.set('black_list_users', all);
          noty('success', translater(translate.noty.other.success_import))
        } catch (err) {
          return noty('error', pop_error);
        }
      })
      function clearBlacklist() {
        fat_black_list_users = false;
        store.delete('black_list_users');
        noty('success', translater(translate.noty.other.success_clear_blacklist))
        $('.modal').modal('hide');
      }
      $('body').on('keyup', function (e) {
        if (!$('#modal-clear-blacklist').hasClass('in')) return;
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code != 13) return;
        clearBlacklist();
      });
      $('body').on('click', '#clear-blacklist', clearBlacklist)
      $('body').on('click', '#save-edit-black-list', function () {
        var val = $('#modal-edit-black-list textarea').val();
        if (!val || val == '') return noty('error', translater(translate.noty.other.error_black_list));
        var list = explode('\n', val);
        if (list.length <= 0) return noty('error', translater(translate.noty.other.error_black_list));
        var new_l = [];
        var check = [];
        list.forEach((e, ind, arr) => {
          if (e != '' && e != '\n' && e != '\r' && !check[e]) {
            check[e] = true;
            new_l.push(e);
          }
          if (ind == arr.length - 1) {
            store.set('black_list_users', new_l);
            noty('success', translater(translate.noty.pars.update_u_list));
            $('.modal').modal('hide');
          }
        })
      });
    });

    $(document).ready(() => {
      $('body').on('click', '.reference-block', function (e) {
        if (e.target.className.indexOf('clicker') < 0) return;
        var that = $(this);
        if (!that.hasClass('active')) {
          var old = [];
          $('.reference-block.active').each(function () {
            old.push($(this));
          });
          old.forEach(e => {
            e.removeClass('active');
            e.find('var').css('height', 0);
            setTimeout(() => {
              e.find('var').css('height', '');
              e.find('var').css('display', '');
            }, 200)
          })
          var h = that.find('var').height();
          that.find('var').css('height', 0);
          that.find('var').css('display', 'block');
          setTimeout(() => {
            h = h + (h * 0.15);
            that.find('var').css('height', `${h}px`);
            that.addClass('active');
          }, 50)
        } else {
          $('.reference-block').removeClass('active');
          that.find('var').css('height', 0);
          setTimeout(() => {
            $('.reference-block var').css('display', '');
            $('.reference-block var').css('height', '');
          }, 200);
        }
      });
      $('body').on('keyup', '#serch-reference-input', delay2(function () {
        var val = $(this).val().toLowerCase();
        if (!val || val == '') {
          var old = [];
          check = true;
          $('.reference-block.active').each(function () {
            old.push($(this));
          });
          old.forEach(e => {
            e.removeClass('active');
            e.find('var').css('height', 0);
            setTimeout(() => {
              e.find('var').css('height', '');
              e.find('var').css('display', '');
            }, 200)
          })
          return;
        }
        var check = false;
        var ind = 0;
        $('.reference-block').each(function () {
          var that = $(this);
          if (that.find('span').html().toLowerCase().indexOf(val) >= 0 && !check) {
            if (that.hasClass('active')) return;
            var old = [];
            check = true;
            $('.reference-block.active').each(function () {
              old.push($(this));
            });
            old.forEach(e => {
              e.removeClass('active');
              e.find('var').css('height', 0);
              setTimeout(() => {
                e.find('var').css('height', '');
                e.find('var').css('display', '');
              }, 200)
            })
            var h = that.find('var').height();
            that.find('var').css('height', 0);
            that.find('var').css('display', 'block');
            setTimeout(() => {
              h = h + (h * 0.15);
              that.find('var').css('height', `${h}px`);
              that.addClass('active');
            }, 50)
            return;
          }
          if (that.find('var').html().toLowerCase().indexOf(val) >= 0 && !check) {
            if (that.hasClass('active')) return;
            var old = [];
            check = true;
            $('.reference-block.active').each(function () {
              old.push($(this));
            });
            old.forEach(e => {
              e.removeClass('active');
              e.find('var').css('height', 0);
              setTimeout(() => {
                e.find('var').css('height', '');
                e.find('var').css('display', '');
              }, 200)
            })
            var h = that.find('var').height();
            that.find('var').css('height', 0);
            that.find('var').css('display', 'block');
            setTimeout(() => {
              h = h + (h * 0.15);
              that.find('var').css('height', `${h}px`);
              that.addClass('active');
            }, 50)
            return;
          }
          ind++;
        })
      }, 150))
    })

    var lastChecked_checkbox_vze = false;

    $('body').on('click', '.list-roles .role-block', function (e) {
      var that = $(this);
      var checkboxes = $('.list-roles .role-block input');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_vze) lastChecked_checkbox_vze = that.find('input[type="checkbox"]');
        lastChecked_checkbox_vze.checked = !that.find('input[type="checkbox"]').prop('checked');
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_vze);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_vze.checked);
        lastChecked_checkbox_vze = $('.list-roles .role-block input[type="checkbox"]')[start];
        update_counts_list_roles()
      } else {
        $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
        lastChecked_checkbox_vze = that.find('input[type="checkbox"]');
        update_counts_list_roles()
      }
    })

    $('body').on('click', '#select-all-pars-roles', function () {
      if ($(this).hasClass('active')) {
        $('#modal-edit-roles-list .role-block input').prop('checked', false);
        update_counts_list_roles()
        $(this).removeClass('active');
      } else {
        $('#modal-edit-roles-list .role-block input').prop('checked', true);
        update_counts_list_roles()
        $(this).addClass('active');
      }
    });

    $('body').on('click', '.list-roles input', function () {
      $(this).prop('checked', !$(this).prop('checked'));
      update_counts_list_roles()
    })

    $('body').on('click', '.action-roles-list-edit-checkbox span:last-child', function () {
      $('.list-roles input').prop('checked', false)
      update_counts_list_roles()
    })

    $('body').on('click', '.action-roles-list-edit-checkbox span:first-child', function () {
      var val = ''
      last_roles_data.forEach(e => {
        val += `${e.name}\n`;
      });
      var b = $('.copy-roles-pars textarea');
      b.val(val);
      $('.search-roles input').val('');
      $('.list-roles').addClass('hide');
      setTimeout(() => {
        $('.go-back-btn-roles-list-edit').addClass('active');
        b.addClass('active');
      }, 180);
    });

    $('body').on('click', '.go-back-btn-roles-list-edit', function () {
      var t = $(this);
      $('.copy-roles-pars textarea').removeClass('active');
      setTimeout(() => {
        t.removeClass('active');
        $('.list-roles').removeClass('hide');
      }, 300);
    });

    $('body').on('keyup', '.search-roles input', function () {
      var val = $(this).val().toLocaleLowerCase();
      if (!val || val == '') {
        $('.list-roles .role-block.search').remove();
        $('.list-roles .role-block').css('display', '');
        return;
      }
      $('.list-roles .role-block.search').remove();
      $('.list-roles .role-block').css('display', 'none');
      var data = [];
      last_roles_data.forEach(e => {
        if (e.name.toLocaleLowerCase().indexOf(val) >= 0) data.push(e);
      });
      if (data.length < 1) return;
      data.forEach(e => {
        var checked = '';
        if ($('.role-block input[hash="' + sha1(e.name) + '"]').prop('checked')) checked = ' checked';
        var html = `<div class="role-block search">
                       <p style="color:${e.hex};">${e.name}</p>
                       <div class="checkbox">
                         <input type="checkbox" hash="${sha1(e.name)}"${checked}>
                       </div>
                     </div>`;
        $('.list-roles').prepend(html);
      })
    });

    var last_del_roles = [];

    $('body').on('click', '.action-roles-list-edit span', function () {
      var del = [];
      $('.list-roles .role-block').each(function () {
        var check = $(this).find('input').prop('checked');
        var hash = $(this).find('input').attr('hash');
        if (check) {
          if (del.indexOf(hash) < 0) del.push(hash);
          $(this).find('input').prop('checked', false);
          var block = $(this);
          block.css('opacity', '0');
          block.css('transform', 'translateY(-100px)');
          block.css('height', '0');
          block.css('margin-bottom', '-20px');
          setTimeout(() => {
            block.remove();
          }, 150);
        }
      });
      if (del.length < 1) return noty('error', translater(translate.noty.other.min_del_l));
      del.forEach(e => {
        if (last_del_roles.indexOf(e) < 0) last_del_roles.push(e);
      });
      update_counts_list_roles();
      $('.save-btn-roles-list-edit').addClass('active');
      $('.list-roles .role-block.search').remove();
      $('.list-roles .role-block').css('display', '');
      $('.search-roles input').val('');
    });

    $('body').on('click', '.save-btn-roles-list-edit span', function () {
      var new_p = [];
      last_roles_data.forEach(e => {
        if (last_del_roles.indexOf(sha1(e.name)) < 0) new_p.push(e);
      })
      if (new_p.length < 1) return noty('error', translater(translate.noty.pars.little_list));
      var invite = $('#edit-pars-roles').attr('invite');
      last_roles_data = new_p;
      last_del_roles = [];
      update_counts_list_roles();
      $('#roles-count-pars').html(`${last_roles_data.length} ${NumberEnd(last_roles_data.length, translater(translate.noty.number_end.roles))}`);
      $('.form-check-priv').css('height', $('.form-check-priv').get(0).scrollHeight + 'px');
      $('.save-btn-roles-list-edit').removeClass('active');
      noty('success', translater(translate.noty.pars.update_u_list));
      setTimeout(() => {
        store.set(`last_pars_roles_${invite}`, last_roles_data);
      }, 2 * 1000)
    });

    $('body').on('click', '#edit-pars-roles', function () {
      $('.search-roles input').val('');
      $('.list-roles').html('');
      $('.list-roles').removeClass('hide');
      $('.copy-roles-pars textarea').removeClass('active');
      update_counts_list_roles();
      last_roles_data.forEach(e => {
        var html = `<div class="role-block">
                       <p style="color:${e.hex};">${e.name}</p>
                       <div class="checkbox">
                         <input type="checkbox" hash="${sha1(e.name)}">
                       </div>
                     </div>`;
        $('.list-roles').prepend(html);
      });
      $('.save-btn-roles-list-edit').removeClass('active');
      $('.modal').modal('hide');
      $('#modal-edit-roles-list').modal('show')
    });

    function update_counts_list_roles() {
      var selected = $('.list-roles .role-block input:checked').length;
      $('.count-roles-list-edit-checkbox span:first-child').html(`${translater(translate.noty.other.selected)}: ${selected}`);
      if (selected > 0) {
        $('.action-roles-list-edit').addClass('active');
      } else {
        $('.action-roles-list-edit').removeClass('active');
      }
      var all = last_roles_data.length;
      $('.count-roles-list-edit-checkbox span:last-child').html(`${translater(translate.noty.other.total)}: ${all}`);
    }

    function clear_updates() {
      store.delete('update_' + store.get('app_version'));
      store.delete('app_version');
      setTimeout(() => {
        restart_window()
      }, 500);
    }

    $('body').on('click', '#clear_updates', function () {
      clear_updates()
    });

    function update_tmp(type, data) {
      tmp_data[type] = data;
      localStorage.setItem('tmp', JSON.stringify(tmp_data));
    }

    $('body').on('change', '#limit-msgs-checkbox-channels', function () {
      var val = $(this).prop('checked');
      if (val) {
        $('#limit-msgs-channels').addClass('active');
      } else {
        $('#limit-msgs-channels').removeClass('active');
      }
      update_tmp('limit_msgs_checkbox_channels', val);
    });

    function check_upgrade_files() {
      if (!fs.existsSync(`${__dirname}/node_modules/discord.js`) || !fs.existsSync(`${__dirname}/node_modules/discord.js/src/rest/APIRequest.js`) || !fs.existsSync(`${__dirname}/node_modules/https-proxy-agent`) || !fs.existsSync(`${__dirname}/node_modules/https-proxy-agent/index.js`)) {
        check_updater = true;
        noty('error', 'Need Update!');
        setTimeout(() => {
          clear_updates();
        }, 1000);
      }
    }

    function update_send_msgs_count_channels() {
      var potoks = $('#select-account-channels').val().length;
      $('#count-dis-potoks-channels').html(potoks);
      var acc = $('#select-account-channels').val().length;
      if (!$('#limit-msgs-channels .form input').val() || $('#limit-msgs-channels .form input').val() == '') return false;
      var msg = parseInt($('#limit-msgs-channels .form input').val());
      var count_channels = parseInt($('#count-of-pars-dis-channels').text());
      var count = Math.round((msg * count_channels) * acc);
      if (isNaN(count)) return false;
      $('#count-of-send-msgs-dis-channels').html(`${translater(translate.noty.other.how_many_send_spam_channels)}: ${count + NumberEnd(count, translater(translate.noty.number_end.msgs))}`);
    }

    $('body').on('change', '#select-account-channels', function () {
      update_send_msgs_count_channels();
    })

    $('body').on('keyup', '#limit-msgs-channels .form input', function () {
      update_send_msgs_count_channels();
    })

    $('body').on('change', '#limit-msgs-channels .form input', function () {
      update_tmp('limit-msgs-channels', $(this).val());
    })

    function enableDelayMessageChannels(check) {
      var val = $('#delay-messages-channels').val();
      var cb = document.getElementById('delay-messages-checkbox-channels');
      if (val == '0') {
        $('#delay-messages-channels').val('1');
        $('.delay-spam-block-channels').addClass('active');
        cb.checked = true;
        if (check) return false;
        if (check) return false;
        update_tmp('delay-messages-checkbox-channels', true);
      } else {
        update_tmp('delay-messages-checkbox-channels', false);
        $('#delay-messages-channels').val('0');
        $('.delay-spam-block-channels').removeClass('active');
        cb.checked = false;
        if (check) return false;
      }
    }

    function enableDelayMessage(check) {
      var val = $('#delay-messages').val();
      var cb = document.getElementById('delay-messages-checkbox');
      if (val == '0') {
        $('#delay-messages').val('1');
        $('.delay-spam-block').addClass('active');
        cb.checked = true;
        if (check) return false;
        if (check) return false;
        update_tmp('delay_messages_checkbox', true);
      } else {
        $('#delay-messages').val('0');
        $('.delay-spam-block').removeClass('active');
        cb.checked = false;
        if (check) return false;
        update_tmp('delay_messages_checkbox', false);
      }
    }

    function enableAutoChangeAccs(check) {
      var val = $('#auto-change-accs').val();
      var cb = document.getElementById('auto-change-accs-checkbox');
      if (last_type_to_spam == 2) {
        $('.change-accs-block').removeClass('active');
        $('#auto-change-accs').val('0');
        cb.checked = false;
        return;
      }
      if (val == '0') {
        $('.change-accs-block').addClass('active');
        $('#auto-change-accs').val('1');
        cb.checked = true;
        if (check) return false;
        update_tmp('auto_change_accs', true);
      } else {
        $('.change-accs-block').removeClass('active');
        $('#auto-change-accs').val('0');
        cb.checked = false;
        if (check) return false;
        update_tmp('auto_change_accs', false);
      }
    }

    function enableAddBlackList(check) {
      var val = $('#add-black-list').val();
      var cb = document.getElementById('add-black-list-checkbox');
      if (last_type_to_spam == 2) {
        $('#add-black-list').val('0');
        cb.checked = false;
        return;
      }
      if (val == '0') {
        $('#add-black-list').val('1');
        cb.checked = true;
        if (check) return false;
        update_tmp('enable_blacklist', true);
      } else {
        $('#add-black-list').val('0');
        cb.checked = false;
        if (check) return false;
        update_tmp('enable_blacklist', false);
      }
    }

    function enableCheckAvatar() {
      var val = $('#check-avatars').val();
      var cb = document.getElementById('check-avatars-checkbox');
      if (val == '0') {
        $('#check-avatars').val('1');
        cb.checked = true;
      } else {
        $('#check-avatars').val('0');
        cb.checked = false;
      }
    }

    function enableCheckMobile() {
      var val = $('#check-mobile').val();
      var cb = document.getElementById('check-mobile-c');
      if (val == '0') {
        $('#check-mobile').val('1');
        cb.checked = true;
      } else {
        $('#check-mobile').val('0');
        cb.checked = false;
      }
    }

    $('body').on('change', '#check-join-time-checkbox', function () {
      enableCheckJoin();
      update_tmp('check-join-time-checkbox', $(this).prop('checked'));
    });

    $('body').on('change', '#check-reg-time-checkbox', function () {
      enableCheckReg();
      update_tmp('check-reg-time-checkbox', $(this).prop('checked'));
    });

    function enableCheckReg() {
      var val = $('#check-reg-time').val();
      var cb = document.getElementById('check-reg-time-checkbox');
      if (val == '0') {
        $('#check-reg-time').val('1');
        cb.checked = true;
        $('.form-date-before-two').css('display', 'block');
        setTimeout(function () {
          $('.form-date-before-two').css('max-height', '200px');
          $('.form-date-before-two').css('opacity', 1);
        }, 50);
      } else {
        $('#check-reg-time').val('0');
        cb.checked = false;
        $('.form-date-before-two').css('opacity', 0);
        $('.form-date-before-two').css('max-height', '0px');
        setTimeout(function () {
          $('.form-date-before-two').css('display', 'none');
        }, 375);
      }
      return false;
    }

    function enableCheckJoin() {
      var val = $('#check-join-time').val();
      var cb = document.getElementById('check-join-time-checkbox');
      if (val == '0') {
        $('#check-join-time').val('1');
        cb.checked = true;
        $('.form-date-before-one').css('display', 'block');
        setTimeout(function () {
          $('.form-date-before-one').css('max-height', '200px');
          $('.form-date-before-one').css('opacity', 1);
        }, 50);
      } else {
        $('#check-join-time').val('0');
        cb.checked = false;
        $('.form-date-before-one').css('opacity', 0);
        $('.form-date-before-one').css('max-height', '0px');
        setTimeout(function () {
          $('.form-date-before-one').css('display', 'none');
        }, 375);
      }
      return false;
    }

    $('body').on('click', '#close-pars-roles-data', function () {
      var invite = $('#input-invite-to-server').val();
      if (!invite || invite == '') return;
      invite = get_invite_code(invite);
      store.delete(`last_pars_roles_${invite}`);
      last_roles_data = [];
      $('.roles-data-block').removeClass('active');
      $('.form-check-priv').css('height', '');
      $('.form-check-priv').removeClass('active');
      $('#check-privilege-checkbox').prop('checked', false);
      $('#check-privilege').val('0');
    });

    function enableCheckPrivilege() {
      var val = $('#check-privilege').val();
      var cb = document.getElementById('check-privilege-checkbox');
      if (val == '0') {
        $('#check-privilege').val('1');
        $('.form-check-priv').addClass('active');
        cb.checked = true;
      } else {
        $('.form-check-priv').css('height', '');
        $('.form-check-priv').removeClass('active');
        $('#check-privilege').val('0');
        cb.checked = false;
      }
      var invite = $('#input-invite-to-server').val();
      // if (val != '1' && invite && invite != '' && store.has('last_pars_roles_'+invite)) {
      //   var data = store.get('last_pars_roles_'+get_invite_code(invite));
      //   if (data.length < 1) return;
      //   $('.form-check-priv').css('height', $('.form-check-priv').get(0).scrollHeight+'px')
      //   last_roles_data = data;
      //   $('#pars-server-roles').removeClass('waiting');
      //   $('#roles-count-pars').html(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.roles))}`);
      //   $('.roles-data-block').addClass('active');
      //   $('#edit-pars-roles').attr('invite', invite);
      // } else if (!store.has('last_pars_roles_'+invite)) {
      //   last_roles_data = [];
      //   $('.roles-data-block').removeClass('active');
      // }
      return false;
    }

    $('body').on('change', '#input-invite-to-server', function () {
      var invite = get_invite_code($(this).val())
      if (!invite || invite == '') {
        $('.roles-data-block').removeClass('active');
        $('.form-check-priv').css('height', '');
        $('.form-check-priv').removeClass('active');
        $('#check-privilege-checkbox').prop('checked', false);
        $('#check-privilege').val('0');
        return;
      }
      // if (!store.has('last_pars_roles_'+invite)) {
      //   $('.roles-data-block').removeClass('active');
      //   $('.form-check-priv').css('height', '');
      //   $('.form-check-priv').removeClass('active');
      //   $('#check-privilege-checkbox').prop('checked', false);
      //   $('#check-privilege').val('0');
      //   return;
      // }
      //var data = store.get('last_pars_roles_'+invite);
      // if (data.length < 1) return;
      // last_roles_data = data;
      // $('#pars-server-roles').removeClass('waiting');
      // $('#roles-count-pars').html(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.roles))}`);
      // $('.form-check-priv').css('height', $('.form-check-priv').get(0).scrollHeight+'px');
      // $('.roles-data-block').addClass('active');
      // $('#edit-pars-roles').attr('invite', invite);
      // if ($('#check-privilege').val() != '1') enableCheckPrivilege();
    });

    let cb = document.getElementById('darkThemeEnabler');
    function addDTToHeader() {
      var html = css_dark;
      $('head').append(html);
      $('body').addClass('dark');
    }
    function enableDarkTheme() {
      if (cb.checked) {
        cb.checked = false;
        setTimeout(() => {
          update_tmp('dark_theme', false);
        }, 1500);
        $('body').removeClass('dark');
        $('#dtssheet').remove();
      } else {
        cb.checked = true;
        setTimeout(() => {
          update_tmp('dark_theme', true);
        }, 1500);
        addDTToHeader();
      }
    }

    function check_darktheme() {
      if (!tmp_data['dark_theme']) return false;
      cb.checked = true;
      $('head').append(css_dark);
      $('body').addClass('dark');
    }
    check_darktheme();

    $('body').on('click', '.headline-block .change-space-pars div:first-child', function () {
      if ($('.headline-block .change-space-pars div.two').length <= 0) return false;
      $(this).removeClass('disable');
      $('.headline-block .change-space-pars div:last-child').removeClass('active');
      $('.headline-block .change-space-pars div:last-child').addClass('disable');
      $('.change-space-pars').css('margin-top', '5px');
    });

    $('body').on('mouseover', '.headline-block span .change-space-pars', function () {
      if ($('.headline-block .change-space-pars div.two').length <= 0) return false;
      if ($('.headline-block .change-space-pars div:last-child').attr('class').indexOf('active') >= 0) {
        $(this).css('margin-top', '5px');
      }
    });

    $('body').on('keyup', function (e) {
      if (e.keyCode != 27) return false;
      $('.modal').modal('hide');
    });

    $('body').on('click', '.headline-block .change-space-pars div:last-child', function () {
      if ($('.headline-block .change-space-pars div.two').length <= 0) return false;
      $(this).removeClass('disable');
      $(this).removeClass('active');
      $(this).addClass('active');
      $('.headline-block .change-space-pars div:first-child').addClass('disable');
      $('.headline-block span .change-space-pars').on('mouseout', function () {
        if ($('.headline-block .change-space-pars div:last-child').attr('class').indexOf('active') >= 0) {
          $('.change-space-pars').css('margin-top', '-10px');
        }
      });
      $('.block-pars').css('opacity', '0');
      setTimeout(function () {
        $('.block-pars-channels').css('display', 'block');
        setTimeout(function () {
          $('.block-pars').css('display', 'none');
          $('.block-pars-channels').css('opacity', '1');
        }, 50);
      }, 50);
    });

    $('body').on('click', '.headline-block .change-space-spam div:first-child', function () {
      if ($('.headline-block .change-space-spam div.two').length <= 0) return false;
      $(this).removeClass('disable');
      $('.headline-block .change-space-spam div:last-child').removeClass('active');
      $('.headline-block .change-space-spam div:last-child').addClass('disable');
      $('.change-space-spam').css('margin-top', '5px');
    });

    var mouserenter_check_sp_types = false;

    $('body').on('mouseenter', '.headline-block span .change-space-spam', function () {
      mouserenter_check_sp_types = true;
    });

    $('body').on('mouseout', '.headline-block span .change-space-spam', function () {
      mouserenter_check_sp_types = false;
    });

    $('body').on('mouseenter', '.headline-block span .change-space-spam', function () {
      setTimeout(() => {
        if (!mouserenter_check_sp_types) return;
        if ($('.headline-block .change-space-spam div.two').length <= 0) return false;
        if ($('.headline-block .change-space-spam div:last-child').attr('class').indexOf('active') >= 0) {
          $(this).css('margin-top', '5px');
        }
      }, 80);
    });

    $('body').on('click', '.headline-block .change-space-spam div:last-child', function () {
      if ($('.headline-block .change-space-spam div.two').length <= 0) return false;
      $(this).removeClass('disable');
      $(this).removeClass('active');
      $(this).addClass('active');
      $('.headline-block .change-space-spam div:first-child').addClass('disable');
      $('body').on('mouseleave', '.headline-block span .change-space-spam', function () {
        if ($('.headline-block .change-space-spam div:last-child').attr('class').indexOf('active') >= 0) {
          $('.change-space-spam').css('margin-top', '5px');
        }
      });
      $('.block-spam').css('opacity', '0');
      setTimeout(function () {
        $('.block-spam-channels').css('display', 'block');
        setTimeout(function () {
          $('.block-spam').css('display', 'none');
          $('.block-spam-channels').css('opacity', '1');
          if ($('.block-spam-hist-channels').attr('class') && $('.block-spam-hist-channels').attr('class').indexOf('noactive') >= 0) {
            $('.block-spam-hist-channels').css('display', 'none');
            $('.block-spam-hist-channels').css('opacity', '0');
          }
        }, 50);
      }, 50);
    });

    $('body').on('click', '.headline-block .change-space-pars div:first-child', function () {
      if ($('.headline-block .change-space-pars div.two').length <= 0) return false;
      $(this).removeClass('disable');
      $(this).removeClass('active');
      $(this).addClass('active');
      $('.headline-block .change-space-pars div:last-child').addClass('disable');
      $('.block-pars-channels').css('opacity', '0');
      setTimeout(function () {
        $('.block-pars').css('display', 'block');
        setTimeout(function () {
          $('.block-pars-channels').css('display', 'none');
          $('.block-pars').css('opacity', '1');
        }, 50);
      }, 50);
    });

    $('body').on('click', '.headline-block .change-space-spam div:first-child', function () {
      if ($('.headline-block .change-space-spam div.two').length <= 0) return false;
      $(this).removeClass('disable');
      $(this).removeClass('active');
      $(this).addClass('active');
      $('.headline-block .change-space-spam div:last-child').addClass('disable');
      $('.block-spam-channels').css('opacity', '0');
      setTimeout(function () {
        $('.block-spam').css('display', 'block');
        setTimeout(function () {
          $('.block-spam-channels').css('display', 'none');
          $('.block-spam').css('opacity', '1');
          if ($('.block-spam-hist').attr('class').indexOf('noactive') >= 0) {
            $('.block-spam-hist').css('display', 'none');
            $('.block-spam-hist').css('opacity', '0');
          }
        }, 50);
      }, 50);
    });

    var timeout_id_to_type_spam;
    $('body').on('click', '.bottom-block-for-hover span', function () {
      var next = $('.bottom-block-for-hover').next();
      if (next.attr('class').indexOf('disable') >= 0) {
        next.removeClass('disable');
        next.css('display', 'block');
        setTimeout(function () {
          next.css('opacity', '1');
          next.css('height', '85px');
          next.css('margin', '15px 30px 10px 30px');
        }, 50);
      }
    });
    // $('body').on('mouseout', '.bottom-block-for-hover span', function () {
    //  var that = $('.block-type-spamming');
    //  that.addClass('disable');
    //  clearTimeout(timeout_id_to_type_spam);
    // });
    $('body').on('mouseover', '.bottom-block-for-hover span', function () {
      timeout_id_to_type_spam = setTimeout(function () {
        var next = $('.bottom-block-for-hover').next();
        if (next.attr('class').indexOf('disable') >= 0) {
          next.removeClass('disable');
          next.css('display', 'block');
          setTimeout(function () {
            next.css('opacity', '1');
            next.css('height', '85px');
            next.css('margin', '15px 30px 10px 30px');
          }, 50);
        }
      }, 175);
    });

    var last_val_to_search = '';

    var timeout_id_to_type_spam_channels;
    $('body').on('click', '.bottom-block-for-hover-channels span', function () {
      var next = $('.bottom-block-for-hover-channels').next();
      if (next.attr('class').indexOf('disable') >= 0) {
        next.removeClass('disable');
        next.css('display', 'block');
        setTimeout(function () {
          next.css('opacity', '1');
          next.css('height', '85px');
          next.css('margin', '15px 30px 10px 30px');
        }, 50);
      }
    });
    $('body').on('mouseover', '.bottom-block-for-hover-channels span', function () {
      timeout_id_to_type_spam_channels = setTimeout(function () {
        var next = $('.bottom-block-for-hover-channels').next();
        if (next.attr('class').indexOf('disable') >= 0) {
          next.removeClass('disable');
          next.css('display', 'block');
          setTimeout(function () {
            next.css('opacity', '1');
            next.css('height', '85px');
            next.css('margin', '15px 30px 10px 30px');
          }, 50);
        }
      }, 175);
    });


    $('body').on('keyup', '#input-for-search-servers', delay2(function (e) {
      var val = $(this).val();
      last_val_to_search = val;
      get_tags_s(val);
    }, 500));

    $('body').on('keyup', '#input-for-search-servers', function () {
      var q = $(this).val();
      if (!q || q == 'q') {
        $('.block-search .tags').css('height', '');
        $('.block-search .tags').css('padding')
        $('.block-search .tags .tag').css('opacity', '0');
        setTimeout(function () {
          $('.block-search .tags .tag').remove();
        }, 300);
      }
    });

    function get_tags_s(q) {
      var file = `${__dirname}/data/tags_search.json`;
      if (!fs.existsSync(file)) return false;
      get_tags(q).then((data) => {
        if (!$('#input-for-search-servers').val() || $('#input-for-search-servers').val() == '') {
          $('.block-search .tags').css('height', '');
          $('.block-search .tags .tag').css('opacity', '0');
          setTimeout(function () {
            $('.block-search .tags .tag').remove();
          }, 300);
          return false;
        }
        if (!data.type) return false;
        data = data.data;
        $('.block-search .tags').html('');
        var html;
        var count;
        data.forEach(function (e) {
          html = '<div style="opacity: 0;" class="tag" name="' + e.name + '"><b>#</b>' + e.name + ' (' + e.count + ')</div>';
          $('.block-search .tags').prepend(html);
        });
        $('.block-search .tags').css('height', '60px');
        $('.block-search .tags .tag').css('opacity', '');
      });
    }

    function get_tags(q) {
      return new Promise(function (resolve, reject) {
        var data = [];
        var json = fs.readFileSync(`${__dirname}/data/tags_search.json`).toString();
        json = JSON.parse(json);
        if (json.length < 5) {
          resolve({ type: false });
          return false;
        }
        json.forEach(function (z) {
          if (z.name.toLowerCase().indexOf(q.toLowerCase()) >= 0 && data.length < 30) {
            data.push({
              'name': z.name,
              'count': z.count
            });
          }
        });
        if (data.length < 1) {
          resolve({ type: false });
          return false;
        }
        resolve({ type: true, data: data });
        return true;
      });
    }

    function delay2(callback, ms) {
      var timer = 0;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          callback.apply(context, args);
        }, ms || 0);
      };
    }


    var delay = (time = 1000) => {
      return new Promise(async fin => {
        setTimeout(fin, time)
      });
    }

    $('body').on('click', '.block-search .tags .tag', function () {
      var name = $(this).attr('name');
      $('#input-for-search-servers').val(name);
      last_val_to_search = '';
      $('.block-search .tags').css('height', '');
      $('.block-search .tags .tag').css('opacity', '0');
      setTimeout(function () {
        $('.block-search .tags .tag').remove();
      }, 300);
      return false;
    });

    $('body').on('change', '#enabler_channel_verification', function () {
      var c = $(this).prop('checked');
      if (c) {
        $('#channel-verify-block').addClass('active');
      } else {
        $('#channel-verify-block').removeClass('active');
      }
      update_tmp('enabler_channel_verification', c);
    });

    $('body').on('change', '#select-account-change', function () {
      var val = parseInt($('#count-of-success-messages-change').val());
      if (val <= 0) {
        var text = '0' + NumberEnd(0, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      } else if (val > 0 && $('#count-of-success-messages-change').val() != '') {
        var count = ($('#select-account-change').val().length + $('#select-account').val().length) * val;
        text = count + NumberEnd(count, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      }
    });

    $('body').on('change', '#select-account', function () {
      update_count_potoks_dis();
      if (last_type_to_spam == 2) {
        if (last_account_friends[MD5($('#select-account').val())] && last_account_friends[MD5($('#select-account').val())].length > 0) {
          $('#data-friends-list').addClass('editer');
          $('#data-friends-list').html(translater(translate.noty.other.edit));
          $('#count-of-friends').addClass('active');
          $('#close-btn-edit-friends').addClass('active');
          $('#count-of-friends').html(`${last_account_friends[MD5($('#select-account').val())].length}${NumberEnd(last_account_friends[MD5($('#select-account').val())].length, translater(translate.noty.number_end.users))}`)
        } else {
          $('#data-friends-list').removeClass('editer');
          $('#data-friends-list').html(translater(translate.noty.other.get_list_friends));
          $('#count-of-friends').removeClass('active');
          $('#close-btn-edit-friends').removeClass('active');
        }
      }
    });

    $('body').on('click', '#close-btn-edit-friends', function () {
      last_account_friends[MD5($('#select-account').val())] = false;
      $('#data-friends-list').removeClass('editer');
      $('#data-friends-list').html(translater(translate.noty.other.get_list_friends));
      $('#count-of-friends').removeClass('active');
      $('#close-btn-edit-friends').removeClass('active');
    });

    function update_count_potoks_dis() {
      var val = parseInt($('#count-of-success-messages-change').val());
      if (val <= 0) {
        var text = '0' + NumberEnd(0, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      } else if (val > 0 && $('#count-of-success-messages-change').val() != '') {
        var count = ($('#select-account-change').val().length + $('#select-account').val().length) * val;
        text = count + NumberEnd(count, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      }
      if (typeof $('#select-account').val() != 'object') return $('#count-dis-potoks').html('1');
      var potoks = $('#select-account').val().length;
      $('#count-dis-potoks').html(potoks);
    }

    $('body').on('change', '#count-of-success-messages-change', function () {
      update_tmp('count-of-success-messages-change', $(this).val());
    });

    $('body').on('keyup', '#count-of-success-messages-change', function () {
      var val = parseInt($(this).val());
      if (val <= 0) {
        var text = '0' + NumberEnd(0, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      } else if (val > 0 && $('#count-of-success-messages-change').val() != '') {
        var count = ($('#select-account-change').val().length + $('#select-account').val().length) * val;
        text = count + NumberEnd(count, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      }
    });

    $('body').on('change', '#auto-turn-accs-checkbox', function () {
      if ($(this).prop('checked')) {
        $('#count-of-will-send-messages').css('height', '0');
        $('#count-of-will-send-messages').css('opacity', '0');
        $('#count-of-will-send-messages').css('pointer-events', 'none');
      } else {
        $('#count-of-will-send-messages').css('height', '24px');
        $('#count-of-will-send-messages').css('opacity', '');
        $('#count-of-will-send-messages').css('pointer-events', '');
      }
    })

    $('body').on('click', '.select-all-change-accounts', function () {
      var input = $('#select-account-change');
      var val = [];
      input.find('option').each(function () {
        if (!$(this).hasAttr('disabled')) val.push($(this).attr('value'));
      });
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        input.val([]);
        input.selectric('refresh');
      } else {
        $(this).addClass('active');
        input.val(val);
        input.selectric('refresh');
      }
      var val = parseInt($('#count-of-success-messages-change').val());
      if (val <= 0) {
        var text = '0' + NumberEnd(0, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      } else if (val > 0 && $('#count-of-success-messages-change').val() != '') {
        var count = ($('#select-account-change').val().length + $('#select-account').val().length) * val;
        text = count + NumberEnd(count, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      }
    })

    $('body').on('click', '.select-all-accounts-channels', function () {
      var input = $('#select-account-channels');
      var val = [];
      input.find('option').each(function () {
        if (!$(this).hasAttr('disabled')) val.push($(this).attr('value'));
      });
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        input.val([]);
        input.selectric('refresh');
      } else {
        $(this).addClass('active');
        input.val(val);
        input.selectric('refresh');
      }
      update_send_msgs_count_channels();
    })

    $('body').on('click', '.select-all-accounts', function () {
      var input = $('#select-account');
      var val = [];
      input.find('option').each(function () {
        if (!$(this).hasAttr('disabled')) val.push($(this).attr('value'));
      });
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        input.val([]);
        input.selectric('refresh');
      } else {
        $(this).addClass('active');
        input.val(val);
        input.selectric('refresh');
      }
      $('#select-account-change').val([]);
      $('#select-account-change').selectric('refresh');
      var block = $('.select-account-change');
      if (block.length <= 0) return false;
      var val = input.val();
      var check = false;
      block.find('option').removeAttr('disabled');
      block.find('option[value="false"]').attr('disabled', '');
      val.forEach((e) => {
        block.find(`option[value="${e}"]`).attr('disabled', '');
        if ($('.selectric-select-account-change .label').text() == e) check = true
      });
      block.selectric('refresh');
      var val = parseInt($('#count-of-success-messages-change').val());
      if (val <= 0) {
        var text = '0' + NumberEnd(0, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      } else if (val > 0 && $('#count-of-success-messages-change').val() != '') {
        var count = ($('#select-account-change').val().length + $('#select-account').val().length) * val;
        text = count + NumberEnd(count, translater(translate.noty.number_end.msgs));
        $('#count-of-will-send-messages pro').text(text);
      }
      var potoks = $('#select-account').val().length;
      $('#count-dis-potoks').html(potoks);
    });

    $('body').on('keyup', '.parameter-set-tokens input', function (e) {
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code == 13) save_tokener();
    })

    function save_tokener() {
      var val = [];
      $('#modal-set-tokens-accounts .list-tokens-accs .parameter-set-tokens').each(function () {
        if ($(this).find('input').hasClass('change')) {
          var email = $(this).attr('hash');
          var token = $(this).find('input').val();
          for (var i = 0; i < 20; i++) {
            token = token.replace(' ', '');
            token = token.replace('"', '');
          }
          val.push({
            email: email,
            token: token
          });
        }
      });
      var new_p = [];
      if (val.length <= 0) return noty('success', translater(translate.noty.other.suc_sa_t_a));
      if (store.has('accounts_token')) new_p = store.get('accounts_token');
      var newer = [];
      new_p.forEach(e => {
        val.forEach((r, ind) => {
          if (r.email == e.email) {
            e.token = r.token;
            delete val[ind]
          }
        });
        newer.push(e);
      })
      if (val.length > 0) {
        val.forEach((e) => {
          newer.push(e)
        })
      }
      store.set('accounts_token', newer);
      fat_get_acc_token_v = newer;
      noty('success', translater(translate.noty.other.suc_sa_t_a));
      $('.modal').modal('hide');
    }

    $('body').on('click', '#modal-set-tokens-accounts .buttons .btn-modals:last-child', function () {
      save_tokener();
    });

    $('body').on('change', '#modal-set-tokens-accounts .list-tokens-accs input', function () {
      $(this).addClass('change');
    });

    function set_tokener() {
      $('.modal').modal('hide');
      $('#modal-set-tokens-accounts .account-token-block').html('');
      get_accounts().forEach((e, ind, arr) => {
        var email = e.login;
        var value = get_acc_token(email);
        if (!value) value = '';
        var html = `<div class="parameter-def-settings parameter-set-tokens" hash="${email}">
                       <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                         <div class="account-name">${email}</div>
                       </div>
                       <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 change-value-parameter-def-s-os" name="token">
                         <input type="text" autocomplete="off" name="login" class="change-value-parameter-def-s-input" placeholder="${translater(translate.noty.other.acc_tokena)}" value="${value}">
                       </div>
                     </div>`;
        $('#modal-set-tokens-accounts .account-token-block').prepend(html);
      });
      $('#modal-set-tokens-accounts').modal('show');
    }

    $('body').on('click', '.btn-set-tokens', function () {
      set_tokener()
    });

    $('body').on('click', '.btn-new_account', () => {
      $('.modal').modal('hide');
      $('#modal-add-account').modal('show');
    });

    $('body').on('shown.bs.modal', '#modal-add-account', () => {
      $('#modal-add-account input[name="name"]').focus();
      // if (store.has('apikey_rucap')) {
      //   check_rucaptcha = true;
      //   $('.change-value-parameter-def-s-os[name="Rucaptcha"]').addClass('active');
      //   $('.change-value-parameter-def-s-input[name="apikey"]').val(store.get('apikey_rucap'));
      // }
    });

    function noty(type, msg, time = 6500) {
      var n = new Noty({
        text: msg,
        type: type,
        layout: 'bottomRight',
        theme: 'sunset',
        closeWith: ['click', 'button'],
        timeout: time,
        callbacks: {
          onShow: function () {
            setTimeout(() => {
              $('#close-all-notys').css('background-color', $('.noty_layout .noty_bar:last-child').css('background-color'));
              $('#close-all-notys').addClass('active');
            }, 200)
          },
          onClose: function () {
            $('#close-all-notys').css('background-color', $('.noty_layout .noty_bar:last-child').css('background-color'));
          },
          afterClose: function () {
            if ($('.noty_layout .noty_bar').length <= 0) return $('#close-all-notys').removeClass('active');
            $('#close-all-notys').css('background-color', $('.noty_layout .noty_bar:last-child').css('background-color'));
          }
        }
      }).show();
      all_notys.push(n);
    }

    $('body').on('click', '#block-feedback .closer', function () {
      $('#block-feedback').removeClass('active');
      update_tmp('feedback-check', true);
    });

    var last_feedback_point = false;

    $('body').on('click', '#send-feedback', function () {
      if ($('#block-feedback input').val().length < 3) {
        $('#block-feedback input').css('border', '1px solid red');
        setTimeout(() => {
          $('#block-feedback input').css('border', '');
        }, 2000);
      }
      $('#block-feedback').removeClass('active');
      update_tmp('feedback-check', true);
      var val = $('#block-feedback input').val();
      setTimeout(() => {
        req.post({
          url: 'https://onedash.net/app/send/feedback', form: {
            point: last_feedback_point,
            text: val
          }, headers: {
            token: user_token
          }
        }, () => { });
      }, 1500);
    });

    $('body').on('click', '#block-feedback .points p', function () {
      var point = parseInt($(this).text());
      last_feedback_point = point;
      if (point < 8) {
        $('#block-feedback input').addClass('active');
        $('#send-feedback').addClass('active');
      } else {
        $('#block-feedback').removeClass('active');
        update_tmp('feedback-check', true);
        setTimeout(() => {
          req.post({
            url: 'https://onedash.net/app/send/feedback', form: {
              point: last_feedback_point
            }, headers: {
              token: user_token
            }
          }, () => { });
        }, 1500);
      }
    });

    $('body').on('click', '#close-all-notys', function () {
      var t = $(this);
      all_notys.forEach((e) => {
        e.close();
      });
      all_notys = [];
      t.removeClass('active');
    });

    function validate_email(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    var { remote } = require('electron')
    var { Menu, MenuItem } = remote

    var menu = new Menu()
    menu.append(new MenuItem({ role: 'copy' }))
    menu.append(new MenuItem({ role: 'paste' }))
    menu.append(new MenuItem({ role: 'cut' }))
    menu.append(new MenuItem({ role: 'redo' }))
    menu.append(new MenuItem({ role: 'selectAll' }))

    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu.popup({ window: remote.getCurrentWindow() })
    }, false)

    // $('body').on('contextmenu', (e) => {
    //   e.preventDefault();
    // });

    // $('body').on('contextmenu', '.emojionearea', function () {
    //   var block = $(this).prev();
    //   var val = block.data("emojioneArea").getText()
    //   var cop = clipboard.readText();
    //   val = val+cop;
    //   block.data("emojioneArea").setText(val)
    // });
    //
    // $('body').on('contextmenu', 'input', function () {
    //   var block = $(this)
    //   var val = block.val();
    //   var cop = clipboard.readText();
    //   val = val+cop;
    //   block.val(val)
    // });

    $('body').on('click', '#save-new-invites-for-pars', function () {
      var val = $('#edit-block-invites textarea').val();
      if (!val || val == '') return noty('error', translater(translate.noty.other.dont_p_i));
      val = val.split('\n');
      var v_val = [];
      val.forEach(e => {
        if (e != '' && v_val.indexOf(e) < 0) v_val.push(`https://discord.gg/${get_invite_code(e)}`);
      })
      if (v_val.length < 2) return noty('error', translater(translate.noty.other.min_count_invites_p));
      if (v_val.length > 100) return noty('error', translater(translate.noty.other.max_count_invites_p));
      update_tmp('invites-for-multi-pars', v_val);
      $('.modal').modal('hide');
      noty('success', translater(translate.noty.other.suc_u_i_mul_pars));
    });

    $('body').on('click', '#save-new-black-servers', function () {
      var val = $('#edit-block-black-servers textarea').val();
      if (!val || val == '') return noty('error', translater(translate.noty.other.dont_p_i));
      val = val.split('\n');
      var v_val = [];
      val.forEach(e => {
        if (e != '' && v_val.indexOf(e) < 0) v_val.push(`https://discord.gg/${get_invite_code(e)}`);
      })
      if (v_val.length < 1) return noty('error', translater(translate.noty.other.min_count_invites_p));
      if (v_val.length > 100) return noty('error', translater(translate.noty.other.max_count_invites_p));
      update_tmp('invites-for-black-servers', v_val);
      $('.modal').modal('hide');
      noty('success', translater(translate.noty.other.suc_u_i_mul_pars));
    });

    $('body').on('keyup', '#edit-block-invites textarea', function () {
      var v = $('#edit-block-invites textarea').val();
      var c = 0;
      v.split('\n').forEach(e => {
        if (e != '') c++;
      });
      $('#modal-edit-invites .count-invites v').html(`${c} ${NumberEnd(c, translater(translate.noty.number_end.invites))}`);
    });

    $('body').on('click', '#put-invites-for-parsing', function () {
      $('#edit-block-invites textarea').val('');
      if (tmp_data['invites-for-multi-pars']) {
        tmp_data['invites-for-multi-pars'].forEach(e => {
          var val = `${$('#edit-block-invites textarea').val()}${e}\n`;
          $('#edit-block-invites textarea').val(val);
        });
      }
      var v = $('#edit-block-invites textarea').val();
      var c = 0;
      v.split('\n').forEach(e => {
        if (e != '') c++;
      });
      $('#modal-edit-invites .count-invites v').html(`${c} ${NumberEnd(c, translater(translate.noty.number_end.invites))}`);
      $('#modal-edit-invites').modal('show');
    });

    $('body').on('click', '#put-black-servers', function () {
      $('#edit-block-black-servers textarea').val('');
      if (tmp_data['invites-for-black-servers']) {
        tmp_data['invites-for-black-servers'].forEach(e => {
          var val = `${$('#edit-block-black-servers textarea').val()}${e}\n`;
          $('#edit-block-black-servers textarea').val(val);
        });
      }
      var v = $('#edit-block-black-servers textarea').val();
      var c = 0;
      v.split('\n').forEach(e => {
        if (e != '') c++;
      });
      $('#modal-edit-black-servers .count-invites v').html(`${c} ${NumberEnd(c, translater(translate.noty.number_end.invites))}`);
      $('#modal-edit-black-servers').modal('show');
    });

    $('body').on('change', '#check-black-servers', function () {
      var v = $(this).prop('checked');
      if (v) {
        $('.form-check-black-servers').addClass('active');
      } else {
        $('.form-check-black-servers').removeClass('active');
      }
    });

    function push_pars() {
      if (!check_pars_channels) {
        var btn = $('.btn-start-pars-channels');
        btn.addClass('waiting');
        btn.html('STOP');
      }
      if (last_type_pars != 0) {
        last_type_pars = 0;
        change_type_parsing();
      }
      if (!check_pars_memebers) {
        // var btn = $('.btn-start-pars');
        // btn.addClass('waiting');
        // btn.html('STOP');
      }
      var table = $('#table-pars');
      //logntiwpoer(fat_get_pars_lists);
      if (fat_get_pars_lists) {
        var pars = fat_get_pars_lists;
      } else {
        var pars = store.get('pars');
        fat_get_pars_lists = pars;
      }
      if (!pars || pars.length <= 0) return false;
      table.css('opacity', '0');
      setTimeout(() => {
        table.find('tbody').html('');
        var num = 1;
        var now = Math.round(new Date().getTime() / 1000);
        pars.forEach((e) => {
          if (e.status) {
            var id = e.id;
            var ava = e.server.avatar;
            var invite = e.invite;
            if (invite.indexOf('|') >= 0) invite = invite.split('|')[0];
            var name = removeTags(e.server.name);
            var full_data = get_time_to_history(e.time);
            var date = get_time_from_unix(now - Math.round(e.time / 1000), Math.round(e.time / 1000));
            var count = e.count + NumberEnd(e.count, translater(translate.noty.number_end.users));
            var html = `<tr list-id="${id}">
                         <td>${num}</td>
                         <td>
                         <img src="${ava}"><span><z class="span-copy-server-invite" invite="${invite}" tooltip="${invite}" flow="up"><input value="${name}" hash="${id}" class="edit-pars-list-name" readonly></z><i class="fa fa-edit-pen-t btn-edit-pars-name-list waves-effect" list-id="${id}"></i></span>
                         </td>
                         <td>${count}</td>
                         <td><span tooltip="${full_data}" flow="left" class="history-pars-date">${date}</span></td>
                         <td style="padding-left: 0;">
                         <span>
                         <i class="fa fa-edit-pen btn-edit-pars-list i-gg" list-id="${id}"></i>
                         </span>
                         </td>
                         <td style="padding-left: 0;">
                         <span>
                         <i class="fa fa-pars-trash btn-delete-pars-list i-gg waves-effect" list-id="${id}"></i>
                         </span>
                         </td>
                         </tr>`;
            table.find('tbody').prepend(html);
            num++;
          }
        });
        update_tooltips();
        update_tooltips();
        if (tmp_data['check-join-time-checkbox']) enableCheckJoin();
        if (tmp_data['check-reg-time-checkbox']) enableCheckReg();
        if (tmp_data['input-date-reg-first']) $('#input-date-reg-first').val(tmp_data['input-date-reg-first']);
        if (tmp_data['input-date-reg-second']) $('#input-date-reg-second').val(tmp_data['input-date-reg-second']);
        if (tmp_data['input-date-first']) $('#input-date-first').val(tmp_data['input-date-first']);
        if (tmp_data['input-date-second']) $('#input-date-second').val(tmp_data['input-date-second']);
        if (tmp_data['channel-verify-message-id-pars']) $('#channel-verify-message-id-pars').val(tmp_data['channel-verify-message-id-pars']);
        if (tmp_data['channel-verify-channel-id-pars']) $('#channel-verify-channel-id-pars').val(tmp_data['channel-verify-channel-id-pars']);
        $('.block-pars-hist').css('display', 'block');
        setTimeout(() => {
          $('.fa-edit-pen').addClass('waves-effect');
          update_tooltips()
          table.css('opacity', '1');
          $('.block-pars-hist').css('opacity', '1');
        }, 50);
      }, 700);
    }

    $('body').on('change', '#input-date-reg-first', function () {
      update_tmp('input-date-reg-first', $(this).val());
    })

    $('body').on('change', '#input-date-reg-second', function () {
      update_tmp('input-date-reg-second', $(this).val());
    })

    $('body').on('change', '#input-date-first', function () {
      update_tmp('input-date-first', $(this).val());
    })

    $('body').on('change', '#input-date-second', function () {
      update_tmp('input-date-second', $(this).val());
    })

    $('body').on('change', '#mode-of-inviter', function () {
      update_tmp('mode-of-inviter', $(this).val());
    })

    function push_accounts() {
      if (tmp_data['inviter-delay-enable']) {
        $('#inviter-delay-enable').prop('checked', true)
        $('#inviter-delay-block-settings').addClass('active');
      }
      if (tmp_data['mode-of-inviter']) $('#mode-of-inviter').val(tmp_data['mode-of-inviter']);
      $('#mode-of-inviter').niceSelect()
      if (tmp_data['from-inviter-delay']) $('#from-inviter-delay').val(tmp_data['from-inviter-delay']);
      if (tmp_data['to-inviter-delay']) $('#to-inviter-delay').val(tmp_data['to-inviter-delay']);
      check_rucaptcha = false;
      var table = $('#table-accounts');
      var accs = get_accounts();
      if (!accs) {
        var html = `<h3 style="font-weight: 300;letter-spacing: 2px;">${translater(translate.noty.other.accs_not_found)}</h3>
                         <div class="btn-right-action waves-effect btn-new_account" style="margin-left: auto;margin-right: auto;float: none;" action="new_account">
                           ${translater(translate.noty.other.add_low)}
                         </div>`;
        $('#row-block-accounts').html(html);
        return false;
      }
      var now_t = Math.round(new Date().getTime() / 1000);
      var active = [];
      accs.forEach(function (e) {
        if (e.status) {
          active.push(true);
          var v = `<span>
                         <label class="dThemeSwitch" style="margin-left: 0;">
                           <input class="account-status" checked hash="${e.name}" type="checkbox">
                           <span class="slider round"></span>
                         </label>
                       </span>`;
        } else {
          var v = `<span>
                         <label class="dThemeSwitch" style="margin-left: 0;">
                           <input class="account-status" hash="${e.name}" type="checkbox">
                           <span class="slider round"></span>
                         </label>
                       </span>`;
        }
        var time = get_time_from_unix(now_t - Math.round(e.time / 1000), Math.round(e.time / 1000));
        var html = `<tr>
                         <td><name>${e.name}</name><span class="copy-password-account" style="margin-left:  -5px;" name="${e.name}" tooltip="Скопировать пароль." translate="Copy password." flow="left">
                             <i class="fa fa-copy waves-effect" style="font-size:15px;margin-left:10px;cursor: pointer;padding: 8px;display: -webkit-inline-box;width: 31px;margin-right: 0;margin-bottom: -9px;border-radius: 50%;"></i>
                           </span>
                         </td>
                         <td>
                           <div class="change-status-account" hash="${e.name}">
                             ${v}
                           </div>
                         </td>
                         <td>
                           ${time}
                         </td>
                         <td>
                         <span>
                         <i class="fa fa-pars-trash waves-effect delete-account-i" hash="${e.name}"></i>
                         </span>
                         </td>
                         <td>
                         <span>
                         <i class="fa fa-pars-open waves-effect open-account-i" hash="${e.name}"></i>
                         </span>
                         </td>
                       </tr>`;
        $('#table-accounts tbody').prepend(html);
      });
      var all = `${$('#table-accounts tbody tr').length}${NumberEnd($('#table-accounts tbody tr').length, translater(translate.noty.number_end.accs))}`;
      $('.statics-accs gug vgr').html(all);
      var active = `${$('#table-accounts tbody tr td:nth-child(2) input:checked').length} ${NumberEnd($('#table-accounts tbody tr td:nth-child(2) input:checked').length, translater(translate.noty.number_end.activer))}`
      $('.statics-accs gug span').html(active);
      if (tmp_data['select-status-users-manage']) $('#select-status-users-manage').val(tmp_data['select-status-users-manage']);
      $('#select-status-users-manage').niceSelect();
      if (localStorage['users-activity-type-editer']) $('#type-of-activity-editer').val(JSON.parse(localStorage['users-activity-type-editer']));
      $('#type-of-activity-editer').niceSelect();
    }


    $('body').on('click', '#modal-delete-account .btn-modals:last-child', function () {
      deleter_account()
    });

    function clear_cache() {
      var modal = $('#modal-clear-cache');
      $('.modal').modal('hide');
      modal.modal('show');
    }

    $('body').on('click', '#modal-clear-cache .modal-body .buttons .btn-modals:last-child', function () {
      if ($(this).hasClass('lock')) return false;
      var pars = $('#check-clear-pars').prop('checked');
      var spam = $('#check-clear-dis').prop('checked');
      var accs = $('#check-clear-accounts').prop('checked');
      if (pars) {
        var remote = require('electron').remote;
        var app = remote.app;
        var app_path = app.getPath('userData');
        store.get('pars').forEach(e => {
          fs.unlinkSync(`${app_path}/pars_data/${e.id}`)
        })
        store.delete('pars');
        fat_get_pars_lists = false;
      }
      if (spam) {
        store.delete('spam_logs');
        store.delete('spam');
        fat_spam = false;
        fat_add_log_spam = false;
      }
      if (accs) {
        store.delete('accounts');
        fat_get_accounts = false;
        fat_get_acc_token = false;
        fat_get_acc_token_v = false;
      }
      noty('success', translater(translate.noty.other.success_clear_cache));
      $('.modal').modal('hide');
      $('#check-clear-pars').checked = true;
      $('#check-clear-dis').checked = true;
      $('#check-clear-accounts').checked = true;
      if (now_page == 'accounts') push_accounts();
      if (now_page == 'pars') push_pars();
      if (now_page == 'dis') push_dis();
    });

    $('body').on('change', '.modal .clear-list .elem input', function () {
      var count = 0;
      $('.modal .clear-list .elem input').each(function () {
        var check = $(this).prop('checked');
        if (check) count++;
      });
      if (count <= 0) {
        $('#modal-clear-cache .modal-body .buttons .btn-modals:last-child').addClass('lock');
      } else {
        $('#modal-clear-cache .modal-body .buttons .btn-modals:last-child').removeClass('lock');
      }
    });

    function deleter_account() {
      var name = $('#modal-delete-account').attr('hash');
      $('#table-accounts tbody tr').each(function () {
        if ($(this).find('.copy-password-account').attr('name') == name) {
          $(this).css('opacity', '0');
          setTimeout(() => {
            $(this).remove();
          }, 150);
        }
      });
      $('.modal').modal('hide');
      noty('success', translater(translate.noty.accounts.success_delete));
      var new_p = [];
      get_accounts().forEach((e, ind, arr) => {
        if (e.name != name) new_p.push(e);
      });
      fat_get_accounts = new_p;
      store.set('accounts', new_p);
    }

    $('body').on('click', '.delete-account-i', function () {
      var hash = $(this).attr('hash');
      var modal = $('#modal-delete-account');
      $('.modal').modal('hide');
      modal.modal('show');
      modal.attr('hash', hash);
    });

    $('body').on('mouseout', '.copy-password-account', function () {
      var that = $(this);
      setTimeout(() => {
        that.attr('tooltip', translater(translate.noty.other.copy_pass));
      }, 50);
    });

    $('body').on('click', '.copy-password-account', function () {
      var name = $(this).attr('name');
      var that = $(this);
      var pass = get_account(name).pass;
      copyToClipboard(pass);
      that.attr('tooltip', translater(translate.noty.other.copied_pass));
    });

    var fat_get_pars_lists = false;

    function get_pars_lists() {
      return new Promise((fin, fal) => {
        if (fat_get_pars_lists) {
          var pars = fat_get_pars_lists;
          logntiwpoer('fat_get_pars_lists');
        } else {
          var pars = store.get('pars');
          fat_get_pars_lists = pars;
          setTimeout(() => {
            fat_get_pars_lists = false;
          }, 30 * 1000)
        }
        if (!pars || pars.length <= 0) return fin({ type: false });
        return fin({ type: true, data: pars });
      });
    }

    function get_pars_list(id) {
      return new Promise((fin, fal) => {
        //if (!store.has('pars')) return fin({type: false});
        if (fat_get_pars_lists) {
          var pars = fat_get_pars_lists;
        } else {
          var pars = store.get('pars');
          fat_get_pars_lists = pars;
          setTimeout(() => {
            fat_get_pars_lists = false;
          }, 20 * 1000)
        }
        if (!pars || pars.length <= 0) return fin({ type: false });
        var memb = [];
        pars.forEach((e) => {
          if (e.id == id) {
            return fin({ type: true, data: e });
          }
        });
        return fin({ type: false });
      });
    }

    $('body').on('click', '.action-rand-channels span', function () {
      var channels = store.get('last_pars_channels');
      if (!channels || channels.length <= 0) return noty('error', pop_error);
      var data = channels;
      channels = channels.channels;
      channels = shuffle(channels);
      data.channels = channels;
      $('.select-editer-channels').css('opacity', '0');
      setTimeout(() => {
        $('.select-editer-channels').html('');
        channels.forEach(e => {
          var z = '';
          if (e.limit && e.limit > 0) {
            if (e.limit < 60) {
              var s = `${e.limit} ${translater(translate.noty.other.secs).substr(0, 3)}`;
            } else if (e.limit >= 60 && e.limit < 3600) {
              var s = `${Math.round(e.limit / 60)} ${translater(translate.noty.logs.min).substr(0, 3)}`;
            } else {
              var s = `${Math.round(e.limit / 3600)} ${NumberEnd(Math.round(e.limit / 3600), translater(translate.noty.number_end.time.hours))}`;
            }
            z = `<z>${s}<i class="fa fa-clock"></i></z>`
          }
          var filer = '';
          if (!e.files) filer = `<vgr tooltip="${translater(translate.noty.other.dont_acce_file_ch)}" style="float:right;"><i class="fa fa-file" style="opacity: .8;font-size:  14px;float:  right;margin-top:  5px;margin-right:  15px;"></i></vgr>`
          var html = `<div class="channel-dis-edit"><div class="name"><b>#</b><span>${e.name}</span>${z}${filer}</div><div class="checkbox"><input type="checkbox" hash="${e.id}" class="checkboxe-channel-edit"></div></div>`;
          $('.select-editer-channels').prepend(html);
        })
        setTimeout(() => {
          $('.select-editer-channels').css('opacity', '');
          noty('success', translater(translate.noty.pars.update_u_list));
          update_select_count_channels();
          update_tooltips();
        }, 50);
      }, 200)
      setTimeout(() => {
        store.set('last_pars_channels', data);
      }, 1000);
    });

    var delete_channels = []

    $('body').on('click', '.action-delete-channels', function () {
      var channels = [];
      var blocks = [];
      $('.select-editer-channels .channel-dis-edit').each(function () {
        if ($(this).find('input').is(':checked')) {
          var id = $(this).find('input').attr('hash');
          channels.push(id);
          var block = $(this);
          block.css('opacity', '0');
          block.css('margin-top', '-50px');
          if ($('.select-editer-channels .channel-dis-edit input[hash="' + id + '"]').length > 1) {
            $('.select-editer-channels .channel-dis-edit').each(function (e) {
              if ($(this).find('input').attr('hash') == id) {
                var blockr = $(this);
                blockr.css('opacity', '0');
                blockr.css('margin-top', '-50px');
                setTimeout(() => {
                  blockr.remove();
                  update_select_count_channels();
                }, 250)
              }
            })
          }
          setTimeout(() => {
            block.remove();
            update_select_count_channels();
          }, 250);
        }
      });
      if (channels <= 0) return noty('error', translater(translate.noty.other.min_del_l));
      $('.channel-dis-edit').css('display', '');
      $('.channel-dis-edit.search').remove();
      $('.search-dis-channels input').val('');
      channels.forEach((e) => {
        if (delete_channels.indexOf(e) < 0) delete_channels.push(e);
      });
    });

    $('body').on('click', '.editer-sel-channels', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.select-editer-channels .channel-dis-edit input').prop('checked', false);
      } else {
        $(this).addClass('active');
        $('.select-editer-channels .channel-dis-edit input').prop('checked', true);
      }
      update_select_count_channels()
    });

    var last_pars_data_channels = false;

    $('body').on('click', '.edit-pars-channels-from-server', function () {
      var nameStore = 'last_pars_channels';
      if (type_spamming_channels == 'voice') nameStore = 'last_pars_channels_voice';
      var pars = store.get(nameStore);
      last_pars_data_channels = pars;
      if (pars.channels.length < 1) return noty('error', pop_error);
      $('.select-editer-channels').html('');
      pars.channels.forEach(e => {
        var z = '';
        if (e.limit && e.limit > 0) {
          if (e.limit < 60) {
            var s = `${e.limit} ${translater(translate.noty.other.secs).substr(0, 3)}`;
          } else if (e.limit >= 60 && e.limit < 3600) {
            var s = `${Math.round(e.limit / 60)} ${translater(translate.noty.logs.min).substr(0, 3)}`;
          } else {
            var s = `${Math.round(e.limit / 3600)} ${NumberEnd(Math.round(e.limit / 3600), translater(translate.noty.number_end.time.hours))}`;
          }
          z = `<z>${s}<i class="fa fa-clock"></i></z>`
        }
        var filer = '';
        if (!e.files) filer = `<vgr tooltip="${translater(translate.noty.other.dont_acce_file_ch)}" style="float:right;"><i class="fa fa-file" style="opacity: .8;font-size:  14px;float:  right;margin-top:  5px;margin-right:  15px;"></i></vgr>`
        var html = `<div class="channel-dis-edit"><div class="name"><b>#</b><span>${e.name}</span>${z}${filer}</div><div class="checkbox"><input type="checkbox" hash="${e.id}" class="checkboxe-channel-edit"></div></div>`;
        $('.select-editer-channels').prepend(html);
      })
      setTimeout(() => {
        update_tooltips();
      }, 100);
      $('.modal').modal('hide');
      $('.channel-dis-edit').css('display', '');
      $('.channel-dis-edit.search').remove();
      delete_channels = [];
      $('#modal-edit-dis-channels-list').modal('show');
    });

    $('body').on('keyup', '.search-dis-channels input', function () {
      var val = $(this).val();
      if (!val || val == '') {
        $('.channel-dis-edit').css('display', '');
        $('.channel-dis-edit.search').remove();
        return false;
      }
      var new_p = [];
      var data = false;
      if (last_pars_data_channels) {
        data = last_pars_data_channels;
      } else {
        data = store.get('last_pars_channels');
      }
      if (!data || data.length <= 0) return noty('error', pop_error);
      data.channels.forEach(e => {
        if (e.name.indexOf(val) >= 0) new_p.push(e);
      });
      $('.channel-dis-edit').css('display', 'none');
      $('.channel-dis-edit.search').remove();
      new_p.forEach(e => {
        var html = `<div class="channel-dis-edit search">
                       <div class="name"><b>#</b><span>${e.name}</span></div>
                       <div class="checkbox"><input type="checkbox" hash="${e.id}" class="checkboxe-channel-edit"></div>
                     </div>`
        $('.select-editer-channels').prepend(html);
      })
    });

    var lastChecked_checkbox_vz;

    $('body').on('click', '.select-editer-channels .channel-dis-edit', function (e) {
      var that = $(this);
      var checkboxes = $('.select-editer-channels .channel-dis-edit input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_vz) {
          lastChecked_checkbox_vz = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox_vz.checked = true;
        } else {
          lastChecked_checkbox_vz.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_vz);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_vz.checked);
        lastChecked_checkbox_vz = $('.select-editer-channels .channel-dis-edit input[type="checkbox"]')[start];
      } else {
        $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
        update_select_count_channels()
      }
    });

    $('body').on('change', '.select-editer-channels .channel-dis-edit input', function () {
      $(this).prop('checked', !$(this).prop('checked'));
      update_select_count_channels()
    });

    function update_select_count_channels() {
      var count = $('.select-editer-channels .channel-dis-edit input:checked').length;
      if (count > 0) {
        $('#count-selects-channels').addClass('active');
        $('#count-selects-channels').html(`${translater(translate.noty.other.selects)}: ${count + NumberEnd(count, translater(translate.noty.number_end.channels))}`);
        $('.action-delete-channels').addClass('active');
      } else {
        $('.action-delete-channels').removeClass('active');
        $('#count-selects-channels').removeClass('active');
      }
    }

    function close_save_btc_pars_edit() {
      $('.save-btn-pars-list-edit span').css('opacity', '0');
      $('.save-btn-pars-list-edit').css('height', '0px');
      $('.save-btn-pars-list-edit').css('margin-top', '0px');
      setTimeout(function () {
        $('.save-btn-pars-list-edit').css('display', 'none');
      }, 350);
      delete_users = [];
    }

    var data_modal_pars_edit;

    $('body').on('click', '.block-before-table table tbody .btn-edit-pars-list', function () {
      var that = $(this);
      var id = that.attr('list-id');
      $('.modal-body .list-pars-edit ul').html('');
      $('#edit-invite-pars-list').removeClass('active');
      close_all_pars_edit();
      get_pars_list(id).then(async (data) => {
        check_start_pars = false;
        if (!data.type) return noty('error', pop_error);
        var invite = data.data.invite;
        if (invite && invite.indexOf('|') >= 0) invite = invite.split('|')[0];
        var tmp = await get_pars_data_of_file(id);
        var users = tmp.data;
        if (users.length < 1) return noty('error', translater(translate.noty.pars.little_count_u));
        data_modal_pars_edit = users;
        var html = ``;
        var i = 0;
        var ava;
        data_modal_pars_edit.forEach(function (e) {
          i++;
          if (i < 101) {
            var name = e.username;
            if (name) {
              html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
              $('.modal-body .list-pars-edit ul').append(html);
            }
          }
        });
        var hash = that.attr('list-id');
        $('#modal-edit-pars-list').attr('list-id', hash);
        $('#edit-invite-pars-list').val(invite);
        $('.modal-body .count-pars-list-edit-checkbox span:last-child').text(translater(translate.noty.other.total) + ': ' + Object.keys(data_modal_pars_edit).length);
        $('.modal').modal('hide');
        $('.list-pars-edit li .fa-copy').addClass('waves-effect');
        $('#modal-edit-pars-list').modal('show');
      }).catch((r) => {
        logntiwpoer(r);
        check_start_pars = false;
        return noty('error', pop_error);
      });
    });

    $('body').on('click', '#edit-invite-pars-list', function () {
      var t = $(this);
      t.blur();
      document.querySelector(`[tooltip-data-id="${t.attr('tooltip-data-id')}"]`)._tippy.destroy();
      t.removeAttr('tooltip-data-id');
      t.attr('tooltip', translater(translate.noty.other.edit));
      t.addClass('active');
      t.removeAttr('readonly');
      t.focus();
    });

    $('body').on('change', '#edit-invite-pars-list', function () {
      var t = $(this);
      var val = t.val();
      if (!val || val == '' || val.length < 2) {
        t.css('border', '1px solid red');
        setTimeout(() => {
          t.css('border', '');
        }, 2000);
        return;
      }
      var invite = `https://discord.gg/${get_invite_code(val)}`;
      t.val(invite);
      t.removeClass('active');
      t.attr('readonly', '');
      t.blur();
      var id = $('#modal-edit-pars-list').attr('list-id');
      var tab = $(`#table-pars tbody tr[list-id="${id}"] td:nth-child(2) span z`);
      document.querySelector(`[tooltip-data-id="${tab.attr('tooltip-data-id')}"]`)._tippy.destroy();
      tab.attr('invite', invite);
      tab.attr('tooltip', invite);
      tab.removeAttr('tooltip-data-id');
      update_tooltips()
      get_pars_lists().then(data => {
        if (!data.type) return;
        var pars = data.data;
        var new_p = [];
        pars.forEach(e => {
          if (e.id == id && e.invite) {
            if (e.invite.indexOf('|') >= 0) {
              e.invite = `${invite}${e.invite.substr(e.invite.indexOf('|'))}`;
            } else {
              e.invite = invite;
            }
          }
          new_p.push(e);
        })
        fat_get_pars_lists = new_p;
        setTimeout(() => {
          store.set('pars', new_p);
        }, 7.5 * 1000);
      })
    });

    function check_invite_of(invite) {
      return new Promise(fin => {
        invite = get_invite_code(invite);
        var params = {
          url: `https://discord.com/api/v9/invites/${invite}`,
          method: 'GET'
        };
        req(params, (err, response, body) => {
          if (err || !response || !body) return fin({ type: false, err: 1 });
          if (response.statusCode != 200) return fin({ type: false });
          return fin({ type: true });
        });
      });
    }

    $('body').on('hidden.bs.modal', '#modal-edit-pars-list', function () {
      data_modal_pars_edit = false;
    });

    function get_time_from_unix(time, timew) {
      var a = '';
      if (time < 60) {
        a = translater(translate.noty.number_end.time.now);
      } else if ((time) >= 60 && (time) < 3600) {
        a = Math.round(time / 60) + ' ' + NumberEnd(Math.round(time / 60), translater(translate.noty.number_end.time.mins)) + ' ' + translater(translate.noty.number_end.time.ago);
      } else if ((time) >= 3600 && (time) < 7200) {
        a = translater(translate.noty.number_end.time.hour);
      } else if ((time) >= 7200 && (time) < 57600) {
        a = Math.round(time / 3600) + ' ' + NumberEnd(Math.round(time / 3600), translater(translate.noty.number_end.time.hours)) + ' ' + translater(translate.noty.number_end.time.ago);
      } else if (time >= 57600) {
        a = new Date(Number(timew * 1000));
        a = moment(a).format('DD.MM H:mm');
      }
      return a;
    }

    function update_time_from_hist_pars() {
      var now = Math.round(new Date().getTime() / 1000);
      $('.history-pars-date').each(function (e) {
        var time = datetoTimestamp($(this).attr('data-data'));
        time = get_time_from_unix(now - time, time);
        $(this).html(time);
      });
      return true;
    }

    function time() {
      return Math.round(new Date().getTime() / 1000);
    }

    function datetoTimestamp(strDate) {
      var a = (moment(strDate, 'DD.MM.YYYY H:mm')._d.getTime() / 1000).toFixed(0);
      return parseInt(a);
    }

    function NumberEnd(number, titles, laster = false) {
      var last = titles[2];
      if (number == 0) return last;
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    // $('body').on('click', '#table-accounts .change-status-account', function () {
    //   return false;
    //   var that = $(this);
    //   $('.change-status-account.active').removeClass('active');
    //   if (that.attr('class').indexOf('active') >= 0) return false;
    //   var thats = $('.list-change-status-account');
    //   thats.css('opacity', '0');
    //   thats.css('display', 'none');
    //   that.addClass('active');
    //   that.find('.list-change-status-account').css('display', 'block');
    //   setTimeout(function () {
    //     that.find('.list-change-status-account').css('opacity', '1');
    //   }, 50);
    // });

    $('body').on('change', '#table-accounts .account-status', function () {
      update_status_acc($(this).attr('hash'));
      var all = `${$('#table-accounts tbody tr').length}${NumberEnd($('#table-accounts tbody tr').length, translater(translate.noty.number_end.accs))}`;
      $('.statics-accs gug vgr').html(all);
      var active = `${$('#table-accounts tbody tr td:nth-child(2) input:checked').length} ${NumberEnd($('#table-accounts tbody tr td:nth-child(2) input:checked').length, translater(translate.noty.number_end.activer))}`
      $('.statics-accs gug span').html(active);
    });

    var check_up_status_acc = false;

    function update_status_acc(name) {
      if (!name) return false;
      //if (!store.has('accounts')) return false;
      if (fat_get_accounts) {
        var acces = fat_get_accounts;
        acces.forEach((e, index) => {
          if (e.name == name) {
            if (e.status) {
              e.status = false
            } else {
              e.status = true
            }
            acces[index] = e;
          }
        });
        fat_get_accounts = acces;
      } else {
        fat_get_accounts = store.get('accounts');
        var acces = fat_get_accounts;
        acces.forEach((e, index) => {
          if (e.name == name) {
            if (e.status) {
              e.status = false
            } else {
              e.status = true
            }
            acces[index] = e;
          }
        });
        fat_get_accounts = acces;
      }
      var tmp_fat_get_accounts = fat_get_accounts;
      if (check_up_status_acc) return;
      check_up_status_acc = true;
      setTimeout(() => {
        check_up_status_acc = false;
        if (fat_get_accounts) {
          store.set('accounts', fat_get_accounts);
        } else {
          store.set('accounts', tmp_fat_get_accounts);
        }
      }, 5 * 1000);
      //return {type: true, status: status};
    }

    $('body').on('click', '#add_more_accs', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.btn-add-account').removeClass('more');
        $(this).html(translater(translate.noty.other.add_accs_button));
        $('#modal-add-account .def-settings').removeClass('hide');
        $('#modal-add-account .def-settings-two').removeClass('active');
        $('.parameter-def-settings[type="token"]').css('display', '');
      } else {
        $('.parameter-def-settings[type="token"]').css('display', 'none');
        $('.btn-add-account').addClass('more');
        $(this).html(translater(translate.noty.other.add_acc_button));
        $(this).addClass('active');
        $('#modal-add-account .def-settings').addClass('hide');
        $('#modal-add-account .def-settings-two').addClass('active');
      }
    });

    var fat_get_accounts = false

    function get_accounts() {
      if (fat_get_accounts) {
        var accs = fat_get_accounts;
        logntiwpoer('fat_get_accounts');
      } else {
        var accs = store.get('accounts');
      }
      if (!accs || accs.length <= 0) return false;
      fat_get_accounts = accs;
      return accs;
    }

    $('body').on('change', '#format-export-accounts', function () {
      var format = $(this).val();
      for (var i = 0; i < 10; i++) {
        format = format.replace('email', '')
        format = format.replace('token', '')
        format = format.replace('password', '')
      }
      if (format.length < 1) return false;
      var rz = format.substr(0, 1);
      var m = $(this).val().split(rz);
      var val = '';
      var tokens = store.get('accounts_token');
      get_accounts().forEach(e => {
        var text = '';
        var token = false;
        tokens.forEach(r => {
          if (r.email == e.login) token = r.token;
        })
        m.forEach(z => {
          if (z == 'email') text += `${e.login}${rz}`;
          if (z == 'password') text += `${e.pass}${rz}`;
          if (z == 'token' && token) text += `${token}${rz}`;
        })
        val += `${text.substr(0, text.length - 1)}\n`;
      });
      var modal = $('#modal-export-accounts');
      modal.find('textarea').val(val);
    });

    $('body').on('click', '.btn-check_account', function () {
      $('.modal').modal('hide');
      $('#modal-check-accounts .select-checker-accounts').html('');
      $('#count-of-sel-accs-checker pro').html('0 ' + translater(translate.noty.other.accountsr));
      get_accounts().forEach(e => {
        if (e.status) {
          var html = `<div class="checker-acc-sel"><div class="email" hash="${sha1(e.login)}">${e.login}</div><input type="checkbox"></div>`;
          $('#modal-check-accounts .select-checker-accounts').prepend(html);
        }
      });
      $('#modal-check-accounts').modal('show');
    });

    $('body').on('click', '.btn-export-accs', function () {
      var modal = $('#modal-export-accounts');
      var tokens = store.get('accounts_token');
      var val = '';
      get_accounts().forEach(e => {
        if (e.status) {
          var token = false;
          tokens.forEach(r => {
            if (r.email == e.login) token = r.token;
          })
          if (token) {
            val += `${e.login}:${e.pass}:${token}\n`
          } else {
            val += `${e.login}:${e.pass}\n`
          }
        }
      });
      modal.find('textarea').val(val);
      $('.modal').modal('hide');
      modal.modal('show');
    });

    function get_account_from_token(token) {
      if (fat_get_acc_token_v) {
        var data = fat_get_acc_token_v;
        if (!data || data.length <= 0) return false;
        var check = false;
        data.forEach((e, ind, arr) => {
          if (e.token == token) {
            check = get_account_from_email(e.email);
            return check;
          }
        })
        if (!check) return false;
        return check;
      } else {
        logntiwpoer('fat_get_acc_token_v');
        var data = store.get('accounts_token');
        fat_get_acc_token_v = data;
        setTimeout(() => {
          fat_get_acc_token_v = false;
        }, 5 * 1000);
        if (!data || data.length <= 0) return false;
        var check = false;
        data.forEach((e, ind, arr) => {
          if (e.token == token) {
            check = get_account_from_email(e.email);
            return check;
          }
        })
        if (!check) return false;
        return check;
      }
    }

    function get_account_from_email(email) {
      if (fat_get_accounts) {
        var accs = fat_get_accounts;
      } else {
        var accs = store.get('accounts');
        fat_get_accounts = accs;
      }
      if (!accs || accs.length <= 0) return false;
      var acc = false;
      accs.forEach((e) => {
        if (e.login == email) {
          check = true;
          acc = e;
        }
      });
      return acc;
    }

    function get_account(name) {
      if (fat_get_accounts) {
        var accs = fat_get_accounts;
      } else {
        var accs = store.get('accounts');
      }
      if (!accs || accs.length <= 0) return false;
      fat_get_accounts = accs;
      var acc = false;
      accs.forEach((e) => {
        if (e.name == name) {
          check = true;
          acc = e;
        }
      });
      return acc;
    }

    function push_accounts_html() {
      var count = 0;
      var accs = get_accounts()
      if (!accs || accs.length <= 0) return false;
      accs = accs.reversedCopy();
      $('.select-account').html('');
      //var html;
      accs.forEach(e => {
        if (e.status) {
          count++;
          var name = e.name;
          var html = `<option value="${name}">${name}</option>`;
          $('.select-account').append(html);
        }
      });
      $('.select-account').prepend(`<option value="false" disabled>-</option>`);
      var block = $('.select-account-change');
      if (block.length <= 0) return false;
      var val = $('#select-account').val();
      block.find('option').removeAttr('disabled');
      block.find('option[value="false"]').attr('disabled', '');
      var check = false;
      val.forEach((e) => {
        block.find(`option[value="${e}"]`).attr('disabled', '');
        if ($('.selectric-select-account-change .label').text() == e) check = true
      });
      block.selectric('refresh');
      if (check) $('.selectric-select-account-change .label').text('');
      setTimeout(() => {
        $('.selectric-select-account .label').text('');
        $('.select-account').selectric('refresh');
      }, 100);
    }

    $('body').on('change', '#select-account', function () {
      var block = $('.select-account-change');
      if (block.length <= 0) return false;
      var val = $(this).val();
      if (typeof val != 'object') return;
      var check = false;
      block.find('option').removeAttr('disabled');
      block.find('option[value="false"]').attr('disabled', '');
      val.forEach((e) => {
        block.find(`option[value="${e}"]`).attr('disabled', '');
        if ($('.selectric-select-account-change .label').text() == e) check = true
      });
      block.selectric('refresh');
      if (check) $('.selectric-select-account-change .label').text('');
      var input = $('#select-account-change');
      if (input.val().length <= 0) return false;
      var nval = [];
      input.find('option').each(function () {
        if ($(this).attr('value') != 'false' && val.indexOf($(this).attr('value')) < 0) nval.push($(this).attr('value'));
      });
      input.val(nval);
      input.selectric('refresh');
    });

    var check_push_btn_pars = false;

    var check_parsing_g = false;

    $('body').on('click', '.btn-start-pars', function () {
      if ($(this).hasClass('waiting')) return false;
      check_pars_memebers = false;
      check_push_btn_pars = false;
      var params = false;
      if (last_type_pars == 0) {
        var invite = $('#input-invite-to-server').val();
        if (!invite || invite == '') return noty('error', translater(translate.noty.pars.dont_provide_invite));
      } else {
        var invite = tmp_data['invites-for-multi-pars'];
        if (!invite) return noty('error', translater(translate.noty.other.dont_p_i));
        if (invite.length < 2) return noty('error', translater(translate.noty.other.min_count_invites_p));
      }
      var account = $('#select-account').val();
      if (!account || account == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      var avatars = $('#check-avatars').val();
      if (avatars == '0') {
        avatars = false;
      } else {
        avatars = true;
        if (!params) params = {};
        params.check_avatar = true;
      }
      if ($('#check-privilege-checkbox').prop('checked')) {
        if (!params) params = {};
        if (!last_roles_data || last_roles_data.length <= 0) return noty('error', translater(translate.noty.other.need_pars_roles_p_u));
        params.roles = last_roles_data;
        logntiwpoer(params);
      }
      var device = $('#client-status-device').val();
      var status = $('#check-status-users').val();
      if (status.length > 0) {
        if (!params) params = {};
        params.check_status = status;
      }
      if (device.length > 0) {
        if (!params) params = {};
        params.clientStatus = device;
      }
      var check_join = $('#check-join-time-checkbox').prop('checked');
      if (check_join) {
        if (!params) params = {};
        params.time_to_check_join = true;
        var from = $('#input-date-first').val();
        var to = $('#input-date-second').val();
        if (!from || from == '' || !to || to == '') return noty('error', translater(translate.noty.other.dont_p_jt));
        from = Math.round(new Date(moment(from, 'DD.MM.YYYY')._d).getTime() / 1000);
        to = Math.round(new Date(moment(to, 'DD.MM.YYYY')._d).getTime() / 1000);
        if (from > to) return noty('error', translater(translate.noty.other.wrong_jt));
        params.time_to_check_join_from = from;
        params.time_to_check_join_to = to;
      }
      var check_reg = $('#check-reg-time-checkbox').prop('checked');
      if (check_reg) {
        if (!params) params = {};
        params.time_reg = true;
        var fromf = $('#input-date-reg-first').val();
        var tof = $('#input-date-reg-second').val();
        if (!fromf || tof == '' || !tof || tof == '') return noty('error', translater(translate.noty.other.dont_p_rt));
        fromf = Math.round(new Date(moment(fromf, 'DD.MM.YYYY')._d).getTime() / 1000);
        tof = Math.round(new Date(moment(tof, 'DD.MM.YYYY')._d).getTime() / 1000);
        if (fromf > tof) return noty('error', translater(translate.noty.other.wrong_rt));
        params.time_reg_from = fromf;
        params.time_reg_to = tof;
      }
      if ($('#check-parse-gaming').prop('checked')) {
        if (!params) params = {}
        if (!localStorage['activity-games-pars-list']) return noty('error', translater(translate.noty.other.dont_provide_games_list));
        params.games = JSON.parse(localStorage['activity-games-pars-list'])
      }
      var limit = 50000;
      if ($('#limit-count-users').val() != '') {
        limit = parseInt($('#limit-count-users').val());
        if (limit < 5) return noty('error', translater(translate.noty.other.min_l_u));
        if (limit > 50000000) return noty('error', translater(translate.noty.other.max_l_u));
      }
      var black_servers = false;
      if ($('#check-black-servers').prop('checked')) {
        if (!tmp_data['invites-for-black-servers'] || tmp_data['invites-for-black-servers'].length < 1) return noty('error', translater(translate.noty.other.dont_put_invites_mut_servers));
        black_servers = tmp_data['invites-for-black-servers'];
      }
      var verify_server = $('#enabler_channel_verification').prop('checked');
      if (verify_server) {
        if (!$('#channel-verify-message-id-pars').val() || $('#channel-verify-message-id-pars').val() == '') return noty('error', translater(translate.noty.other.dont_provite_id_v));
        if ($('#channel-verify-message-id-pars').val().length < 10 || $('#channel-verify-message-id-pars').val().length > 20) return noty('error', translater(translate.noty.other.wrong_m_id_v));
        if (!$('#channel-verify-channel-id-pars').val() || $('#channel-verify-channel-id-pars').val() == '') return noty('error', translater(translate.noty.other.did_not_provid_channel_id));
        if ($('#channel-verify-channel-id-pars').val().length < 10 || $('#channel-verify-channel-id-pars').val().length > 20) return noty('error', translater(translate.noty.other.wrong_v_channel_id));
        verify_server = {
          message: $('#channel-verify-message-id-pars').val(),
          channel: $('#channel-verify-channel-id-pars').val()
        }
      }
      var ownChannelsId = $('#enable-own-channels-list').val();
      if (!ownChannelsId || ownChannelsId.length < 5) ownChannelsId = false;
      var pars_voices = $('#check-parse-voices').prop('checked');
      noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: account }));
      var email = get_account(account).login;
      var pass = get_account(account).pass;
      var ttoken = get_acc_token(email);
      if (!ttoken && !get_account(account).rucaptcha) return noty('error', translater(translate.noty.other.dont_h_ar, false, { account: account }));
      if (ttoken) {
        //noty('warning', translater(translate.noty.other.starting_pars));
        parser_api(invite, ttoken, limit, params, account, last_type_pars, black_servers, pars_voices, verify_server, ownChannelsId).then((check) => {
          if (!check.type) {
            var btn = $('.btn-start-pars');
            btn.removeClass('waiting');
            if (check.err == 404) return noty('error', translater(translate.noty.pars.wrong_invite));
            return noty('error', translater(translate.noty.other.wrong_pars, false, { err: check.err }));
          }
          if (last_type_pars == 0) {
            users = check.list;
            create_pars();
          } else {
            var data = check.data;
            create_pars_lists(data);
          }
        })
      } else {
        loginer_acc_api(email, pass, get_account(account).rucaptcha).then((check) => {
          if (!check.type) {
            setTimeout(() => {
              update_status_acc(account);
            }, 1000);
            var btn = $('.btn-start-pars');
            btn.removeClass('waiting');
            return noty('error', translater(translate.noty.other.dont_have_tok_a));
          }
          //noty('warning', translater(translate.noty.other.starting_pars));
          parser_api(invite, check.token, limit, params, account, last_type_pars, black_servers, pars_voices, verify_server).then((check) => {
            if (!check.type) {
              var btn = $('.btn-start-pars');
              btn.removeClass('waiting');
              return noty('error', translater(translate.noty.other.wrong_pars, false, { err: check.err }));
            }
            if (last_type_pars == 0) {
              users = check.list;
              create_pars();
            } else {
              var data = check.data;
              create_pars_lists(data);
            }
          })
        })
      }
      var btn = $(this);
      btn.addClass('waiting');
      check_parsing_g = true;
      check_start_pars = false;
      return false;
      if ($(this).hasClass('waiting')) return false;
      check_pars_memebers = false;
      check_push_btn_pars = false;
      var invite = $('#input-invite-to-server').val();
      if (!invite || invite == '') return noty('error', translater(translate.noty.pars.dont_provide_invite));
      var account = $('#select-account').val();
      if (!account || account == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      var avatars = $('#check-avatars').val();
      if (avatars == '0') {
        avatars = false;
      } else {
        avatars = true;
      }
      var privel = $('#check-privilege').val();
      if (privel == '0') {
        privel = false;
      } else {
        privel = true;
      }
      var mobile = $('#check-mobile').val();
      if (mobile == '0') {
        mobile = false;
      } else {
        mobile = true;
      }
      var status = $('#check-status-users').val();
      users = [];
      noty('warning', translater(translate.noty.pars.start_pars));
      var btn = $(this);
      btn.addClass('waiting');
      check_parsing_g = true;
      check_start_pars = false;
      pars_members(invite, account, avatars, privel, status, mobile).then((data) => {
        global_driver.quit();
        check_parsing_g = false;
        if (!data.type) {
          btn.removeClass('waiting');
          if (data.error && data.error == 'invite') {
            return noty('error', translater(translate.noty.pars.wrong_invite));
          } else {
            if (data.err) {
              return noty('error', pop_error);
            } else {
              return noty('error', pop_error);
            }
          }
        } else if (!check_push_btn_pars) {
          create_pars();
        }
      });
    });

    $('body').on('keyup', '.search-dis-list-friends input', function () {
      var val = $(this).val();
      if (val == '') return $('.select-editer-friends .friend-dis-edit').css('display', '');
      $('.select-editer-friends .friend-dis-edit').css('display', 'none');
      $('.select-editer-friends .friend-dis-edit').each(function () {
        if ($(this).find('.name span').text().indexOf(val) >= 0) $(this).css('display', '');
      })
    });

    $('body').on('click', '#put_usernames_to_adder', function () {
      $('.modal').modal('hide');
      $('#modal-edit-editer-friends').val('');
      setTimeout(() => {
        if (localStorage['adder-friends']) {
          var val = ''
          JSON.parse(localStorage['adder-friends']).forEach(e => {
            val += `${e}\n`;
          })
          $('#modal-edit-editer-friends textarea').val(val);
        }
        $('#modal-edit-editer-friends').modal('show');
      }, 150);
    });

    $('body').on('click', '#modal-edit-editer-friends .buttons .btn-modals:first-child', function () {
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-edit-account').modal();
      }, 150);
    });

    $('body').on('click', '#modal-edit-editer-friends .buttons .btn-modals:last-child', function () {
      var val = $('#modal-edit-editer-friends textarea').val();
      if (!val || val == '') return noty('error', translater(translate.noty.other.too_smal_usernames_list));
      var names = val.split('\n');
      if (names.length < 1) return noty('error', translater(translate.noty.other.too_smal_usernames_list));
      var friends = [];
      names.forEach(e => {
        if (friends.indexOf(e) < 0 && e.length > 2 && e.length < 32 && e.indexOf('#') > 0 && e.substr(e.indexOf('#') + 1).length == 4 && friends.length < 500) friends.push(e);
      })
      if (friends.length < 1) return noty('error', translater(translate.noty.other.too_smal_usernames_list));
      localStorage.setItem('adder-friends', JSON.stringify(friends));
      $('#count-of-adder-friends').html(`${friends.length}${NumberEnd(friends.length, translater(translate.noty.number_end.users))}`)
      $('#count-of-adder-friends').addClass('active');
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-edit-account').modal('show');
      }, 150);
    });

    $('body').on('click', '#check-friends-adder', function () {
      if ($(this).prop('checked')) {
        if (localStorage['adder-friends'] && JSON.parse(localStorage['adder-friends']).length > 0) {
          $('#count-of-adder-friends').html(`${JSON.parse(localStorage['adder-friends']).length}${NumberEnd(JSON.parse(localStorage['adder-friends']).length, translater(translate.noty.number_end.users))}`)
          $('#count-of-adder-friends').addClass('active');
        }
        $('#put_usernames_to_adder').addClass('active');
        $('#turn-on-adder').css({ 'margin-left': '-120px' });
      } else {
        $('#count-of-adder-friends').removeClass('active');
        $('#put_usernames_to_adder').removeClass('active');
        $('#turn-on-adder').css({ 'margin-left': '' });
      }
    });

    $('body').on('click', '#check-editer-status', function () {
      if ($(this).prop('checked')) {
        if (localStorage['users-status-editer'] && JSON.parse(localStorage['users-status-editer']).length > 0) {
          var data = JSON.parse(localStorage['users-status-editer']);
          $('#count-of-status-editer').html(`${data.length}${NumberEnd(data.length, translater(translate.noty.number_end.statuses))}`)
          $('#count-of-status-editer').addClass('active');
        }
        $('#put_status_to_editer').addClass('active');
        $('#turn-on-status').css({ 'margin-left': '-120px' });
      } else {
        $('#count-of-status-editer').removeClass('active');
        $('#put_status_to_editer').removeClass('active');
        $('#turn-on-status').css({ 'margin-left': '' });
      }
    });

    $('body').on('click', '#check-editer-activity', function () {
      if ($(this).prop('checked')) {
        if (localStorage['users-activity-editer'] && JSON.parse(localStorage['users-activity-editer']).length > 0) {
          var data = JSON.parse(localStorage['users-activity-editer']);
          $('#count-of-activity-editer').html(`${data.length}${NumberEnd(data.length, translater(translate.noty.number_end.activity))}`)
          $('#count-of-activity-editer').addClass('active');
        }
        $('#put_activity_to_editer').addClass('active');
        $('#turn-on-activity').css({ 'margin-left': '-120px' });
      } else {
        $('#count-of-activity-editer').removeClass('active');
        $('#put_activity_to_editer').removeClass('active');
        $('#turn-on-activity').css({ 'margin-left': '' });
      }
    });

    $('body').on('click', '#put_status_to_editer', () => {
      var data = localStorage['users-status-editer'];
      if (data) {
        data = JSON.parse(data);
      } else {
        data = [];
      }
      var val = '';
      data.forEach(e => {
        val += `${e}\r\n`;
      })
      $('#modal-edit-editer-status-accounts #status-input').val(val);
      if (localStorage['users-status-emoji-editer']) {
        var data = localStorage['users-status-emoji-editer'];
        if (data) {
          data = JSON.parse(data);
        } else {
          data = [];
        }
        var val = '';
        data.forEach(e => {
          val += `${e}\r\n`;
        })
        $('#modal-edit-editer-status-accounts #emoji-input').val(val);
      }
      $('.modal').modal('hide');
      $('#modal-edit-editer-status-accounts').modal('show');
    })

    $('body').on('click', '#put_activity_to_editer', () => {
      var data = localStorage['users-activity-editer'];
      if (data) {
        data = JSON.parse(data);
      } else {
        data = [];
      }
      var val = '';
      data.forEach(e => {
        val += `${e}\r\n`;
      })
      $('#modal-edit-editer-activity-accounts textarea').val(val);
      $('.modal').modal('hide');
      $('#modal-edit-editer-activity-accounts').modal('show');
    })

    $('body').on('click', '#save-status-editer-accounts', () => {
      var val = $('#modal-edit-editer-status-accounts #status-input').val();
      if (!val) return noty('error', translater(translate.noty.other.dont_set_statuses_editer))
      var data = [];
      val.split('\n').forEach(e => {
        e = e.replace('\r', '');
        e = e.replace('\n', '');
        if (e.length > 0 && e != '\n' && data.indexOf(e) < 0) data.push(e);
      })
      if (data.length < 1) return noty('error', translater(translate.noty.other.to_small_list_of_statuses))
      localStorage.setItem('users-status-editer', JSON.stringify(data));
      var emoji = [];
      var val = $('#modal-edit-editer-status-accounts #emoji-input').val();
      if (val) {
        val.split('\n').forEach(e => {
          e = e.replace('\r', '');
          e = e.replace('\n', '');
          if (e != '\n' && e.length > 0 && emoji.indexOf(e) < 0) emoji.push(e);
        })
        if (emoji.length > 0) localStorage.setItem('users-status-emoji-editer', JSON.stringify(emoji));
      }
      $('#count-of-status-editer').text(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.statuses))}`);
      $('#count-of-status-editer').addClass('active');
      $('.modal').modal('hide');
      $('#modal-edit-account').modal('show');
    })

    $('body').on('click', '#save-activity-editer-accounts', () => {
      var val = $('#modal-edit-editer-activity-accounts textarea').val();
      if (!val) return noty('error', translater(translate.noty.other.too_small_activitys_editer))
      var data = [];
      val.split('\n').forEach(e => {
        e = e.replace('\r', '');
        e = e.replace('\n', '');
        if (e.length > 0 && e != '\n' && data.indexOf(e) < 0) data.push(e);
      })
      if (data.length < 1) return noty('error', translater(translate.noty.other.too_small_activitys_editer))
      localStorage.setItem('users-activity-editer', JSON.stringify(data));
      var type = $('#type-of-activity-editer').val();
      localStorage.setItem('users-activity-type-editer', JSON.stringify(type));
      $('#count-of-activity-editer').text(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.activity))}`);
      $('#count-of-activity-editer').addClass('active');
      $('.modal').modal('hide');
      $('#modal-edit-account').modal('show');
    })

    function add_friend(username, token) {
      return new Promise(fin => {
        var discriminator = parseInt(username.split('#')[username.split('#').length - 1]);
        username = username.split('#')[0];
        var properties = {
          "os": "Windows",
          "browser": "Chrome",
          "device": "",
          "system_locale": "ru-RU",
          "browser_user_agent": window.MyUserAgent,
          "browser_version": window.MyBrowserVersion,
          "os_version": "10",
          "referrer": "",
          "referring_domain": "",
          "referrer_current": "",
          "referring_domain_current": "",
          "release_channel": "stable",
          "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
          "client_event_source": null
        }
        var params = {
          url: 'https://discord.com/api/v9/users/@me/relationships',
          method: 'POST',
          headers: {
            authorization: token,
            //'accept-language': 'ru',
            'origin': 'https://discord.com',
            'referer': 'https://discord.com/channels/@me',
            //  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
            'dnt': '1',
            'content-type': 'application/json',
            //'x-context-properties': 'eyJsb2NhdGlvbiI6IkFjY2VwdCBJbnZpdGUgUGFnZSIsImxvY2F0aW9uX2d1aWxkX2lkIjoiNDYwNDcyNDUwNzI4MzI5MjE3IiwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjQ2MDQ3MjQ1MDcyODMyOTIxOSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=',
            //  'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
            'user-agent': properties['browser_user_agent'],
            'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
          },
          json: {
            discriminator: discriminator,
            username: username
          }
        };
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          if (err || !response) return fin({ type: false });
          if (body != '' && typeof body == 'object' && body.message && body.message.indexOf('verify') >= 0) return noty('error', translater(translate.noty.other.need_verify_email_u));
          if (response.statusCode != 204) return fin({ type: false, err: body });
          return fin({ type: true });
        })
      });
    }

    function create_pars_lists(data) {
      check_push_btn_pars = true;
      for (var i = 0; i < 10; i++) check_pars_memebers = true;
      var btn = $('.btn-start-pars');
      btn.removeClass('waiting');
      var e = 0;
      var finish_data = [];
      var finish_data_members = [];
      var now = new Date().getTime();
      if (store.has('pars')) finish_data = store.get('pars');
      //if (store.has('pars_members')) finish_data_members = store.get('pars_members');
      data.forEach((dat, ind, arr) => {
        var users = dat.users;
        for (var key in users) if (users.hasOwnProperty(key)) e++;
        if (e < 1) return noty('error', translater(translate.noty.pars.little_count_u));
        var members = [];
        users.forEach((e) => {
          members.push({
            username: e.username,
            id: e.user_id
          });
        })
        var id = uuid();
        var server_name = dat.server_name;
        var server_avatar = dat.server_avatar;
        var invite = dat.invite;
        var limit = dat.limit;
        finish_data.push({
          id: id,
          time: now,
          count: members.length,
          invite: invite,
          limit: limit,
          server: {
            name: server_name,
            avatar: server_avatar
          },
          status: true
        })
        // finish_data_members.push({
        //   id: id,
        //   members: members
        // })
        push_file_of_pars_list(id, members);
      });
      setTimeout(() => {
        //store.set('pars_members', finish_data_members);
        store.set('pars', finish_data);
      }, 1500);
      fat_get_pars_lists = finish_data;
      noty('success', translater(translate.noty.pars.finish_pars));
      setTimeout(() => {
        push_pars();
      }, 300);
    }

    function push_file_of_pars_list(id, data) {
      var remote = require('electron').remote;
      var app = remote.app;
      var app_path = app.getPath('userData');
      data = JSON.stringify(data)
      fs.exists(`${app_path}/pars_data`, check => {
        if (!check) {
          fs.mkdir(`${app_path}/pars_data`, () => {
            fs.writeFile(`${app_path}/pars_data/${id}`, data, () => { });
          });
        } else {
          fs.writeFile(`${app_path}/pars_data/${id}`, data, () => { });
        }
      });
      return true;
    }

    function get_pars_data_of_file(id) {
      return new Promise(async fin => {
        var remote = require('electron').remote;
        var app = remote.app;
        var app_path = app.getPath('userData');
        try {
          fs.readFile(`${app_path}/pars_data/${id}`, 'utf8', (err, data) => {
            if (err) return fin({ type: false, err: err });
            return fin({ type: true, data: JSON.parse(data) });
          });
        } catch (e) {
          return fin({ type: false })
        }
      })
    }

    function create_pars() {
      check_push_btn_pars = true;
      for (var i = 0; i < 10; i++) check_pars_memebers = true;
      var btn = $('.btn-start-pars');
      btn.removeClass('waiting');
      var e = 0;
      for (var key in users) if (users.hasOwnProperty(key)) e++;
      if (e < 1) return noty('error', translater(translate.noty.pars.little_count_u));
      var members = [];
      users.forEach((e) => {
        members.push({
          username: e.username,
          id: e.user_id
        });
      })
      var id = uuid();
      var server_name = last_pars_data.server_name;
      var server_avatar = last_pars_data.server_avatar;
      var invite = last_pars_data.invite;
      var limit = last_pars_data.limit;
      if (store.has('pars')) {
        var data = store.get('pars');
        data.push({
          id: id,
          time: new Date().getTime(),
          count: members.length,
          invite: invite,
          limit: limit,
          server: {
            name: server_name,
            avatar: server_avatar
          },
          status: true
        });
        push_file_of_pars_list(id, members);
        setTimeout(() => {
          store.set('pars', data);
        }, 1500);
        fat_get_pars_lists = data;
      } else {
        var data = [];
        data.push({
          id: id,
          time: new Date().getTime(),
          count: members.length,
          invite: invite,
          limit: limit,
          server: {
            name: server_name,
            avatar: server_avatar
          },
          status: true
        });
        push_file_of_pars_list(id, members);
        setTimeout(() => {
          store.set('pars', data);
        }, 1500)
        fat_get_pars_lists = data;
      }
      noty('success', translater(translate.noty.pars.finish_pars));
      setTimeout(() => {
        push_pars();
      }, 300);
    }

    $('body').on('click', '.btn-start-pars.waiting', function () {
      //create_pars();
    });

    $('body').on('click', '.btn-edit-pars-name-list', function () {
      var id = $(this).attr('list-id');
      var b = $(`#table-pars tr[list-id="${id}"] td:nth-child(2) span input`);
      b.addClass('active');
      b.removeAttr('readonly');
      b.focus();
      b.attr('first', Buffer.from(b.val()).toString('base64'));
      document.querySelector(`[tooltip-data-id="${$(`#table-pars tr[list-id="${id}"] td:nth-child(2) span z`).attr('tooltip-data-id')}"]`)._tippy.disable();
    });

    $('body').on('keyup', '.edit-pars-list-name.active', function (e) {
      if (e.key != 'Escape' || e.keyCode != 27) return;
      var id = $(this).attr('hash');
      var block = $(this);
      var val = Buffer.from(block.attr('first'), 'base64').toString();
      block.val(val);
      block.removeClass('active');
      block.attr('readonly', '');
      block.blur();
      document.querySelector(`[tooltip-data-id="${$(`#table-pars tr[list-id="${id}"] td:nth-child(2) span z`).attr('tooltip-data-id')}"]`)._tippy.enable()
      block.removeAttr('first');
    });

    $('body').on('change', '.edit-pars-list-name', function () {
      var id = $(this).attr('hash');
      var block = $(`#table-pars tr[list-id="${id}"] td:nth-child(2) input`);
      var name = block.val();
      if (!name || name == '' || name.length < 1 || name.length > 1000) {
        block.css('border', '1px solid red');
        setTimeout(() => {
          block.css('border', '');
        }, 1500);
        return;
      }
      block.removeClass('active');
      block.attr('readonly', '');
      document.querySelector(`[tooltip-data-id="${$(`#table-pars tr[list-id="${id}"] td:nth-child(2) span z`).attr('tooltip-data-id')}"]`)._tippy.enable()
      update_name_pars_list(id, name)
      block.blur();
    });

    function update_name_pars_list(id, name) {
      return new Promise(fin => {
        get_pars_lists().then((data) => {
          if (!data.type) return fin({ type: false });
          data.data.forEach((e) => {
            if (e.id == id) {
              e.server.name = name;
            }
          });
          fat_get_pars_lists = data.data;
          setTimeout(() => {
            if (fat_get_pars_lists) {
              store.set('pars', fat_get_pars_lists)
            } else {
              store.set('pars', data.data)
            }
          }, 3 * 1000)
          return fin({ type: true });
        });
      });
    }

    $('body').on('click', '.block-before-table table tbody .span-copy-server-invite', function () {
      if ($(this).find('input').hasClass('active')) return;
      var text = $(this).attr('invite');
      copyToClipboard(text);
      noty('success', translater(translate.noty.other.copied), 300);
      return true;
    });

    $('body').on('click', '.block-before-table table tbody .span-copy-server-invite-spam', function () {
      var text = $(this).attr('tooltip');
      copyToClipboard(text);
      noty('success', translater(translate.noty.other.copied), 300);
      return true;
    });

    $('body').on('click', '.block-before-table table tbody .span-copy-server-invite-channels', function () {
      var text = $(this).attr('tooltip');
      copyToClipboard(text);
      noty('success', translater(translate.noty.other.copied), 300);
      return true;
    });

    function get_time_to_history(time) {
      return moment(new Date(time)).format('DD.MM.YYYY H:mm');
    }

    function check_account(token) {
      return new Promise(fin => {
        var params = {
          url: 'https://discord.com/api/v9/users/@me/library',
          method: 'GET',
          headers: {
            'Authorization': token,
            //  'dnt': '1',
            //  'origin': 'https://discord.com',
            //  'referer': 'https://discord.com/channels/@me',
            //  'content-type': 'text/plain'
          }
        }
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          //  console.log('response.statusCode', response.statusCode, 'body', body)
          if (err || !response || !response.statusCode) return fin({ type: 'proxy' });
          if (response.statusCode != 200) return fin({ type: false });
          return fin({ type: true });
        })
      });
    }

    var success_count_check_accs = 0;

    function update_success_count_check_accs() {
      var count = success_count_check_accs;
      $('#count-success-checker span').html(count);
    }

    $('body').on('click', '.btn-start-checker', function () {
      if ($(this).hasClass('waiting')) return false;
      var accs = [];
      $('.select-checker-accounts .checker-acc-sel').each(function () {
        var email = $(this).find('.email').text();
        var val = $(this).find('input').prop('checked');
        if (val) accs.push(email);
      });
      if (accs.length <= 0) return noty('error', translater(translate.noty.dis.emped_accounts));
      $(this).addClass('waiting');
      success_count_check_accs = 0;
      $('#count-success-checker span').html('0');
      $('#count-success-checker all').html(accs.length);
      $('#count-success-checker').addClass('active');
      var off = $('#off-bad-accs-check').prop('checked');
      noty('warning', translater(translate.noty.other.start_check));
      $('.checker-acc-sel .email').css('color', '');
      checker_accs(accs, off).then((check) => {
        $('.btn-start-checker').removeClass('waiting');
        $('#count-success-checker').removeClass('active');
        if (!check.type) return noty('error', translater(translate.noty.other.err_checkr, false, { err: check.err }));
        noty('success', translater(translate.noty.other.succ_check, false, { count: (success_count_check_accs + NumberEnd(success_count_check_accs, translater(translate.noty.number_end.accs))) }));
        success_count_check_accs = 0;
      });
    })

    function checker_accs(accounts, off = false) {
      return new Promise(fin => {
        var bad_accs = [];
        accounts.forEach((e, ind, arr) => {
          setTimeout(() => {
            var accer = get_account_from_email(e);
            var email = e;
            var pass = accer.pass;
            var name = accer.name;
            var rucaptcha = accer.rucaptcha;
            var counts = 0;
            loginer_acc_api(email, pass, rucaptcha).then(check => {
              var checked = false;
              if (!check.type) {
                // checked = true;
                // counts++;
                // if (counts < 5) noty('error', 'Не удалось получить токен от аккаунта - '+email);
              }
              var token = check.token;
              check_account(token).then((check) => {
                if (ind == arr.length - 1) {
                  setTimeout(() => {
                    if (off) update_status_accs(bad_accs);
                    fin({ type: true });
                  }, 150);
                }
                if (check.type == 'proxy') return
                success_count_check_accs++;
                update_success_count_check_accs();
                var block = $('.checker-acc-sel .email[hash="' + sha1(email) + '"]');
                if (!check.type) {
                  bad_accs.push(name);
                  if (off) $('.account-status[hash="' + name + '"]').prop('checked', false);
                  return block.css('color', '#000');
                }
                block.css('color', '#00ff0a');
              })
            });
          }, 100 * ind);
        });
      });
    }

    function update_status_accs(accs) {
      var all = get_accounts();
      var new_p = [];
      var emails = [];
      var new_pp = [];
      all.forEach((e) => {
        if (accs.indexOf(e.name) >= 0) e.status = false;
        new_p.push(e);
        emails.push(e.login);
      });
      // if (fat_get_acc_token_v) {
      //   var data = fat_get_acc_token_v;
      //   data.forEach((e, ind, arr) => {
      //     if (emails.indexOf(e.email) < 0) new_pp.push(e);
      //   })
      // } else {
      //   var data = store.get('accounts_token');
      //   fat_get_acc_token_v = data;
      //   setTimeout(() => {
      //     fat_get_acc_token_v = false;
      //   }, 5 * 1000);
      //   data.forEach((e, ind, arr) => {
      //     if (emails.indexOf(e.email) < 0) new_pp.push(e);
      //   })
      // }
      //store.set('accounts_token', new_pp);
      //fat_get_acc_token_v = new_pp;
      fat_get_accounts = new_p;
      setTimeout(() => {
        store.set('accounts', new_p);
      }, 5 * 1000);
    }

    function close_all_pars_edit() {
      lastChecked_checkbox = null;
      check_all_checbox_data = false;
      checkbox_data = [];
      close_save_btc_pars_edit();
      check_search_pars_edit = false;
      $('.modal-body .list-pars-edit ul li.search').remove();
      $('.modal-body .search-list-pars-edit input[type="text"]').val('');
      $('.action-pars-list-edit span').css('opacity', '0');
      $('.list-pars-edit').css('display', 'block');
      $('.count-pars-list-edit-checkbox').css('display', 'block');
      $('.count-pars-list-edit-checkbox').css('opacity', '1');
      $('.count-pars-list-edit-checkbox').css('height', '50px');
      $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
      $('.action-pars-list-edit-checkbox').css('display', 'block');
      $('.action-pars-list-edit-checkbox').css('opacity', '1');
      $('.action-pars-list-edit-checkbox').css('height', '25px');
      $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
      $('.save-btn-pars-list-edit').css('opacity', '0');
      $('.save-btn-pars-list-edit').css('height', '0px');
      $('.save-btn-pars-list-edit').css('margin-top', '0px');
      $('.add-users-to-pars-list').css('display', 'block');
      $('.add-users-to-pars-list').css('opacity', '1');
      $('.add-users-to-pars-list').css('height', '25px');
      $('.add-users-to-pars-list').css('margin-top', '5px');
      $('.list-pars-edit').css('opacity', '1');
      $('.action-pars-list-edit').css('height', '0px');
      $('.action-pars-list-edit').css('margin-top', '0px');
      setTimeout(function () {
        $('.action-pars-list-edit').css('display', 'none');
      }, 350);
      $('.input-add-users-to-pars-list').css('display', 'none');
      $('.input-add-users-to-pars-list').css('opacity', '0');
      $('.input-add-users-to-pars-list textarea').val('');
      $('.action-add-users-to-pars-list').css({
        'margin-top': '0px',
        'height': '0px',
        'opacity': '0'
      });
      $('.action-get-users-to-pars-list').css({
        'margin-top': '0px',
        'height': '0px',
        'opacity': '0'
      });
      $('.input-get-list-users').css('display', 'none');
      $('.input-get-list-users').css('opacity', '0');
      $('.input-get-list-users textarea').val('');
      $('.input-get-list-users textarea').css('height', '0');
      $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
    }

    $('body').on('change', '#export-user-ids-pars input', function () {
      setTimeout(() => {
        $('#export-user-ids-pars input').val('');
      }, 150);
      var path = this.files[0].path;
      if (!path || path == '') return noty('error', translater(translate.noty.other.error_with_export_pars));
      var val = '';
      data_modal_pars_edit.forEach((e) => {
        val += e.id + '\n';
      });
      fs.writeFile(path, val, function (err) {
        if (err) return noty('error', translater(translate.noty.other.error_with_export_pars));
        noty('success', translater(translate.noty.other.success_export));
      });
    });

    $('body').on('change', '#file-to-export-pars', function () {
      setTimeout(() => {
        $('#file-to-export-pars').val('');
      }, 150);
      var path = this.files[0].path;
      if (!path || path == '') return noty('error', translater(translate.noty.other.error_with_export_pars));
      var val = '';
      data_modal_pars_edit.forEach((e) => {
        val += e.username + '\n';
      });
      fs.writeFile(path, val, function (err) {
        if (err) return noty('error', translater(translate.noty.other.error_with_export_pars));
        noty('success', translater(translate.noty.other.success_export));
      });
    });

    $('body').on('change', '#file-to-import-pars', async function () {
      setTimeout(() => {
        $('#file-to-import-pars').val('');
      }, 150);
      var path = this.files[0].path;
      if (!path || path == '') return noty('error', translater(translate.noty.other.error_with_import_pars));
      try {
        var val = fs.readFileSync(path, 'utf-8');
        var count = 0;
        var users = [];
        val.split('\n').forEach((e, ind) => {
          if (e.indexOf(':') >= 0) {
            var username = e.split(':')[0];
            var id = e.split(':')[1];
          } else {
            var username = `Imported-User-${rand(1, 100)}#${rand(1000, 9999)}`;
            var id = e;
          }
          var check = false;
          try {
            data_modal_pars_edit.forEach(e => {
              if (e.id == id) check = true;
            })
          } catch (err) { }
          if (!id || typeof id != 'string' || id.length < 16 || id.length > 100 || check) return;
          count++;
          users.push({
            username,
            id
          })
        });
        var id = $('#modal-edit-pars-list').attr('list-id');
        var check = await add_users_to_pars_list(id, users)
        if (!check.type) {
          console.error('err39009343', check);
          return noty('error', pop_error);
        }

        $('.input-add-users-to-pars-list textarea').css('height', '0px');
        $('.input-add-users-to-pars-list').css('opacity', '0');
        setTimeout(function () {
          $('.action-add-users-to-pars-list').css({
            'margin-top': '0px',
            'height': '0px',
            'opacity': '0'
          });
          lastChecked_checkbox = null;
          check_all_checbox_data = false;
          checkbox_data = [];
          close_save_btc_pars_edit();
          check_search_pars_edit = false;
          $('.list-pars-edit ul').html('');
          $('.modal-body .list-pars-edit ul li.search').remove();
          $('.modal-body .search-list-pars-edit input[type="text"]').val('');
          $('.action-pars-list-edit span').css('opacity', '0');
          $('.list-pars-edit').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('opacity', '1');
          $('.count-pars-list-edit-checkbox').css('height', '50px');
          $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.action-pars-list-edit-checkbox').css('display', 'block');
          $('.action-pars-list-edit-checkbox').css('opacity', '1');
          $('.action-pars-list-edit-checkbox').css('height', '25px');
          $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.add-users-to-pars-list').css('display', 'block');
          $('.add-users-to-pars-list').css('opacity', '1');
          $('.add-users-to-pars-list').css('height', '25px');
          $('.add-users-to-pars-list').css('margin-top', '5px');
          $('.list-pars-edit').css('opacity', '1');
          $('.action-pars-list-edit').css('height', '0px');
          $('.action-pars-list-edit').css('margin-top', '0px');
          setTimeout(function () {
            $('.action-pars-list-edit').css('display', 'none');
          }, 350);
          $('.input-add-users-to-pars-list').css('display', 'none');
          $('.input-add-users-to-pars-list').css('opacity', '0');
          $('.input-add-users-to-pars-list textarea').val('');
          $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
          $('.search-list-pars-edit').css('display', 'block');
          $('.search-list-pars-edit').css('opacity', '.6');
          $('.search-list-pars-edit').css('height', '34px');
          $('.search-list-pars-edit').css('margin-bottom', '15px');
          get_pars_list(id).then(async (data) => {
            if (!data.type) return noty('error', pop_error);
            var tmp = await get_pars_data_of_file(id);
            var users = tmp.data;
            data_modal_pars_edit = users;
            var html = ``;
            var i = 0;
            var ava;
            data_modal_pars_edit.forEach(function (e) {
              i++;
              if (i < 101) {
                var name = e.username;
                html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                $('.modal-body .list-pars-edit ul').append(html);
              }
            });
            event_change_checkboxes()
          })
        }, 300);

        return noty('success', translater(translate.noty.other.success_import, {
          count: NumberEnd(count, translater(translate.noty.number_end.users))
        }))
      } catch (err) {
        console.error(err)
        return noty('error', translater(translate.noty.other.error_with_import_pars));
      }
    });

    $('body').on('click', '.action-pars-list-edit-checkbox-channels span:first-child', function () {
      $('.list-pars-edit-channels').css('height', '0px');
      $('.list-pars-edit-channels').css('opacity', '0');
      $('.count-pars-list-edit-checkbox-channels').css('opacity', '0');
      $('.count-pars-list-edit-checkbox-channels').css('height', '0px');
      $('.count-pars-list-edit-checkbox-channels').css('margin-top', '0px');
      $('.action-pars-list-edit-checkbox-channels').css('opacity', '0');
      $('.action-pars-list-edit-checkbox-channels').css('height', '0px');
      $('.action-pars-list-edit-checkbox-channels').css('margin-top', '0px');
      $('.save-btn-pars-list-edit-channels').css('opacity', '0');
      $('.save-btn-pars-list-edit-channels').css('height', '0px');
      $('.save-btn-pars-list-edit-channels').css('margin-top', '0px');
      $('.search-list-pars-channels-edit').css('height', '0px');
      $('.search-list-pars-channels-edit').css('opacity', '0');
      $('.search-list-pars-channels-edit').css('margin-bottom', '0px');
      $('.random-list-channels').css('height', '0');
      $('.random-list-channels').css('opacity', '0');
      $('.random-list-channels').css('margin-bottom', '0px');
      last_pars_data_modal_channels.forEach((e) => {
        var val = $('.input-get-list-channels textarea').val();
        val += e + '\n';
        $('.input-get-list-channels textarea').val(val)
      });
      setTimeout(function () {
        $('.count-pars-list-edit-checkbox').css('display', 'none');
        $('.action-pars-list-edit-checkbox').css('display', 'none');
        $('.search-list-pars-edit').css('display', 'none');
        $('.list-pars-edit-channels').css('display', 'none');
        $('.input-get-list-channels').css('display', 'block');
        setTimeout(() => {
          $('.input-get-list-channels textarea').css('height', '425px');
          $('.input-get-list-channels').css('opacity', '1');
          $('.list-pars-edit').css('height', '465px');
          $('.action-get-channels-to-pars-list').css('display', 'block');
          $('.action-get-channels-to-pars-list').css('opacity', '1');
          $('.action-get-channels-to-pars-list').css('height', '25px');
          $('.action-get-channels-to-pars-list').css('margin-top', '10px');
        }, 50);
      }, 350);
    });

    $('body').on('click', '.modal-body .action-get-users-to-pars-list span:first-child', function () {
      close_all_pars_edit();
    });

    $('body').on('click', '.modal-body .action-get-users-to-pars-list span:last-child', function () {
      $('.input-get-list-users textarea').select();
      document.execCommand("copy");
      return noty('success', translater(translate.noty.other.copied), 300);
    });

    $('body').on('click', '.modal-body .list-pars-edit ul li .fa-copy', function () {
      var text = $(this).attr('name');
      if (!copyToClipboard(text)) {
        noty('error', translater(translate.noty.other.dont_copied));
        return false;
      } else {
        noty('success', translater(translate.noty.other.copied), 300);
        return true;
      }
    });
    $('body').on('mouseenter', '.modal-body .list-pars-edit ul li', function (event) {
      var that = $(this);
      var id = that.find('input[type="checkbox"]').attr('name');
      var index = $(this).index();
      if (index >= 5 && mouseDown == 1 && scroll_pars_list == 0) {
        factor_scroll = factor_scroll + 0.5;
        if (factor_scroll > 7) {
          factor_scroll = 7;
        }
        if (event.pageY > pageY) {
          var div = $('.modal-body .list-pars-edit');
          if (div.scrollTop() <= div.prop('scrollHeight') - 100) {
            var ax = div.scrollTop() + ($('.modal-body .list-pars-edit ul li').height() + 7 + factor_scroll);
            $({ Counter: div.scrollTop() }).animate({ Counter: ax }, {
              duration: Math.ceil(250 / factor_scroll),
              easing: 'swing',
              step: function (e) {
                div.scrollTop(Math.ceil(e));
              }
            });
          }
        } else {
          var div = $('.modal-body .list-pars-edit');
          if (div.scrollTop() <= div.prop('scrollHeight') - 100) {
            var ax = div.scrollTop() - ($('.modal-body .list-pars-edit ul li').height() + 7 + factor_scroll);
            $({ Counter: div.scrollTop() }).animate({ Counter: ax }, {
              duration: Math.ceil(200 / factor_scroll),
              easing: 'swing',
              step: function (e) {
                div.scrollTop(Math.ceil(e));
              }
            });
          }
        }
      }
      pageY = event.pageY;
      if (mouseDown == 1 && checkbox[id] == true || !checkbox[id] && mouseDown == 1) {
        checkbox[id] = false;
        var check = that.find('input[type="checkbox"]');
        if (!check.is(":checked")) {
          checkbox_data[id] = true;
          check.prop('checked', true);
          event_change_checkboxes();
          return false;
        } else {
          delete checkbox_data[id];
          check.prop('checked', false);
          event_change_checkboxes();
          return false;
        }
      } else {
        return false;
      }
    });

    $('body').on('mouseenter', '.modal-body .list-pars-edit ul li', function () {
      var id = $(this).find('input[type="checkbox"]').attr('id');
      checkbox[id] = true;
      return false;
    });

    $('body').on('click', '.modal-body .list-pars-edit ul li', function (e) {
      if ($(this).find('.fa-copy').is(':hover') || e.target.className.indexOf('fa-copy') >= 0) return;
      var that = $(this);
      var id = that.find('input[type="checkbox"]').attr('name');
      var checkboxes = $('.modal-body .list-pars-edit ul li .checkbox input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox) {
          lastChecked_checkbox = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox.checked = true;
        } else {
          lastChecked_checkbox.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox);
        $('.modal-body .list-pars-edit ul li').each(function (e) {

        });
        checkbox_data[id] = true;
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox.checked);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).each(function (e) {
          checkbox_data[$(this).attr('name')] = true;
        });
        lastChecked_checkbox = $('.modal-body .list-pars-edit ul li .checkbox input[type="checkbox"]')[start];
        event_change_checkboxes();
      } else {
        lastChecked_checkbox = that.find('input[type="checkbox"]');
      }
      if (checkbox[id] == true || !checkbox[id]) {
        var check = that.find('input[type="checkbox"]');
        if (!check.is(":checked")) {
          checkbox_data[id] = true;
          check.prop('checked', true);
          event_change_checkboxes();
          return false;
        } else {
          delete checkbox_data[id];
          check.prop('checked', false);
          event_change_checkboxes();
          return false;
        }
      } else {
        return false;
      }
    });

    var mouseDown = 0;
    document.body.onmousedown = function () {
      ++mouseDown;
      if (mouseDown > 1) {
        mouseDown = 1;
      }
    }
    document.body.onmouseup = function () {
      --mouseDown;
      factor_scroll = 2;
      if (mouseDown < 0) {
        mouseDown = 0;
      }
    }

    const checkbox = [];

    function event_change_checkboxes() {
      $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': ' + Object.keys(checkbox_data).length);
      $('.modal-body .count-pars-list-edit-checkbox span:last-child').text(translater(translate.noty.other.total) + ': ' + Object.keys(data_modal_pars_edit).length);
      if (Object.keys(checkbox_data).length > 0) {
        $('.action-pars-list-edit').css('display', 'block');
        setTimeout(() => {
          $('.action-pars-list-edit').css('height', '24px');
          $('.action-pars-list-edit').css('margin-top', '15px');
          $('.action-pars-list-edit span').css('opacity', '1');
        }, 50);
      } else {
        $('.action-pars-list-edit span').css('opacity', '0');
        $('.action-pars-list-edit').css('height', '0px');
        $('.action-pars-list-edit').css('margin-top', '0px');
        setTimeout(function () {
          $('.action-pars-list-edit').css('display', 'none');
        }, 350);
      }
    }

    var checkbox_data = [];

    var scroll_pars_list = 0;

    $('body').on('click', '.action-pars-list-edit-checkbox span:last-child', function () {
      checkbox_data = [];
      check_all_checbox_data = false;
      $('.modal-body .list-pars-edit ul li .checkbox input').prop('checked', false);
      event_change_checkboxes();
    });

    var check_all_checbox_data = false;

    document.addEventListener('scroll', function (event) {
      if (event.target.id === 'list_pars_edit') {
        if (check_search_pars_edit) return false;
        var div = $('#list_pars_edit');
        var index = Number($('.modal-body .list-pars-edit ul li:last-child').attr('index'));
        var top = div.scrollTop();
        if (lst_scroll_pars_edit > top) {
          lst_scroll_pars_edit = top;
          if (Number($('.modal-body .list-pars-edit ul li:first-child').attr('index')) <= 0) {
            return false;
          }
        } else {
          lst_scroll_pars_edit = top;
          if (index + 1 >= Object.keys(data_modal_pars_edit).length) {
            return false;
          }
        }
        lst_scroll_pars_edit = top;
        var check = false;
        if (div.scrollTop() + div.height() > div.prop('scrollHeight') - (div.prop('scrollHeight') * 0.1).toFixed(0)) {
          var html = ``;
          for (var i = index; i < index + 61; i++) {
            if (data_modal_pars_edit[i] && data_modal_pars_edit[i].username) {
              var e = data_modal_pars_edit[i].username;
              if (e) {
                var name = e;
                if (i + 1 >= Object.keys(data_modal_pars_edit).length || $('#checkbox_p_' + sha1(name)).length >= 1) {

                } else {
                  check = true;
                  $('.modal-body .list-pars-edit ul li:first-child').remove();
                  html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                  $('.modal-body .list-pars-edit ul').append(html);
                }
              }
            }
          }
          if (check) {
            div.scrollTop(div.prop('scrollHeight') - (div.prop('scrollHeight') * 0.7).toFixed(0));
          }
        } else if (div.scrollTop() + div.height() < div.prop('scrollHeight') - (div.prop('scrollHeight') * 0.8).toFixed(0)) {
          var html;
          var check = false;
          index = Number($('.modal-body .list-pars-edit ul li:first-child').attr('index'));
          for (var i = index; i > index - 61; i--) {
            if (data_modal_pars_edit[i] && data_modal_pars_edit[i].username) {
              var e = data_modal_pars_edit[i].username;
              var name = e;
              if (e) {
                if (i <= 1 || i + 1 >= Object.keys(data_modal_pars_edit).length || $('#checkbox_p_' + sha1(name)).length >= 1) {

                } else {
                  check = true;
                  $('.modal-body .list-pars-edit ul li:last-child').remove();
                  html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                  $('.modal-body .list-pars-edit ul').prepend(html);
                }
              }
            }
          }
          if (check) {
            div.scrollTop(div.prop('scrollHeight') - (div.prop('scrollHeight') * 0.5).toFixed(0));
          }
        }
      }
    }, true);

    var check_search_pars_edit = false;

    var lst_scroll_pars_edit = 0;

    function removeTags(txt) {
      if (txt) {
        var rex = /(<([^>]+)>)/ig;
        return txt.replace(rex, "");
      }
    }

    var mouse_o_h_b_channels = false;

    var fat_get_tmp_text_channels = false;
    var fat_get_tmp_text_has_channels = false;

    var mouse_o_h_b_comments = false;

    var fat_get_tmp_text_comments = false;
    var fat_get_tmp_text_has_comments = false;

    var mouse_o_h_b_autoanswer = false;

    function get_tmp_text_channels() {
      if (fat_get_tmp_text_channels) {
        var history = fat_get_tmp_text_channels;
      } else {
        if (!localStorage['text_history_channels']) {
          var history = false;
        } else {
          var history = JSON.parse(localStorage['text_history_channels']);
        }
      }
      if (!history) return false;
      fat_get_tmp_text_channels = history;
      return { type: true, data: history };
    }

    function push_text_history_channels(text) {
      if (fat_get_tmp_text_channels) {
        var now = fat_get_tmp_text_channels;
      } else {
        if (!localStorage['text_history_channels']) {
          var now = []
        } else {
          var now = JSON.parse(localStorage['text_history_channels']);
        }
      }
      if (now && now.length > 0 && now[now.length - 1] == text) return;
      now.push(text);
      if (now.length > 100) {
        var new_p = [];
        now.forEach((e, ind) => {
          if (ind != 0) new_p.push(e);
        })
        now = new_p;
      }
      fat_get_tmp_text_channels = now;
      setTimeout(() => {
        localStorage.setItem('text_history_channels', JSON.stringify(now));
      }, 500);
    }

    function get_tmp_text_comments() {
      if (fat_get_tmp_text_comments) {
        var history = fat_get_tmp_text_comments;
      } else {
        if (!localStorage['text_history_comments']) {
          var history = false;
        } else {
          var history = JSON.parse(localStorage['text_history_comments']);
        }
      }
      if (!history) return false;
      fat_get_tmp_text_comments = history;
      return { type: true, data: history };
    }

    function push_text_history_comments(text) {
      if (fat_get_tmp_text_comments) {
        var now = fat_get_tmp_text_comments;
      } else {
        if (!localStorage['text_history_comments']) {
          var now = []
        } else {
          var now = JSON.parse(localStorage['text_history_comments']);
        }
      }
      if (now && now.length > 0 && now[now.length - 1] == text) return;
      now.push(text);
      if (now.length > 100) {
        var new_p = [];
        now.forEach((e, ind) => {
          if (ind != 0) new_p.push(e);
        })
        now = new_p;
      }
      fat_get_tmp_text_comments = now;
      setTimeout(() => {
        localStorage.setItem('text_history_comments', JSON.stringify(now));
      }, 500);
    }

    $('body').on('change', '#text-to-message-channels', function () {
      var val = $(this).val();
      if (!val || val == '') return false;
      push_text_history_channels(val);
    });

    $('body').on('change', '#text-to-message-users-file', function () {
      var val = $(this).val();
      if (!val || val == '') return false;
      push_text_history_comments(val);
    });

    $('body').on('mouseover', '.block-history-text-dis-channels', function () {
      mouse_o_h_b_channels = true;
    })

    $('body').on('mouseleave', '.block-history-text-dis-channels', function (e) {
      mouse_o_h_b_channels = false;
      $(this).removeClass('active');
    })

    $('body').on('mouseover', '.block-history-text-dis-comments', function () {
      mouse_o_h_b_comments = true;
    })

    $('body').on('mouseleave', '.block-history-text-dis-comments', function (e) {
      mouse_o_h_b_comments = false;
      $(this).removeClass('active');
    })

    $('body').on('mouseover', '.block-history-text-dis-autoanswer', function () {
      mouse_o_h_b_autoanswer = true;
    })

    $('body').on('mouseleave', '.block-history-text-dis-autoanswer', function (e) {
      mouse_o_h_b_autoanswer = false;
      $(this).removeClass('active');
    })

    $('body').on('click', '.copy-hist-text', function () {
      copyToClipboard(Buffer.from($(this).attr('data'), 'base64').toString());
      var tooltip = $(`#tippy-${$(this).attr('tooltip-id')}`);
      tooltip.find('.tippy-content').html(translater(translate.noty.other.copied_pass));
    });

    $('body').on('mouseenter', '#get-my-spam-texts-channels', function () {
      var data = get_tmp_text_channels();
      $('.block-history-text-dis-channels .block-hist-text').remove();
      if (data.type) {
        data = data.data.reversedCopy();
        data.forEach((e) => {
          var f = e;
          e = encodeURIComponent(e);
          for (var i = 0; i < 5000; i++) {
            e = e.replace('%0A', ' ');
          }
          e = decodeURIComponent(e);
          if (e.substr(e.length - 1, e.length) == ' ') e = e.substr(0, e.length - 1);
          if (e.length > 50) {
            var text = `${e.substr(0, 50)}...`;
          } else {
            var text = e;
          }
          var html = `<div class="block-hist-text"><span>${text}</span><div tooltip="${translater(translate.noty.other.copy_btn)}" class="copy-hist-text-block-channels"><i data="${Buffer.from(f).toString('base64')}" class="fa fa-copy copy-hist-text-channels"></i></div></div>`
          $('.block-history-text-dis-channels').append(html);
        })
      }
      update_tooltips()
      $('.block-history-text-dis-channels').addClass('active');
    });

    $('body').on('mouseenter', '#get-my-spam-texts-comments', function () {
      var data = get_tmp_text_comments();
      $('.block-history-text-dis-comments .block-hist-text').remove();
      if (data.type) {
        data = data.data.reversedCopy();
        data.forEach((e) => {
          var f = e;
          e = encodeURIComponent(e);
          for (var i = 0; i < 5000; i++) {
            e = e.replace('%0A', ' ');
          }
          e = decodeURIComponent(e);
          if (e.substr(e.length - 1, e.length) == ' ') e = e.substr(0, e.length - 1);
          if (e.length > 50) {
            var text = `${e.substr(0, 50)}...`;
          } else {
            var text = e;
          }
          var html = `<div class="block-hist-text"><span>${text}</span><div tooltip="${translater(translate.noty.other.copy_btn)}" class="copy-hist-text-block"><i data="${Buffer.from(f).toString('base64')}" class="fa fa-copy copy-hist-text-comments"></i></div></div>`
          $('.block-history-text-dis-comments').append(html);
        })
      }
      update_tooltips()
      $('.block-history-text-dis-comments').addClass('active');
    });

    $('body').on('click', '#apply-blacklist-block', function () {
      var id = $('#modal-edit-pars-list').attr('list-id');
      apply_black_list_for_pars_list_users(id).then((data) => {
        if (!data.type) return noty('error', pop_error);
        $('.input-add-users-to-pars-list textarea').css('height', '0px');
        $('.input-add-users-to-pars-list').css('opacity', '0');
        setTimeout(function () {
          $('.action-add-users-to-pars-list').css({
            'margin-top': '0px',
            'height': '0px',
            'opacity': '0'
          });
          lastChecked_checkbox = null;
          check_all_checbox_data = false;
          checkbox_data = [];
          close_save_btc_pars_edit();
          check_search_pars_edit = false;
          $('.list-pars-edit ul').html('');
          $('.modal-body .list-pars-edit ul li.search').remove();
          $('.modal-body .search-list-pars-edit input[type="text"]').val('');
          $('.action-pars-list-edit span').css('opacity', '0');
          $('.list-pars-edit').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('opacity', '1');
          $('.count-pars-list-edit-checkbox').css('height', '50px');
          $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.action-pars-list-edit-checkbox').css('display', 'block');
          $('.action-pars-list-edit-checkbox').css('opacity', '1');
          $('.action-pars-list-edit-checkbox').css('height', '25px');
          $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.add-users-to-pars-list').css('display', 'block');
          $('.add-users-to-pars-list').css('opacity', '1');
          $('.add-users-to-pars-list').css('height', '25px');
          $('.add-users-to-pars-list').css('margin-top', '5px');
          $('.list-pars-edit').css('opacity', '1');
          $('.action-pars-list-edit').css('height', '0px');
          $('.action-pars-list-edit').css('margin-top', '0px');
          setTimeout(function () {
            $('.action-pars-list-edit').css('display', 'none');
          }, 350);
          $('.input-add-users-to-pars-list').css('display', 'none');
          $('.input-add-users-to-pars-list').css('opacity', '0');
          $('.input-add-users-to-pars-list textarea').val('');
          $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
          $('.search-list-pars-edit').css('display', 'block');
          $('.search-list-pars-edit').css('opacity', '.6');
          $('.search-list-pars-edit').css('height', '34px');
          $('.search-list-pars-edit').css('margin-bottom', '15px');
          get_pars_list(id).then(async (data) => {
            if (!data.type) return noty('error', pop_error);
            var tmp = await get_pars_data_of_file(id);
            var users = tmp.data;
            data_modal_pars_edit = users;
            var html = ``;
            var i = 0;
            var ava;
            data_modal_pars_edit.forEach(function (e) {
              i++;
              if (i < 101) {
                var name = e.username;
                html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                $('.modal-body .list-pars-edit ul').append(html);
              }
            });
          })
        }, 300);
        noty('success', translater(translate.noty.pars.update_u_list));
      });
    })

    $('body').on('click', '.random-list-users', function () {
      var id = $('#modal-edit-pars-list').attr('list-id');
      randomize_pars_list_users(id).then((data) => {
        if (!data.type) return noty('error', pop_error);
        $('.input-add-users-to-pars-list textarea').css('height', '0px');
        $('.input-add-users-to-pars-list').css('opacity', '0');
        setTimeout(function () {
          $('.action-add-users-to-pars-list').css({
            'margin-top': '0px',
            'height': '0px',
            'opacity': '0'
          });
          lastChecked_checkbox = null;
          check_all_checbox_data = false;
          checkbox_data = [];
          close_save_btc_pars_edit();
          check_search_pars_edit = false;
          $('.list-pars-edit ul').html('');
          $('.modal-body .list-pars-edit ul li.search').remove();
          $('.modal-body .search-list-pars-edit input[type="text"]').val('');
          $('.action-pars-list-edit span').css('opacity', '0');
          $('.list-pars-edit').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('opacity', '1');
          $('.count-pars-list-edit-checkbox').css('height', '50px');
          $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.action-pars-list-edit-checkbox').css('display', 'block');
          $('.action-pars-list-edit-checkbox').css('opacity', '1');
          $('.action-pars-list-edit-checkbox').css('height', '25px');
          $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.add-users-to-pars-list').css('display', 'block');
          $('.add-users-to-pars-list').css('opacity', '1');
          $('.add-users-to-pars-list').css('height', '25px');
          $('.add-users-to-pars-list').css('margin-top', '5px');
          $('.list-pars-edit').css('opacity', '1');
          $('.action-pars-list-edit').css('height', '0px');
          $('.action-pars-list-edit').css('margin-top', '0px');
          setTimeout(function () {
            $('.action-pars-list-edit').css('display', 'none');
          }, 350);
          $('.input-add-users-to-pars-list').css('display', 'none');
          $('.input-add-users-to-pars-list').css('opacity', '0');
          $('.input-add-users-to-pars-list textarea').val('');
          $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
          $('.search-list-pars-edit').css('display', 'block');
          $('.search-list-pars-edit').css('opacity', '.6');
          $('.search-list-pars-edit').css('height', '34px');
          $('.search-list-pars-edit').css('margin-bottom', '15px');
          get_pars_list(id).then(async (data) => {
            if (!data.type) return noty('error', pop_error);
            var tmp = await get_pars_data_of_file(id);
            var users = tmp.data;
            data_modal_pars_edit = users;
            var html = ``;
            var i = 0;
            var ava;
            data_modal_pars_edit.forEach(function (e) {
              i++;
              if (i < 101) {
                var name = e.username;
                html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                $('.modal-body .list-pars-edit ul').append(html);
              }
            });
          })
        }, 300);
        noty('success', translater(translate.noty.pars.update_u_list));
      });
    });

    function apply_black_list_for_pars_list_users(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        get_pars_list(id).then(async list => {
          if (!list.type) return fin({ type: false });
          list = list.data;
          var tmp = await get_pars_data_of_file(id);
          var users = tmp.data;

          var blackList = store.get('black_list_users');
          if (!blackList || blackList.length <= 0) {
            blackList = []
          } else {
            fat_black_list_users = blackList;
          }

          console.log('blackList', blackList)
          console.log('users', users)

          var newer = [];
          users.forEach(user => {
            var username = user.username;
            var id = user.id
            // var check = false;
            // blackList.forEach(e => {
            //   if (e.indexOf(id) >= 0) check = true;
            // })
            if (blackList.indexOf(username) < 0 && blackList.indexOf(sha1(username)) < 0 && blackList.indexOf(`${username}***`) < 0 && blackList.indexOf(sha1(`${username}***`)) < 0) newer.push(user);
          })
          users = newer;

          update_pars_list_users(id, users).then((check) => {
            if (!check.type) return fin({ type: false });
            return fin({ type: true });
          });
        });
      });
    }

    function randomize_pars_list_users(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        get_pars_list(id).then(async (list) => {
          if (!list.type) return fin({ type: false });
          list = list.data;
          var tmp = await get_pars_data_of_file(id);
          var users = tmp.data;
          users = shuffle(users);
          update_pars_list_users(id, users).then((check) => {
            if (!check.type) return fin({ type: false });
            return fin({ type: true });
          });
        });
      });
    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }


    function update_pars_list_users(id, members) {
      return new Promise((fin, fal) => {
        if (!id || !members) return fin({ type: false });
        get_pars_list(id).then(async (data) => {
          if (!data.type) return fin({ type: false });
          //data.data.members = members;
          await push_file_of_pars_list(id, members);
          var count = members.length;
          get_pars_lists().then((data) => {
            if (!data.type) return;
            data.data.forEach(e => {
              if (e.id == id) e.count = count;
            });
            fat_get_pars_lists = data.data;
            tmp_fat_get_pars_lists = fat_get_pars_lists;
            $(`#table-pars tr[list-id="${id}"] td:nth-child(3)`).html(`${count} ${NumberEnd(count, translater(translate.noty.number_end.users))}`);
            setTimeout(() => {
              if (fat_get_pars_lists) {
                store.set('pars', fat_get_pars_lists);
              } else {
                store.set('pars', tmp_fat_get_pars_lists);
              }
            }, 5 * 1000);
          });
          return fin({ type: true });
        }).catch(() => {
          return fin({ type: false });
        });
      });
    }

    $('body').on('click', '.modal-body .add-users-to-pars-list span:first-child', function () {
      var id = $('#modal-edit-pars-list').attr('list-id');
      get_pars_list(id).then((s) => {
        if (!s.type) return;
        $('.first-list-combiner img').attr('src', s.data.server.avatar);
        $('.first-list-combiner').attr('invite-link', s.data.invite);
        $('.first-list-combiner span b').html(s.data.server.name);
        get_pars_lists().then((data) => {
          if (!data.type) return;
          if (data.data.length < 2) return noty('error', translater(translate.noty.other.not_f_oth_list_users));
          $('.select-lists-comb-block').html('');
          data.data.forEach(e => {
            if (e.id != id) {
              var name = `${e.server.name} (${e.count} ${translater(translate.noty.other.usererd)})`;
              var invite = e.invite;
              var html = `<label class="block-list-sel" invite-link="${invite}">
                            <img src="${e.server.avatar}">
                            <span><vgr translate="Server" translate2="Servidor">Сервер</vgr>: <b>${name}</b></span>
                            <div class="checkbox">
                              <input type="checkbox" class="sel-list-combiner-checkbox" hash="${e.id}">
                            </div>
                          </label>`;
              $('.select-lists-comb-block').prepend(html);
            }
          })
          $('#select-all-merge-lists').removeClass('checked');
          $('#select-all-dublicates-merge-lists').removeClass('checked');
          $('#combine-lists-pars').addClass('hider');
          $('.modal').modal('hide');
          $('#modal-select-combiner-lists').modal('show');
        })
      })
    });

    $('body').on('change', '.sel-list-combiner-checkbox', function () {
      var count = $('.sel-list-combiner-checkbox:checked').length;
      $('#count-of-selected-pars-comb-lists y').html(count);
      if (count > 0) {
        $('#combine-lists-pars').removeClass('hider');
      } else {
        $('#combine-lists-pars').addClass('hider');
      }
    });

    $('body').on('click', '#combine-lists-pars', function () {
      if ($(this).hasClass('hider')) return;
      var first = $('#modal-edit-pars-list').attr('list-id');
      var count = $('.sel-list-combiner-checkbox:checked').length;
      var check = 0;
      var arrLists = []
      $('.sel-list-combiner-checkbox:checked').each(function () {
        arrLists.push($(this).attr('hash'));
      });
      arrLists.forEach(async (id, ind) => {
        await delayd(200 * ind);
        await combinar_pars_lists(first, id);
        if (ind == arrLists.length - 1) {
          $('.action-add-users-to-pars-list').css({
            'margin-top': '0px',
            'height': '0px',
            'opacity': '0'
          });
          lastChecked_checkbox = null;
          check_all_checbox_data = false;
          checkbox_data = [];
          close_save_btc_pars_edit();
          check_search_pars_edit = false;
          $('.list-pars-edit ul').html('');
          $('.modal-body .list-pars-edit ul li.search').remove();
          $('.modal-body .search-list-pars-edit input[type="text"]').val('');
          $('.action-pars-list-edit span').css('opacity', '0');
          $('.list-pars-edit').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('display', 'block');
          $('.count-pars-list-edit-checkbox').css('opacity', '1');
          $('.count-pars-list-edit-checkbox').css('height', '50px');
          $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.action-pars-list-edit-checkbox').css('display', 'block');
          $('.action-pars-list-edit-checkbox').css('opacity', '1');
          $('.action-pars-list-edit-checkbox').css('height', '25px');
          $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
          $('.add-users-to-pars-list').css('display', 'block');
          $('.add-users-to-pars-list').css('opacity', '1');
          $('.add-users-to-pars-list').css('height', '25px');
          $('.add-users-to-pars-list').css('margin-top', '5px');
          $('.list-pars-edit').css('opacity', '1');
          $('.action-pars-list-edit').css('height', '0px');
          $('.action-pars-list-edit').css('margin-top', '0px');
          setTimeout(function () {
            $('.action-pars-list-edit').css('display', 'none');
          }, 350);
          $('.input-add-users-to-pars-list').css('display', 'none');
          $('.input-add-users-to-pars-list').css('opacity', '0');
          $('.input-add-users-to-pars-list textarea').val('');
          $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
          $('.search-list-pars-edit').css('display', 'block');
          $('.search-list-pars-edit').css('opacity', '.6');
          $('.search-list-pars-edit').css('height', '34px');
          $('.search-list-pars-edit').css('margin-bottom', '15px');
          get_pars_list(first).then(async (data) => {
            await delayd(200);
            if (!data.type) return noty('error', pop_error);
            var tmp = await get_pars_data_of_file(first)
            var users = tmp.data;
            data_modal_pars_edit = users;
            var html = ``;
            var i = 0;
            var ava;
            data_modal_pars_edit.forEach(function (e) {
              i++;
              if (i < 101) {
                var name = e.username;
                html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                $('.modal-body .list-pars-edit ul').append(html);
              }
            });
            $('.modal-body .count-pars-list-edit-checkbox span:last-child').text(translater(translate.noty.other.total) + ': ' + Object.keys(data_modal_pars_edit).length);
          })
          $('.modal').modal('hide');
          $('#modal-edit-pars-list').modal('show');
          if (fat_get_pars_lists) store.set('pars', fat_get_pars_lists);
          noty('success', translater(translate.noty.pars.update_u_list));
        }
      });
    });

    $('body').on('click', '#disable-all-accs', function () {
      $('.account-status').prop('checked', false);
      if (fat_get_accounts) {
        var accs = fat_get_accounts;
      } else {
        var accs = store.get('accounts');
      }
      var new_p = [];
      if (!accs || accs.length <= 0) return;
      accs.forEach(e => {
        e.status = false;
        new_p.push(e);
      });
      fat_get_accounts = new_p;
      setTimeout(() => {
        store.set('accounts', new_p);
      }, 1000);
      var all = `${$('#table-accounts tbody tr').length}${NumberEnd($('#table-accounts tbody tr').length, translater(translate.noty.number_end.accs))}`;
      $('.statics-accs gug vgr').html(all);
      var active = `${$('#table-accounts tbody tr td:nth-child(2) input:checked').length} ${NumberEnd($('#table-accounts tbody tr td:nth-child(2) input:checked').length, translater(translate.noty.number_end.activer))}`
      $('.statics-accs gug span').html(active);
    });

    $('body').on('click', '#enable-all-accs', function () {
      $('.account-status').prop('checked', true);
      if (fat_get_accounts) {
        var accs = fat_get_accounts;
      } else {
        var accs = store.get('accounts');
      }
      if (!accs || accs.length <= 0) return;
      var new_p = [];
      accs.forEach(e => {
        e.status = true;
        new_p.push(e);
      });
      fat_get_accounts = new_p;
      setTimeout(() => {
        store.set('accounts', new_p);
      }, 1000);
      var all = `${$('#table-accounts tbody tr').length}${NumberEnd($('#table-accounts tbody tr').length, translater(translate.noty.number_end.accs))}`;
      $('.statics-accs gug vgr').html(all);
      var active = `${$('#table-accounts tbody tr td:nth-child(2) input:checked').length} ${NumberEnd($('#table-accounts tbody tr td:nth-child(2) input:checked').length, translater(translate.noty.number_end.activer))}`
      $('.statics-accs gug span').html(active);
    });

    $('body').on('click', '#delete-all-disable-accs', function () {
      var count = $('.account-status:checkbox:not(:checked)').length;
      if (count <= 0) return false;
      $('#modal-delete-disable-accounts .count-users v').html(`${count}${NumberEnd(count, translater(translate.noty.number_end.accs))}`)
      $('.modal').modal('hide');
      $('#modal-delete-disable-accounts').modal('show');
    });

    $('body').on('click', '#modal-delete-disable-accounts .modal-body .btn-modals:last-child', function () {
      deleter_dis_accs();
    });

    function deleter_dis_accs() {
      if (fat_get_accounts) {
        var accs = fat_get_accounts;
      } else {
        var accs = store.get('accounts');
      }
      var del = [];
      $('.account-status:checkbox:not(:checked)').each(function () {
        var name = $(this).attr('hash');
        del.push(name);
      });
      if (del.length <= 0) return false;
      var new_p = [];
      accs.forEach(e => {
        if (del.indexOf(e.name) < 0) new_p.push(e);
      });
      fat_get_accounts = new_p;
      setTimeout(() => {
        store.set('accounts', new_p);
      }, 1000);
      $('#table-accounts tbody tr').each(function () {
        var name = $(this).find('td:nth-child(1) .copy-password-account').attr('name');
        if (del.indexOf(name) >= 0) $(this).remove();
      })
      $('.modal').modal('hide');
      noty('success', translater(translate.noty.accounts.del_accs_suc));
      var all = `${$('#table-accounts tbody tr').length}${NumberEnd($('#table-accounts tbody tr').length, translater(translate.noty.number_end.accs))}`;
      $('.statics-accs gug vgr').html(all);
      var active = `${$('#table-accounts tbody tr td:nth-child(2) input:checked').length} ${NumberEnd($('#table-accounts tbody tr td:nth-child(2) input:checked').length, translater(translate.noty.number_end.activer))}`
      $('.statics-accs gug span').html(active);
    }

    $('body').on('click', '.modal-body .action-add-users-to-pars-list span:first-child', function () {
      $('.input-add-users-to-pars-list textarea').css('height', '0px');
      $('.input-add-users-to-pars-list').css('opacity', '0');
      setTimeout(function () {
        $('.action-add-users-to-pars-list').css({
          'margin-top': '0px',
          'height': '0px',
          'opacity': '0'
        });
        lastChecked_checkbox = null;
        check_all_checbox_data = false;
        checkbox_data = [];
        close_save_btc_pars_edit();
        check_search_pars_edit = false;
        $('.modal-body .list-pars-edit ul li.search').remove();
        $('.modal-body .search-list-pars-edit input[type="text"]').val('');
        $('.action-pars-list-edit span').css('opacity', '0');
        $('.list-pars-edit').css('display', 'block');
        $('.count-pars-list-edit-checkbox').css('display', 'block');
        $('.count-pars-list-edit-checkbox').css('opacity', '1');
        $('.count-pars-list-edit-checkbox').css('height', '50px');
        $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
        $('.action-pars-list-edit-checkbox').css('display', 'block');
        $('.action-pars-list-edit-checkbox').css('opacity', '1');
        $('.action-pars-list-edit-checkbox').css('height', '25px');
        $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
        $('.add-users-to-pars-list').css('display', 'block');
        $('.add-users-to-pars-list').css('opacity', '1');
        $('.add-users-to-pars-list').css('height', '25px');
        $('.add-users-to-pars-list').css('margin-top', '5px');
        $('.action-pars-list-edit').css('height', '0px');
        $('.action-pars-list-edit').css('margin-top', '0px');
        setTimeout(function () {
          $('.action-pars-list-edit').css('display', 'none');
        }, 350);
        setTimeout(() => {
          $('.list-pars-edit').css('height', '400px');
          $('.list-pars-edit').css('opacity', '1');
        }, 50);
        $('.input-add-users-to-pars-list').css('display', 'none');
        $('.input-add-users-to-pars-list').css('opacity', '0');
        $('.input-add-users-to-pars-list textarea').val('');
        $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
        $('.search-list-pars-edit').css('display', 'block');
        $('.search-list-pars-edit').css('opacity', '.6');
        $('.search-list-pars-edit').css('height', '34px');
        $('.search-list-pars-edit').css('margin-bottom', '15px');
        $('.modal-body .count-pars-list-edit-checkbox span:last-child').text(translater(translate.noty.other.total) + ': ' + Object.keys(data_modal_pars_edit).length);
      }, 300);
    });

    $('body').on('click', '.modal-body .action-add-users-to-pars-list span:last-child', function () {
      var val = $('.input-add-users-to-pars-list textarea').val();
      if (!val || val == '') return noty('error', translater(translate.noty.pars.little_count_u_t));
      var users = explode('\n', val);
      var success_users = [];
      if (!users || users.length <= 0) return noty('error', translater(translate.noty.pars.little_count_u_t));
      var check = true;
      get_pars_list($('#modal-edit-pars-list').attr('list-id')).then((memb) => {
        if (!memb.type) return noty('error', pop_error);
        memb = memb.data.members;
        users.forEach((e, i, a) => {
          if (!check) return false;
          var username = e.substr(0, e.indexOf('#'));
          var discriminator = e.substr(e.indexOf('#') + 1, e.length);
          if (!username || username == '' || discriminator.length != 4 || username.length < 1) { check = false; return noty('error', translater(translate.noty.pars.view_of_d_u)); }
          if (success_users.indexOf(e) >= 0) return noty('error', translater(translate.noty.pars.dont_repeat));
          if (memb.indexOf(e) >= 0) return noty('error', translater(translate.noty.pars.dont_repeat));
          success_users.push(e);
          if (i == a.length - 1) {
            if (!check) return false;
            var id = $('#modal-edit-pars-list').attr('list-id');
            add_users_to_pars_list(id, users).then((check) => {
              if (!check.type) return noty('error', pop_error);
              $('.input-add-users-to-pars-list textarea').css('height', '0px');
              $('.input-add-users-to-pars-list').css('opacity', '0');
              setTimeout(function () {
                $('.action-add-users-to-pars-list').css({
                  'margin-top': '0px',
                  'height': '0px',
                  'opacity': '0'
                });
                lastChecked_checkbox = null;
                check_all_checbox_data = false;
                checkbox_data = [];
                close_save_btc_pars_edit();
                check_search_pars_edit = false;
                $('.list-pars-edit ul').html('');
                $('.modal-body .list-pars-edit ul li.search').remove();
                $('.modal-body .search-list-pars-edit input[type="text"]').val('');
                $('.action-pars-list-edit span').css('opacity', '0');
                $('.list-pars-edit').css('display', 'block');
                $('.count-pars-list-edit-checkbox').css('display', 'block');
                $('.count-pars-list-edit-checkbox').css('opacity', '1');
                $('.count-pars-list-edit-checkbox').css('height', '50px');
                $('.count-pars-list-edit-checkbox').css('margin-top', '10px');
                $('.action-pars-list-edit-checkbox').css('display', 'block');
                $('.action-pars-list-edit-checkbox').css('opacity', '1');
                $('.action-pars-list-edit-checkbox').css('height', '25px');
                $('.action-pars-list-edit-checkbox').css('margin-top', '10px');
                $('.add-users-to-pars-list').css('display', 'block');
                setTimeout(() => {
                  $('.add-users-to-pars-list').css('opacity', '1');
                  $('.add-users-to-pars-list').css('height', '25px');
                  $('.add-users-to-pars-list').css('margin-top', '5px');
                  $('.list-pars-edit').css('opacity', '1');
                  $('.list-pars-edit').css('height', '');
                }, 50);
                $('.action-pars-list-edit').css('height', '0px');
                $('.action-pars-list-edit').css('margin-top', '0px');
                setTimeout(function () {
                  $('.action-pars-list-edit').css('display', 'none');
                }, 350);
                $('.input-add-users-to-pars-list').css('display', 'none');
                $('.input-add-users-to-pars-list').css('opacity', '0');
                $('.input-add-users-to-pars-list textarea').val('');
                $('.modal-body .count-pars-list-edit-checkbox span:first-child').text(translater(translate.noty.other.selected) + ': 0');
                $('.search-list-pars-edit').css('display', 'block');
                $('.search-list-pars-edit').css('opacity', '.6');
                $('.search-list-pars-edit').css('height', '34px');
                $('.search-list-pars-edit').css('margin-bottom', '15px');
                get_pars_list(id).then((data) => {
                  if (!data.type) return noty('error', pop_error);
                  data_modal_pars_edit = data.data.members;
                  var html = ``;
                  var i = 0;
                  var ava;
                  data_modal_pars_edit.forEach(function (e) {
                    i++;
                    if (i < 101) {
                      var name = e.username;
                      html = '<li index="' + i + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                      $('.modal-body .list-pars-edit ul').append(html);
                    }
                  });
                  $('.modal-body .count-pars-list-edit-checkbox span:last-child').text(translater(translate.noty.other.total) + ': ' + Object.keys(data_modal_pars_edit).length);
                  return true;
                });
              }, 300);
            });
          }
        });
      });
    });

    function explode(delimiter, string) {
      var emptyArray = { 0: '' };
      if (arguments.length != 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') return null;
      if (delimiter === '' || delimiter === false || delimiter === null) return false;
      if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') return emptyArray;
      if (delimiter === true) delimiter = '1';
      return string.toString().split(delimiter.toString());
    }

    function check_rucaptcha_key(key) {
      return new Promise((fin, fal) => {
        if (!key) return fin({ type: false });
        req({
          method: 'GET',
          url: `https://rucaptcha.com/res.php?key=${key}&action=getbalance&json=1`
        }, (err, response, body) => {
          logntiwpoer(body);
          if (err || !response || response.statusCode != 200 || !body) return fin({ type: false });
          body = JSON.parse(body);
          if (!body.request || body.request == 'ERROR_KEY_DOES_NOT_EXIST') return fin({ type: 'wrong_key' });
          if (parseFloat(body.request) < 0.2) return fin({ type: 'balance' });
          return fin({ type: 'success' });
        })
      });
    }

    function add_users_to_pars_list(id, users) {
      return new Promise((fin, fal) => {
        if (!id || !users) return fin({ type: false });
        get_pars_list(id).then(async list => {
          if (!list.type) return fin({ type: false });
          var tmp = await get_pars_data_of_file(id);
          var members = tmp.data;
          console.log('list', members)
          users.forEach((e) => {
            //  if (e.indexOf(':') >= 0) {
            //   members.push({
            //     username: e.split(':')[0],
            //     id: e.split(':')[1]
            //   });
            //  } else {
            //   members.push(e);
            //  }
            members.push(e);
          });
          update_pars_list_users(id, members).then((check) => {
            if (!check.type) return fin({ type: false });
            return fin({ type: true });
          });
        });
      });
    }

    function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    }

    setInterval(() => {
      update_time_from_hist_pars();
    }, 60 * 1000);

    $('body').on('click', '.action-pars-list-edit span', function () {
      var e;
      $('.modal-body .list-pars-edit ul li.search').remove();
      $('.modal-body .list-pars-edit ul li').css('display', '');
      Object.keys(checkbox_data).forEach(function (v, i, a) {
        if (v) {
          delete_user_from_pars_list(sha1(v), v);
          if (Number($('.modal-body .list-pars-edit ul li:last-child').prev().attr('index')) + 2 <= Object.keys(data_modal_pars_edit).length) {
            e = data_modal_pars_edit[Number($('.modal-body .list-pars-edit ul li:last-child').prev().attr('index')) + 2].username;
            if (e) {
              check = true;
              var name = e;
              html = '<li index="' + (Number($('.modal-body .list-pars-edit ul li:last-child').prev().attr('index')) + 2) + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
              $('.modal-body .list-pars-edit ul').append(html);
            }
          } else if ($('.modal-body .list-pars-edit ul li').length < 70 && Object.keys(data_modal_pars_edit).length > 100) {
            data_modal_pars_edit.forEach(function (e) {
              if (e) {
                var name = e.username;
                if ($('.modal-body .list-pars-edit ul li[hash="' + sha1(name) + '"]').length <= 0) {
                  check = true;
                  html = '<li index="' + (Number($('.modal-body .list-pars-edit ul li:last-child').prev().attr('index')) + 2) + '" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
                  $('.modal-body .list-pars-edit ul').append(html);
                }
              }
            });
          }
        }
      });
      event_change_checkboxes();
      $('.search-list-pars-edit input').val('');
    });

    var delete_users = [];

    function delete_user_from_pars_list(hash, name) {
      var check = false;
      data_modal_pars_edit.forEach((e) => {
        if (e.username == name) check = true;
      })
      if (check) {
        delete_users.push(name);
        var new_p = [];
        data_modal_pars_edit.forEach((e) => {
          if (e.username != name) new_p.push(e);
        })
        data_modal_pars_edit = new_p;
        delete checkbox_data[name]
        var selector = $('.modal-body .list-pars-edit ul li[hash="' + hash + '"]');
        if (selector.attr('class') == 'search') {
          selector.css('opacity', '0');
          selector.css('height', '0px');
          selector.css('margin', '0px');
          selector.css('padding', '0px');
          $('.search-list-pars-edit input').val('');
          $('.search-list-pars-edit input').focus();
          setTimeout(function () {
            $('.modal-body .list-pars-edit ul li.search').remove();
            $('.modal-body .list-pars-edit ul li').css('display', 'flex');
            check_search_pars_edit = false;
            selector.remove();
          }, 200);
        } else {
          selector.css('opacity', '0');
          selector.css('height', '0px');
          selector.css('margin', '0px');
          selector.css('padding', '0px');
          if (Number(selector.attr('index')) == 1 || Number(selector.attr('index')) == 0 || (Number(selector.attr('index')) + 2) >= Object.keys(data_modal_pars_edit).length) {
            if ((Number(selector.attr('index')) + 2) >= Object.keys(data_modal_pars_edit).length) {
              selector.prev().attr('index', Object.keys(data_modal_pars_edit).length - 1);
            } else if (Number(selector.attr('index')) == 1) {
              selector.next().attr('index', 1);
            } else {
              var index = Number(selector.attr('index')) + 1;
              selector.next().attr('index', index - 1);
            }
          }
          setTimeout(function () {
            selector.remove();
          }, 200);
        }
      } else {
        noty('error', translater(translate.noty.pars.user_not_found));
      }
      open_save_btc_pars_edit();
    }

    function open_save_btc_pars_edit_channels() {
      if (Object.keys(delete_users_c).length > 0) {
        $('.save-btn-pars-list-edit-channels').css('display', 'block');
        $('.save-btn-pars-list-edit-channels').css('height', '24px');
        $('.save-btn-pars-list-edit-channels').css('margin-top', '15px');
        $('.save-btn-pars-list-edit-channels').css('opacity', '1');
        $('.save-btn-pars-list-edit-channels span').css('opacity', '1');
      }
    }

    function findWithAttr(array, attr, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          if (array[i] === value) {
            return i;
          }
        }
      }
      return -1;
    }

    function open_save_btc_pars_edit() {
      if (Object.keys(delete_users).length > 0) {
        $('.save-btn-pars-list-edit').css('display', 'block');
        $('.save-btn-pars-list-edit').css('height', '24px');
        $('.save-btn-pars-list-edit').css('margin-top', '15px');
        $('.save-btn-pars-list-edit').css('opacity', '1');
        $('.save-btn-pars-list-edit span').css('opacity', '1');
      }
    }

    $('body').on('click', '.save-btn-pars-list-edit span', function () {
      save_users_list_pars($('#modal-edit-pars-list').attr('list-id'));
    });

    function save_users_list_pars(id) {
      var data = [];
      if (delete_users.length <= 0) return noty('error', translater(translate.noty.pars.wrong_d_u_l));
      delete_users.forEach(function (e) {
        data.push(e);
      });
      delete_users_pars_list(id, data).then((check) => {
        if (!check.type) return noty('error', pop_error);
        if (check.type == 'min') return noty('error', translater(translate.noty.pars.little_list));
        data_modal_pars_edit = check.m;
        close_save_btc_pars_edit();
        event_change_checkboxes();
        return noty('success', translater(translate.noty.other.list_of_users_up));
      }).catch(() => {
        return noty('error', pop_error);
      });
    }

    function delete_users_pars_list(id, users) {
      return new Promise((fin, fal) => {
        if (!id || !users) return fin({ type: true });
        get_pars_list(id).then(async (data) => {
          if (!data.type) return fin({ type: false });
          var new_p = [];
          var tmp = await get_pars_data_of_file(id);
          var members = tmp.data;
          members.forEach((e, ind) => {
            if (e && e != null && users.indexOf(e.username) < 0) new_p.push(e);
          });
          if (new_p.length < 1) return fin({ type: 'min' });
          update_pars_list_users(id, new_p);
          return fin({ type: true, m: new_p });
        });
      });
    }

    $('body').on('keyup', '.modal-body .search-list-pars-edit input[type="text"]', function () {
      $('.modal-body .list-pars-edit ul li').css('display', 'none');
      $('.modal-body .list-pars-edit ul li.search').remove();
      var val = $(this).val();
      if (!val || val == '') {
        $('.modal-body .list-pars-edit ul li.search').remove();
        $('.modal-body .list-pars-edit ul li').css('display', 'flex');
        check_search_pars_edit = false;
        return false;
      }
      var data = [];
      check_search_pars_edit = true;
      data_modal_pars_edit.forEach(function (e) {
        if (e.username.toLowerCase().indexOf(val.toLowerCase()) >= 0 || e.username.indexOf(val) >= 0) {
          data.push(e.username);
        }
      });
      var html = ``;
      var checkeds = '';
      data.forEach(function (e) {
        if ($('.modal-body .list-pars-edit ul li.search').length < 50) {
          var name = e;
          if (name) {
            html = '<li index="0" class="search" hash="' + sha1(name) + '"><div class="name">' + name + '</div><i class="fa fa-copy waves-effect" name="' + name + '"></i><div class="checkbox"><input type="checkbox" name="' + name + '" id="checkbox_p_' + sha1(name) + '"></div></li>';
            $('.modal-body .list-pars-edit ul').append(html);
          }
        } else {
          return false;
        }
      });
    });

    function update_channels_from_pars() {
      var block = $('#count-pars-channels');
      if (check_pars_channels) {
        block.html('0 ' + translater(translate.noty.other.userers));
        return block.removeClass('active');
      }
      if (!block.hasClass('active')) block.addClass('active');
      var arr = [];
      if (!channels) return false;
      channels.forEach((e) => {
        arr[e] = true;
      });
      var count = Object.keys(arr).length;
      var last = block.html();
      last = last.replace(' ', '');
      last = last.replace('канал', '');
      last = last.replace('канала', '');
      last = last.replace('channel', '');
      last = last.replace('channels', '');
      last = last.replace(translater(translate.noty.other.userers), '');
      last = parseInt(last);
      var html = numberWithSpaces(count) + NumberEnd(count, translater(translate.noty.number_end.channels));
      block.html(html);
    }

    function update_users_from_pars() {
      return false;
      var block = $('#count-pars-users');
      if (!check_parsing_g) {
        block.html('0 ' + translater(translate.noty.other.userers));
        return block.removeClass('active');
      }
      if (!block.hasClass('active')) block.addClass('active');
      var count = Object.keys(users).length;
      var last = block.html();
      last = last.replace(' ', '');
      last = last.replace('пользователь', '');
      last = last.replace('пользователя', '');
      last = last.replace('user', '');
      last = last.replace('users', '');
      last = last.replace(translater(translate.noty.other.userers), '');
      last = parseInt(last);
      var html = numberWithSpaces(count) + NumberEnd(count, translater(translate.noty.number_end.users));
      block.html(html);
    }

    setInterval(function () {
      update_users_from_pars();
      update_channels_from_pars();
    }, 2500);

    function numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    $('body').on('click', '.btn-start-pars-channels', function () {
      if ($(this).hasClass('waiting')) return false;
      var invite = $('#input-invite-to-server-channels').val();
      if (!invite || invite == '') return noty('error', translater(translate.noty.pars.dont_provide_invite));
      var account = $('#select-account-channel').val();
      if (!account || account == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      var btn = $(this);
      btn.addClass('waiting');
      noty('warning', translater(translate.noty.pars.start_pars));
      check_pars_channels = false;
      pars_channels(invite, account).then((data) => {
        setTimeout(() => {
          global_driver.quit();
        }, 250);
        check_pars_channels = true;
        if (data.error && data.error == 'invite') return noty('error', translater(translate.noty.pars.wrong_invite));
        if (!data.type) return noty('error', pop_error);
        var channels = data.data;
        if (channels.length <= 0) return noty('error', translater(translate.noty.pars.little_count_c));
        if (!data.type) return noty('error', pop_error);
        var new_channels = [];
        channels.forEach((e, ind, arr) => {
          if (new_channels.indexOf(e) < 0) new_channels.push(e);
          if (ind == arr.length - 1) {
            new_pars_channels(new_channels, last_pars_data, last_pars_data.invite).then((check) => {
              if (!check.type) return noty(translater(translate.noty.pars.error_save_pars));
              return push_pars_channels();
            });
          }
        });
        logntiwpoer('DATA: ' + JSON.stringify(data));
        noty('success', translater(translate.noty.pars.finish_pars));
      });
    });

    $('body').on('click', '.btn-start-pars-channels.waiting', function () {
      check_pars_channels = true;
      var btn = $(this);
      btn.removeClass('waiting');
      btn.html('START');
    });

    function new_pars_channels(channels, server, invite) {
      return new Promise((fin, fal) => {
        if (!channels || channels.length <= 0) return fin({ type: false });
        var id = uuid();
        get_pars_channels().then((data) => {
          var por = {
            id: id,
            status: true,
            server: {
              name: server.server_name,
              avatar: server.server_avatar
            },
            channels: channels,
            time: new Date().getTime(),
            invite: invite,
            count: channels.length
          };
          if (!data.type) {
            var a = [];
            a.push(por);
            store.set('pars_channels', a);
          } else {
            var a = data.data;
            a.push(por);
            store.set('pars_channels', a);
          }
          return fin({ type: true });
        });
      });
    }

    function get_pars_channel(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        if (!store.has('pars_channels')) return fin({ type: false });
        var pars = store.get('pars_channels');
        var check = false;
        pars.forEach((e) => {
          if (e.id == id) {
            check = true;
            return fin({ type: true, data: e });
          }
        });
        if (!check) return fin({ type: false });
      });
    }

    function update_pars_channels(id, channels) {
      return new Promise((fin, fal) => {
        if (!id || !channels) return fin({ type: false });
        get_pars_channel(id).then((check) => {
          if (!check.type) return fin({ type: false });
          get_pars_channels().then((all) => {
            if (!all.type) return fin({ type: false });
            var new_p = [];
            all.data.forEach((e, ind, arr) => {
              if (e.id == id) {
                e.channels = channels;
                new_p.push(e);
              } else {
                new_p.push(e);
              }
              if (ind == arr.length - 1) {
                store.set('pars_channels', new_p);
                return fin({ type: true });
              }
            });
          });
        });
      });
    }

    function get_pars_channels() {
      return new Promise((fin, fal) => {
        if (!store.has('pars_channels')) return fin({ type: false });
        var pars = store.get('pars_channels');
        if (pars.length <= 0) return fin({ type: false });
        return fin({ type: true, data: pars });
      });
    }

    function push_pars_channels() {
      get_pars_channels().then((data) => {
        if (!data.type) return false;
        var table = $('#table-pars-channels');
        table.find('tbody').html('');
        var num = 1;
        data.data.reverse().forEach((e) => {
          var now = Math.round(new Date().getTime() / 1000);
          var id = e.id;
          var ava = e.server.avatar;
          var invite = e.invite;
          var name = removeTags(e.server.name);
          var count = e.channels.length + NumberEnd(e.channels.length, translater(translate.noty.number_end.channels));
          var full_data = get_time_to_history(e.time);
          var date = get_time_from_unix(now - Math.round(e.time / 1000), Math.round(e.time / 1000));
          var html = `<tr list-id="${id}">
                         <td>${num}</td>
                         <td><img src="${ava}"><span class="span-copy-server-invite-channels" tooltip="${invite}" flow="up">${name}</span></td>
                         <td>${count}</td>
                         <td><span tooltip="${full_data}" flow="left" class="history-pars-date">${date}</span></td>
                         <td style="padding-left: 0;">
                           <span>
                             <i class="fa fa-edit-pen btn-edit-pars-list-channels i-gg" list-id="${id}"></i>
                           </span>
                         </td>
                         <td style="padding-left: 0;">
                           <span>
                             <i class="fa fa-pars-trash btn-delete-pars-list i-gg waves-effect" list-id="${id}"></i>
                           </span>
                         </td>
                       </tr>`;
          table.find('tbody').append(html);
          num++;
        });
        setTimeout(() => {
          $('.fa-edit-pen').addClass('waves-effect');
          update_tooltips();
        }, 50);
      });
    }

    function delete_spam(id) {
      return new Promise(fin => {
        var new_p = [];
        store.get('spam').forEach((e, ind, arr) => {
          if (e.id != id) new_p.push(e);
          if (ind == arr.length - 1) {
            store.set('spam', new_p);
            fat_spam = new_p;
            new_p = [];
            if (!store.has('spam_logs')) return false;
            store.get('spam_logs').forEach((e, ind, arr) => {
              if (e.id != id) new_p.push(e);
              if (ind == arr.length - 1) {
                store.set('spam_logs', new_p);
                fat_add_log_spam = new_p;
                return fin({ type: true });
              }
            });
          }
        })
      });
    }

    $('body').on('click', '#modal-delete-spam-list .modal-body .btn-modals:last-child', function () {
      deleter_spam();
    });

    function deleter_spam() {
      var id = $('#modal-delete-spam-list').attr('spam-id');
      delete_spam(id);
      $('.modal').modal('hide');
      noty('success', translater(translate.noty.dis.success_delete));
      var that = $(`#table-dis tr[spam-id="${id}"]`);
      that.css('opacity', '0');
      setTimeout(() => {
        that.remove();
        renum_table();
      }, 150);
    }

    $('body').on('click', '.btn-delete-spam-list', function () {
      var id = $(this).attr('spam-id');
      var modal = $('#modal-delete-spam-list');
      modal.attr('spam-id', id);
      $('.modal').modal('hide');
      modal.modal('show');
    });

    $('body').on('click', '.btn-delete-pars-list', function () {
      var id = $(this).attr('list-id');
      var count = $('#table-pars tr[list-id="' + id + '"] td:nth-child(3)').html();
      var modal = $('#modal-delete-pars-list');
      modal.find('.count-users v').html(count);
      modal.attr('list-id', id)
      $('.modal').modal('hide');
      modal.modal('show');
    });

    function delete_pars_data_file(id) {
      return new Promise(fin => {
        try {
          var remote = require('electron').remote;
          var app = remote.app;
          var app_path = app.getPath('userData');
          fs.unlinkSync(`${app_path}/pars_data/${id}`)
        } catch (e) {
          return fin({ type: false });
        }
      })
    }

    function delete_pars_list(id) {
      return new Promise(fin => {
        get_pars_lists().then((lists) => {
          if (!lists.type) return fin({ type: false });
          delete_pars_data_file(id)
          var new_p = [];
          lists.data.forEach((e, ind, arr) => {
            if (e.id != id) new_p.push(e);
            if (ind == arr.length - 1) {
              store.set('pars', new_p);
              fat_get_pars_lists = new_p;
              return fin({ type: true });
            }
          })
        })
      });
    }

    function update_count_of_active_answer_rules() {
      var count = $('.answer-rule-list input:checked').length;
      count = `${count} ${NumberEnd(count, translater(translate.noty.number_end.rules))}`;
      $('#count-of-active-answer-rules v').text(count);
    }

    $('body').on('change', '.answer-rule-list input', function () {
      var id = $(this).attr('hash');
      var status = $(this).prop('checked');
      change_status_answer_rule(id, status);
      update_count_of_active_answer_rules()
    })

    $('body').on('click', '#create-new-answer-rule', function () {
      var name = $('#name-of-new-answer-rule').val();
      if (!name || name == '') return noty('error', translater(translate.noty.other.dont_set_name_of_answ_rule));
      var rules = get_answer_rules()
      var check = false;
      rules.forEach(e => {
        if ($('#modal-create-answer-rule').hasClass('editer')) {
          if (e.name == name && e.id != $('#modal-create-answer-rule').attr('hash')) check = true;
        } else {
          if (e.name == name) check = true;
        }
      })
      if (check) return noty('error', translater(translate.noty.other.has_answ_rule_with_this_name));
      var check = false;
      var rule = {};
      var data = [];
      $('#block-to-select-operators-answer .answer-rule-creater').each(function () {
        if ($(this).find('input[type="text"]').val().length < 1) return check = true;
        var oper = 'and';
        if ($(this).find('.select-math-operator-for-answer-rule span.active').length > 0) oper = $(this).find('.select-math-operator-for-answer-rule span.active').attr('data')
        data.push({
          type: $(this).find('select').val(),
          value: $(this).find('input[type="text"]').val(),
          oper
        })
      });
      if (check || data.length < 1) return noty('error', translater(translate.noty.other.wrong_answer_rule));
      var msg_id = $('#select-msg-to-new-answer-rule').val();
      if (!msg_id || msg_id == '') return noty('error', translater(translate.noty.other.dont_set_message_for_answer_rule));
      if ($('#modal-create-answer-rule').hasClass('editer')) {
        var status = get_answer_rule_by_id($('#modal-create-answer-rule').attr('hash')).status;
      } else {
        var status = true;
      }
      var else_msg_id = $('#select-else-action-answer').val();
      if (else_msg_id == 'false') else_msg_id = false;
      var rule = {
        name: name,
        time: new Date().getTime(),
        msg_id: msg_id,
        else_msg_id: else_msg_id,
        status: status,
        data: data
      }
      if ($('#modal-create-answer-rule').hasClass('editer')) {
        rule.id = get_answer_rule_by_id($('#modal-create-answer-rule').attr('hash')).id;
        update_answer_rule($('#modal-create-answer-rule').attr('hash'), rule);
        noty('success', translater(translate.noty.other.success_edit_answer_rule));
      } else {
        rule.id = MD5(uuid())
        push_answer_rules(rule);
        noty('success', translater(translate.noty.other.success_create_answer_rule));
      }
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-answer-rules').modal('show')
      }, 150)
    })

    function change_status_answer_rule(id, status) {
      var rule = get_answer_rule_by_id(id);
      rule.status = status;
      update_answer_rule(id, rule);
    }

    function get_answer_rules() {
      var rules = [];
      if (!localStorage['answer_rules']) return rules;
      return JSON.parse(localStorage['answer_rules'])
    }

    function push_answer_rules(data) {
      var rules = get_answer_rules();
      rules.push(data);
      localStorage['answer_rules'] = JSON.stringify(rules);
    }

    function get_answer_rule_by_id(id) {
      var rules = get_answer_rules();
      var data = false;
      rules.forEach(e => {
        if (e.id == id) data = e;
      })
      return data;
    }

    function update_answer_rule(id, data) {
      var rules = get_answer_rules();
      var new_rules = [];
      rules.forEach(e => {
        if (e.id != id) {
          new_rules.push(e)
        } else {
          new_rules.push(data)
        }
      })
      localStorage['answer_rules'] = JSON.stringify(new_rules);
    }

    function delete_answer_rule(id) {
      var rules = get_answer_rules();
      var new_rules = [];
      rules.forEach(e => {
        if (e.id != id) new_rules.push(e)
      })
      localStorage['answer_rules'] = JSON.stringify(new_rules);
    }

    $('body').on('show.bs.modal', '#modal-create-answer-rule', function () {
      $('#name-of-new-answer-rule').val('')
      $('#select-msg-to-new-answer-rule').html('')
      $('#select-else-action-answer').html('')
      var messages = get_answer_messages();
      messages.forEach((e, ind, arr) => {
        var selected = '';
        if (ind == arr.length - 1) selected = 'selected';
        if (e.name.length > 50) {
          var html = `<option value="${e.id}"${selected}>${e.name.substr(0, 47)}...</option>`;
        } else {
          var html = `<option value="${e.id}"${selected}>${e.name}</option>`;
        }
        $('#select-msg-to-new-answer-rule').prepend(html);
        $('#select-else-action-answer').prepend(html);
      })
      $('#select-else-action-answer').prepend('<option value="false" selected>-</option>');
      $('#select-msg-to-new-answer-rule').niceSelect('update')
      $('#select-else-action-answer').niceSelect('update')
      $('#block-to-select-operators-answer input').val('');
      $('.select-math-operator-for-answer-rule span').removeClass('active');
      $('.answer-rule-creater[hash]').remove()
    })

    $('body').on('keyup', function (e) {
      if (!$('#modal-delete-pars-list').hasClass('in')) return false;
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code != 13) return false;
      deleter_pars_list();
    });

    $('body').on('keyup', function (e) {
      if (!$('#modal-delete-answer-message').hasClass('in')) return false;
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code != 13) return false;
      delete_answer_message();
    });

    $('body').on('keyup', function (e) {
      if (!$('#modal-delete-answer-rule').hasClass('in')) return false;
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code != 13) return false;
      deleter_answer_rule();
    });

    $('body').on('keyup', function (e) {
      if (!$('#modal-delete-disable-accounts').hasClass('in')) return false;
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code != 13) return false;
      deleter_dis_accs();
    });

    $('body').on('keyup', function (e) {
      if (!$('#modal-delete-spam-list').hasClass('in')) return false;
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code != 13) return false;
      deleter_spam()
    });

    $('body').on('keyup', function (e) {
      if (!$('#modal-delete-account').hasClass('in')) return false;
      var code = (event.keyCode ? event.keyCode : event.which);
      if (code != 13) return false;
      deleter_account()
    });

    function renum_table() {
      var i = 0;
      $('table tbody tr').each(function (e) {
        i++;
        var that = $(this).find('td:first-child');
        that.html(i);
      });
    }

    $('body').on('click', '#modal-delete-pars-list .buttons .btn-modals:last-child', function () {
      deleter_pars_list()
    });

    function deleter_pars_list() {
      var id = $('#modal-delete-pars-list').attr('list-id');
      delete_pars_list(id);
      $('.modal').modal('hide');
      noty('success', translater(translate.noty.pars.success_delete));
      var that = $(`#table-pars tr[list-id="${id}"]`);
      that.css('opacity', '0');
      setTimeout(() => {
        that.remove();
        renum_table();
      }, 150);
    }

    $('body').on('click', '.btn-edit-pars-list-channels', function () {
      var id = $(this).attr('list-id');
      var modal = $('#modal-edit-pars-list-channels');
      modal.attr('list-id', id);
      close_save_btc_pars_edit_channels();
      $('.action-pars-list-edit-channels span').css('opacity', '0');
      $('.action-pars-list-edit-channels').css('height', '0px');
      $('.action-pars-list-edit-channels').css('margin-top', '0px');
      $('.action-pars-list-edit-channels').css('display', 'none');
      $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul').html('');
      $('.input-get-list-channels').css('display', 'none');
      $('.input-get-list-channels').css('opacity', '0');
      $('.input-get-list-channels textarea').val('');
      $('.input-get-list-channels textarea').css('height', '0');
      $('.action-get-channels-to-pars-list').css({
        'margin-top': '0px',
        'height': '0px',
        'opacity': '0',
        'display': 'none'
      });
      $('.list-pars-edit-channels').css({
        'margin-top': '',
        'height': '',
        'opacity': '',
        'display': ''
      });
      $('.count-pars-list-edit-checkbox-channels').css('opacity', '');
      $('.count-pars-list-edit-checkbox-channels').css('height', '');
      $('.count-pars-list-edit-checkbox-channels').css('margin-top', '');
      $('.save-btn-pars-list-edit-channels').css('opacity', '');
      $('.save-btn-pars-list-edit-channels').css('height', '');
      $('.save-btn-pars-list-edit-channels').css('margin-top', '');
      $('.search-list-pars-channels-edit').css('height', '');
      $('.search-list-pars-channels-edit').css('opacity', '');
      $('.search-list-pars-channels-edit').css('margin-bottom', '');
      $('.random-list-channels').css('height', '');
      $('.random-list-channels').css('opacity', '');
      $('.random-list-channels').css('margin-bottom', '');
      $('.action-pars-list-edit-checkbox-channels').css('height', '');
      $('.action-pars-list-edit-checkbox-channels').css('opacity', '');
      $('.action-pars-list-edit-checkbox-channels').css('margin-bottom', '');
      get_pars_channel(id).then((data) => {
        if (!data.type) return noty('error', pop_error);
        var html = ``;
        delete_users_c = [];
        checkbox_c = [];
        checkbox_data_c = [];
        last_pars_data_modal_channels = data.data.channels;
        data.data.channels.forEach(function (e) {
          html = `<li hash="` + sha1(e) + `">
                 <div class="name">`+ e + `</div>
                 <i class="fa fa-copy" hash="`+ sha1(e) + `"></i>
                     <div class="checkbox">
                       <input type="checkbox" hash="`+ sha1(e) + `" id="checkbox-c_` + sha1(e) + `">
                     </div>
               </li>`;
          $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul').append(html);
        });
        $('.modal-body .count-pars-list-edit-checkbox-channels span:last-child').text(translater(translate.noty.other.total) + ': ' + $('body .list-pars-edit-channels ul li').length);
        $('.modal').modal('hide');
        $('#modal-edit-pars-list-channels').modal('show');
      })
    });

    function event_change_checkboxes_c() {
      $('.modal-body .count-pars-list-edit-checkbox-channels span:first-child').text(translater(translate.noty.other.selected) + ': ' + Object.keys(checkbox_data_c).length);
      $('.modal-body .count-pars-list-edit-checkbox-channels span:last-child').text(translater(translate.noty.other.total) + ': ' + $('body .list-pars-edit-channels ul li').length);
      if (Object.keys(checkbox_data_c).length > 0) {
        $('.action-pars-list-edit-channels').css('display', 'block');
        setTimeout(() => {
          $('.action-pars-list-edit-channels').css('height', '24px');
          $('.action-pars-list-edit-channels').css('margin-top', '15px');
          $('.action-pars-list-edit-channels span').css('opacity', '1');
        }, 50);
      } else {
        $('.action-pars-list-edit-channels span').css('opacity', '0');
        $('.action-pars-list-edit-channels').css('height', '0px');
        $('.action-pars-list-edit-channels').css('margin-top', '0px');
        setTimeout(function () {
          $('.action-pars-list-edit-channels').css('display', 'none');
        }, 350);
      }
    }

    $('body').on('mouseenter', '.modal-body .list-pars-edit-channels ul li', function (event) {
      var that = $(this);
      var id = that.find('input[type="checkbox"]').attr('hash');
      var index = $(this).index();
      if (index >= 5 && mouseDown == 1 && scroll_pars_list == 0) {
        factor_scroll_channels = factor_scroll_channels + 0.5;
        if (factor_scroll_channels > 7) {
          factor_scroll_channels = 7;
        }
        if (event.pageY > pageY) {
          var div = $('.modal-body .list-pars-edit-channels');
          if (div.scrollTop() <= div.prop('scrollHeight') - 100) {
            div.scrollTop(div.scrollTop() + ($('.modal-body .list-pars-edit-channels ul li').height() + 7 + factor_scroll_channels));
          }
        } else {
          var div = $('.modal-body .list-pars-edit-channels');
          if (div.scrollTop() <= div.prop('scrollHeight') - 100) {
            div.scrollTop(div.scrollTop() - ($('.modal-body .list-pars-edit-channels ul li').height() + 7 + factor_scroll_channels));
          }
        }
      }
      pageY = event.pageY;
      if (mouseDown == 1 && checkbox_c[id] == true || !checkbox_c[id] && mouseDown == 1) {
        checkbox_c[id] = false;
        var check = that.find('input[type="checkbox"]');
        if (!check.is(":checked")) {
          checkbox_data_c[id] = true;
          check.prop('checked', true);
          event_change_checkboxes_c();
          return false;
        } else {
          delete checkbox_data_c[id];
          check.prop('checked', false);
          event_change_checkboxes_c();
          return false;
        }
      } else {
        return false;
      }
    });

    $('body').on('mouseenter', '.modal-body .list-pars-edit-channels ul li', function () {
      var id = $(this).find('input[type="checkbox"]').attr('hash');
      checkbox_c[id] = true;
      return false;
    });

    function check_perm_voice_channel(client, guild_id, channel_id, user_id) {
      var res = false;
      var check = client.guilds.get(guild_id).channels.get(channel_id).permissionsFor(user_id).has('CONNECT');
      if (check) res = true;
      return res;
    }

    function check_perm_message_channel(client, guild_id, channel_id, user_id) {
      var res = false;
      if (!client.guilds.get(guild_id).channels.get(channel_id).members.get(user_id)) return false;
      client.guilds.get(guild_id).channels.get(channel_id).members.get(user_id).roles.forEach(e => {
        //logntiwpoer(e);
        var check = client.guilds.get(guild_id).channels.get(channel_id).permissionsFor(e.id).has('SEND_MESSAGES');
        if (check) res = true;
      })
      //  return res;
      return true;
    }

    function check_perm_members_channel(client, guild_id, channel_id, user_id) {
      //  console.log('asdklaskldklaskladsklasdk', client, guild_id, channel_id, user_id)
      var res = false;
      if (!client.guilds.get(guild_id).channels.get(channel_id).members.get(user_id)) return false;
      client.guilds.get(guild_id).channels.get(channel_id).members.get(user_id).roles.forEach(e => {
        //logntiwpoer(e);
        var check = client.guilds.get(guild_id).channels.get(channel_id).permissionsFor(e.id).has('VIEW_CHANNEL');
        if (check) res = true;
      })
      // return res;
      return true;
    }

    function check_perm_message_channel_files(client, guild_id, channel_id, user_id) {
      var res = false;
      if (!client.guilds.get(guild_id).channels.get(channel_id).members.get(user_id)) return false;
      client.guilds.get(guild_id).channels.get(channel_id).members.get(user_id).roles.forEach(e => {
        //logntiwpoer(e);
        var check = client.guilds.get(guild_id).channels.get(channel_id).permissionsFor(e.id).has('ATTACH_FILES');
        if (check) res = true;
      })
      return res;
    }

    $('body').on('click', '#close-btn-invite-dis-channels', function () {
      $(this).addClass('hide-close-file-btn');
      var btn = $('.edit-pars-channels-from-server');
      btn.removeClass('edit-pars-channels-from-server');
      btn.addClass('pars-channels-from-server');
      $('#block-name-server-dis-channels').removeClass('active');
      $('#count-of-pars-dis-channels').removeClass('active');
      $('#block-invite-dis-channels').removeClass('hider');
      btn.css('opacity', '0');
      setTimeout(() => {
        btn.html(translater(translate.noty.other.go_channels_pars_c));
        setTimeout(() => {
          btn.css('opacity', '');
          last_pars_data_channels = false;
          store.delete('last_pars_channels');
        }, 50);
      }, 150)
    })

    $('body').on('change', '#channel-verify-channel-id', function () {
      update_tmp('channel-verify-channel-id', $(this).val());
    });

    $('body').on('change', '#channel-verify-message-id', function () {
      update_tmp('channel-verify-message-id', $(this).val());
    });

    $('body').on('change', '#channel-verify-channel-id-pars', function () {
      update_tmp('channel-verify-channel-id-pars', $(this).val());
    });

    $('body').on('change', '#channel-verify-message-id-pars', function () {
      update_tmp('channel-verify-message-id-pars', $(this).val());
    });

    $('body').on('click', '.copy-invite-server-pars-channels', function () {
      logntiwpoer($(this).attr('data-copy'));
      copyToClipboard($(this).attr('data-copy'))
      noty('success', translater(translate.noty.other.copied), 300);
    });

    function check_verify_from_server(channels) {
      return new Promise(fin => {
        if (channels.length < 1) return fin({ type: false });
        channels.forEach((e, ind, arr) => {
          setTimeout(async () => {
            var messages = await e.messages.fetch();
            messages.forEach(z => {
              var message = z;
              if (z.reactions && z.reactions.size > 0) {
                var ids = [];
                for (var [id, val] of z.reactions) ids.push(id);
                if (ids.length > 0) {
                  ids.forEach((f) => {
                    setTimeout(() => {
                      message.react(f);
                    }, 100 * ind);
                  })
                }
                if (ind == arr.length - 1) setTimeout(() => {
                  fin({ type: true });
                }, 500);
              }
            });
          }, 100 * ind);
        });
      });
    }

    $('body').on('click', '.pars-channels-from-server', function () {
      var invite = $('#invite-to-dis-channels').val();
      if (!invite || invite == '') return noty('error', translater(translate.noty.pars.dont_provide_invite));
      var accs = $('#select-account-channels').val();
      if (accs.length <= 0) return noty('error', translater(translate.noty.dis.emped_accounts));
      var verify_server = false;
      if ($('#enabler_channel_verification').prop('checked')) {
        if (!$('#channel-verify-message-id').val() || $('#channel-verify-message-id').val() == '') return noty('error', translater(translate.noty.other.dont_provite_id_v));
        if ($('#channel-verify-message-id').val().length < 10 || $('#channel-verify-message-id').val().length > 20) return noty('error', translater(translate.noty.other.wrong_m_id_v));
        if (!$('#channel-verify-channel-id').val() || $('#channel-verify-channel-id').val() == '') return noty('error', translater(translate.noty.other.did_not_provid_channel_id));
        if ($('#channel-verify-channel-id').val().length < 10 || $('#channel-verify-channel-id').val().length > 20) return noty('error', translater(translate.noty.other.wrong_v_channel_id));
        verify_server = {
          message: $('#channel-verify-message-id').val(),
          channel: $('#channel-verify-channel-id').val()
        }
      }
      var acc = accs[0];
      var Discord = require("discord.js");
      client = new Discord.Client();
      var email = get_account(acc).login;
      var pass = get_account(acc).pass;
      var btn = $(this);
      if (!get_acc_token(email) && !get_account(account).rucaptcha) return noty('error', translater(translate.noty.other.dont_h_ar, false, { account: acc }));
      logntiwpoer('sss');
      noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc }));
      loginer_acc_api(email, pass, get_account(acc).rucaptcha).then(async check => {
        if (!check.type) {
          update_status_acc(acc);
          return noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
        }
        logntiwpoer(check)
        var token = check.token;
        await initDiscordCookie(token)
        client.login(token).then(check => {
          if (check != token) {
            update_status_acc(acc);
            return noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
          }
          invite = get_invite_code(invite);
          logntiwpoer(invite);
          noty('warning', translater(translate.noty.other.starting_pars));
          client.fetchInvite(`https://discord.gg/${invite}`).then((guild) => {
            console.log('guild', guild);
            client.destroy()
            setTimeout(async () => {
              await initDiscordCookie(token);
              client.login(token).then(() => {
                guild = guild.guild;
                var guild_id = guild.id;
                var i = 0;
                var rit = setInterval(async () => {
                  i++;
                  if (i > 10) {
                    clearInterval(rit);
                    return noty('error', translater(translate.noty.other.err_w_g_c));
                  }
                  if (!client.guilds.get(guild_id)) return false;
                  clearInterval(rit);
                  var verfy_time = 0;
                  if (verify_server) {
                    //if (!client.channels.get(verify_server.channel)) return noty('error', 'Канал с таким ID не найден.');
                    var check_next_verify_server = false;
                    try {
                      await client.channels.get(verify_server.channel).messages.fetch();
                    } catch (err_await) {
                      check_next_verify_server = true;
                    } finally {

                    }
                    if (!check_next_verify_server && !client.channels.get(verify_server.channel).messages.get(verify_server.message)) return noty('error', translater(translate.noty.other.not_found_m_id_v));
                    if (!check_next_verify_server && client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions.size < 1) return noty('error', translater(translate.noty.other.not_found_react_in_m_v));
                    if (!check_next_verify_server) for (var [key, val] of client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions) client.channels.get(verify_server.channel).messages.get(verify_server.message).react(val._emoji.identifier)
                    logntiwpoer('RRR');
                    if (!check_next_verify_server) verfy_time = 1000;
                  }
                  logntiwpoer('RRR111');
                  setTimeout(async () => {
                    await client.guilds.get(guild_id).fetch();
                    logntiwpoer('RRR111');
                    var guild_name = guild.name;
                    var guild_avatar = guild.icon;
                    if (!guild_avatar || guild_avatar == null) {
                      guild_avatar = './img/assets/undefind-avatar.png';
                    } else {
                      guild_avatar = `https://cdn.discordapp.com/icons/${guild_id}/${guild_avatar}.png?size=128`;
                    }
                    var new_p = [];
                    var user_id = client.user.id;
                    var channels = get_all_text_channels_guild(client, guild_id);
                    channels.forEach(e => {
                      var check = check_perm_message_channel(client, guild_id, e.id, user_id);
                      if (check) new_p.push({ id: e.id, name: e.name, limit: e.rateLimitPerUser, files: true });
                    });
                    new_p.forEach((e, ind, arr) => {
                      var check = check_perm_message_channel_files(client, guild_id, e.id, user_id);
                      if (!check) new_p[ind].files = false;
                    })
                    client.destroy();
                    new_p = channels;
                    if (new_p.length < 1) return noty('error', translater(translate.noty.other.lim_g_c));
                    logntiwpoer(verify_server);
                    var storeData = {
                      guild: {
                        id: guild_id,
                        name: guild_name,
                        avatar: guild_avatar,
                        invite: invite
                      },
                      channels: new_p,
                      verify: verify_server
                    };
                    lastParsChannelsData['text'] = storeData
                    store.set('last_pars_channels', storeData);
                    btn.css('opacity', 0);
                    btn.removeClass('pars-channels-from-server');
                    btn.addClass('edit-pars-channels-from-server');
                    $('#block-name-server-dis-channels img').attr('src', guild_avatar);
                    $('#block-name-server-dis-channels span').html(`<vgr class="copy-invite-server-pars-channels" data-copy="https://discord.gg/${get_invite_code(invite)}" invite="https://discord.gg/${get_invite_code(invite)}" tooltip="https://discord.gg/${get_invite_code(invite)}">${translater(translate.noty.other.server)}: ${guild_name}</vgr>`);
                    update_tooltips()
                    $('#block-name-server-dis-channels').addClass('active');
                    $('#block-invite-dis-channels').addClass('hider');
                    $('#count-of-pars-dis-channels').text(new_p.length + NumberEnd(new_p.length, translater(translate.noty.number_end.channels)));
                    if (type_spamming_channels == 'text') {
                      $('#close-btn-invite-dis-channels').removeClass('hide-close-file-btn');
                      $('#count-of-pars-dis-channels').addClass('active');
                    }
                    setTimeout(() => {
                      btn.html(translater(translate.noty.other.edit_l_c));
                      setTimeout(() => {
                        btn.css('opacity', '');
                      }, 50);
                    }, 150);
                    noty('success', translater(translate.noty.other.succ_pars, false, { count: new_p.length + NumberEnd(new_p.length, translater(translate.noty.number_end.channels)) }));
                    update_send_msgs_count_channels();
                  }, verfy_time);
                }, 3000);
              }).catch((r) => {
                if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
                  noty_of_ban_account(acc)
                } else if (r.message.indexOf('verify') >= 0) {
                  noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc }));
                } else {
                  noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
                }
              })
            }, 1500);
          }).catch((r) => {
            logntiwpoer(r);
            if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
              noty_of_ban_account(acc)
            } else if (r.message.indexOf('verify') >= 0) {
              noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc }));
            } else {
              noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
            }
          })
        }).catch((r) => {
          noty('error', 'err: ' + r);
          update_status_acc(acc);
          return noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
        });
      })
    });

    var lastParsChannelsData = {};

    $('body').on('click', '.pars-channels-from-server-voice', function () {
      if ($(this).hasClass('edit-pars-channels-from-server')) return;
      var invite = $('#invite-to-dis-channels-voice').val();
      if (!invite || invite == '') return noty('error', translater(translate.noty.pars.dont_provide_invite));
      var accs = $('#select-account-channels').val();
      if (accs.length <= 0) return noty('error', translater(translate.noty.dis.emped_accounts));
      var verify_server = false;
      if ($('#enabler_channel_verification').prop('checked')) {
        if (!$('#channel-verify-message-id').val() || $('#channel-verify-message-id').val() == '') return noty('error', translater(translate.noty.other.dont_provite_id_v));
        if ($('#channel-verify-message-id').val().length < 10 || $('#channel-verify-message-id').val().length > 20) return noty('error', translater(translate.noty.other.wrong_m_id_v));
        if (!$('#channel-verify-channel-id').val() || $('#channel-verify-channel-id').val() == '') return noty('error', translater(translate.noty.other.did_not_provid_channel_id));
        if ($('#channel-verify-channel-id').val().length < 10 || $('#channel-verify-channel-id').val().length > 20) return noty('error', translater(translate.noty.other.wrong_v_channel_id));
        verify_server = {
          message: $('#channel-verify-message-id').val(),
          channel: $('#channel-verify-channel-id').val()
        }
      }
      var acc = accs[0];
      var Discord = require("discord.js");
      client = new Discord.Client();
      var email = get_account(acc).login;
      var pass = get_account(acc).pass;
      var btn = $(this);
      if (!get_acc_token(email) && !get_account(account).rucaptcha) return noty('error', translater(translate.noty.other.dont_h_ar, false, { account: acc }));
      logntiwpoer('sss');
      noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc }));
      loginer_acc_api(email, pass, get_account(acc).rucaptcha).then(async check => {
        if (!check.type) {
          update_status_acc(acc);
          return noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
        }
        logntiwpoer(check)
        var token = check.token;
        await initDiscordCookie(token)
        client.login(token).then(check => {
          if (check != token) {
            update_status_acc(acc);
            return noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
          }
          invite = get_invite_code(invite);
          logntiwpoer(invite);
          noty('warning', translater(translate.noty.other.starting_pars));
          client.fetchInvite(`https://discord.gg/${invite}`).then((guild) => {
            client.destroy()
            setTimeout(async () => {
              await initDiscordCookie(token)
              client.login(token).then(() => {
                guild = guild.guild;
                var guild_id = guild.id;
                var i = 0;
                var rit = setInterval(async () => {
                  i++;
                  if (i > 10) {
                    clearInterval(rit);
                    return noty('error', translater(translate.noty.other.err_w_g_c));
                  }
                  if (!client.guilds.get(guild_id)) return false;
                  clearInterval(rit);
                  var verfy_time = 0;
                  if (verify_server) {
                    //if (!client.channels.get(verify_server.channel)) return noty('error', 'Канал с таким ID не найден.');
                    var check_next_verify_server = false;
                    try {
                      await client.channels.get(verify_server.channel).messages.fetch();
                    } catch (err_await) {
                      check_next_verify_server = true;
                    } finally {

                    }
                    if (!check_next_verify_server && !client.channels.get(verify_server.channel).messages.get(verify_server.message)) return noty('error', translater(translate.noty.other.not_found_m_id_v));
                    if (!check_next_verify_server && client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions.size < 1) return noty('error', translater(translate.noty.other.not_found_react_in_m_v));
                    if (!check_next_verify_server) for (var [key, val] of client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions) client.channels.get(verify_server.channel).messages.get(verify_server.message).react(val._emoji.identifier)
                    logntiwpoer('RRR');
                    if (!check_next_verify_server) verfy_time = 1000;
                  }
                  logntiwpoer('RRR111');
                  setTimeout(async () => {
                    await client.guilds.get(guild_id).fetch();
                    logntiwpoer('RRR111');
                    var guild_name = guild.name;
                    var guild_avatar = guild.icon;
                    if (!guild_avatar || guild_avatar == null) {
                      guild_avatar = './img/assets/undefind-avatar.png';
                    } else {
                      guild_avatar = `https://cdn.discordapp.com/icons/${guild_id}/${guild_avatar}.png?size=128`;
                    }
                    var new_p = [];
                    var user_id = client.user.id;
                    var channels = get_all_voice_channels_guild(client, guild_id);
                    channels.forEach(e => {
                      var check = check_perm_voice_channel(client, guild_id, e.id, user_id);
                      if (check) new_p.push({ id: e.id, name: e.name, limit: e.rateLimitPerUser, files: true });
                    });
                    console.log('channels', channels)
                    console.log('new_p', new_p)
                    client.destroy();
                    console.error('sakdkajsd')
                    new_p = channels;
                    if (new_p.length < 1) return noty('error', translater(translate.noty.other.lim_g_c));
                    logntiwpoer(verify_server);
                    var storeData = {
                      guild: {
                        id: guild_id,
                        name: guild_name,
                        avatar: guild_avatar,
                        invite: invite
                      },
                      channels: new_p,
                      verify: verify_server
                    };
                    lastParsChannelsData['voice'] = storeData
                    store.set('last_pars_channels_voice', storeData);
                    btn.css('opacity', 0);
                    btn.addClass('edit-pars-channels-from-server');
                    $('#block-name-server-dis-channels-voice img').attr('src', guild_avatar);
                    $('#block-name-server-dis-channels-voice span').html(`<vgr class="copy-invite-server-pars-channels" data-copy="https://discord.gg/${get_invite_code(invite)}" invite="https://discord.gg/${get_invite_code(invite)}" tooltip="https://discord.gg/${get_invite_code(invite)}">${translater(translate.noty.other.server)}: ${guild_name}</vgr>`);
                    update_tooltips()
                    $('#block-name-server-dis-channels-voice').addClass('active');
                    $('#block-invite-dis-channels-voice').addClass('hider');
                    $('#count-of-pars-dis-channels-voice').html(new_p.length + NumberEnd(new_p.length, translater(translate.noty.number_end.channels)));
                    if (type_spamming_channels == 'voice') {
                      $('#close-btn-invite-dis-channels-voice').removeClass('hide-close-file-btn');
                      $('#count-of-pars-dis-channels-voice').addClass('active');
                    }
                    setTimeout(() => {
                      btn.html(translater(translate.noty.other.edit_l_c));
                      setTimeout(() => {
                        btn.css('opacity', '');
                      }, 50);
                    }, 150);
                    noty('success', translater(translate.noty.other.succ_pars, false, { count: new_p.length + NumberEnd(new_p.length, translater(translate.noty.number_end.channels)) }));
                    update_send_msgs_count_channels();
                  }, verfy_time);
                }, 3000);
              }).catch((r) => {
                if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
                  noty_of_ban_account(acc)
                } else if (r.message.indexOf('verify') >= 0) {
                  noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc }));
                } else {
                  noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
                }
              })
            }, 1500);
          }).catch((r) => {
            logntiwpoer(r);
            if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
              noty_of_ban_account(acc)
            } else if (r.message.indexOf('verify') >= 0) {
              noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc }));
            } else {
              noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
            }
          })
        }).catch((r) => {
          noty('error', 'err: ' + r);
          update_status_acc(acc);
          return noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
        });
      })
    });

    function get_all_voice_channels_guild(client, guild_id) {
      var channels = [];
      client.guilds.get(guild_id).channels.forEach(e => {
        if (e.type == 'voice') channels.push(e);
      })
      return channels;
    }

    function get_all_text_channels_guild(client, guild_id) {
      var channels = [];
      console.log('guild_id', guild_id)
      client.guilds.get(guild_id).channels.forEach(e => {
        if (e.type == 'text') channels.push(e);
      })
      console.log('channels', channels);
      return channels;
    }

    var lastChecked_checkbox_c = null;

    $('body').on('click', '.modal-body .list-pars-edit-channels ul li', function (e) {
      if ($(this).find('.fa-copy').is(':hover')) {
        return false;
      }
      var that = $(this);
      var id = that.find('input[type="checkbox"]').attr('hash');
      var checkboxes = $('.modal-body .list-pars-edit-channels ul li .checkbox input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_c) {
          lastChecked_checkbox_c = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox_c.checked = true;
        } else {
          lastChecked_checkbox_c.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_c);
        $('.modal-body .list-pars-edit ul li').each(function (e) {

        });
        checkbox_data_c[id] = true;
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_c.checked);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).each(function (e) {
          checkbox_data_c[$(this).attr('hash')] = true;
        });
        lastChecked_checkbox_c = $('.modal-body .list-pars-edit ul li .checkbox input[type="checkbox"]')[start];
        event_change_checkboxes();
      } else {
        lastChecked_checkbox_c = that.find('input[type="checkbox"]');
      }
      if (checkbox_c[id] == true || !checkbox_c[id]) {
        var check = that.find('input[type="checkbox"]');
        if (!check.is(":checked")) {
          checkbox_data_c[id] = true;
          check.prop('checked', true);
          event_change_checkboxes_c();
          return false;
        } else {
          delete checkbox_data_c[id];
          check.prop('checked', false);
          event_change_checkboxes_c();
          return false;
        }
      } else {
        return false;
      }
    });

    var fat_tmp_data_pars_members = false;

    function combinar_pars_lists(first, two) {
      return new Promise(async fin => {
        // if (fat_tmp_data_pars_members) {
        //   var tmp = fat_tmp_data_pars_members;
        //   logntiwpoer(fat_tmp_data_pars_members);
        // } else {
        //   var tmp = store.get('pars_members');
        //   fat_tmp_data_pars_members = tmp;
        //   setTimeout(() => {
        //     fat_tmp_data_pars_members = false;
        //   }, 15 * 1000);
        // }
        var users = await get_pars_data_of_file(first);
        users = users.data;
        var add_users = await get_pars_data_of_file(two);
        add_users = add_users.data;
        add_users.forEach((e) => {
          var check = true;
          users.forEach(z => {
            if (z.id == e.id) check = false;
          });
          if (check) users.push(e);
        });
        push_file_of_pars_list(first, users);
        var count = users.length;
        get_pars_lists().then((data) => {
          if (!data.type) return fin({ type: false });
          var first_invite;
          var add_invite;
          data.data.forEach((e) => {
            if (e.id == first) first_invite = e.invite;
            if (e.id == two) add_invite = e.invite;
          });
          if (first_invite.indexOf(add_invite) < 0) first_invite += `|${add_invite}`
          data.data.forEach(e => {
            if (e.id == first) {
              e.invite = first_invite;
              e.count = count;
            }
          })
          fat_get_pars_lists = data.data;
          $('#table-pars tr[list-id="' + first + '"] td:nth-child(3)').html(`${count} ${NumberEnd(count, translater(translate.noty.number_end.users))}`);
          return fin({ type: true, data: fat_get_pars_lists });
        })
      });
    }

    var lastChecked_checkbox = null;

    $('body').on('click', '.modal-body .list-pars-edit-channels ul li .fa-copy', function () {
      var text = $('.modal-body .list-pars-edit-channels ul li[hash="' + $(this).attr('hash') + '"] .name').html().replace(/<[^>]*>/g, "").trim();
      if (!copyToClipboard(text)) {
        noty('error', translater(translate.noty.other.dont_copied));
        return false;
      } else {
        noty('success', translater(translate.noty.other.copied), 300);
        return true;
      }
    });

    $('body').on('click', '.action-pars-list-edit-channels span', function () {
      $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul li').each(function (w) {
        if ($(this).find('.checkbox input').prop('checked')) {
          delete_channel_from_pars_list($(this));
        }
      });
      event_change_checkboxes_c();
    });

    function delete_channel_from_pars_list(that) {
      var name = that.find('.name').html();
      var id = that.attr('hash');
      delete checkbox_data_c[id]
      delete_users_c.push(name);
      var selector = $('.modal-body .list-pars-edit-channels ul li[hash="' + id + '"]');
      $('.modal-body .search-list-pars-channels-edit input[type="text"]').val('');
      if (selector.attr('class') == 'search') {
        selector.css('opacity', '0');
        selector.css('height', '0px');
        selector.css('margin', '0px');
        selector.css('padding', '0px');
        $('.search-list-pars-edit-channels input').val('');
        $('.search-list-pars-edit-channels input').focus();
        setTimeout(function () {
          $('.modal-body .list-pars-edit-channels ul li.search').remove();
          $('.modal-body .list-pars-edit-channels ul li').css('display', 'flex');
          check_search_pars_edit_c = false;
          selector.remove();
        }, 200);
      } else {
        selector.css('opacity', '0');
        selector.css('height', '0px');
        selector.css('margin', '0px');
        selector.css('padding', '0px');
        setTimeout(function () {
          selector.remove();
        }, 200);
      }
      open_save_btc_pars_edit_channels();
    }

    $('body').on('change', '#auto-turn-accs-checkbox', function () {
      update_tmp('auto_turn_accs_checkbox', $('#auto-turn-accs-checkbox').prop('checked'));
    });

    function open_save_btc_pars_edit_channels() {
      if (delete_users_c.length > 0) {
        $('.save-btn-pars-list-edit-channels').css('display', 'block');
        setTimeout(() => {
          $('.save-btn-pars-list-edit-channels').css('height', '24px');
          $('.save-btn-pars-list-edit-channels').css('margin-top', '15px');
          $('.save-btn-pars-list-edit-channels').css('opacity', '1');
          $('.save-btn-pars-list-edit-channels span').css('opacity', '1');
        }, 50);
      }
    }

    function close_save_btc_pars_edit_channels() {
      $('.save-btn-pars-list-edit-channels span').css('opacity', '0');
      $('.save-btn-pars-list-edit-channels').css('height', '0px');
      $('.save-btn-pars-list-edit-channels').css('margin-top', '0px');
      setTimeout(function () {
        $('.save-btn-pars-list-edit-channels').css('display', 'none');
      }, 350);
      delete_users_c = [];
    }

    $('body').on('click', '.save-btn-pars-list-edit-channels span', function () {
      save_channels_list_pars($('#modal-edit-pars-list-channels').attr('list-id'));
    });

    function save_channels_list_pars(id) {
      if (delete_users_c.length <= 0) {
        noty('error', translater(translate.noty.pars.wrong_list_c));
        return false;
      }
      delete_channel_from_pars(id, delete_users_c).then((check) => {
        if (!check.type) {
          if (check.err && check.err == 0) {
            return noty('error', translater(translate.noty.pars.little_list));
          } else {
            return noty('error', pop_error);
          }
        }
        var count = $('body .list-pars-edit-channels ul li').length;
        delete_users_c = [];
        noty('success', translater(translate.noty.pars.update_u_list));
        close_save_btc_pars_edit_channels();
        event_change_checkboxes_c();
        var block = $('#table-pars-channels tbody tr[list-id="' + id + '"] td:nth-child(3)');
        block.css('opacity', '0');
        setTimeout(() => {
          block.html(count + NumberEnd(count, translater(translate.noty.number_end.channels)));
          block.css('opacity', '1');
        }, 250);
      });
    }

    function delete_channel_from_pars(id, channels) {
      return new Promise((fin, fal) => {
        if (!id || !channels) return fin({ type: false });
        get_pars_channel(id).then((data) => {
          if (!data.type) return fin({ type: false });
          var chan = data.data.channels;
          var new_p = [];
          chan.forEach((e, ind, arr) => {
            if (channels.indexOf(e) < 0) new_p.push(e);
            if (ind == arr.length - 1) {
              if (new_p < 1) return fin({ type: false, err: 0 });
              update_pars_channels(id, new_p).then((check) => {
                if (!check.type) return fin({ type: false });
                return fin({ type: true });
              });
            }
          });
        });
      });
    }

    $('body').on('click', '.action-pars-list-edit-checkbox-channels span:last-child', function () {
      checkbox_data_c = [];
      $('.modal-body .list-pars-edit-channels ul li .checkbox input').prop('checked', false);
      event_change_checkboxes_c();
    });

    var last_pars_data_modal_channels;

    $('body').on('click', '.action-get-channels-to-pars-list span:last-child', function () {
      return false;
      $('.input-get-list-channels textarea').select();
      document.execCommand("copy");
      return noty('success', translater(translate.noty.other.copied), 300);
    });

    $('body').on('click', '.action-get-channels-to-pars-list span:first-child', function () {
      return false;
      lastChecked_checkbox_c = null;
      checkbox_data_c = [];
      close_save_btc_pars_edit_channels();
      check_search_pars_edit_c = false;
      $('.search-list-pars-channels-edit').css('height', '');
      $('.search-list-pars-channels-edit').css('opacity', '');
      $('.search-list-pars-channels-edit').css('margin-bottom', '');
      $('.modal-body .list-pars-edit-channels ul li.search').remove();
      $('.modal-body .search-list-pars-edit-channels input[type="text"]').val('');
      $('.action-pars-list-edit-channels span').css('opacity', '0');
      $('.list-pars-edit-channels').css('display', 'block');
      $('.count-pars-list-edit-checkbox-channels').css('display', 'block');
      $('.count-pars-list-edit-checkbox-channels').css('opacity', '1');
      $('.count-pars-list-edit-checkbox-channels').css('height', '50px');
      $('.count-pars-list-edit-checkbox-channels').css('margin-top', '10px');
      $('.action-pars-list-edit-checkbox-channels').css('display', 'block');
      $('.action-pars-list-edit-checkbox-channels').css('opacity', '1');
      $('.action-pars-list-edit-checkbox-channels').css('height', '25px');
      $('.action-pars-list-edit-checkbox-channels').css('margin-top', '10px');
      $('.random-list-channels').css('height', '');
      $('.random-list-channels').css('opacity', '');
      $('.random-list-channels').css('margin-bottom', '');
      $('.save-btn-pars-list-edit-channels').css('opacity', '0');
      $('.save-btn-pars-list-edit-channels').css('height', '0px');
      $('.save-btn-pars-list-edit-channels').css('margin-top', '0px');
      $('.add-channels-to-pars-list').css('display', 'block');
      $('.add-channels-to-pars-list').css('opacity', '1');
      $('.add-channels-to-pars-list').css('height', '25px');
      $('.add-channels-to-pars-list').css('margin-top', '5px');
      $('.list-pars-edit-channels').css('opacity', '1');
      $('.list-pars-edit-channels').css('height', '400px');
      $('.action-pars-list-edit').css('height', '0px');
      $('.action-pars-list-edit').css('margin-top', '0px');
      setTimeout(function () {
        $('.action-pars-list-edit').css('display', 'none');
      }, 350);
      $('.action-get-channels-to-pars-list').css({
        'margin-top': '0px',
        'height': '0px',
        'opacity': '0'
      });
      $('.input-get-list-channels').css('display', 'none');
      $('.input-get-list-channels').css('opacity', '0');
      $('.input-get-list-channels textarea').val('');
      $('.input-get-list-channels textarea').css('height', '0');
      $('.modal-body .count-pars-list-edit-checkbox-channels span:first-child').text(translater(translate.noty.other.selected) + ': 0');
    });

    function randomize_pars_list_channels(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        get_pars_channel(id).then((data) => {
          if (!data.type) return fin({ type: false });
          var channels = shuffle(data.data.channels);
          update_pars_channels(id, channels).then((check) => {
            if (!check.type) return fin({ type: false });
            return fin({ type: true, data: channels });
          });
        });
      });
    }

    $('body').on('click', '.random-list-channels', function () {
      var id = $('#modal-edit-pars-list-channels').attr('list-id');
      randomize_pars_list_channels(id).then(check => {
        if (!check.type) return noty('error', pop_error);
        var channels = check.data;
        $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul').css('opacity', '0');
        setTimeout(() => {
          $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul').html('');
          $('.input-get-list-channels').css('display', 'none');
          $('.input-get-list-channels').css('opacity', '0');
          $('.input-get-list-channels textarea').val('');
          $('.input-get-list-channels textarea').css('height', '0');
          $('.action-get-channels-to-pars-list').css({
            'margin-top': '0px',
            'height': '0px',
            'opacity': '0',
            'display': 'none'
          });
          $('.list-pars-edit-channels').css({
            'margin-top': '',
            'height': '',
            'opacity': '',
            'display': ''
          });
          $('.count-pars-list-edit-checkbox-channels').css('opacity', '');
          $('.count-pars-list-edit-checkbox-channels').css('height', '');
          $('.count-pars-list-edit-checkbox-channels').css('margin-top', '');
          $('.save-btn-pars-list-edit-channels').css('opacity', '');
          $('.save-btn-pars-list-edit-channels').css('height', '');
          $('.save-btn-pars-list-edit-channels').css('margin-top', '');
          $('.search-list-pars-channels-edit').css('height', '');
          $('.search-list-pars-channels-edit').css('opacity', '');
          $('.search-list-pars-channels-edit').css('margin-bottom', '');
          $('.random-list-channels').css('height', '');
          $('.random-list-channels').css('opacity', '');
          $('.random-list-channels').css('margin-bottom', '');
          $('.action-pars-list-edit-checkbox-channels').css('height', '');
          $('.action-pars-list-edit-checkbox-channels').css('opacity', '');
          $('.action-pars-list-edit-checkbox-channels').css('margin-bottom', '');
          var html = ``;
          delete_users_c = [];
          checkbox_c = [];
          checkbox_data_c = [];
          last_pars_data_modal_channels = channels;
          channels.forEach(function (e) {
            html = `<li hash="` + sha1(e) + `">
                   <div class="name">`+ e + `</div>
                   <i class="fa fa-copy" hash="`+ sha1(e) + `"></i>
                       <div class="checkbox">
                         <input type="checkbox" hash="`+ sha1(e) + `" id="checkbox-c_` + sha1(e) + `">
                       </div>
                 </li>`;
            $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul').append(html);
          });
          $('.modal-body .count-pars-list-edit-checkbox-channels span:last-child').text(translater(translate.noty.other.total) + ': ' + $('body .list-pars-edit-channels ul li').length);
          $('#modal-edit-pars-list-channels .modal-body .list-pars-edit-channels ul').css('opacity', '1');
          noty('success', translater(translate.noty.pars.update_u_list));
        }, 200);
      });
    });

    // $('body').on('click', '.edit-pars-channels-from-server', function () {
    //
    // });

    $('body').on('keyup', '.modal-body .search-list-pars-channels-edit input[type="text"]', function () {
      $('.modal-body .list-pars-edit-channels ul li').css('display', 'none');
      $('.modal-body .list-pars-edit-channels ul li.search').removeClass('search');
      var val = $(this).val();
      if (!val || val == '') {
        $('.modal-body .list-pars-edit-channels ul li').css('display', 'flex');
        $('.modal-body .list-pars-edit-channels ul li.search').removeClass('search');
      }
      $('.modal-body .list-pars-edit-channels ul li').each(function (w) {
        if ($(this).find('.name').text().trim().indexOf(val) >= 0) {
          $(this).css('display', 'flex');
          $(this).addClass('search');
        }
      });
    });

    $('body').on('change', '#userid-of-user-to-spam', function () {
      update_tmp('userid-of-user-to-spam', $(this).val());
    });

    $('body').on('change', '#enable-spoiler-files-new-answer-message', function () {
      update_tmp('enable-spoiler-files-new-answer-message', $(this).prop('checked'));
    });

    $('body').on('change', '#check-exit-from-servers-after-spam', function () {
      update_tmp('check-exit-from-servers-after-spam', $(this).prop('checked'));
    })

    $('body').on('change', '#check-call-to-user', function () {
      update_tmp('check-call-to-user', $(this).prop('checked'));
    })

    var factor_scroll_channels = 0;

    function push_dis() {
      setTimeout(async () => {
        $('.invite-to-server-dis-channels').each(function () {
          if ($(this).attr('type') != type_spamming_channels) $(this).removeClass('active');
        })
        await delayd(100);
        $(`.invite-to-server-dis-channels[type="${type_spamming_channels}"]`).addClass('active');
        $('#close-btn-invite-dis-channels').addClass('hide-close-file-btn');
        $('#close-btn-invite-dis-channels-voice').addClass('hide-close-file-btn');
        $('#count-of-pars-dis-channels').removeClass('active');
        $('#count-of-pars-dis-channels-voice').removeClass('active');
        if (type_spamming_channels == 'text') {
          $('#before-block-verify-server').css('margin-top', '-35px');
          $('#join-to-voice-channels-block').removeClass('hider-block');
          $('#delay-messages-channels-block').removeClass('hider-block');
          $('#delete-messages-dis-channels-block').removeClass('hider-block');
          $('#mass-tagging-users-block').removeClass('hider-block');
          $('#delay-spam-block-channels').removeClass('hider-block');
          $('.input-to-spam-message-channels').removeClass('hider-block');
          $('#message-limit-dis-channels-block').removeClass('hider-block');
          if (lastParsChannelsData['text']) {
            var guild = lastParsChannelsData['text']['guild'];
            var guild_avatar = guild.avatar;
            var invite = guild.invite;
            var guild_name = guild.name;
            var btn = $('.pars-channels-from-server')
            btn.css('opacity', 0);
            btn.removeClass('pars-channels-from-server');
            btn.addClass('edit-pars-channels-from-server');
            $('#block-name-server-dis-channels img').attr('src', guild_avatar);
            $('#block-name-server-dis-channels span').html(`<vgr class="copy-invite-server-pars-channels" data-copy="https://discord.gg/${get_invite_code(invite)}" invite="https://discord.gg/${get_invite_code(invite)}" tooltip="https://discord.gg/${get_invite_code(invite)}">${translater(translate.noty.other.server)}: ${guild_name}</vgr>`);
            update_tooltips()
            $('#block-name-server-dis-channels').addClass('active');
            $('#block-invite-dis-channels').addClass('hider');
            $('#close-btn-invite-dis-channels').removeClass('hide-close-file-btn');
            $('#count-of-pars-dis-channels').html(lastParsChannelsData['text']['channels'].length + NumberEnd(lastParsChannelsData['text']['channels'].length, translater(translate.noty.number_end.channels)));
            $('#count-of-pars-dis-channels').addClass('active');
            setTimeout(async () => {
              btn.html(translater(translate.noty.other.edit_l_c));
              await delay(50)
              btn.css('opacity', '');
            }, 150);
            update_send_msgs_count_channels();
          }
        } else {
          $('#before-block-verify-server').css('margin-top', 0);
          $('#join-to-voice-channels-block').addClass('hider-block');
          $('#delay-messages-channels-block').addClass('hider-block');
          $('#delete-messages-dis-channels-block').addClass('hider-block');
          if ($('#mass-tagging-users-block').hasClass('active')) $('#mass-tagging-users-block').addClass('hider-block');
          $('#delay-spam-block-channels').addClass('hider-block');
          $('.input-to-spam-message-channels').addClass('hider-block');
          $('#message-limit-dis-channels-block').addClass('hider-block');
          if (lastParsChannelsData['voice']) {
            var guild = lastParsChannelsData['voice']['guild'];
            var guild_avatar = guild.avatar;
            var invite = guild.invite;
            var guild_name = guild.name;
            var btn = $('.pars-channels-from-server-voice');
            btn.css('opacity', 0);
            btn.addClass('edit-pars-channels-from-server');
            $('#block-name-server-dis-channels-voice img').attr('src', guild_avatar);
            $('#block-name-server-dis-channels-voice span').html(`<vgr class="copy-invite-server-pars-channels" data-copy="https://discord.gg/${get_invite_code(invite)}" invite="https://discord.gg/${get_invite_code(invite)}" tooltip="https://discord.gg/${get_invite_code(invite)}">${translater(translate.noty.other.server)}: ${guild_name}</vgr>`);
            update_tooltips()
            $('#block-name-server-dis-channels-voice').addClass('active');
            $('#block-invite-dis-channels-voice').addClass('hider');
            $('#close-btn-invite-dis-channels-voice').removeClass('hide-close-file-btn');
            $('#count-of-pars-dis-channels-voice').text(lastParsChannelsData['voice']['channels'].length + NumberEnd(lastParsChannelsData['voice']['channels'].length, translater(translate.noty.number_end.channels)));
            $('#count-of-pars-dis-channels-voice').addClass('active');
            setTimeout(async () => {
              btn.html(translater(translate.noty.other.edit_l_c));
              await delay(50)
              btn.css('opacity', '');
            }, 150);
            update_send_msgs_count_channels();
          }
        }
        $(`.radio-from-block-for-hover-channels`).prop('checked', false);
        $(`.radio-from-block-for-hover-channels[types="${type_spamming_channels}"]`).prop('checked', true)
      })
      if (get_tmp_text_channels()) {
        var text = get_tmp_text_channels().data.reversedCopy()[0];
        $('#text-to-message-channels').val(text);
        var val = $('#text-to-message-channels').val();
      }
      if (get_tmp_text()) {
        text = get_tmp_text().data.reversedCopy()[0];
        $('#text-to-message-users').val(text);
      }
      if (get_tmp_text_autoanswer()) {
        text = get_tmp_text_autoanswer().data.reversedCopy()[0];
        $('#text-autoanswer').val(text);
      }
      if (get_tmp_text_comments()) {
        text = get_tmp_text_comments().data.reversedCopy()[0];
        $('#text-to-message-users-file').val(text);
      }
      $('textarea.emoji').emojioneArea({
        searchPlaceholder: 'Search',
        buttonTitle: 'TAB',
        searchPosition: 'bottom',
        tones: false,
        events: {
          keyup: () => {
            update_count_random_message();
            update_count_random_message_autoanswer();
            update_count_random_message_f();
            update_count_random_message_channels();
          }
        }
      });
      $('#text-new-answer-message').emojioneArea({
        searchPlaceholder: 'Search',
        buttonTitle: 'TAB',
        searchPosition: 'bottom',
        pickerPosition: 'bottom',
        tones: false,
        events: {
          keyup: () => {
            update_count_random_message();
            update_count_random_message_autoanswer();
            update_count_random_message_f();
            update_count_random_message_channels();
            update_count_random_message_new_answer_message();
          }
        }
      });
      setTimeout(() => {
        update_count_random_message();
        update_count_random_message_autoanswer();
        update_count_random_message_f();
        update_count_random_message_channels();
        update_count_random_message_new_answer_message();
      }, 500);
      if (last_files_for_spam && last_files_for_spam.length > 0) {
        if (last_files_for_spam.length == 1) {
          var file = last_files_for_spam[0];
          var file_type = last_type_of_file_for_spam;
          var name = file.name;
          $('label[for="file-input-spam"]').html('');
          $('label[for="file-input-spam"]').addClass('loading');
          $('label[for="file-input-spam"]').css('opacity', 0);
          setTimeout(function () {
            $('label[for="file-input-spam"]').css('display', 'none');
            var i = '';
            if (file_type.indexOf('text') >= 0) {
              i = 'fa-file-alt';
            } else if (file_type.indexOf('image') >= 0) {
              i = 'fa-image';
            } else if (file_type.indexOf('video') >= 0) {
              i = 'fa-file-video';
            } else if (file_type.indexOf('application') >= 0) {
              i = 'fa-file-contract';
            } else {
              i = 'fa-question';
            }
            $('.type-of-upload-file .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
            $('.type-of-upload-file').css('display', 'block');
            setTimeout(function () {
              $('.type-of-upload-file').css('opacity', 1);
            }, 50);
          }, 450);
        } else {
          $('label[for="file-input-spam"]').html('');
          $('label[for="file-input-spam"]').addClass('loading');
          $('label[for="file-input-spam"]').css('opacity', 0);
          setTimeout(function () {
            $('label[for="file-input-spam"]').css('display', 'none');
            var name = `${last_files_for_spam.length} ${NumberEnd(last_files_for_spam.length, translater(translate.noty.dis.number_end_files))}`;
            $('.type-of-upload-file .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
            $('.type-of-upload-file').css('display', 'block');
            setTimeout(function () {
              $('.type-of-upload-file').css('opacity', 1);
            }, 50);
          }, 450);
        }
      }
      if (last_files_for_spam_answer && last_files_for_spam_answer.length > 0) {
        if (last_files_for_spam_answer.length > 1) {
          $('#add-files-to-answer-msg').html('');
          $('#add-files-to-answer-msg').addClass('loading');
          $('#add-files-to-answer-msg').css('opacity', 0);
          setTimeout(function () {
            $('#add-files-to-answer-msg').css('display', 'none');
            var name = `${last_files_for_spam_answer.length} ${NumberEnd(last_files_for_spam_answer.length, translater(translate.noty.dis.number_end_files))}`;
            $('#type-of-upload-file-answer .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-answer" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
            $('#type-of-upload-file-answer').css('display', 'block');
            setTimeout(function () {
              $('#type-of-upload-file-answer').css('opacity', 1);
            }, 50);
          }, 450);
        } else {
          var file_type = last_type_of_file_for_spam_answer;
          var name = last_files_for_spam_answer[0].name;
          $('#add-files-to-answer-msg').html('');
          $('#add-files-to-answer-msg').addClass('loading');
          $('#add-files-to-answer-msg').css('opacity', 0);
          setTimeout(function () {
            $('#add-files-to-answer-msg').css('display', 'none');
            var i = '';
            if (file_type.indexOf('text') >= 0) {
              i = 'fa-file-alt';
            } else if (file_type.indexOf('image') >= 0) {
              i = 'fa-image';
            } else if (file_type.indexOf('video') >= 0) {
              i = 'fa-file-video';
            } else if (file_type.indexOf('application') >= 0) {
              i = 'fa-file-contract';
            } else {
              i = 'fa-question';
            }
            $('#type-of-upload-file-answer .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-answer" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
            $('#type-of-upload-file-answer').css('display', 'block');
            setTimeout(function () {
              $('#type-of-upload-file-answer').css('opacity', 1);
            }, 50);
          }, 450);
        }
      }
      if (last_files_for_spam_channels && last_files_for_spam_channels.length > 0) {
        if (last_files_for_spam_channels.length > 1) {
          $('#add-files-to-channels-msg').html('');
          $('#add-files-to-channels-msg').addClass('loading');
          $('#add-files-to-channels-msg').css('opacity', 0);
          setTimeout(function () {
            $('#add-files-to-channels-msg').css('display', 'none');
            var name = `${last_files_for_spam_channels.length} ${NumberEnd(last_files_for_spam_channels.length, translater(translate.noty.dis.number_end_files))}`;
            $('#type-of-upload-file-channels .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-channels" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
            $('#type-of-upload-file-channels').css('display', 'block');
            setTimeout(function () {
              $('#type-of-upload-file-channels').css('opacity', 1);
            }, 50);
          }, 450);
        } else {
          var file_type = last_type_of_file_for_spam_channels;
          var name = last_files_for_spam_channels[0].name;
          $('#add-files-to-channels-msg').html('');
          $('#add-files-to-channels-msg').addClass('loading');
          $('#add-files-to-channels-msg').css('opacity', 0);
          setTimeout(function () {
            $('#add-files-to-channels-msg').css('display', 'none');
            var i = '';
            if (file_type.indexOf('text') >= 0) {
              i = 'fa-file-alt';
            } else if (file_type.indexOf('image') >= 0) {
              i = 'fa-image';
            } else if (file_type.indexOf('video') >= 0) {
              i = 'fa-file-video';
            } else if (file_type.indexOf('application') >= 0) {
              i = 'fa-file-contract';
            } else {
              i = 'fa-question';
            }
            $('#type-of-upload-file-channels .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-channels" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
            $('#type-of-upload-file-channels').css('display', 'block');
            setTimeout(function () {
              $('#type-of-upload-file-channels').css('opacity', 1);
            }, 50);
          }, 450);
        }
      }
      if (last_type_to_spam != 0) {
        setTimeout(() => {
          change_to_type_spam(last_type_to_spam);
        }, 200);
      }
      $('#modal-create-answer-rule .nice_select').niceSelect();
      if (tmp_data.enable_blacklist) enableAddBlackList(true);
      if (tmp_data.auto_change_accs) enableAutoChangeAccs(true);
      if (tmp_data['count-of-success-messages-change']) $('#count-of-success-messages-change').val(tmp_data['count-of-success-messages-change']);
      if (tmp_data.delay_messages_checkbox) enableDelayMessage(true);
      if (tmp_data['enabler_channel_verification']) {
        $('#enabler_channel_verification').prop('checked', true);
        $('#channel-verify-block').addClass('active');
      }
      if (tmp_data['channel-verify-message-id']) $('#channel-verify-message-id').val(tmp_data['channel-verify-message-id']);
      if (tmp_data['channel-verify-channel-id']) $('#channel-verify-channel-id').val(tmp_data['channel-verify-channel-id']);
      if (tmp_data.limit_msgs_checkbox_channels) {
        $('#limit-msgs-checkbox-channels').prop('checked', tmp_data.limit_msgs_checkbox_channels);
        if (tmp_data.limit_msgs_checkbox_channels) {
          $('#limit-msgs-channels').addClass('active');
        } else {
          $('#limit-msgs-channels').removeClass('active');
        }
      }
      if (tmp_data['count-of-more-message-to-user']) $('#count-of-more-message-to-user').val(tmp_data['count-of-more-message-to-user']);
      if (tmp_data['more-message-to-user']) {
        $('#more-message-to-user').prop('checked', true);
        $('#block-more-message-to-user').addClass('active');
      }
      if (tmp_data['limit-auto-stop-dis']) $('#limit-auto-stop-dis').val(tmp_data['limit-auto-stop-dis']);
      if (tmp_data['auto-stop-dis']) {
        $('#auto-stop-dis').prop('checked', true);
        $('#block-auto-stop-dis').addClass('active');
      }
      if (tmp_data['check-blacklist-private-dm']) $('#check-blacklist-private-dm').prop('checked', true);
      if (tmp_data['mass-tagging-users-check']) {
        $('#mass-tagging-users-check').prop('checked', true)
        $('#mass-tagging-users-block').addClass('active')
        $('.input-to-spam-message-channels').addClass('hider-block-opacity');
      }
      if (tmp_data['mass-tagging-users-count']) {
        $('#mass-tagging-users-count').val(tmp_data['mass-tagging-users-count']);
        var count = parseInt(tmp_data['mass-tagging-users-count']);
        if (!isNaN(count)) {
          var count = NumberEnd(count, translater(translate.noty.number_end.users));
          $('[for="mass-tagging-users-count"] pro').text(count);
        }
      }
      if (tmp_data['mass-tagging-users-text']) $('#mass-tagging-users-text').val(tmp_data['mass-tagging-users-text']);
      if (tmp_data['exit-from-server-spam-channels']) $('#exit-from-server-spam-channels').prop('checked', tmp_data['exit-from-server-spam-channels']);
      if (tmp_data['check-exit-from-servers-after-spam']) $('#check-exit-from-servers-after-spam').prop('checked', true);
      if (tmp_data['check-call-to-user']) $('#check-call-to-user').prop('checked', true);
      if (tmp_data['join-to-voice-channels']) $('#join-to-voice-channels').prop('checked', tmp_data['join-to-voice-channels']);
      if (tmp_data['userid-of-user-to-spam']) $('#userid-of-user-to-spam').val(tmp_data['userid-of-user-to-spam']);
      if (tmp_data['limit-msgs-channels']) $('#limit-msgs-channels .form input').val(tmp_data['limit-msgs-channels']);
      if (tmp_data['from-secs-delay-channels']) $('#from-secs-delay-channels').val(tmp_data['from-secs-delay-channels']);
      if (tmp_data['to-secs-delay-channels']) $('#to-secs-delay-channels').val(tmp_data['to-secs-delay-channels']);
      if (tmp_data['enable-spoiler-files-autoanswer']) $('#enable-spoiler-files-autoanswer').prop('checked', tmp_data['enable-spoiler-files-autoanswer']);
      if (tmp_data['enable-spoiler-files-channels']) $('#enable-spoiler-files-channels').prop('checked', tmp_data['enable-spoiler-files-channels']);
      if (tmp_data['enable-spoiler-files']) $('#enable-spoiler-files').prop('checked', tmp_data['enable-spoiler-files']);
      if (tmp_data['invite-to-dis-channels']) $('#invite-to-dis-channels').val(tmp_data['invite-to-dis-channels']);
      if (tmp_data['invite-to-dis-channels-voice']) $('#invite-to-dis-channels-voice').val(tmp_data['invite-to-dis-channels-voice']);
      if (tmp_data['invite-to-dis-channels-voice']) $('#invite-to-dis-channels-voice').val(tmp_data['invite-to-dis-channels-voice']);
      if (tmp_data['enable-spoiler-files-new-answer-message']) $('#enable-spoiler-files-new-answer-message').prop('checked', tmp_data['enable-spoiler-files-new-answer-message']);
      if (tmp_data['delete-messages-dis']) $('#delete-messages-dis').val(tmp_data['delete-messages-dis'])
      if (tmp_data['check-delete-messages-dis']) {
        $('#check-delete-messages-dis').prop('checked', true)
        $('#delete-messages-dis-block').addClass('active');
      }
      if (tmp_data['delete-messages-dis-channels']) $('#delete-messages-dis-channels').val(tmp_data['delete-messages-dis-channels'])
      if (tmp_data['check-delete-messages-dis-channels']) {
        $('#check-delete-messages-dis-channels').prop('checked', true)
        $('#delete-messages-dis-block-channels').addClass('active');
      }
      if (tmp_data.add_to_friend_checkbox) $('#add-to-friend-checkbox').prop('checked', tmp_data.add_to_friend_checkbox);
      if (tmp_data.to_secs_delay) $('#to-secs-delay').val(tmp_data.to_secs_delay);
      if (tmp_data.from_secs_delay) $('#from-secs-delay').val(tmp_data.from_secs_delay);
      if (tmp_data.noty_of_msgs_checkbox) {
        var noty_of_msgs_checkbox = tmp_data.noty_of_msgs_checkbox;
        $('#noty-of-msgs-checkbox').prop('checked', noty_of_msgs_checkbox);
        if (noty_of_msgs_checkbox) {
          $('#before-block-sound-notys').addClass('active');
          $('#before-block-notend-notys').addClass('active');
        } else {
          $('#before-block-sound-notys').removeClass('active');
          $('#before-block-notend-notys').removeClass('active');
        }
      }
      if (tmp_data['delay-autoanswer']) $('#delay-autoanswer').val(tmp_data['delay-autoanswer']);
      if (tmp_data['autoanswer-check']) {
        $('#autoanswer-check').prop('checked', true);
        $('#block-autoanswer').addClass('active');
        $('#block-autoanswer').css('opacity', 1);
      }
      if (tmp_data['answer-rules-enable']) {
        $('#answer-rules-enable').prop('checked', tmp_data['answer-rules-enable']);
        answer_scripts_block()
      }
      if (tmp_data['delay-messages-checkbox-channels']) {
        $('#delay-messages-checkbox-channels').prop('checked', tmp_data['delay-messages-checkbox-channels']);
        $('#delay-messages-channels').val('1');
        $('#delay-spam-block-channels').addClass('active');
      }
      if (tmp_data.sound_noty_of_msgs_checkbox) $('#sound-noty-of-msgs-checkbox').prop('checked', tmp_data.sound_noty_of_msgs_checkbox);
      if (tmp_data['notend-noty-of-msgs-checkbox']) $('#notend-noty-of-msgs-checkbox').prop('checked', tmp_data['notend-noty-of-msgs-checkbox']);
      get_pars_lists().then((data) => {
        if (!data.type) return false;
        var block = $('#select-pars-list');
        block.html('');
        var checks = [];
        data.data.forEach((e, ind, arr) => {
          var name = e.server.name;
          if (!checks[name]) {
            checks[name] = 1;
          } else {
            checks[name]++;
          }
          if (ind == arr.length - 1) {
            data.data.forEach((v, ind, arr) => {
              var id = v.id;
              var name = v.server.name;
              var count = v.count + NumberEnd(v.count, translater(translate.noty.number_end.users));
              if (checks[name] > 1) name += ' (' + count + ')';
              if (ind == arr.length - 1) {
                var html = `<option selected="" value="${id}">${name}</option>`;
              } else {
                var html = `<option value="${id}">${name}</option>`;
              }
              block.prepend(html);
            });
          }
        });
      });
      setTimeout(() => {
        push_dis_history();
      }, 500);
      if (check_start_spam) {
        var btn = $('.btn-start-spam');
        btn.html('STOP');
        btn.addClass('waiting');
        open_pause_btn_spam();
      }
      if (checkStartSpamChannels) {
        var btn = $('.btn-start-spam-channels');
        btn.html('STOP');
        btn.addClass('waiting');
        open_pause_btn_spam_channels();
      }
      //push_dis_channels();
      if (tmp_data.auto_turn_accs_checkbox) {
        $('#auto-turn-accs-checkbox').prop('checked', true);
        $('#count-of-will-send-messages').css('height', '0');
        $('#count-of-will-send-messages').css('opacity', 0);
        $('#count-of-will-send-messages').css('pointer-events', 'none');
      }
    }

    function close_pause_btn_spam_channels() {
      var btn = $('.pre-btn-pause-spam-channels');
      btn.removeClass('active');
      $('.btn-pause-spam-channels').html('PAUSE');
    }

    function close_pause_btn_spam() {
      var btn = $('.pre-btn-pause-spam');
      btn.removeClass('active');
      $('.btn-pause-spam').html('PAUSE');
    }

    function open_pause_btn_spam() {
      var btn = $('.pre-btn-pause-spam');
      if (!btn.hasClass('active')) btn.addClass('active');
      if (check_pause_spam) {
        $('.btn-pause-spam').html('CONTINUE');
      } else {
        $('.btn-pause-spam').html('PAUSE');
      }
    }

    $('body').on('change', '#enable-own-channels-list-checkbox', function () {
      var val = $(this).prop('checked');
      if (val) {
        $('#enable-own-channels-list-block').addClass('active');
      } else {
        $('#enable-own-channels-list-block').removeClass('active');
      }
    })

    $('body').on('click', '.select-math-operator-for-answer-rule span', function () {
      if (!$(this).hasClass('active') && !$(this).next().hasClass('active') && !$(this).prev().hasClass('active')) {
        var hash = MD5(uuid());
        var html = `<div hash="${hash}" class="answer-rule-creater" style="opacity: 0;transition:.25s;">
                       <select class="nice_select">
                         <option value="indexof" translate="Contains" translate2="Contiene">Содержит</option>
                         <option value="!indexof" translate="Does not contain" translate2="No contiene">Не содержит</option>
                         <option value="equally" translate="Equally" translate2="Igualmente">Равно</option>
                         <option value="!equally" translate="Not equal" translate2="No igual">Не равно</option>						
                       </select>
                       <input type="text" placeholder="Текст..." translate="Text..." translate2="Texto...">
                       <div class="select-math-operator-for-answer-rule">
                         <span hash="${hash}" translate="And" translate2="Y" data="and">И</span>
                         <span hash="${hash}" translate="Or" translate2="O" data="or">Или</span>
                       </div>
                     </div>`;
        $('#block-to-select-operators-answer').append(html);
        reload_translate();
        $('#block-to-select-operators-answer .answer-rule-creater:last-child select').niceSelect();
        $('#block-to-select-operators-answer .answer-rule-creater:last-child').css('opacity', '')
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
        var hash = $(this).attr('hash');
        if ($('.answer-rule-creater').length > 1) {
          var check = false;
          $('#block-to-select-operators-answer .answer-rule-creater').each(function () {
            if (check) {
              $(this).remove()
            }
            if ($(this).attr('hash') == hash) check = true;
          })
        }
      }
      $(this).prev().removeClass('active')
      $(this).next().removeClass('active')
    })

    $('body').on('click', '#answer-rules-settings', function () {
      $('.modal').modal('hide')
      $('#modal-answer-rules').modal('show');
    })

    $('body').on('click', '#create-new-answer-message', function () {
      $('.modal').modal('hide')
      setTimeout(() => {
        $('#modal-create-answer-message').modal('show');
      }, 150);
    })

    $('body').on('click', '#create-new-rule', function () {
      if (get_answer_messages().length < 1) return noty('error', translater(translate.noty.other.need_one_answer_message))
      $('.modal').modal('hide')
      setTimeout(() => {
        $('#modal-create-answer-rule').modal('show')
      }, 150);
    })

    function get_answer_messages() {
      if (!localStorage['answer_messages']) {
        var messages = [];
      } else {
        var messages = JSON.parse(localStorage['answer_messages']);
      }
      return messages;
    }

    function get_answer_message_by_id(id) {
      if (!localStorage['answer_messages']) {
        var messages = [];
      } else {
        var messages = JSON.parse(localStorage['answer_messages']);
      }
      var data = false;
      messages.forEach(e => {
        if (e.id == id) data = e;
      })
      return data;
    }

    function push_answer_msg(data) {
      var messages = get_answer_messages();
      messages.push(data);
      localStorage.setItem('answer_messages', JSON.stringify(messages));
    }

    $('body').on('click', '.delete-answer-rule', function () {
      var id = $(this).attr('hash');
      $('#modal-delete-answer-rule').attr('hash', id);
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-delete-answer-rule').modal('show');
      }, 150);
    })

    $('body').on('click', '#delete-answer-rule-btn', function () {
      deleter_answer_rule()
    })

    function deleter_answer_rule() {
      var id = $('#modal-delete-answer-rule').attr('hash');
      delete_answer_rule(id);
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-answer-rules').modal('show')
      }, 150)
      noty('success', translater(translate.noty.other.success_delete_answer_rule));
    }

    $('body').on('click', '.edit-answer-rule', function () {
      var id = $(this).attr('hash');
      $(`.answer-rule-list input[hash="${id}"]`).prop('checked', !$(`.answer-rule-list input[hash="${id}"]`).prop('checked'))
      $('#modal-create-answer-rule').addClass('editer');
      $('#modal-create-answer-rule').attr('hash', id);
      $('.select-math-operator-for-answer-rule span').removeClass('active');
      $('.answer-rule-creater[hash]').remove();
      var rule = get_answer_rule_by_id(id);
      var data = rule.data;
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-create-answer-rule').modal('show')
        $('#select-msg-to-new-answer-rule').val(rule.msg_id);
        $('#select-msg-to-new-answer-rule').niceSelect('update');
        $('#name-of-new-answer-rule').val(rule.name);
        $('.answer-rule-creater select').val(data[0].type);
        $('.answer-rule-creater select').niceSelect('update');
        $('.answer-rule-creater input[type="text"]').val(data[0].value);
        if (data.length > 1) {
          $(`.select-math-operator-for-answer-rule span[data="${data[0].oper}"]`).addClass('active');
          data.forEach((e, ind, arr) => {
            if (ind > 0) {
              var tmp_hash = MD5(uuid());
              var html = `<div class="answer-rule-creater" hash="${tmp_hash}">
                             <select class="nice_select"><option value="indexof" translate="Contains" translate2="Contiene">Содержит</option><option value="!indexof" translate="Does not contain" translate2="No contiene">Не содержит</option><option value="equally" translate="Equally" translate2="Igualmente">Равно</option><option value="!equally" translate="Not equal" translate2="No igual">Не равно</option></select>
                             <input type="text" placeholder="Текст..." translate="Text..." translate2="Texto...">
                             <div class="select-math-operator-for-answer-rule">
                               <span translate="And" translate2="Y" data="and" hash="${tmp_hash}">И</span>
                               <span translate="Or" translate2="O" data="or" hash="${tmp_hash}">Или</span>
                             </div>
                           </div>`;
              $('#block-to-select-operators-answer').append(html);
              $('.answer-rule-creater:last-child select').val(e.type);
              $('.answer-rule-creater:last-child input[type="text"]').val(e.value);
              if (ind != arr.length - 1) $(`.answer-rule-creater:last-child .select-math-operator-for-answer-rule span[data="${e.oper}"]`).addClass('active');
            }
          })
          reload_translate();
          $('.answer-rule-creater select').niceSelect();
        }
      }, 150)
    })

    $('body').on('click', '.delete-answer-rule', function () {
      var id = $(this).attr('hash');
      $(`.answer-rule-list input[hash="${id}"]`).prop('checked', !$(`.answer-rule-list input[hash="${id}"]`).prop('checked'))
    })

    $('body').on('show.bs.modal', '#modal-answer-rules', function () {
      push_answer_messages_html()
      push_answer_rules_html()
      update_count_of_active_answer_rules()
    })

    $('body').on('show.bs.modal', '#modal-create-answer-message', function () {
      if (!$(this).hasClass('editer')) {
        $('.remove-file-block-new-answer-message').click();
        $('#name-of-new-answer-message').val('');
        $('#text-new-answer-message')[0].emojioneArea.setText('');
      }
    })

    $('body').on('click', '.edit-answer-message', function () {
      var id = $(this).attr('hash');
      var message = get_answer_message_by_id(id);
      $('#modal-create-answer-message').addClass('editer')
      $('#modal-create-answer-message').attr('hash', id);
      $('#name-of-new-answer-message').val(message.name);
      $('#text-new-answer-message')[0].emojioneArea.setText(message.text);
      if (message.files && message.files.length > 0) {
        if (message.files.length > 1) {
          $('#add-files-to-new-answer-message').html('');
          $('#add-files-to-new-answer-message').addClass('loading');
          $('#add-files-to-new-answer-message').css('opacity', 0);
          $('#add-files-to-new-answer-message').css('display', 'none');
          var name = `${message.files.length} ${NumberEnd(message.files.length, translater(translate.noty.dis.number_end_files))}`;
          $('#type-of-upload-file-new-answer-message .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-new-answer-message" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-new-answer-message').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-new-answer-message').css('opacity', 1);
          }, 50);
        } else {
          $('#add-files-to-new-answer-message').html('');
          $('#add-files-to-new-answer-message').addClass('loading');
          $('#add-files-to-new-answer-message').css('opacity', 0);
          var file_type = message.files[0].type;
          $('#add-files-to-new-answer-message').css('display', 'none');
          var i = '';
          if (file_type.indexOf('text') >= 0) {
            i = 'fa-file-alt';
          } else if (file_type.indexOf('image') >= 0) {
            i = 'fa-image';
          } else if (file_type.indexOf('video') >= 0) {
            i = 'fa-file-video';
          } else if (file_type.indexOf('application') >= 0) {
            i = 'fa-file-contract';
          } else {
            i = 'fa-question';
          }
          var name = message.files[0].name;
          $('#type-of-upload-file-new-answer-message .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-new-answer-message" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-new-answer-message').css('display', 'block');
          $('#type-of-upload-file-new-answer-message').css('opacity', 1);
        }
      } else {
        $('.remove-file-block-new-answer-message').click();
      }
      $('#enable-spoiler-files-new-answer-message').prop('checked', message.spoiler)
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-create-answer-message').modal('show');
      }, 150)
    })

    function push_answer_rules_html() {
      $('#modal-create-answer-rule').removeClass('editer');
      var block = $('#block-edit-active-answer-rules');
      block.html('');
      var messages = get_answer_rules();
      if (messages.length > 0) {
        messages.forEach(e => {
          var checked = ' checked';
          if (!e.status) checked = '';
          var html = `<label class="answer-rule-list" hash="${e.id}"><span class="name">${e.name}</span><input type="checkbox"${checked} hash="${e.id}"><i class="fa fa-trash-alt delete-answer-rule waves-effect" hash="${e.id}"></i><i class="fa fa-cog edit-answer-rule waves-effect" hash="${e.id}"></i></label>`;
          block.prepend(html)
        })
      }
    }

    function push_answer_messages_html() {
      $('#modal-create-answer-message').removeClass('editer');
      var block = $('#answer-rules-messages-list');
      block.html('');
      var messages = get_answer_messages();
      if (messages.length > 0) {
        messages.forEach(e => {
          var html = `<div class="answer-message" hash="${e.id}"><span class="name">${e.name}</span><i class="fa fa-trash-alt delete-answer-message waves-effect" hash="${e.id}"></i><i class="fa fa-cog edit-answer-message waves-effect" hash="${e.id}"></i></div>`
          block.prepend(html)
        })
      }
    }

    $('body').on('click', '#delete-answer-msg-btn', function () {
      delete_answer_message();
    });

    function delete_answer_message() {
      var id = $('#modal-delete-answer-message').attr('hash');
      var messages = get_answer_messages();
      var new_messages = [];
      messages.forEach(e => {
        if (e.id != id) new_messages.push(e);
      })
      localStorage['answer_messages'] = JSON.stringify(new_messages);
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-answer-rules').modal('show')
      }, 150)
      noty('success', translater(translate.noty.other.success_delete_answer_msg));
    }

    $('body').on('click', '.delete-answer-message', function () {
      var id = $(this).attr('hash');
      $('#modal-delete-answer-message').attr('hash', id);
      $('.modal').modal('hide');
      setTimeout(() => {
        $('#modal-delete-answer-message').modal('show')
      }, 150)
    })

    function update_answer_msg(id, data) {
      var messages = get_answer_messages();
      messages.forEach((e, ind) => {
        if (e.id == id) messages[ind] = data
      })
      localStorage['answer_messages'] = JSON.stringify(messages);
    }

    $('body').on('click', '#create-new-answer-message-r', function () {
      var messages = get_answer_messages();
      var name = $('#name-of-new-answer-message').val().replace(/<\/?[^>]+>/ig, ' ');
      if (!name || name == '') return noty('error', translater(translate.noty.accounts.name));
      var check = false;
      messages.forEach(e => {
        if ($('#modal-create-answer-message').hasClass('editer')) {
          if (e.name == name && e.id != $('#modal-create-answer-message').attr('hash')) check = true;
        } else {
          if (e.name == name) check = true;
        }
      })
      if (check) return noty('error', translater(translate.noty.other.has_name_for_answer_msg));
      var text = $('#text-new-answer-message')[0].emojioneArea.getText();
      if (!text || text == '') return noty('error', translater(translate.noty.dis.emped_msg));
      var files = files_data_for_new_answer_message;
      files_data_for_new_answer_message = [];
      var spoiler = $('#enable-spoiler-files-new-answer-message').prop('checked');
      if (files.length > 0) {
        if (!fs.existsSync(`${__dirname}/upload`)) fs.mkdirSync(`${__dirname}/upload`);
        files.forEach((e, ind, arr) => {
          if (fs.existsSync(e.path)) {
            fs.copyFile(e.path, `${__dirname}/upload/${e.name}`, (err) => {
              if (err) return noty('error', translater(translate.noty.other.err_save_file, false, { name: e.name }));
              if (ind == arr.length - 1) {
                var data = {
                  text: text,
                  files: files,
                  spoiler: spoiler,
                  name: name,
                  time: new Date().getTime()
                };
                if ($('#modal-create-answer-message').hasClass('editer')) {
                  data.id = get_answer_message_by_id($('#modal-create-answer-message').attr('hash')).id;
                  update_answer_msg($('#modal-create-answer-message').attr('hash'), data)
                  noty('success', translater(translate.noty.other.success_update_answer_msg));
                } else {
                  data.id = MD5(uuid());
                  push_answer_msg(data)
                  noty('success', translater(translate.noty.other.success_create_answer_msg));
                }
                $('.modal').modal('hide');
                setTimeout(() => {
                  $('#modal-answer-rules').modal('show')
                }, 150)
              }
            })
          }
        })
      } else {
        var data = {
          text: text,
          files: false,
          spoiler: spoiler,
          name: name,
          id: MD5(uuid()),
          time: new Date().getTime()
        };
        if ($('#modal-create-answer-message').hasClass('editer')) {
          update_answer_msg($('#modal-create-answer-message').attr('hash'), data)
          noty('success', translater(translate.noty.other.success_update_answer_msg));
        } else {
          push_answer_msg(data)
          noty('success', translater(translate.noty.other.success_create_answer_msg));
        }
        $('.modal').modal('hide');
        setTimeout(() => {
          $('#modal-answer-rules').modal('show')
        }, 150)
      }
    });

    function create_spam_users(pars_id = 0, accounts, text, type, files = false, add_black = false, count_success_message_change = false, change_accounts = false, turn = false, delay, add_friends = false, notys = false, answer = false, send_as_spoiler = false, to_type = 0, to_userid = false, count_more_msg_to_user = 1) {
      return new Promise((fin, fal) => {
        if (to_type == 0) {
          if (!pars_id || !accounts || !type) return fin({ type: false });
          get_pars_list(pars_id).then((check) => {
            if (!check.type) return fin({ type: false });
            if (type == 1) {
              if (text == '' || text.length < 1 || text.length > 5000) return fin({ type: false, err: 0 });
            } else if (type == 2 && text.length > 5000 && text != '') return fin({ type: false, err: 0 });
            var id = uuid();
            var data = {
              id: id,
              accounts: accounts,
              status: 1,
              pars_id: pars_id,
              text: text,
              type: type,
              add_black: add_black,
              count_success_message_change: count_success_message_change,
              change_accounts: change_accounts,
              delay: delay,
              add_friends: add_friends,
              turn: turn,
              notys: notys,
              //answer: answer,
              send_as_spoiler: send_as_spoiler,
              to_type: to_type,
              to_userid: to_userid,
              count_more_msg_to_user: count_more_msg_to_user,
              time: new Date().getTime()
            };
            var spam = [];
            if (fat_spam) spam = fat_spam;
            spam.push(data);
            fat_spam = spam;
            setTimeout(() => {
              store.set('spam', spam);
            }, 12 * 1000);
            return fin({ type: true, id: id, data: data });
          });
        } else {
          var id = uuid();
          var data = {
            id: id,
            accounts: accounts,
            status: 1,
            pars_id: pars_id,
            text: text,
            type: type,
            add_black: add_black,
            count_success_message_change: count_success_message_change,
            change_accounts: change_accounts,
            delay: delay,
            add_friends: add_friends,
            turn: turn,
            notys: notys,
            //answer: answer,
            send_as_spoiler: send_as_spoiler,
            to_type: to_type,
            to_userid: to_userid,
            count_more_msg_to_user: count_more_msg_to_user,
            time: new Date().getTime()
          };
          var spam = [];
          if (fat_spam) spam = fat_spam;
          spam.push(data);
          fat_spam = spam;
          setTimeout(() => {
            store.set('spam', spam);
          }, 12 * 1000);
          return fin({ type: true, id: id, data: data });
        }
      })
    }

    var mouse_o_h_b = false;

    var fat_get_tmp_text = false;
    var fat_get_tmp_text_has = false;
    var fat_get_tmp_text_autoanswer = false;

    function get_tmp_text() {
      if (fat_get_tmp_text) {
        var history = fat_get_tmp_text;
      } else {
        if (!localStorage['text_history']) {
          var history = false;
        } else {
          var history = JSON.parse(localStorage['text_history']);
        }
      }
      if (!history) return false;
      fat_get_tmp_text = history;
      return { type: true, data: history };
    }

    function push_text_history(text) {
      if (fat_get_tmp_text) {
        var now = fat_get_tmp_text;
      } else {
        if (!localStorage['text_history']) {
          var now = []
        } else {
          var now = JSON.parse(localStorage['text_history']);
        }
      }
      if (now && now.length > 0 && now[now.length - 1] == text) return;
      now.push(text);
      if (now.length > 100) {
        var new_p = [];
        now.forEach((e, ind) => {
          if (ind != 0) new_p.push(e);
        })
        now = new_p;
      }
      fat_get_tmp_text = now;
      setTimeout(() => {
        localStorage.setItem('text_history', JSON.stringify(now));
      }, 500);
    }

    function get_tmp_text_autoanswer() {
      if (fat_get_tmp_text_autoanswer) {
        var history = fat_get_tmp_text_autoanswer;
      } else {
        if (!localStorage['text_history_autoanswer']) {
          var history = false;
        } else {
          var history = JSON.parse(localStorage['text_history_autoanswer']);
        }
      }
      if (!history) return false;
      fat_get_tmp_text_autoanswer = history;
      return { type: true, data: history };
    }

    function push_text_history_autoanswer(text) {
      if (fat_get_tmp_text_autoanswer) {
        var now = fat_get_tmp_text_autoanswer;
      } else {
        if (!localStorage['text_history_autoanswer']) {
          var now = []
        } else {
          var now = JSON.parse(localStorage['text_history_autoanswer']);
        }
      }
      if (now && now.length > 0 && now[now.length - 1] == text) return;
      now.push(text);
      if (now.length > 100) {
        var new_p = [];
        now.forEach((e, ind) => {
          if (ind != 0) new_p.push(e);
        })
        now = new_p;
      }
      fat_get_tmp_text_autoanswer = now;
      setTimeout(() => {
        localStorage.setItem('text_history_autoanswer', JSON.stringify(now));
      }, 500);
    }

    $('body').on('change', '#text-to-message-users', function () {
      var val = $(this).val();
      if (!val || val == '') return false;
      push_text_history(val);
    });

    $('body').on('change', '#text-autoanswer', function () {
      var val = $(this).val();
      if (!val || val == '') return false;
      push_text_history_autoanswer(val);
    });

    $('body').on('mouseover', '.block-history-text-dis', function () {
      mouse_o_h_b = true;
    })

    $('body').on('mouseleave', '.block-history-text-dis', function (e) {
      mouse_o_h_b = false;
      $(this).removeClass('active');
    })

    $('body').on('click', '.copy-hist-text-channels', function () {
      copyToClipboard(Buffer.from($(this).attr('data'), 'base64').toString());
      var tooltip = $(`#tippy-${$(this).attr('tooltip-id')}`);
      tooltip.find('.tippy-content').html(translater(translate.noty.other.copied_pass));
    });

    $('body').on('click', '.copy-hist-text-comments', function () {
      copyToClipboard(Buffer.from($(this).attr('data'), 'base64').toString());
      var tooltip = $(`#tippy-${$(this).attr('tooltip-id')}`);
      tooltip.find('.tippy-content').html(translater(translate.noty.other.copied_pass));
    });

    $('body').on('click', '#select-all-merge-lists', function () {
      var check = $(this).hasClass('checked');
      if (check) {
        $('.select-lists-comb-block .block-list-sel input').prop('checked', false);
        $(this).removeClass('checked');
      } else {
        $('.select-lists-comb-block .block-list-sel input').prop('checked', true);
        $(this).addClass('checked');
      }
      var count = $('.sel-list-combiner-checkbox:checked').length;
      $('#count-of-selected-pars-comb-lists y').html(count);
      if (count > 0) {
        $('#combine-lists-pars').removeClass('hider');
      } else {
        $('#combine-lists-pars').addClass('hider');
      }
    });

    $('body').on('click', '#select-all-dublicates-merge-lists', () => {
      var blocks = [];
      var currentInvite = get_invite_code($('.first-list-combiner').attr('invite-link'))
      if (!currentInvite || currentInvite.length < 2) return;
      $('.select-lists-comb-block .block-list-sel').each(function () {
        var invite = get_invite_code($(this).attr('invite-link'));
        if (!invite || invite.length < 2) return;
        if (invite == currentInvite) blocks.push($(this));
      })
      blocks.forEach(e => {
        e.find('input').prop('checked', true);
      });
      var count = $('.sel-list-combiner-checkbox:checked').length;
      $('#count-of-selected-pars-comb-lists y').html(count);
      if (count > 0) {
        $('#combine-lists-pars').removeClass('hider');
      } else {
        $('#combine-lists-pars').addClass('hider');
      }
    });

    var lastChecked_checkbox_vzr;

    $('body').on('click', '.select-lists-comb-block .block-list-sel', function (e) {
      var that = $(this);
      var checkboxes = $('.select-lists-comb-block .block-list-sel input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_vzr) {
          lastChecked_checkbox_vzr = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox_vzr.checked = true;
        } else {
          lastChecked_checkbox_vzr.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_vzr);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_vzr.checked);
        lastChecked_checkbox_vzr = $('.select-lists-comb-block .block-list-sel input[type="checkbox"]')[start];
      }
    });

    $('body').on('mouseenter', '#get-my-spam-texts', function () {
      var data = get_tmp_text();
      $('.block-history-text-dis .block-hist-text').remove();
      if (data.type) {
        data = data.data.reversedCopy();
        data.forEach((e) => {
          var f = e;
          e = encodeURIComponent(e);
          for (var i = 0; i < 5000; i++) {
            e = e.replace('%0A', ' ');
          }
          e = decodeURIComponent(e);
          if (e.substr(e.length - 1, e.length) == ' ') e = e.substr(0, e.length - 1);
          if (e.length > 50) {
            var text = `${e.substr(0, 50)}...`;
          } else {
            var text = e;
          }
          var html = `<div class="block-hist-text"><span>${text}</span><div tooltip="${translater(translate.noty.other.copy_btn)}" class="copy-hist-text-block"><i data="${Buffer.from(f).toString('base64')}" class="fa fa-copy copy-hist-text"></i></div></div>`
          $('.block-history-text-dis').append(html);
        })
      }
      update_tooltips()
      $('.block-history-text-dis').addClass('active');
    });

    $('body').on('mouseenter', '#get-my-spam-texts-autoanswer', function () {
      var data = get_tmp_text_autoanswer();
      $('.block-history-text-dis-autoanswer .block-hist-text').remove();
      if (data.type) {
        data = data.data.reversedCopy();
        data.forEach((e) => {
          var f = e;
          e = encodeURIComponent(e);
          for (var i = 0; i < 5000; i++) {
            e = e.replace('%0A', ' ');
          }
          e = decodeURIComponent(e);
          if (e.substr(e.length - 1, e.length) == ' ') e = e.substr(0, e.length - 1);
          if (e.length > 50) {
            var text = `${e.substr(0, 50)}...`;
          } else {
            var text = e;
          }
          var html = `<div class="block-hist-text"><span>${text}</span><div tooltip="${translater(translate.noty.other.copy_btn)}" class="copy-hist-text-block"><i data="${Buffer.from(f).toString('base64')}" class="fa fa-copy copy-hist-text"></i></div></div>`
          $('.block-history-text-dis-autoanswer').append(html);
        })
      }
      update_tooltips()
      $('.block-history-text-dis-autoanswer').addClass('active');
    });

    $('body').on('mouseleave', '#get-my-spam-texts', function () {
      setTimeout(() => {
        if (!mouse_o_h_b) $('.block-history-text-dis').removeClass('active');
      }, 200);
    });

    $('body').on('mouseleave', '#get-my-spam-texts-autoanswer', function () {
      setTimeout(() => {
        if (!mouse_o_h_b_autoanswer) $('.block-history-text-dis-autoanswer').removeClass('active');
      }, 200);
    });

    $('body').on('mouseleave', '#get-my-spam-texts-channels', function () {
      setTimeout(() => {
        if (!mouse_o_h_b_channels) $('.block-history-text-dis-channels').removeClass('active');
      }, 200);
    });

    function get_spam(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        if (!store.has('spam')) return fin({ type: false });
        if (fat_spam) {
          var spam = fat_spam;
          if (spam.length <= 0) return fin({ type: false });
          var check = false;
          spam.forEach((e, i, a) => {
            if (e.id == id) {
              check = true;
              return fin({ type: true, data: e });
            }
            if (!check && i == a.length - 1) return fin({ type: false });
          });
        } else {
          var spam = store.get('spam');
          fat_spam = spam;
          setTimeout(() => {
            fat_spam = false;
          }, 10 * 1000);
          if (spam.length <= 0) return fin({ type: false });
          var check = false;
          spam.forEach((e, i, a) => {
            if (e.id == id) {
              check = true;
              return fin({ type: true, data: e });
            }
            if (!check && i == a.length - 1) return fin({ type: false });
          });
        }
      });
    }

    $('body').on('change', '#from-secs-delay', function () {
      update_tmp('from_secs_delay', $('#from-secs-delay').val());
    });

    $('body').on('change', '#to-secs-delay', function () {
      update_tmp('to_secs_delay', $('#to-secs-delay').val());
    });

    $('body').on('change', '#enable-spoiler-files-autoanswer', function () {
      update_tmp('enable-spoiler-files-autoanswer', $(this).prop('checked'));
    });

    $('body').on('change', '#enable-spoiler-files-channels', function () {
      update_tmp('enable-spoiler-files-channels', $(this).prop('checked'));
    });

    $('body').on('change', '#enable-spoiler-files', function () {
      update_tmp('enable-spoiler-files', $(this).prop('checked'));
    });

    function exit_from_server(id, token) {
      return new Promise(fin => {
        var properties = {
          "os": "Windows",
          "browser": "Chrome",
          "device": "",
          "system_locale": "ru-RU",
          "browser_user_agent": window.MyUserAgent,
          "browser_version": window.MyBrowserVersion,
          "os_version": "10",
          "referrer": "",
          "referring_domain": "",
          "referrer_current": "",
          "referring_domain_current": "",
          "release_channel": "stable",
          "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
          "client_event_source": null
        }
        var params = {
          url: `https://discord.com/api/v9/users/@me/guilds/${id}`,
          method: 'DELETE',
          headers: {
            'authorization': token,
            //'accept-language': 'ru',
            //  'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9',
            //  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
            'user-agent': properties['browser_user_agent'],
            'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
          },
          json: {
            lurking: false
          }
        }
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          console.log(err, response, body)
          fin()
        })
      })
    }

    $('body').on('change', '#exit-from-server-spam-channels', function () {
      update_tmp('exit-from-server-spam-channels', $(this).prop('checked'));
    })

    async function exiter_from_servers(invite, accounts) {
      var tokens = [];
      accounts.forEach(async (e, ind, arr) => {
        var tmp_acc_data = get_account(e);
        var data = await loginer_acc_api(tmp_acc_data.login, tmp_acc_data.pass, tmp_acc_data.rucaptcha);
        tokens.push(data.token);
        if (ind == arr.length - 1) {
          var guilds = await get_guildid_from_invite(invite, tokens[0]);
          tokens.forEach(z => {
            if (typeof guilds.id != 'string') {
              guilds.id.forEach((id, index) => {
                setTimeout(() => {
                  exit_from_server(id, z)
                }, 250 * index);
              })
            } else {
              setTimeout(() => {
                exit_from_server(guilds.id, z)
              }, 250);
            }
          })
        }
      })
    }

    $('body').on('click', '.btn-start-spam', function () {
      var btn = $(this);
      if ($(this).hasClass('waiting')) return console.log('234');
      var pars_id = $('#select-pars-list').val();
      var accounts = $('#select-account').val();
      console.log('234');
      var send_as_spoiler = false;
      if (type_spamming == 'messages') {
        var type = 1;
        var text = replace_text_n($('#text-to-message-users')[0].emojioneArea.getText());
        if (!text || text == '') return noty('error', translater(translate.noty.dis.emped_msg));
        if (text.length > 5000) return noty('error', translater(translate.noty.dis.max_count_msg));
        last_files_for_spam = false;
      } else {
        var text = replace_text_n($('#text-to-message-users-file')[0].emojioneArea.getText());
        var type = 2;
        if (!last_files_for_spam || last_files_for_spam.length < 1) return noty('error', translater(translate.noty.dis.emped_file));
        if (text.length > 5000) return noty('error', translater(translate.noty.dis.max_count_comment));
        send_as_spoiler = $('#enable-spoiler-files').prop('checked');
      }
      console.log('234');
      if (last_type_to_spam == 0) if (!pars_id || pars_id == '') return noty('error', translater(translate.noty.dis.emped_list_u));
      if (!accounts || accounts.length <= 0) return noty('error', translater(translate.noty.dis.emped_accounts));
      check_finish_spam = false;
      check_start_spam = true;
      text = n_emoji.unemojify(text);
      var add_black = $('#add-black-list').val();
      if (add_black == 1) {
        add_black = true;
      } else {
        add_black = false;
      }
      console.log('234');
      var change = $('#auto-change-accs-checkbox').prop('checked');
      var change_accounts = false;
      var count_success_message_change = false;
      var turn = false;
      if (change) {
        if ($('#count-of-success-messages-change').val() == '') return noty('error', translater(translate.noty.other.dont_set_send_mess));
        if (parseInt($('#count-of-success-messages-change').val()) < 1) return noty('error', translater(translate.noty.other.min_count_send_mess));
        if (parseInt($('#count-of-success-messages-change').val()) > 500) return noty('error', translater(translate.noty.other.max_count_send_mess));
        count_success_message_change = parseInt($('#count-of-success-messages-change').val());
        change_accounts = $('#select-account-change').val();
        if (!change_accounts || change_accounts.length < 1) return noty('error', translater(translate.noty.other.dont_send_change_accs));
        turn = $('#auto-turn-accs-checkbox').prop('checked');
      }
      var delay = {
        from: 5,
        to: 10
      };
      console.log('234');
      if ($('#delay-messages-checkbox').prop('checked')) {
        var from = $('#from-secs-delay').val();
        var to = $('#to-secs-delay').val();
        if (!from || from == '' || !to || to == '') return noty('error', translater(translate.noty.other.dont_set_delay_spam));
        if (parseInt(from) < 0) return noty('error', translater(translate.noty.other.min_delay_spam));
        if (parseInt(from) > parseInt(to)) return noty('error', translater(translate.noty.other.wrong_delay_spam));
        from = parseInt(from);
        to = parseInt(to);
        delay = {
          from: from,
          to: to
        }
      }
      console.log('234');
      var autoStop;
      if ($('#auto-stop-dis').prop('checked')) {
        autoStop = parseInt($('#limit-auto-stop-dis').val());
        if (isNaN(autoStop)) return noty('error', translater(translate.noty.other.limit_auto_stop_wrong))
        if (autoStop < 1) return noty('error', translater(translate.noty.other.limit_auto_stop_small));
      }
      console.log('234');
      var add_friends = $('#add-to-friend-checkbox').prop('checked');
      var notys = false;
      var answer = false;
      if ($('#noty-of-msgs-checkbox').prop('checked')) {
        notys = {
          value: true,
          sound: $('#sound-noty-of-msgs-checkbox').prop('checked'),
          notend: $('#notend-noty-of-msgs-checkbox').prop('checked')
        }
      }
      console.log('234');
      var count_more_msg_to_user = 1;
      if ($('#more-message-to-user').prop('checked')) {
        count_more_msg_to_user = $('#count-of-more-message-to-user').val();
        if (count_more_msg_to_user == '') return noty('error', translater(translate.noty.other.dont_provide_count_of_more_msgs));
        count_more_msg_to_user = parseInt(count_more_msg_to_user);
        if (count_more_msg_to_user < 2) return noty('error', translater(translate.noty.other.little_count_of_more_msgs));
      }
      var deleteMessages = $('#check-delete-messages-dis').prop('checked');
      if (deleteMessages) {
        deleteMessages = parseInt($('#delete-messages-dis').val());
        if (isNaN(deleteMessages)) return noty('error', translater(translate.noty.other.wrong_delay_for_delete_message))
        if (deleteMessages <= 0) return noty('error', translater(translate.noty.other.to_small_delay_for_delete_message))
      }
      console.log('234');
      var exit_from_servers = $('#check-exit-from-servers-after-spam').prop('checked');
      var userCalls = $('#check-call-to-user').prop('checked');
      if ($('#autoanswer-check').prop('checked')) {
        var timeout_answer = $('#delay-autoanswer').val();
        if (!timeout_answer || timeout_answer == '') return noty('error', translater(translate.noty.other.dont_set_d_au_sp));
        timeout_answer = parseInt(timeout_answer);
        if (timeout_answer < 0) return noty('error', translater(translate.noty.other.min_d_au_sp));
        if (timeout_answer > 500) return noty('error', translater(translate.noty.other.max_d_au_sp));
        if ($('#answer-rules-enable').prop('checked')) {
          var rules = get_answer_rules();
          if (!rules || rules.length < 1) return noty('error', translater(translate.noty.other.dont_set_rules_for_scripts));
          answer = {
            timeout: timeout_answer,
            type: true,
            rules: rules
          };
        } else {
          var text_answer = false;
          if (!last_files_for_spam_answer || last_files_for_spam_answer.length < 1) {
            if (!$('#text-autoanswer').val() || $('#text-autoanswer').val() == '') return noty('error', translater(translate.noty.other.dont_sp_au_t_sp));
            if ($('#text-autoanswer').val().length < 1) return noty('error', translater(translate.noty.other.dont_sp_au_t_sp));
            if ($('#text-autoanswer').val().length > 5000) return noty('error', translater(translate.noty.other.max_l_t_au_sp));
            text_answer = $('#text-autoanswer').val();
            answer = {
              timeout: timeout_answer,
              type: true,
              text: text_answer,
              options: false
            };
          } else {
            if ($('#text-autoanswer').val() != '' && $('#text-autoanswer').val().length > 0) {
              if ($('#text-autoanswer').val().length > 5000) return noty('error', translater(translate.noty.other.max_l_t_au_sp));
              text_answer = $('#text-autoanswer').val();
            }
            if (!text_answer) text_answer = '';
            var send_as_spoiler_answer = false;
            send_as_spoiler_answer = $('#enable-spoiler-files-autoanswer').prop('checked');
            answer = {
              timeout: timeout_answer,
              type: true,
              text: text_answer,
              options: {
                files: last_files_for_spam_answer
              },
              send_as_spoiler: send_as_spoiler_answer
            };
          }
        }
      }
      console.log('234');
      var to_type, to_userid = false;
      if (last_type_to_spam == 1) {
        to_type = last_type_to_spam;
        if (!$('#userid-of-user-to-spam').val() || $('#userid-of-user-to-spam').val() == '') return noty('error', translater(translate.noty.other.dont_provid_user_id_sp));
        if ($('#userid-of-user-to-spam').val().length < 15 || $('#userid-of-user-to-spam').val().length > 20) return noty('error', translater(translate.noty.other.wrong_user_id_sp));
        to_userid = $('#userid-of-user-to-spam').val();
      }
      if (last_type_to_spam == 2) {
        to_type = last_type_to_spam;
        if (!last_account_friends[MD5(accounts)] || last_account_friends[MD5(accounts)].length < 1) return noty('error', translater(translate.noty.other.dont_find_friends_list));
      }
      console.log('234');
      create_spam_users(pars_id, accounts, text, type, last_files_for_spam, add_black, count_success_message_change, change_accounts, turn, delay, add_friends, notys, answer, send_as_spoiler, to_type, to_userid, count_more_msg_to_user).then(check => {
        console.log('234');
        if (!check.type) return noty('error', pop_error);
        push_dis_history();
        last_spam_id = check.id;
        if (autoStop) checkUnsuccessfulLogsSpam[last_spam_id] = autoStop;
        start_spam(check.data, accounts, last_files_for_spam, answer, userCalls, deleteMessages).then(async (data) => {
          console.log('234');
          if (!check_finish_spam) check_finish_spam = true;
          if (check_start_spam) check_start_spam = false;
          btn.removeClass('waiting');
          btn.html('START');
          emitter.emit('stop_spam', {
            id: check.id,
          });
          last_spam_id = false;
          setTimeout(() => {
            if (fat_black_list_users && fat_black_list_users.length > 0) store.set('black_list_users', fat_black_list_users);
            if (fat_add_log_spam && fat_add_log_spam.length > 0) store.set('spam_logs', fat_add_log_spam);
          }, 1000)
          if (data.type) {
            var count = last_spam_count_messages + NumberEnd(last_spam_count_messages, translater(translate.noty.number_end.msgs));
            noty('success', translater(translate.noty.dis.finish_dis, count), 10000);
            if (exit_from_servers) {
              var pars = await get_pars_list(pars_id);
              var invite = pars.data.invite;
              if (invite.indexOf('|') >= 0) {
                invite = invite.split('|');
                var tmp_invite = [];
                invite.forEach(e => {
                  if (tmp_invite.indexOf(e) < 0) tmp_invite.push(e);
                });
                invite = tmp_invite;
              }
              exiter_from_servers(invite, accounts)
            }
          } else {
            return noty('error', translater(translate.noty.other.err_dis, false, { err: data.err }), 10000);
          }
        });
      });
      console.log('234');
      btn.html('STOP');
      btn.addClass('waiting');
      last_spam_count_messages = 0;
      noty('warning', translater(translate.noty.dis.start_dis));
      open_pause_btn_spam();
    });

    $('body').on('change', '#file-input-for-channels', function () {
      setTimeout(() => {
        $('#file-input-for-channels').val('');
      }, 300);
      if (this.files.length > 1) {
        var files = this.files;
        last_files_for_spam_channels = [];
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var name = file.name;
          var path = file.path;
          var size = file.size;
          if (size < 8000000 && last_files_for_spam_channels.length < 10) {
            last_files_for_spam_channels.push({
              attachment: fs.readFileSync(path),
              name: name
            });
          }
        }
        if (last_files_for_spam_channels.length < 1) return noty('error', translater(translate.noty.dis.too_little_files));
        $('#add-files-to-channels-msg').html('');
        $('#add-files-to-channels-msg').addClass('loading');
        $('#add-files-to-channels-msg').css('opacity', 0);
        setTimeout(function () {
          $('#add-files-to-channels-msg').css('display', 'none');
          var name = `${last_files_for_spam_channels.length} ${NumberEnd(last_files_for_spam_channels.length, translater(translate.noty.dis.number_end_files))}`;
          $('#type-of-upload-file-channels .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-channels" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-channels').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-channels').css('opacity', 1);
          }, 50);
        }, 450);
      } else {
        var file = this.files[0];
        var size = file.size;
        if (size > 8000000) return noty('error', translater(translate.noty.dis.too_file));
        if (typeof file == 'undefined') return noty('error', translater(translate.noty.dis.wrong_type_file));
        var file_type = file.type;
        last_type_of_file_for_spam_channels = file_type;
        var name = file.name;
        var path = file.path;
        last_files_for_spam_channels = [{
          attachment: fs.readFileSync(path),
          name: name
        }];
        $('#add-files-to-channels-msg').html('');
        $('#add-files-to-channels-msg').addClass('loading');
        $('#add-files-to-channels-msg').css('opacity', 0);
        setTimeout(function () {
          $('#add-files-to-channels-msg').css('display', 'none');
          var i = '';
          if (file_type.indexOf('text') >= 0) {
            i = 'fa-file-alt';
          } else if (file_type.indexOf('image') >= 0) {
            i = 'fa-image';
          } else if (file_type.indexOf('video') >= 0) {
            i = 'fa-file-video';
          } else if (file_type.indexOf('application') >= 0) {
            i = 'fa-file-contract';
          } else {
            i = 'fa-question';
          }
          $('#type-of-upload-file-channels .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-new-answer-message" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-channels').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-channels').css('opacity', 1);
          }, 50);
        }, 450);
      }
    })

    $('body').on('change', '#file-input-for-new-answer-message', function () {
      setTimeout(() => {
        $('#file-input-for-new-answer-message').val('');
      }, 300);
      if (this.files.length > 1) {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var name = file.name;
          var path = file.path;
          var size = file.size;
          if (size < 8000000 && files_data_for_new_answer_message.length < 10) {
            files_data_for_new_answer_message.push({
              path: path,
              name: name
            });
          }
        }
        if (files_data_for_new_answer_message.length < 1) return noty('error', translater(translate.noty.dis.too_little_files));
        $('#add-files-to-new-answer-message').html('');
        $('#add-files-to-new-answer-message').addClass('loading');
        $('#add-files-to-new-answer-message').css('opacity', 0);
        setTimeout(function () {
          $('#add-files-to-new-answer-message').css('display', 'none');
          var name = `${files_data_for_new_answer_message.length} ${NumberEnd(files_data_for_new_answer_message.length, translater(translate.noty.dis.number_end_files))}`;
          $('#type-of-upload-file-new-answer-message .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-new-answer-message" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-new-answer-message').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-new-answer-message').css('opacity', 1);
          }, 50);
        }, 450);
      } else {
        var file = this.files[0];
        var size = file.size;
        if (size > 8000000) return noty('error', translater(translate.noty.dis.too_file));
        if (typeof file == 'undefined') return noty('error', translater(translate.noty.dis.wrong_type_file));
        var file_type = file.type;
        var name = file.name;
        var path = file.path;
        files_data_for_new_answer_message = [{
          path: path,
          name: name,
          type: file_type
        }];
        $('#add-files-to-new-answer-message').html('');
        $('#add-files-to-new-answer-message').addClass('loading');
        $('#add-files-to-new-answer-message').css('opacity', 0);
        setTimeout(function () {
          $('#add-files-to-new-answer-message').css('display', 'none');
          var i = '';
          if (file_type.indexOf('text') >= 0) {
            i = 'fa-file-alt';
          } else if (file_type.indexOf('image') >= 0) {
            i = 'fa-image';
          } else if (file_type.indexOf('video') >= 0) {
            i = 'fa-file-video';
          } else if (file_type.indexOf('application') >= 0) {
            i = 'fa-file-contract';
          } else {
            i = 'fa-question';
          }
          $('#type-of-upload-file-new-answer-message .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-new-answer-message" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-new-answer-message').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-new-answer-message').css('opacity', 1);
          }, 50);
        }, 450);
      }
    })

    $('body').on('change', '#file-input-for-autoanswer', function (e) {
      setTimeout(() => {
        $('#file-input-for-autoanswer').val('');
      }, 300);
      if (this.files.length > 1) {
        var files = this.files;
        last_files_for_spam_answer = [];
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var name = file.name;
          var path = file.path;
          var size = file.size;
          if (size < 8000000 && last_files_for_spam_answer.length < 10) {
            last_files_for_spam_answer.push({
              attachment: fs.readFileSync(path),
              name: name
            });
          }
        }
        if (last_files_for_spam_answer.length < 1) return noty('error', translater(translate.noty.dis.too_little_files));
        $('#add-files-to-answer-msg').html('');
        $('#add-files-to-answer-msg').addClass('loading');
        $('#add-files-to-answer-msg').css('opacity', 0);
        setTimeout(function () {
          $('#add-files-to-answer-msg').css('display', 'none');
          var name = `${last_files_for_spam_answer.length} ${NumberEnd(last_files_for_spam_answer.length, translater(translate.noty.dis.number_end_files))}`;
          $('#type-of-upload-file-answer .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-answer" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-answer').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-answer').css('opacity', 1);
          }, 50);
        }, 450);
      } else {
        var file = this.files[0];
        var size = file.size;
        if (size > 8000000) return noty('error', translater(translate.noty.dis.too_file));
        if (typeof file == 'undefined') return noty('error', translater(translate.noty.dis.wrong_type_file));
        var file_type = file.type;
        last_type_of_file_for_spam_answer = file_type;
        var name = file.name;
        var path = file.path;
        last_files_for_spam_answer = [{
          attachment: fs.readFileSync(path),
          name: name
        }];
        $('#add-files-to-answer-msg').html('');
        $('#add-files-to-answer-msg').addClass('loading');
        $('#add-files-to-answer-msg').css('opacity', 0);
        setTimeout(function () {
          $('#add-files-to-answer-msg').css('display', 'none');
          var i = '';
          if (file_type.indexOf('text') >= 0) {
            i = 'fa-file-alt';
          } else if (file_type.indexOf('image') >= 0) {
            i = 'fa-image';
          } else if (file_type.indexOf('video') >= 0) {
            i = 'fa-file-video';
          } else if (file_type.indexOf('application') >= 0) {
            i = 'fa-file-contract';
          } else {
            i = 'fa-question';
          }
          $('#type-of-upload-file-answer .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam-answer" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('#type-of-upload-file-answer').css('display', 'block');
          setTimeout(function () {
            $('#type-of-upload-file-answer').css('opacity', 1);
          }, 50);
        }, 450);
      }
    });

    $('body').on('change', '.radio-from-block-for-hover', function () {
      var val = $(this).prop('checked');
      var from = $(this).attr('from');
      type_spamming = $(this).attr('types');
      if (from == 'type-spamming') {
        var that = $('.block-type-spamming');
        that.addClass('disable');
        that.css('opacity', '0');
        that.css('height', '0px');
        that.css('margin', '0');
        setTimeout(function () {
          that.css('display', 'none');
        }, 400);
      }
      if (type_spamming == 'files') {
        $('.input-to-spam-message').css('opacity', 0);
        $('.input-to-spam-message').css('height', $('.input-to-spam-message').css('height'))
        setTimeout(() => {
          $('.input-to-spam-message').css('height', '65px');
          setTimeout(function () {
            $('.input-to-spam-message-with-files').css('height', '');
            var h = $('.input-to-spam-message-with-files').height() + 30;
            $('.input-to-spam-message-with-files').css('height', '80px');
            $('.input-to-spam-message').css('display', 'none');
            $('.input-to-spam-message-with-files').css('display', 'block');
            setTimeout(function () {
              $('.input-to-spam-message-with-files').css('opacity', '1');
              $('.input-to-spam-message-with-files').css('height', `${h}px`);
            }, 10);
          }, 175);
        }, 10)
        if (!last_files_for_spam || last_files_for_spam.length < 1) $('.remove-file-block-spam').click();
      } else if (type_spamming == 'messages') {
        $('.input-to-spam-message-with-files').css('opacity', 0);
        $('.input-to-spam-message-with-files').css('height', $('.input-to-spam-message-with-files').css('height'))
        setTimeout(() => {
          $('.input-to-spam-message-with-files').css('height', '80px');
          setTimeout(function () {
            $('.input-to-spam-message').css('height', '');
            var h = $('.input-to-spam-message').height() + 30;
            $('.input-to-spam-message').css('height', '65px');
            $('.input-to-spam-message-with-files').css('display', 'none');
            $('.input-to-spam-message').css('display', 'block');
            setTimeout(function () {
              $('.input-to-spam-message').css('opacity', '1');
              $('.input-to-spam-message').css('height', `${h}px`);
            }, 10);
          }, 175);
        }, 10)
      }
    });

    var type_spamming = 'messages';
    var type_spamming_channels = 'text';

    var delayd = (time = 1000) => {
      return new Promise(fin => {
        setTimeout(fin, time)
      })
    }

    $('body').on('change', '.radio-from-block-for-hover-channels', async function () {
      var val = $(this).prop('checked');
      var from = $(this).attr('from');
      type_spamming_channels = $(this).attr('types');
      console.log('type_spamming_channels', type_spamming_channels)
      $('.invite-to-server-dis-channels').each(function () {
        if ($(this).attr('type') != type_spamming_channels) $(this).removeClass('active');
      })
      await delayd(100);
      $(`.invite-to-server-dis-channels[type="${type_spamming_channels}"]`).addClass('active');
      $('#close-btn-invite-dis-channels').addClass('hide-close-file-btn');
      $('#close-btn-invite-dis-channels-voice').addClass('hide-close-file-btn');
      $('#count-of-pars-dis-channels').removeClass('active');
      $('#count-of-pars-dis-channels-voice').removeClass('active');
      if (type_spamming_channels == 'text') {
        $('#before-block-verify-server').css('margin-top', '-35px');
        $('#join-to-voice-channels-block').removeClass('hider-block');
        $('#delay-messages-channels-block').removeClass('hider-block');
        $('#delete-messages-dis-channels-block').removeClass('hider-block');
        $('#mass-tagging-users-block').removeClass('hider-block');
        $('#delay-spam-block-channels').removeClass('hider-block');
        $('.input-to-spam-message-channels').removeClass('hider-block');
        $('#message-limit-dis-channels-block').removeClass('hider-block');
        if (lastParsChannelsData['text']) {
          var guild = lastParsChannelsData['text']['guild'];
          var guild_avatar = guild.avatar;
          var invite = guild.invite;
          var guild_name = guild.name;
          var btn = $('.pars-channels-from-server')
          btn.css('opacity', 0);
          btn.removeClass('pars-channels-from-server');
          btn.addClass('edit-pars-channels-from-server');
          $('#block-name-server-dis-channels img').attr('src', guild_avatar);
          $('#block-name-server-dis-channels span').html(`<vgr class="copy-invite-server-pars-channels" data-copy="https://discord.gg/${get_invite_code(invite)}" invite="https://discord.gg/${get_invite_code(invite)}" tooltip="https://discord.gg/${get_invite_code(invite)}">${translater(translate.noty.other.server)}: ${guild_name}</vgr>`);
          update_tooltips()
          $('#block-name-server-dis-channels').addClass('active');
          $('#block-invite-dis-channels').addClass('hider');
          $('#close-btn-invite-dis-channels').removeClass('hide-close-file-btn');
          $('#count-of-pars-dis-channels').html(lastParsChannelsData['text']['channels'].length + NumberEnd(lastParsChannelsData['text']['channels'].length, translater(translate.noty.number_end.channels)));
          $('#count-of-pars-dis-channels').addClass('active');
          setTimeout(async () => {
            btn.html(translater(translate.noty.other.edit_l_c));
            await delay(50)
            btn.css('opacity', '');
          }, 150);
          update_send_msgs_count_channels();
        }
      } else {
        $('#before-block-verify-server').css('margin-top', 0);
        $('#join-to-voice-channels-block').addClass('hider-block');
        $('#delay-messages-channels-block').addClass('hider-block');
        $('#delete-messages-dis-channels-block').addClass('hider-block');
        if ($('#mass-tagging-users-block').hasClass('active')) $('#mass-tagging-users-block').addClass('hider-block');
        $('#delay-spam-block-channels').addClass('hider-block');
        $('.input-to-spam-message-channels').addClass('hider-block');
        $('#message-limit-dis-channels-block').addClass('hider-block');
        if (lastParsChannelsData['voice']) {
          var guild = lastParsChannelsData['voice']['guild'];
          var guild_avatar = guild.avatar;
          var invite = guild.invite;
          var guild_name = guild.name;
          var btn = $('.pars-channels-from-server-voice');
          btn.css('opacity', 0);
          btn.addClass('edit-pars-channels-from-server');
          $('#block-name-server-dis-channels-voice img').attr('src', guild_avatar);
          $('#block-name-server-dis-channels-voice span').html(`<vgr class="copy-invite-server-pars-channels" data-copy="https://discord.gg/${get_invite_code(invite)}" invite="https://discord.gg/${get_invite_code(invite)}" tooltip="https://discord.gg/${get_invite_code(invite)}">${translater(translate.noty.other.server)}: ${guild_name}</vgr>`);
          update_tooltips()
          $('#block-name-server-dis-channels-voice').addClass('active');
          $('#block-invite-dis-channels-voice').addClass('hider');
          $('#close-btn-invite-dis-channels-voice').removeClass('hide-close-file-btn');
          $('#count-of-pars-dis-channels-voice').html(lastParsChannelsData['voice']['channels'].length + NumberEnd(lastParsChannelsData['voice']['channels'].length, translater(translate.noty.number_end.channels)));
          $('#count-of-pars-dis-channels-voice').addClass('active');
          setTimeout(async () => {
            btn.html(translater(translate.noty.other.edit_l_c));
            await delay(50)
            btn.css('opacity', '');
          }, 150);
          update_send_msgs_count_channels();
        }
      }
    });

    function stringToArrayMessage(s) {
      for (var i = 0; i < 1000; i++) {
        s = s.replace(' ⃟', '╮');
      }
      logntiwpoer(s);
      const retVal = [];
      for (const ch of s) {
        if (ch == '╮') {
          retVal.push(' ⃟');
        } else {
          retVal.push(ch);
        }
      }
      return retVal;
    }

    function stringToArray(s) {
      const retVal = [];
      for (const ch of s) {
        retVal.push(ch);
      }
      return retVal;
    }

    $('body').on('keyup', '#text-to-message-users', function () {
      var val = $(this).val();
      if (val == '' || !val) {
        $('#count-random-of-message').text('0');
        return false;
      }
      var regex = new RegExp(/\|/g);
      if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
        if (substr_count(val, '{') == 1) {
          var count = val.match(regex).length;
          if (count <= 0) return false;
          count++;
          if (count == 1) count = 2;
          $('#count-random-of-message').text(count);
        } else {
          var count = val.match(regex).length;
          count = count * count;
          if (count == 1) count = 2;
          $('#count-random-of-message').text(count);
        }
      } else {
        $('#count-random-of-message').text(0);
      }
    });

    var check_finish_spam = false;
    var check_start_spam = false;
    var last_spam_id;

    function get_last_id_spam() {
      return last_spam_id;
    }

    $('body').on('click', '.btn-start-spam.waiting', function () {
      check_finish_spam = true;
      check_start_spam = false;
      var id = get_last_id_spam();
      emitter.emit('stop_spam', {
        id: id,
      });
      var btn = $(this);
      btn.removeClass('waiting');
      btn.html('START');
      close_pause_btn_spam();
    });

    function replace_text_n($text) {
      $text = encodeURIComponent($text);
      for (var i = 0; i < 1000; i++) {
        $text = $text.replace('%0A', "\n");
      }
      return decodeURIComponent($text);
    }

    var last_spam_count_messages = 0;

    var last_spam_count_messages_channels = 0;

    var last_type_to_spam = 0;
    var last_type_pars = 0;

    function update_count_success_message_channels() {
      return false;
      var block = $('#count-spam-message-channels');
      if (check_start_spam_channels) {
        block.removeClass('active');
        return false;
      }
      if (!block.hasClass('active')) block.addClass('active');
      var count = last_spam_count_messages_channels + NumberEnd(last_spam_count_messages_channels, translater(translate.noty.number_end.msgs));
      block.html(count);
    }

    function update_count_success_message() {
      var block = $('#count-spam-message');
      if (!check_start_spam) {
        block.removeClass('active');
        return false;
      }
      if (!block.hasClass('active')) block.addClass('active');
      var count = last_spam_count_messages + NumberEnd(last_spam_count_messages, translater(translate.noty.number_end.msgs));
      block.html(count);
    }

    setInterval(() => {
      update_count_success_message();
      //update_count_success_message_channels();
    }, 2500);

    function push_dis_history() {
      if (fat_spam) {
        var spam = fat_spam;
      } else {
        var spam = store.get('spam');
        fat_spam = spam;
      }
      //spam = spam.reverse();
      if (!spam || spam.length <= 0) return false;
      var table = $('#table-dis');
      var num = 1;
      var now = Math.round(new Date().getTime() / 1000);
      if ($('.block-spam-hist').css('display') == 'block') {
        $('.block-spam-hist').css('opacity', '0');
        setTimeout(() => {
          table.find('tbody').html('');
          setTimeout(() => {
            $('.block-spam-hist').css('opacity', '1');
          }, 50);
          spam.forEach((e, ind, arr) => {
            var id = e.id;
            if (e.type == 1) {
              var type = translater(translate.noty.other.type_spam_text);
            } else {
              var type = translater(translate.noty.other.type_spam_files);
            }
            var full_date = get_time_to_history(e.time);
            var date = get_time_from_unix(now - Math.round(e.time / 1000), Math.round(e.time / 1000));
            var html = `<tr spam-id="${id}">
                       <td>${num}</td>
                       <td></td>
                       <td>${type}</td>
                       <td style="padding-left:0;"><span tooltip="${full_date}" flow="left" class="history-pars-date">${date}</span></td>
                       <td><i class="fa fa-search i-gg open-logs-from-spam waves-effect" spam-id="${id}"></i></td>
                       <td style="padding-left: 0;"><span><i class="fa fa-pars-trash btn-delete-spam-list i-gg waves-effect" spam-id="${id}"></i></span></td>
                     </tr>`;
            table.find('tbody').prepend(html);
            num++;
          });
          update_tooltips();
        }, 200);
      } else {
        $('.block-spam-hist').css('display', 'block');
        setTimeout(() => {
          setTimeout(() => {
            $('.block-spam-hist').css('opacity', '1');
          }, 50);
          spam.forEach((e, ind, arr) => {
            var id = e.id;
            if (e.type == 1) {
              var type = translater(translate.noty.other.type_spam_text);
            } else {
              var type = translater(translate.noty.other.type_spam_files);
            }
            var full_date = get_time_to_history(e.time);
            var date = get_time_from_unix(now - Math.round(e.time / 1000), Math.round(e.time / 1000));
            var html = `<tr spam-id="${id}">
                       <td>${num}</td>
                       <td></td>
                       <td>${type}</td>
                       <td style="padding-left:0;"><span tooltip="${full_date}" flow="left" class="history-pars-date">${date}</span></td>
                       <td><i class="fa fa-search i-gg open-logs-from-spam waves-effect" spam-id="${id}"></i></td>
                       <td style="padding-left: 0;"><span><i class="fa fa-pars-trash btn-delete-spam-list i-gg waves-effect" spam-id="${id}"></i></span></td>
                     </tr>`;
            table.find('tbody').prepend(html);
            num++;
          });
          update_tooltips();
        }, 50);
      }
      update_tooltips()
    }

    function update_count_logs(count, messages) {
      var modal = $('#modal-logs-spam');
      var counts = NumberEnd(count, translater(translate.noty.number_end.logs));
      var last = parseInt($('.count-logs span').text().substr(7, $('.count-logs span').text().indexOf('ло') - 7));
      modal.find('.count-logs span').html(translater(translate.noty.other.total) + ': ' + count + counts);
      var last_m = parseInt($('.count-logs v').text().substr(1, $('.count-logs v').text().indexOf('у')));
      var counts_m = NumberEnd(messages, translater(translate.noty.number_end.success_logs));
      modal.find('.count-logs v').html('(' + messages + counts_m + ')');
    }

    function update_count_logs_channels(count, messages) {
      var modal = $('#modal-logs-spam-channels');
      var counts = NumberEnd(count, translater(translate.noty.number_end.logs));
      var last = parseInt($('.count-logs-channels span').text().substr(7, $('.count-logs-channels span').text().indexOf('ло') - 7));
      $({ Counter: last }).animate({ Counter: count }, {
        duration: 800,
        easing: 'swing',
        step: function (e) {
          modal.find('.count-logs-channels span').html(translater(translate.noty.other.total) + ': ' + Math.ceil(e) + counts);
        }
      });
      var last_m = parseInt($('.count-logs-channels v').text().substr(1, $('.count-logs-channels v').text().indexOf('у')));
      var counts_m = NumberEnd(messages, translater(translate.noty.number_end.success_logs));
      $({ Counter: last_m }).animate({ Counter: messages }, {
        duration: 800,
        easing: 'swing',
        step: function (e) {
          modal.find('.count-logs-channels v').html('(' + Math.ceil(e) + counts_m + ')');
        }
      });
    }

    var fat_add_log_spam = store.get('spam_logs');
    var count_fat_add_log_spam = 0;
    function add_log_spam(type, user, avatar, id, timeout = false) {
      //logntiwpoer(fat_add_log_spam);
      if (!fat_add_log_spam) fat_add_log_spam = [];
      var logs = fat_add_log_spam;
      var log = {
        time: new Date().getTime(),
        user: user,
        avatar: avatar,
        type: type,
        timeout: timeout
      };
      logntiwpoer(log);
      var new_p = [];
      var check = false;
      logs.forEach((e) => {
        if (e.id == id) check = true;
      })
      var check_new = false;
      if (!check) {
        check_new = true;
        logs.push({
          id: id,
          logs: [],
          time: new Date().getTime()
        });
      }
      logs.forEach((e, ind, arr) => {
        if (e.id == id) {
          e.logs.push(log);
          new_p.push(e);
        } else {
          new_p.push(e);
        }
      });
      fat_add_log_spam = new_p;
      count_fat_add_log_spam++;
      if (count_fat_add_log_spam > 15 || check_new) {
        count_fat_add_log_spam = 0;
        store.set('spam_logs', fat_add_log_spam);
      }
      emitter.emit('add_log_spam', {
        id: id,
        log: log
      });
    }

    function get_list_logs(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        logntiwpoer(fat_add_log_spam);
        if (fat_add_log_spam) {
          var all = fat_add_log_spam;
          var check = false;
          all.forEach((e, ind, arr) => {
            if (e.id == id) {
              check = true;
              return fin({ type: true, data: e, all: all });
            }
            if (ind == arr.length - 1 && !check) {
              var data = {
                id: id,
                time: new Date().getTime(),
                logs: []
              };
              all.push(data);
              store.set('spam_logs', all);
              return fin({ type: true, data: data, all: all });
            }
          });
        } else {
          get_spam(id).then((check) => {
            if (!check.type) return fin({ type: false });
            var all = store.get('spam_logs');
            if (!all || all.length <= 0) {
              var all = [];
              var data = {
                id: id,
                time: new Date().getTime(),
                logs: []
              };
              all.push(data);
              store.set('spam_logs', all);
              return fin({ type: true, data: data, all: all });
            } else {
              var check = false;
              all.forEach((e, ind, arr) => {
                if (e.id == id) {
                  check = true;
                  return fin({ type: true, data: e, all: all });
                }
                if (ind == arr.length - 1 && !check) {
                  var data = {
                    id: id,
                    time: new Date().getTime(),
                    logs: []
                  };
                  all.push(data);
                  store.set('spam_logs', all);
                  return fin({ type: true, data: data, all: all });
                }
              });
            }
          });
        }
      });
    }

    $('body').on('click', '.list-logs-spam .name', function () {
      var username = $(this).html();
      copyToClipboard(username);
      noty('success', translater(translate.noty.other.copied), 300);
    });
    var checkUnsuccessfulLogsSpam = {};
    var dataUnsuccessfulLogsSpam = {};

    emitter.on('add_log_spam', (data) => {
      var id = data.id;
      var log = data.log;
      var modal = $('#modal-logs-spam');
      var list = modal.find('.list-logs-spam');
      if (modal.attr('spam-id') != id) return false;
      var count = parseInt($('.count-logs span').text().substr(7, $('.count-logs span').text().indexOf('ло') - 7)) + 1;
      fat_add_log_spam.forEach((e) => {
        if (e.id == id) {
          count = e.logs.length;
        }
      });
      setTimeout(() => {
        get_count_messages_from_spam(id).then((success) => {
          if (!success.type) return false;
          update_count_logs(count, success.count);
        });
      }, 500);
      if (log.type != 'timeout') {
        if (log.avatar) {
          var avatar = log.avatar;
          if (avatar.indexOf('assets') >= 0 || avatar.indexOf('null.png') >= 0) avatar = consts.app_data.undefind_avatar;
        } else {
          var avatar = consts.app_data.undefind_avatar;
        }
        var username = log.user;
        var type = log.type;
        if (type == 'send') {
          var v = `<div class="log">${translater(translate.noty.logs.success_send)}</div><i class="fa fa-check-circle success"></i>`;
        } else if (type == 'not_found') {
          var v = `<div class="log">${translater(translate.noty.logs.user_not_found)}</div><i class="fa fa-times-circle error"></i>`;
        } else {
          var v = `<div class="log">${translater(translate.noty.logs.dont_send)}</div><i class="fa fa-times-circle error"></i>`;
        }
        if (type != 'send') {
          if (!dataUnsuccessfulLogsSpam[id]) dataUnsuccessfulLogsSpam[id] = 0;
          dataUnsuccessfulLogsSpam[id]++;
          if (checkUnsuccessfulLogsSpam[id] && dataUnsuccessfulLogsSpam[id] >= checkUnsuccessfulLogsSpam[id]) {
            emitter.emit('stop_spam', {
              id
            })
          }
        }
        var html = `<div class="log-spam" style="margin-top: -65px;opacity:0;transition: .15s;">
                            <div class="avatar">
                            ` + /* <img src="${avatar}"> */  `
                            </div>
                            <div class="name" title="${username}">${username}</div>
                            ${v}
                          </div>`;
        list.prepend(html);
        var new_log = $('#modal-logs-spam .modal-body .list-logs-spam .log-spam:first-child');
      } else if (log.type == 'timeout') {
        if (log.timeout) {
          var html = `<div class="timeout" style="margin-top: -35px;opacity:0;">Timeout (${log.timeout})</div>`;
        } else {
          var html = `<div class="timeout" style="margin-top: -35px;opacity:0;">Timeout (5 ${translater(translate.noty.logs.min)})</div>`;
        }
        list.prepend(html);
        var new_log = $('#modal-logs-spam .modal-body .list-logs-spam .timeout:first-child');
      }
      setTimeout(() => {
        new_log.css('margin-top', '');
      }, 100);
      setTimeout(() => {
        new_log.css('opacity', '');
      }, 100);
    });

    function get_count_messages_from_spam(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        get_list_logs(id).then((logs) => {
          if (!logs.type) return fin({ type: false });
          logs = logs.data.logs;
          var m = 0;
          logs.forEach((e, ind, arr) => {
            if (e.type == 'send') m++;
            if (ind == arr.length - 1) return fin({ type: true, count: m });
          });
        });
      });
    }

    function get_count_messages_from_spam_channels(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        get_list_logs_channels(id).then((logs) => {
          if (!logs.type) return fin({ type: false });
          logs = logs.data.logs;
          var m = 0;
          logs.forEach((e, ind, arr) => {
            if (e.type == 'send') m++;
            if (ind == arr.length - 1) return fin({ type: true, count: m });
          });
        });
      });
    }

    function update_count_random_message() {
      var val = $('#text-to-message-users')[0].emojioneArea.getText();
      if (val == '' || !val) {
        $('#count-random-of-message').text('0');
        return false;
      }
      var regex = new RegExp(/\|/g);
      if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
        if (substr_count(val, '{') == 1) {
          var count = val.match(regex).length;
          if (count <= 0) return false;
          count++;
          if (count == 1) count = 2;
          $('#count-random-of-message').text(count);
        } else {
          var count = val.match(regex).length;
          count = count * count;
          if (count == 1) count = 2;
          $('#count-random-of-message').text(count);
        }
      } else {
        $('#count-random-of-message').text(0);
      }
    }

    function update_count_random_message_new_answer_message() {
      var val = $('#text-new-answer-message')[0].emojioneArea.getText();
      if (val == '' || !val) {
        $('#count-random-of-new-answer-message').text('0');
        return false;
      }
      var regex = new RegExp(/\|/g);
      if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
        if (substr_count(val, '{') == 1) {
          var count = val.match(regex).length;
          if (count <= 0) return false;
          count++;
          if (count == 1) count = 2;
          $('#count-random-of-new-answer-message').text(count);
        } else {
          var count = val.match(regex).length;
          count = count * count;
          if (count == 1) count = 2;
          $('#count-random-of-new-answer-message').text(count);
        }
      } else {
        $('#count-random-of-new-answer-message').text(0);
      }
    }

    var last_account_friends = [];

    function update_count_random_message_autoanswer() {
      var val = $('#text-autoanswer')[0].emojioneArea.getText();
      if (val == '' || !val) {
        $('#count-random-of-message-autoanswer').text('0');
        return false;
      }
      var regex = new RegExp(/\|/g);
      if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
        if (substr_count(val, '{') == 1) {
          var count = val.match(regex).length;
          if (count <= 0) return false;
          count++;
          if (count == 1) count = 2;
          $('#count-random-of-message-autoanswer').text(count);
        } else {
          var count = val.match(regex).length;
          count = count * count;
          if (count == 1) count = 2;
          $('#count-random-of-message-autoanswer').text(count);
        }
      } else {
        $('#count-random-of-message-autoanswer').text(0);
      }
    }

    function update_count_random_message_f() {
      var val = $('#text-to-message-users-file')[0].emojioneArea.getText();
      if (val == '' || !val) {
        $('#count-random-of-message-f').text('0');
        return false;
      }
      var regex = new RegExp(/\|/g);
      if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
        if (substr_count(val, '{') == 1) {
          var count = val.match(regex).length;
          if (count <= 0) return false;
          count++;
          if (count == 1) count = 2;
          $('#count-random-of-message-f').text(count);
        } else {
          var count = val.match(regex).length;
          count = count * count;
          if (count == 1) count = 2;
          $('#count-random-of-message-f').text(count);
        }
      } else {
        $('#count-random-of-message-f').text(0);
      }
    }

    function update_count_random_message_channels() {
      var val = $('#text-to-message-channels')[0].emojioneArea.getText();
      if (val == '' || !val) {
        $('#count-random-of-message-channels').text('0');
        return false;
      }
      var regex = new RegExp(/\|/g);
      if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
        if (substr_count(val, '{') == 1) {
          var count = val.match(regex).length;
          if (count <= 0) return false;
          count++;
          if (count == 1) count = 2;
          $('#count-random-of-message-channels').text(count);
        } else {
          var count = val.match(regex).length;
          count = count * count;
          if (count == 1) count = 2;
          $('#count-random-of-message-channels').text(count);
        }
      } else {
        $('#count-random-of-message-channels').text(0);
      }
    }

    var check_pause_spam = false;

    $('body').on('click', '.btn-pause-spam', function () {
      if ($(this).hasClass('active')) return false;
      check_pause_spam = true;
      var btn = $(this);
      btn.addClass('active');
      btn.html('CONTINUE')
    });

    $('body').on('click', '.btn-pause-spam.active', function () {
      check_pause_spam = false;
      var btn = $(this);
      btn.removeClass('active');
      btn.html('PAUSE')
    });

    $('body').on('change', '#file-input-spam', function (e) {
      setTimeout(() => {
        $('#file-input-spam').val('');
      }, 300);
      if (this.files.length > 1) {
        var files = this.files;
        last_files_for_spam = [];
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var name = file.name;
          var path = file.path;
          var size = file.size;
          if (size < 8000000 && last_files_for_spam.length < 10) {
            last_files_for_spam.push({
              attachment: fs.readFileSync(path),
              name: name
            });
          }
        }
        if (last_files_for_spam.length < 1) return noty('error', translater(translate.noty.dis.too_little_files));
        $('label[for="file-input-spam"]').html('');
        $('label[for="file-input-spam"]').addClass('loading');
        $('label[for="file-input-spam"]').css('opacity', 0);
        setTimeout(function () {
          $('label[for="file-input-spam"]').css('display', 'none');
          var name = `${last_files_for_spam.length} ${NumberEnd(last_files_for_spam.length, translater(translate.noty.dis.number_end_files))}`;
          $('.type-of-upload-file .filename').html(`<div class="block-name"><i class="fa fa-file-contract"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('.type-of-upload-file').css('display', 'block');
          setTimeout(function () {
            $('.type-of-upload-file').css('opacity', 1);
          }, 50);
        }, 450);
      } else {
        var file = this.files[0];
        var size = file.size;
        if (size > 8000000) return noty('error', translater(translate.noty.dis.too_file));
        if (typeof file == 'undefined') return noty('error', translater(translate.noty.dis.wrong_type_file));
        var file_type = file.type;
        var name = file.name;
        var path = file.path;
        last_files_for_spam = [{
          attachment: fs.readFileSync(path),
          name: name
        }];
        last_type_of_file_for_spam = file_type;
        $('label[for="file-input-spam"]').html('');
        $('label[for="file-input-spam"]').addClass('loading');
        $('label[for="file-input-spam"]').css('opacity', 0);
        setTimeout(function () {
          $('label[for="file-input-spam"]').css('display', 'none');
          var i = '';
          if (file_type.indexOf('text') >= 0) {
            i = 'fa-file-alt';
          } else if (file_type.indexOf('image') >= 0) {
            i = 'fa-image';
          } else if (file_type.indexOf('video') >= 0) {
            i = 'fa-file-video';
          } else if (file_type.indexOf('application') >= 0) {
            i = 'fa-file-contract';
          } else {
            i = 'fa-question';
          }
          $('.type-of-upload-file .filename').html(`<div class="block-name" title="${name}"><i class="fa ${i}"></i>${name}</div><button type="button" class="close waves-effect remove-file-block-spam" style="border-radius: 50%;padding: 15px !important;margin-top: 0px !important;"></button>`);
          $('.type-of-upload-file').css('display', 'block');
          setTimeout(function () {
            $('.type-of-upload-file').css('opacity', 1);
          }, 50);
        }, 450);
      }
    });

    $('body').on('change', '#join-to-voice-channels', function () {
      update_tmp('join-to-voice-channels', $(this).prop('checked'));
    })

    var count_success_invite_accs = 0
    var check_stop_inviter = false;

    function send_ws_discord_client(client, data) {
      client.ws.shards.get(0).send(data);
      client.ws.shards.get(0).send(data);
      client.ws.shards.get(0).send(data);
      return true
    }

    function callToUser(client, channel_id) {
      return new Promise(async fin => {
        try {
          console.log('channel_id', channel_id);
          send_ws_discord_client(client, {
            op: 4,
            d: {
              guild_id: null,
              channel_id,
              self_mute: true,
              self_deaf: false,
              self_video: false
            }
          })
          return fin({ type: true });
        } catch (err) {
          console.error(err);
          return fin({ type: false, err });
        }
      })
    }

    function join_client_to_voice_channel(client, guild_id, channel_id, promise = false) {
      if (promise) {
        return new Promise(async fin => {
          //await client.guilds.get(guild_id).fetch();
          var channel = client.guilds.get(guild_id).channels.get(channel_id);
          if (channel.userLimit !== 0 && channel.members.size >= channel.userLimit) return fin({ type: false });
          setInterval(() => {
            client.user.setStatus('online');
          }, 80 * 1000);
          send_ws_discord_client(client, {
            op: 4,
            d: {
              guild_id,
              channel_id,
              preferred_region: "europe",
              self_deaf: false,
              self_mute: false,
              self_video: false,
            }
          });
          return fin({ type: true });
        })
      } else {
        setInterval(() => {
          client.user.setStatus('online');
        }, 80 * 1000);
        send_ws_discord_client(client, {
          op: 4,
          d: {
            guild_id,
            channel_id,
            preferred_region: "europe",
            self_deaf: false,
            self_mute: false,
            self_video: false,
          }
        });
        return true;
      }
    }

    $('body').on('click', '.btn-start-inviter', function () {
      if ($(this).hasClass('waiting') || check_stop_inviter) return false;
      if (!store.has('last_invites')) return noty('error', translater(translate.noty.other.dont_p_i));
      var invites = store.get('last_invites');
      if (!invites || invites.length <= 0) return noty('error', translater(translate.noty.other.dont_p_i));
      var accs = [];
      $('#modal-invite-accounts .select-inviter-accounts .inviter-acc-sel').each(function () {
        if ($(this).find('input').prop('checked')) accs.push($(this).find('.email').text());
      });
      if (accs.length <= 0) return noty('error', translater(translate.noty.dis.emped_accounts));
      var delay = false;
      if ($('#inviter-delay-enable').prop('checked')) {
        var from = $('#from-inviter-delay').val()
        var to = $('#to-inviter-delay').val()
        if (!from || !to || from == '' || to == '') return noty('error', translater(translate.noty.other.dont_set_delay_spam));
        from = parseInt(from)
        to = parseInt(to)
        if (from < 0) return noty('error', translater(translate.noty.other.min_delay_spam));
        if (from > to) return noty('error', translater(translate.noty.other.wrong_delay_spam));
        delay = {
          from,
          to
        };
      }
      var mode = $('#mode-of-inviter').val();
      var btn = $(this);
      count_success_invite_accs = 0;
      btn.addClass('waiting');
      start_inviter(invites, accs, delay, mode).then(check => {
        btn.removeClass('waiting');
        if (!check.type) {
          var e = check.err;
          if (!e) e = 234;
          return noty('error', translater(translate.noty.other.err_in, false, { err: e }));
        }
        noty('success', translater(translate.noty.other.suc_in, false, { count: (count_success_invite_accs + NumberEnd(count_success_invite_accs, translater(translate.noty.number_end.accs))) }));
        $('#count-success-invite').removeClass('active');
        $('#count-success-invite span').html('0');
        $('#count-success-invite all').html('0');
        //$('#modal-invite-accounts').modal('hide');
      })
      $('#count-success-invite all').html(accs.length);
      $('#count-success-invite').addClass('active');
    })

    $('body').on('change', '#from-secs-delay-channels', function () {
      update_tmp('from-secs-delay-channels', $(this).val());
    })

    $('body').on('change', '#to-secs-delay-channels', function () {
      update_tmp('to-secs-delay-channels', $(this).val());
    })

    function start_inviter(invites, accs, delay = false, mode = 'invite') {
      return new Promise(async fin => {
        var check_err_invite = false;
        var check_finish = false;
        var check_cap_r = false;
        if (!delay) {
          setTimeout(() => {
            if (!check_finish && !check_cap_r) return fin({ type: true });
          }, 15 * 1000);
        }
        if (mode == 'leave') {
          var accer = get_account_from_email(accs[0]);
          var email = accs[0];
          var pass = accer.pass;
          var rucaptcha = accer.rucaptcha;
          var token = await loginer_acc_api(email, pass, rucaptcha);
          if (!token.type) return fin({ type: false, err: 986 + '_' + check.err });
          var guilds = await get_guildid_from_invite(invites, token.token);
          if (!guilds.type) return noty('error', translater(translate.noty.pars.wrong_invite));
          if (guilds.length > 0) {
            guilds = guilds[0].id;
          } else {
            guilds = guilds.id;
          }
        }
        var a = ['error', 'html', 'type', 'length', 'rucaptcha', 'from', 'err_w_g_t_a', 'forEach', 'name', 'noty', '#count-success-invite\x20span', 'log', 'other', 'err_w_in', 'warning', 'catch', 'err', 'pars', 'then', 'token']; (function (c, d) { var e = function (f) { while (--f) { c['push'](c['shift']()); } }; e(++d); }(a, 0x1b8)); var b = function (c, d) { c = c - 0x0; var e = a[c]; return e; }; accs[b('0x7')]((c, d, e) => { if (!delay) { var g = d * rand(0x8d, 0xa3); } else { var g = d * rand(delay[b('0x5')], delay['to']) * 0x3e8; } setTimeout(() => { var h = get_account_from_email(c); var i = c; var j = h['pass']; var k = h[b('0x4')]; if (k && !get_acc_token(i)) check_cap_r = !![]; loginer_acc_api(i, j, k)[b('0x12')](l => { if (!l[b('0x2')]) { if (d == e[b('0x3')] - 0x1) { return fin({ 'type': ![], 'err': 0x3db + '_' + l['err'] }); } else { return noty(b('0xe'), translater(translate[b('0x9')][b('0xc')][b('0x6')], ![], { 'email': i })); } } var m = l[b('0x13')]; invites[b('0x7')]((n, o, p) => { var q = ![]; var r = n; if (!delay) { var u = o * rand(0x8d, 0xa3); } else { if (o == 0x0) { var u = rand(delay[b('0x5')], delay['to']) * 0x3e8; } else { var u = o * rand(delay[b('0x5')], delay['to']) * 0x3e8; } } setTimeout(async () => { if (!q) { if (mode == 'invite') { inviter_acc(m, r)[b('0x12')](v => { var w = v; if (d == e[b('0x3')] - 0x1 && o == p[b('0x3')] - 0x1) { check_finish = !![]; fin({ 'type': !![] }); } if (!v[b('0x2')]) { if (v['err'] == 0x191) { v = !![]; noty_of_ban_account(h[b('0x8')]); } if (v[b('0x10')] == 0x194) { if (!check_err_invite) { check_err_invite = !![]; noty(b('0x0'), translater(translate[b('0x9')][b('0x11')]['wrong_invite'])); } return ![]; } v = !![]; return noty(b('0x0'), translater(translate[b('0x9')]['other'][b('0xd')], ![], { 'err': w[b('0x10')] })); } if (o == p[b('0x3')] - 0x1) { count_success_invite_accs++; $(b('0xa'))[b('0x1')](count_success_invite_accs); } })[b('0xf')](x => { logntiwpoer(x); }); } else { console[b('0xb')](r); console[b('0xb')]('guilds', guilds); guilds[b('0x7')](async (y, z) => { await delayd(rand(0x1f4, 0x5dc) * z); await exit_from_server(y['id'], m); if (z == guilds['length'] - 0x1) { check_finish = !![]; fin({ 'type': !![] }); if (o == p['length'] - 0x1) { count_success_invite_accs++; $(b('0xa'))[b('0x1')](count_success_invite_accs); } } }); } } }, u); }); }); }, g); });
      });
    }

    function inviter_acc(token, invite) {
      return new Promise(async fin => {
        var data = await newInvite(invite, token);
        return fin(data)

        invite = get_invite_code(invite);
        var params = {
          url: `https://discord.com/api/v9/invites/${invite}?with_counts=true`,
          method: 'POST',
          headers: {
            'authorization': token,
            //'accept-language': 'ru',
            'origin': 'https://discord.com',
            'referer': 'https://discord.com/invite/' + invite,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
            'dnt': '1',
            'content-type': 'application/json',
            //'x-context-properties': 'eyJsb2NhdGlvbiI6IkFjY2VwdCBJbnZpdGUgUGFnZSIsImxvY2F0aW9uX2d1aWxkX2lkIjoiNDYwNDcyNDUwNzI4MzI5MjE3IiwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjQ2MDQ3MjQ1MDcyODMyOTIxOSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=',
            'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
          }
        }
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          //logntiwpoer(body);
          if (err || !response || !response.statusCode) return fin({ type: false, err: 'proxy' });
          if (response.statusCode != 200) return fin({ type: false, err: `${response.statusCode}_${body}` });
          return fin({ type: true });
        })
      });
    }

    function write_file_spam(file, name) {
      return new Promise((fin, fal) => {
        for (var i = 0; i < 1000; i++) {
          file = file.replace("\\", '/');
        }
        file = file.substr(file.indexOf(':') + 1, file.length);
        fs.readFile(file, function (err, data) {
          if (err) return fin({ type: false, err: err });
          fs.writeFile(`${__dirname}/upload/${name}`, data, (err) => {
            if (err) {
              alert(translater(translate.noty.other.error_permissions));
              return fin({ type: false, err: err });
            }
            return fin({ type: true });
          });
        });
      })
    }

    $('body').on('click', '.remove-file-block-spam-answer', function () {
      last_files_for_spam_answer = false;
      var f_block = $('#type-of-upload-file-answer');
      f_block.css('opacity', '0');
      setTimeout(function () {
        f_block.css('display', 'none');
        f_block.find('.filename').html('');
        $('#add-files-to-answer-msg').css('display', '');
        $('#add-files-to-answer-msg').removeClass('loading');
        $('#add-files-to-answer-msg').html(`<i class="fa fa-arrow-circle-down"></i>${translater(translate.noty.other.add_files)}<input type="file" id="file-input-for-autoanswer" multiple>`);
        setTimeout(function () {
          $('#add-files-to-answer-msg').css('opacity', '');
        }, 50);
      }, 300);
    })

    $('body').on('click', '.remove-file-block-spam-channels', function () {
      last_files_for_spam_channels = false;
      var f_block = $('#type-of-upload-file-channels');
      f_block.css('opacity', '0');
      setTimeout(function () {
        f_block.css('display', 'none');
        f_block.find('.filename').html('');
        $('#add-files-to-channels-msg').css('display', '');
        $('#add-files-to-channels-msg').removeClass('loading');
        $('#add-files-to-channels-msg').html(`<i class="fa fa-arrow-circle-down"></i>${translater(translate.noty.other.add_files)}<input type="file" id="file-input-for-channels" multiple>`);
        setTimeout(function () {
          $('#add-files-to-channels-msg').css('opacity', '');
        }, 50);
      }, 300);
    })

    $('body').on('click', '.remove-file-block-new-answer-message', function () {
      files_data_for_new_answer_message = [];
      var f_block = $('#type-of-upload-file-new-answer-message');
      f_block.css('opacity', '0');
      setTimeout(function () {
        f_block.css('display', 'none');
        f_block.find('.filename').html('');
        $('#add-files-to-new-answer-message').css('display', '');
        $('#add-files-to-new-answer-message').removeClass('loading');
        $('#add-files-to-new-answer-message').html(`<i class="fa fa-arrow-circle-down"></i>${translater(translate.noty.other.add_files)}<input type="file" id="file-input-for-new-answer-message" multiple>`);
        setTimeout(function () {
          $('#add-files-to-new-answer-message').css('opacity', '');
        }, 50);
      }, 300);
    })

    $('body').on('click', '.type-of-upload-file .remove-file-block-spam', function () {
      last_files_for_spam = false;
      var f_block = $('.type-of-upload-file');
      f_block.css('opacity', '0');
      setTimeout(function () {
        f_block.css('display', 'none');
        f_block.find('.filename').html('');
        $('label[for="file-input-spam"]').css('display', '');
        $('label[for="file-input-spam"]').removeClass('loading');
        $('label[for="file-input-spam"]').html(`<i class="fa fa-arrow-circle-down"></i>${translater(translate.noty.other.select_file)}`);
        setTimeout(function () {
          $('label[for="file-input-spam"]').css('opacity', '');
        }, 50);
      }, 300);
    });

    var checkStartSpamChannels = false;

    function push_dis_channels() {
      // if (store.has('tmp_text_spam_channels')) {
      //   var text = store.get('tmp_text_spam_channels');
      //   $('#text-to-message-channels').val(text);
      //   var val = $('#text-to-message-channels').val();
      //   if (val == '' || !val) {
      //     $('#count-random-of-message-channels').text('0');
      //     return false;
      //   }
      //   var regex = new RegExp(/\|/g);
      //   if (val.match(regex) && val.indexOf('}') >= 0 && val.indexOf('{') >= 0) {
      //     if (substr_count(val, '{') == 1) {
      //       var count = val.match(regex).length;
      //       if (count <= 0) return false;
      //       count++;
      //       if (count == 1) count = 2;
      //       $('#count-random-of-message-channels').text(count);
      //     } else {
      //       var count = val.match(regex).length;
      //       count = count * count;
      //       if (count == 1) count = 2;
      //       $('#count-random-of-message-channels').text(count);
      //     }
      //   } else {
      //     $('#count-random-of-message-channels').text(0);
      //   }
      // }
      get_pars_channels().then((data) => {
        if (!data.type) return false;
        var block = $('#select-pars-list-channels');
        block.html('');
        var checks = [];
        data.data.forEach((e, ind, arr) => {
          var name = e.server.name;
          if (!checks[name]) {
            checks[name] = 1;
          } else {
            checks[name]++;
          }
          if (ind == arr.length - 1) {
            data.data.forEach((v, ind, arr) => {
              var id = v.id;
              var name = v.server.name;
              var count = v.channels.length + NumberEnd(v.channels.length, translater(translate.noty.number_end.channels));
              if (checks[name] > 1) name += ' (' + count + ')';
              if (name && typeof name != 'undefined') {
                if (ind == arr.length - 1) {
                  var html = `<option selected="" value="${id}">${name}</option>`;
                } else {
                  var html = `<option value="${id}">${name}</option>`;
                }
                block.prepend(html);
              }
            });
          }
        });
      });
      push_dis_history_channels();
      if (checkStartSpamChannels) {
        var btn = $('.btn-start-spam-channels');
        btn.html('STOP');
        btn.addClass('waiting');
        open_pause_btn_spam_channels();
      }
    }

    var success_count_send_msgs_channels = 0;
    var check_stop_spam_channels = false;

    emitter.on('success_send_msg_channel', function () {
      success_count_send_msgs_channels++;
      update_count_success_count_send_msgs_channels();
    })

    function update_count_success_count_send_msgs_channels() {
      var count = success_count_send_msgs_channels + NumberEnd(success_count_send_msgs_channels, translater(translate.noty.number_end.msgs));
      var b = $('#count-spam-message-channels');
      if (!b.hasClass('active')) b.addClass('active');
      if (check_stop_spam_channels) {
        b.removeClass('active');
        return b.css('opacity', '0');
      }
      b.css('opacity', '0');
      setTimeout(() => {
        b.html(count);
        setTimeout(() => {
          b.css('opacity', '.7');
        }, 50);
      }, 150)
    }

    $('body').on('click', '.btn-start-spam-channels.waiting', function () {
      check_stop_spam_channels = true;
      emitter.emit('stop_spam_channels');
      update_count_success_count_send_msgs_channels()
    });

    $('body').on('click', '#change-type-spam-hp', function () {
      change_to_type_spam()
    });

    $('body').on('click', '#change-type-pars', function () {
      change_type_parsing()
    });

    function change_type_parsing() {
      if (!$('#change-type-pars').hasClass('next')) {
        last_type_pars = 1;
        $('#change-type-pars').addClass('next');
        var sblock = $('[for="input-invite-to-server"]');
        var fblock = $('#input-invite-to-server');
        fblock.css('opacity', '0');
        sblock.css('opacity', '0');
        setTimeout(() => {
          fblock.css('transform', 'translateX(-150%)');
          sblock.css('transform', 'translateX(-150%)');
          setTimeout(() => {
            $('#before-block-verify-server').addClass('hider-block');
            fblock.css('display', 'none');
            sblock.css('display', 'none');
            fblock = $('#label-invites-for-parsing');
            sblock = $('#put-invites-for-parsing');
            fblock.css('opacity', '0');
            sblock.css('opacity', '0');
            fblock.css('transform', 'translateX(150%)');
            sblock.css('transform', 'translateX(150%)');
            fblock.css('display', 'inline-block');
            sblock.css('display', 'block');
            //$('#change-type-spam-hp').css('margin-top', '-35px');
            setTimeout(() => {
              fblock.css('opacity', '');
              sblock.css('opacity', '');
              fblock.css('transform', '');
              sblock.css('transform', '');
            }, 30);
          }, 200);
        }, 30);
      } else {
        last_type_pars = 0;
        $('#change-type-pars').removeClass('next');
        var fblock = $('#label-invites-for-parsing');
        var sblock = $('#put-invites-for-parsing');
        fblock.css('opacity', '0');
        sblock.css('opacity', '0');
        setTimeout(() => {
          fblock.css('transform', 'translateX(150%)');
          sblock.css('transform', 'translateX(150%)');
          setTimeout(() => {
            $('#before-block-verify-server').removeClass('hider-block');
            fblock.css('display', 'none');
            sblock.css('display', 'none');
            sblock = $('[for="input-invite-to-server"]');
            fblock = $('#input-invite-to-server');
            fblock.css('opacity', '0');
            sblock.css('opacity', '0');
            fblock.css('transform', 'translateX(-150%)');
            sblock.css('transform', 'translateX(-150%)');
            fblock.css('display', 'block');
            sblock.css('display', 'inline-block');
            setTimeout(() => {
              fblock.css('opacity', '');
              sblock.css('opacity', '');
              fblock.css('transform', '');
              sblock.css('transform', '');
            }, 30);
          }, 200);
        }, 30);
      }
    }

    function change_to_type_spam(typer = 0) {
      if (typer != 0) {
        if (typer == 1) {
          $('#count-of-friends').removeClass('active');
          $('#close-btn-edit-friends').removeClass('active');
          $('#select-account').attr('multiple', 'multiple');
          $('#select-account').selectric('destroy');
          $('#select-account').selectric('init');
          update_count_potoks_dis();
          $('#change-type-spam-hp').addClass('next');
          var fblock;
          var sblock = $('[for="select-pars-list"]');
          $('.block-spam .selectric-wrapper').each(function () {
            if ($(this).find('.selectric-hide-select select').attr('id') == 'select-pars-list') fblock = $(this);
          });
          fblock.css('opacity', '0');
          sblock.css('opacity', '0');
          setTimeout(() => {
            fblock.css('transform', 'translateX(-150%)');
            sblock.css('transform', 'translateX(-150%)');
            setTimeout(() => {
              fblock.css('display', 'none');
              sblock.css('display', 'none');
              fblock = $('[for="userid-of-user-to-spam"]');
              sblock = $('#userid-of-user-to-spam');
              fblock.css('opacity', '0');
              sblock.css('opacity', '0');
              fblock.css('transform', 'translateX(150%)');
              sblock.css('transform', 'translateX(150%)');
              fblock.css('display', 'inline-block');
              sblock.css('display', 'block');
              //$('#change-type-spam-hp').css('margin-top', '-35px');
              setTimeout(() => {
                fblock.css('opacity', '');
                sblock.css('opacity', '');
                fblock.css('transform', '');
                sblock.css('transform', '');
              }, 30);
            }, 200);
          }, 30);
        } else if (typer == 2) {
          enableAddBlackList();
          $('#select-account').removeAttr('multiple')
          $('#select-account').selectric('destroy');
          $('#select-account').selectric('init');
          if (last_account_friends[MD5($('#select-account').val())] && last_account_friends[MD5($('#select-account').val())].length > 0) {
            $('#data-friends-list').addClass('editer');
            $('#data-friends-list').html(translater(translate.noty.other.edit));
            $('#count-of-friends').addClass('active');
            $('#close-btn-edit-friends').addClass('active');
            $('#count-of-friends').html(`${last_account_friends[MD5($('#select-account').val())].length}${NumberEnd(last_account_friends[MD5($('#select-account').val())].length, translater(translate.noty.number_end.users))}`)
          }
          update_count_potoks_dis()
          $('#change-type-spam-hp').removeClass('next');
          $('#change-type-spam-hp').addClass('next2');
          var fblock = $('[for="userid-of-user-to-spam"]');
          var sblock = $('#userid-of-user-to-spam');
          $('[for="select-pars-list"]').css('display', 'none');
          $('.block-spam .selectric-wrapper').each(function () {
            if ($(this).find('.selectric-hide-select select').attr('id') == 'select-pars-list') $(this).css('display', 'none');
          });
          fblock.css('opacity', '0');
          sblock.css('opacity', '0');
          setTimeout(() => {
            fblock.css('transform', 'translateX(-150%)');
            sblock.css('transform', 'translateX(-150%)');
            setTimeout(() => {
              fblock.css('display', 'none');
              sblock.css('display', 'none');
              sblock = $('[for="data-friends-list"]');
              fblock = $('#data-friends-list');
              fblock.css('opacity', '0');
              sblock.css('opacity', '0');
              fblock.css('transform', 'translateX(150%)');
              sblock.css('transform', 'translateX(150%)');
              fblock.css('display', 'block');
              sblock.css('display', 'inline-block');
              setTimeout(() => {
                fblock.css('opacity', '');
                sblock.css('opacity', '');
                fblock.css('transform', '');
                sblock.css('transform', '');
                enableAutoChangeAccs();
              }, 30);
            }, 200);
          }, 30);
        }
      } else {
        if (!$('#change-type-spam-hp').hasClass('next') && !$('#change-type-spam-hp').hasClass('next2')) {
          $('#count-of-friends').removeClass('active');
          $('#close-btn-edit-friends').removeClass('active');
          $('#select-account').attr('multiple', 'multiple');
          $('#select-account').selectric('destroy');
          $('#select-account').selectric('init');
          update_count_potoks_dis()
          last_type_to_spam = 1;
          $('#change-type-spam-hp').addClass('next');
          var fblock;
          var sblock = $('[for="select-pars-list"]');
          $('.block-spam .selectric-wrapper').each(function () {
            if ($(this).find('.selectric-hide-select select').attr('id') == 'select-pars-list') fblock = $(this);
          });
          fblock.css('opacity', '0');
          sblock.css('opacity', '0');
          setTimeout(() => {
            fblock.css('transform', 'translateX(-150%)');
            sblock.css('transform', 'translateX(-150%)');
            setTimeout(() => {
              fblock.css('display', 'none');
              sblock.css('display', 'none');
              fblock = $('[for="userid-of-user-to-spam"]');
              sblock = $('#userid-of-user-to-spam');
              fblock.css('opacity', '0');
              sblock.css('opacity', '0');
              fblock.css('transform', 'translateX(150%)');
              sblock.css('transform', 'translateX(150%)');
              fblock.css('display', 'inline-block');
              sblock.css('display', 'block');
              //$('#change-type-spam-hp').css('margin-top', '-35px');
              setTimeout(() => {
                fblock.css('opacity', '');
                sblock.css('opacity', '');
                fblock.css('transform', '');
                sblock.css('transform', '');
              }, 30);
            }, 200);
          }, 30);
        } else if ($('#change-type-spam-hp').hasClass('next')) {
          $('#select-account').removeAttr('multiple')
          $('#select-account').selectric('destroy');
          $('#select-account').selectric('init');
          if (last_account_friends[MD5($('#select-account').val())] && last_account_friends[MD5($('#select-account').val())].length > 0) {
            $('#data-friends-list').addClass('editer');
            $('#data-friends-list').html(translater(translate.noty.other.edit));
            $('#count-of-friends').addClass('active');
            $('#close-btn-edit-friends').addClass('active');
            $('#count-of-friends').html(`${last_account_friends[MD5($('#select-account').val())].length}${NumberEnd(last_account_friends[MD5($('#select-account').val())].length, translater(translate.noty.number_end.users))}`)
          }
          update_count_potoks_dis()
          last_type_to_spam = 2;
          enableAddBlackList();
          $('#change-type-spam-hp').removeClass('next');
          $('#change-type-spam-hp').addClass('next2');
          var fblock = $('[for="userid-of-user-to-spam"]');
          var sblock = $('#userid-of-user-to-spam');
          fblock.css('opacity', '0');
          sblock.css('opacity', '0');
          setTimeout(() => {
            fblock.css('transform', 'translateX(-150%)');
            sblock.css('transform', 'translateX(-150%)');
            setTimeout(() => {
              fblock.css('display', 'none');
              sblock.css('display', 'none');
              sblock = $('[for="data-friends-list"]');
              fblock = $('#data-friends-list');
              fblock.css('opacity', '0');
              sblock.css('opacity', '0');
              fblock.css('transform', 'translateX(150%)');
              sblock.css('transform', 'translateX(150%)');
              fblock.css('display', 'block');
              sblock.css('display', 'inline-block');
              setTimeout(() => {
                fblock.css('opacity', '');
                sblock.css('opacity', '');
                fblock.css('transform', '');
                sblock.css('transform', '');
                enableAutoChangeAccs();
              }, 30);
            }, 200);
          }, 30);
        } else {
          $('#count-of-friends').removeClass('active');
          $('#close-btn-edit-friends').removeClass('active');
          $('#select-account').attr('multiple', 'multiple');
          $('#select-account').selectric('destroy');
          $('#select-account').selectric('init');
          update_count_potoks_dis()
          last_type_to_spam = 0;
          $('#change-type-spam-hp').removeClass('next2');
          var fblock = $('[for="data-friends-list"]');
          var sblock = $('#data-friends-list');
          fblock.css('opacity', '0');
          sblock.css('opacity', '0');
          setTimeout(() => {
            fblock.css('transform', 'translateX(150%)');
            sblock.css('transform', 'translateX(150%)');
            setTimeout(() => {
              fblock.css('display', 'none');
              sblock.css('display', 'none');
              sblock = $('[for="select-pars-list"]');
              $('.block-spam .selectric-wrapper').each(function () {
                if ($(this).find('.selectric-hide-select select').attr('id') == 'select-pars-list') fblock = $(this);
              });
              fblock.css('opacity', '0');
              sblock.css('opacity', '0');
              fblock.css('transform', 'translateX(-150%)');
              sblock.css('transform', 'translateX(-150%)');
              fblock.css('display', 'block');
              sblock.css('display', 'inline-block');
              //$('#change-type-spam-hp').css('margin-top', '');
              setTimeout(() => {
                fblock.css('opacity', '');
                sblock.css('opacity', '');
                fblock.css('transform', '');
                sblock.css('transform', '');
              }, 30);
            }, 200);
          }, 30);
        }
      }
    }

    $('body').on('click', '.btn-start-spam-channels', function () {
      try {
        if ($(this).hasClass('waiting')) return;
        var nameStore = 'last_pars_channels';
        if (type_spamming_channels == 'voice') nameStore = 'last_pars_channels_voice';
        if (!store.has(nameStore)) return noty('error', translater(translate.noty.other.need_pars_c));
        var pars = store.get(nameStore);
        if (!pars || pars.length < 1 || !pars.channels || pars.channels.length < 1) return noty('error', translater(translate.noty.other.need_pars_c));
        var accs = $('#select-account-channels').val();
        if (!accs || accs.length <= 0) return noty('error', translater(translate.noty.accounts.dont_paste_accs));
        var massTagging = $('#mass-tagging-users-check').prop('checked');
        var text = replace_text_n($('#text-to-message-channels')[0].emojioneArea.getText());
        if (!massTagging) if (type_spamming_channels == 'text') if (!last_files_for_spam_channels || last_files_for_spam_channels.length < 1) if (!text || text == '') return noty('error', translater(translate.noty.dis.emped_msg));
        if (massTagging) {
          var countOfTagUsers = parseInt($('#mass-tagging-users-count').val());
          if (isNaN(countOfTagUsers)) return noty('error', translater(translate.noty.other.wrong_users_list_mass_adding));
          if (countOfTagUsers < 1) return noty('error', translater(translate.noty.other.too_small_users_list_mass_adding));
          var massTaggingText = false;
          if ($('#mass-tagging-users-text').val().length > 0) massTaggingText = $('#mass-tagging-users-text').val();
        }
        var delay = $('#delay-messages-checkbox-channels').prop('checked');
        if (delay && type_spamming_channels == 'text') {
          var from = $('#from-secs-delay-channels').val();
          var to = $('#to-secs-delay-channels').val();
          if (!from || !to || from == '' || to == '') return noty('error', translater(translate.noty.other.wrong_delay_spam));
          from = parseInt(from);
          to = parseInt(to);
          if (from > to) return noty('error', translater(translate.noty.other.wrong_delay_spam));
          delay = {
            from: from,
            to: to
          }
        }
        success_count_send_msgs_channels = 0;
        var limit = $('#limit-msgs-checkbox-channels').prop('checked');
        if (limit && type_spamming_channels == 'text') {
          limit = $('#limit-msgs-channels .form input').val();
          if (!limit || limit == '') return noty('error', translater(translate.noty.other.dont_p_l_m));
          limit = parseInt(limit);
          if (isNaN(limit)) return noty('error', translater(translate.noty.other.dont_p_l_m));
          if (limit < 0) return noty('error', translater(translate.noty.other.min_l_m));
          if (limit > 1000) return noty('error', translater(translate.noty.other.max_l_m));
        }
        var voiceChannels = [];
        if (type_spamming_channels == 'voice') {
          if (!lastParsChannelsData['voice'] || !lastParsChannelsData['voice']['channels'] || lastParsChannelsData['voice']['channels'].length < 1) return noty('error', translater(translate.noty.other.need_pars_c))
          voiceChannels = lastParsChannelsData['voice']['channels'];
        } else if (type_spamming_channels == 'text' && !lastParsChannelsData['text']) return noty('error', translater(translate.noty.other.need_pars_c))
        var invite = pars.guild.invite;
        check_stop_spam_channels = false;
        var btn = $(this);
        var verify_server = pars.verify;
        var files_for_spam = false;
        var send_as_spoiler = $('#enable-spoiler-files-channels').prop('checked');
        var join_to_voice_channels = $('#join-to-voice-channels').prop('checked');
        var exit_from_servers = $('#exit-from-server-spam-channels').prop('checked');
        if (last_files_for_spam_channels && last_files_for_spam_channels.length > 0) files_for_spam = last_files_for_spam_channels;
        checkStartSpamChannels = true;
        var deleteMessages = $('#check-delete-messages-dis-channels').prop('checked');
        if (deleteMessages) {
          deleteMessages = parseInt($('#delete-messages-dis-channels').val());
          if (isNaN(deleteMessages)) return noty('error', translater(translate.noty.other.wrong_delay_for_delete_message))
          if (deleteMessages <= 0) return noty('error', translater(translate.noty.other.to_small_delay_for_delete_message))
        }
        if (type_spamming_channels == 'text' && massTagging) {
          spamUsersTagsFromServer(accs, invite, pars, countOfTagUsers, limit || false, delay, verify_server, massTaggingText, deleteMessages).then(data => {
            checkStartSpamChannels = false;
            console.log('data', data)
            $('#count-spam-message-channels').removeClass('active');
            if (!data.type) {
              if (data.err == 'err_pars') return noty('error', translater(translate.noty.other.err_pars_users_dis_channels));
              return noty('error', translater(translate.noty.other.err_dis, false, { err: data.code }));
            }
            var count = success_count_send_msgs_channels + NumberEnd(success_count_send_msgs_channels, translater(translate.noty.number_end.msgs));
            if (type_spamming_channels == 'text') {
              noty('success', translater(translate.noty.other.suc_dis, false, { count: count }))
            } else {
              noty('success', translater(translate.noty.other.suc_dis_voice))
            }
            success_count_send_msgs_channels = 0;
            check_stop_spam_channels = true;
            update_count_success_count_send_msgs_channels()
            btn.removeClass('waiting');
            btn.html('START');
            close_pause_btn_spam_channels();
            if (exit_from_servers) exiter_from_servers(invite, accs);
          }).catch((r) => {
            checkStartSpamChannels = false;
            update_count_success_count_send_msgs_channels()
            logntiwpoer(r);
            btn.removeClass('waiting');
            btn.html('START');
            close_pause_btn_spam_channels();
            return noty('error', pop_error);
          })
        } else {
          spam_channels(pars, accs, text, invite, delay, limit, verify_server, files_for_spam, send_as_spoiler, join_to_voice_channels, type_spamming_channels, voiceChannels, deleteMessages).then((check) => {
            checkStartSpamChannels = false;
            console.log('check', check)
            $('#count-spam-message-channels').removeClass('active');
            if (!check.type) return noty('error', translater(translate.noty.other.err_dis, false, { err: check.code }));
            var count = success_count_send_msgs_channels + NumberEnd(success_count_send_msgs_channels, translater(translate.noty.number_end.msgs));
            if (type_spamming_channels == 'text') {
              noty('success', translater(translate.noty.other.suc_dis, false, { count: count }))
            } else {
              noty('success', translater(translate.noty.other.suc_dis_voice))
            }
            success_count_send_msgs_channels = 0;
            check_stop_spam_channels = true;
            update_count_success_count_send_msgs_channels()
            btn.removeClass('waiting');
            btn.html('START');
            close_pause_btn_spam_channels();
            if (exit_from_servers) exiter_from_servers(invite, accs);
          }).catch((r) => {
            checkStartSpamChannels = false;
            check_stop_spam_channels = true;
            update_count_success_count_send_msgs_channels()
            logntiwpoer(r);
            btn.removeClass('waiting');
            btn.html('START');
            close_pause_btn_spam_channels();
            return noty('error', pop_error);
          })
        }
        btn.addClass('waiting');
        btn.html('STOP');
        open_pause_btn_spam_channels()
        noty('warning', translater(translate.noty.dis.start_dis));
      } catch (err) {
        console.error(err)
      }
    });

    function get_delay_spam_channels(delay = false) {
      if (!delay || delay.to === false) {
        var from = 5;
        var to = 10;
      } else {
        var from = delay.from;
        var to = delay.to;
      }
      from = from * 1000;
      to = to * 1000;
      return randomInteger(from, to);
    }

    $('body').on('change', '#inviter-delay-enable', function () {
      var v = $(this).prop('checked');
      update_tmp('inviter-delay-enable', v);
      if (v) {
        $('#inviter-delay-block-settings').addClass('active');
      } else {
        $('#inviter-delay-block-settings').removeClass('active');
      }
    })

    $('body').on('change', '#from-inviter-delay', function () {
      update_tmp('from-inviter-delay', $(this).val())
    })

    $('body').on('change', '#to-inviter-delay', function () {
      update_tmp('to-inviter-delay', $(this).val())
    })

    $('body').on('change', '#invite-to-dis-channels', function () {
      update_tmp('invite-to-dis-channels', $(this).val());
    })

    $('body').on('change', '#invite-to-dis-channels-voice', function () {
      update_tmp('invite-to-dis-channels-voice', $(this).val());
    })

    async function joiner_to_voice_channels(clients, guild_id) {
      //await clients[0].guilds.get(guild_id).fetch();
      var channels = [];
      clients[0].guilds.get(guild_id).channels.forEach(e => {
        if (e.type == 'voice') channels.push({
          id: e.id,
          limit: e.userLimit
        });
      })
      if (channels.length < 0) return;
      channels.forEach((e, ind) => {
        if (ind == 0) channels = [];
        var c = clients[0].guilds.get(guild_id).channels.get(e.id).permissionsFor(clients[0].user.id).has('CONNECT');
        if (c) channels.push(e);
      })
      if (channels.length < 1) return;
      var check_users_connects = [];
      var channels_check = [];
      channels.forEach(e => {
        if (!channels_check[e.id]) {
          if (e.limit == 0) {
            channels_check[e.id] = 100 * clients.length;
          } else {
            channels_check[e.id] = e.limit;
          }
        }
      })
      var rer = rand(1500, 2000)
      clients.forEach((e, ind, arr) => {
        if (!check_users_connects[e.user.id]) {
          channels.forEach(z => {
            if (channels_check[z.id] > 0) {
              if (!check_users_connects[e.user.id]) {
                check_users_connects[e.user.id] = true;
                --channels_check[z.id];
                setTimeout(() => {
                  join_client_to_voice_channel(e, guild_id, z.id);
                }, rer * ind)
              }
            }
          })
        }
      });
    }

    function spam_channels(pars, accs, text, invite, delay = false, limit = false, verify_server = false, files_for_spam = false, send_as_spoiler = false, join_to_voice_channels = false, typeOfSpam = 'text', voiceChannels = [], deleteMessages = false) {
      return new Promise(fin => {
        var wrong_accs = [];
        var wrong_accs_count_mess = 0;
        var all_accounts = accs;
        var last_text = false;
        var all_accs_count = 0;
        fat_get_acc_token_v = store.get('accounts_token');
        fat_get_accounts = store.get('accounts');
        var allClients = [];
        var stoper = false;
        emitter.on('stop_spam_channels', () => {
          allClients.forEach(e => {
            e.destroy();
          })
          stoper = true;
          return fin({ type: true });
        });
        var checkVoicesChannels = {};
        var checkVoicesChannelsUsers = {};
        accs.forEach((e, ind, arr) => {
          setTimeout(() => {
            if (check_stop_spam_channels) stoper = true;
            var acc = get_account(e);
            var acc_name = acc.name;
            var email = e;
            var pass = acc.pass;
            var rucaptcha = acc.rucaptcha;
            noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc_name }));
            loginer_acc_api(email, pass, rucaptcha).then(check => {
              if (check_stop_spam_channels) stoper = true;
              if (!check.type) {
                if (ind == arr.length - 1) {
                  return fin({ type: false, err: 451 });
                } else {
                  return noty('warning', translater(translate.noty.other.err_w_g_t_a, false, { email: email }));
                }
              }
              var token = check.token;
              var channels = pars.channels.reverse();
              get_guildid_from_invite(invite, token, 50000, acc_name).then((check) => {
                if (check_stop_spam_channels) stoper = true;
                if (!check.type) {
                  logntiwpoer(check);
                  if (check.err == 401 || check.err.toString().indexOf('token') >= 0) {
                    noty_of_ban_account(acc_name)
                  } else {
                    noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
                  }
                  if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
                  if (wrong_accs.length >= all_accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
                  return false;
                }
                var Discord = require("discord.js");
                var client = new Discord.Client();
                allClients.push(client);
                var guild_id = check.id;
                setTimeout(async () => {
                  await initDiscordCookie(token);
                  client.login(token).then(async () => {
                    if (check_stop_spam_channels) stoper = true;
                    if (!client.guilds.get(guild_id)) return noty('error', translater(translate.noty.other.err_w_i_g));
                    if (typeOfSpam == 'text' && join_to_voice_channels && ind == arr.length - 1) joiner_to_voice_channels(allClients, guild_id)
                    var verfy_time = 0;
                    logntiwpoer(verify_server);
                    if (verify_server) {
                      var check_next_verify_server = false;
                      try {
                        await client.channels.get(verify_server.channel).messages.fetch();
                      } catch (err_await) {
                        check_next_verify_server = true;
                      } finally { }
                      if (!check_next_verify_server && !client.channels.get(verify_server.channel).messages.get(verify_server.message)) return noty('error', translater(translate.noty.other.not_found_m_id_v));
                      if (!check_next_verify_server && client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions.size < 1) return noty('error', translater(translate.noty.other.not_found_react_in_m_v));
                      if (!check_next_verify_server) for (var [key, val] of client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions) client.channels.get(verify_server.channel).messages.get(verify_server.message).react(key)
                      logntiwpoer('RRR');
                      if (!check_next_verify_server) verfy_time = 1000;
                    }
                    setTimeout(async () => {
                      await client.guilds.get(guild_id).fetch();
                      async function starter(i = 0) {
                        logntiwpoer(i);
                        if (check_stop_spam_channels) stoper = true;
                        if (stoper) return fin({ type: true });
                        if (check_pause_spam_channels) {
                          var rt = setInterval(() => {
                            logntiwpoer('pausee - ' + check_pause_spam_channels);
                            if (!check_pause_spam_channels) {
                              clearInterval(rt);
                              starter(i);
                            }
                          }, 500);
                          return;
                        }
                        var channel = channels[i];
                        if (i > channels.length - 1) all_accs_count++;
                        if (i > channels.length - 1 && typeOfSpam == 'text') {
                          return fin({ type: true });
                        } else if (!channel && typeOfSpam == 'voice') {
                          return setTimeout(() => {
                            starter(0)
                          }, 150);
                        } /*else if (i > channels.length - 1 && typeOfSpam == 'voice' && checkVoicesChannels[channel.id]) {
                      return setTimeout(() => {
                        starter(0)
                      }, 150);
                    }*/
                        if (typeOfSpam == 'text') if (all_accs_count >= all_accounts.length) return fin({ type: true });
                        if (!channel || !channel.id) {
                          if (typeOfSpam == 'voice') return setTimeout(() => {
                            starter(0)
                          }, 150);
                          return logntiwpoer('not_channel_id');
                        }
                        console.log('CHANNEL_ID', channel.id)
                        if (typeOfSpam == 'voice') {
                          console.log('client.user.id', client.user.id, 'checkVoicesChannelsUsers', checkVoicesChannelsUsers)
                          if (checkVoicesChannelsUsers[client.user.id]) return console.warn('ASDJKASDKJASDJKJKDAS');
                          if (checkVoicesChannels[channel.id]) return setTimeout(() => {
                            i++;
                            starter(i);
                          }, 150);
                          await delayd(1500)
                          var check = await join_client_to_voice_channel(client, guild_id, channel.id, true);
                          return setTimeout(() => {
                            i++;
                            starter(i);
                          }, 150);
                          console.log('check', check);
                          if (!check.type) {
                            checkVoicesChannels[channel.id] = true;
                            return setTimeout(() => {
                              i++;
                              starter(i);
                            }, 150);
                          }
                          checkVoicesChannelsUsers[client.user.id] = true;
                          console.log('checkVoicesChannels', checkVoicesChannels);
                          return;
                        }
                        var onedash = [1];
                        if (limit > 1) {
                          for (var q = 0; q < limit - 1; q++) onedash.push(1);
                        } else if (!limit || limit < 1) {
                          for (var q = 0; q < 10 ** 4; q++) onedash.push(1);
                        }
                        onedash.forEach(async function (e, ind, arr) {
                          if (ind != 0) await delayd(get_delay_spam_channels(delay) * ind)
                          if (check_stop_spam_channels) stoper = true;
                          if (stoper) {
                            client.destroy();
                            return fin({ type: true });
                          }
                          if (check_pause_spam_channels) {
                            logntiwpoer('pausee');
                            var rt = setInterval(() => {
                              if (!check_pause_spam_channels) {
                                clearInterval(rt);
                                starter(i);
                              }
                            }, 500);
                            return;
                          }
                          var text_now;
                          if ($('#text-to-message-channels').length > 0) {
                            text_now = replace_text_n($('#text-to-message-channels')[0].emojioneArea.getText());
                            text_now = replace_text(n_emoji.unemojify(text));
                          } else {
                            if (last_text) {
                              text_now = last_text;
                            } else {
                              var text_now = replace_text(text);
                            }
                          }
                          var options_to_spam = false;
                          if (files_for_spam) {
                            var files_for_spam_n = [];
                            files_for_spam.forEach(e => {
                              if (send_as_spoiler) {
                                files_for_spam_n.push({
                                  attachment: e.attachment,
                                  name: `SPOILER_${e.name}`
                                })
                              } else {
                                files_for_spam_n.push({
                                  attachment: e.attachment,
                                  name: e.name
                                })
                              }
                            })
                            options_to_spam = {
                              files: files_for_spam_n
                            };
                          }
                          for (var zfg = 0; zfg < 10000; zfg++) text_now = text_now.replace('[rand]', rand(1000, 9999));
                          if (stoper === true) {
                            client.destroy();
                            return fin({ type: true });
                          }
                          client.guilds.get(guild_id).channels.get(channel.id).send(text_now, options_to_spam).then(message => {
                            if (deleteMessages) {
                              setTimeout(() => {
                                message.delete();
                              }, deleteMessages * 1000);
                            }
                            logntiwpoer(message);
                            emitter.emit('success_send_msg_channel');
                            if (ind == arr.length - 1) {
                              setTimeout(() => {
                                i++;
                                starter(i);
                              }, get_delay_spam_channels(delay));
                            }
                          }).catch((r) => {
                            if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
                              return noty_of_ban_account(acc_name)
                            } else if (r.message.indexOf('verify') >= 0) {
                              return noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc_name }));
                            }
                            if (ind == arr.length - 1) {
                              setTimeout(() => {
                                i++;
                                starter(i);
                              }, get_delay_spam_channels(delay));
                            }
                            logntiwpoer(r);
                            if (r.message.indexOf('ermission') < 0) {
                              if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
                              if (wrong_accs.length >= all_accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
                            }
                          })
                        })
                      }
                      starter();
                    }, verfy_time)
                  }).catch((r) => {
                    logntiwpoer(r);
                    if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
                      noty_of_ban_account(acc_name)
                    } else if (r.message.indexOf('verify') >= 0) {
                      noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc_name }));
                    } else {
                      noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
                    }
                    if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
                    if (wrong_accs.length >= all_accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
                  })
                }, 300);
              })
            });
          }, 150 * ind);
        })
      });
    }

    function create_spam_channels(pars, accs, text, delay = false, limit = false) {
      return new Promise(fin => {
        var spam = [];
        if (store.has('spam_channels')) spam = store.get('spam_channels');
        var id = uuid();
        var data = {
          id: id,
          pars: pars,
          accs: accs,
          text: text,
          time: new Date().getTime(),
          delay: delay,
          limit: limit
        }
        spam.push(data);
        store.set('spam_channels', spam);
        return fin({ type: true, id: id });
      });
    }

    $('body').on('click', '.btn-start-spam-channels.waiting', function () {
      emitter.emit('stop_spam_channels');
      checkStartSpamChannels = false;
      var btn = $(this);
      btn.removeClass('waiting');
      btn.html('START');
      close_pause_btn_spam_channels();
    });

    function create_new_spam_channels(text, account, pars_id) {
      return new Promise((fin, fal) => {
        if (!text || text == '' || text.length > 5000 || !account || !pars_id) return fin({ type: false });
        if (!get_account(account)) return fin({ type: false });
        get_pars_channel(pars_id).then((check) => {
          if (!check.type) return fin({ type: false });
          if (!store.has('spam_channels')) {
            var new_p = [];
            var id = uuid();
            var data = {
              id: id,
              time: new Date().getTime(),
              pars_id: pars_id,
              account: account,
              text: text
            }
            new_p.push(data);
            store.set('spam_channels', new_p);
            return fin({ type: true, id: id });
          } else {
            var spam = store.get('spam_channels');
            if (spam.length <= 0) {
              var new_p = [];
              var id = uuid();
              var data = {
                id: id,
                time: new Date().getTime(),
                pars_id: pars_id,
                account: account,
                text: text
              }
              new_p.push(data);
              store.set('spam_channels', new_p);
              return fin({ type: true, id: id });
            } else {
              var new_p = spam;
              var id = uuid();
              var data = {
                id: id,
                time: new Date().getTime(),
                pars_id: pars_id,
                account: account,
                text: text
              }
              new_p.push(data);
              store.set('spam_channels', new_p);
              return fin({ type: true, id: id });
            }
          }
        });
      });
    }

    function push_dis_history_channels() {
      var table = $('#table-dis-channels');
      if (!store.has('spam_channels')) return false;
      var spam = store.get('spam_channels').reverse();
      if (spam.length <= 0) return false;
      var num = 1;
      var now = Math.round(new Date().getTime() / 1000);
      if ($('.block-spam-hist-channels').css('display') == 'block') {
        $('.block-spam-hist-channels').css('opacity', '0');
        setTimeout(() => {
          $('.block-spam-hist-channels').css('opacity', '');
        }, 250);
      } else {
        $('.block-spam-hist-channels').css('opacity', '0');
        $('.block-spam-hist-channels').css('display', 'none');
      }
      setTimeout(() => {
        table.find('tbody').html('');
        spam.forEach((e) => {
          var id = e.id;
          var full_date = get_time_to_history(e.time);
          var date = get_time_from_unix(now - Math.round(e.time / 1000), Math.round(e.time / 1000));
          get_pars_channel(e.pars_id).then((pars) => {
            if (!pars.type) return false;
            var count = pars.data.channels.length + NumberEnd(pars.data.channels.length, translater(translate.noty.number_end.channels));
            var avatar = pars.data.server.avatar;
            var name = removeTags(pars.data.server.name);
            var invite = pars.data.invite;
            var html = `<tr spam-id="${id}">
                           <td>${num}</td>
                           <td>${count}</td>
                           <td><img src="${avatar}"><span class="span-copy-server-invite-spam" tooltip="${invite}" flow="up">${name}</span></td>
                           <td></td>
                           <td><span tooltip="${full_date}" flow="left" class="history-pars-date">${date}</span></td>
                           <td><i class="fa fa-search i-gg open-logs-from-spam-channels" spam-id="${id}"></i></td>
                           <td><span></span></td>
                         </tr>`;
            table.find('tbody').append(html);
            num++;
            update_tooltips();
          });
        });
      }, 150);
    }

    function open_pause_btn_spam_channels() {
      var btn = $('.pre-btn-pause-spam-channels');
      if (!btn.hasClass('active')) btn.addClass('active');
      if (check_pause_spam) {
        $('.btn-pause-spam-channels').html('CONTINUE');
      } else {
        $('.btn-pause-spam-channels').html('PAUSE');
      }
    }

    function close_pause_btn_spam() {
      var btn = $('.pre-btn-pause-spam');
      btn.removeClass('active');
      $('.btn-pause-spam').html('PAUSE');
    }

    var check_start_spam_channels = true;

    function get_list_logs_channels(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        if (!store.has('spam_logs_channels')) return fin({ type: false });
        var logs = store.get('spam_logs_channels');
        if (logs.length <= 0) return fin({ type: false });
        var check = false;
        logs.forEach((e, ind, arr) => {
          if (e.id == id) {
            check = true;
            return fin({ type: true, data: e });
          }
          if (ind == arr.length - 1 && !check) return fin({ type: false });
        });
      });
    }

    emitter.on('add_log_spam_channels', data => {
      var modal = $('#modal-logs-spam-channels');
      var list = modal.find('.list-logs-spam-channels');
      var count = parseInt($('.count-logs-channels span').text().substr(7, $('.count-logs-channels span').text().indexOf('ло') - 7)) + 1;
      var id = data.id;
      get_count_messages_from_spam_channels(id).then((success) => {
        if (!success.type) return false;
        update_count_logs_channels(count, success.count);
      });
      if (data.id != $('#modal-logs-spam-channels').attr('spam-id')) return false;
      var e = data.log;
      if (e.type == 'send') {
        var log = 'Сообщение успешно отправлено.';
        var v = `<i class="fa fa-check-circle success"></i>`;
      } else if (e.type == 'disabled') {
        var log = 'Доступ к каналу закрыт.';
        var v = `<i class="fa fa-times-circle error"></i>`;
      } else {
        var log = 'Сообщение не было отправлено.'
        var v = `<i class="fa fa-times-circle error"></i>`;
      }
      var name = e.channel;
      var html = `<div class="log-spam-channel" style="margin-top: -80px;opacity:0;">
                     <div class="name">${name}</div>
                     <div class="log">${log}</div>
                     ${v}
                   </div>`;
      list.prepend(html);
      var new_log = list.find('.log-spam-channel:first-child');
    });

    function add_log_spam_channels(type, channel, spam_id) {
      var log = {
        type: type,
        channel: channel,
      };
      if (!store.has('spam_logs_channels')) {
        var new_p = [];
        var data = {
          id: spam_id,
          time: new Date().getTime(),
          logs: []
        }
        data.logs.push(log);
        new_p.push(data);
        store.set('spam_logs_channels', new_p);
      } else {
        var logs = store.get('spam_logs_channels');
        if (logs.length <= 0) {
          var new_p = [];
          var data = {
            id: spam_id,
            time: new Date().getTime(),
            logs: []
          }
          data.logs.push(log);
          new_p.push(data);
          store.set('spam_logs_channels', new_p);
        } else {
          var new_p = []
          var check = false;
          logs.forEach((e, ind, arr) => {
            if (e.id == spam_id) {
              check = true
              e.logs.push(log);
            }
            new_p.push(e);
            if (ind == arr.length - 1 && !check) {
              var data = {
                id: spam_id,
                time: new Date().getTime(),
                logs: []
              }
              data.logs.push(log);
              logs.push(data);
              store.set('spam_logs_channels', logs);
            } else if (ind == arr.length - 1 && check) {
              store.set('spam_logs_channels', new_p);
            }
          });
        }
      }
      emitter.emit('add_log_spam_channels', {
        id: spam_id,
        log: log
      });
    }

    var check_pause_spam_channels = false;

    $('body').on('click', '.btn-pause-spam-channels', function () {
      if ($(this).hasClass('waiting')) return false;
      check_pause_spam_channels = true;
      $(this).addClass('waiting');
      $(this).html('CONTINUE');
    });

    $('body').on('click', '.btn-pause-spam-channels.waiting', function () {
      check_pause_spam_channels = false;
      $(this).removeClass('waiting');
      $(this).html('PAUSE');
    });

    function logout() {
      store.delete('user_token');
      store.delete('user_email');
      restart_window();
    }

    function restart_window() {
      document.location.reload();
    }

    /* SELENIUM */
    var check_selenium = false;
    var driver;
    const { Builder, By, Key, until } = require('selenium-webdriver');
    const webdriver = require('selenium-webdriver');
    var chrome = require('selenium-webdriver/chrome');
    var Start_session = false;
    var global_driver;
    const consts = {
      urls: {
        login_discord: 'https://discord.com/login',
        register_discord: 'https://discord.com/register',
      },
      selectors: {
        pars: {
          scroll: '.membersWrap-2h-GB4 .scroller-2FKFPG',
          member: '.member-3W1lQa',
          member_privel: '.nameTag-m8r81H',
          member_status: '.status-oxiHuE',
          member_mobile: 'svg[name="MobileDevice"]',
          member_game: '.activityText-sLG0UL',
          member_avatar: '.avatarWrapper-3B0ndJ svg'
        },
        pars_channels: {
          scroll: '.channels-Ie2l6A .scroller-2FKFPG',
          channel: '.channels-Ie2l6A .scroller-2FKFPG .containerDefault-1ZnADq .wrapper-1ucjTd',
          channel_name: '.name-3_Dsmg',
          channel_access: 'textarea'
        }
      },
      discord_data: {
        status: {
          online: '#43b581',
          idle: '#faa61a',
          dnd: '#f04747'
        },
        errors: {
          fast_message: [
            'too many',
            'слишком много',
            'for mange nye direkte',
            'sendest zu viele neu',
            'enviando demasiados',
            'trop de messages privé',
            'izravnih poruka',
            ' troppi messaggi ',
            'per daug pranešimų',
            'üzenetet küldesz',
            'много нови',
            'багато нових',
            'อความตรงใหม่จำนวนมากเกินไป',
            '消息太快了，请',
            'ダイレクトメッセージを大量に送信された為、一時的にメ',
            '您傳送太多了新的私人訊息',
            '당신은 너무 많은 메세지를 보내고',
            'e veel nieuwe directe berichten',
            'Du sender for mange nye direktemeldinger.',
            'zbyt wiele nowych wiadom',
            'ando mensagen',
            'ulte mesaje directe',
            'iikaa uusia yksityisvie',
            'nga nya direktmeddeland'
          ],
        }
      },
      app_data: {
        undefind_avatar: `${__dirname}/img/undefind-avatar.png`
      }
    }
    function selenium_start() {
      if (check_updater) return false;
      var sel_version = '3.9.0';
      if (process.platform.indexOf('mac') >= 0 || process.platform.indexOf('darw') >= 0) sel_version = '3.141.59';
      var sel_version = '3.141.59';
      var drivers = {
        chrome: {
          version: '2.41',
          arch: process.arch,
          baseURL: 'https://chromedriver.storage.googleapis.com'
        }
      };
      var startOptions = {
        baseURL: 'https://selenium-release.storage.googleapis.com',
        version: sel_version,
        drivers: drivers,
        seleniumArgs: [],
        spawnOptions: {
          stdio: 'inherit'
        }
      };
      var starterer = function (y) {
        selenium.start(startOptions, function (err, child) {
          if (err) alert('SELENIUM ERR: ' + err);
          check_selenium = true;
        });
      };
      selenium.install({
        version: sel_version,
        baseURL: 'https://selenium-release.storage.googleapis.com',
        drivers: drivers
      }, starterer);
    }

    var last_pars_data = [];
    var fat_get_proxy_agent = false;
    var fat_proxy_enable = false;
    var fat_get_proxy_agen_type = false;

    function get_proxy_agent() {
      var socks_agent = require('socks-proxy-agent');
      var http_agent = require('https-proxy-agent');
      var proxys = false;
      if (fat_proxy_enable == 'false') return false;
      if (process.env.proxys) {
        proxys = JSON.parse(process.env.proxys);
      } else {
        if (fat_get_proxy_agent) {
          proxys = fat_get_proxy_agent;
        } else {
          logntiwpoer(fat_get_proxy_agent);
          proxys = store.get('proxys');
          fat_get_proxy_agent = proxys;
          setTimeout(() => {
            fat_get_proxy_agent = false;
          }, 10 * 1000);
        }
      }
      if (!proxys || proxys.length < 0) {
        fat_proxy_enable = 'false';
        setTimeout(() => {
          fat_proxy_enable = 'true';
        }, 5 * 1000);
        return false;
      }
      var type = 'http';
      if (process.env.proxy_type) {
        type = JSON.parse(process.env.proxy_type)
      } else {
        if (fat_get_proxy_agen_type) {
          type = fat_get_proxy_agen_type
        } else if (store.has('proxy_type')) {
          type = store.get('proxy_type');
          fat_get_proxy_agen_type = type;
          setTimeout(() => {
            fat_get_proxy_agen_type
          }, 10 * 1000);
        }
      }
      var proxy_agent = socks_agent;
      if (type == 'http') proxy_agent = http_agent;
      var agent = new proxy_agent(`${type}://${get_proxy()}`);
      return agent;
    }

    function get_proxy() {
      if (process.env.proxys) {
        proxys = JSON.parse(process.env.proxys);
      } else {
        proxys = store.get('proxys');
      }
      if (!proxys || proxys.length < 0) return false;
      var proxys = proxys;
      return proxys[Math.floor(Math.random() * proxys.length)];
    }

    function start_session(profile = false, token = false) {
      return new Promise(async (fun, st) => {
        if (!check_selenium) return fun({ type: false, err: 1 });
        var o = new chrome.Options();
        try {
          var defChromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
          if (fs.existsSync(defChromePath)) o.setChromeBinaryPath(defChromePath)
        } catch (err) { }
        if (token) {
          create_tokens_extension(token).then(async extension => {
            if (!extension.type) return fin({ type: false, err: 23401 });
            o.addExtensions(extension.extension);
            var driverer = await new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').setChromeOptions(o).build();
            Start_session = true;
            global_driver = driverer;
            driverer.manage().window().maximize();
            return fun({
              type: true,
              driver: driverer
            });
          })
        } else {
          var driverer = await new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').setChromeOptions(o).build();
          Start_session = true;
          global_driver = driverer;
          driverer.manage().window().maximize();
          return fun({
            type: true,
            driver: driverer
          });
        }
      });
    }

    function res_cap(key, url, apikey) {
      return new Promise((fin, fal) => {
        if (!key) return fin({ type: false });
        var params = {
          method: 'GET',
          url: `https://rucaptcha.com/in.php?key=${apikey}&method=userrecaptcha&googlekey=${key}&pageurl=${url}&json=1`
        };
        req(params, (err, response, body) => {
          //alert(body);
          if (err || !response || response.statusCode != 200 || !body) return fin({ type: false });
          body = JSON.parse(body);
          if (body.status != 1) return fin({ type: false });
          var id = body.request;
          var i = 0;
          var timer = setInterval(() => {
            if (i > 10) {
              clearInterval(timer);
              return fin({ type: false });
            }
            var params = {
              method: 'GET',
              url: `https://rucaptcha.com/res.php?key=${apikey}&action=get&id=${id}&json=1`
            };
            req(params, (err, response, body) => {
              //alert(body);
              logntiwpoer('body: ' + body);
              i++;
              if (err || !response || response.statusCode != 200 || !body) {
                clearInterval(timer);
                return fin({ type: false });
              }
              body = JSON.parse(body);
              if (body.request == 'ERROR_KEY_DOES_NOT_EXIST' || body.request == 'ERROR_WRONG_USER_KEY') {
                clearInterval(timer);
                return fin({ type: 'wrong_key' });
              }
              if (body.request == 'ERROR_ZERO_BALANCE') {
                clearInterval(timer);
                return fin({ type: 'balance' });
              }
              if (body.request == 'ERROR_BAD_TOKEN_OR_PAGEURL' || body.request == 'ERROR_GOOGLEKEY') {
                clearInterval(timer);
                return fin({ type: 'wrong_data_key' });
              }

              if (body.request == 'CAPCHA_NOT_READY' || body.status != 1) return false;
              clearInterval(timer);
              var token = body.request;
              return fin({ type: true, token: token });
            });
          }, 7.5 * 1000);
        });
      });
    }

    function login_discord(login, password, driverr = false, rucap = false, token = false, url = false) {
      return new Promise((fin, fal) => {
        if (!driverr) {
          start_session(sha1(login), token).then((check) => {
            if (!check.type) return fin({ type: false, err: 1 });
            driverr = check.driver;
            var driver = driverr;
            if (token && url) {
              get_url(url, driverr);
              return fin({ type: true });
            }
            get_url(consts.urls.login_discord, driverr).then((check) => {
              if (!check) return fin({ type: false, err: 2 });
              setTimeout(() => {
                setTimeout(() => {
                  get_now_url(driverr).then((check) => {
                    if (!check.type) return fin({ type: false, err: 30 });
                    if (check.url.indexOf('/app') >= 0 || check.url.indexOf('/activi') >= 0) {
                      logntiwpoer('e3');
                      return fin({ type: true });
                    }
                    var email = driver.findElement(By.css('input[type="email"]'));
                    var pass = driver.findElement(By.css('input[type="password"]'));
                    setTimeout(() => {
                      email.sendKeys(login);
                      setTimeout(() => {
                        pass.sendKeys(password);
                        setTimeout(() => {
                          pass.sendKeys(Key.RETURN);
                          setTimeout(() => {
                            driver.wait(until.elementLocated(By.css('.g-recaptcha')), 10 * 1000).then(() => {
                              logntiwpoer('THEN');
                              if (rucap) {
                                noty('warning', translater(translate.noty.selenium.captcha_work));
                                driver.wait(until.elementLocated(By.css('.g-recaptcha iframe')), 15 * 1000).getAttribute('src').then((cap) => {
                                  var data_key = cap.substr(cap.indexOf('k=') + 2, cap.indexOf('&co') - 52);
                                  res_cap(data_key, consts.urls.login_discord, rucap).then((check) => {
                                    //alert('check: '+JSON.stringify(check));
                                    if (check.type == 'wrong_key') {
                                      noty('error', translater(translate.noty.accounts.rucaptcha_wrong));
                                      return fin({ type: false });
                                    } else if (check.type == 'balance') {
                                      noty('error', translater(translate.noty.accounts.rucaptcha_balance));
                                      return fin({ type: false });
                                    } else if (check.type == 'wrong_data_key') {
                                      noty('error', translater(translate.noty.selenium.captcha_error));
                                      return fin({ type: false, err: 'captcha_1' });
                                    } else if (!check.type) {
                                      noty('error', translater(translate.noty.selenium.captcha_error));
                                      return fin({ type: false, err: 'captcha_1' });
                                    }
                                    var token = check.token;
                                    driver.executeScript(`document.querySelector('textarea[name="g-recaptcha-response"]').value = '${token}'`).then(() => {
                                      setTimeout(() => {
                                        get_callback_function_grecap(driver).then((call) => {
                                          if (!call.type) return fin({ tupe: false, err: 'captcha_5' });
                                          call = call.code;
                                          driver.executeScript(`${call}('${token}');`).then(() => {
                                            setTimeout(() => {
                                              driver.wait(until.elementLocated(By.css('form .block-egJnc0 h5 span')), 3.5 * 1000).getAttribute('innerHTML').then((html) => {
                                                if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                return fin({ type: false });
                                              }).catch(() => {
                                                get_now_url().then((check) => {
                                                  if (!check.type) return fin({ type: false, err: 4 });
                                                  var u = check.url;
                                                  if (u != consts.urls.login_discord && u != consts.urls.register_discord) {
                                                    check_first_modal_dis(driver).then(() => {
                                                      return fin({ type: true });
                                                    });
                                                    driver.wait(until.elementLocated(By.css('foreignObject .wrapper-1BJsBx')), 15 * 1000).then(() => {
                                                      return fin({ type: true });
                                                    }).catch(() => {
                                                      return fin({ type: false });
                                                    });
                                                  }
                                                }).catch(() => {
                                                  noty('error', translater(translate.noty.selenium.captcha_error));
                                                  return fin({ type: false, err: 'captcha_2' });
                                                });
                                              });
                                            }, 500);
                                          }).catch(() => {
                                            noty('error', translater(translate.noty.selenium.captcha_error));
                                            return fin({ type: false, err: 'captcha_2' });
                                          })
                                        }).catch((r) => {
                                          logntiwpoer('r: ' + r);
                                          return fin({ tupe: false, err: 'captcha_6' });
                                        })
                                      }, 100);
                                    })
                                  }).catch(() => {
                                    noty('error', translater(translate.noty.selenium.captcha_error) + 'ss');
                                    return fin({ type: false, err: 'captcha_1' });
                                  });
                                }).catch((s) => {
                                  noty('error', translater(translate.noty.selenium.captcha_error));
                                  return fin({ type: false, err: 'captcha_1' });
                                });
                              } else {
                                //clearInterval(int);
                                noty('warning', translater(translate.noty.selenium.captcha));
                                get_now_url(driverr).then((check) => {
                                  if (!check.type) return fin({ type: false, err: 3 });
                                  var u = check.url;
                                  var i = 1;
                                  var check_noty = false;
                                  driverr.wait(until.urlContains('/activity'), 7 * 1000).then(() => {
                                    get_now_url(driverr).then((check) => {
                                      if (!check.type) return fin({ type: false, err: 4 });
                                      u = check.url;
                                      if (u != consts.urls.login_discord && u != consts.urls.register_discord) {
                                        clearInterval(inter);
                                        driver.wait(until.elementLocated(By.css('foreignObject .wrapper-1BJsBx')), 15 * 1000).then(() => {
                                          return fin({ type: true });
                                        }).catch(() => {
                                          return fin({ type: false });
                                        });
                                      } else {
                                        driver.executeScript(function () {
                                          return document.querySelector('.inputWrapper-31_8H8 input').getAttribute('placeholder');
                                        }).then((coder) => {
                                          if (coder != '' && check_noty) {
                                            if (coder.indexOf('code') || coder.indexOf('код') || coder.indexOf('6-')) {
                                              check_noty = true;
                                              return noty('warning', translater(translate.noty.selenium.enter_2fa_dis), 10000);
                                            }
                                          }
                                          driver.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                            if (elems.length > 0) {
                                              driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                                if (classes.indexOf('errorMessage') >= 0) {
                                                  driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                    if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                    setTimeout(() => {
                                                      var e = driver.findElement(By.css('input[type="email"]'));
                                                      if (e) {
                                                        e.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'email' });
                                                          }
                                                        });
                                                      }
                                                      var p = driver.findElement(By.css('input[type="password"]'));
                                                      if (p) {
                                                        p.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'password' });
                                                          }
                                                        });
                                                      }
                                                    }, 1000);
                                                  }).catch(() => {
                                                    setTimeout(() => {
                                                      var e = driver.findElement(By.css('input[type="email"]'));
                                                      if (e) {
                                                        e.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'email' });
                                                          }
                                                        });
                                                      }
                                                      var p = driver.findElement(By.css('input[type="password"]'));
                                                      if (p) {
                                                        p.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'password' });
                                                          }
                                                        });
                                                      }
                                                    }, 1000);
                                                  })
                                                  return false;
                                                }
                                                setTimeout(() => {
                                                  var e = driver.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driver.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              });
                                              return false;
                                            }
                                            setTimeout(() => {
                                              var e = driver.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driver.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          }).catch(() => {
                                            setTimeout(() => {
                                              var e = driver.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driver.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          });
                                        }).catch(() => {
                                          driver.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                            if (elems.length > 0) {
                                              driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                                if (classes.indexOf('errorMessage') >= 0) {
                                                  driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                    if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                    setTimeout(() => {
                                                      var e = driver.findElement(By.css('input[type="email"]'));
                                                      if (e) {
                                                        e.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'email' });
                                                          }
                                                        });
                                                      }
                                                      var p = driver.findElement(By.css('input[type="password"]'));
                                                      if (p) {
                                                        p.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'password' });
                                                          }
                                                        });
                                                      }
                                                    }, 1000);
                                                  }).catch(() => {
                                                    setTimeout(() => {
                                                      var e = driver.findElement(By.css('input[type="email"]'));
                                                      if (e) {
                                                        e.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'email' });
                                                          }
                                                        });
                                                      }
                                                      var p = driver.findElement(By.css('input[type="password"]'));
                                                      if (p) {
                                                        p.getAttribute('class').then((attr) => {
                                                          if (attr && attr.indexOf('rror') >= 0) {
                                                            clearInterval(inter);
                                                            return fin({ type: false, err: 'password' });
                                                          }
                                                        });
                                                      }
                                                    }, 1000);
                                                  })
                                                  return false;
                                                }
                                                setTimeout(() => {
                                                  var e = driver.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driver.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              });
                                              return false;
                                            }
                                            setTimeout(() => {
                                              var e = driver.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driver.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          }).catch(() => {
                                            setTimeout(() => {
                                              var e = driver.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driver.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          });
                                        });
                                      }
                                    });
                                  }).catch(() => {
                                    return fin({ type: false });
                                  });
                                });
                              }
                            }).catch(() => {
                              logntiwpoer('CATTTT');
                              driverr.wait(until.urlContains('/activi'), 7 * 1000).then(() => {
                                get_now_url(driverr).then((check) => {
                                  if (!check.type) return fin({ type: false, err: 4 });
                                  u = check.url;
                                  if (u != consts.urls.login_discord && u != consts.urls.register_discord) {
                                    var cou = 0;
                                    var check_noty = false;
                                    var er = setInterval(() => {
                                      cou++;
                                      if (cou > 20) {
                                        clearInterval(er);
                                        return fin({ type: false });
                                      }
                                      driver.executeScript(function () {
                                        return document.querySelector('.inputWrapper-31_8H8 input').getAttribute('placeholder');
                                      }).then((coder) => {
                                        if (coder != '' && check_noty) {
                                          if (coder.indexOf('code') || coder.indexOf('код') || coder.indexOf('6-')) {
                                            check_noty = true;
                                            return noty('warning', translater(translate.noty.selenium.enter_2fa_dis), 10000);
                                          }
                                        }
                                        driver.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                          if (elems.length > 0) {
                                            driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                              if (classes.indexOf('errorMessage') >= 0) {
                                                driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                  if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                  get_now_url(driverr).then((check) => {
                                                    if (check.url.indexOf('app.com/activity') >= 0) {
                                                      clearInterval(er);
                                                      check_first_modal_dis(driverr).then(() => {
                                                        return fin({ type: true });
                                                      });
                                                    }
                                                  });
                                                }).catch(() => {
                                                  get_now_url(driverr).then((check) => {
                                                    if (check.url.indexOf('app.com/activity') >= 0) {
                                                      clearInterval(er);
                                                      check_first_modal_dis(driverr).then(() => {
                                                        return fin({ type: true });
                                                      });
                                                    }
                                                  });
                                                });
                                              }
                                            }).catch(() => {
                                              get_now_url(driverr).then((check) => {
                                                if (check.url.indexOf('app.com/activity') >= 0) {
                                                  clearInterval(er);
                                                  check_first_modal_dis(driverr).then(() => {
                                                    return fin({ type: true });
                                                  });
                                                }
                                              });
                                            });
                                          }
                                        }).catch(() => {
                                          get_now_url(driverr).then((check) => {
                                            if (check.url.indexOf('app.com/activity') >= 0) {
                                              clearInterval(er);
                                              check_first_modal_dis(driverr).then(() => {
                                                return fin({ type: true });
                                              });
                                            }
                                          });
                                        });
                                      }).catch(() => {
                                        get_now_url(driverr).then((check) => {
                                          if (check.url.indexOf('app.com/activity') >= 0) {
                                            clearInterval(er);
                                            check_first_modal_dis(driverr).then(() => {
                                              return fin({ type: true });
                                            });
                                          }
                                        });
                                      });
                                    }, randomInteger(950, 1150));
                                  } else {
                                    driver.executeScript(function () {
                                      return document.querySelector('.inputWrapper-31_8H8 input').getAttribute('placeholder');
                                    }).then((coder) => {
                                      if (coder != '') if (coder.indexOf('code') || coder.indexOf('код') || coder.indexOf('6-')) noty('warning', translater(translate.noty.selenium.enter_2fa_dis), 10000);
                                      driver.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                        if (elems.length > 0) {
                                          driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                            if (classes.indexOf('errorMessage') >= 0) {
                                              driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                setTimeout(() => {
                                                  var e = driver.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driver.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              }).catch(() => {
                                                setTimeout(() => {
                                                  var e = driver.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driver.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              })
                                              return false;
                                            }
                                            setTimeout(() => {
                                              var e = driver.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driver.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          });
                                          return false;
                                        }
                                        setTimeout(() => {
                                          var e = driver.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driver.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      }).catch(() => {
                                        setTimeout(() => {
                                          var e = driver.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driver.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      });
                                    }).catch(() => {
                                      driver.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                        if (elems.length > 0) {
                                          driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                            if (classes.indexOf('errorMessage') >= 0) {
                                              driver.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                setTimeout(() => {
                                                  var e = driver.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driver.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              }).catch(() => {
                                                setTimeout(() => {
                                                  var e = driver.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driver.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              })
                                              return false;
                                            }
                                            setTimeout(() => {
                                              var e = driver.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driver.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          });
                                          return false;
                                        }
                                        setTimeout(() => {
                                          var e = driver.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driver.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      }).catch(() => {
                                        setTimeout(() => {
                                          var e = driver.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driver.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      });
                                    });
                                  }
                                });
                              }).catch(() => {
                                return fin({ type: false });
                              })
                            });
                          }, 500);
                        }, 1000);
                      }, 1000);
                    }, 500);
                  })
                }, 1000);
              }, 500)
            });
          });
        } else {
          var driver = driverr;
          get_url(consts.urls.login_discord, driverr).then((check) => {
            if (!check) {
              logntiwpoer('SSS!');
              return fin({ type: false, err: 2 });
            }
            driverr.wait(until.urlContains('.com/app'), 10 * 1000).then(() => {
              setTimeout(() => {
                return fin({ type: true });
              }, 1500);
            }).catch(() => {
              var email = driverr.findElement(By.css('input[type="email"]'));
              var pass = driverr.findElement(By.css('input[type="password"]'));
              logntiwpoer('SSS!');
              setTimeout(() => {
                logntiwpoer('SSS!');
                email.sendKeys(login);
                setTimeout(() => {
                  logntiwpoer('SSS!');
                  driverr.findElement(By.css('input[type="password"]')).sendKeys(password).then(() => {
                    setTimeout(() => {
                      logntiwpoer('SSS!');
                      pass.sendKeys(Key.RETURN);
                      setTimeout(() => {
                        driverr.wait(until.elementLocated(By.css('.g-recaptcha')), 10 * 1000).then(() => {
                          logntiwpoer('THEN');
                          if (rucap) {
                            noty('warning', translater(translate.noty.selenium.captcha_work));
                            driverr.wait(until.elementLocated(By.css('.g-recaptcha iframe')), 15 * 1000).getAttribute('src').then((cap) => {
                              var data_key = cap.substr(cap.indexOf('k=') + 2, cap.indexOf('&co') - 52);
                              res_cap(data_key, consts.urls.login_discord, rucap).then((check) => {
                                if (check.type == 'wrong_key') {
                                  noty('error', translater(translate.noty.accounts.rucaptcha_wrong));
                                  return fin({ type: false });
                                } else if (check.type == 'balance') {
                                  noty('error', translater(translate.noty.accounts.rucaptcha_balance));
                                  return fin({ type: false });
                                } else if (check.type == 'wrong_data_key') {
                                  noty('error', translater(translate.noty.selenium.captcha_error));
                                  return fin({ type: false, err: 'captcha_1' });
                                } else if (!check.type) {
                                  noty('error', translater(translate.noty.selenium.captcha_error));
                                  return fin({ type: false, err: 'captcha_1' });
                                }
                                var token = check.token;
                                driverr.executeScript(`document.querySelector('textarea[name="g-recaptcha-response"]').value = '${token}'`).then(() => {
                                  setTimeout(() => {
                                    get_callback_function_grecap(driverr).then((call) => {
                                      if (!call.type) return fin({ type: false, err: 'captcha_5' });
                                      call = call.code;
                                      driverr.executeScript(`${call}('${token}');`).then(() => {
                                        setTimeout(() => {
                                          driverr.wait(until.elementLocated(By.css('form .block-egJnc0 h5 span')), 3.5 * 1000).getAttribute('innerHTML').then((html) => {
                                            if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                            return fin({ type: false });
                                          }).catch(() => {
                                            get_now_url().then((check) => {
                                              if (!check.type) return fin({ type: false, err: 4 });
                                              var u = check.url;
                                              if (u != consts.urls.login_discord && u != consts.urls.register_discord) {
                                                check_first_modal_dis(driverr).then(() => {
                                                  return fin({ type: true });
                                                });
                                                driverr.wait(until.elementLocated(By.css('foreignObject .wrapper-1BJsBx')), 7.5 * 1000).then(() => {
                                                  return fin({ type: true });
                                                }).catch(() => {
                                                  return fin({ type: false });
                                                });
                                              }
                                            }).catch(() => {
                                              noty('error', translater(translate.noty.selenium.captcha_error));
                                              return fin({ type: false, err: 'captcha_2' });
                                            });
                                          });
                                        }, 500);
                                      }).catch(() => {
                                        noty('error', translater(translate.noty.selenium.captcha_error));
                                        return fin({ type: false, err: 'captcha_2' });
                                      })
                                    }).catch((r) => {
                                      logntiwpoer('r: ' + r);
                                      return fin({ type: false, err: 'captcha_6' });
                                    })
                                  }, 100);
                                })
                              }).catch(() => {
                                noty('error', translater(translate.noty.selenium.captcha_error) + 'ss');
                                return fin({ type: false, err: 'captcha_1' });
                              });
                            }).catch((s) => {
                              noty('error', translater(translate.noty.selenium.captcha_error));
                              return fin({ type: false, err: 'captcha_1' });
                            });
                          } else {
                            //clearInterval(int);
                            noty('warning', translater(translate.noty.selenium.captcha));
                            get_now_url(driverr).then((check) => {
                              if (!check.type) return fin({ type: false, err: 3 });
                              var u = check.url;
                              var i = 1;
                              var check_noty = false;
                              var inter = setInterval(function () {
                                if (i > 350) {
                                  clearInterval(inter);
                                  return fin({ type: false });
                                }
                                get_now_url(driverr).then((check) => {
                                  if (!check.type) return fin({ type: false, err: 4 });
                                  u = check.url;
                                  if (u != consts.urls.login_discord && u != consts.urls.register_discord) {
                                    clearInterval(inter);
                                    driverr.wait(until.elementLocated(By.css('foreignObject .wrapper-1BJsBx')), 7.5 * 1000).then(() => {
                                      return fin({ type: true });
                                    }).catch(() => {
                                      return fin({ type: false });
                                    });
                                  } else {
                                    driverr.executeScript(function () {
                                      return document.querySelector('.inputWrapper-31_8H8 input').getAttribute('placeholder');
                                    }).then((coder) => {
                                      if (coder != '' && check_noty) {
                                        if (coder.indexOf('code') || coder.indexOf('код') || coder.indexOf('6-')) {
                                          check_noty = true;
                                          return noty('warning', translater(translate.noty.selenium.enter_2fa_dis), 10000);
                                        }
                                      }
                                      driverr.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                        if (elems.length > 0) {
                                          driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                            if (classes.indexOf('errorMessage') >= 0) {
                                              driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                setTimeout(() => {
                                                  var e = driverr.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driverr.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              }).catch(() => {
                                                setTimeout(() => {
                                                  var e = driverr.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driverr.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              })
                                              return false;
                                            }
                                            setTimeout(() => {
                                              var e = driverr.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driverr.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          });
                                          return false;
                                        }
                                        setTimeout(() => {
                                          var e = driverr.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driverr.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      }).catch(() => {
                                        setTimeout(() => {
                                          var e = driverr.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driverr.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      });
                                    }).catch(() => {
                                      driverr.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                        if (elems.length > 0) {
                                          driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                            if (classes.indexOf('errorMessage') >= 0) {
                                              driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                setTimeout(() => {
                                                  var e = driverr.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driverr.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              }).catch(() => {
                                                setTimeout(() => {
                                                  var e = driverr.findElement(By.css('input[type="email"]'));
                                                  if (e) {
                                                    e.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'email' });
                                                      }
                                                    });
                                                  }
                                                  var p = driverr.findElement(By.css('input[type="password"]'));
                                                  if (p) {
                                                    p.getAttribute('class').then((attr) => {
                                                      if (attr && attr.indexOf('rror') >= 0) {
                                                        clearInterval(inter);
                                                        return fin({ type: false, err: 'password' });
                                                      }
                                                    });
                                                  }
                                                }, 1000);
                                              })
                                              return false;
                                            }
                                            setTimeout(() => {
                                              var e = driverr.findElement(By.css('input[type="email"]'));
                                              if (e) {
                                                e.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'email' });
                                                  }
                                                });
                                              }
                                              var p = driverr.findElement(By.css('input[type="password"]'));
                                              if (p) {
                                                p.getAttribute('class').then((attr) => {
                                                  if (attr && attr.indexOf('rror') >= 0) {
                                                    clearInterval(inter);
                                                    return fin({ type: false, err: 'password' });
                                                  }
                                                });
                                              }
                                            }, 1000);
                                          });
                                          return false;
                                        }
                                        setTimeout(() => {
                                          var e = driverr.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driverr.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      }).catch(() => {
                                        setTimeout(() => {
                                          var e = driverr.findElement(By.css('input[type="email"]'));
                                          if (e) {
                                            e.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'email' });
                                              }
                                            });
                                          }
                                          var p = driverr.findElement(By.css('input[type="password"]'));
                                          if (p) {
                                            p.getAttribute('class').then((attr) => {
                                              if (attr && attr.indexOf('rror') >= 0) {
                                                clearInterval(inter);
                                                return fin({ type: false, err: 'password' });
                                              }
                                            });
                                          }
                                        }, 1000);
                                      });
                                    });
                                  }
                                  i++;
                                });
                              }, randomInteger(800, 1100));
                            });
                          }
                        }).catch(() => {
                          logntiwpoer('CATTTT');
                          get_now_url(driverr).then((check) => {
                            if (!check.type) return fin({ type: false, err: 3 });
                            var u = check.url;
                            var i = 1;
                            var inter = setInterval(function () {
                              if (i > 90) {
                                clearInterval(inter);
                                return fin({ type: false });
                              }
                              get_now_url(driverr).then((check) => {
                                if (!check.type) return fin({ type: false, err: 4 });
                                u = check.url;
                                if (u != consts.urls.login_discord && u != consts.urls.register_discord) {
                                  clearInterval(inter);
                                  var cou = 0;
                                  var check_noty = false;
                                  var er = setInterval(() => {
                                    cou++;
                                    if (cou > 20) {
                                      clearInterval(er);
                                      return fin({ type: false });
                                    }
                                    driverr.executeScript(function () {
                                      return document.querySelector('.inputWrapper-31_8H8 input').getAttribute('placeholder');
                                    }).then((coder) => {
                                      if (coder != '' && check_noty) {
                                        if (coder.indexOf('code') || coder.indexOf('код') || coder.indexOf('6-')) {
                                          check_noty = true;
                                          return noty('warning', translater(translate.noty.selenium.enter_2fa_dis), 10000);
                                        }
                                      }
                                      driverr.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                        if (elems.length > 0) {
                                          driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                            if (classes.indexOf('errorMessage') >= 0) {
                                              driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                                if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                                get_now_url(driverr).then((check) => {
                                                  if (check.url.indexOf('app.com/activity') >= 0) {
                                                    clearInterval(er);
                                                    check_first_modal_dis(driverr).then(() => {
                                                      return fin({ type: true });
                                                    });
                                                  }
                                                });
                                              }).catch(() => {
                                                get_now_url(driverr).then((check) => {
                                                  if (check.url.indexOf('app.com/activity') >= 0) {
                                                    clearInterval(er);
                                                    check_first_modal_dis(driverr).then(() => {
                                                      return fin({ type: true });
                                                    });
                                                  }
                                                });
                                              });
                                            }
                                          }).catch(() => {
                                            get_now_url(driverr).then((check) => {
                                              if (check.url.indexOf('app.com/activity') >= 0) {
                                                clearInterval(er);
                                                check_first_modal_dis(driverr).then(() => {
                                                  return fin({ type: true });
                                                });
                                              }
                                            });
                                          });
                                        }
                                      }).catch(() => {
                                        get_now_url(driverr).then((check) => {
                                          if (check.url.indexOf('app.com/activity') >= 0) {
                                            clearInterval(er);
                                            check_first_modal_dis(driverr).then(() => {
                                              return fin({ type: true });
                                            });
                                          }
                                        });
                                      });
                                    }).catch(() => {
                                      get_now_url(driverr).then((check) => {
                                        if (check.url.indexOf('app.com/activity') >= 0) {
                                          clearInterval(er);
                                          check_first_modal_dis(driverr).then(() => {
                                            return fin({ type: true });
                                          });
                                        }
                                      });
                                    });
                                  }, randomInteger(950, 1150));
                                } else {
                                  driverr.executeScript(function () {
                                    return document.querySelector('.inputWrapper-31_8H8 input').getAttribute('placeholder');
                                  }).then((coder) => {
                                    if (coder != '') if (coder.indexOf('code') || coder.indexOf('код') || coder.indexOf('6-')) noty('warning', translater(translate.noty.selenium.enter_2fa_dis), 10000);
                                    driverr.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                      if (elems.length > 0) {
                                        driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                          if (classes.indexOf('errorMessage') >= 0) {
                                            driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                              if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                              setTimeout(() => {
                                                var e = driverr.findElement(By.css('input[type="email"]'));
                                                if (e) {
                                                  e.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'email' });
                                                    }
                                                  });
                                                }
                                                var p = driverr.findElement(By.css('input[type="password"]'));
                                                if (p) {
                                                  p.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'password' });
                                                    }
                                                  });
                                                }
                                              }, 1000);
                                            }).catch(() => {
                                              setTimeout(() => {
                                                var e = driverr.findElement(By.css('input[type="email"]'));
                                                if (e) {
                                                  e.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'email' });
                                                    }
                                                  });
                                                }
                                                var p = driverr.findElement(By.css('input[type="password"]'));
                                                if (p) {
                                                  p.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'password' });
                                                    }
                                                  });
                                                }
                                              }, 1000);
                                            })
                                            return false;
                                          }
                                          setTimeout(() => {
                                            var e = driverr.findElement(By.css('input[type="email"]'));
                                            if (e) {
                                              e.getAttribute('class').then((attr) => {
                                                if (attr && attr.indexOf('rror') >= 0) {
                                                  clearInterval(inter);
                                                  return fin({ type: false, err: 'email' });
                                                }
                                              });
                                            }
                                            var p = driverr.findElement(By.css('input[type="password"]'));
                                            if (p) {
                                              p.getAttribute('class').then((attr) => {
                                                if (attr && attr.indexOf('rror') >= 0) {
                                                  clearInterval(inter);
                                                  return fin({ type: false, err: 'password' });
                                                }
                                              });
                                            }
                                          }, 1000);
                                        });
                                        return false;
                                      }
                                      setTimeout(() => {
                                        var e = driverr.findElement(By.css('input[type="email"]'));
                                        if (e) {
                                          e.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'email' });
                                            }
                                          });
                                        }
                                        var p = driverr.findElement(By.css('input[type="password"]'));
                                        if (p) {
                                          p.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'password' });
                                            }
                                          });
                                        }
                                      }, 1000);
                                    }).catch(() => {
                                      setTimeout(() => {
                                        var e = driverr.findElement(By.css('input[type="email"]'));
                                        if (e) {
                                          e.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'email' });
                                            }
                                          });
                                        }
                                        var p = driverr.findElement(By.css('input[type="password"]'));
                                        if (p) {
                                          p.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'password' });
                                            }
                                          });
                                        }
                                      }, 1000);
                                    });
                                  }).catch(() => {
                                    driverr.findElements(By.css('form .block-egJnc0 h5 span')).then((elems) => {
                                      if (elems.length > 0) {
                                        driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('class').then((classes) => {
                                          if (classes.indexOf('errorMessage') >= 0) {
                                            driverr.findElement(By.css('form .block-egJnc0 h5 span')).getAttribute('innerHTML').then((html) => {
                                              if (html.indexOf('новое место') >= 0 || html.indexOf('new ') >= 0 || html.indexOf('нове міс') >= 0) return fin({ type: false, err: 'new_place' });
                                              setTimeout(() => {
                                                var e = driverr.findElement(By.css('input[type="email"]'));
                                                if (e) {
                                                  e.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'email' });
                                                    }
                                                  });
                                                }
                                                var p = driverr.findElement(By.css('input[type="password"]'));
                                                if (p) {
                                                  p.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'password' });
                                                    }
                                                  });
                                                }
                                              }, 1000);
                                            }).catch(() => {
                                              setTimeout(() => {
                                                var e = driverr.findElement(By.css('input[type="email"]'));
                                                if (e) {
                                                  e.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'email' });
                                                    }
                                                  });
                                                }
                                                var p = driverr.findElement(By.css('input[type="password"]'));
                                                if (p) {
                                                  p.getAttribute('class').then((attr) => {
                                                    if (attr && attr.indexOf('rror') >= 0) {
                                                      clearInterval(inter);
                                                      return fin({ type: false, err: 'password' });
                                                    }
                                                  });
                                                }
                                              }, 1000);
                                            })
                                            return false;
                                          }
                                          setTimeout(() => {
                                            var e = driverr.findElement(By.css('input[type="email"]'));
                                            if (e) {
                                              e.getAttribute('class').then((attr) => {
                                                if (attr && attr.indexOf('rror') >= 0) {
                                                  clearInterval(inter);
                                                  return fin({ type: false, err: 'email' });
                                                }
                                              });
                                            }
                                            var p = driverr.findElement(By.css('input[type="password"]'));
                                            if (p) {
                                              p.getAttribute('class').then((attr) => {
                                                if (attr && attr.indexOf('rror') >= 0) {
                                                  clearInterval(inter);
                                                  return fin({ type: false, err: 'password' });
                                                }
                                              });
                                            }
                                          }, 1000);
                                        });
                                        return false;
                                      }
                                      setTimeout(() => {
                                        var e = driverr.findElement(By.css('input[type="email"]'));
                                        if (e) {
                                          e.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'email' });
                                            }
                                          });
                                        }
                                        var p = driverr.findElement(By.css('input[type="password"]'));
                                        if (p) {
                                          p.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'password' });
                                            }
                                          });
                                        }
                                      }, 1000);
                                    }).catch(() => {
                                      setTimeout(() => {
                                        var e = driverr.findElement(By.css('input[type="email"]'));
                                        if (e) {
                                          e.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'email' });
                                            }
                                          });
                                        }
                                        var p = driverr.findElement(By.css('input[type="password"]'));
                                        if (p) {
                                          p.getAttribute('class').then((attr) => {
                                            if (attr && attr.indexOf('rror') >= 0) {
                                              clearInterval(inter);
                                              return fin({ type: false, err: 'password' });
                                            }
                                          });
                                        }
                                      }, 1000);
                                    });
                                  });
                                }
                                i++;
                              });
                            }, randomInteger(950, 1150));
                          });
                        });
                      }, 500);
                    }, 500);
                  }).catch(() => {
                    return fin({ type: false });
                  })
                }, 1000);
              }, 1500);
            });
          });
        }
      });
    }

    $('body').on('click', '.wibro', function () {
      var t = $(this);
      t.addClass('act');
      setTimeout(() => {
        t.removeClass('act');
      }, 200);
    });

    function get_url(u, driverr = false) {
      return new Promise((fin, fal) => {
        if (!driverr) {
          global_driver.get(u).then(() => {
            return fin(true);
          }).catch((e) => {
            alert('ERR_12: ' + e)
            return fin(false);
          });
        } else {
          driverr.get(u).then(() => {
            return fin(true);
          }).catch((e) => {
            alert('ERR_1: ' + e)
            return fin(false);
          });
        }
      });
    }

    $('body').on('change', '#modal-settings .form[for="profile"] input[type="file"]', function () {
      var that = $(this);
      var path = this.files[0].path;
      if (!path) return noty('error', pop_error);
      var file = path + `/${sha1(new Date().getTime())}`;
      fs.writeFile(file, '', function (err) {
        that.val('');
        if (err) return noty('error', translater(translate.noty.other.dont_get_dir));
        fs.unlinkSync(file);
        store.set('dir_for_profiles', path);
        $('#modal-settings .form[for="profile"] label').css('opacity', '0');
        setTimeout(() => {
          $('#modal-settings .form[for="profile"] label span').html('Изменить папку');
          setTimeout(() => {
            $('#modal-settings .form[for="profile"] label').css('opacity', '');
            $('#dir-for-save-profiles').html(store.get('dir_for_profiles'));
            $('#dir-for-save-profiles').addClass('active');
          }, 50);
        }, 200);
      });
    });

    $('body').on('change', '#modal-settings .form[for="proxy"] input[type="file"]', function () {
      var that = $(this);
      var type = this.files[0];
      if (!type.type || type.type.indexOf('text') < 0) return noty('error', translater(translate.noty.dis.wrong_type_file));
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#modal-settings .form[for="proxy"] input[type="file"]').val('');
        var data = reader.result.substr(reader.result.indexOf('base64,') + 7);
        data = Buffer(data, 'base64').toString();
        var proxys = explode('\n', data);
        if (!proxys) return noty('error', translater(translate.noty.other.dont_get_proxy_from_file));
        if (proxys.length < 1) return noty('error', translater(translate.noty.other.little_count_proxy));
        var proxy = [];
        proxys.forEach((e, ind, arr) => {
          e = e.replace('\n', '');
          e = e.replace('\r', '');
          e = e.replace(' \n', '');
          e = e.replace(' \r', '');
          e = e.replace(' ', '');
          e = e.replace('http://', '');
          e = e.replace('https://', '');
          if (e.indexOf(':') >= 0 && proxy.indexOf(e) < 0 && e != '' && e != '\n') proxy.push(e);
          if (ind == arr.length - 1) {
            if (proxy.length < 1) return noty('error', translater(translate.noty.other.little_count_proxy));
            fat_get_proxy_agen_type = $('#select-type-proxy').val();
            setTimeout(() => {
              store.set('proxy_type', $('#select-type-proxy').val());
            }, 1000);
            process.env.proxys = JSON.stringify(proxy);
            process.env.proxy_type = JSON.stringify($('#select-type-proxy').val());
            store.set('proxys', proxy);
            fat_get_proxy_agent = proxy;
            fat_proxy_enable = 'true';
            var count = proxy.length;
            var btn = $('.form.hider[for="proxy"] label');
            btn.addClass('editer');
            btn.css('opacity', '0');
            setTimeout(() => {
              btn.find('span').html(translater(translate.noty.other.down_from_file));
              setTimeout(() => {
                btn.css('opacity', '');
                count = `${count} ${translater(translate.noty.other.proxy_namer)}`;
                $('#count-of-proxys').html(count);
                $('#count-of-proxys').addClass('active');
              }, 50);
            }, 200);
          }
        });
      };
      reader.readAsDataURL(this.files[0]);
    });

    $('body').on('change', '#enable_save_profiles', function () {
      if (!$(this).prop('checked')) {
        store.delete('dir_for_profiles');
        $('#modal-settings .form[for="profile"] label').css('opacity', '0');
        setTimeout(() => {
          $('#modal-settings .form[for="profile"] label span').html('Выбрать папку');
          setTimeout(() => {
            $('#modal-settings .form[for="profile"] label').css('opacity', '');
            $('#dir-for-save-profiles').html('');
            $('#dir-for-save-profiles').removeClass('active');
          }, 50);
        }, 200);
        return $('#modal-settings .form[for="profile"].hider[for="profile"]').removeClass('active');
      }
      $('#modal-settings .form[for="profile"].hider[for="profile"]').addClass('active');
    });

    $('body').on('change', '#enable_proxy', function () {
      if (!$(this).prop('checked')) {
        store.delete('proxys');
        process.env.proxys = false;
        process.env.proxy_type = false;
        $('#modal-settings .form[for="proxy"] label').css('opacity', '0');
        setTimeout(() => {
          $('#modal-settings .form[for="proxy"] label span').html(translater(translate.noty.other.down_from_file));
          setTimeout(() => {
            $('#modal-settings .form[for="proxy"] label').css('opacity', '');
            $('#count-of-proxys').html('');
            $('#count-of-proxys').removeClass('active');
          }, 50);
        }, 200);
        return $('#modal-settings .form[for="proxy"].hider[for="proxy"]').removeClass('active');
      }
      $('#modal-settings .form[for="proxy"].hider[for="proxy"]').addClass('active');
    })

    $('body').on('change', '#select-timeout', function () {
      var val = parseFloat($(this).val());
      setTimeout(() => {
        localStorage.setItem('select-timeout', JSON.stringify(val));
      }, 1000);
    });

    $('body').on('change', '#enable_timeout', function () {
      var val = $(this).prop('checked');
      if (val) {
        $('#modal-settings .form[for="timeout"].hider[for="timeout"]').addClass('active');
      } else {
        localStorage.removeItem('select-timeout')
        $('#modal-settings .form[for="timeout"].hider[for="timeout"]').removeClass('active');
      }
    });

    $('body').on('change', '#select-type-proxy', function () {
      var v = $(this).val();
      process.env.proxy_type = JSON.stringify(v);
      fat_get_proxy_agen_type = v;
      setTimeout(() => {
        store.set('proxy_type', v);
      }, 1000)
    });

    function open_settings() {
      $('.modal').modal('hide');
      // if (store.has('dir_for_profiles')) {
      //   $('#enable_save_profiles').prop('checked', true);
      //   $('#modal-settings .form[for="profile"] label span').html('Изменить папку');
      //   $('#dir-for-save-profiles').html(store.get('dir_for_profiles'));
      //   $('#dir-for-save-profiles').addClass('active');
      //   $('#modal-settings .form[for="profile"].hider[for="profile"]').addClass('active');
      // } else {
      //   $('#modal-settings .form[for="profile"] label span').html('Выбрать папку');
      //   $('#dir-for-save-profiles').html('');
      //   $('#modal-settings .form[for="profile"].hider[for="profile"]').removeClass('active');
      //   $('#dir-for-save-profiles').removeClass('active');
      //   $('#enable_save_profiles').prop('checked', false);
      // }
      if (store.has('proxys')) {
        $('#enable_proxy').prop('checked', true);
        $('#count-of-proxys').html(`${store.get('proxys').length} ${translater(translate.noty.other.proxy_namer)}`);
        $('#count-of-proxys').addClass('active');
        $('#modal-settings .form[for="proxy"].hider[for="proxy"]').addClass('active');
      } else {
        $('#count-of-proxys').html('');
        $('#count-of-proxys').removeClass('active');
        $('#modal-settings .form[for="proxy"].hider[for="proxy"]').removeClass('active');
        $('#enable_proxy').prop('checked', false);
      }
      if (localStorage['select-timeout']) {
        $('#enable_timeout').prop('checked', true);
        $('.select-timeout').addClass('active');
        $('#select-timeout').val(JSON.parse(localStorage['select-timeout']));
        $('#select-timeout').niceSelect('update');
      }
      $('#modal-settings').modal('show');
    }

    function get_now_url(driverr = false) {
      return new Promise((fin, fal) => {
        if (!driverr) {
          // if(!Start_session) {
          //   alert('Ses_ERR');
          //   return fin({type: false, err: 1});
          // }
          global_driver.getCurrentUrl().then((r) => {
            return fin({ type: true, url: r });
          }).catch((r) => {
            alert('ERR: ' + r);
            return fin({ type: false });
          });
        } else {
          driverr.getCurrentUrl().then((r) => {
            return fin({ type: true, url: r });
          }).catch((r) => {
            alert('ERR: ' + r);
            return fin({ type: false });
          });
        }
      });
    }

    var users = [];
    var channels = [];

    var check_pars_memebers = true;
    var check_start_pars = false;

    function login_account(account, driverr = false) {
      return new Promise((fin, fal) => {
        if (!account) return fin({ type: false, err: 0 });
        account = get_account(account);
        if (!account.pass || !account.login) return fin({ type: false, err: 1 });
        var cap = account.rucaptcha;
        login_discord(account.login, account.pass, driverr, cap).then((check) => {
          logntiwpoer('CHECK: ' + JSON.stringify(check));
          if (!check.type) {
            if (check.err && check.err == 'password') {
              noty('error', translater(translate.noty.accounts.wrong_auth_password));
            } else if (check.err && check.err == 'email') {
              noty('error', translater(translate.noty.accounts.wrong_auth_email));
            } else if (check.err && check.err == 'new_place') {
              noty('error', translater(translate.noty.accounts.need_auth));
            }
            if (!driverr) {
              global_driver.quit();
            } else {
              driverr.quit();
            }
            return fin({ type: false, err: 2 });
          }
          return fin({ type: true });
        });
      });
    }

    function get_invite_code(url) {
      return url.split('/')[url.split('/').length - 1]
    }

    function get_invite(i) {
      if (i.indexOf('.com/invite/') >= 0) {
        i = 'http://discord.gg/' + i.substr(i.indexOf('invite/') + 7, i.length);
      } else if (i.indexOf('d.gg/') < 0) {
        i = 'http://discord.gg/' + i.substr(i.indexOf('/') + 1, i.length);
      }
      return i;
    }


    function check_first_modal_dis(driverr) {
      return new Promise((fin, fal) => {
        get_now_url().then((check) => {
          if (!check.type) return fin({ type: false, err: 1 });
          if (check.url.indexOf('app.com/activity') < 0) return fin({ type: false });
          driverr.wait(until.elementLocated(By.css('div[data-no-focus-lock="true"] form button[type="button"]')), 2 * 1000).click().then(() => {
            setTimeout(() => {
              return fin({ type: true });
            }, 300);
          }).catch(() => {
            setTimeout(() => {
              return fin({ type: true });
            }, 300);
          });
        });
      });
    }

    window.isset = function () {
      if (arguments.length === 0) return false;
      var buff = arguments[0];
      for (var i = 0; i < arguments.length; i++) {
        if (typeof (buff) === 'undefined') return false;
        buff = buff[arguments[i + 1]];
      }
      return true;
    }


    function pars_channels(invite, account) {
      return new Promise((fin, fal) => {
        invite = get_invite(invite);
        var int_s_check = 0;
        if (!Start_session) {
          start_session().then((check) => {
            if (!check.type) return fin({ type: false, err: 1 });
            login_account(account).then((check) => {
              if (!check.type) return fin({ type: false, err: 2 });
              last_pars_data.invite = invite;
              driver = global_driver;
              var tm = false;
              get_url(invite).then(function () {
                setTimeout(() => {
                  driver.findElement(By.css('.wrapper-6URcxg  section .title-jXR8lp')).getAttribute('innerHTML').then((hetml) => {
                    last_pars_data.server_name = hetml;
                  });
                  driver.findElement(By.css('.wrapper-6URcxg  section .icon-3o6xvg')).getAttribute('style').then((setyle) => {
                    setyle = setyle.substr(setyle.indexOf('url("') + 5, setyle.length - 26);
                    last_pars_data.server_avatar = setyle;
                  });
                  driver.findElement(By.css('section button[type="button"] div')).click().then(() => {
                    setTimeout(() => {
                      var i = 0;
                      var ier = 0;
                      var int = setInterval(function () {
                        i++;
                        logntiwpoer('IIIII');
                        if (i > 20) {
                          clearInterval(int);
                          return fin({ type: false, error: 'timeout_1' });
                        }
                        setTimeout(function () {
                          get_now_url().then((url) => {
                            if (!url.type) {
                              clearInterval(int);
                              return fin({ type: false, error: 'url_false' });
                            }
                            if (url.url.indexOf('discord.com/channels/') >= 0) {
                              //logntiwpoer('Открыли стр сервера.');
                              clearInterval(int);
                              var all_el = 0;
                              setTimeout(() => {
                                driver.executeScript(function () {
                                  document.querySelector('.channels-Ie2l6A .scroller-2FKFPG').scrollTop = 0
                                });
                                channels = [];
                                function starter(i = 0) {
                                  if (check_pars_channels) return fin({ type: true, data: channels });
                                  //logntiwpoer(i)
                                  ier++;
                                  if (all_el && ier > Math.round(0.65625 * all_el)) {
                                    tm = true;
                                  } else if (i > Math.round(0.8 * all_el)) {
                                    tm = true;
                                  }
                                  if (i > Math.round(0.8 * all_el)) {
                                    i = Math.ceil(all_el / 2);
                                    global_driver.executeScript(function () {
                                      document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').scrollTop = (document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').scrollTop + (document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').offsetHeight - 500))
                                    });
                                  }
                                  driver.findElements(By.css(consts.selectors.pars_channels.channel)).then((elems) => {
                                    all_el = elems.length;
                                    setTimeout(() => {
                                      var el = elems[i];
                                      el.getAttribute('innerHTML').then((html) => {
                                        if (html.indexOf('name="Speaker"') >= 0 || html.indexOf('icon-1_QxNX') >= 0) {
                                          i++;
                                          starter(i);
                                          return false;
                                        }
                                        el.click().then(() => {
                                          setTimeout(() => {
                                            driver.executeScript(function () {
                                              return document.querySelector('textarea').getAttribute('disabled') == null;
                                            }).then((check) => {
                                              if (check) {
                                                el.findElement(By.css(consts.selectors.pars_channels.channel_name)).getAttribute('innerHTML').then((name) => {
                                                  var adder = [];
                                                  if (channels.length > 2) {
                                                    channels.forEach((e, ind, arr) => {
                                                      adder[e]++;
                                                      if (adder[e] > 2) return fin({ type: true, data: channels });
                                                      if (ind == arr.length - 1) {
                                                        channels.push(name);
                                                        i++;
                                                        setTimeout(() => {
                                                          starter(i);
                                                        }, 150);
                                                      }
                                                    });
                                                  } else {
                                                    channels.push(name);
                                                    i++;
                                                    setTimeout(() => {
                                                      starter(i);
                                                    }, 150);
                                                  }
                                                })
                                              } else {
                                                setTimeout(() => {
                                                  i++;
                                                  starter(i);
                                                }, 150);
                                              }
                                            }).catch(() => {
                                              setTimeout(() => {
                                                i++;
                                                starter(i);
                                              }, 150);
                                            });
                                          }, 500);
                                        }).catch(() => {
                                          setTimeout(() => {
                                            i++;
                                            starter(i);
                                          }, 150);
                                        });
                                      }).catch(() => {
                                        setTimeout(() => {
                                          i++;
                                          starter(i);
                                        }, 150);
                                      });
                                    }, 1000);
                                  }).catch(() => {
                                    setTimeout(() => {
                                      i++;
                                      starter(i);
                                    }, 150);
                                  });
                                }
                                setTimeout(() => {
                                  starter();
                                }, 2000);
                              }, 2000);
                            }
                          });
                        }, 1000);
                      }, 3000);
                    }, 3000);
                  }).catch(() => {
                    return fin({ type: false, err: 50 });
                  });
                }, 500);
              });
            });
          });
        } else {
          //logntiwpoer('invite: '+invite);
          last_pars_data.invite = invite;
          get_url(invite).then(function () {
            //logntiwpoer('SSS');
            setTimeout(() => {
              driver.findElement(By.css('.wrapper-6URcxg  section .title-jXR8lp')).getAttribute('innerHTML').then((hetml) => {
                last_pars_data.server_name = hetml;
              });
              driver.findElement(By.css('.wrapper-6URcxg  section .icon-3o6xvg')).getAttribute('style').then((setyle) => {
                setyle = setyle.substr(setyle.indexOf('url("') + 5, setyle.length - 26);
                last_pars_data.server_avatar = setyle;
              });
              driver.findElement(By.css('section button[type="button"] div')).click().then(() => {
                setTimeout(() => {
                  var i = 0;
                  var ier = 0;
                  var int = setInterval(function () {
                    i++;
                    //logntiwpoer('IIIII');
                    if (i > 20) {
                      clearInterval(int);
                      return fin({ type: false, error: 'timeout_1' });
                    }
                    setTimeout(function () {
                      get_now_url().then((url) => {
                        if (!url.type) {
                          clearInterval(int);
                          return fin({ type: false, error: 'url_false' });
                        }
                        if (url.url.indexOf('discord.com/channels/') >= 0) {
                          logntiwpoer('Открыли стр сервера.');
                          clearInterval(int);
                          var all_el = 0;
                          setTimeout(() => {
                            driver.executeScript(function () {
                              document.querySelector('.channels-Ie2l6A .scroller-2FKFPG').scrollTop = 0
                            });
                            channels = [];
                            function starter(i = 0) {
                              if (check_pars_channels) return fin({ type: true, data: channels });
                              logntiwpoer(i)
                              ier++;
                              if (all_el && ier > Math.round(0.65625 * all_el)) {
                                tm = true;
                              } else if (i > Math.round(0.8 * all_el)) {
                                tm = true;
                              }
                              if (i > Math.round(0.8 * all_el)) {
                                i = Math.ceil(all_el / 2);
                                global_driver.executeScript(function () {
                                  document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').scrollTop = (document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').scrollTop + (document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').offsetHeight - 500))
                                });
                              }
                              driver.findElements(By.css(consts.selectors.pars_channels.channel)).then((elems) => {
                                all_el = elems.length
                                setTimeout(() => {
                                  var el = elems[i];
                                  el.getAttribute('innerHTML').then((html) => {
                                    if (html.indexOf('name="Speaker"') >= 0) {
                                      i++;
                                      starter(i);
                                      return false;
                                    }
                                    el.click().then(() => {
                                      setTimeout(() => {
                                        driver.executeScript(function () {
                                          return document.querySelector('textarea').getAttribute('disabled') == null;
                                        }).then((check) => {
                                          if (check) {
                                            el.findElement(By.css(consts.selectors.pars_channels.channel_name)).getAttribute('innerHTML').then((name) => {
                                              var adder = [];
                                              if (channels.length > 2) {
                                                channels.forEach((e, ind, arr) => {
                                                  adder[e]++;
                                                  if (adder[e] > 2) return fin({ type: true, data: channels });
                                                  if (ind == arr.length - 1) {
                                                    channels.push(name);
                                                    i++;
                                                    setTimeout(() => {
                                                      starter(i);
                                                    }, 150);
                                                  }
                                                });
                                              } else {
                                                channels.push(name);
                                                i++;
                                                setTimeout(() => {
                                                  starter(i);
                                                }, 150);
                                              }
                                            })
                                          } else {
                                            setTimeout(() => {
                                              i++;
                                              starter(i);
                                            }, 150);
                                          }
                                        }).catch(() => {
                                          setTimeout(() => {
                                            i++;
                                            starter(i);
                                          }, 150);
                                        });
                                      }, 500);
                                    }).catch(() => {
                                      setTimeout(() => {
                                        i++;
                                        starter(i);
                                      }, 150);
                                    });
                                  }).catch(() => {
                                    setTimeout(() => {
                                      i++;
                                      starter(i);
                                    }, 150);
                                  });
                                }, 1000);
                              }).catch(() => {
                                setTimeout(() => {
                                  i++;
                                  starter(i);
                                }, 150);
                              });
                            }
                            setTimeout(() => {
                              starter();
                            }, 2000);
                          }, 2000);
                        }
                      });
                    }, 1000);
                  }, 3000);
                }, 3000);
              }).catch(() => {
                return fin({ type: false, err: 50 });
              });
            }, 5000);
          });
        }
      });
    }

    var check_pars_channels = true;

    function check_close_browser() {
      if (!Start_session) return false;
      global_driver.getCurrentUrl().catch(() => {
        Start_session = false;
      });
    }

    setInterval(() => {
      check_close_browser();
    }, 500);

    function get_spam_channels(id) {
      return new Promise((fin, fal) => {
        if (!id) return fin({ type: false });
        if (!store.has('spam_channels')) return fin({ type: false });
        var spam = store.get('spam_channels');
        if (spam.length <= 0) return fin({ type: false });
        var check = false;
        spam.forEach((e, ind, arr) => {
          if (e.id == id) {
            check = true;
            get_pars_channel(e.pars_id).then(pars => {
              if (!pars.type) return fin({ type: false });
              e.pars = pars.data;
              return fin({ type: true, data: e });
            });
          }
          if (ind == arr.length - 1 && !check) return fin({ type: false });
        });
      });
    }

    function start_spam_channels(id, account) {
      return new Promise((fin, fal) => {
        if (!id || !account) return fin({ type: false });
        get_spam_channels(id).then((spam) => {
          if (!spam.type) return fin({ type: false });
          spam = spam.data;
          var text = replace_text(spam.text);
          var pars = spam.pars;
          var channels = pars.channels;
          var invite = get_invite(pars.invite);
          var spam_id = spam.id;
          if (channels.length <= 0) return fin({ type: false });
          setTimeout(() => {
            start_session().then((check) => {
              if (!check.type) return fin({ type: false });
              login_account(account).then((check) => {
                if (!check.type) return fin({ type: false });
                get_url(invite).then(function () {
                  logntiwpoer('SSS');
                  driver = global_driver;
                  var sda = 0;
                  var yt = setInterval(() => {
                    sda++;
                    if (sda > 20) {
                      clearInterval(yt);
                      return fin({ type: false });
                    }
                    driver.findElement(By.css('section button[type="button"] div')).click().then(() => {
                      clearInterval(yt);
                      setTimeout(() => {
                        var i = 0;
                        var ier = 0;
                        var int = setInterval(function () {
                          i++;
                          logntiwpoer('IIIII');
                          if (i > 20) {
                            clearInterval(int);
                            return fin({ type: false, error: 'timeout_1' });
                          }
                          var check_send_messages = [];
                          setTimeout(function () {
                            get_now_url().then((url) => {
                              if (!url.type) {
                                clearInterval(int);
                                return fin({ type: false, error: 'url_false' });
                              }
                              if (url.url.indexOf('discord.com/channels/') >= 0) {
                                logntiwpoer('Открыли стр сервера.');
                                clearInterval(int);
                                var all_el = 0;
                                setTimeout(() => {
                                  driver.executeScript(function () {
                                    document.querySelector('.channels-Ie2l6A .scroller-2FKFPG').scrollTop = 0;
                                  });
                                  setTimeout(() => {
                                    function starter(i = 0) {
                                      if (check_pause_spam_channels) {
                                        var last_time = setInterval(() => {
                                          if (check_start_spam_channels) {
                                            driverr.quit();
                                            return fin({ type: true });
                                          }
                                          if (!check_pause_spam_channels) {
                                            clearInterval(last_time);
                                            setTimeout(() => {
                                              starter(i);
                                            }, 150);
                                          }
                                        }, 500);
                                        return false;
                                      }
                                      if (check_start_spam_channels) {
                                        driver.quit();
                                        return fin({ type: true });
                                      }
                                      var channel = channels[i];
                                      if (check_send_messages[channel]) {
                                        setTimeout(() => {
                                          i++;
                                          starter(i);
                                        }, randomInteger(100, 200));
                                        return false;
                                      }
                                      if (i > Math.round(0.8 * all_el)) {
                                        i = Math.ceil(all_el / 2);
                                        global_driver.executeScript(function () {
                                          document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').scrollTop = (document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').scrollTop + (document.querySelector('.membersWrap-2h-GB4 .scroller-2FKFPG').offsetHeight - 500))
                                        });
                                      }
                                      setTimeout(() => {
                                        driver.findElements(By.css(consts.selectors.pars_channels.channel)).then((elems) => {
                                          all_el = elems.length;
                                          function sturt(ier = 0) {
                                            if (check_start_spam_channels) {
                                              driver.quit();
                                              return fin({ type: true });
                                            }
                                            if (ier >= all_el) {
                                              logntiwpoer('SSS - ALL! ier: ' + ier + ' all_el: ' + all_el);
                                              setTimeout(() => {
                                                i++;
                                                starter(i);
                                              }, randomInteger(100, 200));
                                              return false;
                                            }
                                            var elem = elems[ier];
                                            elem.findElement(By.css('.name-3_Dsmg')).getAttribute('innerHTML').then((html) => {
                                              logntiwpoer('HTML: ' + html + ' CHANNEL: ' + channel);
                                              if (html == channel) {
                                                elem.click().then(() => {
                                                  setTimeout(() => {
                                                    driver.findElement(By.css('form')).getAttribute('innerHTML').then((check) => {
                                                      check = check.indexOf('disabled');
                                                      logntiwpoer('CHECK: ' + check);
                                                      if (check >= 0) {
                                                        logntiwpoer('SSS - check!');
                                                        add_log_spam_channels('disabled', channel, spam_id);
                                                        ier++;
                                                        setTimeout(() => {
                                                          sturt(ier);
                                                        }, randomInteger(100, 250));
                                                        return false;
                                                      }
                                                      logntiwpoer('text: ' + text);
                                                      var now_text = stringToArrayMessage(text);
                                                      logntiwpoer(now_text);
                                                      setTimeout(() => {
                                                        logntiwpoer('TIMOUT PRE SLOW');
                                                        slow_send_keys(driver.findElement(By.css('form textarea')), now_text, 20).then(() => {
                                                          logntiwpoer('SLOW END');
                                                          setTimeout(() => {
                                                            driver.findElement(By.css('form textarea')).sendKeys(Key.RETURN).then(() => {
                                                              last_spam_count_messages_channels++;
                                                              add_log_spam_channels('send', channel, spam_id);
                                                              check_send_messages[channel] = true;
                                                              setTimeout(() => {
                                                                i++;
                                                                starter(i);
                                                              }, randomInteger(500, 1200));
                                                            }).catch(() => {
                                                              logntiwpoer('CACTT!');
                                                              ier++;
                                                              sturt(ier);
                                                            });
                                                          }, randomInteger(400, 800));
                                                        }).catch(() => {
                                                          logntiwpoer('SLOW CAT');
                                                        });
                                                      }, 2000);
                                                    });
                                                  }, 2000);
                                                }).catch(() => {
                                                  logntiwpoer('CACT33332T!');
                                                  ier++;
                                                  sturt(ier);
                                                });
                                              } else {
                                                logntiwpoer('CACT333asdasdas2T!');
                                                ier++;
                                                sturt(ier);
                                              }
                                            });
                                          }
                                          sturt();
                                        }).catch(() => {
                                          logntiwpoer('CACT33332T!');
                                          ier++;
                                          sturt(ier);
                                        });
                                      }, 500);
                                    }
                                    setTimeout(() => {
                                      starter();
                                    }, randomInteger(1000, 1750));
                                  }, 500);
                                }, randomInteger(500, 1000));
                              }
                            });
                          });
                        }, 1500);
                      }, randomInteger(2500, 4000));
                    });
                  }, 3000);
                });
              });
            });
          }, randomInteger(500, 1000));
        });
      });
    }

    $('body').on('click', '.btn-invite-accs', function () {
      $('.modal').modal('hide');
      $('#modal-invite-accounts .select-inviter-accounts').html('');
      get_accounts().forEach(e => {
        if (e.status) {
          var html = `<div class="inviter-acc-sel"><div class="email">${e.login}</div><input type="checkbox"></div>`;
          $('#modal-invite-accounts .select-inviter-accounts').prepend(html);
        }
      });
      if (store.has('last_invites')) {
        var data = store.get('last_invites');
        if (data.length > 0) {
          if (data.length == 1) {
            $('#join-to-voice-channels-block .f').addClass('active');
          } else {
            $('#join-to-voice-channels-block .f').removeClass('active');
          }
          $('#count-of-invite-inviter').html(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.invites))}`);
          setTimeout(() => {
            $('#count-of-invite-inviter').addClass('active');
          }, 50);
        }
      }
      $('#modal-invite-accounts').modal('show');
    });

    var lastChecked_checkbox_v;

    $('body').on('click', '.select-inviter-accounts .inviter-acc-sel', function (e) {
      var that = $(this);
      var checkboxes = $('.select-inviter-accounts .inviter-acc-sel input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_v) {
          lastChecked_checkbox_v = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox_v.checked = true;
        } else {
          lastChecked_checkbox_v.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_v);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_v.checked);
        lastChecked_checkbox_v = $('.select-inviter-accounts .inviter-acc-sel input[type="checkbox"]')[start];
      }
    });

    var lastChecked_checkbox_vv;

    $('body').on('click', '.select-editer-accounts .editer-acc-sel', function (e) {
      var that = $(this);
      var checkboxes = $('.select-editer-accounts .editer-acc-sel input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_vv) {
          lastChecked_checkbox_vv = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox_vv.checked = true;
        } else {
          lastChecked_checkbox_vv.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_vv);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_vv.checked);
        lastChecked_checkbox_vv = $('.select-editer-accounts .editer-acc-sel input[type="checkbox"]')[start];
      }
    });

    var lastChecked_checkbox_vvv;

    $('body').on('click', '.select-checker-accounts .checker-acc-sel', function (e) {
      var that = $(this);
      var checkboxes = $('.select-checker-accounts .checker-acc-sel input[type="checkbox"]');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_vvv) {
          lastChecked_checkbox_vvv = that.find('input[type="checkbox"]');
        }
        if (that.find('input[type="checkbox"]').prop('checked') == false) {
          lastChecked_checkbox_vvv.checked = true;
        } else {
          lastChecked_checkbox_vvv.checked = false;
        }
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_vvv);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_vvv.checked);
        lastChecked_checkbox_vvv = $('.select-checker-accounts .checker-acc-sel input[type="checkbox"]')[start];
      }
    });

    $('body').on('click', '#modal-invite-accounts .inviter-acc-sel', function () {
      $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
      update_count_sel_accs();
    });

    $('body').on('click', '#modal-edit-account .editer-acc-sel', function () {
      $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
      update_count_sel_accs_editer();
    });

    $('body').on('click', '#modal-check-accounts .checker-acc-sel', function () {
      $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
      update_count_sel_accs_checker();
    });

    $('body').on('change', '#change-usernames-check', function () {
      if ($(this).prop('checked')) {
        $('#turn-on-change-usernames').css({
          'margin-left': '-120px'
        });
        var label = $('[for="upload-file-usernames"]');
        if (label.length <= 0) label = $('[for="upload-file-username"]');
        label.addClass('active');
      } else {
        var label = $('[for="upload-file-usernames"]');
        if (label.length <= 0) label = $('[for="upload-file-username"]');
        $('#count-of-usernames-change').removeClass('active');
        label.removeClass('active');
        setTimeout(() => {
          label.html(translater(translate.noty.other.down_from_file));
          label.attr('for', 'upload-file-usernames');
          $('#count-of-usernames-change').html('0 ' + translater(translate.noty.other.usernames_c));
          $('#turn-on-change-usernames').css({
            'margin-left': ''
          });
        }, 100);
      }
    });

    $('body').on('change', '#change-avatars-check', function () {
      if ($(this).prop('checked')) {
        $('#turn-on-change-avatars').css({
          'margin-left': '-120px'
        });
        var label = $('[for="upload-file-avatars"]');
        if (label.length <= 0) label = $('[for="upload-file-avatar"]');
        label.addClass('active');
      } else {
        var label = $('[for="upload-file-avatars"]');
        if (label.length <= 0) label = $('[for="upload-file-avatar"]');
        $('#count-of-avatars-change').removeClass('active');
        label.removeClass('active');
        setTimeout(() => {
          label.html(translater(translate.noty.other.down_from_file));
          label.attr('for', 'upload-file-avatars');
          $('#count-of-avatars-change').html('0 ' + translater(translate.noty.other.usernames_c));
          $('#turn-on-change-avatars').css({
            'margin-left': ''
          });
        }, 100);
      }
    });

    $('body').on('change', '#upload-file-avatars', function () {
      var label = $('label[for="upload-file-avatars"]');
      var files = $('#upload-file-avatars')[0].files;
      if (files.length <= 0) {
        $('#upload-file-avatars').val('');
        return noty('error', translater(translate.noty.other.min_c_f));
      }
      var avatars = [];
      logntiwpoer(files);
      Array.prototype.forEach.call(files, function (r, ind, arr) {
        var size = r.size;
        logntiwpoer(size);
        if (size < 10001000) {
          var reader = new FileReader();
          reader.onload = function (e) {
            var data = reader.result;
            avatars.push(data);
            if (ind == arr.length - 1) {
              logntiwpoer(avatars);
              if (avatars.length <= 0) return noty('error', translater(translate.noty.other.min_c_f));
              $('.avatar-load').removeClass('active');
              setTimeout(() => {
                $('#upload-file-avatars').val('');
                store.set('avatars', avatars);
                $('#count-of-avatars-change').html(`${avatars.length} ${NumberEnd(avatars.length, translater(translate.noty.number_end.avatars))}`);
                $('#count-of-avatars-change').addClass('active');
              }, 100);
            }
          };
          reader.readAsDataURL(r);
        }
      });
    });

    $('body').on('change', '#upload-file-usernames', function () {
      if ($('label[for="upload-file-usernames"].editer').hasClass()) return false;
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = reader.result.substr(reader.result.indexOf('base64,') + 7);
        data = Buffer(data, 'base64').toString();
        $('#upload-file-usernames').val('');
        var usernames = explode('\n', data);
        if (!usernames) return noty('error', translater(translate.noty.other.dont_get_u_f_f));
        if (usernames.length < 1) return noty('error', translater(translate.noty.other.min_c_u));
        var username = [];
        usernames.forEach((e, ind, arr) => {
          e = e.replace('\n', '');
          e = e.replace('\r', '');
          e = e.replace(' \n', '');
          e = e.replace(' \r', '');
          if (e.indexOf('@') < 0 && e.indexOf('#') < 0 && e.length > 2 && e.length < 32 && username.indexOf(e) < 0 && e != '') username.push(e);
          if (ind == arr.length - 1) {
            if (username.length < 1) return noty('error', translater(translate.noty.other.min_c_u_s));
            store.set('last_usernames', username);
            var count = username.length;
            var btn = $('label[for="upload-file-usernames"]');
            btn.addClass('editer');
            btn.attr('for', 'upload-file-username');
            btn.css('opacity', '0');
            setTimeout(() => {
              btn.html(translater(translate.noty.other.edit));
              setTimeout(() => {
                btn.css('opacity', '');
                count = count + NumberEnd(count, translater(translate.noty.number_end.usernames));
                setTimeout(() => {
                  setTimeout(() => {
                    $('#count-of-usernames-change').html(count);
                    $('#count-of-usernames-change').addClass('active');
                  }, 50);
                }, 200);
              }, 50);
            }, 200);
          }
        });
      };
      reader.readAsDataURL(this.files[0]);
    });

    $('body').on('click', '#modal-edit-editer-usernames-accounts .buttons .btn-modals:first-child', function () {
      $('.modal').modal('hide');
      $('#modal-edit-account').modal('show');
    })

    $('body').on('click', '#modal-edit-editer-usernames-accounts .buttons .btn-modals:nth-child(2)', function () {
      var data = $('#modal-edit-editer-usernames-accounts textarea').val();
      var usernames = explode('\n', data);
      if (!usernames) return noty('error', translater(translate.noty.other.dont_get_u_f_f));
      if (usernames.length < 1) return noty('error', translater(translate.noty.other.min_c_u));
      var username = [];
      usernames.forEach((e, ind, arr) => {
        e = e.replace('\n', '');
        e = e.replace('\r', '');
        e = e.replace(' \n', '');
        e = e.replace(' \r', '');
        if (e.indexOf('@') < 0 && e.indexOf('#') < 0 && e.length > 2 && e.length < 32 && username.indexOf(e) < 0 && e != '') username.push(e);
        if (ind == arr.length - 1) {
          if (username.length < 1) return noty('error', translater(translate.noty.other.min_c_u_s));
          store.set('last_usernames', username);
          var count = username.length;
          setTimeout(() => {
            setTimeout(() => {
              count = count + NumberEnd(count, translater(translate.noty.number_end.usernames));
              setTimeout(() => {
                setTimeout(() => {
                  $('#count-of-usernames-change').html(count);
                  $('#count-of-usernames-change').addClass('active');
                  $('.modal').modal('hide');
                  $('#modal-edit-account').modal('show');
                }, 50);
              }, 200);
            }, 50);
          }, 200);
        }
      });
    })

    $('body').on('click', '[for="upload-file-username"].editer', function () {
      $('.modal').modal('hide');
      var val = '';
      store.get('last_usernames').forEach((e) => {
        val += `${e}\n`;
      })
      $('#modal-edit-editer-usernames-accounts textarea').val(val);
      $('#modal-edit-editer-usernames-accounts').modal('show');
      setTimeout(() => {
        $('#modal-edit-editer-usernames-accounts textarea').focus();
      }, 200);
    })

    $('body').on('click', '.btn-edit-accs', function () {
      $('.modal').modal('hide');
      $('#modal-edit-account .select-editer-accounts').html('');
      get_accounts().forEach(e => {
        if (e.status) {
          var html = `<div class="editer-acc-sel"><div class="email">${e.login}</div><input type="checkbox"></div>`;
          $('#modal-edit-account .select-editer-accounts').prepend(html);
        }
      })
      if (store.has('last_usernames')) {
        var usernames = store.get('last_usernames');
        if (usernames.length > 0) {
          $('#change-usernames-check').prop('checked', true);
          $('#turn-on-change-usernames').css({
            'margin-left': '-120px'
          });
          var label = $('[for="upload-file-usernames"]');
          label.addClass('active');
          var count = usernames.length;
          var btn = $('label[for="upload-file-usernames"]');
          btn.addClass('editer');
          btn.attr('for', 'upload-file-username');
          btn.css('opacity', '0');
          setTimeout(() => {
            btn.html(translater(translate.noty.other.edit));
            setTimeout(() => {
              btn.css('opacity', '');
              count = count + NumberEnd(count, translater(translate.noty.number_end.usernames));
              setTimeout(() => {
                setTimeout(() => {
                  $('#count-of-usernames-change').html(count);
                  $('#count-of-usernames-change').addClass('active');
                  if (store.has('avatars')) {
                    var avatars = store.get('avatars');
                    if (avatars.length > 0) {
                      $('#change-avatars-check').prop('checked', true);
                      $('#turn-on-change-avatars').css({
                        'margin-left': '-120px'
                      });
                      label = $('[for="upload-file-avatars"]');
                      label.addClass('active');
                      count = avatars.length;
                      count = count + NumberEnd(count, translater(translate.noty.number_end.avatars));
                      setTimeout(() => {
                        $('#count-of-avatars-change').html(count);
                        $('#count-of-avatars-change').addClass('active');
                      }, 50);
                    }
                  }
                }, 50);
              }, 200);
            }, 50);
          }, 200);
        }
      }
      $('#modal-edit-account').modal('show');
    })

    $('body').on('change', '#select-status-users-manage', function () {
      update_tmp('select-status-users-manage', $(this).val());
    })

    $('body').on('click', '.btn-start-editer', function () {
      if ($(this).hasClass('waiting')) return;
      var accs = [];
      $('#modal-edit-account .select-editer-accounts .editer-acc-sel').each(function () {
        if ($(this).find('input').prop('checked')) accs.push($(this).find('.email').text());
      });
      if (accs.length <= 0) return noty('error', translater(translate.noty.dis.emped_accounts));
      if (!$('#select-status-users-manage').val() || $('#select-status-users-manage').val() == 'false') if (!$('#change-usernames-check').prop('checked') && !$('#change-avatars-check').prop('checked') && !$('#check-friends-adder').prop('checked') && !$('#check-editer-status').prop('checked') && !$('#check-editer-activity').prop('checked')) return noty('error', translater(translate.noty.other.dont_o_fun));
      var usernames = $('#change-usernames-check').prop('checked');
      if (usernames) {
        if (!store.has('last_usernames')) return noty('error', translater(translate.noty.other.dont_p_u));
        usernames = store.get('last_usernames');
        if (usernames.length <= 0) return noty('error', translater(translate.noty.other.dont_p_u));
      }
      var avatars = $('#change-avatars-check').prop('checked');
      if (avatars) {
        if (!store.has('avatars')) return noty('error', translater(translate.noty.other.dont_p_a));
        avatars = store.get('avatars');
        if (avatars.length <= 0) return noty('error', translater(translate.noty.other.dont_p_a));
      }
      var adder = $('#check-friends-adder').prop('checked');
      if (adder) {
        if (!localStorage['adder-friends'] || JSON.parse(localStorage['adder-friends']).length < 1) return noty('error', translater(translate.noty.other.dont_spicufy_usernames_for_adder));
        adder = JSON.parse(localStorage['adder-friends']);
      }
      var status = $('#select-status-users-manage').val();
      success_count_changer = 0;
      var btn = $(this);
      $('#count-success-editer span').html('0');
      $('#count-success-editer all').html('0');
      btn.addClass('waiting');
      var customStatus = $('#check-editer-status').prop('checked');
      if (customStatus) {
        var states = localStorage['users-status-editer'];
        if (!states) return noty('error', translater(translate.noty.other.dont_set_states_editer))
        states = JSON.parse(states);
        var emoji = localStorage['users-status-emoji-editer'];
        if (emoji) {
          emoji = JSON.parse(emoji);
        } else {
          emoji = []
        }
        var customStatus = {
          states,
          emoji,
          type: 4,
        }
      }
      var gameData = $('#check-editer-activity').prop('checked');
      if (gameData) {
        if (!localStorage['users-activity-editer']) return noty('error', translater(translate.noty.other.dont_set_activity_editer))
        var type = 0;
        if (localStorage['users-activity-type-editer']) type = JSON.parse(localStorage['users-activity-type-editer']);
        gameData = {
          names: JSON.parse(localStorage['users-activity-editer']),
          type
        }
      }
      deleteCookies();
      starter_changer(accs, usernames, avatars, adder, status, customStatus, gameData).then(check => {
        deleteCookies();
        btn.removeClass('waiting');
        if (!check.type) {
          var e = check.err;
          if (!e) e = 234;
          return noty('error', translater(translate.noty.other.err_w_ch_ac, false, { err: e }));
        }
        $('#count-success-editer').removeClass('active');
        $('#count-success-editer span').html('0');
        $('#count-success-editer all').html('0');
      });

      $('#count-success-editer all').html(accs.length);
      $('#count-success-editer').addClass('active');
    });

    function starter_changer(accs, usernames, avatars, adder, onlineStatus = false, customStatus = false, gameData = false) {
      return new Promise(fin => {
        console.log('gameData', gameData)
        accs.forEach((e, ind, arr) => {
          setTimeout(() => {
            var accer = get_account_from_email(e);
            var email = e;
            var pass = accer.pass;
            var rucaptcha = accer.rucaptcha;
            loginer_acc_api(email, pass, rucaptcha).then(check => {
              if (!check.type) {
                if (ind == arr.length - 1) {
                  return fin({ type: false, err: 455 });
                } else {
                  return noty('warning', translater(translate.noty.other.err_w_g_t_a, false, { email: email }));
                }
              }
              var token = check.token;
              var username = false;
              var avatar = false;
              if (usernames && usernames.length > 0) username = usernames[Math.floor(Math.random() * usernames.length)];
              if (avatars && avatars.length > 0) avatar = avatars[Math.floor(Math.random() * avatars.length)];
              if (gameData) {
                var name = gameData.names[Math.floor(Math.random() * gameData.names.length)];
                var type = parseInt(gameData.type);
                var gameDataTemp = {
                  name,
                  type
                }
              }
              change_acc_info(token, username, avatar, email, pass, onlineStatus, customStatus, gameDataTemp).then(async (check) => {
                if (adder) {
                  async function x() {
                    return new Promise(fin => {
                      adder.forEach((z, inx) => {
                        setTimeout(async () => {
                          await add_friend(z, token);
                          fin(true);
                        }, 300 * inx);
                      })
                    });
                  }
                  await x();
                }
                if (ind == arr.length - 1) fin({ type: true });
                if (!check.type) {
                  if (check.err == 401) return noty_of_ban_account(accer.name);
                  if (check.err == 400) return noty('error', translater(translate.noty.other.too_f_c_t_a, false, { acc: accer.login }));
                  return noty('error', translater(translate.noty.other.err_with_change_acc_data, false, { err: check.err }));
                }
                success_count_changer++;
                $('#count-success-editer span').html(success_count_changer);
              })
            });
          }, 100 * ind);
        })
      });
    }

    $('body').on('click', '#modal-edit-editer-invites-inviters .buttons .btn-modals:last-child', function () {
      var val = $('#modal-edit-editer-invites-inviters textarea').val();
      if (!val || val == '') return noty('error', translater(translate.noty.other.dont_p_i));
      var data = val.split('\n');
      if (!data || data.length <= 0) return noty('error', translater(translate.noty.other.dont_p_i));
      var new_data = [];
      data.forEach((e) => {
        if (new_data.indexOf(e) < 0 && e != '' && e != '\n') new_data.push(e);
      })
      store.set('last_invites', new_data);
      var count = new_data.length + NumberEnd(new_data.length, translater(translate.noty.number_end.invites));
      if (new_data.length == 1) {
        $('#join-to-voice-channels-block .f').addClass('active');
      } else {
        $('#join-to-voice-channels-block .f').removeClass('active');
      }
      $('#count-of-invite-inviter').html(count);
      setTimeout(() => {
        $('#count-of-invite-inviter').addClass('active');
      }, 50);
      $('.modal').modal('hide');
      $('#modal-invite-accounts').modal('show');
    });

    $('body').on('click', '.btn-set-invites-for-inviter', function () {
      $('.modal').modal('hide');
      if (store.has('last_invites')) {
        var invites = store.get('last_invites');
        if (invites.length > 0) {
          $('#modal-edit-editer-invites-inviters textarea').val('');
          var val = $('#modal-edit-editer-invites-inviters textarea').val();
          invites.forEach(e => {
            var invite = `https://discord.gg/${get_invite_code(e)}`;
            val += `${invite}\n`;
          })
          $('#modal-edit-editer-invites-inviters textarea').val(val);
        }
      }
      $('#modal-edit-editer-invites-inviters').modal('show')
      setTimeout(() => {
        $('#modal-edit-editer-invites-inviters textarea').focus();
      }, 200);
    });

    $('body').on('click', '#modal-edit-editer-invites-inviters .buttons .btn-modals:first-child', function () {
      $('.modal').modal('hide');
      $('#modal-invite-accounts').modal('show');
    });



    $('body').on('show.bs.modal', '#users-activity-settings', () => {
      try {
        var val = ''
        var data = localStorage['activity-games-pars-list'];
        if (data) {
          data = JSON.parse(data)
          data.forEach(e => {
            val += `${e}\n\r`;
          })
        }
        $('#users-activity-settings-input').val(val);
      } catch (err) { }
    })

    var success_count_changer = 0;

    var set_presence_mass = [];

    function set_custom_status(client, state, type = 4, emoji = null, status = 'online') {
      console.log('status', status);
      send_ws_discord_client(client, {
        op: 3,
        d: {
          status,
          since: 0,
          activities: [
            {
              name: 'Custom Status',
              type,
              state,
              emoji
            }
          ],
          afk: false
        }
      })
      return true;
    }

    function set_game_activity(client, name, type = 0, status = 'online', activities = false) {
      var params = {
        op: 3,
        d: {
          status,
          since: 0,
          game: {
            application_id: null,
            assets: null,
            details: null,
            instance: null,
            name,
            party: null,
            secrets: null,
            state: null,
            timestamps: null,
            type,
            url: null
          },
          afk: false
        }
      };
      if (activities) params.activities = activities;
      send_ws_discord_client(client, params)
      return true;
    }

    function change_acc_info(token, username = false, avatar = false, email, pass, onlineStatus = false, customStatus = false, gameData = false) {
      return new Promise(async fin => {
        console.log('gameData', gameData)
        if (gameData) {
          var gameName = gameData.name;
          var gameType = gameData.type;
        }
        if (onlineStatus || customStatus) {
          var Discord = require("discord.js");
          var client = new Discord.Client();
          // await initDiscordCookie(token);
          await client.login(token);
          var check_yet = false;
          if (onlineStatus) {
            set_presence_mass.forEach((e, ind) => {
              if (e.token == token) {
                if (onlineStatus == 'random') {
                  onlineStatus = ['online', 'idle', 'dnd'];
                  onlineStatus = onlineStatus[rand(0, 2)];
                }
                clearInterval(e.time);
                for (var i = 0; i < 3; i++) e.client.user.setPresence({ status: onlineStatus })
                var time = setInterval(() => {
                  for (var i = 0; i < 3; i++) e.client.user.setPresence({ status: onlineStatus })
                }, 180 * 1000);
                set_presence_mass[ind].time = time;
                check_yet = true;
              }
            });
          }
          if (!check_yet) {
            if (onlineStatus == 'random') {
              onlineStatus = ['online', 'idle', 'dnd'];
              onlineStatus = onlineStatus[rand(0, 2)];
            }
            var params = {}
            if (onlineStatus) params.status = onlineStatus;
            client.user.setPresence({ status: onlineStatus })
            var time = setInterval(() => {
              for (var i = 0; i < 3; i++) {
                client.user.setPresence({ status: onlineStatus })
              }
              if (gameData && customStatus) {
                var state = customStatus.states[Math.floor(Math.random() * customStatus.states.length)];
                var emoji = customStatus.emoji ? customStatus.emoji[Math.floor(Math.random() * customStatus.emoji.length)] : null;
                emoji = {
                  id: null,
                  name: emoji,
                  animated: false,
                }
                var activities = [
                  {
                    name: 'Custom Status',
                    type: customStatus.type,
                    state,
                    emoji
                  }
                ]
                set_game_activity(client, gameName, gameType, onlineStatus || 'online', activities);
              } else {
                if (customStatus) setTimeout(() => {
                  set_custom_status(client, state, customStatus.type, emoji, onlineStatus || 'online');
                }, 2000)
                if (gameData) setTimeout(() => {
                  set_game_activity(client, gameName, gameType, onlineStatus || 'online');
                }, 5000)
              }
            }, 180 * 1000);
            set_presence_mass.push({ token: token, client: client, time: time });
          }
          console.log('customStatus', customStatus)
          if (gameData && customStatus) {
            var state = customStatus.states[Math.floor(Math.random() * customStatus.states.length)];
            var emoji = customStatus.emoji ? customStatus.emoji[Math.floor(Math.random() * customStatus.emoji.length)] : null;
            emoji = {
              id: null,
              name: emoji,
              animated: false,
            }
            var activities = [
              {
                name: 'Custom Status',
                type: customStatus.type,
                state,
                emoji
              }
            ]
            set_game_activity(client, gameName, gameType, onlineStatus || 'online', activities);
          } else {
            if (customStatus) {
              var state = customStatus.states[Math.floor(Math.random() * customStatus.states.length)];
              var emoji = customStatus.emoji ? customStatus.emoji[Math.floor(Math.random() * customStatus.emoji.length)] : null;
              emoji = {
                id: null,
                name: emoji,
                animated: false,
              }
              set_custom_status(client, state, customStatus.type, emoji, onlineStatus || 'online');
            }
            if (gameData) set_game_activity(client, gameName, gameType, onlineStatus || 'online');
          }
        }
        if (!username && !avatar) return fin({ type: true });
        var body = {
          discriminator: null,
          email,
          new_password: null,
          password: pass
        };
        if (username) body.username = username;
        if (avatar) body.avatar = avatar;
        // body = JSON.stringify(body);
        var go = (body) => {
          return new Promise(async fin => {
            try {
              var properties = {
                "os": "Windows",
                "browser": "Chrome",
                "device": "",
                "system_locale": "ru-RU",
                "browser_user_agent": window.MyUserAgent,
                "browser_version": window.MyBrowserVersion,
                "os_version": "10",
                "referrer": "",
                "referring_domain": "",
                "referrer_current": "",
                "referring_domain_current": "",
                "release_channel": "stable",
                "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
                "client_event_source": null
              }
              console.log('body', body);
              var options = {
                url: 'https://discord.com/api/v9/users/@me',
                body: JSON.stringify(body),
                method: 'patch',
                headers: {
                  'authorization': token,
                  ////'accept-language': 'ru',
                  // 'origin': 'https://discord.com',
                  // 'referer': 'https://discord.com/channels/@me',
                  //'accept': '*/*',
                  //'content-length': body.length,
                  //'dnt': '1',
                  //'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
                  'content-type': 'application/json',
                  'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
                }
              };
              var data = await makeRequest('PATCH', 'https://discord.com/api/v9/users/@me', body, {
                'authorization': token,
                'content-type': 'application/json',
                'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
              });
              console.log('data', data)
              return fin({
                type: true
              })
            } catch (err) {
              console.error('err3194032234', err);
              return fin({
                type: false,
                err
              })
            }
          })
          return new Promise(async fin => {
            try {
              var properties = {
                "os": "Windows",
                "browser": "Chrome",
                "device": "",
                "system_locale": "ru-RU",
                "browser_user_agent": window.MyUserAgent,
                "browser_version": window.MyBrowserVersion,
                "os_version": "10",
                "referrer": "",
                "referring_domain": "",
                "referrer_current": "",
                "referring_domain_current": "",
                "release_channel": "stable",
                "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
                "client_event_source": null
              }
              console.log('body', body);
              var options = {
                url: 'https://discord.com/api/v9/users/@me',
                body: JSON.stringify(body),
                method: 'patch',
                headers: {
                  'authorization': token,
                  ////'accept-language': 'ru',
                  // 'origin': 'https://discord.com',
                  // 'referer': 'https://discord.com/channels/@me',
                  //'accept': '*/*',
                  //'content-length': body.length,
                  //'dnt': '1',
                  //'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
                  'content-type': 'application/json',
                  'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
                }
              };
              var agent = get_proxy_agent();
              if (agent) options.agent = agent;
              req(options, (err, response, body) => {
                return fin({ type: true });
                if (err || !response || !response.statusCode) return fin({ type: false, err: 'proxy' })
                if (response.statusCode != 200) return fin({ type: false, err: response.statusCode })
                return fin({ type: true });
              });
            } catch (err) {
              console.error(err);
            }
          })
        }
  
        // if (body.email) await go({
        //   email: body.email,
        //   password: body.password
        // })
  
        if (body.username) await go({
          username: body.username,
          password: body.password
        })
  
        if (body.avatar) await go({
          avatar: body.avatar,
          password: body.password
        })
  
        return fin({
          type: true
        })
  
  
      });
    }

    $('body').on('click', '.inviter-sel-acc', function () {
      if (!$(this).hasClass('active') && $('#modal-invite-accounts .inviter-acc-sel input').length != $('#modal-invite-accounts .inviter-acc-sel input:checked').length) {
        $(this).addClass('active');
        $('#modal-invite-accounts .inviter-acc-sel input').prop('checked', true);
        update_count_sel_accs();
      } else {
        $(this).removeClass('active')
        $('#modal-invite-accounts .inviter-acc-sel input').prop('checked', false);
        update_count_sel_accs();
      }
    })

    $('body').on('click', '.checker-sel-acc', function () {
      if (!$(this).hasClass('active') && $('#modal-check-accounts .checker-acc-sel input').length != $('#modal-check-accounts .checker-acc-sel input:checked').length) {
        $(this).addClass('active');
        $('#modal-check-accounts .checker-acc-sel input').prop('checked', true);
        update_count_sel_accs_checker();
      } else {
        $(this).removeClass('active')
        $('#modal-check-accounts .checker-acc-sel input').prop('checked', false);
        update_count_sel_accs_checker();
      }
    })

    $('body').on('click', '.editer-sel-acc', function () {
      if (!$(this).hasClass('active') && $('#modal-edit-account .editer-acc-sel input').length != $('#modal-edit-account .editer-acc-sel input:checked').length) {
        $(this).addClass('active');
        $('#modal-edit-account .editer-acc-sel input').prop('checked', true);
        update_count_sel_accs_editer();
      } else {
        $(this).removeClass('active')
        $('#modal-edit-account .editer-acc-sel input').prop('checked', false);
        update_count_sel_accs_editer();
      }
    })

    $('body').on('click', '#modal-invite-accounts .inviter-acc-sel input', function () {
      $(this).prop('checked', !$(this).prop('checked'));
      update_count_sel_accs();
    });

    $('body').on('click', '#modal-edit-account .editer-acc-sel input', function () {
      $(this).prop('checked', !$(this).prop('checked'));
      update_count_sel_accs_editer();
    });

    $('body').on('click', '#modal-check-accounts .checker-acc-sel input', function () {
      $(this).prop('checked', !$(this).prop('checked'));
      update_count_sel_accs_checker();
    });

    function update_count_sel_accs_checker() {
      var count = $('#modal-check-accounts .checker-acc-sel input:checked').length;
      $('#count-of-sel-accs-checker pro').html(`${count + NumberEnd(count, translater(translate.noty.number_end.accs))}`);
    }

    function update_count_sel_accs_editer() {
      var count = $('#modal-edit-account .editer-acc-sel input:checked').length;
      $('#count-of-sel-accs-editer pro').html(`${count + NumberEnd(count, translater(translate.noty.number_end.accs))}`);
    }

    function update_count_sel_accs() {
      var count = $('#modal-invite-accounts .inviter-acc-sel input:checked').length;
      $('#count-of-sel-accs-inviter pro').html(`${count + NumberEnd(count, translater(translate.noty.number_end.accs))}`);
    }

    function get_time_for_starter(delay) {
      logntiwpoer('delay: ' + JSON.stringify(delay));
      var from = delay.from * 1000;
      var to = delay.to * 1000;
      var s = randomInteger(from, to);
      logntiwpoer('s: ' + s);
      return s;
    }

    var ban_accs = [];

    var fat_black_list_users = [];

    function check_user_in_black_list(username, id = false) {
      console.warn('check_user_in_black_list', username, id);
      var data = [];
      if (fat_black_list_users) {
        data = fat_black_list_users;
      } else {
        data = store.get('black_list_users');
      }
      if (!data || data.length <= 0) return false;
      fat_black_list_users = data;
      if (data.indexOf(username) >= 0 || data.indexOf(sha1(username)) >= 0) return true;
      if (data.indexOf(`${username}***`) >= 0 || data.indexOf(sha1(`${username}***`)) >= 0) return true;
      //  if (id) {
      //    var check = false;
      //    data.forEach(e => {
      //     if (e.indexOf(id) >= 0 || e.indexOf(sha1(id)) >= 0) check = true;
      //    })
      //    return check
      //  }
      return false;
    }

    function noty_btn(avatar, username, message, token, url) {
      var msg = `<div class="user">
                     <div class="avatar">
                       <img src="${avatar}">
                     </div>
                     <div class="name">${username}</div>
                   </div>
                   <div class="message">${message}</div>`
      var type = 'warning';
      new Noty({
        text: msg,
        buttons: [
          Noty.button(translater(translate.noty.other.open_dia), 'btn-right-action waves-effect go-to-open-channel-discord', function (e) {
            logntiwpoer(e);
            var id = $(this).get(0).id;
            var token = $('#' + id).attr('token');
            var url = $('#' + id).attr('url');
            if (token != 'false' && url != 'false') login_discord(false, false, false, false, token, url);
          }, { 'token': token, 'url': url, 'action': 'new_account' }),
        ],
        type: type,
        layout: 'bottomLeft',
        theme: 'sunset',
        closeWith: ['click'],
        timeout: 30 * 1000
      }).show();
    }

    $('body').on('change', '#sound-noty-of-msgs-checkbox', function () {
      var val = $(this).prop('checked');
      if (!localStorage['test_sound_noty'] && val) {
        noty_btn('./img/assets/undefind-avatar.png', 'Test#1234', 'Test!', 'false', 'false');
        play_noty_msg_dis();
        setTimeout(() => {
          localStorage.setItem('test_sound_noty', 'true');
        }, 500);
      }
      update_tmp('sound_noty_of_msgs_checkbox', val);
    })

    $('body').on('change', '#notend-noty-of-msgs-checkbox', function () {
      var val = $(this).prop('checked');
      update_tmp('notend-noty-of-msgs-checkbox', val);
    })

    $('body').on('change', '#delay-autoanswer', function () {
      update_tmp('delay-autoanswer', $(this).val());
    });

    $('body').on('change', '#noty-of-msgs-checkbox', function () {
      var val = $(this).prop('checked');
      if (val) {
        $('#before-block-sound-notys').addClass('active');
        $('#before-block-notend-notys').addClass('active');
      } else {
        $('#before-block-sound-notys').removeClass('active');
        $('#before-block-notend-notys').removeClass('active');
      }
      setTimeout(() => {
        update_tmp('noty_of_msgs_checkbox', val);
      }, 1000);
    });
    window.AckTokens = {}
    var ackDiscord = (messageID, channelID, authorization) => {
      return true;
      return new Promise(async fin => {
        try {
          var properties = {
            "os": "Windows",
            "browser": "Chrome",
            "device": "",
            "system_locale": "ru-RU",
            "browser_user_agent": window.MyUserAgent,
            "browser_version": window.MyBrowserVersion,
            "os_version": "10",
            "referrer": "",
            "referring_domain": "",
            "referrer_current": "",
            "referring_domain_current": "",
            "release_channel": "stable",
            "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
            "client_event_source": null
          }
          var token = null;
          if (window.AckTokens[authorization]) {
            token = window.AckTokens[authorization]
          }
          var params = {
            url: `https://discord.com/api/v9/channels/${channelID}/messages/${messageID}/ack`,
            method: 'POST',
            headers: {
              authorization,
              'user-agent': properties['browser_user_agent'],
              // 'x-context-properties': 'e30=',
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
            },
            json: {
              token
            }
          }
          var data = await makeRequest(params.method, params.url, params.json, params.headers);
          if (!data.type) return fin({ type: false, err: data.err });
          data = JSON.parse(data.data)
          console.log(data)
          if (data.token) window.AckTokens[authorization] = data.token;
          return fin({
            type: true,
            data
          })
        } catch (err) {
          console.error('err34902039434', err)
          return fin({
            type: false,
            err
          })
        }
      })
    }
    var createDmChannel = (id, authorization) => {
      return new Promise(async fin => {
        try {
          var properties = {
            "os": "Windows",
            "browser": "Chrome",
            "device": "",
            "system_locale": "ru-RU",
            "browser_user_agent": window.MyUserAgent,
            "browser_version": window.MyBrowserVersion,
            "os_version": "10",
            "referrer": "",
            "referring_domain": "",
            "referrer_current": "",
            "referring_domain_current": "",
            "release_channel": "stable",
            "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
            "client_event_source": null
          }
          var params = {
            url: 'https://discord.com/api/v9/users/@me/channels',
            method: 'POST',
            headers: {
              authorization,
              'user-agent': properties['browser_user_agent'],
              'x-context-properties': 'e30=',
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
            },
            json: {
              recipients: [id]
            }
          }
          var data = await makeRequest(params.method, params.url, params.json, params.headers);
          if (!data.type) return fin({ type: false, err: data.err });
          data = JSON.parse(data.data)
          return fin({
            type: true,
            data
          })
          // var data = await new Promise(fin => {
          //   req(params, (err, res, body) => {
          //     fin(body)
          //   })
          // });
          // console.log('data', data);
          // if (!data.type) return fin({ type: false, err: data.err });
          // // data = JSON.parse(data.data)
          // return fin({
          //   type: true,
          //   data
          // })
          var params = {
            url: `https://discord.com/api/v9/users/${id}/profile`,
            method: 'GET',
            headers: {
              authorization,
              'user-agent': properties['browser_user_agent'],
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
            }
          }
          var data2 = await makeRequest(params.method, params.url, false, params.headers);
          // if (!data.type) return fin({type: false, err: data.err});
          return fin({
            type: true,
            data
          })
          var agent = get_proxy_agent();
          if (agent) params.agent = agent;
          req(params, (err, res, data) => {
            console.log(err, res, data)
            if (err || res.statusCode != 200) return fin({ type: false, err: data });
            req({}, (err, res, data2) => {
              console.log(err, res, data2)
              return fin({ type: true, data });
            });
          })
        } catch (err) {
          console.error(err)
          return fin({ type: false, err });
        }
      })
    }

    $('body').on('change', '#answer-rules-enable', function () {
      answer_scripts_block()
      update_tmp('answer-rules-enable', $(this).prop('checked'));
    })

    $('body').on('change', '#more-message-to-user', function () {
      var v = $(this).prop('checked');
      update_tmp('more-message-to-user', v);
      if (v) {
        $('#block-more-message-to-user').addClass('active');
      } else {
        $('#block-more-message-to-user').removeClass('active');
      }
    })

    $('body').on('change', '#auto-stop-dis', function () {
      var v = $(this).prop('checked');
      update_tmp('auto-stop-dis', v);
      if (v) {
        $('#block-auto-stop-dis').addClass('active');
      } else {
        $('#block-auto-stop-dis').removeClass('active');
      }
    });
    $('body').on('change', '#check-blacklist-private-dm', function () {
      var v = $(this).prop('checked');
      update_tmp('check-blacklist-private-dm', v);
    });

    $('body').on('change', '#count-of-more-message-to-user', function () {
      update_tmp('count-of-more-message-to-user', $(this).val());
    })

    $('body').on('change', '#limit-auto-stop-dis', function () {
      update_tmp('limit-auto-stop-dis', $(this).val());
    })

    $('body').on('keyup', '#limit-auto-stop-dis', function () {
      var val = parseInt($(this).val());
      if (isNaN(val)) return;
      $('#block-auto-stop-dis logs').text(NumberEnd(val, translater(translate.noty.number_end.unsuccessful_logs)));
    })

    function answer_scripts_block() {
      if ($('#answer-rules-enable').prop('checked')) {
        $('#text-autoanswer-block').css('height', '0')
        $('#text-autoanswer-block').css('opacity', '0')
        //$('#text-autoanswer-block').css('margin-top', '-10%')
        $('#text-autoanswer-block').css('pointer-events', 'none')
        if ($('#block-autoanswer').hasClass('active')) {
          $('#block-autoanswer').css('height', '145px')
          $('#answer-rules-block').addClass('active');
        }
      } else {
        $('#answer-rules-block').removeClass('active');
        $('#block-autoanswer').css('height', '')
        $('#text-autoanswer-block').css('height', '')
        //$('#text-autoanswer-block').css('margin-top', '')
        $('#text-autoanswer-block').css('opacity', '')
        $('#text-autoanswer-block').css('pointer-events', '')
      }
    }

    var list_of_users_message_listen = [];

    async function listen_messages(token, notys, spam_id, client = false, answer = false) {
      logntiwpoer(answer);
      if (!answer) if (!notys || !notys.value) return false;
      var check_stop_s = false;
      var check_client = false;
      var rules = answer.rules;
      if (client) check_client = true;
      if (!notys.notend) {
        emitter.on('stop_spam', (data) => {
          if (data.id == spam_id) {
            check_stop_s = true;
            if (!check_client) client.destroy();
          }
        })
      }
      if (!client) {
        var Discord = require("discord.js");
        client = new Discord.Client();
        await initDiscordCookie(token);
        await client.login(token);
      }
      var last_text = false;
      var check_answering = [];
      client.on('message', function (message) {
        if (check_stop_s) return false;
        var type = message.channel.type;
        if (type != 'dm') return false;
        var user = message.author;
        var user_id = user.id;
        var my_user_id = message.client.user.id;
        if (my_user_id == user_id) return false;
        if (!answer.rules && list_of_users_message_listen.indexOf(user_id) >= 0) return false;
        list_of_users_message_listen.push(user_id);
        var username = `${user.username}#${user.discriminator}`;
        var avatar = user.avatar;
        if (!avatar || avatar == null) {
          avatar = './img/assets/undefind-avatar.png';
        } else {
          avatar = `https://cdn.discordapp.com/avatars/${user_id}/${avatar}.png?size=128`;
        }
        var text = message.content;
        var channel_id = message.channel.id;
        var url = `https://discord.com/channels/@me/${channel_id}`;
        if (notys && notys.value) noty_btn(avatar, username, text, token, url);
        if (notys.sound) play_noty_msg_dis();
        logntiwpoer(`ANSWER::::::::::::::`);
        logntiwpoer(answer);
        if (answer && answer.type) {
          if (rules) {
            var msg_id_to_answer = 0;
            rules.reversedCopy().forEach(e => {
              if (msg_id_to_answer == 0) {
                var msg_id = e.msg_id;
                var else_msg_id = e.else_msg_id;
                if (e.data.length > 1) {
                  var operator = '';
                  e.data.forEach((z, ind, arr) => {
                    var jungle = '';
                    if (ind != arr.length - 1) {
                      if (z.oper == 'and') {
                        jungle = '&&'
                      } else {
                        jungle = '||'
                      }
                    }
                    var type = z.type;
                    var val = z.value;
                    var text_base64 = Buffer.from(text.toLowerCase()).toString('base64');
                    var val_base64 = Buffer.from(val.toLowerCase()).toString('base64');
                    if (type == 'indexof') {
                      operator += `Buffer.from('${text_base64}', 'base64').toString().indexOf(Buffer.from('${val_base64}', 'base64').toString()) >= 0 ${jungle} `
                    } else if (type == '!indexof') {
                      operator += `Buffer.from('${text_base64}', 'base64').toString().indexOf(Buffer.from('${val_base64}', 'base64').toString()) < 0 ${jungle} `
                    } else if (type == 'equally') {
                      operator += `Buffer.from('${text_base64}', 'base64').toString() == Buffer.from('${val_base64}', 'base64').toString() ${jungle} `
                    } else if (type == '!equally') {
                      operator += `Buffer.from('${text_base64}', 'base64').toString() != Buffer.from('${val_base64}', 'base64').toString() ${jungle} `
                    }
                  })
                  if (eval(operator)) {
                    msg_id_to_answer = msg_id;
                  } else {
                    if (else_msg_id) msg_id_to_answer = else_msg_id;
                  }
                } else {
                  var type = e.data[0].type;
                  var val = e.data[0].value;
                  var msg_id = e.msg_id;
                  if (type == 'indexof' && text.toLowerCase().indexOf(val) >= 0) {
                    msg_id_to_answer = msg_id;
                  } else if (type == '!indexof' && text.toLowerCase().indexOf(val) < 0) {
                    msg_id_to_answer = msg_id;
                  } else if (type == 'equally' && text.toLowerCase() == val.toLowerCase()) {
                    msg_id_to_answer = msg_id;
                  } else if (type == '!equally' && text.toLowerCase() != val.toLowerCase()) {
                    msg_id_to_answer = msg_id;
                  } else {
                    if (else_msg_id) msg_id_to_answer = else_msg_id;
                  }
                }
              }
            })
            if (msg_id_to_answer == 0) return;
            var message_to_send = get_answer_message_by_id(msg_id_to_answer);
            var text = message_to_send.text;
          }
          var channel = message.channel;
          if (!rules && check_answering[channel.recipient.id]) return;
          check_answering[channel.recipient.id] = true;
          if (!rules) {
            var text = answer.text;
            if ($('#text-autoanswer').length > 0) {
              text = replace_text_n($('#text-autoanswer')[0].emojioneArea.getText());
              text = replace_text(n_emoji.unemojify(text));
            } else {
              if (last_text) {
                text = last_text;
              } else {
                var text = replace_text(spam.text);
              }
            }
            last_text = text;
          }
          for (var zfg = 0; zfg < 10000; zfg++) {
            text = text.replace('[rand]', rand(1000, 9999));
            text = text.replace('[username]', channel.recipient.username);
            text = text.replace('[discrim]', channel.recipient.discriminator);
            text = text.replace('[tag]', `${channel.recipient.username}#${channel.recipient.discriminator}`);
            text = text.replace('[myusername]', client.user.username);
            text = text.replace('[mydiscrim]', client.user.discriminator);
            text = text.replace('[mytag]', `${client.user.username}#${client.user.discriminator}`);
            text = text.replace('[@tag]', `<@${channel.recipient.id}>`);
            text = text.replace('[@mytag]', `<@${client.user.id}>`);
          }
          if (rules) {
            var spoiler = '';
            if (message_to_send.spoiler) spoiler = 'SPOILER_';
            var new_filer = [];
            if (message_to_send.files) {
              message_to_send.files.forEach((e, ind, arr) => {
                fs.readFile(`${__dirname}/upload/${e.name}`, (err, data) => {
                  if (err) noty('error', `Ошибка при получении файла: ${err}`);
                  new_filer.push({
                    attachment: data,
                    name: `${spoiler}${e.name}`
                  })
                  if (ind == arr.length - 1) {
                    var options = {}
                    options.files = new_filer;
                    setTimeout(() => {
                      channel.send(text, options);
                    }, answer.timeout * 1000);
                  }
                })
              })
            } else {
              setTimeout(() => {
                channel.send(text);
              }, answer.timeout * 1000);
            }
          } else {
            if (answer.send_as_spoiler) {
              var new_filer = [];
              answer.options.files.forEach(ge => {
                new_filer.push({
                  attachment: ge.attachment,
                  name: `SPOILER_${ge.name}`
                })
              })
              answer.options.files = new_filer;
            }
            setTimeout(() => {
              channel.send(text, answer.options);
            }, answer.timeout * 1000);
          }
        }
      });
    }

    function play_noty_msg_dis() {
      $('#message-noty-sound').trigger('play');
    }

    function get_fetchmembers(token, guild_id = false, invite, limit = 50000, client = false, acc_name = '') {
      return new Promise(fin => {
        if (typeof invite == 'object' && invite.length > 1) {
          get_guildid_from_invite(get_invite_code(invite[0]), token, limit, acc_name).then(async (check) => {
            logntiwpoer(check);
            if (!check.type) return fin({ type: false, err: check.err });
            guild_id = check.id;
            var Discord = require('discord.js');
            var client = new Discord.Client();
            await initDiscordCookie(token);
            var check = await client.login(token);
            if (!check || check != token) return fin({ type: false, err: 401 });
            if (!client.guilds.get(guild_id)) return fin({ type: false, err: 782 });
            //if (!client.guilds.get(guild_id)) return fin({type: false, err: 197});
            var data = await client.guilds.get(guild_id).fetchMembers('', limit);
            return fin({ type: true, data: data, client: client, guild_id: guild_id });
          })
        } else {
          get_guildid_from_invite(invite, token, limit, acc_name, true).then(async (check) => {
            if (!check.type) return fin({ type: false, err: check.err });
            guild_id = check.id;
            var Discord = require('discord.js');
            await client.destroy();
            await client.login(token);
            if (!client.guilds.get(guild_id)) return fin({ type: false, err: 782 });
            //if (!client.guilds.get(guild_id)) return fin({type: false, err: 197});
            var data = await client.guilds.get(guild_id).fetchMembers('', limit);
            return fin({ type: true, data: data, client: client, guild_id: guild_id });
          })
        }
      });
    }

    function start_spam(spam, account, files_for_spam = false, spam_answer = false, userCalls = false, deleteMessages = false) {
      return new Promise((fin, fal) => {
        if (!spam || !account) return fin({ type: false });
        var check_all_exit = 0;
        fat_black_list_users = [];
        if (store.has('black_list_users')) fat_black_list_users = store.get('black_list_users');
        //if (!spam.type || spam.data.status != 1) return fin({type: false});
        ban_accs = [];
        var type_message = spam.type;
        var spam_id = spam.id;
        var add_black = spam.add_black;
        var id = spam.pars_id;
        var count_success_message_change = spam.count_success_message_change;
        var count_send_messages_for_account = [];
        var last_send_acc = [];
        var accs_changes = [];
        var change_accounts = spam.change_accounts;
        var all_accounts = change_accounts;
        if (!change_accounts || change_accounts.length <= 0) all_accounts = [];
        var turn = spam.turn;
        var all_change_accounts = [];
        var turn_account = [];
        var wrong_accs = [];
        var wrong_accs_count_mess = 0;
        var timeoutes = spam.delay;
        var add_friends = spam.add_friends;
        var checker_stop = false;
        var fat_black_list_users_count = 0;
        var all_count_mess = 0;
        var notys = spam.notys;
        var answer_data = spam_answer;
        var send_as_spoiler = spam.send_as_spoiler;
        var to_type = spam.to_type;
        var to_userid = spam.to_userid;
        var count_more_msg_to_user = spam.count_more_msg_to_user;
        //if (store.has('accounts') && store.get('accounts').length > 0) fat_get_accounts = store.get('accounts');
        //if (store.has('accounts_token')) fat_get_acc_token_v = store.get('accounts_token');
        if (to_type == 0) {
          get_pars_list(id).then(async (pars) => {
            var limit_pars = 50000;
            if (pars.limit) limit_pars = pars.limit;
            if (!pars.type) return fin({ type: false });
            var users = await get_pars_data_of_file(id);
            users = users.data;
            if (!users || users.length < 2) return fin({ type: false, err: 3 });
            var check_last_users = [];
            var check_fast_err = [];
            var check_dont_check_acc = false;
            var invite = pars.data.invite;
            if (invite.indexOf('|') >= 0) {
              invite = invite.split('|');
              var tmp_invite = [];
              invite.forEach(e => {
                if (tmp_invite.indexOf(e) < 0) tmp_invite.push(e);
              });
              invite = tmp_invite;
            }
            var check_accept_invite = [];
            emitter.on('stop_spam', function (data) {
              if (data.id == spam_id) {
                checker_stop = true;
                return fin({ type: true });
              }
            });
            var fetch_mem = false;
            var fetch_mem2 = false;
            var blackListCounter = account.length;
            if (blackListCounter < 5) {
              blackListCounter = 20;
            } else if (blackListCounter >= 5 && blackListCounter < 50) {
              blackListCounter = 35;
            } else if (blackListCounter >= 50 && blackListCounter < 100) {
              blackListCounter = 50;
            } else {
              blackListCounter = 60;
            }
            function starter_spamer_api(acc, newsf = false, nexter = false) {
              if (checker_stop) return false;
              if (check_finish_spam) return fin({ type: true });
              logntiwpoer('acc: ' + acc);
              logntiwpoer('all_accounts: ' + all_accounts);
              logntiwpoer('all_change_accounts: ' + all_change_accounts);
              logntiwpoer('all_change_accounts.indexOf(acc): ' + all_change_accounts.indexOf(acc));
              logntiwpoer('count_send_messages_for_account[acc] asdjkajksdjkasdjkasdjkasdjk: ' + count_send_messages_for_account[acc]);
              logntiwpoer(wrong_accs);
              // if (all_change_accounts.indexOf(acc) >= 0 && all_change_accounts.length == all_accounts.length && !turn) {
              //   noty('warning', 'End_Code: 78');
              //   return fin({type: true});
              // }

              if (wrong_accs.length >= all_accounts.length) {
                noty('warning', 'End_Code: 11');
                return fin({ type: true });
              }
              if (count_success_message_change) {
                if (wrong_accs.length >= all_accounts.length - 1) check_dont_check_acc = true;
              }

              if (turn && !newsf) {
                var next_acc = all_accounts[all_accounts.indexOf(acc) + 1];
                if (!next_acc) next_acc = all_accounts[0];
                logntiwpoer('next_acc: ' + next_acc);
                logntiwpoer('1');
                setTimeout(() => {
                  starter_spamer_api(next_acc, true);
                }, 10)
                return false;
              }

              //client.emit('guildMembersChunk', members, guild)

              if (wrong_accs.indexOf(acc) >= 0) {
                3
                if (wrong_accs.length >= all_accounts.length) return fin({ type: true });
                if (turn || count_success_message_change) {
                  logntiwpoer('nexter222');
                  var cheko = false;
                  all_accounts.forEach((e, ind, arr) => {
                    logntiwpoer(count_send_messages_for_account[e]);
                    logntiwpoer(wrong_accs.indexOf(e));
                    if (wrong_accs.indexOf(e) < 0 && !cheko) {
                      if (!turn && turn_account.indexOf(e) < 0) {
                        if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                          logntiwpoer('nexter2222!!!!!!!!!!!!!!!');
                          cheko = true;
                          setTimeout(() => {
                            starter_spamer_api(e);
                          }, 10)
                        }
                      } else if (turn) {
                        if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                          logntiwpoer('nexter2222!!!!!!!!!!!!!!!');
                          cheko = true;
                          setTimeout(() => {
                            starter_spamer_api(e);
                          }, 10)
                        }
                      }
                    }
                  })
                  return;
                }
                return false;
              }

              if (nexter) {
                logntiwpoer('nexter');
                var cheko = false;
                all_accounts.forEach((e, ind, arr) => {
                  logntiwpoer(count_send_messages_for_account[e]);
                  logntiwpoer(wrong_accs.indexOf(e));
                  if (wrong_accs.indexOf(e) < 0 && !cheko) {
                    if (!turn && turn_account.indexOf(e) < 0) {
                      if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                        logntiwpoer('nexter!!!!!!!!!!!!!!!');
                        cheko = true;
                        setTimeout(() => {
                          starter_spamer_api(e);
                        }, 10)
                      }
                    } else if (turn) {
                      if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                        logntiwpoer('nexter!!!!!!!!!!!!!!!');
                        cheko = true;
                        setTimeout(() => {
                          starter_spamer_api(e);
                        }, 10)
                      }
                    }
                  }
                })
                return;
              }

              if (count_success_message_change && turn_account.indexOf(acc) >= 0) {
                if (!turn && count_success_message_change && last_spam_count_messages >= (count_success_message_change * ((all_accounts.length - wrong_accs.length) + wrong_accs_count_mess))) {
                  logntiwpoer(wrong_accs.length);
                  logntiwpoer(all_accounts.length);
                  noty('warning', 'End_Code: 1');
                  return fin({ type: true });
                }
                logntiwpoer('1');
                setTimeout(() => {
                  starter_spamer_api(acc, false, true);
                }, 10)
                return false;
              }

              if (!turn && count_success_message_change && last_spam_count_messages >= (count_success_message_change * ((all_accounts.length - wrong_accs.length) + wrong_accs_count_mess))) {
                logntiwpoer(wrong_accs.length);
                logntiwpoer(all_accounts.length);
                noty('warning', 'End_Code: 1');
                return fin({ type: true });
              }

              logntiwpoer(Object.keys(count_send_messages_for_account));
              if (!turn && count_success_message_change) {
                if (all_change_accounts.indexOf(acc) >= 0 && count_send_messages_for_account[acc] >= count_success_message_change) {
                  logntiwpoer('all_change_accounts >= 0');
                  var check = false;
                  all_accounts.forEach((e, ind, arr) => {
                    if (check) { logntiwpoer('1'); return false; }
                    if (turn_account.indexOf(e) < 0 && all_change_accounts.indexOf(e) < 0) {
                      check = true;
                      logntiwpoer('1'); setTimeout(() => { starter_spamer_api(e); }, 10);
                    }
                    if (ind == arr.length - 1 && !check && last_spam_count_messages >= (count_success_message_change * (((all_accounts.length - wrong_accs.length))) + wrong_accs_count_mess)) {
                      noty('warning', 'End_Code: 1');
                      return fin({ type: true });
                    }
                  });
                  logntiwpoer('1'); return false;
                }
              } else if (!turn && !count_success_message_change && wrong_accs.indexOf(acc) >= 0) {
                if (wrong_accs.length >= all_accounts.length) return fin({ type: true });
                logntiwpoer('1'); return false;
              }

              turn_account.push(acc);
              all_change_accounts.push(acc);
              var Discord = require('discord.js');
              var client = new Discord.Client();
              noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc }));
              var tmp_acc_data = get_account(acc);
              var email = tmp_acc_data.login;
              var pass = tmp_acc_data.pass;
              if (!get_acc_token(email) && !tmp_acc_data.rucaptcha) return noty('error', translater(translate.noty.other.dont_h_ar, false, acc));
              logntiwpoer('sss');
              loginer_acc_api(email, pass, tmp_acc_data.rucaptcha).then((check) => {
                logntiwpoer(check);
                if (!check.type) {
                  noty_of_ban_account(acc);
                  if (wrong_accs.indexOf(acc) < 0) {
                    wrong_accs.push(acc);
                    wrong_accs_count_mess += count_send_messages_for_account[acc];
                  }
                  if (wrong_accs.length >= all_accounts.length) {
                    noty('warning', 'End_Code: 5')
                    return fin({ type: true });
                  } else if (count_success_message_change) {
                    logntiwpoer('1'); setTimeout(() => { starter_spamer_api(acc, false, true); }, 10);
                  }
                  if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }
                  return false;
                }
                var token = check.token;
                console.log('start-get_guildid_from_invite')
                get_guildid_from_invite(invite, token, 50000, acc, client).then(async check => {
                  console.log('get_guildid_from_invite', check)
                  logntiwpoer(check);
                  if (!check.type) {
                    if (check.err == 401) {
                      noty_of_ban_account(acc);
                      if (wrong_accs.indexOf(acc) < 0) {
                        wrong_accs.push(acc);
                        wrong_accs_count_mess += count_send_messages_for_account[acc];
                      }
                      logntiwpoer('BAN - ' + acc);
                      logntiwpoer(wrong_accs);
                      if (wrong_accs.length >= all_accounts.length) {
                        noty('warning', 'End_Code: 5')
                        return fin({ type: true });
                      } else if (count_success_message_change) {
                        logntiwpoer('1'); setTimeout(() => { starter_spamer_api(acc, false, true); }, 10);
                      }
                      if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }

                      return false;
                    }
                    logntiwpoer('111: ' + check.err);
                    // noty('error', 'Аккаунт ('+acc+') заблокирован на сервере.');
                    return starter_spamer_api(acc, false, true);
                  }
                  var guild_id = check.id;
                  await initDiscordCookie(token);
                  client.login(token).then((check) => {
                    logntiwpoer(check)
                    if (check != token) return fin({ type: false, err: 401 });
                    listen_messages(token, notys, spam_id, client, answer_data);
                    function starter(i = 0) {
                      //logntiwpoer(i);
                      if (wrong_accs.length >= all_accounts.length) return fin({ type: true });
                      if (checker_stop) return false;
                      if (!turn && count_success_message_change && last_spam_count_messages >= (count_success_message_change * ((all_accounts.length - wrong_accs.length) + wrong_accs_count_mess))) {
                        logntiwpoer(count_success_message_change * all_accounts.length);
                        logntiwpoer(last_spam_count_messages);
                        noty('warning', 'End_Code: 2');
                        return fin({ type: true });
                      }
                      if (check_finish_spam) return fin({ type: true });
                      if (check_pause_spam) {
                        logntiwpoer('pause');
                        var last_time = setInterval(() => {
                          logntiwpoer('pauseSSS');
                          if (check_finish_spam) {
                            clearInterval(last_time);
                            return fin({ type: true });
                          }
                          if (!check_pause_spam) {
                            clearInterval(last_time);
                            setTimeout(() => {
                              starter(i);
                            }, 150);
                          }
                        }, 500);
                        return false;
                      }
                      var last_text = false;
                      //logntiwpoer(users);
                      var user = users[i];
                      //logntiwpoer(user) 
                      if (!user || !user.id) { noty('warning', 'End_Code: 4'); return fin({ type: true }); }
                      var user_id = user.id;
                      var username = user.username;
                      if (check_last_users[sha1(username)]) {
                        i++;
                        setTimeout(() => {
                          starter(i);
                        }, 10);
                        return false;
                      }
                      try {
                        if (typeof fat_black_list_users == 'object') {
                          if (fat_black_list_users.join('\n').indexOf(username) >= 0 || fat_black_list_users.join('\n').indexOf(user_id) >= 0 || check_user_in_black_list(username)) {
                            i++;
                            setTimeout(() => { starter(i); }, 10);
                            return false;
                          }
                        } else {
                          if (fat_black_list_users.indexOf(username) >= 0 || fat_black_list_users.indexOf(user_id) >= 0 || check_user_in_black_list(username)) {
                            i++;
                            setTimeout(() => { starter(i); }, 10);
                            return false;
                          }
                        }
                      } catch (err) { }
                      check_last_users[sha1(username)] = true;
                      async function f() {
                        logntiwpoer('w22');
                        logntiwpoer('all_count_mess: ' + all_count_mess);
                        var id = guild_id;
                        var i = 0;
                        var text;
                        logntiwpoer(user_id);
                        var avatar = false;
                        var check_fetchm = false;
                        async function a() {
                          if (add_friends) await add_friend(username, token);
                          var tmp_check_mem = false;
                          setTimeout(async function () {
                            var datadm = await createDmChannel(user_id, token);
                            if (!datadm.type) {

                              var r = JSON.stringify(datadm);
                              if (r.indexOf('401') >= 0 || r.indexOf('auth') >= 0 || r.indexOf('t token') >= 0) {
                                noty_of_ban_account(acc);
                                if (wrong_accs.indexOf(acc) < 0) {
                                  wrong_accs.push(acc);
                                  wrong_accs_count_mess += count_send_messages_for_account[acc];
                                }
                                logntiwpoer('BAN');
                                logntiwpoer(wrong_accs);
                                logntiwpoer(all_accounts);
                                if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }
                                if (wrong_accs.length >= all_accounts.length) {
                                  noty('warning', 'End_Code: 5')
                                  return fin({ type: true });
                                } else if (count_success_message_change) {
                                  logntiwpoer('1');
                                  setTimeout(() => { starter_spamer_api(acc); }, 150);
                                }
                                return false;
                              }
                              if (checker_stop) return false;
                              if (r.indexOf('too fast') >= 0) {
                                var timeout_for_spam = get_timeout_for_spam();
                                if (!timeout_for_spam) {
                                  logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                  i++;
                                  setTimeout(() => { starter(i); }, 150);
                                  return;
                                }
                                noty('warning', 'Timeout - ' + timeout_for_spam.text + ' (' + acc + ')', timeout_for_spam.sec * 1000)
                                add_log_spam('timeout', username, avatar, spam_id, timeout_for_spam.text);
                                setTimeout(() => {
                                  logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                  i++;
                                  starter(i);
                                }, timeout_for_spam.sec * 1000);
                                emitter.on('stop_spam', function (data) {
                                  if (data.id == spam_id) clearTimeout(timeout_spam_d);
                                });
                                return false;
                                // noty('warning', 'Timeout - 5 min ('+acc+')', 315 * 1000)
                                // add_log_spam('timeout', username, avatar, spam_id);
                                // setTimeout(() => {
                                //   logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                //     i++;
                                //     starter(i);
                                // }, 315 * 1000);
                                // return false;
                              }
                              logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                              i++;
                              setTimeout(() => {
                                starter(i);
                              }, get_time_for_starter(timeoutes));
                            }
                            datadm = datadm.data;
                            console.log('datadm', datadm)
                            var channelID = datadm.id;
                            console.log('userCalls', userCalls)
                            if (userCalls) callToUser(client, channelID);
                            logntiwpoer(datadm);
                            logntiwpoer(datadm.recipients[0]);
                            var dm = client.actions.ChannelCreate.handle(datadm).channel;
                            logntiwpoer(dm);
                            var options_send = false;
                            if (send_as_spoiler) {
                              var new_filer = [];
                              files_for_spam.forEach(ge => {
                                new_filer.push({
                                  attachment: ge.attachment,
                                  name: `SPOILER_${ge.name}`
                                })
                              })
                              files_for_spam = new_filer;
                            }
                            if (type_message != 1) options_send = { files: files_for_spam };
                            for (var index_count_more_msg_to_user = 0; index_count_more_msg_to_user < count_more_msg_to_user; index_count_more_msg_to_user++) {
                              setTimeout(() => {
                                if (type_message == 1) {
                                  if ($('#text-to-message-users').length > 0) {
                                    text = replace_text_n($('#text-to-message-users')[0].emojioneArea.getText());
                                    text = replace_text(n_emoji.unemojify(text));
                                  } else {
                                    if (last_text) {
                                      text = last_text;
                                    } else {
                                      var text = replace_text(spam.text);
                                    }
                                  }
                                } else {
                                  if ($('#text-to-message-users-file').length > 0) {
                                    text = replace_text_n($('#text-to-message-users-file')[0].emojioneArea.getText());
                                    text = replace_text(n_emoji.unemojify(text));
                                  } else {
                                    if (last_text) {
                                      text = last_text;
                                    } else {
                                      var text = replace_text(spam.text);
                                    }
                                  }
                                }
                                last_text = text;
                                for (var zfg = 0; zfg < 10000; zfg++) {
                                  text = text.replace('[rand]', rand(1000, 9999));
                                  text = text.replace('[username]', datadm.recipients[0].username);
                                  text = text.replace('[discrim]', datadm.recipients[0].discriminator);
                                  text = text.replace('[tag]', `${datadm.recipients[0].username}#${datadm.recipients[0].discriminator}`);
                                  text = text.replace('[myusername]', client.user.username);
                                  text = text.replace('[mydiscrim]', client.user.discriminator);
                                  text = text.replace('[mytag]', `${client.user.username}#${client.user.discriminator}`);
                                  text = text.replace('[@tag]', `<@${datadm.recipients[0].id}>`);
                                  text = text.replace('[@mytag]', `<@${client.user.id}>`);
                                }
                                dm.send(text, options_send).then((message) => {
                                  console.warn('message', message);
                                  // console.warn('messagemessagemessage', message)
                                  // send13Ws(channelID, client);
                                  // console.log('client.ws', client.ws)
                                  console.log('ws_send', client.ws.shards.get(0).send({ op: 13, d: { channel_id: channelID } }, true));
                                  if (deleteMessages) {
                                    setTimeout(() => {
                                      message.delete();
                                    }, deleteMessages * 1000);
                                  }
                                  avatar = message.channel.recipient.avatar;
                                  if (avatar != null && avatar.indexOf('assets') >= 0) {
                                    avatar = consts.app_data.undefind_avatar;
                                  } else {
                                    avatar = `https://cdn.discordapp.com/avatars/${user_id}/${avatar}.png?size=128`;
                                  }
                                  last_spam_count_messages++;
                                  last_send_acc.push(acc);
                                  ackDiscord(message.id, channelID, token);
                                  add_log_spam('send', username, avatar, spam_id);
                                  if (!count_send_messages_for_account[acc]) {
                                    count_send_messages_for_account[acc] = 1;
                                  } else {
                                    count_send_messages_for_account[acc]++;
                                  }
                                  if (index_count_more_msg_to_user >= count_more_msg_to_user - 1) {
                                    if (add_black) {
                                      // fat_black_list_users.push(`${username}:${user_id}`);
                                      fat_black_list_users.push(username);
                                      fat_black_list_users_count++;
                                      if (fat_black_list_users_count > blackListCounter) {
                                        fat_black_list_users_count = 0;
                                        store.set('black_list_users', fat_black_list_users);
                                      }
                                    }
                                    if (count_success_message_change && count_success_message_change <= count_send_messages_for_account[acc]) {
                                      if (check_dont_check_acc) {
                                        logntiwpoer('starter _ check_dont_check_acc _!!!');
                                        setTimeout(() => {
                                          i++;
                                          starter(i);
                                        }, get_time_for_starter(timeoutes));
                                      } else {
                                        logntiwpoer('starter_spamer_api!!!');
                                        logntiwpoer('1'); setTimeout(() => { starter_spamer_api(acc); }, 150);
                                      }
                                    } else {
                                      logntiwpoer('starter!!!');
                                      setTimeout(() => {
                                        i++;
                                        starter(i);
                                      }, get_time_for_starter(timeoutes));
                                    }
                                  }
                                }).catch((r) => {
                                  try {
                                    console.warn('2341', r, username, "tmp_data['check-blacklist-private-dm']", tmp_data['check-blacklist-private-dm']);
                                    if (tmp_data['check-blacklist-private-dm'] && String(r).indexOf('nnot send messages') >= 0) add_to_black_list(`${username}***`)
                                  } catch (err) {
                                    console.error('err324203490234234', err);
                                  }

                                  logntiwpoer(r);
                                  r = String(r);
                                  if (r.indexOf('401') >= 0 || r.indexOf('auth') >= 0 || r.indexOf('t token') >= 0) {
                                    noty_of_ban_account(acc);
                                    if (wrong_accs.indexOf(acc) < 0) {
                                      wrong_accs.push(acc);
                                      wrong_accs_count_mess += count_send_messages_for_account[acc];
                                    }
                                    if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }
                                    if (wrong_accs.length >= all_accounts.length) {
                                      noty('warning', 'End_Code: 5')
                                      return fin({ type: true });
                                    } else if (count_success_message_change) {
                                      logntiwpoer('1');
                                      setTimeout(() => { starter_spamer_api(acc); }, 150);
                                    }
                                    return false;
                                  }
                                  if (checker_stop) return false;
                                  r = '' + r;
                                  logntiwpoer(r);
                                  if (r.indexOf('too fast') >= 0) {
                                    var timeout_for_spam = get_timeout_for_spam();
                                    if (!timeout_for_spam) {
                                      logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                      i++;
                                      setTimeout(() => { starter(i); }, 150);
                                      return;
                                    }
                                    noty('warning', 'Timeout - ' + timeout_for_spam.text + ' (' + acc + ')', timeout_for_spam.sec * 1000)
                                    add_log_spam('timeout', username, avatar, spam_id, timeout_for_spam.text);
                                    var timeout_spam_d = setTimeout(() => {
                                      logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                      i++;
                                      starter(i);
                                    }, timeout_for_spam.sec * 1000);
                                    emitter.on('stop_spam', function (data) {
                                      if (data.id == spam_id) clearTimeout(timeout_spam_d);
                                    });
                                    // noty('warning', 'Timeout - 5 min ('+acc+')', 315 * 1000)
                                    // add_log_spam('timeout', username, avatar, spam_id);
                                    // setTimeout(() => {
                                    //   logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                    //     i++;
                                    //     starter(i);
                                    // }, 315 * 1000);
                                    return;
                                  }
                                  logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                                  i++;
                                  setTimeout(() => {
                                    starter(i);
                                  }, get_time_for_starter(timeoutes));
                                });
                              }, get_time_for_starter(timeoutes) * index_count_more_msg_to_user)
                            }
                          }, 500);
                        }
                        a();
                      }
                      f();
                    }
                    starter();
                  }).catch((r) => {
                    logntiwpoer(r);
                    if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('401') >= 0 || r.message.indexOf('t token') >= 0) {
                      noty_of_ban_account(acc)
                    } else {
                      noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
                    }
                    if (wrong_accs.indexOf(acc) < 0) {
                      wrong_accs.push(acc);
                      wrong_accs_count_mess += count_send_messages_for_account[acc];
                    }
                    logntiwpoer('BAN');
                    logntiwpoer(wrong_accs)
                    if (wrong_accs.length >= all_accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
                    starter_spamer_api(acc);
                  });
                })
              }).catch(e => {
                console.error(e)
              });
            }
            var inderex = 0;
            var check_get_fetchmembers = false;
            async function z() {
              account.forEach((accu, index) => {
                if (all_accounts.indexOf(accu) < 0) all_accounts.push(accu);
                inderex++;
                check_fast_err[sha1(accu)] = 0;
                setTimeout(() => {
                  starter_spamer_api(accu);
                }, 500 * inderex);
              });
            }
            z();
          });
        } else if (to_type == 1) {
          var a = ['[@mytag]', 'actions', 'ChannelCreate', 'channel', 'attachment', 'SPOILER_', 'recipient', 'avatar', 'app_data', 'undefind_avatar', 'https://cdn.discordapp.com/avatars/', '.png?size=128', 'send', 'set', 'starter\x20_\x20check_dont_check_acc\x20_!!!', 'starter_spamer_api!!!', 'starter!!!', 'catch', '401', 'auth', 'ban', 'too\x20fast', 'asdSDASDASD', 'timeout', 'not_send', 'sec', 'stop_spam', 'BAN', 'message', 'ncorrect\x20login', 'err_c_get_acc_token', 'End_Code:\x207', 'checking_user_id', 'destroy', 'dont_f_user_id', 'users', 'post', 'start_dis', 'acc:\x20', 'all_accounts:\x20', 'all_change_accounts.indexOf(acc):\x20', 'count_send_messages_for_account[acc]\x20asdjkajksdjkasdjkasdjkasdjk:\x20', 'length', 'warning', 'End_Code:\x2011', 'next_acc:\x20', 'indexOf', 'nexter222', 'forEach', 'nexter2222!!!!!!!!!!!!!!!', 'nexter', 'nexter!!!!!!!!!!!!!!!', 'End_Code:\x201', 'keys', 'all_change_accounts\x20>=\x200', 'push', 'discord.js', 'Client', 'noty', 'other', 'login', 'pass', 'rucaptcha', 'error', 'dont_h_ar', 'then', 'type', 'End_Code:\x205', 'oasd', 'token', 'pauseSSS', 'w22', '#text-to-message-users', 'emojioneArea', 'getText', 'unemojify', 'text', '#text-to-message-users-file', 'api', 'channels', 'recipients', 'discriminator', 'replace', '[rand]', '[username]', 'username', '[discrim]', '[tag]', '[myusername]', 'user', '[mytag]', '[@tag]']; (function (c, d) { var e = function (f) { while (--f) { c['push'](c['shift']()); } }; e(++d); }(a, 0x82)); var b = function (c, d) { c = c - 0x0; var e = a[c]; return e; }; function starter_spamer_api(c, d = ![], e = ![]) { if (checker_stop) return ![]; if (check_finish_spam) return fin({ 'type': !![] }); logntiwpoer(b('0x0') + c); logntiwpoer(b('0x1') + all_accounts); logntiwpoer('all_change_accounts:\x20' + all_change_accounts); logntiwpoer(b('0x2') + all_change_accounts['indexOf'](c)); logntiwpoer(b('0x3') + count_send_messages_for_account[c]); logntiwpoer(wrong_accs); if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) { noty(b('0x5'), b('0x6')); return fin({ 'type': !![] }); } if (count_success_message_change) { if (wrong_accs['length'] >= all_accounts[b('0x4')] - 0x1) check_dont_check_acc = !![]; } if (turn && !d) { var f = all_accounts[all_accounts['indexOf'](c) + 0x1]; if (!f) f = all_accounts[0x0]; logntiwpoer(b('0x7') + f); logntiwpoer('1'); setTimeout(() => { starter_spamer_api(f, !![]); }, 0xa); return ![]; } if (wrong_accs[b('0x8')](c) >= 0x0) { 0x3; if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) return fin({ 'type': !![] }); if (turn || count_success_message_change) { logntiwpoer(b('0x9')); var g = ![]; all_accounts[b('0xa')]((h, i, j) => { logntiwpoer(count_send_messages_for_account[h]); logntiwpoer(wrong_accs[b('0x8')](h)); if (wrong_accs[b('0x8')](h) < 0x0 && !g) { if (!turn && turn_account[b('0x8')](h) < 0x0) { if (!count_send_messages_for_account[h] || count_send_messages_for_account[h] < count_success_message_change) { logntiwpoer(b('0xb')); g = !![]; setTimeout(() => { starter_spamer_api(h); }, 0xa); } } else if (turn) { if (!count_send_messages_for_account[h] || count_send_messages_for_account[h] < count_success_message_change) { logntiwpoer(b('0xb')); g = !![]; setTimeout(() => { starter_spamer_api(h); }, 0xa); } } } }); return; } return ![]; } if (e) { logntiwpoer(b('0xc')); var g = ![]; all_accounts[b('0xa')]((l, m, n) => { logntiwpoer(count_send_messages_for_account[l]); logntiwpoer(wrong_accs[b('0x8')](l)); if (wrong_accs[b('0x8')](l) < 0x0 && !g) { if (!turn && turn_account[b('0x8')](l) < 0x0) { if (!count_send_messages_for_account[l] || count_send_messages_for_account[l] < count_success_message_change) { logntiwpoer('nexter!!!!!!!!!!!!!!!'); g = !![]; setTimeout(() => { starter_spamer_api(l); }, 0xa); } } else if (turn) { if (!count_send_messages_for_account[l] || count_send_messages_for_account[l] < count_success_message_change) { logntiwpoer(b('0xd')); g = !![]; setTimeout(() => { starter_spamer_api(l); }, 0xa); } } } }); return; } if (count_success_message_change && turn_account[b('0x8')](c) >= 0x0) { if (!turn && count_success_message_change && last_spam_count_messages >= count_success_message_change * (all_accounts['length'] - wrong_accs[b('0x4')] + wrong_accs_count_mess)) { logntiwpoer(wrong_accs[b('0x4')]); logntiwpoer(all_accounts[b('0x4')]); noty(b('0x5'), b('0xe')); return fin({ 'type': !![] }); } logntiwpoer('1'); setTimeout(() => { starter_spamer_api(c, ![], !![]); }, 0xa); return ![]; } if (!turn && count_success_message_change && last_spam_count_messages >= count_success_message_change * (all_accounts[b('0x4')] - wrong_accs[b('0x4')] + wrong_accs_count_mess)) { logntiwpoer(wrong_accs[b('0x4')]); logntiwpoer(all_accounts[b('0x4')]); noty(b('0x5'), 'End_Code:\x201'); return fin({ 'type': !![] }); } logntiwpoer(Object[b('0xf')](count_send_messages_for_account)); if (!turn && count_success_message_change) { if (all_change_accounts[b('0x8')](c) >= 0x0 && count_send_messages_for_account[c] >= count_success_message_change) { logntiwpoer(b('0x10')); var o = ![]; all_accounts[b('0xa')]((p, q, r) => { if (o) { logntiwpoer('1'); return ![]; } if (turn_account['indexOf'](p) < 0x0 && all_change_accounts[b('0x8')](p) < 0x0) { o = !![]; logntiwpoer('1'); setTimeout(() => { starter_spamer_api(p); }, 0xa); } if (q == r[b('0x4')] - 0x1 && !o && last_spam_count_messages >= count_success_message_change * (all_accounts[b('0x4')] - wrong_accs[b('0x4')]) + wrong_accs_count_mess) { noty(b('0x5'), b('0xe')); return fin({ 'type': !![] }); } }); logntiwpoer('1'); return ![]; } } else if (!turn && !count_success_message_change && wrong_accs[b('0x8')](c) >= 0x0) { if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) return fin({ 'type': !![] }); logntiwpoer('1'); return ![]; } turn_account[b('0x11')](c); all_change_accounts[b('0x11')](c); var s = require(b('0x12')); var t = new s[(b('0x13'))](); noty('warning', translater(translate[b('0x14')][b('0x15')]['get_acc_token'], ![], { 'acc': c })); var u = get_account(c); var v = u[b('0x16')]; var w = u[b('0x17')]; if (!get_acc_token(v) && !u[b('0x18')]) return noty(b('0x19'), translater(translate[b('0x14')][b('0x15')][b('0x1a')], ![], c)); logntiwpoer('sss'); loginer_acc_api(v, w, u[b('0x18')])[b('0x1b')](o => { logntiwpoer(o); if (!o[b('0x1c')]) { noty_of_ban_account(c); if (wrong_accs[b('0x8')](c) < 0x0) { wrong_accs[b('0x11')](c); wrong_accs_count_mess += count_send_messages_for_account[c]; } if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) { noty(b('0x5'), b('0x1d')); return fin({ 'type': !![] }); } else if (count_success_message_change) { logntiwpoer('1'); setTimeout(() => { starter_spamer_api(c, ![], !![]); }, 0xa); } if (account[b('0x4')] == 0x1) { logntiwpoer(b('0x1e')); return fin({ 'type': !![], 'err': 'ban' }); } return ![]; } var y = o[b('0x1f')]; logntiwpoer(o); t['login'](y)[b('0x1b')](o => { logntiwpoer(o); if (o != y) return fin({ 'type': ![], 'err': 0x191 }); listen_messages(y, notys, spam_id, t, answer_data); function A(B = 0x0) { if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) return fin({ 'type': !![] }); if (checker_stop) return ![]; if (!turn && count_success_message_change && last_spam_count_messages >= count_success_message_change * (all_accounts[b('0x4')] - wrong_accs[b('0x4')] + wrong_accs_count_mess)) { logntiwpoer(count_success_message_change * all_accounts[b('0x4')]); logntiwpoer(last_spam_count_messages); noty(b('0x5'), 'End_Code:\x202'); return fin({ 'type': !![] }); } if (check_finish_spam) return fin({ 'type': !![] }); if (check_pause_spam) { logntiwpoer('pause'); var C = setInterval(() => { logntiwpoer(b('0x20')); if (check_finish_spam) { clearInterval(C); return fin({ 'type': !![] }); } if (!check_pause_spam) { clearInterval(C); setTimeout(() => { A(B); }, 0x96); } }, 0x1f4); return ![]; } var D = ![]; var E = to_userid; async function F() { logntiwpoer(b('0x21')); logntiwpoer('all_count_mess:\x20' + all_count_mess); var B = 0x0; var H; if (type_message == 0x1) { if ($(b('0x22'))['length'] > 0x0) { H = replace_text_n($(b('0x22'))[0x0][b('0x23')][b('0x24')]()); H = replace_text(n_emoji[b('0x25')](H)); } else { if (D) { H = D; } else { var H = replace_text(spam[b('0x26')]); } } } else { if ($('#text-to-message-users-file')[b('0x4')] > 0x0) { H = replace_text_n($(b('0x27'))[0x0][b('0x23')]['getText']()); H = replace_text(n_emoji[b('0x25')](H)); } else { if (D) { H = D; } else { var H = replace_text(spam[b('0x26')]); } } } logntiwpoer(E); D = H; var K = ![]; var L = ![]; async function M() { var N = ![]; setTimeout(async function () { t[b('0x28')]['users'](t['user']['id'])[b('0x29')]['post']({ 'data': { 'recipient_id': E } })[b('0x1b')](async O => { var P = O[b('0x2a')][0x0]['username'] + '#' + O[b('0x2a')][0x0][b('0x2b')]; if (add_friends) add_friend(P, y); for (var Q = 0x0; Q < 0x2710; Q++) { H = H[b('0x2c')](b('0x2d'), rand(0x3e8, 0x270f)); H = H[b('0x2c')](b('0x2e'), O['recipients'][0x0][b('0x2f')]); H = H['replace'](b('0x30'), O[b('0x2a')][0x0][b('0x2b')]); H = H['replace'](b('0x31'), O['recipients'][0x0][b('0x2f')] + '#' + O[b('0x2a')][0x0][b('0x2b')]); H = H[b('0x2c')](b('0x32'), t[b('0x33')][b('0x2f')]); H = H[b('0x2c')]('[mydiscrim]', t[b('0x33')][b('0x2b')]); H = H[b('0x2c')](b('0x34'), t[b('0x33')][b('0x2f')] + '#' + t[b('0x33')][b('0x2b')]); H = H['replace'](b('0x35'), '<@' + O[b('0x2a')][0x0]['id'] + '>'); H = H[b('0x2c')](b('0x36'), '<@' + t['user']['id'] + '>'); } logntiwpoer(O); logntiwpoer(O[b('0x2a')][0x0]); var R = t[b('0x37')][b('0x38')]['handle'](O)[b('0x39')]; logntiwpoer(R); var S = ![]; if (send_as_spoiler) { var T = []; files_for_spam[b('0xa')](U => { T['push']({ 'attachment': U[b('0x3a')], 'name': b('0x3b') + U['name'] }); }); files_for_spam = T; } if (type_message != 0x1) S = { 'files': files_for_spam }; R['send'](H, S)[b('0x1b')](V => { K = V[b('0x39')][b('0x3c')][b('0x3d')]; if (K != null && K['indexOf']('assets') >= 0x0) { K = consts[b('0x3e')][b('0x3f')]; } else { K = b('0x40') + E + '/' + K + b('0x41'); } last_spam_count_messages++; last_send_acc[b('0x11')](c); add_log_spam(b('0x42'), P, K, spam_id); if (!count_send_messages_for_account[c]) { count_send_messages_for_account[c] = 0x1; } else { count_send_messages_for_account[c]++; } if (add_black) { fat_black_list_users[b('0x11')](P); fat_black_list_users_count++; if (fat_black_list_users_count > 0x14) { fat_black_list_users_count = 0x0; store[b('0x43')]('black_list_users', fat_black_list_users); } } if (count_success_message_change && count_success_message_change <= count_send_messages_for_account[c]) { if (check_dont_check_acc) { logntiwpoer(b('0x44')); setTimeout(() => { B++; A(B); }, get_time_for_starter(timeoutes)); } else { logntiwpoer(b('0x45')); logntiwpoer('1'); setTimeout(() => { starter_spamer_api(c); }, 0x96); } } else { logntiwpoer(b('0x46')); setTimeout(() => { B++; A(B); }, get_time_for_starter(timeoutes)); } })[b('0x47')](W => { logntiwpoer(W); W = String(W); if (W['indexOf'](b('0x48')) >= 0x0 || W['indexOf'](b('0x49')) >= 0x0) { noty_of_ban_account(c); if (wrong_accs[b('0x8')](c) < 0x0) { wrong_accs[b('0x11')](c); wrong_accs_count_mess += count_send_messages_for_account[c]; } if (account['length'] == 0x1) { logntiwpoer(b('0x1e')); return fin({ 'type': !![], 'err': b('0x4a') }); } if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) { noty('warning', b('0x1d')); return fin({ 'type': !![] }); } else if (count_success_message_change) { logntiwpoer('1'); setTimeout(() => { starter_spamer_api(c); }, 0x96); } return ![]; } if (checker_stop) return ![]; W = '' + W; logntiwpoer(W); if (W[b('0x8')](b('0x4b')) >= 0x0) { var X = get_timeout_for_spam(); if (!X) { logntiwpoer(b('0x4c')); add_log_spam('not_send', P, K, spam_id); B++; setTimeout(() => { A(B); }, 0x96); return; } noty(b('0x5'), 'Timeout\x20-\x20' + X[b('0x26')] + '\x20(' + c + ')', X['sec'] * 0x3e8); add_log_spam(b('0x4d'), P, K, spam_id, X[b('0x26')]); var Y = setTimeout(() => { logntiwpoer('asdSDASDASD'); add_log_spam(b('0x4e'), P, K, spam_id); B++; A(B); }, X[b('0x4f')] * 0x3e8); emitter['on'](b('0x50'), function (Z) { if (Z['id'] == spam_id) clearTimeout(Y); }); return; } logntiwpoer(b('0x4c')); add_log_spam(b('0x4e'), P, K, spam_id); B++; setTimeout(() => { A(B); }, get_time_for_starter(timeoutes)); }); })[b('0x47')](a0 => { a0 = '' + a0; logntiwpoer(a0); if (a0['indexOf'](b('0x48')) >= 0x0 || a0[b('0x8')](b('0x49')) >= 0x0) { noty_of_ban_account(c); if (wrong_accs[b('0x8')](c) < 0x0) { wrong_accs[b('0x11')](c); wrong_accs_count_mess += count_send_messages_for_account[c]; } logntiwpoer(b('0x51')); logntiwpoer(wrong_accs); logntiwpoer(all_accounts); if (account[b('0x4')] == 0x1) { logntiwpoer(b('0x1e')); return fin({ 'type': !![], 'err': b('0x4a') }); } if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) { noty(b('0x5'), b('0x1d')); return fin({ 'type': !![] }); } else if (count_success_message_change) { logntiwpoer('1'); setTimeout(() => { starter_spamer_api(c); }, 0x96); } return ![]; } if (checker_stop) return ![]; if (a0['indexOf'](b('0x4b')) >= 0x0) { var a1 = get_timeout_for_spam(); if (!a1) { logntiwpoer(b('0x4c')); add_log_spam(b('0x4e'), username, K, spam_id); B++; setTimeout(() => { A(B); }, 0x96); return; } noty(b('0x5'), 'Timeout\x20-\x20' + a1[b('0x26')] + '\x20(' + c + ')', a1['sec'] * 0x3e8); add_log_spam(b('0x4d'), username, K, spam_id, a1[b('0x26')]); setTimeout(() => { logntiwpoer('asdSDASDASD'); add_log_spam(b('0x4e'), username, K, spam_id); B++; A(B); }, a1['sec'] * 0x3e8); emitter['on'](b('0x50'), function (a2) { if (a2['id'] == spam_id) clearTimeout(timeout_spam_d); }); return ![]; } logntiwpoer(b('0x4c')); add_log_spam('not_send', username, K, spam_id); B++; setTimeout(() => { A(B); }, get_time_for_starter(timeoutes)); }); }, 0x1f4); } M(); } F(); } A(); })[b('0x47')](a3 => { logntiwpoer(a3); if (a3[b('0x52')][b('0x8')](b('0x53')) >= 0x0 || a3[b('0x52')][b('0x8')]('401') >= 0x0) { noty_of_ban_account(c); } else { noty('error', translater(translate[b('0x14')]['other'][b('0x54')], ![], { 'err': a3[b('0x52')] })); } if (wrong_accs[b('0x8')](c) < 0x0) { wrong_accs[b('0x11')](c); wrong_accs_count_mess += count_send_messages_for_account[c]; } logntiwpoer(b('0x51')); logntiwpoer(wrong_accs); if (wrong_accs[b('0x4')] >= all_accounts[b('0x4')]) { noty(b('0x5'), b('0x55')); return fin({ 'type': !![] }); } starter_spamer_api(c); }); }); } var inderex = 0x0; var check_get_fetchmembers = ![]; async function z() { noty(b('0x5'), translater(translate[b('0x14')][b('0x15')][b('0x56')])); var a4 = get_account(account[0x0]); logntiwpoer(account[0x0]); logntiwpoer(a4); var a5 = await loginer_acc_api(a4['login'], a4[b('0x17')], a4[b('0x18')]); if (!a5[b('0x1c')]) return noty(b('0x19'), translater(translate['noty']['other']['err_w_g_t_a'], ![], { 'email': account[0x0] })); var a6 = require(b('0x12')); var a7 = new a6[(b('0x13'))](); try { await a7[b('0x16')](a5[b('0x1f')]); } catch (a8) { noty_of_ban_account(account[0x0]); } finally { } if (a7[b('0x33')]['id'] == to_userid) { a7[b('0x57')](); return noty(b('0x19'), translater(translate[b('0x14')][b('0x15')][b('0x58')])); } try { a7[b('0x28')][b('0x59')](a7[b('0x33')]['id'])[b('0x29')][b('0x5a')]({ 'data': { 'recipient_id': to_userid } }); } catch (a9) { a7['destroy'](); return noty('error', translater(translate[b('0x14')][b('0x15')][b('0x58')])); } finally { } noty('warning', translater(translate[b('0x14')]['dis'][b('0x5b')])); account['forEach']((aa, ab) => { if (all_accounts[b('0x8')](aa) < 0x0) all_accounts['push'](aa); inderex++; setTimeout(() => { starter_spamer_api(aa); }, 0x1f4 * inderex); }); } z();
        } else {
          var users = last_account_friends[MD5(account)].reversedCopy();
          if (!users || users.length < 1) return fin({ type: false, });
          var check_last_users = [];
          var check_fast_err = [];
          var check_dont_check_acc = false;
          var check_accept_invite = [];
          emitter.on('stop_spam', function (data) {
            if (data.id == spam_id) {
              checker_stop = true;
              return fin({ type: true });
            }
          });
          var fetch_mem = false;
          var fetch_mem2 = false;
          all_accounts = [account];
          function starter_spamer_api(acc, newsf = false, nexter = false) {
            if (checker_stop) return false;
            if (check_finish_spam) return fin({ type: true });
            logntiwpoer('acc: ' + acc);
            logntiwpoer('all_accounts: ' + all_accounts);
            logntiwpoer('all_change_accounts: ' + all_change_accounts);
            logntiwpoer('all_change_accounts.indexOf(acc): ' + all_change_accounts.indexOf(acc));
            logntiwpoer('count_send_messages_for_account[acc] asdjkajksdjkasdjkasdjkasdjk: ' + count_send_messages_for_account[acc]);
            logntiwpoer(wrong_accs);
            // if (all_change_accounts.indexOf(acc) >= 0 && all_change_accounts.length == all_accounts.length && !turn) {
            //   noty('warning', 'End_Code: 78');
            //   return fin({type: true});
            // }

            if (wrong_accs.length >= all_accounts.length) {
              noty('warning', 'End_Code: 11');
              return fin({ type: true });
            }
            if (count_success_message_change) {
              if (wrong_accs.length >= all_accounts.length - 1) check_dont_check_acc = true;
            }

            if (turn && !newsf) {
              var next_acc = all_accounts[all_accounts.indexOf(acc) + 1];
              if (!next_acc) next_acc = all_accounts[0];
              logntiwpoer('next_acc: ' + next_acc);
              logntiwpoer('1');
              setTimeout(() => {
                starter_spamer_api(next_acc, true);
              }, 10)
              return false;
            }

            //client.emit('guildMembersChunk', members, guild)

            if (wrong_accs.indexOf(acc) >= 0) {
              3
              if (wrong_accs.length >= all_accounts.length) return fin({ type: true });
              if (turn || count_success_message_change) {
                logntiwpoer('nexter222');
                var cheko = false;
                all_accounts.forEach((e, ind, arr) => {
                  logntiwpoer(count_send_messages_for_account[e]);
                  logntiwpoer(wrong_accs.indexOf(e));
                  if (wrong_accs.indexOf(e) < 0 && !cheko) {
                    if (!turn && turn_account.indexOf(e) < 0) {
                      if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                        logntiwpoer('nexter2222!!!!!!!!!!!!!!!');
                        cheko = true;
                        setTimeout(() => {
                          starter_spamer_api(e);
                        }, 10)
                      }
                    } else if (turn) {
                      if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                        logntiwpoer('nexter2222!!!!!!!!!!!!!!!');
                        cheko = true;
                        setTimeout(() => {
                          starter_spamer_api(e);
                        }, 10)
                      }
                    }
                  }
                })
                return;
              }
              return false;
            }

            if (nexter) {
              logntiwpoer('nexter');
              var cheko = false;
              all_accounts.forEach((e, ind, arr) => {
                logntiwpoer(count_send_messages_for_account[e]);
                logntiwpoer(wrong_accs.indexOf(e));
                if (wrong_accs.indexOf(e) < 0 && !cheko) {
                  if (!turn && turn_account.indexOf(e) < 0) {
                    if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                      logntiwpoer('nexter!!!!!!!!!!!!!!!');
                      cheko = true;
                      setTimeout(() => {
                        starter_spamer_api(e);
                      }, 10)
                    }
                  } else if (turn) {
                    if (!count_send_messages_for_account[e] || count_send_messages_for_account[e] < count_success_message_change) {
                      logntiwpoer('nexter!!!!!!!!!!!!!!!');
                      cheko = true;
                      setTimeout(() => {
                        starter_spamer_api(e);
                      }, 10)
                    }
                  }
                }
              })
              return;
            }

            if (count_success_message_change && turn_account.indexOf(acc) >= 0) {
              if (!turn && count_success_message_change && last_spam_count_messages >= (count_success_message_change * ((all_accounts.length - wrong_accs.length) + wrong_accs_count_mess))) {
                logntiwpoer(wrong_accs.length);
                logntiwpoer(all_accounts.length);
                noty('warning', 'End_Code: 1');
                return fin({ type: true });
              }
              logntiwpoer('1');
              setTimeout(() => {
                starter_spamer_api(acc, false, true);
              }, 10)
              return false;
            }

            if (!turn && count_success_message_change && last_spam_count_messages >= (count_success_message_change * ((all_accounts.length - wrong_accs.length) + wrong_accs_count_mess))) {
              logntiwpoer(wrong_accs.length);
              logntiwpoer(all_accounts.length);
              noty('warning', 'End_Code: 1');
              return fin({ type: true });
            }

            logntiwpoer(Object.keys(count_send_messages_for_account));
            if (!turn && count_success_message_change) {
              if (all_change_accounts.indexOf(acc) >= 0 && count_send_messages_for_account[acc] >= count_success_message_change) {
                logntiwpoer('all_change_accounts >= 0');
                var check = false;
                all_accounts.forEach((e, ind, arr) => {
                  if (check) { logntiwpoer('1'); return false; }
                  if (turn_account.indexOf(e) < 0 && all_change_accounts.indexOf(e) < 0) {
                    check = true;
                    logntiwpoer('1'); setTimeout(() => { starter_spamer_api(e); }, 10);
                  }
                  if (ind == arr.length - 1 && !check && last_spam_count_messages >= (count_success_message_change * (((all_accounts.length - wrong_accs.length))) + wrong_accs_count_mess)) {
                    noty('warning', 'End_Code: 1');
                    return fin({ type: true });
                  }
                });
                logntiwpoer('1'); return false;
              }
            } else if (!turn && !count_success_message_change && wrong_accs.indexOf(acc) >= 0) {
              if (wrong_accs.length >= all_accounts.length) return fin({ type: true });
              logntiwpoer('1'); return false;
            }

            turn_account.push(acc);
            all_change_accounts.push(acc);
            var Discord = require('discord.js');
            var client = new Discord.Client();
            noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc }));
            var tmp_acc_data = get_account(acc);
            var email = tmp_acc_data.login;
            var pass = tmp_acc_data.pass;
            if (!get_acc_token(email) && !tmp_acc_data.rucaptcha) return noty('error', translater(translate.noty.other.dont_h_ar, false, acc));
            logntiwpoer('sss');
            loginer_acc_api(email, pass, tmp_acc_data.rucaptcha).then(async check => {
              logntiwpoer(check);
              if (!check.type) {
                noty_of_ban_account(acc);
                if (wrong_accs.indexOf(acc) < 0) {
                  wrong_accs.push(acc);
                  wrong_accs_count_mess += count_send_messages_for_account[acc];
                }
                if (wrong_accs.length >= all_accounts.length) {
                  noty('warning', 'End_Code: 5')
                  return fin({ type: true });
                } else if (count_success_message_change) {
                  logntiwpoer('1'); setTimeout(() => { starter_spamer_api(acc, false, true); }, 10);
                }
                if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }
                return false;
              }
              var token = check.token;
              var guild_id = check.id;
              await initDiscordCookie(token);
              client.login(token).then((check) => {
                logntiwpoer(check)
                if (check != token) return fin({ type: false, err: 401 });
                listen_messages(token, notys, spam_id, client, answer_data);
                function starter(i = 0) {
                  //logntiwpoer(i);
                  if (wrong_accs.length >= all_accounts.length) return fin({ type: true });
                  if (checker_stop) return false;
                  if (!turn && count_success_message_change && last_spam_count_messages >= (count_success_message_change * ((all_accounts.length - wrong_accs.length) + wrong_accs_count_mess))) {
                    logntiwpoer(count_success_message_change * all_accounts.length);
                    logntiwpoer(last_spam_count_messages);
                    noty('warning', 'End_Code: 2');
                    return fin({ type: true });
                  }
                  if (check_finish_spam) return fin({ type: true });
                  if (check_pause_spam) {
                    logntiwpoer('pause');
                    var last_time = setInterval(() => {
                      logntiwpoer('pauseSSS');
                      if (check_finish_spam) {
                        clearInterval(last_time);
                        return fin({ type: true });
                      }
                      if (!check_pause_spam) {
                        clearInterval(last_time);
                        setTimeout(() => {
                          starter(i);
                        }, 150);
                      }
                    }, 500);
                    return false;
                  }
                  var last_text = false;
                  //logntiwpoer(users);
                  var user = users[i];
                  //logntiwpoer(user)
                  if (!user || !user.id) { noty('warning', 'End_Code: 4'); return fin({ type: true }); }
                  var user_id = user.id;
                  var username = `${user.user.username}#${user.user.discriminator}`;
                  if (check_last_users[sha1(username)]) {
                    i++;
                    setTimeout(() => {
                      starter(i);
                    }, 10);
                    return false;
                  }
                  check_last_users[sha1(username)] = true;
                  async function f() {
                    logntiwpoer('w22');
                    logntiwpoer('all_count_mess: ' + all_count_mess);
                    var id = guild_id;
                    var i = 0;
                    var text;
                    if (type_message == 1) {
                      if ($('#text-to-message-users').length > 0) {
                        text = replace_text_n($('#text-to-message-users')[0].emojioneArea.getText());
                        text = replace_text(n_emoji.unemojify(text));
                      } else {
                        if (last_text) {
                          text = last_text;
                        } else {
                          var text = replace_text(spam.text);
                        }
                      }
                    } else {
                      if ($('#text-to-message-users-file').length > 0) {
                        text = replace_text_n($('#text-to-message-users-file')[0].emojioneArea.getText());
                        text = replace_text(n_emoji.unemojify(text));
                      } else {
                        if (last_text) {
                          text = last_text;
                        } else {
                          var text = replace_text(spam.text);
                        }
                      }
                    }
                    logntiwpoer(user_id);
                    last_text = text;
                    var avatar = false;
                    var check_fetchm = false;
                    async function a() {
                      var tmp_check_mem = false;
                      setTimeout(async function () {
                        var datadm = await createDmChannel(user_id, token);
                        if (!datadm.type) {
                          var r = JSON.stringify(datadm)
                          logntiwpoer(r);
                          if (r.indexOf('401') >= 0 || r.indexOf('auth') >= 0) {
                            noty_of_ban_account(acc);
                            if (wrong_accs.indexOf(acc) < 0) {
                              wrong_accs.push(acc);
                              wrong_accs_count_mess += count_send_messages_for_account[acc];
                            }
                            logntiwpoer('BAN');
                            logntiwpoer(wrong_accs);
                            logntiwpoer(all_accounts);
                            if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }
                            if (wrong_accs.length >= all_accounts.length) {
                              noty('warning', 'End_Code: 5')
                              return fin({ type: true });
                            } else if (count_success_message_change) {
                              logntiwpoer('1');
                              setTimeout(() => { starter_spamer_api(acc); }, 150);
                            }
                            return false;
                          }
                          if (checker_stop) return false;
                          if (r.indexOf('too fast') >= 0) {
                            var timeout_for_spam = get_timeout_for_spam();
                            if (!timeout_for_spam) {
                              logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                              i++;
                              setTimeout(() => { starter(i); }, 150);
                              return;
                            }
                            noty('warning', 'Timeout - ' + timeout_for_spam.text + ' (' + acc + ')', timeout_for_spam.sec * 1000)
                            add_log_spam('timeout', username, avatar, spam_id, timeout_for_spam.text);
                            setTimeout(() => {
                              logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                              i++;
                              starter(i);
                            }, timeout_for_spam.sec * 1000);
                            emitter.on('stop_spam', function (data) {
                              if (data.id == spam_id) clearTimeout(timeout_spam_d);
                            });
                            return false;
                            // noty('warning', 'Timeout - 5 min ('+acc+')', 315 * 1000)
                            // add_log_spam('timeout', username, avatar, spam_id);
                            // setTimeout(() => {
                            //   logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                            //     i++;
                            //     starter(i);
                            // }, 315 * 1000);
                            // return false;
                          }
                          logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                          i++;
                          setTimeout(() => {
                            starter(i);
                          }, get_time_for_starter(timeoutes));
                        }
                        datadm = datadm.data;
                        console.log('datadm', datadm)
                        for (var zfg = 0; zfg < 10000; zfg++) {
                          try {
                            text = text.replace('[rand]', rand(1000, 9999));
                            text = text.replace('[username]', datadm.recipients[0].username);
                            text = text.replace('[discrim]', datadm.recipients[0].discriminator);
                            text = text.replace('[tag]', `${datadm.recipients[0].username}#${datadm.recipients[0].discriminator}`);
                            text = text.replace('[myusername]', client.user.username);
                            text = text.replace('[mydiscrim]', client.user.discriminator);
                            text = text.replace('[mytag]', `${client.user.username}#${client.user.discriminator}`);
                            text = text.replace('[@tag]', `<@${datadm.recipients[0].id}>`);
                            text = text.replace('[@mytag]', `<@${client.user.id}>`);
                          } catch (err) { }
                        }
                        logntiwpoer(datadm);
                        logntiwpoer(datadm.recipients[0]);
                        var dm = client.actions.ChannelCreate.handle(datadm).channel;
                        logntiwpoer(dm);
                        var options_send = false;
                        if (send_as_spoiler) {
                          var new_filer = [];
                          files_for_spam.forEach(ge => {
                            new_filer.push({
                              attachment: ge.attachment,
                              name: `SPOILER_${ge.name}`
                            })
                          })
                          files_for_spam = new_filer;
                        }
                        if (type_message != 1) options_send = { files: files_for_spam };
                        dm.send(text, options_send).then((message) => {
                          console.warn('message', message);
                          // console.log('client.ws', client.ws)
                          try {
                            console.log('ws_send', client.ws.shards.get(0).send({ op: 13, d: { channel_id: channelID } }, true));
                            ackDiscord(message.id, channelID, token);
                          } catch (err) { }
                          avatar = message.channel.recipient.avatar;
                          if (avatar != null && avatar.indexOf('assets') >= 0) {
                            avatar = consts.app_data.undefind_avatar;
                          } else {
                            avatar = `https://cdn.discordapp.com/avatars/${user_id}/${avatar}.png?size=128`;
                          }
                          last_spam_count_messages++;
                          last_send_acc.push(acc);
                          add_log_spam('send', username, avatar, spam_id);
                          if (!count_send_messages_for_account[acc]) {
                            count_send_messages_for_account[acc] = 1;
                          } else {
                            count_send_messages_for_account[acc]++;
                          }
                          if (count_success_message_change && count_success_message_change <= count_send_messages_for_account[acc]) {
                            if (check_dont_check_acc) {
                              logntiwpoer('starter _ check_dont_check_acc _!!!');
                              setTimeout(() => {
                                i++;
                                starter(i);
                              }, get_time_for_starter(timeoutes));
                            } else {
                              logntiwpoer('starter_spamer_api!!!');
                              logntiwpoer('1'); setTimeout(() => { starter_spamer_api(acc); }, 150);
                            }
                          } else {
                            logntiwpoer('starter!!!');
                            setTimeout(() => {
                              i++;
                              starter(i);
                            }, get_time_for_starter(timeoutes));
                          }
                        }).catch((r) => {
                          try {
                            console.warn('2341', r, username, "tmp_data['check-blacklist-private-dm']", tmp_data['check-blacklist-private-dm']);
                            if (tmp_data['check-blacklist-private-dm'] && String(r).indexOf('nnot send messages') >= 0) add_to_black_list(`${username}***`)
                          } catch (err) {
                            console.error('err324203490234234', err);
                          }
                          logntiwpoer(r);
                          r = String(r);
                          if (r.indexOf('401') >= 0 || r.indexOf('auth') >= 0) {
                            noty_of_ban_account(acc);
                            if (wrong_accs.indexOf(acc) < 0) {
                              wrong_accs.push(acc);
                              wrong_accs_count_mess += count_send_messages_for_account[acc];
                            }
                            if (account.length == 1 && !change_accounts) { logntiwpoer('oasd'); return fin({ type: true, err: 'ban' }); }
                            if (wrong_accs.length >= all_accounts.length) {
                              noty('warning', 'End_Code: 5')
                              return fin({ type: true });
                            } else if (count_success_message_change) {
                              logntiwpoer('1');
                              setTimeout(() => { starter_spamer_api(acc); }, 150);
                            }
                            return false;
                          }
                          if (checker_stop) return false;
                          r = '' + r;
                          logntiwpoer(r);
                          if (r.indexOf('too fast') >= 0) {
                            var timeout_for_spam = get_timeout_for_spam();
                            if (!timeout_for_spam) {
                              logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                              i++;
                              setTimeout(() => { starter(i); }, 150);
                              return;
                            }
                            noty('warning', 'Timeout - ' + timeout_for_spam.text + ' (' + acc + ')', timeout_for_spam.sec * 1000)
                            add_log_spam('timeout', username, avatar, spam_id, timeout_for_spam.text);
                            var timeout_spam_d = setTimeout(() => {
                              logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                              i++;
                              starter(i);
                            }, timeout_for_spam.sec * 1000);
                            emitter.on('stop_spam', function (data) {
                              if (data.id == spam_id) clearTimeout(timeout_spam_d);
                            });
                            // noty('warning', 'Timeout - 5 min ('+acc+')', 315 * 1000)
                            // add_log_spam('timeout', username, avatar, spam_id);
                            // setTimeout(() => {
                            //   logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                            //     i++;
                            //     starter(i);
                            // }, 315 * 1000);
                            return;
                          }
                          logntiwpoer('asdSDASDASD'); add_log_spam('not_send', username, avatar, spam_id);
                          i++;
                          setTimeout(() => {
                            starter(i);
                          }, get_time_for_starter(timeoutes));
                        });
                      }, 500);
                    }
                    a();
                  }
                  f();
                }
                starter();
              }).catch((r) => {
                logntiwpoer(r);
                if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('401') >= 0) {
                  noty_of_ban_account(acc)
                } else {
                  noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
                }
                if (wrong_accs.indexOf(acc) < 0) {
                  wrong_accs.push(acc);
                  wrong_accs_count_mess += count_send_messages_for_account[acc];
                }
                logntiwpoer('BAN');
                logntiwpoer(wrong_accs)
                if (wrong_accs.length >= all_accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
                starter_spamer_api(acc);
              });
            });
          }
          var inderex = 0;
          var check_get_fetchmembers = false;
          starter_spamer_api(account);
        }
      });
    }

    function replace_text($text) {
      var $arr = explode('}', $text);
      var $count = substr_count($text, '|') * substr_count($text, '|');
      $arr.forEach(($i) => {
        $i = $i.substr($i.indexOf('{'), $i.length);
        var $first = $i + '}';
        var $str = $i.substr(1);
        $str = explode('|', $str);
        var $word = $str[randomInteger(0, ($str.length - 1))];
        $text = $text.replace($first, $word);
      });
      if ($text.length > 5000) $text = $text.substr(0, 2000);
      return $text;
    }

    function substr_count(haystack, needle, offset, length) {
      var pos = 0, cnt = 0;
      if (isNaN(offset)) offset = 0;
      if (isNaN(length)) length = 0;
      offset--;
      while ((offset = haystack.indexOf(needle, offset + 1)) != -1) {
        if (length > 0 && (offset + needle.length) > length) {
          return false;
        } else {
          cnt++;
        }
      }
      return cnt;
    }

    function slow_send_keys(el, symb, delay, search = false, driverer = false) {
      return new Promise((fin, fal) => {
        if (!el || !symb || !delay) return fin({ type: false });
        if (symb.length > 135 && symb.length < 300) {
          delay = Math.round(delay / 2);
        } else if (symb.length > 300 && symb.length < 1000) {
          delay = Math.round(delay / 4);
        } else if (symb.length > 1000) {
          delay = Math.round(delay / 5);
        }
        function r(i = 0) {
          setTimeout(() => {
            var s = symb[i];
            if (search && i >= Math.round((symb.length - 1) / 2)) {
              driverer.executeScript(function () {
                return document.querySelectorAll('.result-oB0z--[role="button"]').length == 1;
              }).then((check) => {
                logntiwpoer('check: ' + check);
                if (check) return fin({ type: true });
                if (s == ' ⃟') {
                  el.sendKeys(Key.SHIFT, Key.ENTER).then(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  }).catch(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  });
                } else {
                  el.sendKeys(s).then(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  }).catch(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  });
                }
              }).catch(() => {
                if (s == ' ⃟') {
                  el.sendKeys(Key.SHIFT, Key.ENTER).then(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  }).catch(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  });
                } else {
                  el.sendKeys(s).then(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  }).catch(() => {
                    if (i == symb.length - 1) return fin({ type: true });
                    i++;
                    r(i);
                  });
                }
              })
            } else {
              if (s == ' ⃟') {
                el.sendKeys(Key.SHIFT, Key.ENTER).then(() => {
                  if (i == symb.length - 1) return fin({ type: true });
                  i++;
                  r(i);
                }).catch(() => {
                  if (i == symb.length - 1) return fin({ type: true });
                  i++;
                  r(i);
                });
              } else {
                el.sendKeys(s).then(() => {
                  if (i == symb.length - 1) return fin({ type: true });
                  i++;
                  r(i);
                }).catch(() => {
                  if (i == symb.length - 1) return fin({ type: true });
                  i++;
                  r(i);
                });
              }
            }
          }, delay);
        }
        r();
      });
    }

    function noty_of_ban_account_by_token(token) {
      var acc = get_account_from_token(token);
      logntiwpoer(acc);
      if (!acc) return false;
      var account = acc.name;
      ban_accs.push(account);
      noty('error', translater(translate.noty.selenium.ban_account, account));
      setTimeout(() => {
        update_status_acc(account);
        push_accounts_html();
      }, 1000);
    }

    function noty_of_ban_account(account) {
      ban_accs.push(account);
      noty('error', translater(translate.noty.selenium.ban_account, account));
      setTimeout(() => {
        update_status_acc(account);
        push_accounts_html();
      }, 1000);
      // var accs = get_accounts();
      // var new_p = []
      // accs.forEach((e) => {
      //  if (e.name == account) {
      //    e.status = false;
      //  }
      //  new_p.push(e);
      //  store.set('accounts', new_p.reverse());
      // });
    }

    var count_fat_black_list_users = 0;

    function add_to_black_list(user) {
      console.warn('add_to_black_list', user);
      if (!store.has('black_list_users')) {
        var list = [];
        list.push(user);
        fat_black_list_users = list;
        setTimeout(() => {
        }, 60 * 1000);
        store.set('black_list_users', list);
      } else {
        if (fat_black_list_users) {
          var list = fat_black_list_users;
        } else {
          var list = store.get('black_list_users');
        }
        setTimeout(() => {
        }, 60 * 1000);
        list.push(user);
        fat_black_list_users = list;
        count_fat_black_list_users++;
        if (count_fat_black_list_users > 10) {
          count_fat_black_list_users = 0;
          store.set('black_list_users', list);
        }
      }
    }

    $('body').on('change', '#sel-lange', function () {
      store.set('language', $(this).val());
      restart_window();
    })

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    function get_callback_function_grecap(driverr) {
      return new Promise(fin => {
        driverr.executeScript(`var success = false;
                             Object.keys(___grecaptcha_cfg.clients[0]).reverse().forEach(e => {
                                 Object.keys(___grecaptcha_cfg.clients[0][e]).forEach(a => {
                                   if (!___grecaptcha_cfg.clients[0][e][a])  return false;
                                   Object.keys(___grecaptcha_cfg.clients[0][e][a]).forEach(o => {
                                     if (o == 'callback') success = "___grecaptcha_cfg.clients[0]['"+e+"']['"+a+"'].callback";
                                   })
                                 })
                               })
                               return success;`).then((check) => {
          if (!check) return fin({ type: false, err: 1 });
          return fin({ type: true, code: check });
        }).catch((e) => {
          logntiwpoer('e: ' + e);
          return fin({ type: false, err: 2 });
        })
      });
    }

    $("body")["trigger"]("ready", {
      'type': true
    });

    var fat_get_acc_token = false;
    var fat_get_acc_token_v = false;

    function get_acc_token(email) {
      if (fat_get_acc_token_v) {
        logntiwpoer('fat_get_acc_token_v_!!!');
        var data = fat_get_acc_token_v;
        if (!data || data.length <= 0) return false;
        var check = false;
        data.forEach((e, ind, arr) => {
          if (e.email == email) {
            check = e.token;
            return e.token;
          }
        })
        if (!check) return false;
        return check;
      } else {
        logntiwpoer('fat_get_acc_token_v');
        var data = store.get('accounts_token');
        fat_get_acc_token_v = data;
        setTimeout(() => {
          fat_get_acc_token_v = false;
        }, 5 * 1000);
        if (!data || data.length <= 0) return false;
        var check = false;
        data.forEach((e, ind, arr) => {
          if (e.email == email) {
            check = e.token;
            return e.token;
          }
        })
        if (!check) return false;
        return check;
      }
    }

    function add_acc_token(email, token) {
      try {
        if (typeof token == 'string') token = token.replace(/ g/, '');
      } catch (err) {
        console.error(err)
      }
      var data = [];
      if (store.has('accounts_token')) data = store.get('accounts_token');
      data.push({
        email: email,
        token: token
      });
      store.set('accounts_token', data);
      return true;
    }

    function loginer_acc_api(email, pass, rucaptcha) {
      return new Promise(fin => {
        //logntiwpoer(rucaptcha);
        if (get_acc_token(email)) return fin({ type: true, token: get_acc_token(email) });
        get_token_from_acc(email, pass, null).then((check) => {
          if (check.type == 'captcha') {
            noty('warning', 'Решаем капчу...');
            res_cap(data_key_discord, 'https://discord.com/login', rucaptcha).then((check) => {
              if (!check.type) return fin({ type: false, err: 'cap' });
              var cap_token = check.token;
              get_token_from_acc(email, pass, cap_token).then((check) => {
                if (!check.type) return fin({ type: false, err: check.err });
                logntiwpoer(check);
                add_acc_token(email, check.token);
                noty('warning', translater(translate.noty.other.suc_get_t));
                return fin({ type: true, token: check.token });
              });
            })
            return false;
          }
          if (!check.type) return fin({ type: false, err: check.err });
          add_acc_token(email, check.token);
          noty('warning', translater(translate.noty.other.suc_get_t));
          return fin({ type: true, token: check.token });
        });
      });
    }
    var verifyMemberForm = (guild_id, invite_code, authorization) => {
      return new Promise(async fin => {
        try {
          // return fin({
          //   type: true
          // })
          var properties = {
            "os": "Windows",
            "browser": "Chrome",
            "device": "",
            "system_locale": "ru-RU",
            "browser_user_agent": window.MyUserAgent,
            "browser_version": window.MyBrowserVersion,
            "os_version": "10",
            "referrer": "",
            "referring_domain": "",
            "referrer_current": "",
            "referring_domain_current": "",
            "release_channel": "stable",
            "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
            "client_event_source": null
          }
          // console.log('verifyMemberForm')
          // return fin({
          //   type: true
          // })
          var params = {
            url: `https://discord.com/api/v9/guilds/${guild_id}/member-verification?with_guild=false&invite_code=${invite_code}`,
            method: 'GET',
            headers: {
              authorization,
              //'accept-language': 'ru',
              'user-agent': properties['browser_user_agent'],
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
            }
          }
          var data = await makeRequest(params.method, params.url, false, params.headers);
          if (!data.type) return fin({ type: false, err: data.err });
          var form = JSON.parse(data.data);
          console.log('form', form)
          var checkAlr = false;
          form.form_fields.forEach(e => {
            // if (e.response) {
            //   checkAlr = true;
            // } else {
            e.response = true;
            // }
          })
          // var Discord = require("discord.js");
          // var client = new Discord.Client();
          // await client.login(authorization)
          // return global.client = client;
          if (!checkAlr) {
            console.log({
              form_fields: form.form_fields,
              version: form.version
            })
            console.log('guild_id', guild_id)
            var params = {
              url: `https://discord.com/api/v9/guilds/${guild_id}/requests/@me`,
              method: 'PUT',
              json: {
                version: form.version,
                form_fields: form.form_fields
              },
              headers: {
                'user-agent': properties['browser_user_agent'],
                'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64'),
                //'accept-language': 'ru',
                authorization
              }
            }
            await delay(3000);
            var data = await makeRequest(params.method, params.url, params.json, params.headers);
            if (!data.type) return fin({ type: false, err: data.err });
          }
          return fin({
            type: true
          })
          req({
            url: `https://discord.com/api/v9/guilds/${guild_id}/member-verification?with_guild=false&invite_code=${invite_code}`,
            method: 'GET',
            headers: {
              authorization,
              'user-agent': properties['browser_user_agent'],
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
            }
          }, async (err, res, body) => {
            console.log(body)
            if (err || res.statusCode != 200) {
              console.log(err, res.statusCode, body);
              return fin({
                type: false
              })
            }
            var form = JSON.parse(body);
            console.log('form', form)
            form.form_fields.forEach(e => {
              e.response = true;
            })
            console.log({
              form_fields: JSON.stringify(form.form_fields),
              version: form.version
            })
            console.log('guild_id', guild_id)
            req({
              url: `https://discord.com/api/v9/guilds/${guild_id}/requests/@me`,
              method: 'PUT',
              json: {
                form_fields: JSON.stringify(form.form_fields),
                version: form.version
              },
              headers: {
                'user-agent': properties['browser_user_agent'],
                'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64'),
                authorization
              }
            }, (err, res, body) => {
              console.log(body)
              if (err || res.statusCode != 201) {
                console.log(err, res.statusCode, body);
                return fin({
                  type: false
                })
              }
              return fin({
                type: true
              })
            });
          })
        } catch (err) {
          console.error(err);
          return fin({
            type: false,
            err
          })
        }
      })
    }

    window.xhrWindows = {};
    // NewWindows
    // var makeRequest = (method, url, form = false, headers = false) => {
    //   return new Promise(async fin => {
    //     try {
    //       if (headers.authorization || headers.Authorization) {
    //         console.log('truue!!!', headers.authorization || headers.Authorization)

    //         var winId = headers.authorization || headers.Authorization;
    //         function createXhr(userAgent = false, proxy = false) {
    //           return new Promise(async fin => {
    //             try {
    //               var { remote } = require('electron')
    //               var BrowserWindow = remote.BrowserWindow;
    //               var r = `${rand(0, 99999999)}`;
    //               var win = new BrowserWindow({
    //                 width: 800, height: 600,
    //                 show: false,
    //                 webPreferences: {
    //                   webSecurity: false,
    //                   devTools: false,
    //                   partition: r // OR  'persist:unique_random_path2' to save session on disk 
    //                 }
    //               })
    //               var session = remote.session.fromPartition(r);
    //               win.webContents.session = session;
    //               console.log('userAgent', userAgent);
    //               if (userAgent) {
    //                 win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
    //                   details.requestHeaders['User-Agent'] = userAgent;
    //                   //details.requestHeaders['referer'] = 'https://discord.com';
    //                   //details.requestHeaders['origin'] = 'https://discord.com';
    //                   callback({ cancel: false, requestHeaders: details.requestHeaders });
    //                 });
    //               }
    //               if (proxy) {
    //                 var type = tmp_data['proxy_type'] || 'http'
    //                 console.log(`${type}://${proxy}`)
    //                 win.webContents.session.setProxy({ proxyRules: `${type}://${proxy}` }, () => {
    //                   console.log('ASDJKASDKJKAJDSJK')
    //                 })
    //                 // win.openDevTools()
    //                 win.loadURL(`https://discord.com/api/${rand(0, 9999)}`, {
    //                   userAgent
    //                 });
    //                 return fin({ type: true, win })
    //               } else {
    //                 // win.openDevTools()
    //                 win.loadURL(`https://discord.com/api/${rand(0, 9999)}`, {
    //                   userAgent
    //                 });
    //                 return fin({ type: true, win })
    //               }
    //             } catch (err) {
    //               console.error(err);
    //               return fin({ type: false, err })
    //             }
    //           })
    //         }

    //         if (window.xhrWindows[winId]) {
    //           var win = window.xhrWindows[winId];
    //         } else {
    //           var win = await createXhr(window.MyUserAgent);
    //           console.log('win', win);
    //           if (!win.type) {
    //             console.error('err293848329498234', win);
    //             return fin(win);
    //           }
    //           win = win.win;

    //           window.xhrWindows[winId] = win;

    //           setTimeout(async () => {
    //             win.destroy();
    //             window.xhrWindows[winId] = false;
    //           }, 300 * 1000);
    //         }

    //         var params = form;

    //         var timer = setTimeout(() => {
    //           return fin({ type: false, err: 'Timeout was reached' });
    //         }, 45000)
    //         if (params) params = JSON.stringify(params);
    //         if (headers) {
    //           var newerHeaders = [];
    //           Object.keys(headers).forEach(key => {
    //             var val = headers[key];
    //             newerHeaders.push(`${key}: ${val}`);
    //           })
    //           headers = JSON.stringify(newerHeaders);
    //         }
    //         console.log(headers, params, url, method);
    //         var script = `function xhrReq(url, method = 'GET', params = false, headers = []) {
    //                           return new Promise(async fin => {
    //                             var client = new XMLHttpRequest();
    //                             client.onload = function () {
    //                               var body = client.response;
    //                               var headers = client.getAllResponseHeaders();
    //                               var newHeaders = [];
    //                               try {
    //                                 body = JSON.parse(body)
    //                               } catch (err) {}
    //                               return fin({type: true, data: JSON.stringify(body), headers: {}, statusCode: client.status})
    //                             }
    //                             client.open(method, url, true);
    //                             if (params) headers.push('content-type: application/json');
    //                             headers.forEach(e => {
    //                               e = e.split(':');
    //                               console.log(e[0], e[1].substr(1, e[1].length))
    //                               client.setRequestHeader(e[0], e[1].substr(1, e[1].length))
    //                             })
    //                             if (params) {
    //                               client.send(JSON.stringify(params));
    //                             } else {
    //                               client.send();
    //                             }
    //                           })
    //                         }
    //                         xhrReq('${url}', '${method}', ${params}, ${headers})`;
    //                         console.log('url', url)
    //         var data = await win.webContents.executeJavaScript(script);
    //         clearTimeout(timer)
    //         console.log(data)
    //         return fin(data);
    //       } else {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open(method, url);
    //         xhr.onload = function () {
    //           return fin({
    //             type: true,
    //             data: xhr.response
    //           })
    //         };
    //         xhr.onerror = err => {
    //           return fin({
    //             type: false,
    //             err
    //           })
    //         };
    //         if (headers) {
    //           headers['referer'] = 'https://discord.com/channels/@me';
    //           headers['accept-language'] = 'ru';
    //           Object.keys(headers).forEach(key => {
    //             var val = headers[key];
    //             xhr.setRequestHeader(key, val);
    //           })
    //         }
    //         if (!form) {
    //           xhr.send();
    //         } else {
    //           if (typeof form != 'string') {
    //             form = JSON.stringify(form);
    //             xhr.setRequestHeader('Content-Type', 'application/json');
    //           }
    //           xhr.send(form);
    //         }
    //       }
    //     } catch (err) {
    //       console.error(err)
    //       return fin({
    //         type: false,
    //         err
    //       })
    //     }
    //   })
    // }
    var makeRequest = (method, url, form = false, headers = false) => {
      return new Promise(fin => {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.onload = function () {
            return fin({
              type: true,
              data: xhr.response
            })
          };
          xhr.onerror = err => {
            return fin({
              type: false,
              err
            })
          };
          if (headers) {
            headers['referer'] = 'https://discord.com/channels/@me';
            headers['accept-language'] = 'ru';
            Object.keys(headers).forEach(key => {
              var val = headers[key];
              xhr.setRequestHeader(key, val);
            })
          }
          if (!form) {
            xhr.send();
          } else {
            if (typeof form != 'string') {
              form = JSON.stringify(form);
              xhr.setRequestHeader('Content-Type', 'application/json');
            }
            xhr.send(form);
          }
        } catch (err) {
          console.error(err)
          return fin({
            type: false,
            err
          })
        }
      })
    }

    window.makeRequest = makeRequest;

    var dmSend = async (content, channelID, authorization, options_send) => {
      try {
        var json = {
          content,
          nonce: `81${rand(7006, 7310)}${rand(100000000, 999999999)}${rand(100, 999)}`,
          tts: false
        }
        var properties = {
          "os": "Windows",
          "browser": "Chrome",
          "device": "",
          "system_locale": "ru-RU",
          "browser_user_agent": window.MyUserAgent,
          "browser_version": window.MyBrowserVersion,
          "os_version": "10",
          "referrer": "",
          "referring_domain": "",
          "referrer_current": "",
          "referring_domain_current": "",
          "release_channel": "stable",
          "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
          "client_event_source": null
        }
        var headers = {
          authorization,
          'user-agent': properties['browser_user_agent'],
          'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64'),
          //'accept-language': 'ru',
        }
        var data = await makeRequest('POST', `https://discord.com/api/v9/channels/${channelID}/messages`, json, headers);
        if (!data.type) {
          console.error('err9203409234', data)
          throw Error(data.err);
        }
        return JSON.parse(data.data);
      } catch (err) {
        console.error('err34920349', err);
        throw Error(err);
      }
    }

    var getNewInvite = (invite, authorization) => {
      return new Promise(async fin => {
        try {
          if (invite.indexOf('/') >= 0) invite = get_invite_code(invite);
          var properties = {
            "os": "Windows",
            "browser": "Chrome",
            "device": "",
            "system_locale": "ru-RU",
            "browser_user_agent": window.MyUserAgent,
            "browser_version": window.MyBrowserVersion,
            "os_version": "10",
            "referrer": "",
            "referring_domain": "",
            "referrer_current": "",
            "referring_domain_current": "",
            "release_channel": "stable",
            "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
            "client_event_source": null
          }
          var params = {
            url: `https://discord.com/api/v9/invites/${invite}?inputValue=${encodeURIComponent(invite)}&with_counts=true&with_expiration=true`,
            method: 'GET',
            headers: {
              authorization,
              // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
              // 'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
              'user-agent': properties['browser_user_agent'],
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64'),
              //'accept-language': 'ru',
              // 'x-fingerprint': '798470356394442773.mKICM-5DT1eZFcq9cxjZwuxohlY'
            }
          }
          var data = await makeRequest('GET', `https://discord.com/api/v9/invites/${invite}?inputValue=${encodeURIComponent(invite)}&with_counts=true&with_expiration=true`, false, params.headers);
          if (!data.type) return fin({ type: false, err: data.err });
          try {
            data = JSON.parse(data.data);
          } catch (err) {
            console.error(err)
            return fin({
              type: false,
              err
            })
          }

          return fin({
            type: true,
            data
          })
          return console.log('data', data)
          var agent = get_proxy_agent();
          if (agent) params.agent = agent;
          var fetch = require('node-fetch')
          var data = await fetch(`https://discord.com/api/v9/invites/${invite}?inputValue=${invite}&with_counts=true&with_expiration=true`, params);
          if (data.status != 200 || !data) return fin({ type: false, err: data });
          data = await data.json()
          return fin({
            type: true,
            data
          })
          req(params, (err, res, data) => {
            if (err || res.statusCode != 200 || !data) return fin({ type: false, err: err || data });
            try {
              data = JSON.parse(data);
              return fin({ type: true, data });
            } catch (err) {
              return fin({ type: true, data });
            }
          })
        } catch (err) {
          console.error(err)
          return fin({ type: false, err });
        }
      })
    }

    var clientByToken = {};

    var newInvite = (invite, authorization, client = false) => {
      return new Promise(async fin => {
        try {
          var checkVerify = false;
          if (invite.indexOf('/') >= 0) invite = get_invite_code(invite);
          var inviteData = await getNewInvite(invite, authorization);
          if (!inviteData.type || !inviteData.data) return fin(inviteData);
          try {
            if (inviteData.data.guild.features.indexOf('MEMBER_VERIFICATION_GATE_ENABLED') >= 0) checkVerify = true;
          } catch (err) {
            checkVerify = false;
          }
          var count = inviteData.data.approximate_member_count;
          try {
            var guild_id = inviteData.data.guild.id;
            var location_guild_id = inviteData.data.guild.id;
            var location_channel_id = inviteData.data.channel.id;
            var location_channel_type = inviteData.data.channel.type;
          } catch (err) {
            console.error('err12323', err);
            var guild_id = null;
            var location_guild_id = null;
            var location_channel_id = null;
            var location_channel_type = 0;
          }
          var context = JSON.stringify({
            location: 'Join Guild',
            location_guild_id,
            location_channel_id,
            location_channel_type
          })
          console.log({
            location: 'Join Guild',
            location_guild_id,
            location_channel_id,
            location_channel_type
          })
          context = Buffer(context || '').toString('base64');
          var properties = {
            "os": "Windows",
            "browser": "Chrome",
            "device": "",
            "system_locale": "ru-RU",
            "browser_user_agent": window.MyUserAgent,
            "browser_version": window.MyBrowserVersion,
            "os_version": "10",
            "referrer": "",
            "referring_domain": "",
            "referrer_current": "",
            "referring_domain_current": "",
            "release_channel": "stable",
            "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
            "client_event_source": null
          }
          var params = {
            // url: `https://discord.com/api/v9/invites/${invite}`,
            method: 'POST',
            headers: {
              authorization,
              'x-context-properties': context,
              // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
              // 'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
              'user-agent': properties['browser_user_agent'],
              'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64'),
              //'accept-language': 'ru',
              // 'x-fingerprint': '798470356394442773.mKICM-5DT1eZFcq9cxjZwuxohlY'
            }
          }
          console.log('params', params)
          var agent = get_proxy_agent();
          if (agent) params.agent = agent;
          var data = await makeRequest('POST', `https://discord.com/api/v9/invites/${invite}`, false, params.headers);
          if (!data.type) return fin({ type: false, err: data.err });
          try {
            data = JSON.parse(data.data);
          } catch (err) {
            console.error(err)
            return fin({
              type: false,
              err
            })
          }

          // var dataCheck = await makeRequest('GET', `https://discord.com/api/v9/channels/${location_channel_id}`, false, {
          //   authorization,
          //   'user-agent': properties['browser_user_agent'],
          //   'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64'),
          //   //'accept-language': 'ru',
          // })
          await delay(rand(500, 2000));

          // try {
          //   var channelsWsSend = {}
          //   channelsWsSend[location_channel_id] = [[0, 99]]
          //   client.ws.shards.get(0).send({
          //     op: 14, d: {
          //         guild_id, activities: true,
          //         channels: channelsWsSend,
          //         guild_id,
          //         threads: true,
          //         typing: true
          //       }
          //   })
          // } catch (err) {
          //   console.error('err3940230234', err);
          // }

          // console.log('data.member_verification_form', data.member_verification_form, data)
          if (checkVerify) await verifyMemberForm(guild_id, invite, authorization);
          return fin({
            type: true,
            data,
            count
          })
          var fetch = require('node-fetch')
          var data = await fetch(`https://discord.com/api/v9/invites/${invite}`, params);
          if (data.status != 200 || !data) return fin({ type: false, err: data });
          data = await data.json()
          console.log(data);
          return fin({
            type: true,
            data,
            count
          })
          req(params, async (err, res, data) => {

            if (err || res.statusCode != 200 || !data) return fin({ type: false, err: err || data });
            try {
              data = JSON.parse(data);
              console.log('data', data)
              var member_verification_form = false;
              if (data.member_verification_form && data.member_verification_form.form_fields && data.member_verification_form.form_fields.length > 0) {
                await verifyMemberForm(guild_id, invite, authorization);
              }
              return fin({ type: true, data, count });
            } catch (err) {
              return fin({ type: true, data, count });
            }
          })
        } catch (err) {
          console.error(err)
          return fin({ type: false, err });
        }
      })
    }

    function get_token_from_acc(email, pass, cap_token) {
      return new Promise(fin => {
        var properties = {
          "os": "Windows",
          "browser": "Chrome",
          "device": "",
          "system_locale": "ru-RU",
          "browser_user_agent": window.MyUserAgent,
          "browser_version": window.MyBrowserVersion,
          "os_version": "10",
          "referrer": "",
          "referring_domain": "",
          "referrer_current": "",
          "referring_domain_current": "",
          "release_channel": "stable",
          "client_build_number": window.localStorage['clien_idD'] ? JSON.parse(window.localStorage['clien_idD']) : 66618,
          "client_event_source": null
        }
        var params = {
          url: 'https://discord.com/api/v9/auth/login',
          method: 'POST',
          headers: {

            //'accept-language': 'ru',
            'origin': 'https://discord.com',
            'content-type': 'application/json',
            'referer': 'https://discord.com/login',
            // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
            'dnt': '1',
            //'x-context-properties': 'eyJsb2NhdGlvbiI6IkFjY2VwdCBJbnZpdGUgUGFnZSIsImxvY2F0aW9uX2d1aWxkX2lkIjoiNDYwNDcyNDUwNzI4MzI5MjE3IiwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjQ2MDQ3MjQ1MDcyODMyOTIxOSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=',
            // 'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
            'user-agent': properties['browser_user_agent'],
            'x-super-properties': Buffer(JSON.stringify(properties)).toString('base64')
          },
          json: {
            captcha_key: cap_token,
            email: email,
            gift_code_sku_id: null,
            login_source: null,
            password: pass,
            undelete: false
          }
        };
        logntiwpoer(email);
        logntiwpoer(pass);
        logntiwpoer(cap_token);
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          if (err || !response || !body) return fin({ type: false, err: 1 });
          //body = JSON.parse(body);
          if (body.message && body.message.indexOf('400') >= 0) return fin({ type: 'captcha' });
          if (body.captcha_key) return fin({ type: 'captcha' });
          if (response.statusCode != 200 || !body.token) return fin({ type: false, err: JSON.stringify(body) });
          return fin({ type: true, token: body.token });
        })
      });
    }

    $('body').on('change', '#mass-tagging-users-check', function () {
      var v = $(this).prop('checked');
      if (v) {
        $('#mass-tagging-users-block').addClass('active')
        $('.input-to-spam-message-channels').addClass('hider-block-opacity');
      } else {
        $('#mass-tagging-users-block').removeClass('active')
        $('.input-to-spam-message-channels').removeClass('hider-block-opacity');
      }
      update_tmp('mass-tagging-users-check', v);
    })

    $('body').on('change', '#mass-tagging-users-count', function () {
      update_tmp('mass-tagging-users-count', $(this).val())
    })

    $('body').on('change', '#mass-tagging-users-text', function () {
      update_tmp('mass-tagging-users-text', $(this).val())
    })

    $('body').on('keyup', '#mass-tagging-users-count', function () {
      var count = parseInt($(this).val());
      if (isNaN(count)) return;
      var count = NumberEnd(count, translater(translate.noty.number_end.users));
      $('[for="mass-tagging-users-count"] pro').text(count);
    });

    // var deleteAllCookies = async () => {
    //   try {
    //     var app = require('electron').remote.app;
    //     var appPath = await app.getPath('userData');
    //     fs.unlinkSync(require('path').join(appPath, 'Cookies'));
    //     return {
    //       type: true
    //     }
    //   } catch (err) {
    //     console.error('err234823948234', err);
    //     return {
    //       type: false,
    //       err
    //     }
    //   }
    // }

    // setInterval(() => {
    //   deleteAllCookies('discord');
    // }, 1000);

    var initDiscordCookie = authorization => {
      return new Promise(async fin => {
        try {
          // return fin({type: true});
          return fin({type: true});
          
          await deleteAllCookies('discord');
          // var data = await makeRequest('GET', 'https://discord.com/app', false, {
          //   // authorization
          // });
        } catch (err) {
          console.error('err394029490234', err)
          return fin({
            type: false,
            err
          })
        }
      })
    }
    var fetchUsers = (client, token, invite, verify_server = false, ownChannelsId = false, dontInvite = false) => {
      return new Promise(async fin => {
        try {
          try {
            if (dontInvite) {
              var check = dontInvite
            } else {
              var check = await get_guildid_from_invite(invite, token, 50000);
              console.log('check', check)
            }
            if (!check.type && check.err == 401) noty_of_ban_account_by_token(token);
            if (!check.type) return fin({ type: false });
            var verfy_time = 0;
            logntiwpoer(verify_server);
            if (verify_server) {
              var check_next_verify_server = false;
              try {
                await client.channels.get(verify_server.channel).messages.fetch();
              } catch (err_await) {
                check_next_verify_server = true;
              } finally { }
              if (!check_next_verify_server && !client.channels.get(verify_server.channel).messages.get(verify_server.message)) return noty('error', translater(translate.noty.other.not_found_m_id_v));
              if (!check_next_verify_server && client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions.size < 1) return noty('error', translater(translate.noty.other.not_found_react_in_m_v));
              if (!check_next_verify_server) for (var [key, val] of client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions) client.channels.get(verify_server.channel).messages.get(verify_server.message).react(key)
              logntiwpoer('RRR');
              if (!check_next_verify_server) verfy_time = 1000;
            }
            await delay(verfy_time);
            var guild_id = check.id;
            logntiwpoer('2');
            var inviteData;
            if (check.channel && check.count) {
              inviteData = {
                channel: check.channel,
                count: check.count
              }
            }
            var users = await get_server_users(client, guild_id, inviteData, 50000, ownChannelsId);
            console.log('usersusersusersusersusers', users);
            if (!users.type) return fin({ type: false, err: users.err });
            return fin({ type: true, users: users.users });
          } catch (err) {
            logntiwpoer(err);
            if (err.message.indexOf('ncorrect login') >= 0 || err.message.indexOf('author') >= 0) {
              noty_of_ban_account(acc_name)
            } else if (err.message.indexOf('verify') >= 0) {
              noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc_name }));
            } else {
              noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: err.message }));
            }
            return fin({ type: false })
          }
        } catch (err) {
          console.error(err);
          return fin({ type: false, err })
        }
      })
    }

    function spamUsersTagsFromServer(accounts, invite, pars, countOfTagUsers = 5, moreMesages = false, delayd = false, verify_server = false, text = false, deleteMessages = false) {
      return new Promise(async fin => {
        try {
          fat_get_acc_token_v = store.get('accounts_token');
          fat_get_accounts = store.get('accounts');
          var allClients = [];
          var wrong_accs = []
          if (!delayd) {
            delayd = {
              min: 5,
              max: 10
            }
          }
          var delay = (time = 1000) => {
            return new Promise(fin => {
              setTimeout(fin, time)
            })
          }
          var firstAcc = accounts[0];
          var firstAccClient = false;
          var users = false;
          var doneUsers = {}
          var stopped = false;
          var allCount = 0;
          emitter.on('stop_spam_channels', () => {
            stopped = true;
            fin({ type: true })
          })
          await delay(500);
          var parsUsers = () => {
            return new Promise(async fin => {
              var acc = get_account(firstAcc);
              var acc_name = acc.name;
              var email = firstAcc;
              var pass = acc.pass;
              var rucaptcha = acc.rucaptcha;
              noty('warning', translater(translate.noty.other.starting_pars_users));
              var check = await loginer_acc_api(email, pass, rucaptcha);
              if (!check.type) {
                logntiwpoer(check);
                if (check.err == 401 || check.err.toString().indexOf('token') >= 0) {
                  noty_of_ban_account(acc_name)
                } else {
                  noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
                }
                if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
                if (wrong_accs.length >= accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
                return fin({ type: false });
              }
              var token = check.token;
              var Discord = require("discord.js");
              var client = new Discord.Client();
              firstAccClient = client;
              await initDiscordCookie(token)
              await client.login(token)

              var users = await fetchUsers(client, token, invite, verify_server)
              if (!users.type) return fin({ type: false, err: users.err });
              return fin({ type: true, users: users.users });
            })
          }
          var doneCount = 0;
          var usersPars = await parsUsers()
          if (!usersPars.type) return fin({ type: false, err: 'err_pars' });
          if (usersPars.users.length < 3) return fin({ type: false, err: 'users_list_too_smal' });
          users = usersPars.users;
          accounts.forEach(async (e, ind) => {
            await delay(150 * ind);
            var acc = get_account(e);
            var acc_name = acc.name;
            var email = e;
            var pass = acc.pass;
            var rucaptcha = acc.rucaptcha;
            noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc_name }));
            var check = await loginer_acc_api(email, pass, rucaptcha);
            if (check_stop_spam_channels) stoper = true;
            if (!check.type) {
              if (ind == arr.length - 1) {
                return fin({ type: false, err: 451 });
              } else {
                return noty('warning', translater(translate.noty.other.err_w_g_t_a, false, { email: email }));
              }
            }
            var token = check.token;
            var channels = pars.channels.reverse();
            var check = await get_guildid_from_invite(invite, token, 50000, acc_name)
            if (check_stop_spam_channels) stoper = true;
            if (!check.type) {
              logntiwpoer(check);
              if (check.err == 401 || check.err.toString().indexOf('token') >= 0) {
                noty_of_ban_account(acc_name)
              } else {
                noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: check.err }));
              }
              if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
              if (wrong_accs.length >= accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
              return false;
            }
            var guild_id = check.id;
            var checkLogin = false;
            if (ind == 0 && firstAccClient) {
              var client = firstAccClient
              checkLogin = true;
            } else {
              var Discord = require("discord.js");
              var client = new Discord.Client();
            }
            allClients.push(client);
            try {
              if (!checkLogin) {
                await initDiscordCookie(token)
                await client.login(token)
              }
              if (check_stop_spam_channels) stoper = true;
              if (!client.guilds.get(guild_id)) return noty('error', translater(translate.noty.other.err_w_i_g));
              var verfy_time = 0;
              logntiwpoer(verify_server);
              if (verify_server) {
                var check_next_verify_server = false;
                try {
                  await client.channels.get(verify_server.channel).messages.fetch();
                } catch (err_await) {
                  check_next_verify_server = true;
                } finally { }
                if (!check_next_verify_server && !client.channels.get(verify_server.channel).messages.get(verify_server.message)) return noty('error', translater(translate.noty.other.not_found_m_id_v));
                if (!check_next_verify_server && client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions.size < 1) return noty('error', translater(translate.noty.other.not_found_react_in_m_v));
                if (!check_next_verify_server) for (var [key, val] of client.channels.get(verify_server.channel).messages.get(verify_server.message).reactions) client.channels.get(verify_server.channel).messages.get(verify_server.message).react(key)
                logntiwpoer('RRR');
                if (!check_next_verify_server) verfy_time = 1000;
              }
              await delay(verfy_time);
              await client.guilds.get(guild_id).fetch();
              async function starter() {
                var finish = () => {
                  console.warn('finish', 'moreMesages', moreMesages)
                  client.destroy();
                  if (++doneCount >= accounts.length) return fin({ type: true })
                }
                if (stopped || wrong_accs.indexOf(acc_name) >= 0) {
                  console.warn('VOVA222');
                  return finish();
                }
                var nowUsers = [];
                users.forEach(e => {
                  var user_id = e.id;
                  if (!doneUsers[user_id]) doneUsers[user_id] = 0;
                  if (!moreMesages && doneUsers[user_id] < 1 && nowUsers.length < countOfTagUsers) {
                    doneUsers[user_id]++;
                    nowUsers.push(user_id);
                  } else if (doneUsers[user_id] < moreMesages && nowUsers.length < countOfTagUsers) {
                    doneUsers[user_id]++;
                    nowUsers.push(user_id);
                  }
                })
                if (nowUsers.length < 1) {
                  if (!moreMesages) {
                    doneUsers = {}
                    return setTimeout(starter, 150);
                  } else {
                    console.warn('VOVA1');
                    return finish()
                  }
                }
                var message = ''
                nowUsers.forEach(e => {
                  message += `<@${e}> `;
                })
                if (text) {
                  var nowText = text;
                  for (var i = 0; i < nowText.length; i++) {
                    nowText = nowText.replace('[rand]', rand(1000, 9999));
                    nowText = nowText.replace('[myusername]', client.user.username);
                    nowText = nowText.replace('[mydiscrim]', client.user.discriminator);
                    nowText = nowText.replace('[mytag]', `${client.user.username}#${client.user.discriminator}`);
                    nowText = nowText.replace('[@mytag]', `<@${client.user.id}>`);
                  }
                  message += nowText;
                }
                var getDelay = () => {
                  return rand(delayd.min, delayd.max) * 1000;
                }
                try {
                  var sender = () => {
                    return new Promise(async fin => {
                      try {
                        var doneCount = 0
                        var del = getDelay()
                        channels.forEach(async (channel, ind) => {
                          await delay(del * ind);
                          try {
                            var send = await client.guilds.get(guild_id).channels.get(channel.id).send(message);
                            if (deleteMessages) {
                              setTimeout(() => {
                                send.delete()
                              }, deleteMessages * 1000);
                            }
                            emitter.emit('success_send_msg_channel');
                          } catch (err) { }
                          if (++doneCount >= channels.length) return fin()
                        })
                      } catch (err) {
                        console.error(err);
                        return fin()
                      }
                    })
                  }
                  await sender()
                  starter();
                } catch (err) {
                  console.error(err);
                  await delay(150);
                  starter();
                }
              }
              starter();
            } catch (err) {
              logntiwpoer(err);
              if (err.message.indexOf('ncorrect login') >= 0 || err.message.indexOf('author') >= 0) {
                noty_of_ban_account(acc_name)
              } else if (err.message.indexOf('verify') >= 0) {
                noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc_name }));
              } else {
                noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: err.message }));
              }
              if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
              if (wrong_accs.length >= accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
            }
          })
        } catch (err) {
          if (wrong_accs.indexOf(acc_name) < 0) wrong_accs.push(acc_name);
          if (wrong_accs.length >= accounts.length) { noty('warning', 'End_Code: 7'); return fin({ type: true }); }
          console.error(err);
          return fin({ type: false, err });
        }
      })
    }

    function get_server_users(client, guild_id, inviteData = false, limit = 50000, ownChannelsId = false) {
      return new Promise(async fin => {
        try {
          var defaultChannel;
          var countOfMembers;
          if (inviteData) {
            defaultChannel = inviteData.channel.id;
            countOfMembers = inviteData.count;
          }
          await client.guilds.get(guild_id).fetch()
          var channels = get_all_text_channels_guild(client, guild_id);
          var checkChannels = [];
          channels.forEach(e => {
            var check = check_perm_members_channel(client, guild_id, e.id, client.user.id);
            if (check) checkChannels.push({ id: e.id, name: e.name, limit: e.rateLimitPerUser, files: true });
          });
          checkChannels = channels;
          var sendChannels = {};
          var senderChannels = []
          var counter = 0;
          // console.log('checkChannels', checkChannels);
          checkChannels.forEach((e, ind) => {
            var start = 100 * ind;
            var end = start + 99;
            sendChannels[e.id] = [[start, end]];
          })
          // console.log('sendChannels', JSON.stringify(sendChannels))
          var temp = [];
          Object.keys(sendChannels).forEach((key, ind, arr) => {
            var val = sendChannels[key];
            counter++;
            var a = {}
            a[key] = val;
            temp.push(a);
            if (counter > 4 || ind == arr.length - 1) {
              senderChannels.push(temp)
              counter = 0;
              temp = []
            }
          })
          // console.log('sendChannels', sendChannels)
          var checkStopFetcher = false;
          console.log('1', 2)
          client.on('guild_members_list_update_end', () => {
            checkStopFetcher = true;
          });
          // console.log('sendChannels', sendChannels)
          console.log('ownChannelsId', ownChannelsId)
          if (!ownChannelsId) {
            sendChannels = Object.keys(sendChannels);
          } else {
            ownChannelsId = ownChannelsId.split(',');
            sendChannels = ownChannelsId;
          }
          // sendChannels = ['622018588865200139'];
          // var indChannels = 0
          // client.ws.shards.get(0).send({op: 8, d: {guild_id: [guild_id], user_ids: [client.user.id] } })
          var sendEvent = (counter = 0, oldFin = false) => {
            return new Promise(async fin => {
              if (defaultChannel) {
                if (sendChannels && sendChannels.length > 0) defaultChannel = sendChannels[Math.floor(Math.random() * sendChannels.length)];
                // console.log('sendChannels', sendChannels)
                // defaultChannel = sendChannels[counter]
                // if (!defaultChannel) if (sendChannels && sendChannels.length > 0) defaultChannel = sendChannels[Math.floor(Math.random() * sendChannels.length)];
                var arr = [];

                var max = limit < countOfMembers ? limit : countOfMembers;
                for (var i = 0; i < max / 100; i++) {
                  if (i === 0) {
                    var d = [[0, 99]];
                  } else {
                    var d = [[0, 99]];
                    if (i + 1 % 2 === 0) {
                      var start = (i + 1) * 100;
                      var end = start + 99
                      d.push([
                        start, end
                      ])
                    } else {
                      var start = ((i + 1) * 100) - 100;
                      var end = start + 99
                      d.push([
                        start, end
                      ])
                      start = start + 100;
                      var end = start + 99
                      d.push([
                        start, end
                      ])
                    }
                  }
                  arr.push(d);
                }
                var a = {}
                a[defaultChannel] = arr[counter];
                console.log('aaaa', a)
                // await delay(rand(700, 1400))
                client.ws.shards.get(0).send({ op: 14, d: { guild_id, channels: a } })
                if (++counter >= max / 100 || checkStopFetcher) {
                  // counter++
                  // if (counter > 30 || counter >= sendChannels.length) {
                  var finish = oldFin || fin
                  return finish({ type: true });
                }
                // await delay(rand(500, 900));
                sendEvent(counter, oldFin ? oldFin : fin);
              }
            })
          }
          console.log('sjkdkasjsd')
          await sendEvent();
          // await delayd(10000)
          await delayd(30000)
          var owner_id = client.guilds.get(guild_id).ownerID;
          var myId = client.user.id;
          var users = client.guilds.get(guild_id).members;
          console.log('voasdlka')
          return fin({ type: true, users })
        } catch (err) {
          console.error(err);
          return fin({ type: false, err })
        }
      })
    }

    //check_status: 1 - online 2 -

    function pars_server_api(guildid, token, limit = 50000, params = false, type_pars = 0, black_servers = false, time_to_check_join = false, time_to_check_join_to = 0, time_to_check_join_from = 0, privilege = false, check_avatar = false, check_status = false, clientStatus = false, games = false, time_reg = false, time_reg_from = false, time_reg_to = false, pars_voices = false, inviteData = false, verify_server = false, invite = false, ownChannelsId = false, dontInviteData = false) {
      return new Promise(async fin => {
        var Discord = require("discord.js");
        var client = new Discord.Client();
        var roles = false;
        logntiwpoer(params);
        if (params) {
          if (params.time_to_check_join) time_to_check_join = params.time_to_check_join;
          if (params.time_to_check_join_to) time_to_check_join_to = params.time_to_check_join_to;
          if (params.time_to_check_join_from) time_to_check_join_from = params.time_to_check_join_from;
          //if (params.privilege) privilege = params.privilege;
          if (params.check_avatar) check_avatar = params.check_avatar;
          if (params.check_status) check_status = params.check_status;
          if (params.clientStatus) clientStatus = params.clientStatus;
          if (params.games) games = params.games;
          if (params.time_reg) time_reg = params.time_reg;
          if (params.time_reg_from) time_reg_from = params.time_reg_from;
          if (params.time_reg_to) time_reg_to = params.time_reg_to;
          if (params.roles) roles = params.roles;
        }
        noty('warning', translater(translate.noty.other.starting_pars));
        users = [];
        var roles_id = [];
        if (roles) roles.forEach(e => { roles_id.push(e.id) });
        logntiwpoer(roles_id);
        var delay = (time = 1000) => {
          return new Promise(fin => {
            setTimeout(() => {
              fin()
            }, time)
          })
        }
        await initDiscordCookie(token)
        client.login(token).then(async () => {
          setTimeout(async () => {
            if (type_pars == 0) {
              var defaultChannel;
              var countOfMembers;
              if (inviteData) {
                defaultChannel = inviteData.channel.id;
                countOfMembers = inviteData.count;
              }
              var channels = get_all_text_channels_guild(client, guildid);
              var checkChannels = [];
              channels.forEach(e => {
                var check = check_perm_members_channel(client, guildid, e.id, client.user.id);
                if (check) checkChannels.push({ id: e.id, name: e.name, limit: e.rateLimitPerUser, files: true });
              });
              var sendChannels = {};
              var senderChannels = []
              var counter = 0;
              channels.forEach((e, ind) => {
                var start = 100 * ind;
                var end = start + 99;
                sendChannels[e.id] = [[start, end]];
              })
              var temp = [];
              Object.keys(sendChannels).forEach((key, ind, arr) => {
                var val = sendChannels[key];
                counter++;
                var a = {}
                a[key] = val;
                temp.push(a);
                if (counter > 4 || ind == arr.length - 1) {
                  senderChannels.push(temp)
                  counter = 0;
                  temp = []
                }
              })
              var checkStopFetcher = false;
              client.on('guild_members_list_update_end', () => {
                checkStopFetcher = true;
              });
              sendChannels = Object.keys(sendChannels);
              var members = await fetchUsers(client, token, invite, verify_server, ownChannelsId, dontInviteData);
              console.log('members', members)
              if (!members.type) return fin({ type: false, err: members.err })
              var guild = client.guilds.get(guildid);
              var owner_id = guild.ownerID;
              var myId = client.user.id;
              if (!pars_voices) {
                var server_name = guild.name;
                var server_avatar = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`;
                last_pars_data.server_name = server_name;
                last_pars_data.server_avatar = server_avatar;
                var time;
                var id;
                var role;
                var avatar;
                if (!black_servers) client.destroy();
                var users = [];
                //logntiwpoer(d.members);
                console.log('guild.members', guild.members)
                guild.members.forEach((e, index, arr) => {
                  //logntiwpoer(e.user.presence.status);
                  var check;
                  check = true;
                  if (!e.user.bot && e.user.id != owner_id && e.user.id != myId && users.length < limit) {
                    time = Number((e.joinedTimestamp / 1000).toFixed(0));
                    id = e.user.id;
                    username = e.user.username + '#' + e.user.discriminator;
                    role = 'user';
                    var created = Math.round(e.user.createdTimestamp / 1000);
                    if (e.user.avatar) {
                      avatar = 'https://cdn.discordapp.com/avatars/' + id + '/' + e.user.avatar + '.png?size=128';
                    } else {
                      avatar = 'null';
                    }
                    if (time_to_check_join) {
                      if (time > time_to_check_join_to || time < time_to_check_join_from) check = false;
                    }
                    if (e._roles.length > 0) {
                      role = 'privileged';
                    }
                    if (roles) {
                      check = false;
                      e.roles.forEach(z => {
                        if (roles_id.indexOf(z.id) >= 0) check = true;
                      })
                    }
                    if (check_avatar && avatar == 'null') {
                      check = false;
                    }
                    if (check_status && check_status.indexOf(e.user.presence.status) < 0) {
                      check = false;
                    }
                    if (clientStatus && !e.user.presence.clientStatus) {
                      check = false;
                    } else if (clientStatus && clientStatus.indexOf(Object.keys(e.user.presence.clientStatus)[0]) < 0) {
                      check = false;
                    }
                    console.log('e.user.presence.activity', e.user.presence.activity, 'e.user', e.user, games)
                    if (games) {
                      if (!e.user.presence.activity) {
                        check = false;
                      } else {
                        var checkGame = false;
                        games.forEach(g => {
                          console.log('e.user.presence.activity.name', e.user.presence.activity.name)
                          console.log('e.user.presence', e.user.presence)
                          if (e.user.presence.activity.name && g.toLowerCase() == e.user.presence.activity.name.toLowerCase()) checkGame = true;
                        })
                        if (!checkGame) check = false;
                      }
                    }
                    if (time_reg) {
                      if (created > time_reg_to || created < time_reg_from) check = false;
                    }
                    if (check) {
                      users.push({
                        'user_id': id,
                        'username': username,
                        //'avatar': avatar,
                        'role': role
                      });
                    }
                  }
                });
                if (black_servers) {
                  var black_users = [];
                  function blacker_serverar(ind = 0) {
                    if (ind == black_servers.length - 1) {
                      var new_users = [];
                      users.forEach((e) => {
                        if (black_users.indexOf(e.user_id) < 0) new_users.push(e);
                      });
                      client.destroy();
                      return fin({ type: true, users: new_users });
                    }
                    var invite = black_servers[ind];
                    setTimeout(async () => {
                      var data = await fetchUsers(client, token, invite, false, ownChannelsId, dontInviteData);
                      if (!data.type) return fin({ type: false, err: data.err });
                      dater.users.forEach(e => {
                        black_users.push(e.user.id);
                      });
                      ind++;
                      blacker_serverar(ind);
                    }, 500);
                  }
                  blacker_serverar();
                } else {
                  return fin({ type: true, users: users });
                }
                // }).catch((r) => {
                //   return fin({ type: false, err: r });
                // });
              } else {
                var guild = client.guilds.get(guildid);
                var server_name = guild.name;
                var server_avatar = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`;
                last_pars_data.server_name = server_name;
                last_pars_data.server_avatar = server_avatar;
                var time;
                var id;
                var role;
                var avatar;
                var users = [];
                guild.voiceStates.forEach((e, index, arr) => {
                  var member = e.member;
                  //logntiwpoer(e.user.presence.status);
                  var check;
                  check = true;
                  if (!member.user.bot && member.user.id != owner_id && member.user.id != myId && users.length < limit) {
                    time = Number((member.joinedTimestamp / 1000).toFixed(0));
                    id = member.user.id;
                    username = member.user.username + '#' + member.user.discriminator;
                    role = 'user';
                    var created = Math.round(member.user.createdTimestamp / 1000);
                    if (member.user.avatar) {
                      avatar = 'https://cdn.discordapp.com/avatars/' + id + '/' + member.user.avatar + '.png?size=128';
                    } else {
                      avatar = 'null';
                    }
                    if (time_to_check_join) {
                      if (time > time_to_check_join_to || time < time_to_check_join_from) check = false;
                    }
                    if (member._roles.length > 0) {
                      role = 'privileged';
                    }
                    if (roles) {
                      check = false;
                      member._roles.forEach(z => {
                        if (roles_id.indexOf(z) >= 0) check = true;
                      })
                    }
                    if (check_avatar && avatar == 'null') {
                      check = false;
                    }
                    if (check_status && check_status.indexOf(member.user.presence.status) < 0) {
                      check = false;
                    }
                    if (clientStatus && !member.user.presence.clientStatus) {
                      check = false;
                    } else if (clientStatus && clientStatus.indexOf(Object.keys(member.user.presence.clientStatus)[0]) < 0) {
                      check = false;
                    }
                    if (games) {
                      if (!e.user.presence.activity) {
                        check = false;
                      } else {
                        var checkGame = false;
                        games.forEach(g => {
                          if (e.user.presence.activity.name && g.toLowerCase() == e.user.presence.activity.name.toLowerCase()) checkGame = true;
                        })
                        if (!checkGame) check = false;
                      }
                    }
                    if (time_reg) {
                      if (created > time_reg_to || created < time_reg_from) check = false;
                    }
                    if (check) {
                      users.push({
                        'user_id': id,
                        'username': username,
                        //'avatar': avatar,
                        'role': role
                      });
                    }
                  }
                });
                if (!black_servers) client.destroy();
                if (black_servers) {
                  var black_users = [];
                  function blacker_serverar(ind = 0) {
                    if (ind == black_servers.length - 1) {
                      var new_users = [];
                      users.forEach((e) => {
                        if (black_users.indexOf(e.user_id) < 0) new_users.push(e);
                      });
                      client.destroy();
                      return fin({ type: true, users: new_users });
                    }
                    var e = black_servers[ind];
                    setTimeout(async () => {
                      var dater = await get_fetchmembers(token, false, e, limit, client);
                      if (!dater.type) return fin({ type: false, err: dater.err });
                      dater.data.members.forEach(e => {
                        black_users.push(e.user.id);
                      });
                      ind++;
                      blacker_serverar(ind);
                    }, 500);
                  }
                  blacker_serverar();
                } else {
                  return fin({ type: true, users: users });
                }
              }
            } else {
              var data = [];
              $('#count-pars-users v').text('0');
              $('#count-pars-users all').text('0');
              $('#count-pars-users').addClass('active');
              async function ppp(ier = 0) {
                logntiwpoer(`ppp: ${ier}`);
                if (ier >= guildid.length) {
                  client.destroy();
                  return fin({ type: true, data: data });
                }
                $('#count-pars-users v').text(`${ier + 1}`);
                $('#count-pars-users all').text(`${guildid.length}`);
                var id_guild = guildid[ier];
                var invite = id_guild.invite;
                var members = await fetchUsers(client, token, invite, false, ownChannelsId);
                // if (!members.type) return fin({type: false, err: members.err})
                if (members.type) {
                  if (!pars_voices) {
                    var owner_id = client.guilds.get(id_guild.id).ownerID;
                    //client.guilds.get(id_guild).fetchMembers('', limit).then(d => {
                    var guild = client.guilds.get(id_guild.id)
                    var server_name = guild.name;
                    var server_avatar = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`;
                    var time;
                    var id;
                    var role;
                    var avatar;
                    var users = [];
                    //logntiwpoer(guild.members);
                    guild.members.forEach((e, index, arr) => {
                      //logntiwpoer(e.user.presence.status);
                      var check;
                      check = true;
                      if (!e.user.bot && e.user.id != owner_id && e.user.id != myId && users.length < limit) {
                        time = Number((e.joinedTimestamp / 1000).toFixed(0));
                        id = e.user.id;
                        username = e.user.username + '#' + e.user.discriminator;
                        role = 'user';
                        var created = Math.round(e.user.createdTimestamp / 1000);
                        if (e.user.avatar) {
                          avatar = 'https://cdn.discordapp.com/avatars/' + id + '/' + e.user.avatar + '.png?size=128';
                        } else {
                          avatar = 'null';
                        }
                        if (time_to_check_join) {
                          if (time > time_to_check_join_to || time < time_to_check_join_from) check = false;
                        }
                        if (e._roles.length > 0) {
                          role = 'privileged';
                        }
                        if (roles) {
                          check = false;
                          e.roles.forEach(z => {
                            if (roles_id.indexOf(z.id) >= 0) check = true;
                          })
                        }
                        if (check_avatar && avatar == 'null') {
                          check = false;
                        }
                        if (check_status && check_status.indexOf(e.user.presence.status) < 0) {
                          check = false;
                        }
                        if (clientStatus && !e.user.presence.clientStatus) {
                          check = false;
                        } else if (clientStatus && clientStatus.indexOf(Object.keys(e.user.presence.clientStatus)[0]) < 0) {
                          check = false;
                        }
                        if (games) {
                          if (!e.user.presence.activity) {
                            check = false;
                          } else {
                            var checkGame = false;
                            games.forEach(g => {
                              if (e.user.presence.activity.name && g.toLowerCase() == e.user.presence.activity.name.toLowerCase()) checkGame = true;
                            })
                            if (!checkGame) check = false;
                          }
                        }
                        if (time_reg) {
                          if (created > time_reg_to || created < time_reg_from) check = false;
                        }
                        if (check) {
                          users.push({
                            'user_id': id,
                            'username': username,
                            'avatar': avatar,
                            'role': role
                          });
                        }
                      }
                    });
                    data.push({
                      server_name: server_name,
                      invite,
                      limit: limit,
                      server_avatar: server_avatar,
                      users: users
                    })
                    ier++;
                    setTimeout(() => {
                      ppp(ier);
                    }, 500);
                    // }).catch((r) => {
                    //   client.destroy();
                    //   return fin({ type: false, err: r });
                    // });
                  } else {
                    var server_name = client.guilds.get(id_guild).name;
                    var server_avatar = `https://cdn.discordapp.com/icons/${client.guilds.get(id_guild).id}/${client.guilds.get(id_guild).icon}.png?size=128`;
                    var time;
                    var id;
                    var role;
                    var avatar;
                    var users = [];
                    //logntiwpoer(d.members);
                    client.guilds.get(id_guild).voiceStates.forEach((e, index, arr) => {
                      //logntiwpoer(e.user.presence.status)
                      var member = e.member;
                      var check = true;
                      if (!member.user.bot && member.user.id != owner_id && member.user.id != myId && users.length < limit) {
                        time = Number((member.joinedTimestamp / 1000).toFixed(0));
                        id = member.user.id;
                        username = member.user.username + '#' + member.user.discriminator;
                        role = 'user';
                        var created = Math.round(member.user.createdTimestamp / 1000);
                        if (member.user.avatar) {
                          avatar = 'https://cdn.discordapp.com/avatars/' + id + '/' + member.user.avatar + '.png?size=128';
                        } else {
                          avatar = 'null';
                        }
                        if (time_to_check_join) {
                          if (time > time_to_check_join_to || time < time_to_check_join_from) check = false;
                        }
                        if (member._roles.length > 0) {
                          role = 'privileged';
                        }
                        if (roles) {
                          check = false;
                          member._roles.forEach(z => {
                            if (roles_id.indexOf(z) >= 0) check = true;
                          })
                        }
                        if (check_avatar && avatar == 'null') {
                          check = false;
                        }
                        if (check_status && check_status.indexOf(member.user.presence.status) < 0) {
                          check = false;
                        }
                        if (clientStatus && !member.user.presence.clientStatus) {
                          check = false;
                        } else if (clientStatus && clientStatus.indexOf(Object.keys(member.user.presence.clientStatus)[0]) < 0) {
                          check = false;
                        }
                        if (games) {
                          if (!e.user.presence.activity) {
                            check = false;
                          } else {
                            var checkGame = false;
                            games.forEach(g => {
                              if (e.user.presence.activity.name && g.toLowerCase() == e.user.presence.activity.name.toLowerCase()) checkGame = true;
                            })
                            if (!checkGame) check = false;
                          }
                        }
                        if (time_reg) if (created > time_reg_to || created < time_reg_from) check = false;
                        if (check) {
                          users.push({
                            'user_id': id,
                            'username': username,
                            'avatar': avatar,
                            'role': role
                          });
                        }
                      }
                    });
                    data.push({
                      server_name: server_name,
                      invite: invite,
                      limit: limit,
                      server_avatar: server_avatar,
                      users: users
                    })
                    ier++;
                    setTimeout(() => {
                      ppp(ier);
                    }, 1000);
                  }
                } else {
                  ier++;
                  setTimeout(() => {
                    ppp(ier);
                  }, 1000);
                }
              }
              ppp();
            }
          }, 500);
        }).catch((r) => {
          console.log(r)
          logntiwpoer(r);
          return fin({ type: false, err: 1 });
        });
      });
    }

    function parser_api(invite, token, limit = 50000, params = false, acc_name = '', type_pars = 0, black_servers = false, pars_voices = false, verify_server = false, ownChannelsId = false) {
      return new Promise(fin => {
        if (type_pars == 0 && invite.indexOf('/') >= 0) invite = get_invite_code(invite);
        logntiwpoer('2');
        get_guildid_from_invite(invite, token, limit, acc_name).then(check => {
          if (!check.type && check.err == 401) noty_of_ban_account_by_token(token);
          if (!check.type) return fin({ type: false, err: check.err });
          var dontInviteData = check
          var id = check.id;
          logntiwpoer('2');
          var inviteData;
          if (check.channel && check.count) {
            inviteData = {
              channel: check.channel,
              count: check.count
            }
          }
          pars_server_api(id, token, limit, params, type_pars, black_servers, false, 0, 0, false, false, false, false, false, false, false, false, pars_voices, inviteData, verify_server, invite, ownChannelsId, dontInviteData).then((list) => {
            $('#count-pars-users').removeClass('active');
            logntiwpoer('2');
            if (!list.type) return fin({ type: false, err: list.err });
            if (type_pars == 0) {
              list = list.users;
              return fin({ type: true, list: list });
            } else {
              return fin({ type: true, data: list.data });
            }
          }).catch(e => {
            logntiwpoer(e);
          })
        })
      });
    }

    function get_guildid_from_invite_fetch_invite(invite, token, client = false, limit = 50000) {
      return new Promise(async fin => {
        //return fin({type: true});
        logntiwpoer('get_guildid_from_invite_fetch_invite');
        if (!client) {
          await initDiscordCookie(token);
          client.login(token).then((check) => {
            if (check != token) return fin({ type: false, err: 401 });
            client.user.acceptInvite(invite)
            setTimeout(() => {
              client.fetchInvite(invite).then(r => {
                var id = r.guild.id;
                setTimeout(() => {
                  client.guilds.get(id).fetchMembers('', limit).then(() => {
                    return fin({ type: true });
                  }).catch(() => {
                    return fin({ type: false, err: 478 });
                  })
                }, 300);
              }).catch(() => {
                return fin({ type: false, err: 405 });
              })
            }, 3000);
          }).catch(() => {
            return fin({ type: false, err: 457 });
          })
        } else {
          logntiwpoer('SSSS2222');
          client.user.acceptInvite(invite)
          setTimeout(() => {
            client.fetchInvite(invite).then(r => {
              var id = r.guild.id;
              setTimeout(() => {
                client.guilds.get(id).fetchMembers('', limit).then((d) => {
                  //              logntiwpoer(d);
                  return fin({ type: true });
                }).catch((r) => {
                  logntiwpoer(r);
                  return fin({ type: false, err: 478 });
                })
              }, 300);
            }).catch((r) => {
              logntiwpoer(r);
              return fin({ type: false, err: 874 });
            })
          }, 3000);
        }
        return false;
        var params = {
          url: `https://discord.com/api/v9/invites/${invite}`,
          method: 'POST',
          headers: {
            'authorization': token,

            //'accept-language': 'ru',
            'origin': 'https://discord.com',
            'referer': 'https://discord.com/invite/' + invite,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
            'dnt': '1',
            'content-type': 'application/json',
            //'x-context-properties': 'eyJsb2NhdGlvbiI6IkFjY2VwdCBJbnZpdGUgUGFnZSIsImxvY2F0aW9uX2d1aWxkX2lkIjoiNDYwNDcyNDUwNzI4MzI5MjE3IiwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjQ2MDQ3MjQ1MDcyODMyOTIxOSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=',
            'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
          }
        };
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          if (err || !response || !body) return fin({ type: false, err: 1 });
          if (response.statusCode != 200) return fin({ type: false, err: response.statusCode });
          body = JSON.parse(body);
          last_pars_data.invite = get_invite(invite);
          if (body.code != invite) return fin({ type: false, err: body.code });
          var id = body.guild.id;
          var Discord = require("discord.js");
          setTimeout(() => {
            var client = new Discord.Client();

          }, 1000);
        })
      });
    }

    $('body').on('click', function (e) {
      if (e.target.className.indexOf('block-history-text-dis') >= 0) return false;
      $('.block-history-text-dis').removeClass('active');
      $('.block-history-text-dis-channels').removeClass('active');
    });

    $('body').on('click', '.editer-sel-friends', function () {
      if (!$(this).hasClass('next')) {
        $(this).addClass('next');
        $('.select-editer-friends .friend-dis-edit input').prop('checked', true);
      } else {
        $(this).removeClass('next');
        $('.select-editer-friends .friend-dis-edit input').prop('checked', false);
      }
      var count = $('.select-editer-friends .friend-dis-edit input:checked').length;
      if (count > 0) {
        $('#count-select-friends').html(`${translater(translate.noty.other.selects)}: ${count + NumberEnd(count, translater(translate.noty.number_end.users))}`)
        $('#count-select-friends').addClass('active');
        $('.action-delete-friends').addClass('active');
      } else {
        $('#count-select-friends').removeClass('active');
        $('.action-delete-friends').removeClass('active');
      }
    })

    var lastChecked_checkbox_vzete = false;

    $('body').on('click', '.friend-dis-edit', function (e) {
      var that = $(this);
      var checkboxes = $('.friend-dis-edit input');
      if (e.shiftKey) {
        if (!lastChecked_checkbox_vzete) lastChecked_checkbox_vzete = that.find('input[type="checkbox"]');
        lastChecked_checkbox_vzete.checked = !that.find('input[type="checkbox"]').prop('checked');
        var start = checkboxes.index(that.find('input[type="checkbox"]'));
        var end = checkboxes.index(lastChecked_checkbox_vzete);
        checkboxes.slice(Math.min(start, end), Math.max(start, end)).prop('checked', lastChecked_checkbox_vzete.checked);
        lastChecked_checkbox_vzete = $('.friend-dis-edit input')[start];
      } else {
        $(this).find('input').prop('checked', !$(this).find('input').prop('checked'));
        lastChecked_checkbox_vzete = that.find('input');
      }
      var count = $('.select-editer-friends .friend-dis-edit input:checked').length;
      if (count > 0) {
        $('#count-select-friends').html(`${translater(translate.noty.other.selects)}: ${count + NumberEnd(count, translater(translate.noty.number_end.users))}`)
        $('#count-select-friends').addClass('active');
        $('.action-delete-friends').addClass('active');
      } else {
        $('#count-select-friends').removeClass('active');
        $('.action-delete-friends').removeClass('active');
      }
    })

    var to_del_friends = [];

    $('body').on('click', '#save-edit-friends-list', function () {
      var acc = $('#select-account').val();
      if (!acc || typeof acc != 'string' || acc == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      var friends = last_account_friends[MD5(acc)];
      var new_friends = [];
      friends.forEach(e => {
        if (to_del_friends.indexOf(e.id) < 0) new_friends.push(e);
      });
      if (new_friends.length < 1) return noty('error', translater(translate.noty.pars.little_list));
      last_account_friends[MD5(acc)] = new_friends;
      $('#count-of-friends').addClass('active');
      $('#close-btn-edit-friends').addClass('active');
      $('#count-of-friends').html(`${last_account_friends[MD5(acc)].length}${NumberEnd(last_account_friends[MD5(acc)].length, translater(translate.noty.number_end.users))}`)
      noty('success', translater(translate.noty.pars.update_u_list));
    })

    $('body').on('click', '.action-delete-friends', function () {
      var del = [];
      var acc = $('#select-account').val();
      if (!acc || typeof acc != 'string' || acc == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      var blocks = [];
      $('.select-editer-friends .friend-dis-edit').each(function () {
        if ($(this).find('input').prop('checked')) {
          blocks.push($(this));
          var id = $(this).find('input').attr('hash');
          if (to_del_friends.indexOf(id) < 0) to_del_friends.push(id);
        }
      });
      blocks.forEach(e => {
        e.css('opacity', '0');
        e.css('margin-top', `-45px`);
        setTimeout(() => {
          e.remove();
        }, 200);
      })
      $(this).removeClass('active');
    });

    $('body').on('change', '.select-editer-friends .friend-dis-edit input', function () {
      var count = $('.select-editer-friends .friend-dis-edit input:checked').length;
      if (count > 0) {
        $('#count-select-friends').html(`${translater(translate.noty.other.selects)}: ${count + NumberEnd(count, translater(translate.noty.number_end.users))}`)
        $('#count-select-friends').addClass('active');
        $('.action-delete-friends').addClass('active');
      } else {
        $('#count-select-friends').removeClass('active');
        $('.action-delete-friends').removeClass('active');
      }
    });

    $('body').on('click', '.action-rand-friends span', function () {
      var acc = $('#select-account').val();
      if (!acc || typeof acc != 'string' || acc == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      last_account_friends[MD5(acc)] = shuffle(last_account_friends[MD5(acc)]);
      $('.select-editer-friends').css('opacity', '0')
      setTimeout(() => {
        $('.select-editer-friends').html('');
        last_account_friends[MD5(acc)].forEach(e => {
          if (e.user.avatar) {
            var avatar = `https://cdn.discordapp.com/avatars/${e.id}/${e.user.avatar}.png?size=128`;
          } else {
            var avatar = './img/assets/undefind-avatar.png';
          }
          //if (e.status) z = `<span class="user-status ${e.status}"></span>`
          var html = `<label class="friend-dis-edit">
                         <div class="name">
                           <img src="${avatar}">
                           <span>${e.user.username}#${e.user.discriminator}</span>
                         </div>
                         <div class="checkbox">
                           <input type="checkbox" hash="${e.id}">
                         </div>
                       </label>`;
          $('.select-editer-friends').prepend(html);
        })
        $('.select-editer-friends').css('opacity', '')
      }, 200);
    });

    $('body').on('click', '#data-friends-list.editer', function () {
      to_del_friends = [];
      $('#count-select-friends').removeClass('active');
      var t = $(this);
      var acc = $('#select-account').val();
      if (!acc || typeof acc != 'string' || acc == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      if (!last_account_friends[MD5(acc)]) {
        t.html(translater(translate.noty.other.get_list_friends));
        t.removeClass('editer');
        return noty('error', translater(translate.noty.other.dont_find_friends_list_for_acc));
      }
      var friends = last_account_friends[MD5(acc)];
      $('.select-editer-friends').html('');
      friends.forEach(e => {
        if (e.user.avatar) {
          var avatar = `https://cdn.discordapp.com/avatars/${e.id}/${e.user.avatar}.png?size=128`;
        } else {
          var avatar = './img/assets/undefind-avatar.png';
        }
        //if (e.status) z = `<span class="user-status ${e.status}"></span>`
        var html = `<label class="friend-dis-edit">
                       <div class="name">
                         <img src="${avatar}">
                         <span>${e.user.username}#${e.user.discriminator}</span>
                       </div>
                       <div class="checkbox">
                         <input type="checkbox" hash="${e.id}">
                       </div>
                     </label>`;
        $('.select-editer-friends').prepend(html);
      })
      $('#modal-edit-dis-friends-list').modal('show');
    });

    $('body').on('click', '#data-friends-list', function () {
      var t = $(this);
      if (t.hasClass('wait') || t.hasClass('editer')) return;
      t.addClass('wait');
      var acc = $('#select-account').val();
      if (!acc || typeof acc != 'string' || acc == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      loginer_acc_api(get_account(acc).login, get_account(acc).pass, get_account(acc).rucaptcha).then(async (check) => {
        if (!check || !check.token) {
          t.removeClass('wait');
          return noty('error', translater(translate.noty.other.err_w_get_t_a, false, { err: check.err }));
        }
        var token = check.token;
        var data = await get_user_friends(token);
        if (!data.type && data.err == 401) noty_of_ban_account(acc);
        if (!data.type) return noty('error', translater(translate.noty.other.err_with_get_friends_list, false, { err: data.err }));
        data = data.data;
        var friends = [];
        data.forEach(z => {
          friends.push({
            id: z.id,
            username: z.username,
            avatar: z.avatar
          })
        })
        t.removeClass('wait');
        if (friends.length < 1) return noty('error', translater(translate.noty.other.too_smal_list_friends));
        if (friends.length > 350) {
          var new_friends = [];
          friends.forEach(e => {
            if (new_friends.length < 350) new_friends.push(e);
          })
          friends = new_friends;
        }
        t.removeClass('wait');
        t.addClass('editer');
        t.html(translater(translate.noty.other.edit));
        last_account_friends[MD5(acc)] = data;
        noty('success', translater(translate.noty.other.success_get_friends_list));
        $('#count-of-friends').addClass('active');
        $('#close-btn-edit-friends').addClass('active');
        $('#count-of-friends').html(`${last_account_friends[MD5(acc)].length}${NumberEnd(last_account_friends[MD5(acc)].length, translater(translate.noty.number_end.users))}`)
      });
      noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: acc }));
    });

    function get_user_friends(token, types = []) {
      return new Promise(fin => {
        var params = {
          url: 'https://discord.com/api/v9/users/@me/relationships',
          method: 'GET',
          headers: {
            'authorization': token,
            //'accept-language': 'ru',
            'referer': 'https://discord.com/channels/@me',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
          }
        };
        var agent = get_proxy_agent();
        if (agent) params.agent = agent;
        req(params, (err, response, body) => {
          if (err) return fin({ type: false, err: 1 });
          if (response.statusCode != 200) return fin({ type: false, err: response.statusCode });
          var data = JSON.parse(body);
          if (typeof data != 'object') return fin({ type: false, err: `1490_${body.substr(0, 100)}` });
          return fin({ type: true, data: data });
        });
      });
    }

    function get_guildid_from_invite(invite, token, limit = 50000, acc = '', check_dont_save_servdata = false, client = false) {
      return new Promise(async fin => {
        logntiwpoer(invite);
        if (typeof invite == 'object') {
          var genFin = (data) => {
            console.log('VOVA END!')
            return fin(data);
          };
          var stopped = false
          var ids = [];
          var done = 0;
          invite.forEach((invite, ind, arr) => {
            setTimeout(async () => {
              var data = await newInvite(get_invite_code(invite), token, client);
              console.log('datadatadatadata', data);
              // if (!data.type) return fin(data);
              var count = data.count;
              data = data.data;
              logntiwpoer(data);
              invite = get_invite_code(invite);
              try {
                if (JSON.stringify(data).indexOf('banned from') >= 0) {
                  noty('error', translater(translate.noty.other.ban_s_a_i));
                  // return fin({ type: false, err: 129 });
                }
                if (data.code != invite) {
                  console.log('vovasdlaskj')
                  // return fin();
                }
                if (!check_dont_save_servdata) {
                  last_pars_data.invite = get_invite(invite);
                  last_pars_data.limit = limit;
                }
                console.log('voads')
                var id = data.guild.id;
                var channel = false;
                if (data.channel) channel = data.channel;
                console.log('voads232323')
                ids.push({
                  id: id,
                  invite: get_invite(invite),
                  channel,
                  count
                });
                console.log('done', done, arr.length);
              } catch (err) { }
              if (++done >= arr.length) {
                console.log('fin_done')
                return genFin({
                  type: true,
                  id: ids
                });
              }
            }, 350 * ind);
          })
        } else {
          var data = await newInvite(invite, token);
          if (!data.type) return fin(data);
          var count = data.count
          data = data.data;
          if (JSON.stringify(data).indexOf('banned from') >= 0) {
            noty('error', translater(translate.noty.other.ban_s_a_i));
            return fin({ type: false, err: 129 });
          }
          if (!check_dont_save_servdata) {
            last_pars_data.invite = get_invite(invite);
            last_pars_data.limit = limit;
          }
          console.log('data', data)
          if (data.code != get_invite_code(invite)) return fin({ type: false, err: data.code });

          var id = data.guild.id;
          var channel = false;
          if (data.channel) channel = data.channel;
          return fin({ type: true, id, channel, count });

          var params = {
            url: `https://discord.com/api/v9/invites/${get_invite_code(invite)}?with_counts=true`,
            method: 'GET',
            headers: {
              //'accept-language': 'ru',
              'origin': 'https://discord.com',
              'referer': `https://discord.com/invite/${get_invite_code(invite)}`,
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
              'dnt': '1',
              'content-type': 'application/json',
              //'x-context-properties': 'eyJsb2NhdGlvbiI6IkFjY2VwdCBJbnZpdGUgUGFnZSIsImxvY2F0aW9uX2d1aWxkX2lkIjoiNDYwNDcyNDUwNzI4MzI5MjE3IiwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjQ2MDQ3MjQ1MDcyODMyOTIxOSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=',
              'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
            },
          }
          var agent = get_proxy_agent();
          if (agent) params.agent = agent;
          req(params, (err, response, body) => {
            if (err || !response || !body) return fin({ type: false, err: 1 });
            var count = false;
            if (response.statusCode != 200) return fin({ type: false, err: response.statusCode });
            body = JSON.parse(body);
            if (body.approximate_member_count) count = body.approximate_member_count;
            var params = {
              url: `https://discord.com/api/v9/invites/${get_invite_code(invite)}`,
              method: 'POST',
              headers: {
                'authorization': token,

                //'accept-language': 'ru',
                'origin': 'https://discord.com',
                'referer': `https://discord.com/invite/${get_invite_code(invite)}`,
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
                'dnt': '1',
                'content-type': 'application/json',
                //'x-context-properties': 'eyJsb2NhdGlvbiI6IkFjY2VwdCBJbnZpdGUgUGFnZSIsImxvY2F0aW9uX2d1aWxkX2lkIjoiNDYwNDcyNDUwNzI4MzI5MjE3IiwibG9jYXRpb25fY2hhbm5lbF9pZCI6IjQ2MDQ3MjQ1MDcyODMyOTIxOSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=',
                'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg2LjAuNDI0MC4xOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg2LjAuNDI0MC4xOTMiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6NzEwNzMsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9'
              },
            };
            var agent = get_proxy_agent();
            if (agent) params.agent = agent;
            req(params, (err, response, body) => {
              logntiwpoer(body);
              invite = get_invite_code(invite);
              if (err || !response || !body) return fin({ type: false, err: 1 });

            })
          });
        }
      });
    }

    function update_tooltips() {
      $('[tooltip]').each(function () {
        if ($(this).attr('class') != 'copy-password-account') {
          var id = uuid();
          var text = $(this).attr('tooltip');
          if ($(this).attr('class') && $(this).attr('class').indexOf('history-pars-date') >= 0) $(this).attr('data-data', text);
          $(this).removeAttr('tooltip');
          $(this).attr('tooltip-data-id', id)
          var params = {
            content: text,
            duration: [200, 100],
            hideOnClick: false,
            animateFill: false,
            animation: 'shift-away',
            maxWidth: 270,
          }
          if ($(this).attr('class') && $(this).attr('class').indexOf('copy-hist-text-block') >= 0) {
            params.theme = 'text-hist';
          } else if ($(this).attr('class') && $(this).attr('class').indexOf('span-copy-server-invite') >= 0) {
            params.theme = 'copy-invite-pars';
          } else if ($(this).attr('class') && $(this).attr('class').indexOf('copy-invite-server-pars-channels') >= 0) {
            params.theme = 'copy-invite-pars';
          }
          tippy(`[tooltip-data-id="${id}"]`, params)
        }
      });
    }

    $('body').on('change', '#check-parse-gaming', function () {
      if ($(this).prop('checked')) {
        $('#users-activity-settings-block').addClass('active');
      } else {
        $('#users-activity-settings-block').removeClass('active');
      }
    })

    $('body').on('click', '#save-users-activity-settings', () => {
      var val = $('#users-activity-settings-input').val();
      if (!val) return noty('error', translater(translate.noty.other.dont_provide_games_list));
      var data = [];
      val.split('\n').forEach(e => {
        e = e.replace('\r', '')
        e = e.replace('\n', '')
        if (e.length > 0 && data.indexOf(e) < 0) data.push(e)
      });
      if (data.length < 1) return noty('error', translater(translate.noty.other.too_small_games_list));
      localStorage.setItem('activity-games-pars-list', JSON.stringify(data))
      $('.modal').modal('hide')
      noty('success', translater(translate.noty.other.success_save_settings))
    })

    var last_roles_data = [];

    $('body').on('click', '#pars-server-roles', function () {
      if ($(this).hasClass('waiting')) return;
      var invite = $('#input-invite-to-server').val();
      if (!invite || invite == '') return noty('error', translater(translate.noty.pars.dont_provide_invite));
      var account = $('#select-account').val();
      if (!account || account == '') return noty('error', translater(translate.noty.pars.dont_provide_acc));
      var token = get_acc_token(account);
      if (!token && !get_account(account).rucaptcha) return noty('error', translater(translate.noty.other.dont_h_ar, false, { account: account }));
      var btn = $(this);
      btn.addClass('waiting');
      if (token) {
        noty('warning', translater(translate.noty.pars.start_pars));
        pars_server_roles(invite, token, account).then(check => {
          btn.removeClass('waiting');
          if (!check.type) return noty('error', translater(translate.noty.other.wrong_pars_roles, false, { err: check.err }));
          var data = check.data;
          if (!data || data.length < 1) return noty('error', translater(translate.noty.other.little_c_lis_r));
          store.set('last_pars_roles_' + get_invite_code(invite), data);
          last_roles_data = data;
          //btn.addClass('hide')
          $('#roles-count-pars').html(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.roles))}`);
          $('.form-check-priv').css('height', $('.form-check-priv').get(0).scrollHeight + 'px');
          $('.roles-data-block').addClass('active');
          $('#edit-pars-roles').attr('invite', invite);
          noty('success', translater(translate.noty.other.succ_pars, false, { count: `${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.roles))}` }));
        }).catch(r => {
          logntiwpoer(r);
        })
      } else {
        noty('warning', translater(translate.noty.other.get_acc_token, false, { acc: account }));
        loginer_acc_api(get_account(account).email, get_account(account).pass, get_account(account).rucaptcha).then((check) => {
          if (!check.type) {
            btn.removeClass('waiting');
            return noty('error', translater(translate.noty.other.err_w_get_t_a, false, { err: check.err }));
          }
          noty('warning', translater(translate.noty.other.suc_get_t));
          token = check.token;
          noty('warning', translater(translate.noty.pars.start_pars));
          pars_server_roles(invite, token, account).then(check => {
            btn.removeClass('waiting');
            if (!check.type) return noty('error', translater(translate.noty.other.wrong_pars_roles, false, { err: check.err }));
            var data = check.data;
            if (!data || data.length < 1) return noty('error', translater(translate.noty.other.little_c_lis_r));
            store.set('last_pars_roles_' + get_invite_code(invite), data);
            last_roles_data = data;
            //btn.addClass('hide')
            $('#roles-count-pars').html(`${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.roles))}`);
            $('.form-check-priv').css('height', $('.form-check-priv').get(0).scrollHeight + 'px');
            $('.roles-data-block').addClass('active');
            $('#edit-pars-roles').attr('invite', invite);
            noty('success', translater(translate.noty.other.succ_pars, false, { count: `${data.length} ${NumberEnd(data.length, translater(translate.noty.number_end.roles))}` }));
          }).catch(r => {
            logntiwpoer(r);
          })
        }).catch((r) => {
          return noty('error', translater(translate.noty.other.err_w_get_t_a, false, { err: r.message }));
        })
      }
    })

    function pars_server_roles(invite, token, acc_name) {
      return new Promise(fin => {
        invite = get_invite_code(invite);
        get_guildid_from_invite(invite, token, 50000, acc_name).then(async check => {
          if (!check.type) return fin({ type: false, err: check.err });
          var Discord = require("discord.js");
          var client = new Discord.Client();
          var id = check.id;
          await initDiscordCookie(token)
          client.login(token).then(() => {
            if (!client.guilds.get(id)) return fin({ type: false, err: 'server_not_found' });
            var roles = client.guilds.get(id).roles;
            var data = [];
            client.guilds.get(id).roles.forEach(e => {
              var d = {
                id: e.id,
                name: e.name,
                hex: e.hexColor
              };
              data.push(d)
            })
            return fin({ type: true, data: data });
          }).catch((r) => {
            logntiwpoer(r);
            if (r.message.indexOf('ncorrect login') >= 0 || r.message.indexOf('author') >= 0) {
              noty_of_ban_account(acc_name)
            } else if (r.message.indexOf('verify') >= 0) {
              noty('error', translater(translate.noty.other.need_ver_a, false, { acc: acc_name }));
            } else {
              noty('error', translater(translate.noty.other.err_c_get_acc_token, false, { err: r.message }));
            }
            return fin({ type: false, err: 'auth' });
          })
        })
      });
    }

    function encode(file) {
      var stream = fs.readFileSync(file);
      return new Buffer(stream).toString('base64');
    }

    function create_tokens_extension(token) {
      return new Promise(fin => {
        var remote = require('electron').remote;
        var app = remote.app;
        var ChromeExtension = require('crx');
        var crx = new ChromeExtension({
          privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCapX0QHcNECB7F
fpnM6F88wowQ88UlQCO+YFG2shur9k1EeQ8/3iJ3O5YN2/L3a3S9N8+BKzoc5rcG
2kyj8vvFODejF9Uwxei5MunM7RoaWx8CK3YW0/NWiy18P37101tsmbsSVRqUKo5e
Os3IQRUwMuUZlu3H+mMUf4oOqsgC2LuODaG+OxfibIe0y6O+Loe4Bm10CPYLtZVN
kdUYLWMebo8TO9crCS8bM1qB3WjSjdSPG62GtyomcqzCiEBhhb+xmGVJ+eAe7UKP
G2HR5pmXiM7GfGTiTH27nFlhD89U76oRNZuog29Y5OADlIAs+IORz+qsAjZh3y4B
qYa+YE3/AgMBAAECggEADlXGyQapQhYqnA4HPbpQkbZK+4tNPA29Anm1OWU7MW6M
bQt3wWja8wh/+VrpI8w/LwcMYiHaqjEsyCLWNeBhPD/g0Gp2JaZC02AH0iosYEMQ
Fchnkugkx2HxXnIYV7s231NExwdChneHaO60gpqd1zDwkbWu5vmr04ubBY8JKVI+
4Hi0f3QGZl8YBBT2RmdvFQwUrxFGdlzBkrfDTEtFBtQ+2x3y258WTUVRsQsuk8Bd
3x560L1sm90QHmPL6fcbTPFcammgfCR67bpQMlCyDicxHz5YCIvK+DTcRHRaPjNq
2Ob/JY81u2YE8Zrq52RuoIJmRi/YN2dI0CeQ4G0FIQKBgQDUlkFJ+onjp5odCpZF
7eY4b1J9N/IvEhGxXjSHfD0oIRgRz8VeRAZ69SCglb6yQkLPPjK0hrKtjMkpneqI
vaq3ZLwRNoO8DNaJ8ivigFNE5vzTvWdg4/h05U+W9HUZJY2lq9TX0SOuJGv4aplW
eHm8nITXOnh68523l6HcGJRqzwKBgQC6Oi+q++1NPoJrNI4DiNNPDZLessG3cNhF
4+4t9awpM9Az4fWRPDhES1c/UnDm5qPeGv+P+mcfHyzc91yDm3gI2JGZZ92u2N09
Qr70kUutZonndtZB8Zv83pEBlCXJQEuYwdbsW0HH6/XANmvzNICL1p1CBootvu67
luSa2HP10QKBgGuXtGmNvNYUkIJcRlwUIK21YelwNEmwenXreOiNb6JsxXLWVkz0
XtdCUwYTY9Vyhb+/+ge2GJ6Pn4xJmVclr05sVGbd0WSOltJwV9emHP7FbXZ46OZ3
2trG6DY9eTqF8B/GTM4B0m4jjuXGhd7m0K4uBWms9Sc9PziZLNlpM0yvAoGAZnyN
LTk18HO9TIiAu1s6h1/9+wc/atf0fgohUzPHymkUZOkuvv34LUWVP2j8b2ZwulP7
X148EDmU9ApB5L/TwHKHNnid3JLGtucbtfacQlKTBEo3QdVYtkI6ZTcF0IrMz8Wl
pS/XtNGbzmtk31R+hfbXVrXIp8JTGfPB3aHPt3ECgYA85VXuNYNKBv3mIwIQ2sB/
HeeMqrS/YvtfpgyA+9UEr6RBaKmK4yWcasaQ8KhDTkLFRckAbtIgrqGozNPFtcNK
axs9r+dc1tyqRowSg0pmisU0OkpxnBbku5mduTpLVoEbR6co5rVrraKtXEa+TpKK
+u3lxThgwBs4zJ7uOGu5WQ==
-----END PRIVATE KEY-----`
        });
        var t = '' + rand(1, 9999999999) + rand(1, 9999999999) + rand(1, 9999999999) + rand(1, 9999999999) + rand(1, 9999999999)
        var pathf = `${app.getPath('userData')}/${t}`;
        logntiwpoer(pathf);
        fs.mkdirSync(pathf);
        var manifest = `{"name":"discord_token_changer","description":"change tokens","version":"1.0","manifest_version":2,"content_scripts":[{"matches": ["<all_urls>"],"js" : ["script.js"],"run_at":"document_start"}]}`;
        var script = `if (document.location.href.indexOf('discord.com') >= 0 && window.localStorage.getItem('token') != '"${token}"') window.localStorage.setItem('token', '"${token}"');`;
        fs.writeFile(`${pathf}/manifest.json`, manifest, function (err) {
          if (err) return fin({ type: false, err: err });
          fs.writeFile(`${pathf}/script.js`, script, function (err) {
            if (err) return fin({ type: false, err: err });
            crx.load(pathf)
              .then(crx => crx.pack())
              .then(crxBuffer => {
                return fin({ type: true, extension: new Buffer(crxBuffer).toString('base64') });
              });
          })
        })
      });
    }

    Array.prototype.reversedCopy = function () {
      var arr = [];
      for (var i = this.length; i--;) {
        arr.push(this[i]);
      };
      return arr;
    };

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function ensureDirectoryExistence(filePath) {
      var dirname = path.dirname(filePath);
      if (fs.existsSync(dirname)) {
        return true;
      }
      ensureDirectoryExistence(dirname);
      fs.mkdir(dirname, function () {

      });
    }


  }
});

var MD5 = function (d) { result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
$(() => {
  $("body").trigger("ready", {
    type: true,
    data: undefined
  });
});