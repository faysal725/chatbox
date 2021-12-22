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




import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const MessageDetails = ({pageChange, presentPage}) =>{
    console.log( presentPage)

    const clockIcon = <FontAwesomeIcon icon={faClock} style={{color:"white"}} className="fas fa-camera clock-Icon"/>

    const msgDetailIcon = <FontAwesomeIcon icon={faChevronLeft} style={{color:"white"}} className="fas fa-camera"/>
    const smile = <FontAwesomeIcon icon={faSmile} style={{color:"#d0d0d0"}} className="fas fa-camera fa-lg"/>
    const paperClip = <FontAwesomeIcon icon={faPaperclip} style={{color:"#d0d0d0"}} className="fas fa-camera fa-lg"/>

    return (

        <div className='justify-content-center chat-popup-content'>
            
            <div className='msdDetailImg sticky-top d-flex bd-highlight container pt-3 text-white'>
                
                <div className="p-2 flex-shrink-1 bd-highlight pe-3">
                    
                <button onClick={()=> pageChange("messageDetails")} type="button" class="btn backBtn animate__animated animate__slideInUp animate__delay-0.5s">{msgDetailIcon}</button>
                
                </div>
                <div className="p-2 w-100 bd-highlight ps-3 animate__animated animate__fadeInRight animate__delay-0.5s">
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

            
            <div id='chat-container' className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height:" 490px"}}>
            {/* height:" 580px"  this need to be change for chat-container*/}
            <PerfectScrollbar >
            <div className="mb-auto p-2 bd-highlight" id='perfect-scroll'>
                <p></p>
            </div>
            </PerfectScrollbar>


             {/* messege sending part  */}
            <div className=" bd-highlight input-group border-top container d-flex" style={{width:"100%"}}>

                <input type="text" className=' messegin-input col-8 ' placeholder='Write your message....'/>
                
                
                <div className="d-flex justify-content-end col-4 inputIcon">
                    <span className='pt-3 px-2'>{smile}</span>
                    <span className='pt-3 px-2 '>{paperClip}</span>
                    <span className='pt-3 px-2'>{paperClip}</span>
                </div>

            </div>
            </div>
            </div>
    );
};

export default MessageDetails;