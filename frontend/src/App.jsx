import {Routes, Route, Navigate} from 'react-router';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <header>
      <SignedIn>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Navigate to='/' replace/>}/>
        </Routes>

        {/* <UserButton /> */}
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path='/auth' element={<AuthPage />}/>
          <Route path="*" element={<Navigate to='/auth'replace/>}/>
        </Routes>
        {/* <SignInButton mode="modal"/> */}
      </SignedOut>
    </header>
  )
}

export default App