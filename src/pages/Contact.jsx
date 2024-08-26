import { assets } from '../assets/assets';
import Title from '../components/Title';

const Contact = () => {
  return (
    <div className=" border-t pt-5 mx-10">
      <div className="text-2xl text-center mt-10">
        <Title text1={'CONTACT'} text2={'US'}></Title>
      </div>

      <div className="flex flex-col md:flex-row my-10 gap-5 justify-around items-center">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="p-5 md:p-1">
          <div className="text-sm font-medium text-gray-600">
            <p>For any query please call us +023839393939</p>
            <p>Or Send Us Email : foreversupport@gmail.com</p>
            <p>Office Location : North City,Dhaka-1200</p>
          </div>
          <div className="mt-10">
            <h2>Please Complete the Form for Complain</h2>
            <div className="mt-2">
              <label>Your Name:</label>
              <br />
              <input
                type="text"
                className="px-2 py-2 mt-2 border w-full  rounded-sm"
                placeholder="Name"
              />
            </div>
            <div className="mt-2">
              <label>Email:</label>
              <br />
              <input
                type="text"
                className="px-2 py-2 mt-2 border w-full  rounded-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mt-2">
              <label>Contact Number:</label>
              <br />
              <input
                type="text"
                className="px-2 py-2 mt-2 border w-full  rounded-sm"
                placeholder="Contact Number"
              />
            </div>

            <textarea
              className="border mt-2 h-24 w-full p-5"
              name=""
              id=""
              placeholder="Write Your Objection"
            ></textarea>
          </div>
          <button className="px-7 py-2 bg-black active:bg-gray-400 text-white mt-2 rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
