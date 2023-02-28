import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import Clouds from '../../TestFolder/Videos/MountainClouds.mp4'

const myKey = "oskar";

const SecretModalEgg = () => {
    let keyInput = ""
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    document.addEventListener("keydown", (key)=>{
        keyInput += key.key
        if(myKey === keyInput){
            return(
                setShow(true)
            );
          } 
        else {
            setTimeout(() => {
                keyInput=""
            }, 2000);
        }
    })

    return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h1>Hello! You found me! Like my view?</h1>
                <video controls autoPlay><source src={Clouds} type="video/mp4"></source></video>
                </div>
            </Modal.Body>
          </Modal>
        </>
      );
}
export default SecretModalEgg