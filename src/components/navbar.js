import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div className='my-5 text-primary'>

      <Link to='/stories' className='h4'>Stories</Link>
      <br />
      <Link to='/accounts' className='h4'>Accounts</Link>

    </div>
  )
}

export default Navbar
