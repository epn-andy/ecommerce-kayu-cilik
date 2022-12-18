import dataProduk from "./dataproduk.js";
import "./script.js";

const render = (produk) => {
  let listSpek = "";
  produk.spesifikasi.forEach((spek) => {
    const li = "<li>" + spek + "</li>";
    listSpek += li;
  });

  const ainnerHTML = `
      <div class="card-product h-full group">
        <div style="background-image: url('dist/img/${produk.foto}');" class="bg-cover bg-center h-72 relative">
          <div class="pt-8 bg-slate-900/60 h-full text-slate-100 font-semibold text-center hidden group-hover:block animate__animated animate__fadeIn">
            <p class="font-bold tracking-wider mb-2 normal-case">${produk.kategori}</p>
            <ul>
              ${listSpek}
            </ul>
          </div>
          <div class="bg-gray-200 absolute bottom-0 w-full hidden group-hover:block animate__animated animate__fadeInUp">
             <p class="text-center p-4 font-semibold tracking-wide leading-3">${produk.harga}</p>
          </div>
        </div>
      </div>  
      `;
  return ainnerHTML;
};

const productList = document.getElementById("product-list");
const kategoriSelected = document.querySelector("#kategori");
productList.innerHTML = "";
const main = (dataProduk, kategori) => {
  dataProduk.forEach((produk) => {
    if (kategori == "jam") {
      produk.kategori == "Jam Kayu" ? (productList.innerHTML += render(produk)) : null;
    } else if (kategori == "plakat") {
      produk.kategori == "Plakat" ? (productList.innerHTML += render(produk)) : null;
    } else if (kategori == "merch") {
      produk.kategori == "Merchandise" ? (productList.innerHTML += render(produk)) : null;
    } else if (kategori == "wallart") {
      produk.kategori == "Wall Art" ? (productList.innerHTML += render(produk)) : null;
    } else if (kategori == "pnama") {
      produk.kategori == "Papan Nama" ? (productList.innerHTML += render(produk)) : null;
    } else {
      productList.innerHTML += render(produk);
    }
  });
};

main(dataProduk, kategoriSelected.value);
document.getElementById("kategori").addEventListener("change", () => {
  productList.innerHTML = "";
  main(dataProduk, kategoriSelected.value);
});
