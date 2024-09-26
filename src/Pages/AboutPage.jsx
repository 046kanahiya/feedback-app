import { Link } from 'react-router-dom'
import Card from '../Component/Shared/Card'
function AboutPage(props) {
  return (
    <Card>

      <div className='about'>
        <h1>About FeedBack Project</h1>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
    
  )
}

export default AboutPage