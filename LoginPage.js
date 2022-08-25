//Criar extensão do navegador
const { chromium } = require ('playwright');

( async() => {
    //Como padrão do Playwright, ele ira rodar o script na ordem que foi desenvolvida  
    //Criando um navegador para test
     const browser = await chromium.launch({handless:false, slowMo: 100});
    //Nescessario que aplique a função de diminuir velocidade de execução "slowMo:milissegundos"
    //Criando uma pagina do navegador
    const page = await browser.newPage();
    //url de navegação para pagina
    await page.goto('https://github.com/ViniciusMafraL');
    //Fechar navegador apos finalizar test
    await browser.close();
})();
