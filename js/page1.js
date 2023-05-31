const therole1 = document.querySelector('#therole1');
const therole2 = document.querySelector('#therole2');
const roleBtn = document.querySelector('.roleBtn');
// console.log(roleBtn);
// console.log(therole1,therole2);

//主角設定
therole1.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        var images = therole1.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove('choosebox1');
        }
        e.target.classList.add('choosebox1');
    }
});


//配角設定
therole2.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        var images = therole2.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove('choosebox2');
        }
        e.target.classList.add('choosebox2');
    }
});


roleBtn.addEventListener('click', function () {
    var selectedRole1 = therole1.querySelector('.choosebox1');
    var selectedRole2 = therole2.querySelector('.choosebox2');
    if (!selectedRole1 || !selectedRole2) {
        alert('請務必選擇主角和配角!');
    } else {
        window.location.href = '/chat.html';
    }
});


//設定當你點擊到哪個角色 聊天室那邊的角色就會變成你選擇的圖片
//設定主角區塊
const role1Image = document.querySelectorAll('.role1 img');

role1Image.forEach(image=>{
    image.addEventListener('click',function(){
        const imagePath = this.getAttribute('src');
        localStorage.setItem('selectedImage', imagePath);
    });
});

//設定配角區塊
//鎖定role2裡面的4張圖片
const role2Image = document.querySelectorAll('.role2 img');

role2Image.forEach(image=>{
    image.addEventListener('click',function(){
        const imagePath = this.getAttribute('src');
                               //key          value
        localStorage.setItem('selectedImage2',imagePath);
    })
})

















