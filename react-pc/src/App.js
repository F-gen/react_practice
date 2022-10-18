
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Login from './pages/Login'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'
import Publish from './pages/Publish'
import Article from './pages/Article'
import Home from './pages/Home'
import { HistoryRouter, history } from './utils/history'
function App() {
  return (
    <HistoryRouter history={history}>

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={
          <AuthRoute>
            <Layout></Layout>
          </AuthRoute>
        }>

          <Route index element={<Home></Home>}></Route>
          <Route index path='Article' element={<Article></Article>}></Route>
          <Route index path='Publish' element={<Publish></Publish>}></Route>

        </Route>
      </Routes>

    </HistoryRouter>
  );
}

export default App;
