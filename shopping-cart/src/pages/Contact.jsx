import styled from "styled-components"
import Footer from "../components/Footer"

export default function Contact(){
	
	return (
		<ContactPage>
			
			<Footer />
			
		</ContactPage>
	)
};

const ContactPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 95%;
`