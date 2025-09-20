import React, { useState } from "react";

const PickupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pickupDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you’ll send data to your backend or show a confirmation
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 8}}>
      <h2>Pick Up Cuci Sepatu</h2>
      <label>
        Nama Lengkap:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        No HP/WA:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Alamat Lengkap:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Tanggal Pick Up:
        <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Jenis Sepatu:
        <input type="text" name="shoeType" value={formData.shoeType} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Catatan Tambahan:
        <textarea name="notes" value={formData.notes} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Kirim Formulir</button>
    </form>
  );
};

export default PickupForm;