
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children: [
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <Watchpage/>
    }
  ]
}])

function App() {
  return (
    <Provider store = {store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
      {/**
       * Head
       * Body
       * Sidebar
       *   MenuItems
       * MainContainer
       *   ButtonsList
       *   VideoContainer
       *     VideoCard
       * 
       */}
    </div>
    </Provider>
  );
}

export default App;
