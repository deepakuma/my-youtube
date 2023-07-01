
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import SerachContainer from './components/SearchContainer';
import Watchpage from './components/Watchpage';

const appRouter = createBrowserRouter([{
  path:"/",
  element: <>
  <Head/>
  <Body/>
</>,
  children: [
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <Watchpage/>
    },
    {
      path: "search",
      element: <SerachContainer/>,
    }
  ]
}])

function App() {
  return (
    <>
    <Provider store = {store}>
      <RouterProvider router={appRouter}/>
    </Provider>
    </>
  );
}

export default App;
