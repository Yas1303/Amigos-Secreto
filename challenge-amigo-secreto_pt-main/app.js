let listaDeAmigos = [];

//adicionar amigos e condições
function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value.toLowerCase().trim();
    if (nomeDoAmigo === '') {

    alert ('Campo nome não pode estar vazio.');
    }
    if(listaDeAmigos.includes(nomeDoAmigo)){
        alert("Participante já está na lista!");
    
    } else {
    listaDeAmigos.push(nomeDoAmigo);
    console.log(listaDeAmigos);
    limparCampo();
    atualizaEExibeListaDeParticipantes();
}
}

    
    function limparCampo() {
    let nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
        
 }
    function atualizaEExibeListaDeParticipantes() {
            let listaAmigos = document.getElementById('listaAmigos');
            listaAmigos.innerHTML = ''; 

            listaDeAmigos.forEach(amigo => {
                let li = document.createElement('li');
                li.textContent = amigo;
                listaAmigos.appendChild(li);
            });
        }

        function sortearAmigo() {
    // se não tem amigos na lista
         if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia!');
        return;
    }

    // sorteando
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

    
    let amigoSorteado = listaDeAmigos[indiceSorteado];

   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}!`;
}