import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center mt-24">
      <h1 className="text-2xl font-semibold text-red-600">404 Not Found</h1>
      <p className="text-gray-600 mt-4">
        The page you are looking for does not exist. Please check the URL or
        return to the home page.
      </p>
      <p className="text-gray-600 mt-2">
        Go back to the{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          Home Page
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
