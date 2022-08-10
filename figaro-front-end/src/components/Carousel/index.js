import { 
    Container,
    Arrow, 
    CarouselWrapper, 
    SlideContainer, 
    Img,
    ImgContainer, 
    InfoContainer,
    SlideTitle,
    SlideDesc,
    SlideBtn} from './Carousel.styles';
import { carouselItems } from '../../data'  
import React, { useState } from 'react';
import { ArrowBackRounded, ArrowForwardRounded } from '@material-ui/icons';

const Carousel = () => {
  //state for tracking the scrolling of carousel slides index
  const [carouselIndex, setCarouselIndex] = useState(0)


  const handleClick = (direction) => {

    if(direction === "left") {
      //if left arrow clicked + index of slide is greater than 0, subtract 1 from index. else make index final slide
      setCarouselIndex(carouselIndex > 0 ? carouselIndex - 1 : 3);
    } else {
      //if right arrow clicked + index of slide is less than 0, add 1 to the index. else make index first slide
      setCarouselIndex(carouselIndex < 3 ? carouselIndex + 1 : 0);
    }
  }
  return (
    <Container>
        <Arrow
          direction="left"
          onClick={()=>handleClick("left")}
        >
            <ArrowBackRounded />
        </Arrow>
        {/* imported carouselItems as array of objects to map through to create the different slides */}
        <CarouselWrapper carouselIndex={carouselIndex}>
          {carouselItems.map((item) => (
            <SlideContainer key={item.id}>
              <ImgContainer>
                <Img src={item.img}/>
              </ImgContainer>         
              <InfoContainer>
                <SlideTitle>
                  {item.title}
                </SlideTitle>
                <SlideDesc>
                  {item.desc}
                </SlideDesc>
                <SlideBtn>
                  shop now
                </SlideBtn>
              </InfoContainer>
            </SlideContainer>
          ))}  

            
        </CarouselWrapper>
        <Arrow
          direction="right"
          onClick={()=>handleClick("right")}
        >
            <ArrowForwardRounded />
        </Arrow>
    </Container>
  )
}

export default Carousel;