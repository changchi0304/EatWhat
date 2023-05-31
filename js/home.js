//左邊 .theleftc 食物區設定
const fooditems = [
"炸雞","漢堡","牛肉麵","酸辣粉","煎餅果子","豆腐腦","火鍋","烤串","蓋飯","小籠包",
"烤鴨","炒飯","炸醬麵","羊肉串","紅燒肉","蛋糕","薯條","糖醋排骨","辣炒蝦","魯肉飯",
"蝦仁煎蛋","麻婆豆腐","蛋糕捲","泡菜鍋","臭豆腐","滷肉飯","蒸餃", "麵線",
"油條","麻辣燙","雞蛋糕","蔥抓餅","鮮蝦水餃","鐵板燒","涼拌菜","糯米雞","海南雞飯",
"韭菜盒子","蝦仁炒飯","炒時蔬","燒賣","肉圓","蔥油餅","餛飩湯","臭豆腐串","芝麻糊",
"奶黃包","糖醋魚","蝦仁炒面","餡餅","椒鹽雞翅","麻辣豆腐", "蚵仔煎","大腸包小腸","滷肉飯","小籠包",
"蔥抓餅","蚵仔炒麵線","豬血糕","肉圓","鹹水雞","蚵仔麵線","米粉湯","割包","大腸麵線","蝦捲",
"滷味","魚丸湯","蚵仔餅","麻辣火鍋","香腸","牛肉麵","腸粉","鍋貼","筒仔米糕","蚵仔煎",
];

const demo = document.querySelector('#demo');
const roding =document.querySelector('.roding');
const thestartbtn1 = document.querySelector('#thestartbtn1');
thestartbtn1.addEventListener('click', function (e) {
    
    e.preventDefault();
    if(roding){
        roding.style.display ='none';
    }
    const randomfoodIndex = Math.floor(Math.random() * fooditems.length);
    const selectfood = fooditems[randomfoodIndex ];
    demo.innerHTML = selectfood;

})

// <!-- ---------------------------------------------------------------------------------------- -->
//右邊 .therightc 飲料區設定
const drinkitems = [
"珍珠奶茶","波霸奶茶","台式奶茶","紅茶拿鐵","咖啡拿鐵","烏龍奶茶","四季春茶","綠茶拿鐵","鮮奶茶","仙草凍奶茶",
"芋頭牛奶","布丁奶茶","椰果奶茶","草莓牛奶","蘋果綠茶","柳橙綠茶","柚子茶","蜂蜜檸檬","檸檬蘆薈","柚子蜜茶",
"桂花烏龍","酸梅湯","熟成紅茶","巧克力牛奶","抹茶拿鐵","黑糖拿鐵","梅子冰茶","可可芭蕾拿鐵","燕麥阿華田拿鐵",
"燕麥紅茶拿鐵","8冰茶","檸檬多多","葡萄柚汁","鮮柚綠","青茶瑪奇朵","燕麥奶青","燕麥奶茶","素妍紅","	翡翠檸檬",
];

const demo1 = document.querySelector('#demo1');
const roding1 =document.querySelector('.roding1');
const thestartbtn2 = document.querySelector('#thestartbtn2');
thestartbtn2.addEventListener('click',function(e){
e.preventDefault();
if(roding1){
    roding1.style.display ='none';
}

const randomdrinkIndex = Math.floor(Math.random() * drinkitems.length);
const selectdrink = drinkitems[ randomdrinkIndex ];
demo1.innerHTML = selectdrink;
})