import { Container, Nav, Row,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Instagram from 'react-bootstrap-icons/dist/icons/instagram';
import Facebook from 'react-bootstrap-icons/dist/icons/facebook';
import X from 'react-bootstrap-icons/dist/icons/x';
import Youtube from 'react-bootstrap-icons/dist/icons/youtube';
import '../App.css'

const Footercustom = function () {
  return (
    <footer className='cloudybg'>
    <div className="container mt-5 ">
        <div className="row justify-content-center align-content-center">
            <div className="col-12 col-md-2">
                <div className="row text-dark text-align-center flex-column">
                    <div className="col mt-5">
                        <Instagram ></Instagram>
                        <Facebook></Facebook>
                        <X></X>
                        <Youtube></Youtube>
                        <icon className="bi bi-facebook"></icon>
                        <icon className="bi bi-twitter-x"></icon>
                        <icon className="bi bi-youtube"></icon>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-2 text-dark">
                <ul className="list-unstyled mt-4">
                    <li><a href="javascript:void(0)" className="text-decoration-none link-dark">Help Center</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-dark">Jobs</a></li>
                    <li><a href="javascript:void(0)" className="text-decoration-none link-dark">Cookie Preferences</a></li>
                </ul>
            </div>
    
        </div>
        <div className="row flex-column mx-md-5 align-content-center">
            <div className="col-4">
            <Button variant="outline-dark flat">service Code</Button></div>
            <div className="col-4">
            <p className="text-dark">&copy;Weather,inc.</p></div>
        </div>
    </div>
</footer>
  );
}


export default Footercustom