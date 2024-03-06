class Cidade{
    constructor(nome,estado,numPopulacao,numHomens,numMulheres){
        this.nome = nome
        this.estado = estado
        this.numPopulacao = numPopulacao
        this.numHomens = numHomens
        this.numMulheres = numMulheres
    }

    percentualHomens(){
        let percentual = 0
        percentual = (this.numHomens / this.numPopulacao) * 100
        return percentual
    }


    percentualMulheres(){
        let percentual = 0
        percentual = (this)
    }
}


module.exports = Cidade