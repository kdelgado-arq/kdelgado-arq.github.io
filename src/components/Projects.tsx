import { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    name: 'Casa Moderna',
    description: 'Diseño de una casa moderna con espacios abiertos.',
    image: '/assets/casa-moderna.jpg',
    gallery: ['/assets/casa-moderna.jpg', '/assets/casa-moderna-2.jpg'],
  },
  {
    name: 'Edificio Comercial',
    description: 'Proyecto de un edificio comercial de 5 pisos.',
    image: '/assets/edificio-comercial.jpg',
    gallery: ['/assets/edificio-comercial.jpg', '/assets/edificio-comercial-2.jpg'],
  },
  {
    name: 'Parque Urbano',
    description: 'Diseño de un parque urbano con áreas recreativas.',
    image: '/assets/parque-urbano.jpg',
    gallery: ['/assets/parque-urbano.jpg', '/assets/parque-urbano-2.jpg'],
  },
]

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const handleOpen = (idx: number) => setSelected(idx)
  const handleClose = () => setSelected(null)

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div key={project.name} className="project-card" onClick={() => handleOpen(idx)}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selected !== null && (
        <ProjectModal
          open={selected !== null}
          onClose={handleClose}
          image={projects[selected].gallery[0]}
          name={projects[selected].name}
        >
          <div className="modal-gallery">
            {projects[selected].gallery.map((img, i) => (
              <img key={i} src={img} alt={`${projects[selected].name} ${i + 1}`} className="modal-thumb" />
            ))}
          </div>
          <p>{projects[selected].description}</p>
        </ProjectModal>
      )}
    </section>
  )
}

export default Projects