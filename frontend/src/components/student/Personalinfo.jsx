
import MainPage from '../../Mainpage';

function Personalinfo(){
    
    return(
        <>
        <MainPage />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-[80vw] min-h-screen sm:min-h-[80vh] bg-[rgba(255,255,255,0.85)] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="flex flex-col md:flex-row items-center">
            <img src="./images/WireframeImagePlaceholder.png" alt="Profile Photo" className="p-4 w-32 h-32 md:w-40 md:h-40" />
            <div className="mt-6 md:mt-0 md:ml-6 px-6">
                <h2 className="text-2xl mb-4 text-gray-700 font-bold">PERSONAL INFORMATION</h2>
                <div className="flex items-center">
                    <label className="block text-gray-700 font-bold mb-1 mr-4 md:mr-28">
                        <h5>Name</h5>
                    </label>
                    <span className="mb-1">
                        <h5>Yashica</h5>
                    </span>
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 font-bold mb-1 mr-4 md:mr-12">
                        <h5>Roll_Number</h5>
                    </label>
                    <span className="mb-1">
                        <h5>22ADR123</h5>
                    </span>
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 font-bold mb-1 mr-4 md:mr-2">
                        <h5>Year/Class/Section</h5>
                    </label>
                    <span className="mb-1">
                        <h5>III/AIDS/B</h5>
                    </span>
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 font-bold mb-1 mr-4 md:mr-28">
                        <h5>Email</h5>
                    </label>
                    <span className="mb-1">
                        <h5>yashicas.22aid@kongu.edu</h5>
                    </span>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center mt-32 gap-4">
    <div className="w-full flex justify-center">
        <button className="py-2 px-4 w-40 h-20 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black">Semester 3</button>
        <button className="py-2 px-4 w-40 h-20 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black ml-60">Semester 4</button>
    </div>
    <div className="w-full flex justify-center mt-10">
        <button className="py-2 px-4 w-40 h-20 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black">Semester 5</button>
        <button className="py-2 px-4 w-40 h-20 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black ml-60">Semester 6</button>
    </div>
</div>


    </div>
</div>

        </>
    )
}
export default Personalinfo