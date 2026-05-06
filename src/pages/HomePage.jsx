import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

/* ── Header icons ── */
const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
    <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

const BellIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

const QRIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.2" stroke="white" strokeWidth="1.8" />
    <rect x="14" y="3" width="7" height="7" rx="1.2" stroke="white" strokeWidth="1.8" />
    <rect x="3" y="14" width="7" height="7" rx="1.2" stroke="white" strokeWidth="1.8" />
    <rect x="5" y="5" width="3" height="3" fill="white" />
    <rect x="16" y="5" width="3" height="3" fill="white" />
    <rect x="5" y="16" width="3" height="3" fill="white" />
    <path d="M14 14h3v3h-3zM17 17h3M17 20v-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

/* ── Document icons ── */
const PassportIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <rect x="7" y="5" width="20" height="24" rx="2" fill="rgba(255,255,255,0.25)" />
    <rect x="9" y="5" width="16" height="24" rx="2" fill="rgba(255,255,255,0.15)" />
    <line x1="17" y1="5" x2="17" y2="29" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
    <line x1="12" y1="13" x2="22" y2="13" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" />
    <line x1="12" y1="17" x2="22" y2="17" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" />
    <line x1="12" y1="21" x2="19" y2="21" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" />
    <circle cx="17" cy="9" r="2" fill="rgba(255,255,255,0.5)" />
  </svg>
)

const SnilsIcon = () => (
  <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
    <rect x="3" y="3" width="28" height="22" rx="3" fill="rgba(255,255,255,0.2)" />
    <rect x="3" y="8" width="28" height="5" fill="rgba(255,255,255,0.15)" />
    <line x1="7" y1="18" x2="20" y2="18" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" />
    <line x1="7" y1="21" x2="15" y2="21" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" />
    <circle cx="26" cy="19" r="3.5" fill="rgba(255,255,255,0.3)" />
  </svg>
)

const InnIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <rect x="5" y="5" width="24" height="24" rx="3" fill="rgba(255,255,255,0.2)" />
    <text x="8" y="24" fontSize="14" fontWeight="900" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">ИНН</text>
  </svg>
)

const AllIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <rect x="2" y="2" width="14" height="14" rx="3" fill="#e74c3c" />
    <rect x="18" y="2" width="14" height="14" rx="3" fill="#27ae60" />
    <rect x="2" y="18" width="14" height="14" rx="3" fill="#e67e22" />
    <rect x="18" y="18" width="14" height="14" rx="3" fill="#3498db" />
  </svg>
)

/* ── Service icons ── */
const HealthIcon = () => (
  <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
    <polyline
      points="0,13 5,13 8,4 11,22 14,13 17,13 20,7 23,19 26,13 36,13"
      stroke="#e91e8c" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

const AutoIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
    <path
      d="M7 14L10 6H28L31 14H34V18H4V14H7Z"
      fill="#5a7ab8"
    />
    <rect x="7" y="8" width="10" height="5" rx="1" fill="#3d5a8a" />
    <rect x="19" y="8" width="8" height="5" rx="1" fill="#3d5a8a" />
    <circle cx="11" cy="18" r="3.5" fill="#3a5080" stroke="#4a6090" strokeWidth="1" />
    <circle cx="27" cy="18" r="3.5" fill="#3a5080" stroke="#4a6090" strokeWidth="1" />
    <circle cx="11" cy="18" r="1.5" fill="#5a7ab8" />
    <circle cx="27" cy="18" r="1.5" fill="#5a7ab8" />
  </svg>
)

const SchoolIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="8" y="4" width="16" height="24" rx="3" fill="#4a5580" />
    <rect x="10" y="6" width="12" height="16" rx="1.5" fill="#5a6898" />
    <path d="M16 2L6 8L16 14L26 8L16 2Z" fill="#7a8ab8" />
    <line x1="16" y1="14" x2="16" y2="20" stroke="#7a8ab8" strokeWidth="2" />
    <line x1="12" y1="20" x2="20" y2="20" stroke="#7a8ab8" strokeWidth="1.5" />
  </svg>
)

const OtherIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect x="2" y="2" width="11" height="11" rx="3" fill="#636880" />
    <rect x="17" y="2" width="11" height="11" rx="3" fill="#636880" />
    <rect x="2" y="17" width="11" height="11" rx="3" fill="#636880" />
    <rect x="17" y="17" width="11" height="11" rx="3" fill="#636880" />
  </svg>
)

