const inquirer = require('inquirer');

function funcao (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (isNaN(Number(param1 + param2 + param3))) {
      return reject('Digite apenas números.');
    }
    const param1Mais2Vezes3 = (param1 + param2) * param3;
    if (param1Mais2Vezes3 < 50) {
      return reject('Valor muito baixo.')
    }
    resolve(param1Mais2Vezes3);
  });
}

async function getData () {
  const params = await inquirer.prompt([
    { name: 'p1', type: 'input', message: 'Digite um número ' },
    { name: 'p2', type: 'input', message: 'Digite um segund número ' },
    { name: 'p3', type: 'input', message: 'Digite um terceiro número ' }
  ]);

  const p1 = parseInt(params.p1);
  const p2 = parseInt(params.p2);
  const p3 = parseInt(params.p3);

  funcao (p1, p2, p3).then((resposta) => console.log(resposta));
}

module.exports = getData;
