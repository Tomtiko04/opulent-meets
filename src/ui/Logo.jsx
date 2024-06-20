import styled from "styled-components";
import useDarkMode from "../context/useDarkMode";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 10.6rem;
  width: auto;
`;

function Logo() {
  const {isDarkMode} = useDarkMode()
  const src = isDarkMode ? "/logo-0.png" : "/logo-0.png";
  return (
		<StyledLogo>
			<Img src={src} alt="Logo" />
		</StyledLogo>
	);
}

export default Logo;
