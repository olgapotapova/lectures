import React, {useEffect, useState} from 'react';
import data from "./data";
import { styled } from "styled-components";
import FeedbackPattern from '../img/Feedback_pattern.png';
import Image from "./image";

// const FeedbackContainer = styled.section`    
//     width: 90vw;
//     margin: 5rem auto;
//     max-width: var(--max-width);  
//     @media screen and (min-width: 992px) {
//       width: 95vw;
//     }
// `;

const Header = styled.h2`
margin-top: 10vw;
    margin-bottom: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const SectionCenter  = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 400px;
    max-width: 1000px;
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

const ArticleContainer = styled.article`
    position: absolute;
    width: 100%;
    height: 100vw;
    background-image: url('${FeedbackPattern}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
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

// const SliderHeader = styled.h4`
//     text-transform: uppercase;
//     color: var(--clr-primary-5);
//     margin-bottom: 0.25rem;
// `;

// const Article = styled.article`
//     text-transform: uppercase;
//     color: var(--clr-primary-5);
//     margin-bottom: 0.25rem;
// `;

const SliderText = styled.p`
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 45vw;
    color: white;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
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
            <Header>Отзывы</Header>
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
                        <ArticleContainer className={position} key={id}>

                            <img src={face} alt={name} className='person-img' style={{  borderRadius: '50%',
                                marginTop: '90px',
                                marginBottom: '5vw',
                                width: '140px',
                                height: '140px',
                                objectFit: 'cover',
                                boxShadow: 'var(--dark-shadow)',
                                border: '3px solid black' }}/>
                            {/* <Image image={ FeedbackPattern } alt={FeedbackPattern} style={{ width: '100%' }} />  */}
                            {/* <h4>{name}</h4> */}
                            <SliderText className='text'>{quote}</SliderText>
                        </ArticleContainer>
                    );
                })}
            </SectionCenter>
        </section>
    );
};

export default Slider;