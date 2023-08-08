import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
	return (
		<div className='header'>
			<div className='container align-center'>
				<h1>CV Generator</h1>
				<a href=''>
					{/* TODO: link github page */}
					<FontAwesomeIcon icon={faGithub} className='header-icon' />
				</a>
			</div>
		</div>
	);
}

export default Header;
