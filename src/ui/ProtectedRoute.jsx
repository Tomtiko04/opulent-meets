import { useUser } from "../features/authentication/useUser";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";

const FullPage = styled.div`
	height: 100vh;
	background-color: var() (--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

ProtectedRoute.propTypes = {
	children: PropTypes.any,
};

export default function ProtectedRoute({ children }) {
	const navigate = useNavigate();
	// 1. Load the autheticated user
	const { isLoading, isAuthenticated } = useUser();

	// 3. If there is No autheticated user, redirect to the /login
	useEffect(
		function () {
			if (!isAuthenticated && !isLoading) return navigate("/login");
		},
		[navigate, isAuthenticated, isLoading]
	);

	// 2. While loading, show a spinner
	if (isLoading) {
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);
	}

	// 4. If there Is a user, render the app
  if(isAuthenticated) return children;
}
