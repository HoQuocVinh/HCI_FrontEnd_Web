import { useSelector } from "react-redux";

function ProfilePage() {
  const { user } = useSelector((state: any) => state.auth);
  console.log("TCL: ProfilePage -> user", user);
  return (
    <>
      <h1 className="text-xl font-bold">HỒ SƠ</h1>
      <div className="flex items-start gap-20">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col">
            <strong className="uppercase">Email address</strong>
            <span>{user.email}</span>
          </div>
          <div className="flex flex-col">
            <strong className="uppercase">Full Name</strong>
            <span>{user.fullName}</span>
          </div>
          <div className="flex flex-col">
            <strong className="uppercase">Address</strong>
            <span>{user.address ? user.address : "NULL"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col">
            <strong className="uppercase">Phone number</strong>
            <span>{user.phoneNumber ? user.phoneNumber : "NULL"}</span>
          </div>
          <div className="flex flex-col">
            <strong className="uppercase">Gender</strong>
            <span>{user.gender}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
