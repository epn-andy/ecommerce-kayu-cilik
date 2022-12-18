const dataProduk = [
  {
    kategori: "Plakat",
    harga: "Rp.45.000 - Rp.60.000",
    foto: "pvandel1.png",
    spesifikasi: ["Minimal Pemesanan 1 Lusin", "Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.80.000",
    foto: "pvandel2.png",
    spesifikasi: ["Pemesanan Satuan", "Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.155.000 - Rp.175.000",
    foto: "pvandel3.png",
    spesifikasi: ["Free Design", "Size Custom (20cm-24cm)", "Bahan Pinewood", "Akrilik 5mm", "Finishing Glossy", "Box Exclusive"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.90.000 - Rp.100.000",
    foto: "pvandel4.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.85.000",
    foto: "pvandel5.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.130.000 - Rp.145.000",
    foto: "pvandel6.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Akrilik 3mm - 5mm", "Finishing Glossy", "Gambar Jenis UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.180.000 - Rp.185.000",
    foto: "pvandel7.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Akrilik 5mm", "Finishing Glossy", "Gambar Jenis UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.175.000",
    foto: "pvandel8.png",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "Akrilik 5mm", "Finishing Glossy", "UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.175.000",
    foto: "pvandel9.png",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "Akrilik 5mm", "Finishing Glossy", "UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.145.000",
    foto: "pvandel10.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Akrilik 3mm - 5mm", "Finishing Glossy", "Gambar Jenis UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.175.000",
    foto: "pvandel11.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "Akrilik 3mm - 5mm", "Finishing Glossy", "Gambar Jenis UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.350.000",
    foto: "vandel.jpg",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "Akrilik 10mm", "Finishing Glossy", "UV Printing"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.145.000",
    foto: "pvandel12.png",
    spesifikasi: ["Free Design", "Tinggi 24cm", "Bahan Jati Belanda", "2 Layer Kayu", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.80.000 - Rp.145.000",
    foto: "pvandel13.png",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "2 Layer Kayu", "Kaca Double", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.195.000",
    foto: "pvandel14.png",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "2 Layer Kayu", "Kaca Double", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.235.000",
    foto: "pvandel15.png",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "2 Layer Kayu", "Kaca Double", "Finishing Glossy"],
  },
  {
    kategori: "Plakat",
    harga: "Rp.265.000",
    foto: "vandel2.jpg",
    spesifikasi: ["Free Design", "Tinggi 30cm", "Bahan Jati Belanda", "Akrilik UV 8mm", "Finishing Glossy"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.175.000",
    foto: "jam1.png",
    spesifikasi: ["Free Design", "Ukuran 21cm x 29cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.195.000",
    foto: "jam2.png",
    spesifikasi: ["Free Design", "Ukuran 20cm x 20cm", "Bahan Jati Belanda", "Finishing Glossy", "Bonus Penyangga"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.165.000",
    foto: "jam3.png",
    spesifikasi: ["Free Design", "Ukuran 21cm x 29cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.155.000",
    foto: "jam4.png",
    spesifikasi: ["Free Design", "Ukuran 20cm x 20cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.195.000",
    foto: "jam5.png",
    spesifikasi: ["Free Design", "Ukuran 20cm x 20cm", "Bahan Jati Belanda", "Finishing Glossy"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.185.000 - Rp.265.000",
    foto: "jam6.png",
    spesifikasi: ["Free Design", "Ukuran 20cm x 20cm", "Bahan Jati Belanda", "Plus Musik Happy Birthday", "Custom Model (Print Laser)", "Finishing Glossy"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.475.000",
    foto: "jam7.png",
    spesifikasi: ["Free Design", "Ukuran 30cm x 30cm", "Bahan Jati Belanda", "Finishing Glossy", "Full Cutting (Huruf Timbul Kayu)"],
  },
  {
    kategori: "Jam Kayu",
    harga: "Rp.195.000",
    foto: "jam8.png",
    spesifikasi: ["Free Design", "Ukuran 21cm x 29cm", "Bahan Jati Belanda", "Plus Kaca 3mm", "Finishing Glossy", "Custom Model (Print Laser)"],
  },
  {
    kategori: "Wall Art",
    harga: "Rp.195.000",
    foto: "wall1.png",
    spesifikasi: ["Free Design", "Ukuran 21cm x 29cm", "Bahan Jati Belanda", "Plus Kaca 3mm", "Finishing Glossy", "Custom Model Karakter (Print Laser)"],
  },
  {
    kategori: "Merchandise",
    harga: "Rp.185.000",
    foto: "merch1.png",
    spesifikasi: ["Free Design", "Ukuran 21cm x 29cm", "Bahan Jati Belanda", "Plus Kaca 3mm", "Finishing Glossy", "Custom Model"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama1.png",
    spesifikasi: ["Bahan Jati Belanda", "Tulisan memakai bahan Teakwood Laser Cutting", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama2.png",
    spesifikasi: ["Bahan Jati Belanda", "Tulisan memakai bahan Akrilik 5mm + UV", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.195.000",
    foto: "pnama3.png",
    spesifikasi: ["Bahan Jati Belanda", "Tulisan memakai Grafir Laser", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama4.png",
    spesifikasi: ["Tulisan memakai bahan Akrilik 5mm + UV", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama5.png",
    spesifikasi: ["Bahan Jati Belanda", "Tulisan memakai bahan Akrilik 2mm + UV", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama6.png",
    spesifikasi: ["Bahan Jati Belanda", "Tulisan memakai bahan Akrilik 8mm + UV", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama7.png",
    spesifikasi: ["Bahan Jati Belanda", "Tulisan memakai bahan Teakwood Laser Cutting", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
  {
    kategori: "Papan Nama",
    harga: "Rp.235.000",
    foto: "pnama8.png",
    spesifikasi: ["Tulisan memakai bahan Akrilik 5mm + UV", "Tatakan Jati Belanda", "Ukuran 24cm x 12cm", "Finishing Politure Glossy", "Free Packing Kardus Rapi"],
  },
];

export default dataProduk;
