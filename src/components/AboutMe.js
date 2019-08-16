import React from 'react'

const AboutMe = () => {
  return (
    <main id="aboutme">
      <img src={require('../assets/ss.jpg')} />
      <div className="aboutme-text">
        <h2>About Me</h2>
        <p>Hi! I'm a software engineer that is eager to grow in the field of software engineering. In my spare time I like to play chess, play piano, and practice poi.</p>
        <h2>Contact</h2>
        <p>Email: soren1338@gmail.com</p>
        <p>Github: <a href="https://github.com/sorensoroush">https://github.com/sorensoroush</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sorensoroush">https://www.linkedin.com/in/sorensoroush</a></p>
      </div>
    </main>
  )
}

export default AboutMe
