import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';

function Hod1() {
    const navigate = useNavigate(); 
    const page2 = () => {
        navigate('/hod2');
    };
    const page3 = () => {
        navigate('/fetch_data');
    };
    return (
        <>
            <MainPage />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-12 mb-12">
                <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[80vw] min-h-screen sm:min-h-[80vh] bg-[rgba(255,255,255,0.85)] rounded-xl flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="relative w-12 h-12 mt-6">
                        <img src="../../images/logo.png" alt="Logo" className="w-full h-full rounded-lg border border-gray-400" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-6 mb-8 text-gray-700">
                        DEPARTMENT OF ARTIFICIAL INTELLIGENCE
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-16 space-y-4 sm:space-y-0 sm:space-x-8">
                        <button
                            className="py-2 px-4 w-40 h-16 rounded-md font-semibold text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-purple-300 text-black shadow-lg " onClick={page2}
                        >
                            STAFF ALLOCATION
                        </button>
                        <button
                            className="py-2 px-4 w-40 h-16 rounded-md font-semibold text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-purple-300 text-black shadow-lg" onClick={page3}
                        >
                            FETCH DATA
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hod1;
