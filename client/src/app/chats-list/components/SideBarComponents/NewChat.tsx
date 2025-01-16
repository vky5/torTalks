import { FiPlus } from "react-icons/fi";

export default function NewChatButton() {
  return (
    <button className="flex items-center justify-start gap-5 w-full">
      <div className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full">
        <FiPlus className="text-black text-lg" />
      </div>
      New Chat
    </button>
  );
}
