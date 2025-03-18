document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    
    if (name === '' || email === '' || phone === '' || message === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
      return;
    }
  
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('กรุณากรอกอีเมลให้ถูกต้อง!');
      return;
    }
  
    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง!');
      return;
    }
  
    
    alert('ส่งข้อมูลสำเร็จ! ขอบคุณสำหรับการติดต่อ');
    document.getElementById('contactForm').reset(); 
  });
  