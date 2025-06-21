import { useState } from 'react';
import Quadro from './Quadro';
import './App.css';

function decidirVencedor(formas){
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i <linhas.length; i++){
    const [posi1, posi2, posi3] = linhas[i];
    if (formas[posi1] && formas[posi1] === formas[posi2] && formas[posi1] === formas[posi3]){
      return formas[posi1];
    }
  }
  return null;
}

function App() {
  const [formas, setFormas] = useState(Array(9).fill(null));
  const [proximaForma, setProximaForma] = useState(true);

  const vencedor = decidirVencedor(formas);

  function quadradoClicado(i){
    const formasCopia = formas.slice();

    if (vencedor || formasCopia[i]){
      return;
    }

    formasCopia[i] = proximaForma ? 'X' : 'O';

    setFormas(formasCopia);
    setProximaForma(!proximaForma);
  }

  let status;
  if (vencedor){
    status = 'Vencedor: ' + vencedor;
  }
  else if(formas.every(Boolean)){
    status = 'Empate!';
  }
  else{
    status = 'Próximo jogador: ' + (proximaForma ? 'X' : 'O');
  }

  return(
    <div className='jogo'>
      <div className='quadroJogo'>
        <Quadro
          formas={formas}
          onClick={quadradoClicado}
        />
      </div>
      <div className='infoJogo'>
        <div>{status}</div>
        {(vencedor || formas.every(Boolean)) && (
          <button className='btnReiniciarJogo'onClick={() => {
            setFormas(Array(9).fill(null));
            setProximaForma(true);
          }}>
            Reiniciar Jogo
          </button>
        )}
      </div>
    </div>
  )
}

export default App
