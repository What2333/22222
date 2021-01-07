
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

const render = () => {
  $siteList.find('li:not(.last)').remove()
  hasMap.forEach(node => {
    const $li = $(`<li>
    <a href="${node.url}">
      <div class="site">
        <div class="logo">${node.logo[0]}</div>
        <div class="link">${node.url}</div>
      </div>
   
        `).insertBefore($lastLi)
  })
}

