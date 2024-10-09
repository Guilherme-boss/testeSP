function pertenceAFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence a sequência de Fibonacci.`;
    }
    
    
    while (b <= numero) {
        let proximoNumero = a + b;
        
        if (proximoNumero === numero) {
            return `O número ${numero} pertence a sequência de Fibonacci.`;
        }
        a = b;
        b = proximoNumero;
    }
    return `O número ${numero} nao pertence sequência de Fibonacci.`;
}

const numero = 21;
console.log(pertenceAFibonacci(numero));
