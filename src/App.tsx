import { BrowserRouter, Route, Routes } from "react-router-dom"

//lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"
import Layout from "./pages/UsersApp/Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Users from "./pages/UsersApp/Users/Users"

//homeworks
import Homeworks from "./homeworks/Homeworks"
import Homework16 from "./homeworks/Homework16/Homework16"
import Lessons from "./lessons/Lessons"
import Lesson16 from "./lessons/Lesson16/Lesson16"

//consultation
// import Consultation08 from "./consultation/Consultation08/Consultation08"

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
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
