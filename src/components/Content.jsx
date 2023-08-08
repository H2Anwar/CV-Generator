import Menu from './Menu';
import CV_Template from './CV_Template';

function Content() {
	return (
		<div className='content'>
			<div className='container align-top'>
				<Menu />
				<CV_Template />
			</div>
		</div>
	);
}

export default Content;
