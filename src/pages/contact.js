import React, { useState }  from "react"
import axios from "axios";
import Layout from "../components/layout"
import './contact.css'

const Contact = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/56482841-e255-4853-ba87-0339cf8d4526",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thank You For Your Message !!!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <Layout>
            <section className="contact pb-5">
                <div className="container">
                    <h2 className="c-blue bb-y pt-5">Feel Free To Contact With Me</h2> 
                    <div className="row">
                        <div className="col-lg-4 mt-5">
                            <div className="address">
                                <div className="icon"><i class="fas fa-address-card"></i></div>
                                <div className="address-info">
                                    <p>132/5B <br/>East Rajabazar<br/>Dhaka 1208</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="email">
                                <div className="icon"><i class="fas fa-envelope"></i></div>
                                <div className="email-info">alaminrahul.cse@gmail.com</div>
                            </div>
                            <hr/>
                            <div className="phone">
                                <div className="icon"><i class="fas fa-mobile-alt"></i></div>
                                <div className="phone-info">+8801645-733349<br/>+8801772-529099</div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5">
                            {serverState.status && (
                                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                    <div class="alert alert-success" role="alert">
                                        {serverState.status.msg} <i class="far fa-smile c-blue"></i>
                                    </div>
                                    </p>
                                )}
                            <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" required="required"/>
                            </div>
                            <div className="form-group">
                                <label for="email" required="required">Email address</label>
                                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div> 
                            <div className="form-group">
                                <label for="description" required="required">Description</label>
                                <textarea name="textarea" className="form-control" id="description" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-success"  disabled={serverState.submitting}>
                                Submit
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
     
    );
  };
  
  export default Contact;