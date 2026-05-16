import React from "react";

import RealtimeChart from "./realTime/RealtimeChart";
import StrategyChart from "./strategy/StrategyChart";
import RealTimeScript from "./realTime/RealTimeScript";
import StrategyScript from "./strategy/StrategyScript";

const Monitoring: React.FC = () => {
  return (
    <div className="m-8">
      {/* <TopRates /> */}
      <div className=" ">
        <RealtimeChart />
      </div>
      <StrategyChart />
      <div data-aos="fade-up" data-aos-delay="100" className="grid account-card grid-cols-1 md:grid-cols-2 mt-8 gap-8">

        <RealTimeScript />
        <StrategyScript />
      </div>
    </div>
  );
};

export default Monitoring;
