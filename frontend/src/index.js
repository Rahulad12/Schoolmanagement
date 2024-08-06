import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './Components/Error';
import Login from './Components/Login';
import HomeScreen from './screens/HomeScreen';
import TeacherScreen from './screens/TeacherScreen';
import RegisterScreen from './screens/RegisterScreen';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path = "/" element = {<HomeScreen/>}/>
      <Route path = "/teachers" element = {<TeacherScreen/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element= {<RegisterScreen/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
