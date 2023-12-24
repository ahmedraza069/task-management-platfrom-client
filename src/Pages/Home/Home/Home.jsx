import Banner from "../Banner/Banner";
import ServicesCard from '../../../components/ServicesCard/ServicesCard'
import Benifits from "../Benifits/Benifits";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Benifits></Benifits>
            <ServicesCard></ServicesCard>
        </div>
    );
};

export default Home;