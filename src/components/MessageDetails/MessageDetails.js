import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import backImage from '../Image/backgroundImg2.png'
import './MessageDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faClock, faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import prof1 from '../Image/messageImg.jpeg';
import prof2 from '../Image/m2essageImg.jpg'
import prof3 from '../Image/messageImg3.jpg';
import gifIcon from '../Image/icon/smile-regular.svg'


const MessageDetails = () => {
    const clockIcon = <FontAwesomeIcon icon={faClock} style={{color:"white"}} className="fas fa-camera clock-Icon"/>

    const msgDetailIcon = <FontAwesomeIcon icon={faChevronLeft} style={{color:"white"}} className="fas fa-camera"/>
    const smile = <FontAwesomeIcon icon={faSmile} style={{color:"#d0d0d0"}} className="fas fa-camera fa-lg"/>
    const paperClip = <FontAwesomeIcon icon={faPaperclip} style={{color:"#d0d0d0"}} className="fas fa-camera fa-lg"/>

    return (
        <PerfectScrollbar>

        <div className='justify-content-center popup-content'>
            
            <div className='msdDetailImg sticky-top d-flex bd-highlight container pt-3 text-white'>
                
                <div className="p-2 flex-shrink-1 bd-highlight pe-3">
                    
                <button type="button" class="btn backBtn">{msgDetailIcon}</button>
                
                </div>
                <div className="p-2 w-100 bd-highlight ps-3">
                    <h4>Intercom</h4>
                    <p>We help your business grow by connecting <br/> you to your customers.</p>


                    <div className='d-flex row'>
                        <div className='col-5 image-holder '>
                            <img className='image1' src={prof1} alt="..."/>
                            <img className='image2' src={prof2} alt="..."/>
                            <img className='image3' src={prof3} alt="..."/>
                        </div>
                        <div className='col-7 text-white'>

                            <p>Our usual reply time</p>
                            <p><span >{clockIcon}</span><b> A few minutes</b></p>
                        </div>
                    </div>
                </div>
            </div>   

                

            {/* messege history part      */}

            
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height:" 460px"}}>
            <div className="mb-auto p-2 bd-highlight">
                <p></p>
            </div>



             {/* messege sending part  */}
            <div className=" bd-highlight input-group border-top container d-flex row" style={{width:"100%"}}>
            {/* <span class="input-group-text" id="inputGroup-sizing-default">Default</span> */}
            <input type="text" className=' messegin-input col-9' placeholder='Write your message....'/>
            
            
            <div className="d-flex justify-content-end col-3 inputIcon">
                {/* <button type="button" class="btn btn-light">
                <img className='gifIcon' src={gifIcon} alt="..."/>
                </button>
                <button type="button" class="btn btn-light">{smile}</button>
                <button type="button" class="btn btn-light">{paperClip}</button> */}
                <span className='pt-3 px-2'>{smile}</span>
                <span className='pt-3 px-2 '>{paperClip}</span>
                <span className='pt-3 px-2'>{paperClip}</span>
            </div>

            </div>
            </div>
            </div>
          </PerfectScrollbar>
    );
};

export default MessageDetails;