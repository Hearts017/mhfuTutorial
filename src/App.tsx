import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card no-hover mb-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row">
            <div className="col-lg-3">
              <div className="profile">
             
               
              </div>
            </div>
            <div className="col-lg-6">
              <div className="topic">
                
                
              </div>
            </div>
            <div className="col-lg-3">
              <div className="more-details">
                <a href="" className='view-details'>View Details</a>
                <a href="" className='social'><i className="bi bi-twitter"></i></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default App
