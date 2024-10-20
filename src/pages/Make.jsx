import styled from 'styled-components';

const Wrapper = styled.section`
	width: 100%;
	height: 92vh;
	padding: 3rem 5rem;
	background-color: #f9f9f9;
`;

const ButtonSection = styled.section`
	width: 100%;
	display: flex;
	gap: 3rem;
	border-bottom: 3px solid #e1e1e1;
`;

const ButtonBox = styled.div`
	display: flex;
`;

const Button = styled.button`
	padding: 2rem 3rem;
	border: none;
	font-size: 1.8rem;
	cursor: pointer;
	background-color: #f9f9f9;

	&.active {
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}
	&:hover {
		opacity: 0.7;
	}

	&.submit-btn {
		width: 11rem;
		padding: 1rem 0;
		border-radius: 4px;
		grid-column: 2/3;
		background-color: #2e93ff;
		color: #fff;
		font-weight: 800;
	}
`;

const FormSection = styled.form`
	width: 100%;
	height: 75rem;
	background-color: #fff;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
	padding: 2rem 3rem;
	font-size: 2rem;
	font-weight: 800;
	color: #2e93ff;
	border-bottom: 2px solid #efefef;
`;

const FormRow = styled.div`
	padding: 2rem 3rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(3, 1fr);
	border-bottom: 1px dashed #d1d1d1;

	&.submit-row {
		grid-template-rows: repeat(2, 1fr);
	}
`;
const Label = styled.label`
	grid-row: 1/3;
	grid-column: 1/2;
	font-size: 2rem;
	font-weight: 700;
	line-height: 2.5;
	padding-left: 1rem;
`;
const Input = styled.input`
	grid-row: 1/3;
	grid-column: 2/13;
	font-size: 2rem;
	padding: 0 1.5rem;
	border: 1px solid #d1d1d1;

	&:focus {
		outline: 1px solid #2e93ff;
	}
`;
const Description = styled.span`
	grid-row: 3/4;
	grid-column: 2/8;
	font-size: 1.6rem;
	padding-top: 1rem;
	opacity: 0.6;
`;

const RadioBox = styled.div`
	grid-row: 1/4;
	grid-column: 2/8;
	margin-bottom: 1rem;
`;
const RadioLabel = styled.label`
	padding: 1rem 0;
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const RadioInput = styled.input.attrs({ type: 'radio' })`
	display: none;

	&:checked + span::before {
		opacity: 1;
	}
`;
const RadioIcon = styled.span`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	border: 1px solid #333;

	position: relative;

	&::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		position: absolute;
		background-color: #2e93ff;
		inset: 50% 0 0 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;

		opacity: 0;
	}
`;
const RadioText = styled.span`
	font-size: 1.8rem;
`;

export default function MaKePage() {
	return (
		<Wrapper>
			<ButtonSection>
				<ButtonBox>
					<Button className="active">1. 기본정보 수정 / 이미지 업로드</Button>
					<Button>2. 이미지 이름 수정 / 삭제</Button>
				</ButtonBox>
			</ButtonSection>
			<FormSection>
				<Title>이상형 월드컵 기본정보</Title>
				<FormRow>
					<Label>1) 제목</Label>
					<Input></Input>
					<Description>
						이상형월드컵의 제목을 입력하세요. 예) 여자 아이돌 이상형월드컵,
						남자연예인 이상형월드컵
					</Description>
				</FormRow>
				<FormRow>
					<Label>2) 설명</Label>
					<Input></Input>
					<Description>설명, 하고싶은 말 등을 자유롭게 쓰세요.</Description>
				</FormRow>
				<FormRow>
					<Label>3) 공개여부</Label>
					<RadioBox>
						<RadioLabel>
							<RadioInput name="group" />
							<RadioIcon></RadioIcon>
							<RadioText>비공개 (다른 사용자는 접근할 수 없습니다.)</RadioText>
						</RadioLabel>
						<RadioLabel>
							<RadioInput name="group" />
							<RadioIcon></RadioIcon>
							<RadioText>
								전체 공개 (모든 사용자가 플레이 할 수 있습니다.)
							</RadioText>
						</RadioLabel>
						<RadioLabel>
							<RadioInput name="group" />
							<RadioIcon></RadioIcon>
							<RadioText>
								친구 공개 (비밀번호를 입력 후 플레이 할 수 있습니다.){' '}
							</RadioText>
						</RadioLabel>
					</RadioBox>
				</FormRow>
				<FormRow className="submit-row">
					<Button type="submit" className="submit-btn">
						저장하기
					</Button>
				</FormRow>
			</FormSection>
		</Wrapper>
	);
}
