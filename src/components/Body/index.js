// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="nav-container">
      <h3>Left Navbar Menu</h3>
      <ul className="list-container">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )
  const renderRightNavbar = () => (
    <div className="nav-container">
      <h3>Right Navbar</h3>
      <div className="ad-container">
        <p>Ad 1</p>
      </div>
      <div className="ad-container">
        <p>Ad 2</p>
      </div>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <h3>Content</h3>
      <p>
        Lorem ipsum Getting a job these days is a tough one. But with right
        training and practice you can crack any job. We are here to help you in
        this journey. So let us begin to start a career you always dreamt of
        with our experts and live life you always wanted.
      </p>
    </div>
  )

  return (
    <div className="body-container">
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value

          return (
            <>
              {showLeftNavbar && renderLeftNavbar()}
              {showContent && renderContent()}
              {showRightNavbar && renderRightNavbar()}
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    </div>
  )
}

export default Body
