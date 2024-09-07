import Banner from "../../Shared/Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
	  <Banner></Banner>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              Welcome to{" "}
              <span className="font-bold text-green-600">Library Hub</span>,
              where we are dedicated to making library management easier and
              more efficient. Our mission is to provide a comprehensive,
              user-friendly system that helps libraries manage their collections
              and serve their communities better.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                We strive to enhance the accessibility and organization of
                library resources through innovative technology. Our system
                simplifies cataloging, tracking, and borrowing, ensuring that
                libraries can focus on what matters most—their patrons.
              </p>
            </div>

            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Our vision is to be the leading provider of library management
                solutions, continually improving and adapting to the needs of
                libraries worldwide. We aim to foster a love of reading and
                learning by making library management seamless and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h3 className="text-center font-bold text-3xl mt-12 mb-8">Featured Category</h3>
      <Category></Category>
    </div>
  );
};

export default Home;
