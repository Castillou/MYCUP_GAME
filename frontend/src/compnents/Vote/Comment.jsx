import user from '../../assets/user.svg';

// eslint-disable-next-line react/prop-types
export default function Comment({ id, username, comment }) {
	return (
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
	);
}
