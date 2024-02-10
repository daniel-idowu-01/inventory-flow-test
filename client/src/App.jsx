import Dashboard from "./pages/Dashboard"
import DashboardComp from "./components/DashboardComp"
import ManageInventory from "./pages/ManageInventory"
import SignIn from './pages/SignIn'
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import { DataProvider } from "./context/DataContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <Router>
        <DataProvider>
          <Routes>
            <Route element={<Dashboard />}>
              <Route path="/" element={<DashboardComp />} />
              <Route path="/manage" element={<ManageInventory />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </DataProvider>
      </Router>
      
    </div>
  )
}

export default App
