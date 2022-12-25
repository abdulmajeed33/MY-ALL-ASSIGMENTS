
// import ProfileFooter from './Component/ProfileFooter';
import ProfilePage from './Component/ProfilePage';
import Spinner from './Component/Spinner';
import './css/Profile.css'
import { ErrorBoundary } from 'react-error-boundary'


function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>hello world</p>
      <pre>{error.message}</pre>
    </div>
  )
}



function App() {


  return (

    <div className="app_wrapper">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Spinner>
          <div>
            <ProfilePage />
            {/* <ProfileFooter /> */}
          </div>
        </Spinner>
      </ErrorBoundary>
    </div>
  );
}


export default App;