/* ── Banner card definitions ── */
const banners = [
  {
    id: 1,
    bg: 'linear-gradient(145deg, #1a8580, #22b5a5)',
    border: '2px solid #3dd8c8',
    shadow: '0 0 22px rgba(61,216,200,0.35)',
    icon: '🛡️',
    title: 'Защита близких от взлома',
    light: false,
  },
  {
    id: 2,
    bg: 'linear-gradient(145deg, #221535, #30204e)',
    border: '2px solid #3e2a62',
    shadow: 'none',
    icon: '💰',
    title: 'Оформите налоговый вычет',
    light: false,
  },
  {
    id: 3,
    bg: 'linear-gradient(145deg, #c8c0e0, #dcd4f4)',
    border: '2px solid #b8b0d4',
    shadow: 'none',
    icon: '🏠',
    title: 'Оформление аренды',
    light: true,
  },
  {
    id: 4,
    bg: 'linear-gradient(145deg, #2e2010, #423018)',
    border: '2px solid #5a4022',
    shadow: 'none',
    icon: '💼',
    title: 'Начните бизнес онлайн',
    light: false,
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="hdr-left">
          <div className="avatar-wrap">
            <div className="avatar-circle">🐕</div>
            <div className="avatar-dot" />
          </div>
          <span className="hdr-name">
            КИРИЛЛ <span className="hdr-chevron">›</span>
          </span>
        </div>
        <div className="hdr-right">
          <button className="icon-btn" aria-label="Поиск"><SearchIcon /></button>
          <button className="icon-btn" aria-label="Уведомления">
            <BellIcon />
            <div className="icon-badge" />
          </button>
          <button className="icon-btn" aria-label="QR-код"><QRIcon /></button>
        </div>
      </header>

      {/* Quick-action pills */}
      <div className="pills-row">
        {['Запись к врачу', 'ИНН', 'Решаем вместе', 'Сведения', 'Налоги'].map(label => (
          <button key={label} className="pill">{label}</button>
        ))}
      </div>

      {/* Banner cards */}
      <div className="banners-row">
        {banners.map(b => (
          <div
            key={b.id}
            className="banner-card"
            style={{
              background: b.bg,
              border: b.border,
              boxShadow: b.shadow,
              color: b.light ? '#1e1640' : 'white',
            }}
          >
            <div className="banner-icon">{b.icon}</div>
            <div className="banner-title">{b.title}</div>
          </div>
        ))}
      </div>

      {/* No charges */}
      <div className="no-charges">
        <div className="no-charges-h">Нет начислений</div>
        <div className="no-charges-sub">уточните данные</div>
      </div>

      {/* Documents section */}
      <div className="section-block">
        <h2 className="section-title">Документы для предъявления</h2>
        <div className="icons-row">
          <div className="icon-item" onClick={() => navigate('/passport')}>
            <div className="doc-icon-box" style={{ background: '#c0392b' }}>
              <PassportIcon />
            </div>
            <span className="icon-label">Паспорт</span>
          </div>
          <div className="icon-item">
            <div className="doc-icon-box" style={{ background: '#27ae60' }}>
              <SnilsIcon />
            </div>
            <span className="icon-label">СНИЛС</span>
          </div>
          <div className="icon-item">
            <div className="doc-icon-box" style={{ background: '#e67e22' }}>
              <InnIcon />
            </div>
            <span className="icon-label">ИНН</span>
          </div>
          <div className="icon-item">
            <div className="doc-icon-box" style={{ background: '#2a2e42' }}>
              <AllIcon />
            </div>
            <span className="icon-label">Все</span>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="section-block">
        <h2 className="section-title">Сервисы и приложения</h2>
        <div className="icons-row">
          <div className="icon-item">
            <div className="svc-icon-box"><HealthIcon /></div>
            <span className="icon-label">Здоровье</span>
          </div>
          <div className="icon-item">
            <div className="svc-icon-box"><AutoIcon /></div>
            <span className="icon-label">Авто</span>
          </div>
          <div className="icon-item">
            <div className="svc-icon-box"><SchoolIcon /></div>
            <span className="icon-label">Моя школа</span>
          </div>
          <div className="icon-item">
            <div className="svc-icon-box"><OtherIcon /></div>
            <span className="icon-label">Другие</span>
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  )
}
