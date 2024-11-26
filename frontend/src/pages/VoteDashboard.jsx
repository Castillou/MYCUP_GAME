import styled from 'styled-components';
import user from '../assets/user.svg';

const Wrapper = styled.section`
	width: 100%;
	padding: 0 5rem;
`;

const Title = styled.h2`
	width: 100%;
	padding: 3rem 0;
	color: #333;
	font-size: 4rem;
	font-weight: 800;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Top = styled.div`
	width: 103rem;
	margin: 0 auto 3rem;
	display: flex;
	gap: 3rem;

	div {
		width: 50rem;
		height: 50rem;
		background-color: #fff;
		border: 2px solid #86c1ff;
		border-radius: 3rem;

		display: flex;
		align-items: center;
		justify-content: center;

		span {
			font-size: 10rem;
		}
	}
`;

const Bottom = styled.div`
	width: 100rem;
	min-height: 80rem;
	margin: 0 auto;

	ul {
		width: 100%;

		li {
			width: 100%;
			padding: 2rem 4rem;
			margin-bottom: 1rem;

			background-color: #fff;
			border-radius: 1rem;

			.nickname_box {
				margin-bottom: 1.5rem;
				display: flex;
				align-items: center;
				gap: 1rem;

				a {
					display: inline-block;
					background-color: #efefef;
					border-radius: 2rem;

					img {
						vertical-align: center;
					}
				}

				span {
					font-size: 2rem;
					font-weight: 800;
				}
			}

			.comment_box {
				span {
					font-size: 1.8rem;
					font-weight: 300;
				}
			}
		}
	}
`;

export default function VoteDashboardPage() {
	return (
		<Wrapper>
			<Title>투표 현황</Title>
			<Top>
				<div>
					<span>20</span>
				</div>
				<div>
					<span>12</span>
				</div>
			</Top>
			<Bottom>
				<ul>
					<li>
						<div className="nickname_box">
							<a href="#">
								<img src={user} alt="사용자 기본이미지" />
							</a>
							<span>닉네임</span>
						</div>
						<div className="comment_box">
							<span>당연히 1번을 선택했어야죠 이게 뭡니까</span>
						</div>
					</li>
					<li>
						<div className="nickname_box">
							<a href="#">
								<img src={user} alt="사용자 기본이미지" />
							</a>
							<span>닉네임</span>
						</div>
						<div className="comment_box">
							<span>당연히 1번을 선택했어야죠 이게 뭡니까</span>
						</div>
					</li>
					<li>
						<div className="nickname_box">
							<a href="#">
								<img src={user} alt="사용자 기본이미지" />
							</a>
							<span>닉네임</span>
						</div>
						<div className="comment_box">
							<span>당연히 1번을 선택했어야죠 이게 뭡니까</span>
						</div>
					</li>
				</ul>
			</Bottom>
		</Wrapper>
	);
}
