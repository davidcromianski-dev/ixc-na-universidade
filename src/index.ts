// 🚀 Exemplos de Injeção de Dependências em JavaScript/TypeScript
// Demonstração da evolução do código: de acoplado a desacoplado

async function main() {
    await badCode();
    // await betterCode();
    // await diCode();
    // await antDiCode();
}

async function badCode() {
    console.log('\n====== Iniciando o código ruim...======');
    await import('./0_bad-code/index.js');
    console.log('====== Fim do código ruim...======\n');
}

async function betterCode() {
    console.log('\n====== Iniciando o código bom...======');
    await import('./1_better-code/index.js');
    console.log('====== Fim do código bom...======\n');
}

async function diCode() {
    console.log('\n====== Iniciando o código com inversify...======');
    await import('./2_di-code/index.js');
    console.log('====== Fim do código com inversify...======\n');
}

async function antDiCode() {
    console.log('\n====== Iniciando o código com Ant DI...======');
    await import('./3_ant-di-code/index.js');
    console.log('====== Fim do código com Ant DI...======\n');
}

main();
