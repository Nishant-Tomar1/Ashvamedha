import "./CounterUpPage.scss";

import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUpPage = () => {
  const [countersOn, setCountersOn] = useState([false, false, false, false]);

  return (
    <ScrollTrigger
      onEnter={() => setCountersOn([true, true, true, true])}
      onExit={() => setCountersOn([false, false, false, false])}
    >
      <div className="counterUpRow">
        <div className="counterUp">
          <h1>
            {countersOn[0] && (
              <CountUp start={1} end={10} duration={1} delay={0} />
            )}
            +
          </h1>
          <p>SPORTS</p>
        </div>

        <div className="counterUp">
          <h1>
            {countersOn[1] && (
              <CountUp start={10} end={12} duration={2} delay={0} />
            )}
          </h1>
          <p>COLLEGES</p>
        </div>

        <div className="counterUp">
          <h1>
            {countersOn[2] && (
              <CountUp start={100} end={1000} duration={2} delay={0} />
            )}
            +
          </h1>
          <p>PARTICIPANTS</p>
        </div>

        <div className="counterUp">
          <h1>
            {countersOn[3] && (
              <CountUp start={1000} end={5000} duration={2} delay={0} />
            )}
            +
          </h1>
          <p>FOOTFALL</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
