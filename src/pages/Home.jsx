import { useToast } from "../context/ToastContext";

function Home() {
  const { triggerToast } = useToast();

  const handleSuccess = () => {
    triggerToast("Home: Success action!", "success");
  };

  const handleError = () => {
    triggerToast("Home: Something went wrong.", "error");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleSuccess}
      >
        Get User Data
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        onClick={handleError}
      >
        Get Customers Data
      </button>
    </div>
  );
}

export default Home;
