export default function Chatuser() {
  return (
    <>
      <div className="pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-600">
        <div>
          <div className="avatar avatar-online">
            <div className="w-14 rounded-full">
              <img src="https://media.licdn.com/dms/image/v2/D5603AQFvvdcGk_cmxw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720352162612?e=2147483647&v=beta&t=KfvlFOkRFLt0PDVGVzcVaf9OytklGDxENMrsmZJMFyY" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">Chandu</h1>
          <span className="text-sm">online</span>
        </div>
      </div>
    </>
  );
}
