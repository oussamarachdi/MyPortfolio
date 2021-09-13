import React from 'react'


const Project = (props) => {
    const {id, title, img, description, url} = props
    return (
                <div className="card-item"  key={id}>
                    <h5 className="card-title">{title}</h5>
            <div className="item-body">
                {/* <img src={img} alt="..."/> */}
                <p>{description}</p>
                <a href={url} className="card-btn">See The Project</a>
            </div>
        </div>
        
    )
}

export default Project
