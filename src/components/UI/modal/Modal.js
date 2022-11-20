import './Modal.css';

const Modal = ({ message, confirm, cancel, show }) => {
    if (show)
        return (
            <div className='modal'>
                <div className='backdrop' />
                <div className='content'>
                    <button className='material-icons close' onClick={cancel}>close</button>
                    <p className='message'>{message}</p>
                    <div className='buttons'>
                        <button className='cancel' onClick={cancel}>Cancel</button>
                        <button className='confirm' onClick={confirm}>Confirm</button>
                    </div>
                </div>
            </div>
        )

    return;
}

export default Modal;