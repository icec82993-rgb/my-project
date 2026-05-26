// 1.找到网页中的按钮和用来显示欢迎词的文本框（给它们在JS里登记一下）
const welcomeBtn = document.getElementById('welcome-btn');
const greetingText = document.getElementById('greeting-text');

// 2.给按钮绑定一个“监听器”，盯着用户有没有点击它
welcomeBtn.addEventListener('click',function(){
    // 3. 弹出一个输入框，让用户输入名字，并把蜜罐子存到叫 name 的变量里
    let name = prompt('请输入您的名字或昵称');

    // 4. 防呆判断：如果用户输入了内容（不是空值）
    if(name) {
        // 动态修改网页上的文字，对用户进行实名欢迎
        greetingText.textContent = `欢迎您，尊贵的访客：${name}!感谢您见证我的技术成长。`;
        greetingText.style.color = '#e74c3c'; // 顺便把JS的文字变成炫酷的红色
    } else {
        alert('您什么都没输入呀~');
    }
});