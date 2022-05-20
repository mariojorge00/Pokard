import React from "react";
export function StatsExpanded({ info }) {
  function statsEval(id, info) {
    let stat = info.stats[id].base_stat;
    // 0-49 bad 50-99 below 100-149 above 150-199 very good 200+ amazing
    if (stat < 45)
      return (
        <div className="puntosExpanded puntos">
          <div className="llenoExpanded lleno"></div>
          <div className="vacioExpanded vacio"></div>
          <div className="vacioExpanded vacio"></div>
          <div className="vacioExpanded vacio"></div>
          <div className="vacioExpanded vacio"></div>
        </div>
      );
    else if (stat >= 45 && stat < 85)
      return (
        <div className="puntosExpanded puntos">
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="vacioExpanded vacio"></div>
          <div className="vacioExpanded vacio"></div>
          <div className="vacioExpanded vacio"></div>
        </div>
      );
    else if (stat >= 85 && stat < 110)
      return (
        <div className="puntosExpanded puntos">
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="vacioExpanded vacio"></div>
          <div className="vacioExpanded vacio"></div>
        </div>
      );
    else if (stat >= 110 && stat < 135)
      return (
        <div className="puntosExpanded puntos">
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="vacioExpanded vacio"></div>
        </div>
      );
    else if (stat >= 135)
      return (
        <div className="puntosExpanded puntos">
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
          <div className="llenoExpanded lleno"></div>
        </div>
      );
  }
  return (
    <div className="stats">
      <div className="statsNames statsNamesExpanded">
        <div className="namesExpanded names">HP</div>
        <div className="namesExpanded names">Attack</div>
        <div className="namesExpanded names">Defense</div>
        <div className="namesExpanded names">Special Attack</div>
        <div className="namesExpanded names">Special Defense</div>
        <div className="namesExpanded names">Speed</div>
      </div>
      <div className="barrasStats barrasStatsExpanded">
        <div className="hp">{statsEval(0, info)}</div>
        <div className="attack">{statsEval(1, info)}</div>
        <div className="defense">{statsEval(2, info)}</div>
        <div className="defense">{statsEval(3, info)}</div>
        <div className="defense">{statsEval(4, info)}</div>
        <div className="speed">{statsEval(5, info)}</div>
      </div>
    </div>
  );
}
