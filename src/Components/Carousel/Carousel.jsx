import React from 'react'
import 'tw-elements';
import certification from '../../data/Certification';

const Carousel = () => {

    

    return (
        <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative w-[60rem]"
            data-bs-ride="carousel"
        >
            
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="1"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="2"
                    aria-label="Slide 1"
                ></button>
            </div>

            
            <div class="carousel-inner relative w-full overflow-hidden">
                
                <div class="carousel-item active relative float-left w-full">
                    <img
                        src={certification[0].img}
                        class="block  object-cover"
                        alt=""
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                
                <div class="carousel-item relative float-left w-full">
                    <img
                        src={certification[1].img}
                        class="block object-cover "
                        alt="Mountaintop"
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                
                <div class="carousel-item relative float-left w-full">
                    <img
                        src={certification[2].img}
                        class="block w-full"
                        alt="Woman Reading a Book"
                    />
                    <div class="carousel-caption hidden md:block absolute text-center top-0">
                        <h5 class="text-5xl text-white">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    
                </div>
            </div>
            
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel