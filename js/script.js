function showContent(tabId) {
    // 隐藏所有内容
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // 显示选定的内容
    var selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

}




// var contents = document.getElementsByCla
// ssName('tab-content');：这一行代码通过类名获取所有具有tab-content类的元素，并
// 将它们存储在一个名为contents的变量中。

// for (var i = 0; i < contents.length; i++) 
// { contents[i].style.display = 'none'; }：这是一个循环，遍历所有具有tab-content类的
// 元素，
// 并将它们的display属性设置为'none'，从而隐藏它们。

// var selectedContent = document.getElementById(tabId);：
// 这一行代码使用提供的tabId参数获取特定id的元素，并将它存储在selectedContent变量中。

// if (selectedContent) { selectedContent.style.display = 'block'; }：
// 这是一个条件语句，检查selectedContent是否存在（如果tabId匹配一个存在的id），如果存在，
// 则将该元素的display属性设置为'block'，以显示它。

// 这个函数的主要目的是在点击导航栏的不同选项时，隐藏所有内容，然后显示与所选选项相
// 对应的内容。例如，如果你调用showContent('food')，它将隐藏所有tab-content类的元素，
// 然后显示id为food的元素。






/**热点新闻 */

function showContent2(contentId) {
    // 隐藏所有新闻内容
    var contents = document.querySelectorAll('.news-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // 显示选定的新闻内容
    var selectedContent = document.getElementById(contentId + 'Content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}







/*风土人情 */
document.addEventListener('DOMContentLoaded', function() {
    // 默认显示第一张图片的文字介绍
    showDescription('description1');
});

function showDescription(descriptionId) {
    // 隐藏所有文字介绍
    var descriptions = document.querySelectorAll('.description');
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = 'none';
    }

    // 缩回所有图片
    var images = document.querySelectorAll('.image');
    for (var i = 0; i < images.length; i++) {
        images[i].style.transform = 'scale(1)';
    }

    // 显示选定的文字介绍
    var selectedDescription = document.getElementById(descriptionId);
    if (selectedDescription) {
        selectedDescription.style.display = 'block';
    }

    // 放大选定的图片
    var selectedImage = document.getElementById(descriptionId.replace('description', 'image'));
    if (selectedImage) {
        selectedImage.style.transform = 'scale(1.2)';
    }
}


