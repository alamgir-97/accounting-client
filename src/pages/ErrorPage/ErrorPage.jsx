import { useRouteError } from "react-router";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
          

  return (
    <div  className="w-11/12 mx-auto bg-white" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
        </div>
    );
};

export default ErrorPage;