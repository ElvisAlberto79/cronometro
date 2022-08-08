import React from 'react'

function BtnDisplay(props) {
  return (
    <div className="main-section">
        {(props.status===0 ? 
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>Iniciar</button> : ""
        )}
      
      {(props.status===1 ? 
      <div>
        <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>Parar</button>
        <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Limpiar</button>
        </div> : ""
        
        )}
        {(props.status===2 ? 
      <div>
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.resume}>Reiniciar</button>
        <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Limpiar</button>
        </div> : ""
        
        )}
    </div>
  );
}

export default BtnDisplay;
