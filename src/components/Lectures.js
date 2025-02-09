import React from 'react';
import Lecture from './Lecture';
import Lecture_image1 from '../img/Lecture_image1.png';
import Lecture_image2 from '../img/Lecture_image2.png';
import Lecture_image3 from '../img/Lecture_image3.png';
import Big_bird from '../img/Big_bird.svg';

class Lectures extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lectures: [
                {
                    id: 1,
                    img: Big_bird,
                    header: 'Музыкальные салоны Парижа',
                    description: '',
                    src: Lecture_image1
                },
                {
                    id: 2,
                    img: Big_bird,
                    header: 'Эпоха Belle Époque в музыке и мужская мода',
                    description: '',
                    src: Lecture_image2
                },
                {
                    id: 3,
                    img: Big_bird,
                    header: 'Женщины - композиторы Belle Epoque',
                    description: '',
                    src: Lecture_image3
                }
            ]
        }
    }
    render(){
        if(this.state.lectures.length > 0)
      return(
        // <div>
        //     {this.state.lectures.map((el) => (<div className='lecture' key={el.id}>
        //         <h3>{el.header}</h3>
        //         <p>{el.description}</p>
        //         <Image>{el.img}</Image>
        //     </div>))}
        // </div>
        <div>
        {/* {this.state.lectures.map((el) => (
            <Lecture key={el.id} lecture={el} />
            ))} */}
                   {this.state.lectures.map(lecture => (
                 <div>  
            <Lecture key={lecture.id} header= { lecture.header } src={ lecture.src } img={ lecture.img } />
            
            {/* <Image key={lecture.id}  image={lecture.src} /> */}
            </div> 
            ))}
            {/* {this.state.lectures.map(lecture => (
            <Image key={lecture.id} src={ lecture.src } />
            
            ))} */}
            {/* <a href="https://example.com" target="_blank" rel="noreferrer noopener" /> */}
            
    </div>
      )
      else 
      return(
        <Lecture  className='lecture'>
            <h3>Лекций нет</h3>
        </Lecture>
      )
    }
  }

  export default Lectures 