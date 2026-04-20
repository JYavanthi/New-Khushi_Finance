import { useEffect } from 'react'

const WHATSAPP_NUMBER = '9739871634'
const PHONE_NUMBER = '9739871634'

interface ContactPopupProps {
  show: boolean
  onClose: () => void
}

function ContactPopup({ show, onClose }: ContactPopupProps) {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [show])

  const handleWhatsApp = (): void => {window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
  const handleCall = (): void => { window.location.href = `tel:+${PHONE_NUMBER}` }

  return (
    <div
      className={`modal fade ${show ? 'd-block show' : ''}`}
      style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <div className="modal-content border-0 rounded-4 p-3">

          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold w-100 text-center">Contact Us</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
          </div>

          <div className="modal-body d-flex flex-column gap-3 pt-3">
            <button
              className="btn btn-whatsapp text-white fw-semibold py-3 rounded-3 fs-6 d-flex align-items-center justify-content-center gap-2"
              onClick={handleWhatsApp}
            >
              <i className="fab fa-whatsapp fs-5" />
              WhatsApp
            </button>
            <button
              className="btn btn-call text-white fw-semibold py-3 rounded-3 fs-6 d-flex align-items-center justify-content-center gap-2"
              onClick={handleCall}
            >
              <i className="fas fa-phone fs-5" />
              Call Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactPopup