import React, { Component } from 'react'
import Layout from '../components/layout'

class About extends Component{
    render(){
        return(
            <Layout>
                <div >
                    <section className="about-banner pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={'/img/me.JPG'} className="img-fluid"></img>
                                </div>
                                <div className="col-lg-6">
                                    <h2>I'm Rahul</h2>
                                    <p className="text-justify">A resourceful and innovative web Developer with a strong technical background and have the ability to work with the minimum of supervision.Capable of absorbing new ideas and can communicate clearly and effectively.I am specialist in problem solving, highly creative, analytical, committed with the high quality software and the customer satisfaction</p>
                                    <p className="pt-1">Rahul</p>
                                    <p>02/28/2020</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="education pt-5 pb-5">
                        <div className="container ">
                            <h2 className="c-blue bb-y">Education</h2> 
                            <div className="row pt-5">
                                <div className="col-lg-4 text-center">
                                    <div className="count c-blue"><h3 className="">01</h3></div>
                                    <div className="university "><p>Daffodil International University</p></div>
                                    <div className="year ">2016-2020</div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="count c-blue"><h3>02</h3></div>
                                    <div className="university"><p>Bonarpara Degree College</p></div>
                                    <div className="year">2014-2015</div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="count c-blue"><h3>03</h3></div>
                                    <div className="university"><p>Amar Desh Residential School</p></div>
                                    <div className="year">2012-2013</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-profile pt-5 pb-5">
                        <div className="container">
                            <div className="row">         
                                <div className="col-lg-6">
                                    <h2 className="">About My Profile</h2>
                                    <p className="text-justify">A resourceful and innovative web Developer with a strong technical background and have the ability to work with the minimum of supervision.Capable of absorbing new ideas and can communicate clearly and effectively.I am specialist in problem solving, highly creative, analytical, committed with the high quality software and the customer satisfaction</p>
                                    <a href="#" className="blue-btn text-decoration-none mr-3">Download CV</a>
                                    <a href="#" className="blue-btn text-decoration-none">Hire Me</a>
                                </div>
                                <div className="col-lg-6">
                                    <img src={'/img/me.JPG'} className="img-fluid img-thumbnail"></img>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="hobbies pt-5 pb-5">
                        <div className="container">
                            <h2 className="c-blue bb-y">I Like To Do</h2> 
                            <div className="row pt-5">
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-code i-round"></i></div>
                                    <div className="two-words">
                                        <p>coding</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-plane i-round"></i></div>
                                    <div className="two-words">
                                        <p>Travelling</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-tint i-round"></i></div>
                                    <div className="two-words">
                                        <p>Thinking</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-gamepad i-round"></i></div>
                                    <div className="two-words">
                                        <p>Gaming</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-book-reader i-round"></i></div>
                                    <div className="two-words">
                                        <p>Learning</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-music i-round"></i></div>
                                    <div className="two-words">
                                        <p>Music</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-globe-americas i-round"></i></div>
                                    <div className="two-words">
                                        <p>Explore</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <div className="icon"><i class="fas fa-bed i-round"></i></div>
                                    <div className="two-words">
                                        <p>Sleeping</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default About