import { createHead, headerHtml, footerHtml } from './templates.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('head').innerHTML = createHead('Nosotros');
        const main = document.querySelector('body').innerHTML;

        document.querySelector('body').innerHTML =
            headerHtml + main + footerHtml;
    });
})();
