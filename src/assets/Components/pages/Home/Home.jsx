import Button1 from "../../Buttons/Button1";
import OutlineBtn from "../../Buttons/OutlineBtn";
import SubHeading from "../../SubHeading/SubHeading";
import HeroImg from "../../../images/Image.png"

const Home = () => {
  return (
    <>
      <section className="container flex justify-between mx-auto items-center gap-12 my-20">
        <div className="w-1/2">
          <SubHeading text={"Property Solution For All"}></SubHeading>
          <h2 className="text-7xl uppercase font-semibold leading-20 mt-3 mb-7">
            Our best <br></br><span className="font-extrabold text-orange-500 italic">real Estate</span> <br></br>Listings!
          </h2>
          <p className="w-3/4 text-[18px] text-gray-600 mb-9" >
            Explore today's top real estate listings! Our expert team is ready
            to assist you in finding a home that suits your needs and financial
            plan.
          </p>
          <div className="flex gap-6 ">
            <Button1 to={"/#"} text={"Explore properties"}></Button1>
            <OutlineBtn to= {"#"} text={"Watch A Demo"}></OutlineBtn>
          </div>
        </div>
        <div className="w-1/2 ">

            <img className="text-right w-full max-h-[610px] object-cover" src={HeroImg} alt="" srcSet="" />

        </div>
      </section>
    </>
  );
};

export default Home;
