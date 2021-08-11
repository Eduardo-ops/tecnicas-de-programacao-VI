console.log('Exemplo de callback')

setTimeout(
    function () {
        console.log('Executando tarega!!!')
    },
    1000
)

setTimeout(() => console.log('Executando tarega 2.0!!!'), 2000)

const myMethod = () => console.log('Executando tarefa 3.0!!!')

myMethod()

setTimeout(myMethod, 2000)

console.log('print depois do setTimeout')

console.log('Exemplo de Promisse')

const myResolovedPromise = () => new Promise((resolved, rejected) => {
    resolved('Deu certo resolver a promise')
})

myResolovedPromisse()
    .then(data => console.log(data))

const myRejectPromise = () => new Promise((resolved, rejected) => {
    rejected('Deu certo rejeitar a promise')
})

myRejectedPromisse()
    .then(data => console.log(data))
    .catch(error => console.log(error))

const now = (new Date()).getMinutes()
console.log(now)

const myPromise = () => new Promise((resolved, rejected) => {
    if (now % 2 == 0) {
        resolved('Estou em um número PAR')
    } else {
        rejected('Estou em um número ÍMPAR')
    }
})

myPromise()
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log('Exemplo de Async-Await')

const myFuturePromise = () => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => resolved('resolvi o trem'), 4000)
    })
}

const mySecondMethod = async () => {
    console.log('Estou entrando no segundo metodo')

    const data = await myFuturePromise()
    console.log(data)

    console.log('Estou saindo do segundo metodo')
}

mySecondMethod()