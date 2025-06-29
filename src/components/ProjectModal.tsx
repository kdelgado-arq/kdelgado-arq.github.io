import type { ReactNode } from 'react'

type ProjectModalProps = {
  open: boolean
  onClose: () => void
  image: string
  name: string
  children: ReactNode
}

const ProjectModal = ({ open, onClose, image, name, children }: ProjectModalProps) => {
  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt={name} className="modal-image" />
        <h3>{name}</h3>
        <div>{children}</div>
        <button className="modal-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default ProjectModal