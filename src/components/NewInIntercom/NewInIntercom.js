import React from 'react';
import './NewInIntercom.css'
import newInter from '../Image/whatsNew.jpg'



const NewInIntercom = () => {
    return (
        <>
            
            <div className="card-body border-top">
            <h5>Build for you- New in Intercom</h5>
            </div>
            <div className="card-body border-top">
                <div class="d-flex">
                    <div class="flex-shrink-0  d-flex align-items-center">
                        <img  src={newInter} alt="..."/>
                    </div>
                    <div class="flex-grow-1 ms-2">
                        <p className='text-primary'>Automatically create salesforce cases from conversations in Intercom</p>
                        <p className='text-secondary'>Keep your support team operating...</p>
                    </div>
                </div>
            </div>

            <div className="card-body border-top">
                <div class="d-flex">
                    <div class="flex-shrink-0  d-flex align-items-center">
                        <img  src={newInter} alt="..."/>
                    </div>
                    <div class="flex-grow-1 ms-2">
                        <p className='text-primary'>Automatically create salesforce cases from conversations in Intercom</p>
                        <p className='text-secondary'>Keep your support team operating...</p>
                    </div>
                </div>
            </div>

            <div className="card-body border-top">
                <div class="d-flex">
                    <div class="flex-shrink-0  d-flex align-items-center">
                        <img  src={newInter} alt="..."/>
                    </div>
                    <div class="flex-grow-1 ms-2">
                        <p className='text-primary'>Automatically create salesforce cases from conversations in Intercom</p>
                        <p className='text-secondary'>Keep your support team operating...</p>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};

export default NewInIntercom;