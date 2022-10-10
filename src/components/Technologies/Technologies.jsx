import React from 'react'
import './Technologies.css'

const Technologies = () => {
  return (
    <section id='technologies'>
        <h5>What can I do?</h5>
        <h2>Languages and technologies</h2>
        <div className='container technologies_container'>
          <div className='technologies_frontend'>
              <h3>Frontend Development</h3>
              <div className='technologies_content'>
                <article className='technology_detail'>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='technology_detail'>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>D3</h4>
                    <small className='text-light'>Basic</small>
                </article>
              </div>
          </div>
          <div className='technologies_backend'>
            <h3>Backend Development</h3>
            <div className='technologies_content'>
                <article className='technology_detail'>
                    <h4>Node.JS</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>Express</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>MySQL</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='technology_detail'>
                    <h4>MongoDB</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Technologies