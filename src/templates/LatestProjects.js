import project1 from '../resource/img/index-html/projects-1.jpg';
import project2 from '../resource/img/index-html/projects-2.jpg';
import project3 from '../resource/img/index-html/projects-3.jpg';
import purpleCircle from '../resource/img/icons/arrow-up-icon.svg'
import {NavLink} from "react-router-dom";
import React from "react";


function LatestProjects(){
    return(
        <React.Fragment>
        <div className="content projects">
            <h2 className="projects-header">LATEST PROJECTS</h2>
            {/*<div className="projects-item">*/}
            {/*    <div className="flex-wrapper">*/}
            {/*        <img className="project-item__picture" src={project1} alt="project1"/>*/}
            {/*        <div className="project-item__content">*/}
            {/*            <div className="flex-wrapper project-item__info">*/}
            {/*                <span>RESIDENTIAL / HOME RENOVATIONS</span>*/}
            {/*                <span>2023</span>*/}
            {/*            </div>*/}
            {/*            <h3 className="project-item__header">Project name</h3>*/}
            {/*            <p className="project-item__description">*/}
            {/*                Experience the difference when you choose our services, where we place a premium on speed*/}
            {/*                and time efficiency. We recognize that our customers are eager to witness the transformative*/}
            {/*                results and invite friends and family to celebrate their upgraded homes. That’s why we*/}
            {/*                prioritize efficiency at every step of the project, ensuring you can enjoy the results sooner and*/}
            {/*                share the joy of your home’s transformation with loved ones.*/}
            {/*            </p>*/}
            {/*            <div className="project-item__seeMore">*/}
            {/*                <NavLink to="/projects/1">*/}
            {/*                    <span>See more</span>*/}
            {/*                    <img className="purpleCircule" src={purpleCircle} alt="linkToProject"/>*/}
            {/*                </NavLink>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="projects-item">
                <div className="flex-wrapper">
                    <div className="project-item__content">
                        <div className="flex-wrapper project-item__info">
                            <span>RESIDENTIAL / HOME RENOVATIONS</span>
                            <span>2023</span>
                        </div>
                        <h3 className="project-item__header">Residential Deck Construction</h3>
                        <p className="project-item__description">
                            This project involved the design and construction of a spacious deck that seamlessly
                            integrates with the natural surroundings. The client’s vision was to have a functional yet
                            aesthetically pleasing outdoor space that would serve as an extension of their home. Our team
                            worked closely with the client to ensure their budget was accommodated without
                            compromising on quality or design.
                        </p>
                        <div className="project-item__seeMore">
                            <NavLink to="/projects/2">
                                <span>See more</span>
                                <img className="purpleCircule" src={purpleCircle} alt="linkToProject"/>
                            </NavLink>
                        </div>
                    </div>
                    <img className="project-item__picture" src={project2} alt="project2"/>
                </div>
            </div>
            <div className="projects-item">
                <div className="flex-wrapper">
                    <img className="project-item__picture" src={project3} alt="project3"/>
                    <div className="project-item__content">
                        <div className="flex-wrapper project-item__info">
                            <span>RESIDENTIAL / HOME RENOVATIONS</span>
                            <span>2023</span>
                        </div>
                        <h3 className="project-item__header">Luxury New Build Home in Kohimarama, Auckland</h3>
                        <p className="project-item__description">
                            This prestigious new build home project began with a vision to create a residence that
                            harmonizes seamlessly with its surroundings while providing the utmost in luxury and
                            comfort. Our team meticulously executed this vision from the ground up, starting with the
                            construction of a solid concrete slab foundation.
                        </p>
                        <div className="project-item__seeMore">
                            <NavLink to="/projects/3">
                                <span>See more</span>
                                <img className="purpleCircule" src={purpleCircle} alt="linkToProject"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <button className="projects-all"><NavLink to="/projects">See all</NavLink></button>
        </div>
            <div className="content mobileProjects">
                <h2 className="projects-header">LATEST PROJECTS</h2>
                {/*<div className="projects-item">*/}
                {/*    <div className="flex-wrapper">*/}
                {/*        <div className="flex-wrapper project-item__info">*/}
                {/*            <span>RESIDENTIAL / HOME RENOVATIONS</span>*/}
                {/*            <span>2023</span>*/}
                {/*        </div>*/}
                {/*        <img className="project-item__picture" src={project1} alt="project1"/>*/}
                {/*        <div className="project-item__content">*/}
                {/*            <h3 className="project-item__header">Project name</h3>*/}
                {/*            <p className="project-item__description">*/}
                {/*                Experience the difference when you choose our services, where we place a premium on speed*/}
                {/*                and time efficiency. We recognize that our customers are eager to witness the transformative*/}
                {/*                results and invite friends and family to celebrate their upgraded homes. That’s why we*/}
                {/*                prioritize efficiency at every step of the project, ensuring you can enjoy the results sooner and*/}
                {/*                share the joy of your home’s transformation with loved ones.*/}
                {/*            </p>*/}
                {/*            <div className="project-item__seeMore">*/}
                {/*                <NavLink to="/projects/1">*/}
                {/*                    <span>See more</span>*/}
                {/*                    <img className="purpleCircule" src={purpleCircle} alt="linkToProject"/>*/}
                {/*                </NavLink>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="projects-item">
                    <div className="flex-wrapper">
                        <div className="project-item__content">
                            <div className="flex-wrapper project-item__info">
                                <span>RESIDENTIAL / HOME RENOVATIONS</span>
                                <span>2023</span>
                            </div>
                            <img className="project-item__picture" src={project2} alt="project2"/>
                            <h3 className="project-item__header">Residential Deck Construction</h3>
                            <p className="project-item__description">
                                This project involved the design and construction of a spacious deck that seamlessly
                                integrates with the natural surroundings. The client’s vision was to have a functional yet
                                aesthetically pleasing outdoor space that would serve as an extension of their home. Our team
                                worked closely with the client to ensure their budget was accommodated without
                                compromising on quality or design.
                            </p>
                            <div className="project-item__seeMore">
                                <NavLink to="/projects/2">
                                    <span>See more</span>
                                    <img className="purpleCircule" src={purpleCircle} alt="linkToProject"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="flex-wrapper">
                        <div className="flex-wrapper project-item__info">
                            <span>RESIDENTIAL / HOME RENOVATIONS</span>
                            <span>2023</span>
                        </div>
                        <img className="project-item__picture" src={project3} alt="project3"/>
                        <div className="project-item__content">
                            <h3 className="project-item__header">Luxury New Build Home in Kohimarama, Auckland</h3>
                            <p className="project-item__description">
                                This prestigious new build home project began with a vision to create a residence that
                                harmonizes seamlessly with its surroundings while providing the utmost in luxury and
                                comfort. Our team meticulously executed this vision from the ground up, starting with the
                                construction of a solid concrete slab foundation.
                            </p>
                            <div className="project-item__seeMore">
                                <NavLink to="/projects/3">
                                    <span>See more</span>
                                    <img className="purpleCircule" src={purpleCircle} alt="linkToProject"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LatestProjects