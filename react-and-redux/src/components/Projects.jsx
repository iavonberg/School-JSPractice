import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <p>Pick a project to view!</p>
            <ul>
                <li>
                    <Link to = {"../game_project"}>Game Project</Link>
                </li>
                <li>
                    <Link to = {"../react_project"}>React Projects</Link>
                </li>
                <li>
                    <Link to = {"../database_project"}>Database Projects</Link>
                </li>
                <li>
                    <Link to = {"../machine_learning_project"}>Machine Learning Project</Link>
                </li>
            </ul>
        </div>
    );   
};

export default Projects;