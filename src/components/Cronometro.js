import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnDisplay from './BtnDisplay';


function Cronometro() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [estado, setEstado] = useState(0);
  //Estados: estado = 0 (No iniciado)
  //         estado = 1 (Iniciado)
  //         estado = 2 (En pausa)
//CONTROLES DE INICIO DE CRONOMETRO
  const iniciar = ()=> {
    run();
    setEstado(1);
    setInterv(setInterval(run, 10));
  };
  var updMs = time.ms, updS = time.s, updM = time.m, updH=time.h;
  const run = ()=>{
    if (updM===60){
      updH++;
      updM=0;
    }
    if (updS === 60){
      updM++;
      updS = 0;
    }
    if (updMs===100){
      updS++;
      updMs=0;
    }
    updMs++;
    return setTime({ms:updMs, s:updS, m:updM, h:updH});
  };
//CONTROLES DE DETENCION Y REINICIO DE CRONOMETRO
const stop = ()=>{
  clearInterval(interv);
  setEstado(2)
}
const reiniciar = ()=>iniciar();
  
const limpiar = ()=>{
    clearInterval(interv);
    setTime({ms:0, s:0, m:0, h:0})
    setEstado(0)
}
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnDisplay 
            start={iniciar}
            stop={stop}
            reset={limpiar}
            resume = {reiniciar}
            status={estado}
          />
        </div>
      </div>
    </div>
  );
}

export default Cronometro;
