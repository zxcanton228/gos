import { useNavigate } from 'react-router-dom'

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="16,6 12,2 8,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="2" x2="12" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="#7b1a2a" strokeWidth="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#7b1a2a" strokeWidth="2" />
  </svg>
)

const PersonSilhouette = () => (
  <svg width="38" height="52" viewBox="0 0 38 52" fill="#a09090">
    <circle cx="19" cy="16" r="11" />
    <path d="M3 50 C3 36 35 36 35 50" />
  </svg>
)

/* Simplified double-headed eagle watermark */
const EagleWatermark = () => (
  <svg width="92" height="105" viewBox="0 0 92 105" fill="#7b1a2a" opacity="0.07">
    {/* Body */}
    <ellipse cx="46" cy="65" rx="14" ry="24" />
    {/* Left head */}
    <circle cx="32" cy="32" r="11" />
    <path d="M32 21 L36 13 L40 21" />
    {/* Right head */}
    <circle cx="60" cy="32" r="11" />
    <path d="M52 21 L56 13 L60 21" />
    {/* Neck */}
    <path d="M36 40 Q46 44 56 40 L54 52 L38 52 Z" />
    {/* Left wing */}
    <path d="M32 50 Q16 38 6 50 Q20 50 32 60 Z" />
    {/* Right wing */}
    <path d="M60 50 Q76 38 86 50 Q72 50 60 60 Z" />
    {/* Tail */}
    <path d="M36 88 L40 100 L46 90 L52 100 L56 88" strokeWidth="2" stroke="#7b1a2a" fill="none" />
    {/* Shield */}
    <path d="M38 58 L38 70 Q46 75 54 70 L54 58 Z" />
  </svg>
)

export default function PassportPage() {
  const navigate = useNavigate()

  return (
    <div className="passport-page">
      {/* Header */}
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Назад">
          <BackIcon />
        </button>
        <span className="page-header-title">Паспорт РФ</span>
        <button className="menu-btn" aria-label="Поделиться">
          <ShareIcon />
        </button>
      </div>

      {/* Passport card */}
      <div className="passport-card">
        {/* Dark red header */}
        <div className="pp-red-hdr">
          <span className="pp-rf-text">РОССИЙСКАЯ ФЕДЕРАЦИЯ</span>
        </div>

        {/* Upper white section */}
        <div className="pp-upper">
          <div className="eagle-wrap">
            <EagleWatermark />
          </div>

          {/* Issuer */}
          <div>
            <div className="pp-label">Кем выдан</div>
            <div className="pp-value">ГУ МВД РОССИЯ ПО МОСКОВСКОЙ ОБЛАСТИ</div>
          </div>

          {/* Date + division code */}
          <div className="pp-two-col">
            <div className="pp-col">
              <div className="pp-label">Дата выдачи</div>
              <div className="pp-value" style={{ marginBottom: 0 }}>30.01.2024</div>
            </div>
            <div className="pp-col">
              <div className="pp-label">Код подразделения</div>
              <div className="pp-value" style={{ marginBottom: 0 }}>500-077</div>
            </div>
          </div>

          <hr className="pp-dashes" />

          {/* Passport number */}
          <div className="pp-num-row">
            <span className="pp-number">4623 456961</span>
            <button className="copy-btn" aria-label="Копировать номер">
              <CopyIcon />
            </button>
          </div>

          <hr className="pp-dashes" style={{ marginTop: 10, marginBottom: 0 }} />
        </div>

        {/* Lower cream section – photo + personal data */}
        <div className="pp-lower">
          <div className="photo-ph">
            <PersonSilhouette />
          </div>

          <div className="pp-info">
            <div className="pp-label" style={{ color: '#888' }}>ФИО</div>
            <div className="pp-fullname">ВЕГЕЛЕ КИРИЛЛ РОМАНОВИЧ</div>

            <div className="pp-row2">
              <div className="pp-field">
                <div className="pp-label" style={{ color: '#888' }}>Пол</div>
                <div className="pp-value" style={{ marginBottom: 0 }}>МУЖСКОЙ</div>
              </div>
              <div className="pp-field">
                <div className="pp-label" style={{ color: '#888' }}>Дата рождения</div>
                <div className="pp-value" style={{ marginBottom: 0 }}>17.01.2010</div>
              </div>
            </div>

            <div>
              <div className="pp-label" style={{ color: '#888' }}>Место рождения</div>
              <div className="pp-value" style={{ marginBottom: 0, lineHeight: '1.4' }}>
                ГОРОД НОВОКУЗНЕЦК КЕМЕРОВСКАЯ ОБЛАСТЬ
              </div>
            </div>

            <button
              className="pp-details-btn"
              onClick={() => navigate('/passport/details')}
            >
              детали документа
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
