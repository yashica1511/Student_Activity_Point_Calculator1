import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Signin1 from './components/signin/Signin1';
import Personalinfo from './components/student/Personalinfo';
import Student1 from './components/student/Student1';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin1" element={<Signin1 />} />
        <Route path="/personalinfo" element={<Personalinfo />} />
        <Route path="/student1" element={<Student1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;