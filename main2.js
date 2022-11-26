//Variáveis que vão guardar as referencias
let peoples = [], // Armazena os objetos que guardam as pessoas
  trTable = [], // Armazena os elementos tr
  tBody = document.querySelector("tbody"),
  p = document.querySelector("p"),
  btn = document.querySelector("#Submit-Btn"),
  edt,
  editDatas,
  id,
  inp,
  idPerson = 0,
  nome,
  gender,
  age,
  profession;

//classe que vai armazenar as instâncias de dados
class person {
  constructor(name, age, gender, profession) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.profession = profession;
  }
}

//Botão que aciona as funções de armazenamento e edição
btn.addEventListener("click", () => {
  p.textContent = "";
  (nome = document.querySelector("#name")),
    (age = document.querySelector("#age")),
    (gender = document.querySelector('input[name="q1"]:checked')),
    (profession = document.querySelector("#profession"));

  if (
    nome.value === "" ||
    age.value === "" ||
    profession.value === "" ||
    gender.checked === false
  ) {
    p.textContent = "Preencha todos os campos!";
  } else {
    storePeople();
  }
});

//Função para armazenar as pessoas cadastradas
function storePeople() {
  let newPerson = new person(
    nome.value,
    age.value,
    gender.value,
    profession.value
  );

  peoples.push(newPerson);

  let datasTable = [
    (tdName = newPerson.name),
    (tdAge = newPerson.age),
    (tdGender = newPerson.gender),
    (tdProfession = newPerson.profession),
  ]; //Array que armazena os dados de uma pessoa para inseri-lo na tabela

  let tr = []; // Array que armazena os elementos td

  let trHtml = document.createElement("tr");
  for (let i = 0; i < datasTable.length; i++) {
    let td = document.createElement("td");
    td.textContent = datasTable[i];
    trHtml.appendChild(td);
    tr.push(td);
  }
  trTable.push(tr);

  edt = document.createElement("button");
  edt.textContent = "Editar";
  edt.setAttribute("id", idPerson);
  edt.addEventListener("click", (e) => {
    id = e.target.getAttribute("id");
    for (let i = 0; i < trTable.length; i++) {
      if (i === Number(id)) {
        editDatas = trTable[i];
        editUser(editDatas);
      }
      break;
    }
  });
  trHtml.appendChild(edt);

  tBody.appendChild(trHtml);

  nome.value = "";
  nome.focus();
  age.value = "";
  gender.checked = false;
  profession.value = "";

  idPerson++;
  return peoples;
}

/**
 * trTable -> guarda os tds
 * peoples -> pessoas
 */

function editUser(editDatas) {
  let inps = [],
    datas = [
      peoples[id].name,
      peoples[id].age,
      peoples[id].gender,
      peoples[id].profession,
    ];
  for (let i = 0; i < editDatas.length; i++) {
    inp = document.createElement("input");
    inp.setAttribute("class", "update"); //
    inp.value = datas[i];
    editDatas[i].textContent = "";
    editDatas[i].appendChild(inp);
    inps.push(inp);
  }

  edt.textContent = "Salvar";

  edt.removeEventListener("click", (e) => {
    id = e.target.getAttribute("id");
    for (let i = 0; i < trTable.length; i++) {
      if (i === Number(id)) {
        editDatas = trTable[i];
        editUser(editDatas);
      }
      break;
    }
  });

  edt.addEventListener("click", () => {
    updateUser(inps);
  });
}

function updateUser(inps) {
  peoples[id].name = inps[0].value;
  peoples[id].age = inps[1].value;
  peoples[id].gender = inps[2].value;
  peoples[id].profession = inps[3].value;

  let updateDatas = [
    peoples[id].name,
    peoples[id].age,
    peoples[id].gender,
    peoples[id].profession,
  ];

  for (let i = 0; i < editDatas.length; i++) {
    editDatas[i].textContent = updateDatas[i];
    inps[i].remove();
  }

  inps = [];

  edt.removeEventListener("click", () => {
    updateUser(inps);
  });

  edt.textContent = "Editar";
  edt.addEventListener("click", (e) => {
    id = e.target.getAttribute("id");
    for (let i = 0; i < trTable.length; i++) {
      if (i === Number(id)) {
        editDatas = trTable[i];
        editUser(editDatas);
      }
      break;
    }
  });
}
