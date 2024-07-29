import './index.css';

function MainPage() {
  return (
    <div className="fixed w-100px h-100poverflow-auto">
      <div className="absolute top-[-5vh] left-[50vw] w-[15vw] h-[15vw] bg-[#8353E2FF] rounded-full transform -translate-x-1/2" />
      <div className="absolute top-[56vh] left-[80vw] w-[12vw] h-[20vw] bg-[#8353E2FF] rounded-xl transform -translate-x-1/2" />
      <div className="absolute top-[30vh] left-[-6vw] w-[30vw] h-[30vw] bg-[#8353E2FF] rounded-full " />
      <div className="absolute top-[20vh] left-[90vw] w-[14vw] h-[14vw] bg-[#8353E2FF] rounded-full sm:top-[20vh] sm:left-[90vw] md:top-[20vh] md:left-[90vw] lg:top-[20vh] lg:left-[90vw]" />
    </div>
  );
}

export default MainPage;
