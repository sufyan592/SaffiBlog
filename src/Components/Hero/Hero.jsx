import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero-slides">
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          slidesPerGroup={1}
          loop={true}
          navigation={true}
        >
          <SwiperSlide
            style={{
              backgroundImage: "url(images/hero.jpg)",
            }}
          >
            <div className="slides-content">
              <h6>Trending Sale</h6>
              <h2>Best Selling Products in the World</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                architecto autem porro quo laudantium a ab quidem maxime odit
                impedit dignissimos minima voluptas ipsa numquam nulla
                voluptatem, error repudiandae qui voluptate cumque ducimus
                adipisci, atque accusamus? Maiores obcaecati animi inventore?
              </p>
              <Link className="btn-primary" to="/shop">
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url(images/images2.jpg)" }}>
            <div className="slides-content">
              <h6>Trending Sale</h6>
              <h2>Best Selling Products in the World</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                architecto autem porro quo laudantium a ab quidem maxime odit
                impedit dignissimos minima voluptas ipsa numquam nulla
                voluptatem, error repudiandae qui voluptate cumque ducimus
                adipisci, atque accusamus? Maiores obcaecati animi inventore?
              </p>
              <Link className="btn-primary" to="/shop">
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url(images/images3.jpg)" }}>
            <div className="slides-content">
              <h6>Trending Sale</h6>
              <h2>Best Selling Products in the World</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                architecto autem porro quo laudantium a ab quidem maxime odit
                impedit dignissimos minima voluptas ipsa numquam nulla
                voluptatem, error repudiandae qui voluptate cumque ducimus
                adipisci, atque accusamus? Maiores obcaecati animi inventore?
              </p>
              <Link className="btn-primary" to="/shop">
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
