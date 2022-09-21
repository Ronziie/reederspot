import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import '../src/styles/login.css';
import './fonts/GothamBold.ttf';
import { Button } from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import  Switch  from 'react-ios-switch';
import { useState } from 'react';


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a5940cfd306c4b3aa74a8bce326569b4&response_type=code&redirect_uri=https://reeder-rio22.netlify.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


export default function Login() {
    
    const [changeColour, SetchangeColour] = useState(true);

    return (
        

        <div className="container" style={{height: "100vh", marginLeft: 0, marginRight: 0}}>
            <div className="Logo">
                <i>
                    <FaSpotify />
                </i>
            </div>

            <h2>Reeder</h2>

            <div className="Login-Form">

                <form className='form'>
                    <input type="text" placeholder=' Username'></input>
                </form>

                <form className="login-password">
                    <input type="text" placeholder='Password'></input>
                </form>  

            </div>
            
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <div className={changeColour ? "Remember-Me" : "Remember-Me2" }>
                                 <p>Remember Me</p>
                            </div>
                        </Col>
                        <Col>
                            <Switch
                                checked={changeColour}
                                onChange={SetchangeColour}
                            />
                        </Col>
                    </Row>

                    
                     
                    
                </Col>

                <Col>
                    <a className="btn btn-success bt-lg" href={AUTH_URL}> Login with spotify</a>
                </Col>
            </Row>
            
        </div>
            
        

    ) 

}

/*to be done - put check next to remember me and align it all and have check working */