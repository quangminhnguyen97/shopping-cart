// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

AlbumFeature.defaultProps = {};

function AlbumFeature() {
	const albumList = [
		{
			id: 1,
			name: 'Giai điệu thư giãn',
			url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/c/c/4ccc7780abb5e8e2de84218f721b7ad3.jpg',
		},
		{
			id: 2,
			name: 'Không ồn ã, không vội vã',
			url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg',
		},
		{
			id: 3,
			name: 'Âm nhạc V-Pop nhẹ nhàng',
			url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/5/6/4/6564372bd4a9df8add0125fe9fe4b226.jpg',
		},
		{
			id: 4,
			name: 'Nhạc Việt "lâu phai',
			url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
		},
	];

	return (
		<div>
			<h2>Có thể bạn sẽ thích đếy</h2>
			<AlbumList listAlbums={albumList} />
		</div>
	);
}

export default AlbumFeature;
