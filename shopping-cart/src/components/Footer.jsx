import styled from "styled-components"

export default function Footer(){
	
	return (
		<Div data-testid="footer">
			
			<Line />
			
			<CopyRights>
				<p>@ 2025 CandyBay Inc. All rights reserved.</p>
				<p>Terms of service</p>
			</CopyRights>
			
		</Div>
	)
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 80px;
	width: 95%;
	height: 100px;
`

const Line = styled.div`
	height: 1px;
	width: 100%;
	background-color: #ffffffb5;
`

const CopyRights = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	color: white;
	margin: 40px 0px;
	
	p {
		font-weight: 100;
		font-size: 14px;
	}
`