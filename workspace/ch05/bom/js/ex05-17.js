// Geolocation API
const btn = document.querySelector("button");
btn?.addEventListener("click", find);
function find() {
    navigator.geolocation.getCurrentPosition((currentPosition) => {
        console.log(currentPosition);
        const position = {
            lat: currentPosition.coords.latitude, // 위도
            lng: currentPosition.coords.longitude, // 경도
            accuracy: currentPosition.coords.accuracy, // 위경도 오차(m)
        };
        showPosition(position);
    });
}
const myPosition = document.querySelector("#my-position");
function showPosition(position) {
    if (myPosition) {
        myPosition.textContent = `${position.lat},${position.lng}(${position.accuracy.toFixed()}m)`;
        panTo(position);
        showMarker(position);
    }
}
const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(37.634259, 126.709894), //지도의 중심좌표.
    level: 7, //지도의 레벨(확대, 축소 정도)
};
const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
function panTo(position) {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new window.kakao.maps.LatLng(position.lat, position.lng);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
}
function showMarker(position) {
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new window.kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: new window.kakao.maps.LatLng(position.lat, position.lng),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
}
export {};
