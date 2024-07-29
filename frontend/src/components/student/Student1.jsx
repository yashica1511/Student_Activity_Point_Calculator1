
import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';

function Student1() {
    const navigate = useNavigate();
    const page4 = () => {
        navigate('/student_3');
    };
    const page5 = () => {
        navigate('/student_2');
    };

    return (
        <>
            <MainPage />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[80vw] min-h-screen sm:min-h-[80vh] bg-[rgba(255,255,255,0.85)] rounded-xl flex flex-col items-center">
                    <div className='w-[57px] h-[59px] bg-[url(../../images/logo.png)] bg-cover bg-no-repeat rounded-[6px] mt-10' />
                    <span className="block h-[39px] text-[20px] sm:text-[25px] md:text-[30px] font-bold leading-[39px] text-[#000] mt-10 text-center">
                        <h1>DEPARTMENT OF ARTIFICIAL INTELLIGENCE</h1>
                    </span>
                    <div className='flex flex-col sm:flex-row justify-center items-center mt-20 sm:mt-32 space-y-6 sm:space-y-0 sm:space-x-12'>
                        <button className='w-[200px] sm:w-[244px] h-[100px] sm:h-[131px] bg-[#a07ce9] rounded-[8px] shadow-lg relative flex items-center justify-center' onClick={page4}>
                            <span className="text-[16px] sm:text-[20px] font-bold text-[#000]">
                                <h5>APPLY SAP</h5>
                            </span>
                        </button>
                        <button className='w-[200px] sm:w-[244px] h-[100px] sm:h-[131px] bg-[#a07ce9] rounded-[8px] shadow-lg relative flex items-center justify-center' onClick={page5}>
                            <span className="text-[16px] sm:text-[20px] font-bold text-[#000]">
                            <h5>UPLOAD</h5>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Student1;
