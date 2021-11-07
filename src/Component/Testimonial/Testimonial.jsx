import React from 'react';
import './Testimonial.css'
import TestimonialHeader from './TestimonialHeader/TestimonialHeader';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
    return (
        <>
            <section className="testomonial_section">
                   <div className="container">
                       <div className="mb-2">
                       <TestimonialHeader></TestimonialHeader>
                       </div>
                      

                      <div className="testimonial_box_Section">
                            <TestimonialSlider></TestimonialSlider>
                      </div>
                   </div>
            </section>
        </>
    );
};

export default Testimonial;