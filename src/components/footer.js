import React from 'react'
import './footer.css'
const Footer    =   ()  =>  {
    return(
        <section class="footer bg-blue c-yellow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <span>© Copyright 2020 Rahul Portfolio. Design by Rahul</span>
                        </div>
                        <div className="col-lg-4">
                            <div className="social">
                                <ul className="list-group list-inline list-group-horizontal justify-content-end">
                                    <li className="pr-3"><a href="#" className="text-white"><i className="fab fa-facebook c-yellow"></i></a></li>
                                    <li className="pr-3"><a href="#" className="text-white"><i className="fab fa-twitter c-yellow"></i></a></li>
                                    <li className="pr-3"><a href="#" className="text-white"><i className="fab fa-instagram c-yellow"></i></a></li>
                                    <li><a href="#" className="text-white"><i className="fab fa-linkedin c-yellow"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default Footer