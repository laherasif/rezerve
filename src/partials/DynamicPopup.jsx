import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MdClose } from 'react-icons/md';

const DynamicPopup = ({ modalOpen, data, close }) => {


    return (
        <>
            <Modal open={modalOpen} center onClose={() => close(false)}>
                <div className=" overflow-auto rounded-md">
                    {/* Modal header */}
                    <div className='flex justify-end' onClick={() => close(false)}>
                        <MdClose  className='cursor-pointer'/>
                    </div>
                    <div className=''>
                        {data}
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default DynamicPopup