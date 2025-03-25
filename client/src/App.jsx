import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SubmitCash from "./pages/Submitcase"
import Registration from "./pages/Resgidtration"
import Widthdrawl from "./pages/Widthdrawl"
import Resetpass from "./pages/Resetpass"
import BalaceInquery from "./pages/BalaceInquery"
import AccountSate from "./pages/AccountSate"
import MIniStatement from "./pages/MIniStatement"




function App() {

  return (
    <>
   
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="about" element={<About/>}/>

        </Route>
    </Routes>

    <Routes>
      <Route path="dashboard" element={<Dashboard/>}>
      <Route path="submitcash" element={<SubmitCash/>}/>
      <Route path="withdrawcash" element={<Widthdrawl/>}/>
      <Route path="reset" element={<Resetpass/>}/>
      <Route path="balanceinquiry" element={<BalaceInquery/>}/>
      <Route path="accountstatement" element={<AccountSate/>}/>
      <Route path="ministatement" element={<MIniStatement/>}/>

      </Route>
    </Routes>
   </BrowserRouter>
  
  
    </>
  )
}

export default App
