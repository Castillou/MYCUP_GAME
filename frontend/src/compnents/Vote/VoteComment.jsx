import styled from 'styled-components';
import Comment from './Comment';
import useInput from '../../hooks/useInput';
import { nanoid } from 'nanoid';
import { useMutation } from '@tanstack/react-query';
import { action as addComment } from '../../util/actions/addComment';
import { useParams } from 'react-router-dom';
import { queryClient } from '../../util/loader/eventsLoader';
import ErrorBlock from '../../UI/ErrorBlock';

const Wrapper = styled.div`
	width: 100rem;
	min-height: 80rem;
	margin: 0 auto;
	padding-bottom: 10rem;

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

/* eslint-disable react/prop-types */
export default function VoteComment({ data }) {
	const gameId = useParams().gameId;
	const username = localStorage.getItem('username');
	const [inputValue, handleInput, inputReset] = useInput('');

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: addComment,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['event', gameId] });
			inputReset();
		},
	});

	const handleSubmit = () => {
		if (!inputValue || inputValue.trim() === '') {
			return;
		}
		mutate({
			id: gameId,
			username: username,
			comment: inputValue,
			data: data,
		});
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	let content;
	if (isError) {
		content = (
			<ErrorBlock
				title="댓글을 저장하지 못했습니다."
				message={
					error.info?.message ||
					'댓글을 저장하지 못했습니다. 잠시 후에 다시 시도해주세요.'
				}
			/>
		);
	}

	if (data) {
		const temp = data.comments.map(({ id, username, comment }) => (
			<Comment key={nanoid()} id={id} username={username} comment={comment} />
		));
		content = temp;
	}

	return (
		<Wrapper>
			<ul>
				<li className="comment_input">
					<input
						type="text"
						id="new_comment"
						name="new_comment"
						value={inputValue}
						onChange={handleInput}
						onKeyDown={handleEnter}
					/>
					<button onClick={handleSubmit}>
						{isPending ? '저장중...' : '저장하기'}
					</button>
				</li>
				{content}
			</ul>
		</Wrapper>
	);
}
