/* 不通話
 *
 * https://www.zhihu.com/question/381250756/answer/2709792926
 * https://zhuanlan.zhihu.com/p/572453269
 *
 * @author 笑也 (JavaScript: unt)
 */

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);

if (!音韻地位) return [
  ['顯示', [1, '正字法', '國際音標']],
];

function get聲母() {
  return when([
    // 單豎線左側爲正字法，右側爲國際音標，下同；雙豎線左清右濁
    ['云船母', '‖V|ʋ'],
    ['精組 三四等 或 知組', 'T|t‖D|n'], // 不含來母
    ['莊組', 'S|k‖R|ŋ'],
    ['', '|h‖ʻ|'], // 幫端章見影組、精組一等
  ]).split('‖')[+is`全濁 或 次濁`];
}

function get介音() {
  return when([
    ['一四等', '|'],
    ['二等', 'U|u'],
    // 以下爲三等
    ['精組 或 來以母', 'I|i'],
    ['銳音 或 云母', '|'],
    ['A類 非 麻幽韻', 'I|i'],
    ['', 'Y|y'],
  ]);
  // FIXME 麻幽韻此前是按C類推導，亦不分幽A/B，
  // 由於尚未檢驗修改它會造成的影響，故暫未修正。
  // （此外亦有：蒸C=B、蒸合=東三）
}

function get韻核() {
  const 韻核列表 = {
    脂〇〇真幽臻: 'O|ʉ', 之蒸微殷〇侵: 'E|ə', 臻: 'O|ʉ', 尤侯東文: 'E|ə',
    〇青齊先蕭添: 'A|a', 〇登咍痕〇覃: 'E|ə', 灰魂: 'E|ə', 模冬江: 'O|ʉ',
    支〇祭仙宵鹽: 'A|a', 魚〇廢元〇嚴: 'E|ə', 凡: 'E|ə', 虞鍾: 'O|ʉ',
    佳耕皆山〇咸: 'E|ə',
    麻庚夬刪肴銜: 'A|a', 歌唐泰寒豪談: 'A|a', 清陽: 'A|a',
  };
  return Object.entries(韻核列表).find(e => e[0].includes(音韻地位.韻))[1];
}

function get韻尾() {
  return when([
    ['齊微皆祭韻', 'J|j'],
    ['通江宕曾梗攝', 'N|̃'],
    ['深咸攝', 'V|ː'],
    ['', '|'],
  ]);
}

function get聲調() {
  return when([
    ['全濁 上聲', 'L|˨˩'],
    ['入聲', 'C|˧˥'],
    ['', '|˥'],
  ]);
}

return [
  get聲母(), get介音(), get韻核(), get韻尾(), get聲調(),
].map(e => e.split('|')[+(選項.顯示 === '國際音標')]).join('');
