const submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    
    alert(login.value)
    alert(senha.value)
})


db.collection('usuarios').get().then((doc)=>{
    doc.forEach((doc)=>{
        
    })
})