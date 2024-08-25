const Contact = () => {
  return (
    <div className="my-14 p-5">
      <div className="text-sm font-medium text-gray-600">
        <h2>Contact Us</h2>
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
            className="px-2 py-2 mt-2 border sm:w-1/4 rounded-sm"
            placeholder="Name"
          />
        </div>
        <div className="mt-2">
          <label>Email:</label>
          <br />
          <input
            type="text"
            className="px-2 py-2 mt-2 border sm:w-1/4 rounded-sm"
            placeholder="Email"
          />
        </div>
        <div className="mt-2">
          <label>Contact Number:</label>
          <br />
          <input
            type="text"
            className="px-2 py-2 mt-2 border sm:w-1/4  rounded-sm"
            placeholder="Contact Number"
          />
        </div>

        <textarea
          className="border mt-2 h-24 sm:w-1/4 p-5"
          name=""
          id=""
          placeholder="Write Your Objection"
        ></textarea>
      </div>
      <button className="px-7 py-2 bg-black active:bg-gray-400 text-white mt-2 rounded-sm">
        Submit
      </button>
    </div>
  );
};

export default Contact;
