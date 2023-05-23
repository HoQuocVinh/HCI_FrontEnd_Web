import { IconFB, IconIns, IconYou } from "components/icon/Icon";
import { useForm } from "react-hook-form";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <div className="mt-10 bg-black bg-opacity-20 px-36">
      <div className="mt-28 flex flex-row justify-between pt-7">
        <div>
          <p className="text-xl font-bold text-white">Company Information</p>
          <p className="w-full max-w-[659px] text-[#B1B1B1]">
            Palmo: Where Glamour and Sophistication Converge in Style
          </p>
          <div className="mt-2 flex flex-col gap-y-2">
            <dl className="text-white">
              <dt className="font-bold">Address</dt>
              <dd className="pl-3 text-white text-opacity-70">
                01 Võ Văn Ngân, P. Linh Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh
              </dd>
            </dl>
            <dl className="text-white">
              <dt className="font-bold">Phone Number</dt>
              <dd className="pl-3 text-white text-opacity-70">0987654321</dd>
            </dl>
            <dl className="text-white">
              <dt className="font-bold">Business Hours</dt>
              <dd className="pl-3 text-white text-opacity-70">
                Monday - Friday, 8:00 AM - 5:00 PM
              </dd>
            </dl>
          </div>
        </div>
        <div className="w-full max-w-[350px] text-white">
          <p className="text-xl font-bold">Join Community</p>
          <div className="mt-4 flex items-center gap-4">
            <i>
              <IconFB />
            </i>
            <i>
              <IconIns />
            </i>
            <i>
              <IconYou />
            </i>
          </div>
          <hr className="mt-10 border border-white border-opacity-10" />
          <div className="mt-9 grid grid-cols-3">
            <div className="col-span-1">
              <span className="text-xl font-bold">Company</span>
              <div className="mt-4 flex flex-col gap-2">
                <span>About</span>
                <span>Careers</span>
              </div>
            </div>
            <div className="col-span-2 ml-10">
              <span className="text-xl font-bold">Resources</span>
              <div className="mt-4 flex flex-col gap-2">
                <span>FAQs</span>
                <span>Newsletter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 border border-white border-opacity-10" />
      <div className="font-footer flex items-center justify-between pt-8 pb-6 font-medium text-[#767676]">
        <p>C2022-2023 Palmo. Inc</p>
        <div className="flex items-center gap-16">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
