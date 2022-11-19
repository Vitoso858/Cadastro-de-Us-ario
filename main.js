//variáveis para guardar as referencias aos elementos
let inputs = document.querySelectorAll("input[type='text']"),
  age = document.querySelector('input[type="number"]'),
  inputs2 = document.querySelectorAll(".input"),
  btn = document.querySelector("button"),
  tableBody = document.querySelector("tbody"),
  pessoas = [];

btn.addEventListener("click", datasTable);

//Função que verifica se os campos preenchidos
function datasTable() {
  for (let i = 0; i < inputs2.length; i++) {
    if (inputs2[i].value === "") {
      inputs2[i].focus();
      break;
    } else if (i === inputs2.length - 1) {
      datas();
      break;
    }
  }
}

//Função que vai inserir os dados digitados na tabela
function datas() {
  let genderEle = document.querySelector('input[name="q1"]:checked'),
    gender = document.querySelector('input[name="q1"]:checked').value,
    dGender,
    del,
    tr = document.createElement("tr"),
    d;

  for (let i = 0; i < inputs2.length; i++) {
    //Instrução que verifica os inputs radio
    if (i === 2) {
      dGender = document.createElement("td");
      dGender.textContent = gender;
      tr.appendChild(dGender);
    }

    //Adiciona valor a célula
    d = document.createElement("td");
    d.textContent = inputs2[i].value;
    tr.appendChild(d);

    //Botão para remover uma linha
    del = document.createElement("button");
    del.textContent = "Remover";
    del.addEventListener("click", (e) => {
      tr.remove(e.target);
    });
  }

  //Adiciona linha a tabela
  tr.appendChild(edt);

  tableBody.appendChild(tr);

  //Reseta tudo
  for (let i = 0; i < inputs2.length; i++) {
    inputs2[i].value = "";
  }

  inputs[0].focus();
  genderEle.checked = false;
}
