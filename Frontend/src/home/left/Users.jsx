import User from "./User";

export default function Users() {
  return (
    <>
    <div className="py-2 flex-scroll-user overflow-y-auto" style={{maxHeight:"calc(84vh - 10vh)"}}>
      <User/>
    </div>
    </>
  );
}
