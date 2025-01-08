import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laborum ullam asperiores quo consequatur quidem, a tempora in
            commodi? Molestiae eius ducimus expedita. Consectetur eveniet
            voluptatum laudantium error asperiores exercitationem!
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+7-765-493-3773</li>
            <li>random@mail.ru</li>
          </ul>
        </div>
      </div>

<div>
	<hr />
	<p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved. </p>
</div>

    </div>
  );
};

export default Footer;
