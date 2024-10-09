const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentualFaturamento(faturamento) {
    let faturamentoTotal = 0;
    for (let estado in faturamento) {
        faturamentoTotal += faturamento[estado];
    }

    for (let estado in faturamento) {
        let percentual = (faturamento[estado] / faturamentoTotal) * 100;
        console.log(`Estado: ${estado} - Percentual: ${percentual.toFixed(2)}%`);
    }
}

calcularPercentualFaturamento(faturamentoPorEstado);
