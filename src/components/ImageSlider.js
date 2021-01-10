import React, { useState, useEffect } from 'react';
import  SliderData from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  const [ people,setPeople] = useState(SliderData);
  const [index, setIndex] = React.useState(0)
  //const length = slides.length;
  
  const nextSlide = () => {
    //setCurrent(current === length - 1 ? 0 : current + 1);
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    //setCurrent(current === 0 ? length - 1 : current - 1);
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  };
  //console.log(current);

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  // //if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }
  return (
    <section className='slider'>
          <div className='section-center'>
              {people.map((person, personIndex) => {
                const { id, image, name } = person

                let position = 'nextSlide'
                if (personIndex === index) {
                  position = 'activeSlide'
                }
                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === people.length - 1)
                ) {
                  position = 'lastSlide'
                }

      // {SliderData.map((slide, index) => {
        return (
          <article className={position}  key={id}>
            <img src={image} alt={name} />
          </article>
        );
      })}
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      </div>
    </section>
  );
};
export default ImageSlider;
