import { createHead, headerHtml, footerHtml } from './templates.js';
export const main = () => {
    document.querySelector('head').innerHTML = createHead();
    const main = document.querySelector('body').innerHTML;

    document.querySelector('body').innerHTML = headerHtml + main + footerHtml;

    let heading = document.querySelector('h1');
    const parrafos = document.querySelectorAll('p');
    const aParrafos = [...parrafos];
    const buttons = document.querySelectorAll('div>button');
    const form1 = document.querySelector('#form1');
    console.log(parrafos);
    console.log(aParrafos);
    console.log(buttons);
    console.dir(heading);
    console.log(heading.textContent);
    buttons.forEach((item) =>
        item.addEventListener('click', (ev) => {
            handlerButtonClick(ev, heading);
        })
    );

    form1.addEventListener('submit', handlerSubmit);
    const inputs = form1.querySelectorAll('input');
    inputs[0].addEventListener('input', handlerInput);
};

const handlerButtonClick = (ev, heading) => {
    if (ev.target.textContent === 'Change') {
        heading = document.querySelector('h1');
        heading.textContent = '<em>Nuevo</em> título';
        heading.innerHTML = '<em>Nuevo</em> título';
        heading.outerHTML = '<h2><em>Nuevo</em> título</h2>';
        heading = document.querySelector('h2');
        heading.setAttribute('title', 'Hola, soy yo');
        heading.classList.add('destacado');
        heading.style = `font-size:3rem`;
    } else {
        heading = document.querySelector('h2');
        heading.outerHTML = '<h1>JS en la Web</h1>';
        heading = document.querySelector('h1');
        heading.removeAttribute('title');
        heading.classList.remove('destacado');
        heading.removeAttribute('style');
    }
};

const handlerSubmit = (ev) => {
    ev.preventDefault();

    const inputs = ev.target.querySelectorAll('input, select');
    let data = {};
    inputs.forEach((item) => {
        console.dir(item);
        if (item.type === 'checkbox') {
            data[item.name] = item.checked;
        } else if (item.type === 'radio') {
            if (item.checked) {
                data[item.name] = item.value;
            }
        } else {
            data[item.name] = item.value;
        }
    });
    ev.target.reset();
    console.log('Listo para enviar', data);
};

const handlerInput = (ev) => {
    document.querySelector('output').value = `Hola ${ev.target.value}`;
};
