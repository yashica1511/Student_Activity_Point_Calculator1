import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Personalinfo from './components/student/Personalinfo';
import Student1 from './components/student/Student1';
import Student2 from './components/student/Student2';
import Hod1 from './components/hod/Hod1';
import Hod2 from './components/hod/Hod2';
import Fetch_Data from './components/hod/Fetch_Data';
import PrivateRoute from './components/PrivateRoute';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route element={<PrivateRoute allowedRoles={["hod"]} />}>
        <Route path="/hod1" element={<Hod1 />} />
        <Route path="/hod2" element={<Hod2 />} />
        <Route path="/fetch_data" element={<Fetch_Data />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={["student"]} />}>
        <Route path="/personalinfo" element={<Personalinfo />} />
        <Route path="/student1" element={<Student1 />} />
        <Route path="/student2" element={<Student2 />} />
        </Route>

        <Route path="/unauthorized" element={<p>Unauthorized Access</p>} />
        <Route path="*" element={<p>404 Not Found</p>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;