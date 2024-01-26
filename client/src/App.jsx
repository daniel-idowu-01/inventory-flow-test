/* #49598a */
import Sidebar from "./components/Sidebar"
import DashboardComp from "./components/DashboardComp"
import { DataProvider } from "./context/DataContext"

function App() {

  return (
    <div>
      <DataProvider>
        <Sidebar />
        <DashboardComp />
      </DataProvider>
    </div>
  )
}

export default App
