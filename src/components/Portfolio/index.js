import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
          <div className="container portfolio-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'] }
                idx={15}
              />
            </h1>
            <div id="one">
            <h2>Bachelor of Technology - Computer Science</h2>
            <ul>
                <li>
                    <h3>PSIT College of Engineering, Kanpur (2019:2023)</h3>
                    <p>
                        I'm pursuing my Bachelor's in Computer Science. I'm very fascinated about
                        computer Technology that's why after droping my graduation in mid I start 
                        graduation in Computer Science. 
                    </p>
                </li>
            </ul>
            <h2>Central Board of Secondary Education</h2>
            <ul>
                <li>
                    <h3>Science with Computer (2014:2018)</h3>
                    <p>
                        I've Completed my Higher and Secondary Higher Education with 
                        CBSE board in Kanpur.
                        I had maintained a good CGPA Through my whole School Study.
                    </p>
                </li>
            </ul>
            </div>
        </div>
    </div>

           
    )
}


export default Portfolio