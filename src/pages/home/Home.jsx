
import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
// import Loader from '../../components/loader/Loader';



const Home = () => {

    
    const cartItem = useSelector((state) => state.cart)
    console.log(cartItem)

    

    return (

        <Layout>
            

            <HeroSection></HeroSection>
            <Filter></Filter>
            <ProductCard />
            <div className="flex justify-center -mt-10 mb-4">
                <Link to={'/allproducts'}>
                    <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
                </Link>
            </div>
            <Track></Track>
            <Testimonial></Testimonial>
            

        </Layout>
        

    );
};

export default Home;