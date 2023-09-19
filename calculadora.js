function exibirIMC() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
  
    const imc = peso / (altura / 100) ** 2;  
    const classificacaoIMC = calcularClassificacaoIMC(imc);  
    document.getElementById('resultado_imc').innerHTML = `
      <h1>Seu IMC é: ${imc.toFixed(2)}</h1>
      <h2>Classificação: ${classificacaoIMC}</h2>
    `;
  }
  
  function calcularClassificacaoIMC(imc) {
    if (imc < 18.5) {
      return 'Você está abaixo da faixa de IMC esperada';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Você está na faixa de IMC esperada';
    } else if (imc >= 25 && imc < 29.9) {
      return 'você esta na faixa de IMC classificada como sobrepeso';
    } else if (imc >= 30 && imc < 39.9) {
      return 'você esta na faixa de IMC classificada como obsidade';      
    } else if (imc >= 40) {
      return 'você esta na faixa de IMC classificada como obsidade morbida';
    }
  }