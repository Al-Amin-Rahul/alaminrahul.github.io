import { Link } from "gatsby"
import React, { Component } from "react"
import LoadingBar from 'react-top-loading-bar';
import './header.css'
class Header extends Component  {
    state = {
        loadingBarProgress: 0
      };
      add = value => {
        this.setState({
          loadingBarProgress: this.state.loadingBarProgress + value
        });
      };
      onLoaderFinished = () => {
        this.setState({ loadingBarProgress: 0 });
      };
      componentDidMount(){      
        this.setState({ loadingBarProgress: 100 });
      }
    render(){
        return(
            <div className="header sticky-top bg-yellow">
                <LoadingBar
                progress={this.state.loadingBarProgress}
                height={4}
                color='red'
                onLoaderFinished={() => this.onLoaderFinished()}
                />
            <div className="container">
            <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand text-decoration-none" to="/">
                {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/> */}
                <h2>Rahul</h2>
            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <span className="navbar-text">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="text-decoration-none"  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none"  to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none"  to="/skill">Skill</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-decoration-none last"to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </span>
                </div>
                </nav>
            </div>
        </div>
        )
    }
}


export default Header
