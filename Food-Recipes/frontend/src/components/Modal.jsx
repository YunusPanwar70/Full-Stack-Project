import React from 'react';

function Modal({ children, onClose }) {
    return (
        <>
            <div className="backdrop">
                <dialog className='modal' open>
                    {children}
                </dialog>
            </div>
        </>
    );
}
export default Modal;