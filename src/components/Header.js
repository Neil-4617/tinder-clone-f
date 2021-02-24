// icons 
import PersonIcon from "@material-ui/icons/Person"
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"

// style
import "../styles/Header.css"

const Header = () => {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>
				

			<img
				className="header__logo"
				// src="https://toppng.com/public/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"
				src="https://www.pinclipart.com/picdir/big/25-259236_tinder-logo-transparent-background-clipart.png"
				alt="tinder-logo" 
			/>

			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	)
}

export default Header