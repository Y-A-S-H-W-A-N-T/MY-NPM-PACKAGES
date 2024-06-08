import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'

const setAlertStyles = (alertBoxColor='white',titleColor='black',confirmButtonBgColor='rgba(0,150,0,0.5)',cancelButtonBgColor='rgba(150,0,0,0.5)',cancelButtonColor='black',confirmButtonColor='black', BgColor='rgba(0,0,0,0.5)')=> ({
    overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: BgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
    },
    modalContent: {
        backgroundColor: alertBoxColor,
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        textAlign: 'center',
        position: 'relative',
        color: titleColor,
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
    },
    cancelButton: {
        marginRight: '10px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: cancelButtonBgColor,
        cursor: 'pointer',
        color: cancelButtonColor
    },
    confirmButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: confirmButtonBgColor,
        color: confirmButtonColor,
        cursor: 'pointer'
    }
})


const Alert = ({ title='', description='', onConfirm=()=>{}, onCancel=()=>{}, showCancelButton=true, type=null, confirmButtonTitle='OK', cancelButtonTitle='CANCEL', alertBoxColor, titleColor, descriptionColor='black', confirmButtonBgColor, cancelButtonBgColor, cancelButtonColor,confirmButtonColor, BgColor })=>{

    const AlertStyle = setAlertStyles(alertBoxColor,titleColor,confirmButtonBgColor,cancelButtonBgColor,cancelButtonColor,confirmButtonColor,BgColor)
    const [show,setShow] = useState(true)

    const Confirm = ()=>{
        setShow(false)
        onConfirm()
    }

    const Cancel = ()=>{
        setShow(false)
        onCancel()
    }


  return (
    <div>
        {show &&
        <div style={AlertStyle.overlay}>
            <div style={(AlertStyle.modalContent)}>
                <button onClick={() => setShow(false)} style={AlertStyle.closeButton}>
                    &times;
                </button>
                {type && <p>{type === 'error' ? '❌' : type === 'warning' ? '⚠️' : type === 'success' ? '✅' : type === 'notification' ? '🔔' : type === 'note' ? '📝' : type === 'information' ? '❗' : ''}</p>}
                <h1>{title}</h1>
                <p style={{color: descriptionColor}}>{description}</p>
                {showCancelButton && <button onClick={Cancel} style={AlertStyle.cancelButton}>{cancelButtonTitle}</button>}
                <button onClick={Confirm} style={AlertStyle.confirmButton}>{confirmButtonTitle}</button>
            </div>
        </div>}
    </div>
  )
}



const CustomAlert = ({ title, description, onConfirm, onCancel, showCancelButton,type, cancelButtonTitle, confirmButtonTitle, alertBoxColor, titleColor, descriptionColor, confirmButtonBgColor, cancelButtonBgColor,cancelButtonColor, confirmButtonColor, BgColor }) => {
    const container = document.createElement('div');
    document.body.appendChild(container)
    const root = createRoot(container)

    root.render(
        <Alert
            title={title}
            description={description}
            onConfirm={onConfirm}
            onCancel={onCancel}
            showCancelButton={showCancelButton}
            type={type}
            confirmButtonTitle={confirmButtonTitle}
            cancelButtonTitle={cancelButtonTitle}
            alertBoxColor={alertBoxColor}
            titleColor={titleColor}
            descriptionColor={descriptionColor}
            confirmButtonBgColor={confirmButtonBgColor}
            cancelButtonBgColor={cancelButtonBgColor}
            cancelButtonColor={cancelButtonColor}
            confirmButtonColor={confirmButtonColor}
            BgColor={BgColor}
        />
    );
}

export { CustomAlert }