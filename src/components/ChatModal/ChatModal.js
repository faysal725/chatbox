import React, { useState } from 'react';
import './ChatModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from '../modal/Modal';
import MessageDetails from '../MessageDetails/MessageDetails';
import 'animate.css';
import ReactWOW from 'react-wow';

const ChatModal = () => {

    const msgIcon = <FontAwesomeIcon icon={faCommentAlt} className="fas fa-camera fa-2x"/>

    const [window, setWindow] = useState(false)

    console.log(window)
    return (
        <div className="d-flex align-items-end">
            <div class="animate__animated  animate__delay-2s animate__rotateIn">Example</div>
            <Popup 
            trigger={open => (<button onClick={setWindow(true)} className="btn btn-primary button chat-icon">{msgIcon}</button>)}
            position="top center"
            nested    
            closeOnDocumentClick  
            >     
                
                <Modal></Modal>
                

                {/* <MessageDetails></MessageDetails> */}
            </Popup>
        </div>
    );
};

export default ChatModal;