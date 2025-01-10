import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Discover the perfect blend of style and comfort at [Your Store
            Name], your go-to destination for fashion-forward clothing. Whether
            you&apos;re looking for trendy outfits, timeless classics, or
            everyday essentials, we have something for everyone. Our collection
            features high-quality fabrics, meticulous craftsmanship, and designs
            that reflect the latest trends. From casual wear to formal attire,
            we cater to men, women, and children, ensuring the whole family
            stays stylish. Explore our exclusive collections, enjoy competitive
            prices, and experience exceptional customer service. Step into [Your
            Store Name] today, and let us help you create your unique fashion
            statement!
          </p>
          <p>
            We bring you the latest trends and timeless classics in fashion.
            From casual outfits to elegant attire, our collection suits every
            occasion. Enjoy premium quality, affordable prices, and exceptional
            service. Discover your unique style with us – fashion made for
            everyone!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to inspire confidence and self-expression through
            fashion. We strive to provide high-quality, stylish clothing that
            caters to diverse tastes and lifestyles. Our goal is to create an
            inclusive shopping experience where everyone feels valued and
            empowered to embrace their unique sense of style.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Quality select and vet each product to ensure it meets our stringent
            quality standards
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping it meets our stringent quality standards{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            Stylish clothing that caters to diverse tastes and lifestyles. Our
            goal , shopping it meets our stringent quality standards{" "}
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
