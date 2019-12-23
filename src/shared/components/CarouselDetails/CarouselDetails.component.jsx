import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carouselDetails.component.css'

const CarouselDetailsComponent = ({images}) => {
    return (
				<Carousel 
					className ="carousel-body"
					infiniteLoop= {true} 
					autoPlay
					interval={5000}
					width={'50vw'}
				>
					
            {images.map(image=>{
                return(
									<div>
                    <img src={image.url} alt="carousel-items"/>
                </div>
								)
            })}
			
        </Carousel>
    )
}

export default CarouselDetailsComponent;