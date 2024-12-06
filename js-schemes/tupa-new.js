/* 切韻拼音
 *
 * https://zhuanlan.zhihu.com/p/478751152
 *
 * @author unt
 *
 * 這個版本加上了對應的發音（unt切韻通俗擬音），能朗讀。
 * 如：'ng|ŋ'，表示顯示為"ng"，實際發音為"ŋ"。
 */

if (!音韻地位) return [];

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);

function get聲母() {
  return {
    幫: 'p',      滂: 'ph|pʰ',    並: 'b',      明: 'm',
    端: 't',      透: 'th|tʰ',    定: 'd',      泥: 'n',    來: 'l',
    知: 'tr|ʈ',   徹: 'trh|ʈʰ',   澄: 'dr|ɖ',   孃: 'nr|ɳ',
    見: 'k',      溪: 'kh|kʰ',    羣: 'g|ɡ',    疑: 'ng|ŋ', 云: '',
    影: 'q|ʔ',    曉: 'h|x',      匣: 'gh|ɣ',
    精: 'ts',     清: 'tsh|tsʰ',  從: 'dz',     心: 's',    邪: 'z',
    莊: 'tsr|tʂ', 初: 'tsrh|tʂʰ', 崇: 'dzr|dʐ', 生: 'sr|ʂ', 俟: 'zr|ʐ',
    章: 'tj|tɕ',  昌: 'tjh|tɕʰ',  常: 'dj|dʑ',  書: 'sj|ɕ', 船: 'zj|ʑ', 日: 'nj|ɲ', 以: 'j',
  }[音韻地位.母];
}

function get韻母() {
  // 爲了方便推導，對韻類稍作調整
  const 韻 = when([
    ['蒸韻 B類', '冰'],
    ['東韻 三等', '終'],
    ['清韻', '庚'],
    ['陽韻', '唐'],
    ['臻韻', '真'],
    ['凡韻', '嚴'],
    ['', 音韻地位.韻],
  ]);
  const 韻到韻尾 = [
    ['脂之尤侯 　佳　模　 支魚虞 麻歌', ''],
    ['冰蒸終東 青耕登冬江 　　鍾 庚唐', 'ng|ŋ', 'k'],
    ['　微微　 齊皆咍灰　 祭廢廢 夬泰', 'j'],
    ['真殷文　 先山痕魂　 仙元元 刪寒', 'n', 't'],
    ['幽　　　 蕭　　　　 宵　　 肴豪', 'w'],
    ['侵　　　 添咸　覃　 鹽嚴嚴 銜談', 'm', 'p'],
  ];
  const 元音列表 = [
    'i',         'y|ɨ',   'u', 'ou|u',
    'e', 'ee|ɛ', 'eo|ə',  'o', 'oeu|ɔ',
    'e',         'yo|ɨə', 'uo|ʉə',
         'ae|æ', 'a',
  ];

  let 匹配行 = 韻到韻尾.find(行 => 行[0].includes(韻));
  let 元音 = 元音列表[匹配行[0].replace(/ /g, '')[is`開口` ? 'indexOf' : 'lastIndexOf'](韻)];
  let 韻尾 = 匹配行[1 + is`入聲`];

  let 介音 = '';
  // 元音 a 添加三等介音（一般是 C 類）
  if (is`三等` && 元音 === 'a') {
    // A類見於「𩦠」小韻
    介音 = (is`A類` ? 'i' : is`開口` ? 'y|ɨ' : 'u|ʉ') + 介音;
  }
  // 前元音添加三等 A、B 介音
  if (
    (is`三等` && ['i', 'e', 'ae|æ'].includes(元音)) ||
    (元音 === 'ae|æ' && is`端組 四等`)
  ) {
    if (is`B類 或 莊組`) {
      介音 = (is`合口` ? 'u|ʉ' : 'y|ɨ') + 介音;
    } else if (元音 !== 'i') {
      // 拼莊組以外的銳音一律視爲 A 類（同《切韻》清韻、《廣韻》諄韻的獨立條件）
      介音 = 'i' + 介音;
    }
  }
  // 添加合口介音
  let 元音首 = (介音 + 元音)[0]
  if (is`合口` && !['u', 'o'].includes(元音首)) {
    if (!介音 && 元音.startsWith('i')) {
      介音 = 'w|y';
    } else if (介音 === 'i') {
      介音 = 'wi|y';
    } else {
      介音 = 'w|u' + 介音;
    }
  }

  if (is`微文韻`) { 元音 = 'u|ʉ'; }
  if (is`尤韻` || is`東韻 三等`) { 元音 = 'u|ɨu'; }
  if (is`虞鍾韻`) { 元音 = 'uo|ʉo'; }
  if (is`魂灰韻`) { 元音 = 'o|uə'; }
  if (is`覃韻`) { 元音 = 'o|ə'; }
  if (is`歌唐陽韻`) { 元音 = 'a|ɑ'; }

  return [介音, 元音, 韻尾];
}

function get聲調() {
  if (true) {
    if (is`清音`)
      return { 平: '|44', 上: 'q|45', 去: 'h|41', 入: '|4' }[音韻地位.聲] || '';
    else
      return { 平: '|22', 上: 'q|24', 去: 'h|21', 入: '|2' }[音韻地位.聲] || ''; 
  } else {
    if (is`清音`)
      return { 平: '|442', 上: 'q|45', 去: 'h|412', 入: '|4' }[音韻地位.聲] || '';
    else
      return { 平: '|221', 上: 'q|24', 去: 'h|212', 入: '|2' }[音韻地位.聲] || '';
  }
}

const 聲母 = get聲母();
const [介音, 元音, 韻尾] = get韻母();
const 聲調 = get聲調();

return [聲母, 介音, 元音, 韻尾, 聲調].join(',');