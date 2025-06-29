import profilePic from '../assets/profile.jpeg' // Asegúrate de agregar una foto en assets/profile.jpg

const AboutMe = () => (
  <section className="about-me">
    <img src={profilePic} alt="Foto de la arquitecta" className="about-photo" />
    <div>
      <h2 className="text-3xl font-bold mb-4">Karen Delgado</h2>
      <p>
        Soy una arquitecta que cuenta con experiencia en la tramitación de expedientes ante la Dirección de Obras Municipales (DOM), modelación 3D y renderizado. Me apasiona la coordinación y modelación BIM, así como la creación de visualizaciones arquitectónicas de alto nivel. Me defino como una persona responsable, proactiva y con una fuerte orientación al trabajo colaborativo. Siempre estoy en búsqueda de nuevos desafíos que me permitan seguir aprendiendo y desarrollándome en el ámbito profesional.
      </p>
    </div>
  </section>
)

export default AboutMe