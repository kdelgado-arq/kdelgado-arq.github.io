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
    <h2 className="text-3xl font-bold mb-4">Tecnologías</h2>
    <ul>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  </section>
)

export default Technologies