import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {// könen auch mehrere komponenten in einer klass haben
    return <div className={classes.backdrop}/>; //für schwarzen hintergrund
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>{/*//für weisses popoup*/}
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays'); //overlasys in index.html haben soll dahin teleportiert

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop  />, portalElement)} {/*reihenfolge egal wegen z index von modaloverlay ist grösser als der vom backdrop also overlay immer drüber*/}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)} {/*//returnt mit children alles was in <modal>x</modal> x drinne ist*/}
        </Fragment>
    );
};

export default Modal;
