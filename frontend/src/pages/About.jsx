import Title from "./../components/Title";
import { assets } from "./../assets/assets";
import NewsletterBox from "./../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Sarah Collections, fashion isn’t just about clothing — it’s about
            self-expression, confidence, and comfort.
          </p>

          <p>
            We’re more than just a fashion store — we’re a community that
            celebrates individuality, creativity, and authenticity.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            To deliver stylish, high-quality, and affordable fashion that makes
            our customers feel confident and inspired every day. We aim to
            create a seamless and enjoyable shopping experience while staying
            committed to exceptional service, ethical practices, and customer
            satisfaction.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Asssurance:</b>
          <p className="text-gray-600">
            We are committed to offering only the finest products, carefully
            selected and crafted to meet the highest standards. Every item at
            Sarah Collections goes through a thorough quality check to ensure
            you receive the best in style and durability.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Your shopping experience should be as effortless as your style. With
            easy navigation, secure payment options, and fast delivery, Sarah
            Collections ensures fashion is just a few clicks away.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team is here to assist you every step of the way. From styling
            advice to order support, we prioritize your satisfaction and are
            always ready to help with a friendly and professional touch.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
