import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './components/containers/ErrorBoundary';
import { publicRoutes } from './routes';
import store from './store';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  const routeRender = createHashRouter(publicRoutes);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ToastContainer
          position={toast.POSITION.TOP_LEFT}
          className="toastify-container"
          toastClassName="toastify-toast"
        />
        {/* <HashRouter>
          <TheLayout />
        </HashRouter> */}
        <Suspense fallback={loading}>
          <RouterProvider router={routeRender} />
        </Suspense>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
