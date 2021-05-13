const { kakao } = window;

const IMGSRC = `https://user-images.githubusercontent.com/48883344/117864452-c6e80180-b2cf-11eb-839c-72063ff605af.png`;
const IMGSIZE = new kakao.maps.Size(80, 60);
const IMGOPTIONS = { offset: new kakao.maps.Point(27, 59) };

const markerImg = new kakao.maps.MarkerImage(IMGSRC, IMGSIZE, IMGOPTIONS);

export default markerImg;