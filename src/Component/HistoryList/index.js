import './index.css'

const HistoryList = props => {
  const {historyItem, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onClickDeleteButton = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="inner-card">
        <div className="title-domain-container">
          <img src={logoUrl} alt="domain logo" className="image-logo" />
          <div className="title-button-container">
            <div className="inner-title-container">
              <p className="title">{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>
            <button
              type="button"
              data-testid="delete"
              className="button"
              onClick={onClickDeleteButton}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryList
