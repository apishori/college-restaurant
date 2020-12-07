import React from 'react'

import ownerImg from '../static/img/elon.jpg';

function About() {
    return (
        <main className="main m-auto about">
            <h2>About Uniwhich: The Next Big Thing</h2>
            <div className="container-flex ">
                <img className="about-image" src={ownerImg} alt="owner"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, sem non aliquam lobortis, enim mauris vulputate sem, nec iaculis quam nisl non ante. 
                    In eu convallis nunc. Proin porta imperdiet arcu a viverra. Ut eu vulputate nulla, ac dignissim neque. Integer diam nisl, rhoncus non vulputate at, bibendum ac neque. 
                    Proin maximus ante eget rhoncus facilisis. Etiam non volutpat metus, a rhoncus nisi. Morbi sagittis turpis ac arcu pharetra, suscipit sodales lorem volutpat. 
                    Sed maximus ligula vitae nulla pretium, at porta augue vulputate. Donec molestie tellus sit amet erat commodo imperdiet.
                </p>
            </div>
            <p>
                Duis et dui vitae felis fermentum auctor. Maecenas blandit lobortis dolor, placerat feugiat risus euismod vitae. Curabitur interdum sollicitudin libero et porttitor. 
                Praesent pellentesque tincidunt ante. Curabitur a lobortis risus. Nullam semper ultricies posuere. Nam euismod libero vitae est fringilla, sed tempor orci tristique. 
                In efficitur, dolor ut pretium vehicula, elit tortor dapibus nisi, eu aliquet nulla nisl eget ligula.
            </p>
        </main>
    )
}

export default About;