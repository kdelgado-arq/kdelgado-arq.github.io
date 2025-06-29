const technologies = [
  'AutoCAD',
  'Revit',
  'SketchUp',
  'Lumion',
  'V-Ray',
  'Photoshop',
]

const Technologies = () => (
  <section className="technologies">
    <h2>Tecnologías</h2>
    <ul>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  </section>
)

export default Technologies