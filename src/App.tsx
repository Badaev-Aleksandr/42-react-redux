import { BrowserRouter, Route, Routes } from "react-router-dom"
import Users from "./pages/UsersApp/Users/Users"


//lessons
import Layout from "./Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Lessons from "./lessons/Lessons"
import Lesson16 from "./lessons/Lesson16/Lesson16"
import Lesson17 from "./lessons/Lesson17/Lesson17"

//homeworks
import Homeworks from "./homeworks/Homeworks"
import Homework16 from "./homeworks/Homework16/Homework16"
import Lesson18 from "./lessons/Lesson18/Lesson18"
import Consultation10 from "./consultation/Consultation10.tsx/Consultation10"




//consultation
// import Consultation08 from "./consultation/Consultation08/Consultation08"
/* import CustomerProfile from "./pages/CustomerApp/CustomerProfile/CustomerProfile" */
/* import Layout from "./pages/CustomerApp/Layout/Layout" */
/* import Home from "./pages/CustomerApp/Home/Home" */

const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08/> */}
      {/*  <Lesson16/> */}
      {/* UserApp - Practice - Lesson16 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/homeworks" element={<Homeworks />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/lesson16" element={<Lesson16 />} /> 
          <Route path="/homeworks/homework16" element={<Homework16 />} />
          <Route path="/lessons/lesson17" element={<Lesson17 />} />
          <Route path="/lessons/lesson18" element={<Lesson18 />} />
          <Route path="/lessons/consultation10" element={<Consultation10 />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
      {/* Consultation 9 */}
{/*       <Layout >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<CustomerProfile />} />
        </Routes>
      </Layout> */}
    </BrowserRouter>
  )
}
export default App
