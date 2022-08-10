//CAROUSEL IMAGES
import CarouselImg1 from './assets/carousel-img1.jpg';
import CarouselImg2 from './assets/carousel-img2.jpg';
import CarouselImg3 from './assets/carousel-img3.jpg';
import CarouselImg4 from './assets/carousel-img4.jpg';

// CATEGORIES SECTION IMAGES
import HatImg from './assets/categoryImgs/hat category.jpg';
import TshirtImg from './assets/categoryImgs/tshirt category.jpg';
import PantsImg from './assets/categoryImgs/pants category.jpg';
import SneakerImg from './assets/categoryImgs/sneaker category.jpg';

//POPULAR PRODUCTS SECTION IMAGES

import PopularHat from './assets/popularProducts/hats1.webp';
import PopularPants from './assets/popularProducts/pants1.webp';
import PopularSneakers from './assets/popularProducts/sneakers1.webp';
import PopularTshirt from './assets/popularProducts/t-shirt1.webp';

export const carouselItems = [
    {
        id: 1,
        img: CarouselImg1,
        title: "stylish winter jackets",
        desc: "don't miss out on our new range of designer jackets",
        
    },
    {
        id: 2,
        img: CarouselImg2,
        title: "denim deals",
        desc: "save up to 25% on our latest designer jeans",
        
    },
    {
        id: 3,
        img: CarouselImg3,
        title: "hottest sneakers",
        desc: "shop the most in-demand men's sneakers",
        
    },
    {
        id: 4,
        img: CarouselImg4,
        title: "curated designer brands",
        desc: "we have the finest selection of men's designers to keep you in style",
        
    },
]

export const productCategories = [
    {
        id: 1,
        title: "hats",
        img: HatImg,
        categ: "hats"
    },
    {
        id: 2,
        title: "t-shirts",
        img: TshirtImg,
        categ: "tshirts"
    },
    {
        id: 3,
        title: "pants",
        img: PantsImg,
        categ: "pants"
    },
    {
        id: 4,
        title: "sneakers",
        img: SneakerImg,
        categ: "sneakers"
    },
]

export const popularProducts = [
    {
        id: 1,
        img: PopularHat
    },
    {
        id: 2,
        img: PopularPants
    },
    {
        id: 3,
        img: PopularSneakers
    },
    {
        id: 4,
        img: PopularTshirt
    },
]