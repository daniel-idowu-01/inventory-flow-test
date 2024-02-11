import React, { lazy, Suspense } from "react"
import Profile from "./pages/Profile"
import { DataProvider } from "./context/DataContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const Dashboard = lazy(() => import('./pages/Dashboard'))
const ManageInventory = lazy(() => import('./pages/ManageInventory'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const CreateProduct = lazy(() => import('./pages/CreateProduct'))
const DashboardComp = lazy(() => import('./components/DashboardComp'))

function App() {

  return (
    <div>
      <Router>
        <DataProvider>
          <Routes>
            {/* dashboard template */}
            <Route
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>}
            >
              
              {/* dashboard component */}
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DashboardComp />
                  </Suspense>}
              />

              {/* manage inventory data */}
              <Route
                path="/manage"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ManageInventory />
                  </Suspense>}
              />

              {/* create product */}
              <Route
                path="/create-product"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <CreateProduct />
                  </Suspense>}
              />


              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* sign in */}
            <Route
              path="/sign-in"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignIn />
                </Suspense>}
            />

            {/* sign up */}
            <Route
              path="/sign-up"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignUp />
                </Suspense>
              } />
          </Routes>
        </DataProvider>
      </Router>
      
    </div>
  )
}

export default App
