import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className='footer'>
			<div className='container'>
				<a href=''>
					{/* TODO: link github page */}
					<FontAwesomeIcon icon={faGithub} className='footer-icon' />
					<h4>H2Anwar</h4>
				</a>
			</div>
		</div>
	);
}

export default Footer;
