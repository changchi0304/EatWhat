// 在chat.html頁面載入時，檢查是否存在選中的圖片路徑
//主角區
window.addEventListener('DOMContentLoaded', function() {
    const selectedImage = localStorage.getItem('selectedImage');
    if (selectedImage) {
      const chatImage = document.querySelectorAll('.onebk img');
      // 將選中的圖片路徑設置為chat.html中的圖片src屬性的值
      chatImage.forEach(function(image){
        image.src = selectedImage;
      })
      // 清除選中的圖片路徑，以便下一次選擇
      localStorage.removeItem('selectedImage');
    }
  });
  
//配角區
  window.addEventListener('DOMContentLoaded', function() {
    const selectedImage2 = localStorage.getItem('selectedImage2');
    if (selectedImage2) {
      const chatImage = document.querySelectorAll('.darker img');
      // 將選中的圖片路徑設置為chat.html中的圖片src屬性的值
      chatImage.forEach(function(image){
        image.src = selectedImage2;
      })
      // 清除選中的圖片路徑，以便下一次選擇
      localStorage.removeItem('selectedImage2');
    }
  });
  
  
  
  
  
  
  
  

