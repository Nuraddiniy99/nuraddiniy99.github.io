// Fungsi untuk menyesuaikan kalkulator berdasarkan item yang dipilih
function configureCalculator(itemName, pricePerUnit) {
    // Menghapus efek animasi pada hasil sebelumnya
    clearResultAnimation();

    // Mendapatkan nilai dari input
    var quantity = getQuantityInputValue();

    // Memeriksa apakah input kosong atau bukan angka
    if (isNaNOrEmpty(quantity)) {
        showErrorMessage("Jumlah Order?");
        return;
    }

    // Menghitung total harga berdasarkan harga per unit yang diberikan
    var total = calculateTotal(quantity, pricePerUnit);

    // Menampilkan hasil dengan format titik angka
    displayResult(formatCurrency(total));
    addResultAnimation();
}

// Fungsi untuk menghapus efek animasi pada hasil
function clearResultAnimation() {
    document.getElementById("result").classList.remove("result-animation");
}

// Fungsi untuk mendapatkan nilai dari input quantity
function getQuantityInputValue() {
    return document.getElementById("quantity").value;
}

// Fungsi untuk memeriksa apakah input kosong atau bukan angka
function isNaNOrEmpty(value) {
    return value === "" || isNaN(value);
}

// Fungsi untuk menampilkan pesan error
function showErrorMessage(message) {
    document.getElementById("result").innerHTML = message;
}

// Fungsi untuk menghitung total harga
function calculateTotal(quantity, pricePerUnit) {
    return quantity * pricePerUnit;
}

// Fungsi untuk menampilkan hasil
function displayResult(formattedTotal) {
    document.getElementById("result").innerHTML = "Rp " + formattedTotal;
}

// Fungsi untuk menambahkan efek animasi pada hasil
function addResultAnimation() {
    document.getElementById("result").classList.add("result-animation");
}

// Menggunakan event input untuk memanggil fungsi configureCalculator secara otomatis
document.getElementById("quantity").addEventListener("input", calculate);

// Fungsi calculate untuk menangani perubahan pada input quantity
function calculate() {
    // Mendapatkan nilai dari input
    var quantity = getQuantityInputValue();

    // Memeriksa apakah input kosong atau bukan angka
    if (isNaNOrEmpty(quantity)) {
        showErrorMessage("Jumlah Order?");
        return;
    }

    // ...

    // Tampilkan hasil dengan format titik angka
    displayResult(formatCurrency(total));
    addResultAnimation();
}

// Menggunakan event click untuk menangani pemilihan item pada .harga .item
var items = document.querySelectorAll('.harga .item');
items.forEach(function (item, index) {
    item.addEventListener('click', function () {
        handleItemClick(item, items);
    });
});

// Fungsi untuk menangani pemilihan item
function handleItemClick(selectedItem, allItems) {
    // Hapus kelas 'selected' dari semua elemen sebelum menambahkannya pada elemen yang diklik
    allItems.forEach(function (item) {
        item.classList.remove('selected');
    });

    // Tambahkan kelas 'selected' pada elemen yang diklik
    selectedItem.classList.add('selected');
}

// Fungsi untuk memformat angka dengan menambahkan titik sebagai pemisah ribuan
function formatCurrency(amount) {
    return amount.toLocaleString('id-ID'); // Menggunakan format mata uang Indonesia
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------POPUP------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var currentPopup = null; // Menyimpan referensi ke popup saat ini

function showDescription(description) {
    // Hapus popup saat ini jika ada
    if (currentPopup) {
        document.body.removeChild(currentPopup);
    }

    // Buat elemen popup deskripsi
    var popup = document.createElement("div");
    popup.className = "description-popup";
    popup.innerHTML = "<p>" + description + "</p>";

    // Tambahkan popup ke dalam body
    document.body.appendChild(popup);

    // Tambahkan tombol tutup pada popup
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "Tutup";
    closeButton.className = "close-button";
    closeButton.onclick = function () {
        // Hapus popup saat tombol tutup ditekan
        document.body.removeChild(popup);
        currentPopup = null; // Set currentPopup ke null
    };
    popup.appendChild(closeButton);

    // Tengahkan tombol tutup dengan CSS
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";

    currentPopup = popup; // Set currentPopup ke popup saat ini
}
