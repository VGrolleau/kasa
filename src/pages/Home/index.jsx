import '../../utils/styles/Home.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';

function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner />
      <Cards />
    </div>
  );
}

export default Home;
