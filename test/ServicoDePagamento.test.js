const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {

    it('deve criar pagamento categoria cara', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('0987-7656-3475', 'Samar', 156.87);

        const pagamento = servico.consultarUltimoPagamento();

        assert.strictEqual(pagamento.categoria, 'cara');
    });

    it('deve criar pagamento categoria padrao', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('1234-5678', 'Embasa', 50);

        const pagamento = servico.consultarUltimoPagamento();

        assert.strictEqual(pagamento.categoria, 'padrao');
    });

    it('deve retornar o ultimo pagamento realizado', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('1111', 'Empresa A', 20);
        servico.pagar('2222', 'Empresa B', 200);

        const pagamento = servico.consultarUltimoPagamento();

        assert.strictEqual(pagamento.codigoBarras, '2222');
    });

});