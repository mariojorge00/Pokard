import React from "react";
export function FirstColumn({ Standarized, info, region, result }) {
  
  return (region ? 
    <div className="firstColumn">
      <div className="firstColumn1">
        <h3 className="cardeTitle titleExpanded2">{Standarized(info)}</h3>
        <h2 className="cardeTitle titleExpanded">
          {result.name.toUpperCase()}
        </h2>
      </div>
      <div className="firstColumn2">
        <div className="wrap">
          <div>
            <p className="metricExpanded">Height: {info.height / 10}m</p>
          </div>
          <div>
            <p className="metricExpanded">Weigth: {info.weight / 10}kg</p>
          </div>
          <span className="region">Region: {region.charAt(0).toUpperCase() + region.slice(1)}</span>
        </div>
      </div>
    </div>
  : null);
}
