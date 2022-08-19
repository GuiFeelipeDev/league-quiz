import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

const Index = () => {
  return (
    <>
      <Header />
      <section className="about-section ">
        <h1>About</h1>
        <div className="about-container">
          <h2>About page</h2>
          <p>
            Firstly, the idea was to develop a website where the user will meet
            a random champion every time that refreshes the page.
          </p>
          <p>
            During the development I have the idea to add a Quiz, where the
            questions would be automatically generated with the info available
            in api documentation. The quiz's main idea is to generate logical
            questions that are possible to be answered, depending only on user
            knowledge.
          </p>
          <p>
            Finally, I got the idea to develop a page to show all the champions
            filtered by your tags, with the possibility to search for a specific
            champion. As the first idea has to work with randomness on the start
            page, the champion information on this page is limited.
          </p>
        </div>
        <div className="about-container">
          <h2>About development</h2>
          <p>
            That website has developed with the objective to be a study to be
            added to my web front-end developer portfolio. To test my skills I
            used non-profit, an API made available by Riot Games developer
            portal, can be reached by link&nbsp;
            <a href="https://developer.riotgames.com/docs/lol">
              https://developer.riotgames.com/docs/lol
            </a>
            . The used technology has:
          </p>

          <ul>
            <li>Figma</li>
            <li>React.js</li>
            <li>Html, css, Javascript</li>
            <li>Api by Riot Games</li>
            <li>Git & Github</li>
          </ul>
        </div>
        <div className="about-container">
          <h2>About me</h2>
          <p>
            I’m a Computer Science student from Mato Grosso University - Brazil.
            I started my front-end development studies with React.js in
            April/2022, I've always been interested in many areas of web
            development like prototype, canvas production and integration,
            therefore the idea to make this project by scratch.
          </p>
          <p>
            Professionally, I have acted in canvas productions and integration
            by the Mato Grosso University Innovation center (
            <a href="https://instagram.com/risc.unemat.br?igshid=YmMyMTA2M2Y=">
              risc
            </a>
            ) since April/2022, a project that has the objective to insert
            students on the market place.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Index
