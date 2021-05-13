// server/database/index.js
const XLSX = require('xlsx');
const regex = /[^0-9]/g;
const dataLen = 208; // ParkingData.xlsx의 총 행 수

/* 사용법
* const db = require('/database') 본 파일의 경로!
*db.getAllData()
*/
module.exports ={
	getAllData: function(){
		return 	{
			parkingData: [
				{
					"location": "을왕리· 왕산 해수욕장",
					"from": "용유서로 452",
					"to": "용유서로 317",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "240",
					"startPos": {
						"x": 126.372055357741,
						"y": 37.4585601178676
					},
					"endPos": {
						"x": 126.374687896339,
						"y": 37.4464737102683
					}
				},
				{
					"location": "물류단지 일원",
					"from": "운서동 3169-5 일원",
					"to": "운서동 3165-1 일원",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "120",
					"startPos": {
						"x": 126.48291370275,
						"y": 37.4866150710342
					},
					"endPos": {
						"x": 126.475272967115,
						"y": 37.4820018919663
					}
				},
				{
					"location": "공항신도시",
					"from": "운서동 2748-1 공원사거리",
					"to": "운서동 2739-4 은골사거리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "200",
					"startPos": {
						"x": 126.483132388963,
						"y": 37.4959870661786
					},
					"endPos": {
						"x": 126.490143793721,
						"y": 37.4955513693321
					}
				},
				{
					"location": "공항신도시",
					"from": "운서동 2749-18 공원사거리",
					"to": "운서동 2799-2 은골사거리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "200",
					"startPos": {
						"x": 126.484626716106,
						"y": 37.4949662115735
					},
					"endPos": {
						"x": 126.490051572923,
						"y": 37.4948678746038
					}
				},
				{
					"location": "주택단지 일원",
					"from": "운북동 656-11",
					"to": "운서동 3093-6",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "270",
					"startPos": {
						"x": 126.503917758978,
						"y": 37.5069503192451
					},
					"endPos": {
						"x": 126.496225386291,
						"y": 37.4900532725623
					}
				},
				{
					"location": "운서지구 일원",
					"from": "운서동2937-1",
					"to": "운서동 2929-2",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "70",
					"startPos": {
						"x": 126.505848278394,
						"y": 37.4856978949707
					},
					"endPos": {
						"x": 126.507851657557,
						"y": 37.4834440910603
					}
				},
				{
					"location": "운서지구 일원",
					"from": "운서동 2927-1",
					"to": "운서동 2927-4",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.507377754519,
						"y": 37.4819377946939
					},
					"endPos": {
						"x": 126.507824636324,
						"y": 37.4823973036303
					}
				},
				{
					"location": "주택단지 일원",
					"from": "운남동 1613-15 주택단지 일원",
					"to": "운남동 1619-36 주택단지 일원",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "250",
					"startPos": {
						"x": 126.516998003067,
						"y": 37.4725604049924
					},
					"endPos": {
						"x": 126.521142219358,
						"y": 37.4737952708546
					}
				},
				{
					"location": "미단시티 레져단지 일원",
					"from": "운북동 1272-1",
					"to": "운북동 1277-6",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "160",
					"startPos": {
						"x": 126.517277781695,
						"y": 37.5270126408307
					},
					"endPos": {
						"x": 126.528797588044,
						"y": 37.5225800978324
					}
				},
				{
					"location": "미단시티 일원",
					"from": "운북동656-11 백년육교",
					"to": "중산동 1097-58",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "700",
					"startPos": {
						"x": 126.521991,
						"y": 37.510944
					},
					"endPos": {
						"x": 126.563069,
						"y": 37.486736
					}
				},
				{
					"location": "영종하늘도시",
					"from": "중산동 1880-4 우미린1단지",
					"to": "중산동 136-87",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "210",
					"startPos": {
						"x": 126.555050125318,
						"y": 37.495210111166
					},
					"endPos": {
						"x": 126.571015588335,
						"y": 37.4862548868158
					}
				},
				{
					"location": "미단시티 일원",
					"from": "운북동656-11 백년육교",
					"to": "중산동 1097-58",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "250",
					"startPos": {
						"x": 126.563069,
						"y": 37.486736
					},
					"endPos": {
						"x": 126.573749,
						"y": 37.496125
					}
				},
				{
					"location": "미단시티 일원",
					"from": "운북동656-11 백년육교",
					"to": "중산동 1097-58",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "250",
					"startPos": {
						"x": 126.573749,
						"y": 37.496125
					},
					"endPos": {
						"x": 126.570753,
						"y": 37.504462
					}
				},
				{
					"location": "월미도문화거리 일원",
					"from": "월미문화로 49",
					"to": "월미로260번길 9",
					"availableTimeStart": "00",
					"availableTimeEnd": "24",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.597283983655,
						"y": 37.4738567168001
					},
					"endPos": {
						"x": 126.597562700077,
						"y": 37.4735433764771
					}
				},
				{
					"location": "여객터미널",
					"from": "연안부두로 69-1",
					"to": "연안부두로 3",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "220",
					"startPos": {
						"x": 126.598885717514,
						"y": 37.4532417099649
					},
					"endPos": {
						"x": 126.605186916516,
						"y": 37.4567845543708
					}
				},
				{
					"location": "서부공원사업소",
					"from": "북성동1가 102-11",
					"to": "북성동 월미로 329",
					"availableTimeStart": "00",
					"availableTimeEnd": "24",
					"maxStopTime": 0,
					"maxNum": "36",
					"startPos": {
						"x": 126.599518606302,
						"y": 37.4695212047586
					},
					"endPos": {
						"x": 126.599712,
						"y": 37.470339
					}
				},
				{
					"location": "종합어시장 일원",
					"from": "연안부두로33번길 3",
					"to": "연안부두로33번길 25",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.602848759881,
						"y": 37.4552300340761
					},
					"endPos": {
						"x": 126.605030611594,
						"y": 37.4543644323142
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1612-10",
					"to": "오류동 1612-4",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "120",
					"startPos": {
						"x": 126.603164950094,
						"y": 37.5870036945024
					},
					"endPos": {
						"x": 126.600368517578,
						"y": 37.5887972579572
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1614-9",
					"to": "오류동 1613-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "120",
					"startPos": {
						"x": 126.604299118039,
						"y": 37.5887150140947
					},
					"endPos": {
						"x": 126.601612465428,
						"y": 37.5897359326351
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1615-7",
					"to": "오류동 1614-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "130",
					"startPos": {
						"x": 126.605496286582,
						"y": 37.5890174992566
					},
					"endPos": {
						"x": 126.602362338092,
						"y": 37.5883207801995
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1623-1",
					"to": "오류동 1638-7",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "660",
					"startPos": {
						"x": 126.605973789012,
						"y": 37.5956424834022
					},
					"endPos": {
						"x": 126.621994916316,
						"y": 37.5881906527187
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1619-6",
					"to": "오류동 1618-5",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "120",
					"startPos": {
						"x": 126.607725368268,
						"y": 37.5910617291798
					},
					"endPos": {
						"x": 126.604945199972,
						"y": 37.5928906731821
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1621-5",
					"to": "오류동 1619-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "120",
					"startPos": {
						"x": 126.608263540074,
						"y": 37.5932419150204
					},
					"endPos": {
						"x": 126.606236000888,
						"y": 37.5909237354022
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1625-3",
					"to": "오류동 1625-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.609982785199,
						"y": 37.5947625854054
					},
					"endPos": {
						"x": 126.609075115787,
						"y": 37.5939472579843
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1625-11",
					"to": "오류동 1624-5",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "110",
					"startPos": {
						"x": 126.611096812101,
						"y": 37.5940621248624
					},
					"endPos": {
						"x": 126.608207465111,
						"y": 37.5958676961859
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1647-1",
					"to": "오류동 1650-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "130",
					"startPos": {
						"x": 126.611567705152,
						"y": 37.5972170187444
					},
					"endPos": {
						"x": 126.614370839197,
						"y": 37.5991861109205
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1644-1",
					"to": "오류동 1655-7",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "300",
					"startPos": {
						"x": 126.613015836476,
						"y": 37.601432365462
					},
					"endPos": {
						"x": 126.620314886495,
						"y": 37.5957080895864
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1632-8",
					"to": "오류동 1632-14",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "150",
					"startPos": {
						"x": 126.61364946531,
						"y": 37.5872409341335
					},
					"endPos": {
						"x": 126.618241579781,
						"y": 37.5872716009975
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1633-8",
					"to": "오류동 1636-2",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "260",
					"startPos": {
						"x": 126.614186441482,
						"y": 37.5863925260498
					},
					"endPos": {
						"x": 126.621997353423,
						"y": 37.5868324460693
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1656-4",
					"to": "오류동 1656-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "130",
					"startPos": {
						"x": 126.616876353483,
						"y": 37.5943514290886
					},
					"endPos": {
						"x": 126.61482816351,
						"y": 37.595846594993
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1652-5",
					"to": "오류동 1652-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.617417511308,
						"y": 37.5973599474186
					},
					"endPos": {
						"x": 126.616298918315,
						"y": 37.5963388217447
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1653-8",
					"to": "오류동 1651-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "110",
					"startPos": {
						"x": 126.61772513753,
						"y": 37.5953519694614
					},
					"endPos": {
						"x": 126.615375802939,
						"y": 37.5969469174874
					}
				},
				{
					"location": "차이나타운 일원",
					"from": "차이나타운로52번길 15",
					"to": "제물량로183  중동우체국",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.617814686651,
						"y": 37.4750337362463
					},
					"endPos": {
						"x": 126.623320336052,
						"y": 37.4700632483944
					}
				},
				{
					"location": "검단산업 단지일원",
					"from": "오류동 1653-5",
					"to": "오류동 1653-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.61865062398,
						"y": 37.5965631307685
					},
					"endPos": {
						"x": 126.617263383298,
						"y": 37.5956636635814
					}
				},
				{
					"location": "화도진공원",
					"from": "화도진로 146",
					"to": "화도진로 114",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "120",
					"startPos": {
						"x": 126.626559271914,
						"y": 37.4837515917306
					},
					"endPos": {
						"x": 126.62834951061,
						"y": 37.4814730615623
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동30-1",
					"to": "송도동3-47",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1360",
					"startPos": {
						"x": 126.62688646749,
						"y": 37.4036948694123
					},
					"endPos": {
						"x": 126.648352,
						"y": 37.373492
					}
				},
				{
					"location": "화수아파트",
					"from": "석수로 35",
					"to": "석수로 1",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.626924,
						"y": 37.480811
					},
					"endPos": {
						"x": 126.627984,
						"y": 37.479415
					}
				},
				{
					"location": "시장·상가 일원",
					"from": "우현로 37-1",
					"to": "우현로90  하나은행",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "70",
					"startPos": {
						"x": 126.627732217533,
						"y": 37.4707842569384
					},
					"endPos": {
						"x": 126.631133921006,
						"y": 37.4746400311144
					}
				},
				{
					"location": "주택지역 일원",
					"from": "제물량로 141",
					"to": "제물량로 81",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.628027312966,
						"y": 37.4696575019238
					},
					"endPos": {
						"x": 126.633747931518,
						"y": 37.4669110008645
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동80-5",
					"to": "송도동16-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "800",
					"startPos": {
						"x": 126.628097238146,
						"y": 37.3948764478182
					},
					"endPos": {
						"x": 126.641831306629,
						"y": 37.4039731384321
					}
				},
				{
					"location": "청라근린상가  밀집지역",
					"from": "총각네푸줏간 (푸른로3)",
					"to": "청라sk뷰아파트 정문(솔빛로93)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "15",
					"startPos": {
						"x": 126.62976940325,
						"y": 37.5252954536514
					},
					"endPos": {
						"x": 126.631371466498,
						"y": 37.5277949344419
					}
				},
				{
					"location": "식당가 일대",
					"from": "선수촌4 (가로등매소홀로우-37)",
					"to": "매소홀터널(가로등매소홀로우-44)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.631105,
						"y": 37.451321
					},
					"endPos": {
						"x": 126.632202,
						"y": 37.45062
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동34-1",
					"to": "송도동103-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "360",
					"startPos": {
						"x": 126.631617154984,
						"y": 37.3906278112075
					},
					"endPos": {
						"x": 126.63740230394,
						"y": 37.3846968190125
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동12-1",
					"to": "송도동2-3",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1480",
					"startPos": {
						"x": 126.632856,
						"y": 37.379586
					},
					"endPos": {
						"x": 126.651949766145,
						"y": 37.3966216538049
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동13-24",
					"to": "송도동3-13",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1320",
					"startPos": {
						"x": 126.633189,
						"y": 37.371173
					},
					"endPos": {
						"x": 126.652579,
						"y": 37.392448
					}
				},
				{
					"location": "용현동 식당가",
					"from": "매소홀로 63",
					"to": "매소홀로 53",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "18",
					"startPos": {
						"x": 126.633270980351,
						"y": 37.450186455142
					},
					"endPos": {
						"x": 126.632303298597,
						"y": 37.4508283239976
					}
				},
				{
					"location": "용현동 식당가",
					"from": "매소홀로 63 김밥세상",
					"to": "매소홀로 53 미스타쭝",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "18",
					"startPos": {
						"x": 126.633270980351,
						"y": 37.450186455142
					},
					"endPos": {
						"x": 126.632303298597,
						"y": 37.4508283239976
					}
				},
				{
					"location": "송현시장",
					"from": "송현로5",
					"to": "송현로41-2",
					"availableTimeStart": "09",
					"availableTimeEnd": "17",
					"maxStopTime": 120,
					"maxNum": "60",
					"startPos": {
						"x": 126.633725,
						"y": 37.477182
					},
					"endPos": {
						"x": 126.636267,
						"y": 37.479668
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동23-1",
					"to": "송도동22-22",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "480",
					"startPos": {
						"x": 126.635757129696,
						"y": 37.3980667499437
					},
					"endPos": {
						"x": 126.645725592612,
						"y": 37.3927140690547
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동24-7",
					"to": "송도동187 글로벌캠퍼스 남측",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1480",
					"startPos": {
						"x": 126.635830329649,
						"y": 37.3927480413635
					},
					"endPos": {
						"x": 126.664472870417,
						"y": 37.3769146316075
					}
				},
				{
					"location": "시장·상가 일원",
					"from": "화도진로 2 배다리삼거리",
					"to": "화도진로 68",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.636876060797,
						"y": 37.4736714415263
					},
					"endPos": {
						"x": 126.63197188211,
						"y": 37.4781524152471
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동19-1",
					"to": "송도동3-47",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1040",
					"startPos": {
						"x": 126.637036303273,
						"y": 37.3992609245146
					},
					"endPos": {
						"x": 126.661104437371,
						"y": 37.3873570471543
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동12-1 잭니골프장 서측3",
					"to": "송도동212-3",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1760",
					"startPos": {
						"x": 126.63782,
						"y": 37.375881
					},
					"endPos": {
						"x": 126.658564,
						"y": 37.362335
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동18-1",
					"to": "송도동18-10",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "360",
					"startPos": {
						"x": 126.638728973839,
						"y": 37.4008240092616
					},
					"endPos": {
						"x": 126.645082642206,
						"y": 37.3964457266453
					}
				},
				{
					"location": "청라 국제도시",
					"from": "청라한울로 17 청라한라비발디 381동",
					"to": "청라커낼로 163 29블럭 호반베르디움 493동 일원",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "400",
					"startPos": {
						"x": 126.639499604498,
						"y": 37.5411401176631
					},
					"endPos": {
						"x": 126.638944971777,
						"y": 37.5260657526649
					}
				},
				{
					"location": "청라 국제도시",
					"from": "청라한울로 17 청라한라비발디 383동 일원",
					"to": "청라한울로95 청라제일풍경채",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "350",
					"startPos": {
						"x": 126.639499604498,
						"y": 37.5411401176631
					},
					"endPos": {
						"x": 126.647897830739,
						"y": 37.5387820191093
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동17-1",
					"to": "송도동2-12",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1040",
					"startPos": {
						"x": 126.640748,
						"y": 37.403241
					},
					"endPos": {
						"x": 126.662128,
						"y": 37.38927
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동23-4",
					"to": "송도동15-9",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "400",
					"startPos": {
						"x": 126.64099227289,
						"y": 37.3944962081248
					},
					"endPos": {
						"x": 126.6478,
						"y": 37.40093
					}
				},
				{
					"location": "인천축구 경기장",
					"from": "샛골로 61",
					"to": "석정로49번길 30",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "120",
					"startPos": {
						"x": 126.641671838004,
						"y": 37.4682961475021
					},
					"endPos": {
						"x": 126.642498314439,
						"y": 37.4649942111741
					}
				},
				{
					"location": "청라한울로 58 일원",
					"from": "청라한울로 58 초은교회 서측으로 80m지점",
					"to": "청라한울로 58 초은교회 동측으로 80m지점",
					"availableTimeStart": "X",
					"availableTimeEnd": "X",
					"maxStopTime": 15,
					"maxNum": "15",
					"startPos": {
						"x": 126.643087302725,
						"y": 37.5388395941616
					},
					"endPos": {
						"x": 126.643087302725,
						"y": 37.5388395941616
					}
				},
				{
					"location": "동아아파트 일대",
					"from": "용오로 78-3",
					"to": "용현동577-1",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "70",
					"startPos": {
						"x": 126.644635,
						"y": 37.452868
					},
					"endPos": {
						"x": 126.640103685993,
						"y": 37.4547833230773
					}
				},
				{
					"location": "동아아파트 일대",
					"from": "용오로 78-3 용현마트",
					"to": "용오로 용현굴다리전",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "50",
					"startPos": {
						"x": 126.644635,
						"y": 37.452868
					},
					"endPos": {
						"x": 126.640103685993,
						"y": 37.4547833230773
					}
				},
				{
					"location": "동산고교",
					"from": "동산로 93",
					"to": "동산로31-1",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "200",
					"startPos": {
						"x": 126.644833,
						"y": 37.47555
					},
					"endPos": {
						"x": 126.648566563403,
						"y": 37.4710251894575
					}
				},
				{
					"location": "현대시장",
					"from": "샛골로 199",
					"to": "샛골로 159",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "120",
					"startPos": {
						"x": 126.645289334435,
						"y": 37.4801299807728
					},
					"endPos": {
						"x": 126.644566333791,
						"y": 37.4766455616489
					}
				},
				{
					"location": "라향길 일대",
					"from": "석정로50번길 23 라향길",
					"to": "석정로50번길 5 진성기획",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "10",
					"startPos": {
						"x": 126.645471443048,
						"y": 37.4635781031669
					},
					"endPos": {
						"x": 126.64456897246,
						"y": 37.463947795048
					}
				},
				{
					"location": "시장·상가 주택가 일원",
					"from": "송림로 97",
					"to": "송림로 143",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.645488,
						"y": 37.476181
					},
					"endPos": {
						"x": 126.650445,
						"y": 37.477544
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동213-1",
					"to": "송도동218-2",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "480",
					"startPos": {
						"x": 126.645705001355,
						"y": 37.3694088011925
					},
					"endPos": {
						"x": 126.653370625895,
						"y": 37.3643136746978
					}
				},
				{
					"location": "황금고개4(주택가)",
					"from": "인중로 666",
					"to": "인중로680번길 2",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.645839375229,
						"y": 37.4804335652533
					},
					"endPos": {
						"x": 126.64703688674,
						"y": 37.4799949702304
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동214",
					"to": "송도동149",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1240",
					"startPos": {
						"x": 126.646354,
						"y": 37.366636
					},
					"endPos": {
						"x": 126.666493,
						"y": 37.38763
					}
				},
				{
					"location": "호두산로 18 일원",
					"from": "호두산로 18 면허학원",
					"to": "호두산로 74 두성로보텍",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.647026610106,
						"y": 37.5456438959269
					},
					"endPos": {
						"x": 126.643502018602,
						"y": 37.5476069032215
					}
				},
				{
					"location": "마전동 상가지역",
					"from": "오류동 52-2 봉수대로 접속부",
					"to": "서구 왕길동 164-74",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "420",
					"startPos": {
						"x": 126.64733,
						"y": 37.603835
					},
					"endPos": {
						"x": 126.655439,
						"y": 37.59189
					}
				},
				{
					"location": "숭의시장 3거리",
					"from": "새천년로 6",
					"to": "새천년로 8-1",
					"availableTimeStart": "22",
					"availableTimeEnd": "10",
					"maxStopTime": 0,
					"maxNum": "10",
					"startPos": {
						"x": 126.648446864986,
						"y": 37.4691158186852
					},
					"endPos": {
						"x": 126.648566096782,
						"y": 37.4693216438296
					}
				},
				{
					"location": "숭의시장 3거리",
					"from": "새천년로 6",
					"to": "새천년로 8-1",
					"availableTimeStart": "17",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "10",
					"startPos": {
						"x": 126.648446864986,
						"y": 37.4691158186852
					},
					"endPos": {
						"x": 126.648566096782,
						"y": 37.4693216438296
					}
				},
				{
					"location": "숭의시장 3거리",
					"from": "새천년로 6 씽씽부동산",
					"to": "새천년로 8-1 대우루컴스",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "8",
					"startPos": {
						"x": 126.648446864986,
						"y": 37.4691158186852
					},
					"endPos": {
						"x": 126.648566096782,
						"y": 37.4693216438296
					}
				},
				{
					"location": "박문로터리",
					"from": "새천년로 31",
					"to": "새천년로 37",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "6",
					"startPos": {
						"x": 126.649420764882,
						"y": 37.4714899461066
					},
					"endPos": {
						"x": 126.649683561931,
						"y": 37.4719380033963
					}
				},
				{
					"location": "용현4 물텅벙이거리",
					"from": "독배로403  동원물텅벙",
					"to": "독배로 401 굿모닝부동산",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "18",
					"startPos": {
						"x": 126.649496,
						"y": 37.455757
					},
					"endPos": {
						"x": 126.648395,
						"y": 37.456191
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동217-2",
					"to": "송도동180-1",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1080",
					"startPos": {
						"x": 126.649539,
						"y": 37.361623
					},
					"endPos": {
						"x": 126.667147,
						"y": 37.37999
					}
				},
				{
					"location": "도요지로 15 일원",
					"from": "도요지로15 114공인중개사",
					"to": "경서로31번길47태평2차 아파트202동뒷길",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.651255573313,
						"y": 37.5599131771107
					},
					"endPos": {
						"x": 126.650832959641,
						"y": 37.5588657648424
					}
				},
				{
					"location": "청라 국제도시",
					"from": "청라라임로17 힐데스하임 128동 일원",
					"to": "청라라임로 138번길 4-4 도미노피자 청라점",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "370",
					"startPos": {
						"x": 126.651562007284,
						"y": 37.5292598330991
					},
					"endPos": {
						"x": 126.653464239072,
						"y": 37.5394450590366
					}
				},
				{
					"location": "중앙공구상가",
					"from": "방축로 54",
					"to": "방축로 72",
					"availableTimeStart": "X",
					"availableTimeEnd": "X",
					"maxStopTime": 15,
					"maxNum": "15",
					"startPos": {
						"x": 126.651711066236,
						"y": 37.4851606926812
					},
					"endPos": {
						"x": 126.653414846976,
						"y": 37.484214065201
					}
				},
				{
					"location": "장천사거리 일대",
					"from": "장천로 67 향촌다방",
					"to": "장천로 39 세종자원",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "35",
					"startPos": {
						"x": 126.6517217624,
						"y": 37.4613877992397
					},
					"endPos": {
						"x": 126.648969,
						"y": 37.460181
					}
				},
				{
					"location": "엑슬루타워 부근",
					"from": "청라 엑슬루타워 국민은행(중봉대로586번길22)",
					"to": "우리은행 청라지점(청라라임로 51 에일린의뜰)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.652483364245,
						"y": 37.5309768249497
					},
					"endPos": {
						"x": 126.652910175164,
						"y": 37.5321402675518
					}
				},
				{
					"location": "산업용품 유통센터",
					"from": "방축로37번길 시점",
					"to": "방축로37번길 종점",
					"availableTimeStart": "X",
					"availableTimeEnd": "X",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.652576,
						"y": 37.488488
					},
					"endPos": {
						"x": 126.651482,
						"y": 37.487304
					}
				},
				{
					"location": "검단먹거리타운 일원",
					"from": "온누리병원(완정로 199)",
					"to": "검단KT지사 (검단로 441) ",
					"availableTimeStart": "00",
					"availableTimeEnd": "24",
					"maxStopTime": 0,
					"maxNum": "15",
					"startPos": {
						"x": 126.654330758269,
						"y": 37.6027956839203
					},
					"endPos": {
						"x": 126.653511790147,
						"y": 37.600900453479
					}
				},
				{
					"location": "가좌동 시범공단",
					"from": "가좌동 178-379 봉수대길사거리",
					"to": "가좌동 602-24 인천교펌프장4",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "400",
					"startPos": {
						"x": 126.655441,
						"y": 37.490277
					},
					"endPos": {
						"x": 126.64801,
						"y": 37.491703
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동220",
					"to": "송도동163",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1560",
					"startPos": {
						"x": 126.656122,
						"y": 37.357762
					},
					"endPos": {
						"x": 126.680771,
						"y": 37.383244
					}
				},
				{
					"location": "청라 국제도시",
					"from": "청라라임로10 초은중학교 일원",
					"to": "청라에메랄드로 156 웰카운티아파트 207동 일원",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "400",
					"startPos": {
						"x": 126.656559,
						"y": 37.52842
					},
					"endPos": {
						"x": 126.657183857185,
						"y": 37.5387033685206
					}
				},
				{
					"location": "건지로 153번길24",
					"from": "건지로153번길24 다연정공",
					"to": "석남로 46 석남완충공원",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "140",
					"startPos": {
						"x": 126.658377165149,
						"y": 37.5011249022955
					},
					"endPos": {
						"x": 126.666328394667,
						"y": 37.5008004701105
					}
				},
				{
					"location": "제물포 스마트타운앞",
					"from": "석정로 218",
					"to": "석정로 234",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "26",
					"startPos": {
						"x": 126.659588,
						"y": 37.467934
					},
					"endPos": {
						"x": 126.661315,
						"y": 37.468104
					}
				},
				{
					"location": "제물포 스마트타운앞",
					"from": "석정로218  올제스튜디오",
					"to": "석정로 234 새마을금고",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "26",
					"startPos": {
						"x": 126.659768,
						"y": 37.467962
					},
					"endPos": {
						"x": 126.662461,
						"y": 37.4682
					}
				},
				{
					"location": "청라 국제도시",
					"from": "담지로 104번길 7-5 한뜻교회 일원",
					"to": "담지로 8번길6 일원",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "350",
					"startPos": {
						"x": 126.660285309351,
						"y": 37.5395817332651
					},
					"endPos": {
						"x": 126.66050607508,
						"y": 37.5303659692176
					}
				},
				{
					"location": "산업용품 유통센터",
					"from": "방축로61번길 시점 ",
					"to": "방축로61번길 종점",
					"availableTimeStart": "X",
					"availableTimeEnd": "X",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.660917,
						"y": 37.481595
					},
					"endPos": {
						"x": 126.664951,
						"y": 37.47956
					}
				},
				{
					"location": "학익동 식당가",
					"from": "매소홀로 372",
					"to": "매소홀로 388",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.66317316963,
						"y": 37.4401502052775
					},
					"endPos": {
						"x": 126.665096091842,
						"y": 37.4397864090931
					}
				},
				{
					"location": "학익동 식당가",
					"from": "매소홀로 372",
					"to": "매소홀로 388",
					"availableTimeStart": "10",
					"availableTimeEnd": "12",
					"maxStopTime": 15,
					"maxNum": "30",
					"startPos": {
						"x": 126.66317316963,
						"y": 37.4401502052775
					},
					"endPos": {
						"x": 126.665096091842,
						"y": 37.4397864090931
					}
				},
				{
					"location": "학익동 식당가",
					"from": "매소홀로372  볏집사랑통삼겹살",
					"to": "매소홀로388  해변해물탕",
					"availableTimeStart": "14",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "30",
					"startPos": {
						"x": 126.66317316963,
						"y": 37.4401502052775
					},
					"endPos": {
						"x": 126.665096091842,
						"y": 37.4397864090931
					}
				},
				{
					"location": "현우산업 일대",
					"from": "염전로187번길 61 옵티컴",
					"to": "염전로 181 현우산업",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "40",
					"startPos": {
						"x": 126.664682921924,
						"y": 37.4795431070267
					},
					"endPos": {
						"x": 126.662792003098,
						"y": 37.4770723865549
					}
				},
				{
					"location": "마전동 상가지역",
					"from": "마전동 249-16 검암고사거리",
					"to": "불로동 185-37 김포시계",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "1120",
					"startPos": {
						"x": 126.665047925568,
						"y": 37.6037912761793
					},
					"endPos": {
						"x": 126.695133892425,
						"y": 37.619202496368
					}
				},
				{
					"location": "송도 국제도시",
					"from": "송도동157",
					"to": "송도동150",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "320",
					"startPos": {
						"x": 126.665282,
						"y": 37.383032
					},
					"endPos": {
						"x": 126.66862,
						"y": 37.386534
					}
				},
				{
					"location": "율도로 일원",
					"from": "율도로 55 아도니스",
					"to": "봉수대로 416-7 평해백반전문",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "75",
					"startPos": {
						"x": 126.668324838281,
						"y": 37.5137713167277
					},
					"endPos": {
						"x": 126.662735834024,
						"y": 37.51351550767
					}
				},
				{
					"location": "인천기계공고 부근",
					"from": "한나루로 516번길 1",
					"to": "한나루로 584",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "60",
					"startPos": {
						"x": 126.668342738668,
						"y": 37.4529126728472
					},
					"endPos": {
						"x": 126.671981931794,
						"y": 37.4579711784946
					}
				},
				{
					"location": "문학산· 체육공원",
					"from": "매소홀로 418번길 5",
					"to": "매소홀로 442",
					"availableTimeStart": "06",
					"availableTimeEnd": "22",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.668722632403,
						"y": 37.4396542351399
					},
					"endPos": {
						"x": 126.67103635486,
						"y": 37.4395341113246
					}
				},
				{
					"location": "문학산·체육공원",
					"from": "매소홀로 418번길 5 베스트피쉬",
					"to": "매소홀로 442 김밥천국",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "40",
					"startPos": {
						"x": 126.668722632403,
						"y": 37.4396542351399
					},
					"endPos": {
						"x": 126.67103635486,
						"y": 37.4395341113246
					}
				},
				{
					"location": "신기사거리 일원",
					"from": "인주대로 292번길 3",
					"to": "인주대로 468",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "150",
					"startPos": {
						"x": 126.66894639294,
						"y": 37.4518724362556
					},
					"endPos": {
						"x": 126.688601032878,
						"y": 37.4505657762221
					}
				},
				{
					"location": "V-PLUS 아울렛 정문 앞",
					"from": "청능대로 23번길 V-PLUS 정문 앞",
					"to": "청능대로 23번길 V-PLUS 정문 앞",
					"availableTimeStart": "09",
					"availableTimeEnd": "18",
					"maxStopTime": 0,
					"maxNum": "14",
					"startPos": {
						"x": 126.669429,
						"y": 37.420922
					},
					"endPos": {
						"x": 126.66905,
						"y": 37.419972
					}
				},
				{
					"location": "V-PLUS 아울렛 정문 앞",
					"from": "청능대로 23번길 V-PLUS 정문 앞",
					"to": "청능대로 23번길 V-PLUS 정문 앞",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "14",
					"startPos": {
						"x": 126.669429,
						"y": 37.420922
					},
					"endPos": {
						"x": 126.66905,
						"y": 37.419972
					}
				},
				{
					"location": "이화아파트 일대",
					"from": "장고개로36번길 53 준헤어샵",
					"to": "장고개로36번길 7 신광스틸기업",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "30",
					"startPos": {
						"x": 126.669476784655,
						"y": 37.469469392426
					},
					"endPos": {
						"x": 126.667679286962,
						"y": 37.4710746608048
					}
				},
				{
					"location": "학익동 식당가",
					"from": "소성로 197",
					"to": "소성로 177",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "46",
					"startPos": {
						"x": 126.669839,
						"y": 37.440674
					},
					"endPos": {
						"x": 126.667951,
						"y": 37.441441
					}
				},
				{
					"location": "학익동 식당가",
					"from": "소성로197 수협은행",
					"to": "소성로177  인화설농탕",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "46",
					"startPos": {
						"x": 126.670204,
						"y": 37.440521
					},
					"endPos": {
						"x": 126.66794,
						"y": 37.441424
					}
				},
				{
					"location": "학익동 식당가",
					"from": "매소홀로435  독도수산",
					"to": "매소홀로409  낙원부동산",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "58",
					"startPos": {
						"x": 126.670366181131,
						"y": 37.440018482021
					},
					"endPos": {
						"x": 126.667510011785,
						"y": 37.4401876823502
					}
				},
				{
					"location": "태화아파트 일대",
					"from": "석정로 317 상지원수족관",
					"to": "석정로 275 도화알뜰매장",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "40",
					"startPos": {
						"x": 126.670770920349,
						"y": 37.4679968480643
					},
					"endPos": {
						"x": 126.666055866016,
						"y": 37.4685214174936
					}
				},
				{
					"location": "마전동 상가지역",
					"from": "마전동 1020-14 완정삼거리",
					"to": "서구 왕길동 164-74",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "400",
					"startPos": {
						"x": 126.67222,
						"y": 37.593901
					},
					"endPos": {
						"x": 126.655439,
						"y": 37.59189
					}
				},
				{
					"location": "상가.식당 밀집구간",
					"from": "청학동 486번지 안스베이커리",
					"to": "청학동 478번지 청학중학교3",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.673002,
						"y": 37.416843
					},
					"endPos": {
						"x": 126.671157,
						"y": 37.417609
					}
				},
				{
					"location": "신현사거리 부근",
					"from": "석남 국민은행 (율도로98)",
					"to": "진흥아파트 부근(율도로115)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "15",
					"startPos": {
						"x": 126.673006,
						"y": 37.513334
					},
					"endPos": {
						"x": 126.675055,
						"y": 37.513248
					}
				},
				{
					"location": "검암동 상가지역",
					"from": "연희동 114-1 빈정내사거리",
					"to": "검암동 524",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "500",
					"startPos": {
						"x": 126.673255,
						"y": 37.55245
					},
					"endPos": {
						"x": 126.673661,
						"y": 37.564957
					}
				},
				{
					"location": "청마로 167번길 일원",
					"from": "청마로 167번길 24 웰메이드 검단점",
					"to": "청마로 171 농협",
					"availableTimeStart": "X",
					"availableTimeEnd": "X",
					"maxStopTime": 15,
					"maxNum": "30",
					"startPos": {
						"x": 126.673998818785,
						"y": 37.5924875165868
					},
					"endPos": {
						"x": 126.676539537866,
						"y": 37.5925604319353
					}
				},
				{
					"location": "용담공원",
					"from": "청학동 467번지, 용담공원 북측 구간",
					"to": "청학동 467번지 용담공원 북측 구간",
					"availableTimeStart": "09",
					"availableTimeEnd": "18",
					"maxStopTime": 0,
					"maxNum": "100",
					"startPos": {
						"x": 126.674176,
						"y": 37.418519
					},
					"endPos": {
						"x": 126.675152,
						"y": 37.419431
					}
				},
				{
					"location": "용담공원",
					"from": "청학동 467번지, 용담공원 북측 구간",
					"to": "청학동 467번지 용담공원 북측 구간",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "100",
					"startPos": {
						"x": 126.674176,
						"y": 37.418519
					},
					"endPos": {
						"x": 126.675152,
						"y": 37.419431
					}
				},
				{
					"location": "가정로38번길29 일원",
					"from": "가정로 38번길29 오성보링",
					"to": "가정로 37번길57 진성모터스",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "130",
					"startPos": {
						"x": 126.67418811863,
						"y": 37.4880408351105
					},
					"endPos": {
						"x": 126.664645957778,
						"y": 37.4880052946097
					}
				},
				{
					"location": "도요지로 216-1 일원",
					"from": "도요지로 216-1 프라다빌라",
					"to": "도요지로 240 면의전설",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "55",
					"startPos": {
						"x": 126.674271719774,
						"y": 37.5566254645998
					},
					"endPos": {
						"x": 126.676971062997,
						"y": 37.5565788760039
					}
				},
				{
					"location": "신기시장주변(식당가)",
					"from": "인하로 238",
					"to": "인하로 254-1",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "34",
					"startPos": {
						"x": 126.674584375357,
						"y": 37.4482209225543
					},
					"endPos": {
						"x": 126.676373297236,
						"y": 37.448105051158
					}
				},
				{
					"location": "신기시장주변 식당가",
					"from": "인하로 238 신한부동산",
					"to": "인하로 254-1 CU부동산",
					"availableTimeStart": "10",
					"availableTimeEnd": "12",
					"maxStopTime": 15,
					"maxNum": "34",
					"startPos": {
						"x": 126.674584375357,
						"y": 37.4482209225543
					},
					"endPos": {
						"x": 126.676373297236,
						"y": 37.448105051158
					}
				},
				{
					"location": "신기시장주변 식당가",
					"from": "인하로 238 신한부동산",
					"to": "인하로 254-1 CU부동산",
					"availableTimeStart": "14",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "34",
					"startPos": {
						"x": 126.674584375357,
						"y": 37.4482209225543
					},
					"endPos": {
						"x": 126.676373297236,
						"y": 37.448105051158
					}
				},
				{
					"location": "서곶로 일원",
					"from": "서곶로 866 강서빌딩",
					"to": "서곶로 880 믿음농약사",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "12",
					"startPos": {
						"x": 126.674679647298,
						"y": 37.5942374311707
					},
					"endPos": {
						"x": 126.675167744,
						"y": 37.5956209568511
					}
				},
				{
					"location": "연희사거리 일원",
					"from": "심곡 기업은행 (서곶로 293)",
					"to": "제스트 빌(승학로 243)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.676472106506,
						"y": 37.5435973469357
					},
					"endPos": {
						"x": 126.672470792271,
						"y": 37.5442171618491
					}
				},
				{
					"location": "심곡로 일원",
					"from": "심곡로72 오아시스카페",
					"to": "심곡로 82-1 어죽이네철렵국",
					"availableTimeStart": "X",
					"availableTimeEnd": "X",
					"maxStopTime": 15,
					"maxNum": "20",
					"startPos": {
						"x": 126.676836,
						"y": 37.542045
					},
					"endPos": {
						"x": 126.679121,
						"y": 37.541952
					}
				},
				{
					"location": "신동아아파트 주변",
					"from": "인천광역시 남구 학익2동 학익소로61번길 135",
					"to": "인천광역시 남구 학익동 48-2",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "54",
					"startPos": {
						"x": 126.67688972472,
						"y": 37.4439860524777
					},
					"endPos": {
						"x": 126.677202532459,
						"y": 37.4419281984549
					}
				},
				{
					"location": "서달로 163번길15 일원",
					"from": "서달로 163번길15 세탁114",
					"to": "서달로 163번길4 김밥사랑",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.67702742073,
						"y": 37.5130875884902
					},
					"endPos": {
						"x": 126.678530955282,
						"y": 37.5134066742654
					}
				},
				{
					"location": "탁옥로77",
					"from": "탁옥로77 서부경찰서 정문 앞",
					"to": "탁옥로 104-1 석주빌리지",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "15",
					"startPos": {
						"x": 126.677834976132,
						"y": 37.5446050737882
					},
					"endPos": {
						"x": 126.681244704021,
						"y": 37.543347787769
					}
				},
				{
					"location": "공단시장 일대",
					"from": "길파로 32 주안의 달밤",
					"to": "길파로 46 스피드카 공업사",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "35",
					"startPos": {
						"x": 126.67999893454,
						"y": 37.46860656388
					},
					"endPos": {
						"x": 126.68006695972,
						"y": 37.4698205196162
					}
				},
				{
					"location": "검암동 상가지역",
					"from": "검암동 511번지 풍림아파트 입구",
					"to": "검암동 524",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "320",
					"startPos": {
						"x": 126.681629,
						"y": 37.566352
					},
					"endPos": {
						"x": 126.673661,
						"y": 37.564957
					}
				},
				{
					"location": "문학초등학교 일대",
					"from": "문학길9-35 새마을금고",
					"to": "매소홀로 600 맥도날드",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "50",
					"startPos": {
						"x": 126.682214320043,
						"y": 37.438332062861
					},
					"endPos": {
						"x": 126.688908398502,
						"y": 37.4381968382527
					}
				},
				{
					"location": "승학로 593일원",
					"from": "승학로 593 마로니에빌라",
					"to": "승학로 573 상록할인마트",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "50",
					"startPos": {
						"x": 126.683343352838,
						"y": 37.5686108593683
					},
					"endPos": {
						"x": 126.683005551267,
						"y": 37.566946735186
					}
				},
				{
					"location": "남동농협 일대",
					"from": "석정로 455 남동농협",
					"to": "석정로 439 맥심다방",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "20",
					"startPos": {
						"x": 126.686283273402,
						"y": 37.4664215166308
					},
					"endPos": {
						"x": 126.68444116621,
						"y": 37.4665789009754
					}
				},
				{
					"location": "신기사거리 일원",
					"from": "인주대로 467",
					"to": "인주대로 291번길 6",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "150",
					"startPos": {
						"x": 126.688653166424,
						"y": 37.451103519268
					},
					"endPos": {
						"x": 126.669188931926,
						"y": 37.4523688019734
					}
				},
				{
					"location": "상공회의소",
					"from": "남동대로239번길68",
					"to": "남동대로239번길112",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "100",
					"startPos": {
						"x": 126.695723,
						"y": 37.408101
					},
					"endPos": {
						"x": 126.693513,
						"y": 37.40926
					}
				},
				{
					"location": "남동인더스파크역",
					"from": "시티은행",
					"to": "남동공단파출소 (남동대로239번길112)",
					"availableTimeStart": "07",
					"availableTimeEnd": "09",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.695756,
						"y": 37.408134
					},
					"endPos": {
						"x": 126.693499,
						"y": 37.409221
					}
				},
				{
					"location": "남동인더스파크역",
					"from": "시티은행",
					"to": "남동공단파출소 (남동대로239번길112)",
					"availableTimeStart": "18",
					"availableTimeEnd": "20",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.695756,
						"y": 37.408134
					},
					"endPos": {
						"x": 126.693499,
						"y": 37.409221
					}
				},
				{
					"location": "승기공원 앞",
					"from": "선학동 346번지 선학시영@ 정문",
					"to": "선학동 340번지 태산@ 정문",
					"availableTimeStart": "09",
					"availableTimeEnd": "18",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.696926149982,
						"y": 37.4201254111454
					},
					"endPos": {
						"x": 126.699276125661,
						"y": 37.4218606857236
					}
				},
				{
					"location": "승기공원 앞",
					"from": "선학동 346번지 선학시영@ 정문",
					"to": "선학동 340번지 태산@ 정문",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.696926149982,
						"y": 37.4201254111454
					},
					"endPos": {
						"x": 126.699276125661,
						"y": 37.4218606857236
					}
				},
				{
					"location": "은행나무· 공원",
					"from": "선학동 345번지 경원대로",
					"to": "선학동 344번지 선학시영@ 정문",
					"availableTimeStart": "09",
					"availableTimeEnd": "18",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.696987,
						"y": 37.420624
					},
					"endPos": {
						"x": 126.698129,
						"y": 37.419769
					}
				},
				{
					"location": "은행나무· 공원",
					"from": "선학동 345번지 경원대로",
					"to": "선학동 344번지 선학시영@ 정문",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.696987,
						"y": 37.420624
					},
					"endPos": {
						"x": 126.698129,
						"y": 37.419769
					}
				},
				{
					"location": "상정초교",
					"from": "경원대로1110번길 금호어울림 104동",
					"to": "경원대로1110번길 금호어울림 105동",
					"availableTimeStart": "21",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.697461,
						"y": 37.47896
					},
					"endPos": {
						"x": 126.698032,
						"y": 37.479305
					}
				},
				{
					"location": "상정초교",
					"from": "경원대로1110번길 금호어울림 104동",
					"to": "경원대로1110번길 금호어울림 105동",
					"availableTimeStart": "21",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.697503187052,
						"y": 37.4798280085557
					},
					"endPos": {
						"x": 126.697503187052,
						"y": 37.4798280085557
					}
				},
				{
					"location": "검단선사 박물관 일원",
					"from": "원당파리바게트 (고산후로121번길15)",
					"to": "현대자동차블루핸즈원당점(고산후로 121번길",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "15",
					"startPos": {
						"x": 126.697698,
						"y": 37.594661
					},
					"endPos": {
						"x": 126.695507,
						"y": 37.594845
					}
				},
				{
					"location": "정광@ 상가",
					"from": "선학동 340번지 정광@ 정문",
					"to": "선학동 374 번지선학주민센터",
					"availableTimeStart": "09",
					"availableTimeEnd": "18",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.699276125661,
						"y": 37.4218606857236
					},
					"endPos": {
						"x": 126.692871581241,
						"y": 37.423835709997
					}
				},
				{
					"location": "정광@ 상가",
					"from": "선학동 340번지 정광@ 정문",
					"to": "선학동 374 번지선학주민센터",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.699276125661,
						"y": 37.4218606857236
					},
					"endPos": {
						"x": 126.692871581241,
						"y": 37.423835709997
					}
				},
				{
					"location": "롯데백화점",
					"from": "예술로138",
					"to": "성말로13번길20",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "25",
					"startPos": {
						"x": 126.701006330338,
						"y": 37.4462416075454
					},
					"endPos": {
						"x": 126.702407763515,
						"y": 37.4462791959313
					}
				},
				{
					"location": "뉴서울@ 상가· 금호@ 상가",
					"from": "선학로 352번지 상가 앞 구간",
					"to": "선학동 352번지 상가 앞 구간",
					"availableTimeStart": "09",
					"availableTimeEnd": "18",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.701326,
						"y": 37.423219
					},
					"endPos": {
						"x": 126.701326,
						"y": 37.425368
					}
				},
				{
					"location": "뉴서울@ 상가· 금호@ 상가",
					"from": "선학로 352번지 상가 앞 구간",
					"to": "선학동 352번지 상가 앞 구간",
					"availableTimeStart": "20",
					"availableTimeEnd": "07",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.701326,
						"y": 37.423219
					},
					"endPos": {
						"x": 126.701326,
						"y": 37.425368
					}
				},
				{
					"location": "21세기병원",
					"from": "예술로220",
					"to": "예술로230",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.701947454358,
						"y": 37.4535590072242
					},
					"endPos": {
						"x": 126.702090980616,
						"y": 37.4545503805439
					}
				},
				{
					"location": "산곡중학교",
					"from": "원적로 325",
					"to": "원적로 227-7",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "160",
					"startPos": {
						"x": 126.702473,
						"y": 37.504449
					},
					"endPos": {
						"x": 126.698976,
						"y": 37.504628
					}
				},
				{
					"location": "산곡주유소",
					"from": "마장로 199",
					"to": "마장로 121 신한은행산곡지점",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "250",
					"startPos": {
						"x": 126.70259967153,
						"y": 37.4955391707523
					},
					"endPos": {
						"x": 126.705687268263,
						"y": 37.4894657974501
					}
				},
				{
					"location": "한국정보통신",
					"from": "예술로 294",
					"to": "예술로 322",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.702630284337,
						"y": 37.4603271689099
					},
					"endPos": {
						"x": 126.702768266812,
						"y": 37.4629735610074
					}
				},
				{
					"location": "철마지구대",
					"from": "마장로 269",
					"to": "마장로 237",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.70268257378,
						"y": 37.5020384208315
					},
					"endPos": {
						"x": 126.702705,
						"y": 37.499717
					}
				},
				{
					"location": "화랑로구간",
					"from": "팔도주유소",
					"to": "현대자동차",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "520",
					"startPos": {
						"x": 126.702797,
						"y": 37.495633
					},
					"endPos": {
						"x": 126.707604,
						"y": 37.486456
					}
				},
				{
					"location": "부평 아이즈빌",
					"from": "마장로 489 버스정류장앞",
					"to": "마장로 489 주차장 입구",
					"availableTimeStart": "06",
					"availableTimeEnd": "22",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.703616496628,
						"y": 37.5218190854813
					},
					"endPos": {
						"x": 126.703616496628,
						"y": 37.5218190854813
					}
				},
				{
					"location": "백운공원",
					"from": "아트센터로 168 백운공원3",
					"to": "아트센터로 166 부평아트센터",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.703813221166,
						"y": 37.4830569606132
					},
					"endPos": {
						"x": 126.704933164322,
						"y": 37.4822385988831
					}
				},
				{
					"location": "방송통신대",
					"from": "미래로31",
					"to": "미래로13",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.704585,
						"y": 37.452717
					},
					"endPos": {
						"x": 126.704038,
						"y": 37.451047
					}
				},
				{
					"location": "부평 아이즈빌",
					"from": "마장로 489 버스정류장앞",
					"to": "마장로 489 주차장 입구",
					"availableTimeStart": "06",
					"availableTimeEnd": "22",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.704754,
						"y": 37.521073
					},
					"endPos": {
						"x": 126.704863,
						"y": 37.522425
					}
				},
				{
					"location": "청천롯데슈퍼 일원",
					"from": "미소요양원",
					"to": "동아전기",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.706147,
						"y": 37.518575
					},
					"endPos": {
						"x": 126.707325,
						"y": 37.519448
					}
				},
				{
					"location": "가정로38번길29 일원",
					"from": "뉴서울2차아파트",
					"to": "경남5차아파트",
					"availableTimeStart": "06",
					"availableTimeEnd": "22",
					"maxStopTime": 0,
					"maxNum": "10",
					"startPos": {
						"x": 126.706314,
						"y": 37.499692
					},
					"endPos": {
						"x": 126.706175,
						"y": 37.500802
					}
				},
				{
					"location": "동암남부역",
					"from": "동암남로 29",
					"to": "동암남로 5",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "100",
					"startPos": {
						"x": 126.707013866774,
						"y": 37.4707739208638
					},
					"endPos": {
						"x": 126.704122775142,
						"y": 37.4711342205956
					}
				},
				{
					"location": "농협 인천영업부",
					"from": "남동대로765번길8",
					"to": "미래로14",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.707105427679,
						"y": 37.4510620114769
					},
					"endPos": {
						"x": 126.704967978829,
						"y": 37.4511231846471
					}
				},
				{
					"location": "간석오거리 일원",
					"from": "간석동275-1 C&K웨딩홀 가로등",
					"to": "간석동277-1 CU편의점 앞",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.707561484435,
						"y": 37.4654664037049
					},
					"endPos": {
						"x": 126.707785509514,
						"y": 37.4645897163109
					}
				},
				{
					"location": "간석오거리 일원",
					"from": "간석동211-3 헤어오너스미용실",
					"to": "간석동214-28 옛날육계장",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.708458488655,
						"y": 37.4643974378278
					},
					"endPos": {
						"x": 126.708348957561,
						"y": 37.465937195396
					}
				},
				{
					"location": "산곡2동 주민센터",
					"from": "부평전화국사거리",
					"to": "산곡사거리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "140",
					"startPos": {
						"x": 126.708757,
						"y": 37.504025
					},
					"endPos": {
						"x": 126.709146,
						"y": 37.508219
					}
				},
				{
					"location": "청천중학교",
					"from": "청천지구대",
					"to": "예단",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "170",
					"startPos": {
						"x": 126.709057,
						"y": 37.5103
					},
					"endPos": {
						"x": 126.703791,
						"y": 37.510527
					}
				},
				{
					"location": "한국GM서문",
					"from": "산곡사거리",
					"to": "공단오거리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "350",
					"startPos": {
						"x": 126.709246,
						"y": 37.508141
					},
					"endPos": {
						"x": 126.71018,
						"y": 37.517342
					}
				},
				{
					"location": "영진아파트",
					"from": "청중로 109",
					"to": "청중로 69",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "130",
					"startPos": {
						"x": 126.709325857097,
						"y": 37.5174453813574
					},
					"endPos": {
						"x": 126.704953510177,
						"y": 37.5176627264254
					}
				},
				{
					"location": "제4국가산업단지",
					"from": "공단오거리",
					"to": "효성굴다리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "250",
					"startPos": {
						"x": 126.710105,
						"y": 37.517231
					},
					"endPos": {
						"x": 126.710617,
						"y": 37.52247
					}
				},
				{
					"location": "경인감리교회",
					"from": "마장로 10",
					"to": "마장로 22",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "50",
					"startPos": {
						"x": 126.710263,
						"y": 37.479795
					},
					"endPos": {
						"x": 126.709801,
						"y": 37.480757
					}
				},
				{
					"location": "다이소(남동대로860)",
					"from": "석산로172",
					"to": "씨티은행",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.711004498971,
						"y": 37.460413754622
					},
					"endPos": {
						"x": 126.707919,
						"y": 37.451411
					}
				},
				{
					"location": "배꼽시계(석산로202)",
					"from": "용천로115번길4",
					"to": "용인대합기도",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "50",
					"startPos": {
						"x": 126.714517,
						"y": 37.460566
					},
					"endPos": {
						"x": 126.714602,
						"y": 37.459808
					}
				},
				{
					"location": "청천도서관",
					"from": "안남로 272 금호아파트 303동",
					"to": "원길로 5 이레빌딩앞",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "120",
					"startPos": {
						"x": 126.714711,
						"y": 37.507838
					},
					"endPos": {
						"x": 126.714226239784,
						"y": 37.5042316804128
					}
				},
				{
					"location": "가족보건의원",
					"from": "석산로205",
					"to": "용천로142",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "25",
					"startPos": {
						"x": 126.71478,
						"y": 37.460873
					},
					"endPos": {
						"x": 126.714549,
						"y": 37.462278
					}
				},
				{
					"location": "다음프라자",
					"from": "용천로80",
					"to": "용천로82",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.715012,
						"y": 37.456541
					},
					"endPos": {
						"x": 126.714983,
						"y": 37.456987
					}
				},
				{
					"location": "간석초등학교 일원",
					"from": "구월동6-55",
					"to": "구월동7-51",
					"availableTimeStart": "12",
					"availableTimeEnd": "16",
					"maxStopTime": 0,
					"maxNum": "25",
					"startPos": {
						"x": 126.715230976815,
						"y": 37.4582982943241
					},
					"endPos": {
						"x": 126.715121362781,
						"y": 37.459717558029
					}
				},
				{
					"location": "부평남부역 2번출구",
					"from": "동수북로108번길 1",
					"to": "동수북로 140",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "50",
					"startPos": {
						"x": 126.718565747156,
						"y": 37.4893780868426
					},
					"endPos": {
						"x": 126.72186093973,
						"y": 37.4891756725195
					}
				},
				{
					"location": "우림라이온스밸리",
					"from": "부평대로 283 기업은행",
					"to": "부평대로 283 (주차장삼거리)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.71905,
						"y": 37.516712
					},
					"endPos": {
						"x": 126.715684,
						"y": 37.516848
					}
				},
				{
					"location": "모래내시장",
					"from": "구월로268",
					"to": "구월로284 ",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.720301477269,
						"y": 37.4556194341938
					},
					"endPos": {
						"x": 126.721973220562,
						"y": 37.4555031814858
					}
				},
				{
					"location": "우림라이온스밸리",
					"from": "부평대로 283 기업은행",
					"to": "부평대로 283 주차장삼거리",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "30",
					"startPos": {
						"x": 126.72076388638,
						"y": 37.5171213848013
					},
					"endPos": {
						"x": 126.72076388638,
						"y": 37.5171213848013
					}
				},
				{
					"location": "부광감리교회",
					"from": "부평대로63번길 15",
					"to": "부평대로63번길 5",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "40",
					"startPos": {
						"x": 126.721013642729,
						"y": 37.4967639281691
					},
					"endPos": {
						"x": 126.722087050668,
						"y": 37.4968893483959
					}
				},
				{
					"location": "노체웨딩홀",
					"from": "부흥로 264",
					"to": "부흥로 248",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "65",
					"startPos": {
						"x": 126.721391,
						"y": 37.498568
					},
					"endPos": {
						"x": 126.718966,
						"y": 37.498722
					}
				},
				{
					"location": "산곡고",
					"from": "산곡입구삼거리",
					"to": "원적사거리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "500",
					"startPos": {
						"x": 126.721591,
						"y": 37.503218
					},
					"endPos": {
						"x": 126.703259,
						"y": 37.504358
					}
				},
				{
					"location": "부평4동 주택가 (주부토로)",
					"from": "현대공인중개사 (주부토로46번길 1)",
					"to": "까페어스 (주부토로 102)",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "137",
					"startPos": {
						"x": 126.72532552532,
						"y": 37.4991290216673
					},
					"endPos": {
						"x": 126.725694609963,
						"y": 37.5041271457028
					}
				},
				{
					"location": "부평4동 주택가 (주부토로)",
					"from": "현대공인중개사 (주부토로46번길 1)",
					"to": "까페어스 (주부토로 102)",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "137",
					"startPos": {
						"x": 126.72532552532,
						"y": 37.4991290216673
					},
					"endPos": {
						"x": 126.725694609963,
						"y": 37.5041271457028
					}
				},
				{
					"location": "이마트 남측",
					"from": "주부토로 231 갈산홈프라자 바다약국 앞",
					"to": "주부토로 223 금강프라자",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.725969043896,
						"y": 37.5158306385326
					},
					"endPos": {
						"x": 126.725816426616,
						"y": 37.5151321791608
					}
				},
				{
					"location": "신다우 빌리지 주변",
					"from": "세진주식회사(부평북로 308) 앞",
					"to": "신다우빌리지(부평북로 318) 앞",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.727475597665,
						"y": 37.5225374760314
					},
					"endPos": {
						"x": 126.728659930901,
						"y": 37.5225745106854
					}
				},
				{
					"location": "개흥초등학교 후문",
					"from": "신트리로56번길 18",
					"to": "신트리로56번길 34",
					"availableTimeStart": "08",
					"availableTimeEnd": "17",
					"maxStopTime": 0,
					"maxNum": "15",
					"startPos": {
						"x": 126.7275644888,
						"y": 37.5054057773821
					},
					"endPos": {
						"x": 126.727496273816,
						"y": 37.5046144014763
					}
				},
				{
					"location": "도림주공2단지",
					"from": "오봉로12",
					"to": "오봉로2",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "20",
					"startPos": {
						"x": 126.728699,
						"y": 37.416363
					},
					"endPos": {
						"x": 126.727738,
						"y": 37.416717
					}
				},
				{
					"location": "도림주공2단지",
					"from": "논고개로331",
					"to": "논고개로299",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "60",
					"startPos": {
						"x": 126.729495282661,
						"y": 37.419494850333
					},
					"endPos": {
						"x": 126.727475256417,
						"y": 37.4171516576104
					}
				},
				{
					"location": "부평삼산지구 엠코타운",
					"from": "후정로 4 (장성카센터)",
					"to": "후정로 24-1 (홈팰리스앞)",
					"availableTimeStart": "22",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "34",
					"startPos": {
						"x": 126.733072844198,
						"y": 37.5202800399266
					},
					"endPos": {
						"x": 126.735371403975,
						"y": 37.5200786214367
					}
				},
				{
					"location": "삼산타운7단지 먹거리 타운",
					"from": "체육관로 14 (삼성메디플러스)",
					"to": "체육관로 24 (청호빌딩)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "55",
					"startPos": {
						"x": 126.733093482432,
						"y": 37.5083813593348
					},
					"endPos": {
						"x": 126.734284921791,
						"y": 37.5083236514952
					}
				},
				{
					"location": "삼산타운7단지 먹거리 타운",
					"from": "체육관로 14 (삼성메디플러스)",
					"to": "체육관로 24 (청호빌딩)",
					"availableTimeStart": "10",
					"availableTimeEnd": "12",
					"maxStopTime": 15,
					"maxNum": "55",
					"startPos": {
						"x": 126.733093482432,
						"y": 37.5083813593348
					},
					"endPos": {
						"x": 126.734284921791,
						"y": 37.5083236514952
					}
				},
				{
					"location": "삼산타운7단지 먹거리 타운",
					"from": "삼성메디플러스 (체육관로 14)",
					"to": "청호빌딩 (체육관로 24)",
					"availableTimeStart": "14",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "55",
					"startPos": {
						"x": 126.733093482432,
						"y": 37.5083813593348
					},
					"endPos": {
						"x": 126.734284921791,
						"y": 37.5083236514952
					}
				},
				{
					"location": "현대아트휄 주변",
					"from": "롯데칠성주안대리점(부평북로 360) 앞",
					"to": "참이맛감자탕(부평북로 380) 앞",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "64",
					"startPos": {
						"x": 126.733877863359,
						"y": 37.5224800334464
					},
					"endPos": {
						"x": 126.735604270038,
						"y": 37.5224877949203
					}
				},
				{
					"location": "부흥기사 식당",
					"from": "부평기원앞 (부흥로 381)",
					"to": "백산빌딩 (부흥로 389)",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "12",
					"startPos": {
						"x": 126.734456069034,
						"y": 37.4980731314651
					},
					"endPos": {
						"x": 126.735212628169,
						"y": 37.498002589372
					}
				},
				{
					"location": "BBQ만수점(만수로59)",
					"from": "만수로7",
					"to": "파티마의원",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "90",
					"startPos": {
						"x": 126.734645,
						"y": 37.461068
					},
					"endPos": {
						"x": 126.73002,
						"y": 37.458002
					}
				},
				{
					"location": "삼산타운7단지 먹거리 타운",
					"from": "이리옴프라자 (체육관로 30)",
					"to": "이리옴프라자2차 (체육관로 34)",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "25",
					"startPos": {
						"x": 126.734671,
						"y": 37.508122
					},
					"endPos": {
						"x": 126.735894,
						"y": 37.508062
					}
				},
				{
					"location": "삼산타운7단지 먹거리 타운",
					"from": "체육관로 30 (이리옴프라자)",
					"to": "체육관로 34 (이리옴프라자2차)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "25",
					"startPos": {
						"x": 126.734814781511,
						"y": 37.5083045516198
					},
					"endPos": {
						"x": 126.735475552996,
						"y": 37.5082751201092
					}
				},
				{
					"location": "부흥기사 식당",
					"from": "부흥로 381 (부평기원앞)",
					"to": "부흥로 389 (백산빌딩)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "12",
					"startPos": {
						"x": 126.734832,
						"y": 37.498132
					},
					"endPos": {
						"x": 126.735138,
						"y": 37.498077
					}
				},
				{
					"location": "대보아파트앞",
					"from": "삼산동사무소3",
					"to": "러브레터 앞 (평천로 411-5)",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "19",
					"startPos": {
						"x": 126.735521,
						"y": 37.518141
					},
					"endPos": {
						"x": 126.73617,
						"y": 37.517447
					}
				},
				{
					"location": "신한은행",
					"from": "장승남로61",
					"to": "담방로62",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "80",
					"startPos": {
						"x": 126.739030383229,
						"y": 37.4436577965228
					},
					"endPos": {
						"x": 126.738981116148,
						"y": 37.4452438627435
					}
				},
				{
					"location": "부일로113번길내 상가 주변",
					"from": "LBA부동산 앞 (부일로113번길 47-1)",
					"to": "대동아파트 103동 동측",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "77",
					"startPos": {
						"x": 126.741731629091,
						"y": 37.4930454757715
					},
					"endPos": {
						"x": 126.743545,
						"y": 37.501598
					}
				},
				{
					"location": "부일로113번길내 상가 주변",
					"from": "부일로113번길 47-1(LBA부동산)",
					"to": "대동아파트 (부일로113번길 11)",
					"availableTimeStart": "12",
					"availableTimeEnd": "14",
					"maxStopTime": 0,
					"maxNum": "77",
					"startPos": {
						"x": 126.741813,
						"y": 37.49307
					},
					"endPos": {
						"x": 126.742345,
						"y": 37.489445
					}
				},
				{
					"location": "부평동중교 동측 상가 주변",
					"from": "부개동 백영아파트 (수변로 115) 앞",
					"to": "글램오토스 (수변로 95) 앞",
					"availableTimeStart": "21",
					"availableTimeEnd": "06",
					"maxStopTime": 0,
					"maxNum": "32",
					"startPos": {
						"x": 126.74206,
						"y": 37.496207
					},
					"endPos": {
						"x": 126.741695,
						"y": 37.49476
					}
				},
				{
					"location": "서창2지구",
					"from": "서창동 679-2 장서4거리",
					"to": "서창동 663-1 장아4거리",
					"availableTimeStart": "10",
					"availableTimeEnd": "17",
					"maxStopTime": 15,
					"maxNum": "220",
					"startPos": {
						"x": 126.750492,
						"y": 37.429784
					},
					"endPos": {
						"x": 126.751268,
						"y": 37.424987
					}
				}
			]
		}
	}
}

/*
module.exports ={
	getAllData: async function(){
		try{
			let ret = [];
			let parkingData = await XLSX.readFile(__dirname + "/ParkingData.xls");
			let sheet = parkingData.Sheets['aaa.shp']; // 데이터 시트에 sheet 이름이 aaa.shp임

			for(var i=2; i<=dataLen; i++){
				var availableTimeString = sheet["E" + i].v;
				if(availableTimeString == 'X'){
					availableTimeString = 'X~X';
				}
				availableTimeString = availableTimeString.split('~');
				let row ={
					location: sheet["B" + i].v,
					from: sheet["C" + i].v,
					to: sheet["D" + i].v,
					availableTimeStart: availableTimeString[0],
					availableTimeEnd: availableTimeString[1],
					maxStopTime: sheet["F" + i].v,
					maxNum: sheet["G" + i].v.replace(regex, ""),
					startPos:{
						x: sheet["H" + i].v,
						y: sheet["I" + i].v
					},
					endPos:{
						x: sheet["J" + i].v,
						y: sheet["K" + i].v
					},
				}
				ret.push(row);
			}
			return ret;
		}
		
		catch(err){
			console.log("getAllData error!", err);
			return null;
		}
	}
}
*/