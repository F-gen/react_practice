
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Login from './pages/Login'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={
          <AuthRoute>
            <Layout></Layout>
          </AuthRoute>

        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
