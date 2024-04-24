import { Link } from 'react-router-dom';

const WarningModal = ({ errorMessage, setErrorMessage, type }) => {

    return (

        <div className={`fixed inset-0 z-50 flex justify-center items-center bg-black/80 view`}>

            <div className={`text-white flex flex-col items-center gap-8 bg-white/50 p-8 rounded-lg`}>

                <h4 className={`text-h4`}>{errorMessage}</h4>


                <button onClick={() => { setErrorMessage('') }}>
                    <Link className={`bg-second-color text-white text-button px-4 py-2 rounded-full hover:bg-third-color transition-all`} to={type === 'Sing in' ? '/auth/login' : ''}>
                        {type}
                    </Link>
                </button>



            </div>

        </div>

    );

};

export default WarningModal;