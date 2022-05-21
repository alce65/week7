export const createHead = (title = 'JS en la Web') => {
    const template = `
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>

        <link rel="stylesheet" href="./css/style.css" />
        <script>
            console.log('Desde HTML');
        </script>
        
    `;
    return template;
};

export const headerHtml = `
    <header>   
        <h1>JS en la Web</h1>
            <nav>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                </ul>
            </nav>
    </header>        
`;

export const footerHtml = `
    <footer>
        <address>ISDI Coders</address>      
    </footer>
`;
