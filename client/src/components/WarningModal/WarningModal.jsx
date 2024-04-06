import style from './WarningModal.module.css';
import { Link } from 'react-router-dom';

const WarningModal = ({ errorMessage, setErrorMessage, type }) => {

    return (

        <div className={`${style.warningModalContainer}`}>

            <div className={`${style.warningModal}`}>

                <h4 className={`${style.errorMessage}`}>{errorMessage}</h4>

                {
                    <Link className={`${style.continueButton}`} to={type === 'Sing in' ? '/login' : ''}>

                        <span onClick={() => { setErrorMessage('') }}>{type}</span>

                    </Link>
                }


            </div>

        </div>

    );

};

export default WarningModal;