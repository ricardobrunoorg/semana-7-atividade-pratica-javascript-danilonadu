let nome = prompt("Digite seu nome:");
let renda = Number(prompt("Digite sua renda mensal:"));
let quantidade = Number(prompt("Quantas despesas você quer informar (1 a 5)?"));
if (quantidade < 1) {
    quantidade = 1;
} else if (quantidade > 5) {
    quantidade = 5;
}
while (isNaN(renda)) {
    renda = Number(prompt("Digite um número válido para a renda:"));
}
let totalDespesas = 0;
for (let i = 1; i <= quantidade; i++) {
    let despesa = Number(prompt("Digite o valor da despesa " + i + ":"));
    while (isNaN(despesa)) {
        despesa = Number(prompt("Valor inválido. Digite novamente:"));
    }
    totalDespesas += despesa;
}
let mensagem = "";
let sobra = renda - totalDespesas;
if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
${mensagem}
`;
alert(resultado);
console.log(resultado);