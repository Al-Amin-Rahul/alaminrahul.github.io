import React, { Component } from 'react'
import Layout from '../components/layout'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import ChangingProgressProvider from "../components/ChangingProgressProvider";

class Skill extends Component{
    render(){
        const percentage = 66;
        return(
            <Layout>
               <>
                <section className="skil pt-5 pb-5">
                    <div className="container">
                        <h2 className="c-blue bb-y">Skill</h2> 
                        <div className="row pt-5">
                            <div className="col-lg-3">
                                <div>
                                <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={80}
                                            duration={3}
                                            easingFunction={easeQuadInOut}
                                            
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                strokeWidth="20"
                                                styles={buildStyles({
                                                    pathTransition: "none",
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'round',
                                                    // Colors
                                                    pathColor: `#002E5B`,
                                                    textColor: '#002E5B',
                                                    trailColor: '#FDE428',
                                                  })}
                                                />
                                            );
                                            }}
                                        </AnimatedProgressProvider>
                                </div>
                                <p className="text-center">HTML</p>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={70}
                                            duration={3}
                                            easingFunction={easeQuadInOut}
                                            
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                strokeWidth="20"
                                                styles={buildStyles({
                                                    pathTransition: "none",
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'round',
                                                    // Colors
                                                    pathColor: `#002E5B`,
                                                    textColor: '#002E5B',
                                                    trailColor: '#FDE428',
                                                  })}
                                                />
                                            );
                                            }}
                                        </AnimatedProgressProvider>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "70%" }}>
                                <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={90}
                                            duration={3}
                                            easingFunction={easeQuadInOut}
                                            
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                strokeWidth="20"
                                                styles={buildStyles({
                                                    pathTransition: "none",
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'round',
                                                    // Colors
                                                    pathColor: `#002E5B`,
                                                    textColor: '#002E5B',
                                                    trailColor: '#FDE428',
                                                  })}
                                                />
                                            );
                                            }}
                                        </AnimatedProgressProvider>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={88}
                                            duration={3}
                                            easingFunction={easeQuadInOut}
                                            
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                strokeWidth="20"
                                                styles={buildStyles({
                                                    pathTransition: "none",
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'round',
                                                    // Colors
                                                    pathColor: `#002E5B`,
                                                    textColor: '#002E5B',
                                                    trailColor: '#FDE428',
                                                  })}
                                                />
                                            );
                                            }}
                                        </AnimatedProgressProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               </>
            </Layout>
        )
    }
}

export default Skill