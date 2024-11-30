import styled from 'styled-components';
import user from '../../assets/user.svg';

const Wrapper = styled.div`
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
			&.comment_input {
				display: flex;
				justify-content: space-between;
				gap: 2rem;
				padding: 1rem;
				background: none;

				input {
					flex: 1;
					border: 1px solid #efefef;
					border-radius: 3rem;
					padding: 1.5rem 3rem;
					font-size: 2rem;
				}

				button {
					padding: 1.5rem 2rem;
					font-size: 1.5rem;
					border-radius: 3rem;
					border: none;
					background-color: #e9e9e9;

					&:hover {
						background-color: #e1e1e1;
					}
				}
			}
		}
	}
`;

const DUMMY_COMMENT = [
	{
		id: 'c1',
		username: 'sean',
		comment: '당연히 1번을 선택했어야죠 이게 뭡니까!',
	},
	{
		id: 'c2',
		username: '홍길동',
		comment: '중립을 지키시죠 여러분',
	},
	{
		id: 'c3',
		username: '김철수',
		comment: '아니죠 2번을 선택했어야 합니다!',
	},
	{
		id: 'c4',
		username: '홍길동',
		comment: '중립을 지키시죠 여러분',
	},
	{
		id: 'c5',
		username: '홍길동',
		comment: '중립을 지키시죠 여러분',
	},
];

export default function VoteComment() {
	return (
		<Wrapper>
			<ul>
				<li className="comment_input">
					<input type="text" id="new_comment" name="new_comment" />
					<button>저장하기</button>
				</li>
				{DUMMY_COMMENT.map(({ id, username, comment }) => (
					<li key={id}>
						<div className="nickname_box">
							<a href="#">
								<img src={user} alt="사용자 기본이미지" />
							</a>
							<span>{username}</span>
						</div>
						<div className="comment_box">
							<span>{comment}</span>
						</div>
					</li>
				))}
			</ul>
		</Wrapper>
	);
}
