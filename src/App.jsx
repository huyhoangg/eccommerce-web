import Header from "~/components/Header/Header";
import Content from "~/components/Content/Content";
import NewArrivals from "~/components/NewArrivals/NewArrivals";
import NewArrivalBanner from "~/components/NewArrivals/NewArrivalBanner";
import Blogs from "~/components/Blogs/Blogs";
import Footer from "~/components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Content />
      <NewArrivals />
      <NewArrivalBanner />
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
