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
    <li>
                <a href="https://www.bilibili.com">
                    <div class="site">
                        <div class="logo">
                            <img src="./images/bilibili.jpg" alt="">
                        </div>
                        <div class="link">bilibili.com</div>
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
  //console.log(url);
  // const $siteList = $(".siteList")
  // const $li = $(`<li>
  //             <a href="${url}">
  //                 <div class="site">
  //                     <div class="logo">${url[0]}</div>
  //                     <div class="link">${url}</div>
  //                 </div>
  //             </a>
  //             </li>
  // `).insertBefore($lastLi)
  hasMap.push({
    logo: url[0],
    logoType: 'text',
    url: url
  }
  )
  render()

});
//localStorage只能存字符串  不能存对象   
window.onbeforeunload = () => {
  //console.log('王爷要关闭了');

  //将对象转换为  字符串
  const string = JSON.stringify(hasMap)

  //local是一个全局变量    前面可以不写window
  //setItem接受两个值   一个是key  一个是value
  localStorage.setItem('x', string)//意思是在本地的存储里面设置一个X 他的值就是string

}