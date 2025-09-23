import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";

export default function Right() {
  return (
    <div className="w-[70%] bg-slate-950 text-white flex flex-col h-screen">
      <Chatuser />
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>
      <Type />
    </div>
  );
}

