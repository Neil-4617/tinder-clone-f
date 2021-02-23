// icons 
import PersonIcon from "@material-ui/icons/Person"
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"

// style
import "../styles/header.css"

const Header = () => {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
				
			</IconButton>

			<img
				className="header__logo"
				// src="https://1000logos.net/wp-content/uploads/2018/07/tinder-app-logo.jpg"
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