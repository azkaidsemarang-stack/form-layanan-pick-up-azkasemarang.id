<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>azkasemarang.id - Jasa Cuci Sepatu</title>
  <style>
    body { font-family: Arial, sans-serif; margin:0; padding:0; background:#000; color:#fff; }
    header { display:flex; align-items:center; gap:15px; padding:20px; }
    header img { width:80px; height:80px; object-fit:contain; border-radius:10px; }
    nav { display:flex; justify-content:center; gap:10px; margin:20px 0; }
    nav button { padding:8px 16px; border-radius:6px; border:1px solid #666; background:transparent; color:#fff; cursor:pointer; }
    nav button.active { background:#fff; color:#000; }
    .tab { display:none; max-width:800px; margin:0 auto; padding:20px; }
    .tab.active { display:block; }
    .service-category { margin-top:20px; }
    .service-category h3 { margin-bottom:5px; }
    .service-item { display:flex; justify-content:space-between; border-bottom:1px solid #444; padding:6px 0; }
    .contact a { display:inline-flex; align-items:center; gap:6px; margin:5px 15px 5px 0; color:#0ff; text-decoration:none; }
    .btn-wa { display:inline-block; margin-top:15px; background:#25d366; color:#fff; padding:10px 20px; border-radius:8px; text-decoration:none; }
    form label { display:block; margin-top:10px; }
    form input, form select, form textarea { width:100%; padding:8px; margin-top:4px; border-radius:6px; border:1px solid #444; background:#111; color:#fff; }
    form button { margin-top:15px; padding:10px 20px; border:none; border-radius:6px; background:#fff; color:#000; cursor:pointer; }
    .icon { width:20px; height:20px; }
  </style>
</head>
<body>
  <header>
    <img src="logo.png" alt="Logo">
    <div>
      <h1>azkasemarang.id</h1>
      <p>Shoes Clean — Jalan Gajah Raya No. 30B, Kota Semarang</p>
    </div>
  </header>

  <nav>
    <button class="active" onclick="showTab('home')">Home</button>
    <button onclick="showTab('services')">Layanan & Harga</button>
    <button onclick="showTab('booking')">Booking</button>
    <button onclick="showTab('contact')">Contact</button>
  </nav>

  <div id="home" class="tab active">
    <img src="tagline.png" alt="Tagline" style="max-width:250px; display:block; margin:0 auto 20px;">
    <h2 style="text-align:center">Selamat datang di azkasemarang.id</h2>
    <p style="text-align:center">Kami melayani perawatan sepatu, tas, helm, koper, dan topi dengan kualitas terbaik di Kota Semarang.</p>
    <div style="text-align:center">
      <a href="https://wa.me/628132551194" target="_blank" class="btn-wa">💬 Chat via WhatsApp</a>
    </div>
  </div>

  <div id="services" class="tab">
    <h2>Layanan & Harga</h2>
    <div class="service-category">
      <h3>SHOES</h3>
      <div class="service-item"><span>Deep clean (cuci luar dalam)</span><span>25K</span></div>
      <div class="service-item"><span>Fast clean (cuci luar)</span><span>20K</span></div>
      <div class="service-item"><span>Full treatment</span><span>60K</span></div>
      <div class="service-item"><span>Unyellowing</span><span>45K</span></div>
      <div class="service-item"><span>Reglue</span><span>35K</span></div>
      <div class="service-item"><span>Deep clean express</span><span>40K</span></div>
      <div class="service-item"><span>Sole (jahit)</span><span>35K</span></div>
      <div class="service-item"><span>Repainting (start from)</span><span>100K</span></div>
      <div class="service-item"><span>Leather Care</span><span>35K</span></div>
    </div>
    <div class="service-category">
      <h3>BAG</h3>
      <div class="service-item"><span>Small</span><span>25K</span></div>
      <div class="service-item"><span>Medium</span><span>35K</span></div>
      <div class="service-item"><span>Big</span><span>45K</span></div>
      <div class="service-item"><span>Bag Repair (start from)</span><span>50K</span></div>
    </div>
    <div class="service-category">
      <h3>HELMET</h3>
      <div class="service-item"><span>Half face</span><span>30K</span></div>
      <div class="service-item"><span>Full face</span><span>40K</span></div>
      <div class="service-item"><span>Helmet kids</span><span>25K</span></div>
      <div class="service-item"><span>Helmet care (start from)</span><span>50K</span></div>
    </div>
    <div class="service-category">
      <h3>KOPER</h3>
      <div class="service-item"><span>Small</span><span>45K</span></div>
      <div class="service-item"><span>Medium</span><span>75K</span></div>
      <div class="service-item"><span>Big</span><span>100K</span></div>
    </div>
    <div class="service-category">
      <h3>HAT</h3>
      <div class="service-item"><span>White hat</span><span>30K</span></div>
      <div class="service-item"><span>Non White</span><span>25K</span></div>
    </div>
  </div>

  <div id="booking" class="tab">
    <h2>Form Booking</h2>
    <form onsubmit="return sendWA(event)">
      <label>Nama <input type="text" id="name" required></label>
      <label>Telepon <input type="text" id="phone" required></label>
      <label>Email <input type="email" id="email"></label>
      <label>Alamat <input type="text" id="address"></label>
      <label>Layanan
        <select id="service">
          <option>Deep clean (cuci luar dalam)</option>
          <option>Fast clean (cuci luar)</option>
          <option>Full treatment</option>
          <option>Unyellowing</option>
          <option>Reglue</option>
          <option>Deep clean express</option>
          <option>Sole (jahit)</option>
          <option>Repainting (start from)</option>
          <option>Leather Care</option>
          <option>Bag - Small</option>
          <option>Bag - Medium</option>
          <option>Bag - Big</option>
          <option>Bag Repair (start from)</option>
          <option>Helmet - Half face</option>
          <option>Helmet - Full face</option>
          <option>Helmet kids</option>
          <option>Helmet care</option>
          <option>Koper Small</option>
          <option>Koper Medium</option>
          <option>Koper Big</option>
          <option>Hat White</option>
          <option>Hat Non White</option>
        </select>
      </label>
      <label><input type="checkbox" id="pickup"> Pickup Service</label>
      <label>Tanggal <input type="date" id="date" required></label>
      <label>Jam <input type="time" id="time" required></label>
      <label>Catatan <textarea id="notes"></textarea></label>
      <button type="submit">Kirim Booking via WhatsApp</button>
    </form>
  </div>

  <div id="contact" class="tab contact">
    <h2>Hubungi Kami</h2>
    <p>📍 Jalan Gajah Raya No. 30B, Kota Semarang</p>
    <p>📞 0812-3255-1194</p>
    <p>📧 azka@azkasemarang.id</p>
    <a href="https://www.instagram.com/azkasemarang.id" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" class="icon" alt="Instagram"> Instagram
    </a>
    <a href="https://www.tiktok.com/@azkasemarang.id" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" class="icon" alt="TikTok"> TikTok
    </a>
    <div>
      <a href="https://wa.me/628132551194" target="_blank" class="btn-wa">💬 Chat via WhatsApp</a>
    </div>
  </div>

  <script>
    function showTab(id) {
      document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      event.target.classList.add('active');
    }

    function sendWA(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const service = document.getElementById('service').value;
      const pickup = document.getElementById('pickup').checked ? 'Ya' : 'Tidak';
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const notes = document.getElementById('notes').value;

      const text = encodeURIComponent(
        `Halo azkasemarang.id, saya mau booking layanan:%0A`+
        `Nama: ${name}%0A`+
        `Telp: ${phone}%0A`+
        `Email: ${email}%0A`+
        `Alamat: ${address}%0A`+
        `Layanan: ${service}%0A`+
        `Pickup: ${pickup}%0A`+
        `Tanggal: ${date}%0A`+
        `Jam: ${time}%0A`+
        `Catatan: ${notes}`
      );
      window.open(`https://wa.me/628132551194?text=${text}`, '_blank');
      return false;
    }
  </script>
</body>
</html>
