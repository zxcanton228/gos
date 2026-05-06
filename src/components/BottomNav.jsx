import { useNavigate } from 'react-router-dom'

const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15.5V15.5H8.5V21H4C3.45 21 3 20.55 3 20V10.5Z"
      fill={active ? '#4d8ff5' : '#5e6480'}
    />
  </svg>
)

const ServicesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="2" width="8" height="8" rx="2.5" fill="#5e6480" />
    <rect x="12" y="2" width="8" height="8" rx="2.5" fill="#5e6480" />
    <rect x="2" y="12" width="8" height="8" rx="2.5" fill="#5e6480" />
    <rect x="12" y="12" width="8" height="8" rx="2.5" fill="#5e6480" />
  </svg>
)

const AssistantIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="12" r="8" fill="white" />
    <circle cx="12" cy="11" r="1.8" fill="#2d60e8" />
    <circle cx="18" cy="11" r="1.8" fill="#2d60e8" />
    <path d="M11 14.5 Q15 17 19 14.5" stroke="#2d60e8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M5 26 C5 21 25 21 25 26" fill="white" />
  </svg>
)

const PaymentsIcon = () => (
  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
    <rect x="1" y="2" width="22" height="16" rx="3" fill="#5e6480" />
    <rect x="1" y="7" width="22" height="3.5" fill="#3a3f58" />
    <rect x="4" y="13" width="6" height="2.5" rx="1.2" fill="#3a3f58" />
  </svg>
)

const DocumentsIcon = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
    <rect x="3" y="1" width="16" height="22" rx="2.5" fill="#5e6480" />
    <line x1="7" y1="8" x2="15" y2="8" stroke="#3a3f58" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="7" y1="12" x2="15" y2="12" stroke="#3a3f58" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="7" y1="16" x2="12" y2="16" stroke="#3a3f58" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function BottomNav({ active }) {
  const navigate = useNavigate()

  return (
    <nav className="bottom-nav">
      <div className={`nav-item ${active === 'home' ? 'active' : ''}`} onClick={() => navigate('/')}>
        <HomeIcon active={active === 'home'} />
        <span className="nav-label">главная</span>
      </div>

      <div className="nav-item">
        <ServicesIcon />
        <span className="nav-label">услуги</span>
      </div>

      <div className="nav-center">
        <button className="nav-center-btn" aria-label="Ассистент">
          <AssistantIcon />
        </button>
      </div>

      <div className="nav-item">
        <PaymentsIcon />
        <span className="nav-label">платежи</span>
      </div>

      <div className="nav-item">
        <DocumentsIcon />
        <span className="nav-label">документы</span>
      </div>
    </nav>
  )
}
