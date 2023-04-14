import React, { Fragment } from "react";
import classes from './Modal.module.css'
import  ReactDOM  from "react-dom";


const Backdrop=(props)=>{
    return <div className={classes.backdrop}></div>

}

const ModalOverlay =(props)=>{
    return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
}

const ProtalElements=document.getElementById('overlays')

const Modal =(props)=>{
    return(
     <Fragment>
       {ReactDOM.createPortal(<Backdrop></Backdrop>,ProtalElements)}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,ProtalElements)}
    </Fragment>
    );
};

export default Modal
