import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Menu() {
	return (
		<div className='menu'>
			<div className='menu-item'>
				<div className='menu-header container'>
					<div className='menu-title'>
						<FontAwesomeIcon icon={faUser} className='menu-title-icon' />
						<h2>Personal Details</h2>
					</div>
					<FontAwesomeIcon icon={faCaretUp} className='menu-caret' />
				</div>
				<div className='menu-content'>
					<input type='text' placeholder='First Name' className='text-field' />
					<input type='text' placeholder='Last Name' className='text-field' />
					<input
						type='text'
						placeholder='Email Address'
						className='text-field'
					/>
					<input
						type='text'
						placeholder='Phone Number'
						className='text-field'
					/>
				</div>
			</div>
		</div>
	);
}

export default Menu;
