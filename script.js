const taxaConversao = {
  "R$": { "U$": 0.19, "€": 0.18, "£": 0.15, "₱": 173.04 },
  "U$": { "R$": 5.14, "€": 0.92, "£": 0.79, "₱": 890.26 },
  "€": { "R$": 5.58, "U$": 1.08, "£": 0.85, "₱": 964.87 },
  "£": { "R$": 6.54, "U$": 1.27, "€": 1.17, "₱": 1132.19 },
  "₱": { "R$": 0.0058, "U$": 0.0011, "€": 0.0010, "£": 0.00088 }
};

function converter() {
  const valor = document.getElementById('valor').value;
  const deMoeda = document.getElementById('deMoeda').value;
  const paraMoeda = document.getElementById('paraMoeda').value;
  const resultado = document.getElementById('resultado');

  if (valor === '') {
      resultado.textContent = 'Por favor, insira um valor válido.';
      return;
  }

  if (deMoeda === paraMoeda) {
      resultado.textContent = `${deMoeda} ${valor} = ${paraMoeda} ${valor}`;
      return;
  }

  const taxa = taxaConversao[deMoeda][paraMoeda];
  const valorConversao = (valor * taxa).toFixed(2);

  resultado.textContent = `${deMoeda} ${valor} = ${paraMoeda} ${valorConversao}`;
}