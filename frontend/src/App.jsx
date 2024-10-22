import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Personalinfo from './components/student/Personalinfo';
import Student1 from './components/student/Student1';
import Student2 from './components/student/Student2';
import Hod1 from './components/hod/Hod1';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/personalinfo" element={<Personalinfo />} />
        <Route path="/student1" element={<Student1 />} />
        <Route path="/student2" element={<Student2 />} />
        <Route path="/hod1" element={<Hod1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;