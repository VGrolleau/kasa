import '../../utils/styles/Home.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
