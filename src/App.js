import Feed from './components/Feed';
import Forget from './components/Forget';
import AuthContextProvider, { authcontext } from './context/AuthContext';
import Login from './components/Login';
import Pagenotfound from './components/Pagenotfound';
import Profile from './components/Profile';
import Signup from './components/Signup';
import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom'
import { useContext } from 'react';
import feed from './components/Feed';
function App() {
  return (
   <AuthContextProvider>
   <Switch>
    {/* <Route path='/feed'>
      <Feed/>
    </Route> */}
    <PrivateRoute path='/feed' comp={feed}>

    </PrivateRoute>
    
    <RedirectToFeed path='/login' comp={Login}></RedirectToFeed>
    {/* <Route path='/login'>
      <Login/>
    </Route> */}
    <RedirectToFeed path='/signup' comp={Signup}></RedirectToFeed>
    {/* <Route path='/signup'>
     <Signup/>
    </Route> */}
    <PrivateRoute path='/profile' comp={Profile}>

    </PrivateRoute>
    {/* <Route path='/profile'>
      <Profile/>
    </Route> */}
    <Route>
      <Pagenotfound/>
    </Route>
   </Switch>
   </AuthContextProvider>
      );
}

function PrivateRoute(props){
  const Component= props.comp;
  let cuser=useContext(authcontext);  
  return(
    <Route
    {...props}
    render={
     (props)=>{
      return cuser!=null?<Component {...props}></Component> : <Redirect {...props} to='/login'></Redirect>
     }    
    }
    

    >
    </Route>
  )
}

function RedirectToFeed(props){
  let Component = props.comp;
  let cUser = useContext(authcontext);
  //cUser -> null -> login
  //CUser not null Feed
  return(
  <Route 
   {...props} 
   render={
    (props)=>{
      return cUser!=null?<Redirect {...props} to="/feed"></Redirect>:
      <Component {...props}></Component>
    }
   }
   ></Route>
  )
}
export default App;
