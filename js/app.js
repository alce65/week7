/* 
- ES Core
- Web API 
    - BOM
    - DOM (Estándar W3C)
*/

import { main } from './main.js';

// IIFE

(() => {
    document.addEventListener('DOMContentLoaded', main);

    const makeAsynk = (time) => {
        console.log(`Pasaron ${time} segundos`);
    };
    setTimeout(() => makeAsynk(1), 1000);
})();
