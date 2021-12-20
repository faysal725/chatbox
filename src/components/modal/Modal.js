import React from 'react';

// import ScrollArea from 'react-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Message from '../Message/Message';
import SearchForHelp from '../SearchForHelp/SearchForHelp';
import Status from '../Status/Status';
import Support from '../Support/Support';
import NewInIntercom from '../NewInIntercom/NewInIntercom';
import backImage from '../Image/backgroundImg2.png'
import './Modal.css'

const Modal = () => {
    return (

        <PerfectScrollbar>
            {/* <div style={{ 
                backgroundImage: `url(${backImage})`,
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover',
                height:'300px',
                zIndex:'-1',
                width: '100%'
                
                }} className='justify-content-center popup-content'> */}
        <div className='justify-content-center popup-content'>
            {/* <div className="fixed-top"><img  src={backImage} alt="..."/></div> */}


            
            {/* <img 
            style={{
                height:'100px',
                width: '100%',
                zIndex: 1,
                }} 
                className="sticky-top" src={backImage} alt="..."/>   last*/}  
            
            <div className='fixedImg sticky-top'>
            </div>


            <div className="p-2 m-2 text-white ps-4 headline   animate__animated animate__slideInUp ">
                <h3><b>Hi</b></h3>
                <p>We help your business grow by <br/> connecting you to your customers</p>
            </div>
            <div className="p-2 m-2 border-top border-3 border-primary rounded shadow bg-body message-part animate__animated animate__slideInUp animate__delay-1s">
                <Message></Message>
            </div>
            <div className="p-2 m-2 border-top border-3 border-primary rounded shadow bg-body search-part animate__animated animate__slideInUp animate__delay-1s">
                <SearchForHelp></SearchForHelp>
            </div>
            <div className="p-2 m-2 border-top border-3 border-primary rounded shadow bg-body status-part animate__animated animate__slideInUp animate__delay-1s">
                <Status />
            </div>


            <div className="m-2 border-top border-3 border-primary rounded shadow bg-body support-part animate__animated animate__slideInUp animate__delay-1s">
                <Support></Support>
            </div>


            <div className="m-2 border-top border-3 border-primary rounded shadow bg-body new-intercom animate__animated animate__slideInUp animate__delay-1s">
                <NewInIntercom></NewInIntercom>
            </div>
            </div>
          </PerfectScrollbar>
        
    );
};

export default Modal;