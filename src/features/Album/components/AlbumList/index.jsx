import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {
	listAlbums: PropTypes.arrayOf(PropTypes.shape),
};

AlbumList.defaultProps = {
	listAlbums: [],
};

function AlbumList({ listAlbums }) {
	return (
		<ul className="album-list">
			{listAlbums.map((album) => (
				<li key={album.id}>
					<Album album={album} />
				</li>
			))}
		</ul>
	);
}

export default AlbumList;
