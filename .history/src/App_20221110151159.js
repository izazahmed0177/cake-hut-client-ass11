import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';

function App(route) {
  // document.title = route.title || "Cake Hut";
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
