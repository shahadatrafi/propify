import Button1 from "../../Buttons/Button1";
import OutlineBtn from "../../Buttons/OutlineBtn";
import SubHeading from "../../SubHeading/SubHeading";
import HeroImg from "../../../images/Image.png";
import homeIcon from "../../../images/Group 118.png";
import rotateImg from "../../../images/Group 46.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { useLoaderData } from "react-router-dom";
import Properties from "../../Properties/Properties";

const Home = () => {

  const properties = useLoaderData();
  

  return (
    <>
      <section
        className="container flex justify-between mx-auto items-center gap-12 my-17
      "
      >
        <div className="w-1/2 relative">
          <img
            className="absolute -top-12 right-16 moveUpDown"
            src={homeIcon}
          />
          <img
            className="absolute scale-110 right-2 bottom-0 rotate"
            src={rotateImg}
          />
          <SubHeading text={"Property Solution For All"}></SubHeading>
          <h2 className="text-7xl uppercase font-semibold leading-20 mt-3 mb-7">
            Our best <br></br>
            <span className="font-extrabold text-orange-500 italic">
              real Estate
            </span>{" "}
            <br></br>Listings!
          </h2>
          <p className="w-3/4 text-[18px] text-gray-600 mb-9">
            Explore today's top real estate listings! Our expert team is ready
            to assist you in finding a home that suits your needs and financial
            plan.
          </p>
          <div className="flex gap-6 ">
            <Button1 to={"/#"} text={"Explore properties"}></Button1>
            <OutlineBtn to={"#"} text={"Watch A Demo"}></OutlineBtn>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            className="text-right w-full max-h-[610px] object-cover rounded-xl"
            src={HeroImg}
            alt=""
            srcSet=""
          />
        </div>
      </section>
      <section className="bg-orange-50 pt-28 pb-32">
        <div className="container mx-auto flex justify-between">
          <div className="w-2/3 pr-50">
            <SubHeading text={"Our Listing"} extraClass={"border-orange-500 bg-white"}></SubHeading>
            <SectionHeading title={"Exclusive Homes: Your dream awaits  today...!"} extraClass={"mt-8"}></SectionHeading>
          </div>
          <div className="w-1/3 self-end">
            <p className="text-xl mb-6">Explore unique homes designed for your dream life style and enjoy luxurious living today!</p>
            <Button1 to={"#"} text={"All Property"}></Button1>
          </div>
        </div>
        <div>
            <Properties properties={properties}></Properties>
        </div>
      </section>
    </>
  );
};

export default Home;
