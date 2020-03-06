import React, { Component } from "react"
import Layout from "../components/layout"

class IndexPage extends Component{
    render(){
        return(
            <Layout>
                <section className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <img src={'/img/me.JPG'} className="img-fluid"></img>
                        </div>
                    </div>                 
                </section>

                <section className="sec-some-words pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                                <span className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span><br/><br/>
                                <a href="#" className="blue-btn text-decoration-none">My Work</a>
                            </div>
                            <div className="col-lg-4">
                                <img src={'/img/me.JPG'} className="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default IndexPage
