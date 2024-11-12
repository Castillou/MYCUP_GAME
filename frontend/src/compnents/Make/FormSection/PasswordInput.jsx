import styled from 'styled-components';

const PsdInputContainer = styled.div`
	width: 100%;
	padding-left: 1.5rem;

	display: flex;
	gap: 0.5rem;

	svg {
		width: 2.5rem;
		height: 2.5rem;
		margin-top: 0.3rem;
		stroke: #999;
		stroke-dasharray: 1 3;
	}

	input {
		width: 45.5rem;
		font-size: 1.5rem;
		padding: 1rem 2rem;
		border-radius: 0.8rem;
		border: 1px solid #d1d1d1;

		&:focus {
			outline: 1.5px solid #2e93ff;
		}
	}
`;

export default function PasswordInput() {
	return (
		<PsdInputContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
				/>
			</svg>

			<input
				type="password"
				name="password"
				placeholder="비밀번호를 입력하세요."
				required
			/>
		</PsdInputContainer>
	);
}
