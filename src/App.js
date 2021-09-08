import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return(
          <>
            <nav class="sticky-top navbar-light bg-light h-25">
              <div class="d-flex justify-content-center">
                <div class='mt-2 text-center'>
                    <img src='https://i.imgur.com/avKGbEu.jpg' alt="Danish Virani Picture" class='rounded-circle h-10 mx-auto mb-1'/>
                    <h3>Danish Virani</h3>
                    <p>Full-Stack Software Engineer</p>
                    <p>danishvirani.tech@gmail.com</p>
                </div>
                  <img src="https://lh3.googleusercontent.com/proxy/N7d4loAKThoZsHSyP8dciZ4JsFLibNa2nyFSzZ23zew0vT5M1q86dasndwM9Wvmmeuq_j30s9cLaO54OGJpVEMed4vyeSkLJh6_dD_YfMOWvrLlPGKpXr0pwx5uJttF67gIo0-4ism1bReIT6Q" alt='line' class="h-20 mt-3"/>
                  <div class='mt-3 d-flex flex-column text-center'>
                  <a href="https://www.linkedin.com/in/danishvirani/"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt='linkdin' class='h-5'/></a>
                  <a href="https://github.com/danishvirani"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png" alt='linkdin' class='h-5 mt-4'/></a><br/>
                  <a href="https://docs.google.com/document/d/1H-1_SJJRwMBqpt-21vzW4se1xyysSL_VAWQdX5nYGlM/edit?usp=sharing">Resume</a>
                  </div>

              </div>
            </nav>
            <div class="aboutMe">
            <br/>
            <div class=' w-75 mx-auto py-3'>
            <div class='card-header aboutMeHeader'>
            <h3 class="text-center">About Me</h3>
            </div>
            <div class='aboutMeBody'>
            <br/>
            <p>I'm naturally curious and love tackling complex problems. My extensive experience in management has honed my leadership and conflict resolution skills. I've been passionate about technology since I dissembled my first computer at 10 and managed to fix what the technician could not. As software became more prevalent, I started developing curiosity and a passion for computer programming. I want to use my skills in program solving, along with my passion for technology to assist people using the endless functionality of computer programming. I love serving people and the community around me. Community engagement is very important to me. I love making an impact on people's lives through my work potentially a service that uses technology to assist daily issues.</p>
            </div>
            </div>
            </div>
            <div class="languages mx-auto text-center">
            <br/>
            <h3 class='bg-dark text-white py-2 w-75 mx-auto my-0'>Languages:</h3>
            <br/>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-ruby-plain-wordmark colored"></i>
            <br/><br/>
            <div class="d-flex flex-row justify-content-evenly">
              <div class="card w-25">
                <div class="card-header">
                Backend
                </div>
                <div class="card-body">
                  <i class="devicon-django-line-wordmark colored"></i>
                  <i class="devicon-express-original-wordmark colored"></i>
                  <i class="devicon-mongodb-plain-wordmark colored"></i>
                  <i class="devicon-postgresql-plain-wordmark colored"></i>
                  <i class="devicon-rails-plain-wordmark colored"></i>
                </div>
              </div>
              <div class="card w-25">
                <div class="card-header">
                Frontend
                </div>
                <div class="card-body">
                  <i class="devicon-jquery-plain-wordmark colored"></i>
                  <i class="devicon-nodejs-plain-wordmark colored"></i>
                  <i class="devicon-react-original-wordmark colored"></i>
                  <i class="devicon-vuejs-plain-wordmark colored"></i>
                </div>
              </div>
              <div class="card w-25">
                <div class="card-header">
                CSS Frameworks
                </div>
                <div class="card-body">
                  <i class="devicon-bootstrap-plain-wordmark colored"></i>
                  <i class="devicon-materialui-plain colored"></i>
                  <i class="devicon-sass-original colored"></i>
                  <i class="devicon-tailwindcss-original-wordmark colored"></i>
                </div>
              </div>
            </div>
            </div>
            <div class="projects mx-auto text-center">
            <br/><br/>
            <h3 class='bg-dark text-white py-2 w-75 mx-auto my-0'>Applications:</h3>
            <br/><br/>
            <div class="d-flex flex-row flex-wrap mx-5 justify-content-evenly">
              <div class="card w-33 mx-1 my-5">
                <div class="card-header">
                Movie Mania
                </div>
                <div class="card-body">
                  <a href="https://vuemoviemania.herokuapp.com/"><img class='w-100' src="https://i.imgur.com/JHHuvYM.png" alt="Movie Mania App" /></a>
                </div>
                <div class="card-footer">
                <p><b>Technologies Used: </b>Ruby on Rails || Postgres SQL || Vue 3 || Tailwind CSS || Material UI</p>
                <p>Movie Mania is an application that uses a Ruby on Rails backend for user authentication and JWT. It also utilizes additional APIs including Google Maps to allow a user to search for a movie, showtimes near their location, or the closests movie theaters to their location.</p>
                </div>
              </div>
              <div class="card w-33 mx-1 my-5">
                <div class="card-header">
                DnDateMe
                </div>
                <div class="card-body">
                  <a href="https://dndateme.herokuapp.com/"><img class='w-100' src="https://i.imgur.com/bArpz5z.png" alt="DnDateMe App" /></a>
                </div>
                <div class="card-footer">
                <p><b>Technologies Used:</b> MERN stack || Express || React || Node.js || MVC || MongoDB Atlas || Bootstrap</p>
                <p>DnDateMe is a dating App were users are able to meet and play in groups with fellow DnD fans. Users are able to: Create/Edit/Delete Accounts, View Other User Accounts & Add Them as Friends, Manage Friend Requests, Send & Receive Private Messages with Friends, Create and Join Groups</p>
                </div>
              </div>
              <div class="card w-33 mx-1 my-5">
                <div class="card-header">
                  Art Marketplace
                </div>
                <div class="card-body">
                  <a href="https://art-marketplace.herokuapp.com/"><img class='w-100' src="https://i.imgur.com/9seepQF.png" alt="Art Marketplace App" /></a>
                </div>
                <div class="card-footer">
                <p><b>Technologies Used:</b>Python || Django || Postgres SQL || React || JavaScript || Bootstrap</p>
                <p>A marketplace app where Users/Artists can sell and buy their art pieces. User should be able to add Art Pieces / Artists, Edit Art Pieces / Artists Delete Art Pieces, Filter through the Artwork using filter by Artists, Users should be able to adjust Art ratings, Users should be able to sign-up and login, Users can add Artwork to their shopping cart and it would display the total, Artwork can be removed from cart or bought, then removed from database, User should be able to navigate through the app using navigational tabs at the Navbar</p>
                </div>
              </div>
              <div class="card w-33 mx-1 my-5">
                <div class="card-header">
                  Shared Experiences
                </div>
                <div class="card-body">
                  <a href="https://shared-experiences-app.herokuapp.com/main/"><img class='w-100' src="https://i.imgur.com/CaDMpXq.png" alt="Shared Experiences App" /></a>
                </div>
                <div class="card-footer">
                <p><b>Technologies Used:</b> Express || MVC || Node.Js || HTML || EJS || BootStrap || MongoDB Atlas</p>
                <p>Shared Experiences is meant to be an app where users can share experiences through image posts. The design goal was to incorporate as much functionality and control to the user as possible. Users are able to create a profile with a profile image and Interests, view posts from other users, filter post made by them and access to edit and delete post, users can like/unlike and comment on post - one-to-many relationship database, relationships were used to increase functionality, curated list is provided to the user based on the interests provided during sign-up or upon editing profile.</p>
                </div>
              </div>
              <div class="card w-33 mx-1 my-5">
                <div class="card-header">
                Books App
                </div>
                <div class="card-body">
                  <a href="https://vigorous-gates-cf29fd.netlify.app/"><img class='w-100' src="https://i.imgur.com/9UeSYlb.png" alt="Books App" /></a>
                </div>
                <div class="card-footer">
                <p><b>Technologies Used: </b>JavaScript || JQuery || AJAX</p>
                <p>Utilized a 3rd party API using AJAX requests to allow a user to search for a book or article within certain keywords or parameters. Incorporated local storage to allow the user to store favorite books and used another API to create a trivia built ground-up using JavaScript.</p>
                </div>
              </div>
            </div>
            </div>
          </>
      )
}

export default App;
