/*const submit = document.getElementById('submit');
const inline = document.getElementById('inline')

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    
    db.collection('usuarios').add({
        login: login.value,
        senha: senha.value
    }).then(()=>{
        alert('usuário cadastrado com sucesso')
        login.value = ''
        senha.value = ''
    })
    db.collection('usuarios').get().then((doc)=>{
        doc.forEach((doc)=>{
                renderDoc(doc)
        })
    })
})

function renderDoc(doc){
    var login = doc.data().login;
    var senha = doc.data().senha;

    var loginHTML = document.createElement('p')
    loginHTML.style.paddingLeft = "12%";
    loginHTML.style.paddingRight = "12%";
    loginHTML.style.display="inline"
    loginHTML.innerText = login;
    var senhaHTML = document.createElement('p')
    senhaHTML.style.paddingLeft = "12%";
    senhaHTML.style.paddingRight = "12%";
    senhaHTML.style.display="inline"
    senhaHTML.innerText = senha;
    inline.after(document.createElement('div'))
    inline.after(senhaHTML)
    inline.after(loginHTML)
}
*/

const enviar = document.getElementById('submit')

enviar.addEventListener('click', (e) => {
    var loginEfetuado = false;
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')

    db.collection('usuarios').where('login', '==', login.value)
        .where('senha', '==', senha.value)
        .get().then(async(data) => {
            await data.forEach(d => {
                alert('login efetuado')
            })
        })
    login.value = ''
    senha.value = ''
    e.preventDefault();

})

