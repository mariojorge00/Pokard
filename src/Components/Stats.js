import React from "react";
export function Stats( {statsEval, info}) {
  function statsEval(id,info) {
    let stat = info.stats[id].base_stat;
// 0-49 bad 50-99 below 100-149 above 150-199 very good 200+ amazing
    if (stat < 45)
      return (
        <div className="puntos">
          <div className="lleno"></div>
          <div className="vacio"></div>
          <div className="vacio"></div>
          <div className="vacio"></div>
          <div className="vacio"></div>
        </div>
      );
    else if (stat >= 45 && stat < 85)
      return (
        <div className="puntos">
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="vacio"></div>
          <div className="vacio"></div>
          <div className="vacio"></div>
        </div>
      );
    else if (stat >= 85 && stat < 110)
      return (
        <div className="puntos">
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="vacio"></div>
          <div className="vacio"></div>
        </div>
      );
    else if (stat >= 110 && stat < 135)
      return (
        <div className="puntos">
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="vacio"></div>
        </div>
      );
    else if (stat >= 135)
      return (
        <div className="puntos">
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="lleno"></div>
          <div className="lleno"></div>
        </div>
      );
  }
  return (
    <div className="stats">
      <div className="statsNames">
        <div className="names">HP</div>
        <div className="names">ATTACK</div>
        <div className="names">DEFENSE</div>
        <div className="names">SPEED</div>
      </div>
      <div className="barrasStats">
        <div className="hp">{statsEval(0,info)}</div>
        <div className="attack">{statsEval(1,info)}</div>
        <div className="defense">{statsEval(2,info)}</div>
        <div className="speed">{statsEval(5,info)}</div>
      </div>
    </div>
  );
}
