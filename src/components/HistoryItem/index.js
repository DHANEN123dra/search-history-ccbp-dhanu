import './index.css'

const HistoryItem = props => {
  const {historyDetailes, deleteElement} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetailes

  const onClickDeleteItem = () => {
    deleteElement(id)
  }

  return (
    <li className="list-element">
      <p className="time">{timeAccessed}</p>
      <div className="container">
        <div className="domine-container">
          <img className="image" src={logoUrl} alt="domain logo" />
          <p className="heading-title">{title}</p>
          <p className="paragraph">{domainUrl}</p>
        </div>
        <div className="container-2">
          <button
            testId="delete"
            className="delete-button"
            type="button"
            onClick={onClickDeleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
