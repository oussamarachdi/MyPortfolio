import React from 'react'
import Project from './Project'
import {data } from './data'

const Projects = () => {
    return (
        <>
            <section className="grid">
                <div className="header">
                    <h3>These are my projects</h3>
                </div>
                <div className="cards-row">
                    {
                        data.map((project) => {
                            return <Project  
                            key={project.id}
                            title={project.title}
                            img={project.img}
                            description={project.desription}
                            url={project.url}/>
                        })
        }
                </div>
        </section>
        </>
        
        
                
    )
}

export default Projects
