let form = document.getElementById("form-contato");
let boton1=document.querySelector('#buton1');
let registros=[];



form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(form);

  let dados = {
    nome: formData.get("nome").trim(),
    email: formData.get("email").trim(),
    
  };

  registros.push(dados);

     nome.value='';
     email.value='';
     assunto.value='';
     mensagem.value='';
      
    for(let dados of registros){
    console.log('Nome: '+dados.nome+ ' Assunto: '+dados.assunto);
    }    

  let erros = [];

  if (!validaObrigatorio(dados.nome)) {
    erros.push("O nome é obrigatório");
  } else if (!validaPeloMenos2Caracteres(dados.nome)) {
    erros.push("O nome precisa ter pelo menos dois caracteres");
  } 
  if (!validaFormatoEmail(dados.email)) {
    erros.push("O email precisa ter um formato válido");
  }
  
  exibirErrosForm(erros)
  if (!erros.length) {
      setTimeout(() => alert('Dados enviados com sucesso!'), 0)
  }

  console.log(dados);
  console.log(erros)
});

function validaObrigatorio(valor) {
  return !!valor;
}

function validaPeloMenos2Caracteres(valor) {
  return valor.length >= 2;
}

function validaFormatoEmail(valor) {
  return /^\S+@\S+$/.test(valor);
}

function exibirErrosForm(erros) {
    let areaErrosForm = document.getElementById("erros-form")
    areaErrosForm.innerHTML = ""
    
    let listaErros = document.createElement('ul')
    listaErros.style.color = 'red'

    for (let erro of erros) {
        let item = document.createElement('li')
        item.textContent = erro
        listaErros.appendChild(item)
    }

    areaErrosForm.appendChild(listaErros)
}