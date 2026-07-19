/* Gemeinsame Skripte fuer alle Seiten: Cookie-Dialog und Newsletter-Formular. */

(function () {
  var CONSENT_KEY = 'uhh-ausweis-cookie-consent';
  var overlay = document.getElementById('cookie-overlay');

  if (overlay) {
    if (localStorage.getItem(CONSENT_KEY)) {
      overlay.classList.add('hidden');
    }

    var store = function (value) {
      return function () {
        localStorage.setItem(CONSENT_KEY, value);
        overlay.classList.add('hidden');
      };
    };

    var all = document.getElementById('btn-accept-all');
    var necessary = document.getElementById('btn-necessary');
    if (all) all.addEventListener('click', store('all'));
    if (necessary) necessary.addEventListener('click', store('necessary'));

    var opener = document.getElementById('open-cookie-settings');
    if (opener) {
      opener.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('hidden');
      });
    }
  }

  /* Newsletter: rein lokal, es werden keine Daten irgendwohin gesendet. */
  var form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      if (status) status.classList.add('visible');
      form.reset();
    });
  }
})();
