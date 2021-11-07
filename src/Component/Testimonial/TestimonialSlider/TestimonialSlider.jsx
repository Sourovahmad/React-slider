import React, { useEffect, useState } from "react";
import  {TestimonialData} from "../TestimonialData";
import "./TestimonialSlider.css";


const TestimonialSlider = () => {


    useEffect(() => {

        const FirstItem = TestimonialData.find(data => data.id === 1);
        setcurrentContent(FirstItem);
       
    }, []);

    const [currentContent, setcurrentContent] = useState({});


    const ClickButtonHandleer = (order) =>{

        let currentElent = 0;
        if(order == 1){
            currentElent = currentContent.id - 1;
        }else{
            currentElent = currentContent.id + 1;
        }

        const NewElement = TestimonialData.find(data => data.id ===  currentElent);
        console.log(NewElement);
        //  setcurrentContent(NewElement);
    }


  return (
    <>
      <div className="testimonial_box">

          <div onClick={()=> ClickButtonHandleer(0)} className="prev_button">
            <span>
              <i class="fas fa-arrow-left"></i>
            </span>
          </div>

          <div onClick={()=> ClickButtonHandleer(1)} className="nex_button">
            <span>
              <i class="fas fa-arrow-right"></i>
            </span>
          </div>

          <div className="slider_content_section">
              <div className="slider_text_Section m-4 p-3">
                  <p>
                    {
                        currentContent.text
                    }
                  </p>
              </div>

              <div className="slider_client_title">
                  <h4>
                      JHON DEO
                  </h4>

                <h5> UI/UX Desginer</h5>
              </div>


              <div className="slider_image_section">
              <img src={currentContent.image} alt="" />
              </div>
          </div>


      </div>
    </>
  );
};

export default TestimonialSlider;
