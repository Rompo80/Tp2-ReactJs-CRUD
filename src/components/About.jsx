import { Link } from 'react-router-dom';
const About = () => {

    return (
        
        <div className="d-flex flex-column  mt-5">
            <div className="row text-center">
                <div className="col">
                <h1>Welcome to moviePick</h1>
                </div>
            </div>
            <div className="row text-center">
                <div className="col mt-3">
                <Link className='btn btn-outline-dark' to="/movies">Show Movies</Link>
                </div>
            </div>
        </div>
    )
}
export default About
                
                
       
       
    
    
          
          
            




