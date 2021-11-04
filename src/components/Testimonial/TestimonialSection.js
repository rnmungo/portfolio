import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import SectionContent from '../SectionContent';
import Testimonial from './Testimonial';
import img1 from '../../assets/img/testimonial1.jpg';
import img2 from '../../assets/img/testimonial2.jpg';
import img3 from '../../assets/img/testimonial3.jpg';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination]);

const TestimonialSection = () => {
  return (
    <Section className="testimonial">
      <SectionTitle>Testimonios</SectionTitle>
      <SectionSubtitle>Mis clientes dicen</SectionSubtitle>
      <SectionContent className="testimonial__container container">
        <Swiper
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            568: {
              slidesPerView: 2,
            }
          }}
          slidesPerView={1}
          spaceBetween={48}
        >
          <SwiperSlide>
            <Testimonial
              name="Sara Smith"
              role="Client"
              description="I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."
              image={img1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name="Matt Robinson"
              role="Client"
              description="I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."
              image={img2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name="Raul Harris"
              role="Client"
              description="I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."
              image={img3}
            />
          </SwiperSlide>
          <div className="swiper-pagination swiper-pagination-testimonial"></div>
        </Swiper>
      </SectionContent>
    </Section>
  );
};

export default TestimonialSection;
