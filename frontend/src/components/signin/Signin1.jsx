
import MainPage from '../../Mainpage';

function Signin1() {
    return (
        <div>
            <MainPage />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-[80vw] min-h-screen sm:min-h-[80vh] bg-[rgba(255,255,255,0.85)] rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className='column1 p-6 sm:p-8 md:p-10 lg:p-12'>
                            <div className="flex items-start justify-center">
                                <div className="relative w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 mt-8 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">
                                    <img src="./images/logo.png" alt="Logo" className="w-full h-full rounded-lg border border-gray-400" />
                                </div>
                            </div>
                            <div className="flex items-start justify-center mt-4 sm:mt-4 md:mt-4 lg:mt-4">
                                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center">Kongu Engineering College</h1>
                            </div>
                            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold"><b>Sign In</b></h2>
                            </div>
                            <div className="mt-2 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                                <h6 className="text-sm sm:text-base md:text-lg lg:text-xl">Unlock happiness: Sign in to access SAP calculation tool.</h6>
                            </div>
                            <div className="mt-6 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold"><b>Email</b></h2>
                                <div className="mt-2">
                                    <input type="text" className="w-full sm:w-[98%] md:w-[95%] lg:w-[92%] xl:w-[90%] h-12 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base sm:text-sm"
                                        id='email'
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
                                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold"><b>Password</b></h2>
                                <div className="mt-2">
                                    <input type="password" className="w-full sm:w-[98%] md:w-[95%] lg:w-[92%] xl:w-[90%] h-12 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base sm:text-sm"
                                        id='pwd'
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex items-start mt-2">
                                    <div className="text-md">
                                        <a href="/forgot" className="font-medium text-gray-600 hover:text-purple-500">
                                            <h6>Forgot password?</h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <button
                                        className="mt-2 py-2 px-4 w-24 sm:w-28 md:w-32 lg:w-36 h-12 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md bg-blue-500 text-white">
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="column2 flex items-center justify-center hidden sm:block">
                            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] xl:h-[520px] 2xl:h-[721px]">
                                <img src='./images/study_group_2.jpg' alt="Study group" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin1;
