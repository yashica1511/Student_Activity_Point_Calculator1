import MainPage from '../../Mainpage';
import { useNavigate } from 'react-router-dom';

function Fetch_Data() {
    const navigate = useNavigate();
    const fgdata = () => {
        navigate('/hod2');
    };
    return (
        <>
            <MainPage />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-12 mb-12">
                <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[80vw] min-h-screen sm:min-h-[80vh] bg-white bg-opacity-90 rounded-3xl shadow-lg flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
                    <div className="relative z-10 w-16 h-16">
                        <img src="../../images/logo.png" alt="Logo" className="w-full h-full rounded-full border border-gray-400" />
                    </div>
                    <span className="relative z-10 text-center text-[22px] md:text-[28px] font-bold font-['Inknut_Antiqua'] leading-[30px] md:leading-[39px] text-[#000] mt-[20px] md:mt-[30px]">
                        FETCH THE DATA OF STUDENT
                    </span>
                    <div className="relative z-10 w-full mt-8 flex flex-col space-y-10 items-center">
                        <div className="w-full flex flex-col space-y-10 items-center font-['Inknut_Antiqua']">
                            <div className="flex items-center w-full md:w-3/4">
                                <span className="text-[18px] md:text-[25px] font-bold w-1/2 text-left pl-8">YEAR</span>
                                <span className="mx-4 text-center w-4">:</span>
                                <select className="w-[280px] h-[40px] bg-transparent border border-gray-300 rounded-md text-center text-[16px] md:text-[18px]">
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                </select>
                            </div>

                            <div className="flex items-center w-full md:w-3/4">
                                <span className="text-[18px] md:text-[25px] font-bold w-1/2 text-left pl-8">DEPARTMENT</span>
                                <span className="mx-4 text-center w-4">:</span>
                                <select className="w-[280px] h-[40px] bg-transparent border border-gray-300 rounded-md text-center text-[16px] md:text-[18px]">
                                    <option value="AI_DS">AI & DS</option>
                                    <option value="AI_ML">AI & ML</option>
                                </select>
                            </div>

                            <div className="flex items-center w-full md:w-3/4">
                                <span className="text-[18px] md:text-[25px] font-bold w-1/2 text-left pl-8">SECTION</span>
                                <span className="mx-4 text-center w-4">:</span>
                                <select className="w-[280px] h-[40px] bg-transparent border border-gray-300 rounded-md text-center text-[16px] md:text-[18px]">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full md:w-3/4 flex items-center justify-between mt-6"> 
                            <div></div> 
                            <button className="w-[120px] h-[45px] font-['Inknut_Antiqua'] text-[16px] md:text-[18px] font-bold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-colors" onClick={fgdata}>
                                GET DATA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fetch_Data;
