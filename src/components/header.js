import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const HeaderBlock = styled.header`
	background:pink;
	text-align:center;
	padding:1rem;
	a{

	}
`;
const LogoLink = styled(Link)`
	color: black;
	text-decoration: none;
	font-size:20px;
	font-weight:bold;
	font-family: Arial;
	span{
		display:block;
		font-size:12px;
	}
`;

const Header = ({ siteTitle, siteSubtitle }) => (
  <HeaderBlock>
		<LogoLink
			to="/"
		>
			{siteTitle}
			<span>{siteSubtitle}</span>
		</LogoLink>
  </HeaderBlock>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	siteSubtitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``,
	siteSubtitle: ``,
}

export default Header
