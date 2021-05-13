const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B8%EC%B2%AD%EA%B4%91%EC%97%AD%EC%8B%9C+%EB%82%A0%EC%94%A8&oquery=%EC%9D%B8%EC%B2%AD%EA%B4%91%EC%97%AD%EC%8B%9C&tqi=h505QwprvxZssiCCKcossssssTw-192922"
const regex = /[^0-9]/g;

const getHtml = async () => {
  try {
    return await axios.get(URL);
  } catch (error) {
    console.error(error);
  }
};

export const crawl = async (req, res) =>{
    getHtml().then( (html) => {
		let castTexts = [];
        const $ = cheerio.load(html.data);
        const $mainInfo = $("div.main_info");
        const imgClassNum = $mainInfo.find("span.ico_state").attr("class").replace(regex, "").padStart(2,'0');
        const imgUrl = `https://ssl.pstatic.net/sstatic/keypage/outside/scui/weather_new/img/weather_svg/icon_wt_${imgClassNum}.svg`
        const $mainInfoData = $mainInfo.find("div.info_data");
        const nowTemp = $mainInfoData.find("p.info_temperature span.todaytemp").text();
        const $castTextList =  $mainInfoData.find("ul.info_list").children("li");
        const minTemp = $mainInfoData.find("ul.info_list li span.merge span.min span.num").text();
        const maxTemp = $mainInfoData.find("ul.info_list li span.merge span.max span.num").text();
        const perceivedTemp = $mainInfoData.find("ul.info_list li span.sensible span.num").text();
		
		$castTextList.each(function(i, elem) {
			const tmp = { 
				text: $(this).find('p.cast_txt').text(),
			};
			castTexts.push(tmp);
		});
		const castText = castTexts[0].text;
        const weatherInfo = {
            imgUrl,
            nowTemp,
            castText,
            minTemp,
            maxTemp,
            perceivedTemp,

        }
        const $subInfo = $("div.sub_info div.detail_box dl.indicator").children("dd");
        const subInfoTag = ["dust", "ultraDust", "ozone"];
        $subInfo.each((index, item) => {
            weatherInfo[subInfoTag[index]] = $(item).text();
        })
        return res.json({weatherInfo});
    });
}
