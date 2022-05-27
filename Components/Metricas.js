import React from "react";
export function Metricas({ info, desc }) {
  return (
    <div className="metrics">
      <div>
        <h4 className="metric">HEIGHT</h4>
        <p className="metric">{info.height / 10}m</p>
      </div>
      <div>
        <h4 className="metric">WEIGHT</h4>
        <p className="metric">{info.weight / 10}kg</p>
      </div>
      <div>
        <h4 className="metric">GENERA</h4>
        <p className="metric">{desc.genera[7].genus}</p>
      </div>
    </div>
  );
}
