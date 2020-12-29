
const $siteList = $(".siteList")
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
//把字符串变为对象
const xObject = JSON.parse(x)
const hasMap = xObject || [
  { logo: 'A', logoType: 'text', url: 'https://www.acfun.cn' },
  { logo: './images/bilibili.jpg', logoType: 'image', url: 'https://www.bilibli..com' },
]

const render = () => {
  $siteList.find('li:not(.last)').remove()
  hasMap.forEach(node => {
    const $li = $(`<li>
    <a href="${node.url}">
      <div class="site">
        <div class="logo">${node.logo[0]}</div>
        <div class="link">${node.url}</div>
      </div>
    </a> 
    </li>
        `).insertBefore($lastLi)
  })
}
render()

$('.addButton').on('click', () => {
  let url = window.prompt("请问你需要添加声明网站")
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);
  const $siteList = $(".siteList")
  const $li = $(`<li>
              <a href="${url}">
                  <div class="site">
                      <div class="logo">${url[0]}</div>
                      <div class="link">${url}</div>
                  </div>
              </a>
              </li>
  `).insertBefore($lastLi)