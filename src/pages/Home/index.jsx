import '../../utils/styles/Home.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { useEffect } from "react"

function Home() {
  useEffect(() => { document.title = "Kasa - Accueil" })
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
