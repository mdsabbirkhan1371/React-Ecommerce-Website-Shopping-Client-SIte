import { assets } from '../assets/assets';
import Title from '../components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'}></Title>
      </div>
      <div className="flex flex-col my-10 md:flex-row gap-16 items-center">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <p className="text-sm text-gray-700  w-3/4 px-4">
          Forever.com is a service oriented e-commerce business which gives you
          the authority to unleash your shopaholic attitude from home with
          quality products and world class customer support. At Forever.com, we
          strive to utilize the power of the internet in its highest peak to
          fulfil the needs of your busy life. We cover whole Bangladesh right
          now and still, anyone from outside of Bangladesh can purchase products
          online providing a Bangladeshi shipping address. Be comfy to
          experience the best shopping experience from us.
        </p>
      </div>
    </div>
  );
};

export default About;
