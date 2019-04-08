console.log(typeof console)
console.log(Math.floor(6.1))
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //evitar
console.log(obj1.nome)



function Obj(tmpNome) {
    this.nome = tmpNome
    this.exec = function () {
        console.log('Exec...')
    }
}
const obj2 = new Obj('Vic 2')
const obj3 = new Obj('Vic 3')

console.log(obj2.nome)
console.log(obj3.nome)

console.log(obj1)
console.log(obj2)
console.log(obj3)
obj3.exec()