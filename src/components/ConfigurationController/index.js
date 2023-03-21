// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="controller-bg-container">
          <h1>Layout</h1>
          <input
            type="checkbox"
            id="content"
            checked={showContent}
            onChange={onChangeContent}
          />
          <label htmlFor="content">Content</label>
          <br />
          <br />
          <input
            type="checkbox"
            id="leftnavbar"
            checked={showLeftNavbar}
            onChange={onChangeLeftNavbar}
          />
          <label htmlFor="leftnavbar">Left Navbar</label>
          <br />
          <br />
          <input
            type="checkbox"
            id="rightnavbar"
            checked={showRightNavbar}
            onChange={onChangeRightNavbar}
          />
          <label htmlFor="rightnavbar">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
