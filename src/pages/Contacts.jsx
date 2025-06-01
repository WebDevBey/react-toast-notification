import { useToast } from "../context/ToastContext";

function Contacts() {
  const { triggerToast } = useToast();

  const handleSend = () => {
    triggerToast("Message sent to contacts!", "success");
  };

  const handleFail = () => {
    triggerToast("Failed to send message.", "error");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Contacts Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleSend}
      >
        Send Message
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        onClick={handleFail}
      >
        Simulate Error
      </button>
    </div>
  );
}

export default Contacts;
