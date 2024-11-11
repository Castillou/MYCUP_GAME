// eslint-disable-next-line react/prop-types
export default function TabButton({ id, clickedTab, onClick, children }) {
	return (
		<li id={id} className={clickedTab === id ? 'active' : ''} onClick={onClick}>
			<span>{children}</span>
		</li>
	);
}
