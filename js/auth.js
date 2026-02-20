/**
 * Auth pages — form handling (frontend only, no backend).
 */

(function () {
    'use strict';

    function init() {
        var loginForm = document.getElementById('login-form');
        var registerForm = document.getElementById('register-form');

        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Login is frontend-only. No backend connected.');
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Registration is frontend-only. No backend connected.');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
