/* #49598a */
import Sidebar from "./components/Sidebar"
import DashboardComp from "./components/DashboardComp"
import SignIn from './pages/SignIn'
import { DataProvider } from "./context/DataContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <Router>
        <DataProvider>
          <Sidebar />
          <Routes>
            <Route path="/" element={<DashboardComp />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </DataProvider>
      </Router>
      
    </div>
  )
}

export default App
