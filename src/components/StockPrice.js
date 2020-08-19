import React from "react";

export const StockPrice = () => {
  return (
    <div className="row mt-5" id="stockPrice">
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item small">S&P 500 Futures 3352.70 +7.900 +0.24% </li>
        <li className="list-group-item small">WTI Future 41.98 +0.040 +0.10%</li>
        <li className="list-group-item small">BRENT Future 44.99 +0.590 +1.33%</li>
        <li className="list-group-item small">PDAX INDEX 12687.53 +12.650 +0.10%</li>
        <li className="list-group-item small">NIKKEI 225 22329.94 -88.210 -0.39%</li>
      </ul>
    </div>
  );
};
