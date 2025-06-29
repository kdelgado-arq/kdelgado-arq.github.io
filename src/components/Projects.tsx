import { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    name: 'Coordinacion BIM',
    description: '',
    image: 'src/assets/coordinacion_bim/0.png',
    gallery: [
      'src/assets/coordinacion_bim/1.png',
      'src/assets/coordinacion_bim/2.png',
      'src/assets/coordinacion_bim/3.png',
      'src/assets/coordinacion_bim/4.png',
    ],
  },
  {
    name: 'Serviteca León',
    description: '',
    image: 'src/assets/serviteca_leon/0.jpg',
    gallery: [
      'src/assets/serviteca_leon/1.jpg',
      'src/assets/serviteca_leon/2.jpg',
      'src/assets/serviteca_leon/3.jpg',
      'src/assets/serviteca_leon/4.jpg',
    ],
  },
  {
    name: 'Serviteca DERCO',
    description: '',
    image: 'src/assets/serviteca_derco/0.jpg',
    gallery: [
      'src/assets/serviteca_derco/1.jpg',
      'src/assets/serviteca_derco/2.jpg',
      'src/assets/serviteca_derco/3.jpg',
      'src/assets/serviteca_derco/4.jpg',
    ],
  },
  {
    name: 'Vivienda RB',
    description: '',
    image: 'src/assets/vivienda_rb/0.jpg',
    gallery: [
      'src/assets/vivienda_rb/1.jpg',
      'src/assets/vivienda_rb/2.jpg',
      'src/assets/vivienda_rb/3.jpg',
      'src/assets/vivienda_rb/4.jpg',
    ],
  },
]

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [activeImage, setActiveImage] = useState<number>(0)

  const handleOpen = (idx: number) => {
    setSelected(idx)
    setActiveImage(0) // reset to first image when opening modal
  }
  const handleClose = () => setSelected(null)

  return (
    <section className="projects">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
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
          image={projects[selected].gallery[activeImage]}
          name={projects[selected].name}
        >
          <div className="modal-gallery">
            {projects[selected].gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${projects[selected].name} ${i + 1}`}
                className={`modal-thumb${i === activeImage ? ' active' : ''}`}
                onClick={() => setActiveImage(i)}
                style={{ cursor: 'pointer', border: i === activeImage ? '2px solid #333' : 'none' }}
              />
            ))}
          </div>
          <p>{projects[selected].description}</p>
        </ProjectModal>
      )}
    </section>
  )
}

export default Projects