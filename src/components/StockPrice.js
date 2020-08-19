import React from "react";
import Ticker from "react-ticker";

export const StockPrice = () => {
  return (
    // using React-Ticker for moving text
    <Ticker offset="100%">
      {({ index }) => (
        <div className="mt-5" id="stockPrice">
          <ul className="list-inline">
            <li className="list-inline-item small">• S&P 500 Futures 3352.70 +7.900 +0.24%</li>
            <li className="list-inline-item small">• WTI Future 41.98 +0.040 +0.10%</li>
            <li className="list-inline-item small">• NIKKEI 225 22329.94 -88.210 -0.39%</li>
          </ul>
        </div>
      )}
    </Ticker>
  );
};
