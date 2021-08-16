console.log('Exemplo de callback')

/* 
Um callback é umM Listener, quando uma função acabar será disparada quando e se um evento acontecer.
Foi inventado para rodar no front-end dos sites desde o princício.
Com a criação de um código para ser disparado no clique de um botão, ou seja, no futuro.
Nâo sendo na sequência linear do programa, e sim, para ser assíncrono, fora da sincronia normal de um código 
*/

/* Um callback, é uma função para ser chamada de volta quando outra função terminar. */
setTimeout(
    function () {
        console.log('Executando tarega!!!')
        // Código
    },
    1000
)

setTimeout(() => console.log('Executando tarega 2.0!!!'), 2000)

const myMethod = () => console.log('Executando tarefa 3.0!!!')

myMethod()

setTimeout(myMethod, 2000)

console.log('print depois do setTimeout')

console.log('Exemplo de Promisse')

/* 
Promises ainda é a base e deve ser entendida, é um objeto usado para processamento assíncrono
uma vez que a promise é chamada, ela inicia-se um peding state(pendente), com isso, 
a função caller(que chamou a promise) continue sendo executada enquanto espera pela promise terminar
seu próprio processamento e retonar ao caller algum feedback. Quando esse retorno acontece, a promise 
é retornada em resolved state ou rejected state.
*/

/* Modelo do estudo realizado por conta própria */
function soAceitaPares() {
    const promise = new Promise((resolve, reject) => {
        /* Chamando resolve quando a execução for bem sucedida. */
        if (numero % 2 == 0) {
            const resultado = 'O número é par!'
            resolve(resultado);
        }
        /* Chamando reject quando a execução for malsucedido sucedida. */
        else {
            reject(new Error('Você passou um número ímpar!'))
        }
    })
}

/* Chamando a promise e pegando e capturando seu retorno posiitvo ou negativo. */
soAceitaPares(2)
    .then(result => console.log('Promise resolved:' + result))
    .catch(Error => console.log('Promise rejected:' + error));

/*
 O teste é imprimido primeiro, por que parece síncrono, mas a função é chamada e o código continua executando,
imprimi o teste primeiro e só quando a função temrinar é que vai executar o then ou o catch. 
*/
console.log('teste')

/* Modelo do professor */
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

/* 
Função declarada como async, significa que o valor de retorno da função será uma promise, se a promise
se resolver normalmente, o objeto - promise retornaráo valor.Caso lance uma exceção, podemos usar o try/catch
como estamos acostumados em programas síncronos. 
*/
async function getUser(userId) {
    let resonse = await fetch('https://api.com/user/$userId')
    let userData = await Response.json()
    return userData.name
}

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