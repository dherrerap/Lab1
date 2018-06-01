'use strict';
let btnRegFarmaceutica = document.querySelector('#btnRegFarmaceutica');
let btnRegMedicamento = document.querySelector('#btnRegMedicamento');

btnRegFarmaceutica.addEventListener('click', obtenerDatosFarma);
btnRegMedicamento.addEventListener('click', obtenerDatosMedicamento);


function obtenerDatosFarma(){
    let inputNombre = document.querySelector('#txtNombreFarmaceutica');
    let sNombre = inputNombre.value;

    let inputCodigo = document.querySelector('#txtCodigoFarmaceutica');
    let sCodigo = inputCodigo.value;

    let inputPais = document.querySelector('#txtPais');
    let sPais = inputPais.value;

    console.log(sCodigo);
    console.log(sNombre);
    console.log(sPais);
};

function obtenerDatosMedicamento(){
    let inputNombreM = document.querySelector('#txtNombreMedicamento');
    let sNombreM = inputNombreM.value;

    let inputCodigoM = document.querySelector('#txtCodigoMedicamento');
    let sCodigoM = inputCodigoM.value;

    let inputCostoM = document.querySelector('#txtCosto');
    let sCostoM = inputCostoM.value;

    console.log(sNombreM);
    console.log(sCodigoM);
    console.log(sCostoM);
};