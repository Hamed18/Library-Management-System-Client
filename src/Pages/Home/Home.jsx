import Banner from "../../Shared/Banner";
import h from "../../../src/assets/Images/history1.jpg";
import t from "../../../src/assets/Images/t-1.jpeg";
import c from "../../../src/assets/Images/a-1.jpeg";
import b from "../../../src/assets/Images/b-1.jpg";
import Category from "./Category";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <h3 className="text-center font-bold text-3xl mt-12 mb-8">
        Featured Category
      </h3>
      <Category></Category>
    </div>
  );
};

export default Home;
