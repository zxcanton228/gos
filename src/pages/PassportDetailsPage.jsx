import { useNavigate } from 'react-router-dom'

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DotsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="5" r="1.5" fill="white" />
    <circle cx="12" cy="12" r="1.5" fill="white" />
    <circle cx="12" cy="19" r="1.5" fill="white" />
  </svg>
)

const PaperclipIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
      stroke="#4d8ff5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

const fields = [
  { label: 'ФИО',               value: 'ВЕГЕЛЕ КИРИЛЛ РОМАНОВИЧ' },
  { label: 'Пол',               value: 'Мужской' },
  { label: 'Дата рождения',     value: '17.01.2010' },
  { label: 'Место рождения',    value: 'ГОРОД НОВОКУЗНЕЦК КЕМЕРОВСКАЯ ОБЛАСТЬ' },
  { label: 'Серия и номер',     value: '4623 456961' },
  { label: 'Дата выдачи',       value: '30.01.2024' },
  { label: 'Код подразделения', value: '500-077' },
  { label: 'Кем выдан',         value: 'ГУ МВД РОССИЯ ПО МОСКОВСКОЙ ОБЛАСТИ' },
]

export default function PassportDetailsPage() {
  const navigate = useNavigate()

  return (
    <div className="details-page">
      {/* Header */}
      <div className="details-header">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Назад">
          <BackIcon />
        </button>
        <span className="page-header-title">Паспорт РФ</span>
        <button className="menu-btn" aria-label="Меню">
          <DotsIcon />
        </button>
      </div>

      {/* Fields card */}
      <div className="details-card">
        {fields.map(f => (
          <div key={f.label} className="detail-field">
            <div className="detail-label">{f.label}</div>
            <div className="detail-value">{f.value}</div>
          </div>
        ))}
      </div>

      {/* Upload card */}
      <div className="upload-card">
        <div className="upload-title">Фото, сканы или pdf</div>
        <button className="upload-btn">
          <PaperclipIcon />
          Добавить
        </button>
      </div>
    </div>
  )
}
