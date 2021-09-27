function simular(){
  
  let valor = parseInt(document.querySelector('#inputValor').value);
  let prazo = parseInt(document.querySelector('#inputPrazo').value);
  let jurosaa = document.querySelector('#inputJuros').valueAsNumber;
  let prest = prazo * 12;
  //let jurosam = (1 + jurosaa) ** (1/12) - 1;
  let jurosam = Math.pow(1 + jurosaa, 1 / 12) - 1;
  let amortizacao = valor / prest;
  
  document.querySelector("#prazoMeses").valueAsNumber = prest
  document.querySelector("#jurosAoMes").valueAsNumber = jurosam.toFixed(6)

  let tbody = document.querySelector("tbody");
  let jurosAcumulados = 0;
  
  for (let i = 0; i < prest; i++) {
    let saldoDev = valor - i * amortizacao;
    let jurosPrest = saldoDev * jurosam;
    jurosAcumulados += jurosPrest;
    
    if (i < 5){
      let valTotal = amortizacao + jurosPrest;
      let tr = tbody.children[i];
      tr.children[1].textContent = amortizacao.toFixed(2);
      tr.children[2].textContent = jurosPrest.toFixed(2);
      tr.children[3].textContent = valTotal.toFixed(2);
    }
  }
    document.querySelector("#jurosAcumulados").valueAsNumber = jurosAcumulados.toFixed(2)
}


simular()