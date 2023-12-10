'use client'

import { useState } from "react";
import Login from "../login/login";

interface ModalProps {
    isOpen: boolean,
    closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({isOpen, closeModal}) => {
    

    return (
        <div className={`modal modal--large fixed top-0 w-full h-full flex items-center justify-center overflow-x-hidden ${isOpen ? 'flex opacity-1 z-30': 'hidden opacity-0'}`}>
            <div className="bt-nav flex items-center justify-center" onClick={closeModal}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="14.3154" width="20.2454" height="2.38181" rx="1.1909" transform="rotate(-45 0 14.3154)" fill="white"></rect>
                    <rect x="1.68555" width="20.2454" height="2.38181" rx="1.1909" transform="rotate(45 1.68555 0)" fill="white"></rect>
                </svg>
            </div>
            <div className="modal__container">
                <Login initialData={{
                    username: '',
                    password: ''
                }} />
            </div>
        </div>
    )
}

export default Modal;