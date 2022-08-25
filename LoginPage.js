const { chromium } = require ('playwright')

(async() => {
    //Criando um navegador para test
     const browser = await chromium.launch();
    //Criando uma pagina do navegador
    const page = await browser.newPage()
    //url de navegação para pagina
    await page.goto('http://google.com')
    //Fechar navegador apos finalizar test
    await browser.close();
})
