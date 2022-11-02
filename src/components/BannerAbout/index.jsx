import '../../utils/styles/Banner.css'
import ImageBanner from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'

function BannerAbout() {
    return (
        <section className="banner banner-about" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url(${ImageBanner})`
        }}></section>
    )
}

export default BannerAbout