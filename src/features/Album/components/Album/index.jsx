import PropTypes from 'prop-types';

Album.propTypes = {
	album: PropTypes.object,
};

Album.defaultProps = {
	album: {},
};

function Album({ album }) {
	return (
		<div>
			<img
				src={album.url}
				alt="img"
			/>
			<span>{album.name}</span>
		</div>
	);
}

export default Album;
