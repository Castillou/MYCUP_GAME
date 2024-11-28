import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import user from '../assets/user.svg';
import { loader as eventLoader } from '../util/loader/eventsLoader';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingSpinner from '../compnents/Interface/LoadingSpinner';

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

export default function VoteDashboardPage() {
	const gameId = useParams().gameId;

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['event', gameId],
		queryFn: eventLoader,
	});

	let content;
	if (isPending) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				title="게임 정보를 가져오지 못했습니다."
				message={
					error.info?.message ||
					'정보를 가져오지 못했습니다. 잠시 후에 다시 시도해주세요.'
				}
			/>
		);
	}

	if (data) {
		const gameData = data.filter((item) => item.id === gameId)[0];
		content = (
			<>
				<Title>투표 현황</Title>
				<Top>
					<div>
						<span>{gameData.score[0]}</span>
					</div>
					<div>
						<span>{gameData.score[1]}</span>
					</div>
				</Top>
				<Bottom>
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
				</Bottom>
			</>
		);
	}

	return <Wrapper>{content}</Wrapper>;
}
