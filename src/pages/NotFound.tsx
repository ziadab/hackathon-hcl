import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an error has occured:</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </>
  );
}

export default NotFound