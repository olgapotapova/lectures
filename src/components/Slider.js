import React, {useEffect, useState} from 'react';
import data from "./data";
import { styled } from "styled-components";

const FeedbackContainer = styled.section`
    
    width: 90vw;
    margin: 5rem auto;
    max-width: var(--max-width)
  
  @media screen and (min-width: 992px) {
      width: 95vw;
    }
`;

const Header = styled.h2`
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const SectionCenter  = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
`;

const PersonImg = styled.div`
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid var(--clr-grey-8);
    box-shadow: var(--dark-shadow);
`;

const Article = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
`;


// const activeSlide = styled.activeSlide `
//     opacity: 1;
//     transform: translateX(0);
//   `;
//   const lastSlide = styled.lastSlide `
//     transform: translateX(-100%);
//   `;
//   const nextSlide = styled.nextSlide `
//     transform: translateX(100%);
//   `;

const SliderHeader = styled.h4`
    text-transform: uppercase;
    color: var(--clr-primary-5);
    margin-bottom: 0.25rem;
`;

const SliderText = styled.p`
    // max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
    // @media (min-width: 800px) {
    // max-width: 45em;
    }
`;



const Slider = () => {
    const [people, setPeople] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, people]);

    useEffect(() => {
        let slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 5000);
        return () => clearInterval(slider);
    }, [currentIndex]);

    return (
        <section className='section'>
            <h2>Отзывы</h2>
            {/* <div className='title'>
                <h2>
                    <span>/</span>reviews
                </h2>
            </div> */}
            <SectionCenter className='section-center'>
                {people.map((person, personIndex) => {
                    const { id, face, name, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === currentIndex) {
                        position = 'activeSlide';
                    }

                    if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>

                            <img src={face} alt={name} className='person-img' style={{  borderRadius: '50%',
                                marginBottom: '1remm',
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                boxShadow: 'var(--dark-shadow)' }}/>

                            {/* <h4>{name}</h4> */}
                            <p className='text'>{quote}</p>
                        </article>
                    );
                })}
            </SectionCenter>
        </section>
    );
};

export default Slider;