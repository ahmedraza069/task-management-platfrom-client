import Banner from "../Banner/Banner";
import ServicesCard from "../../../components/ServicesCard/ServicesCard";
import Benifits from "../Benifits/Benifits";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Management | Home</title>
      </Helmet>
      <Banner></Banner>
      <Benifits></Benifits>
      <ServicesCard></ServicesCard>
    </div>
  );
};

export default Home;
