var alunos = [];
function listar_alunos(){
    let listar = document.getElementById ('listar')
    listar.innerHTML = "";
    alunos.forEach(aluno => {
        listar.innerHTML += '<li>' + aluno + '</li>';
    })
}
listar_alunos();

var btn = document.getElementById('cadastrar')
btn.addEventListener('click',e=>{
    let nome = document.getElementById('nome')
    alunos.push(nome.value)
    nome.value = ""
    console.log(alunos)

    listar_alunos();
})