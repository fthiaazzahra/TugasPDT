let cacatanHarian = [];

//menampilkan catatan harian di tabel
function tampilkanCatatan(){
    const tabel = document.getElementById('tabelCatatan');
    const tbody = tabel.querySelector('tbody');

//kosongkan isi tbody
    tbody.innerHTML = '';

//menambahkan setiap catatan ke dalam tabel
    catatanHarian.forEach(catatan=> {
      const row = document.createElement('tr');
        row.innerHTML = `
        <td>${catatan.judul}</td>
        <td>${catatan.tanggal}</td>
        <td>
        <button class="btn-edit" onclick="editCatatan(${catatan.id})">Edit</button>
        <button class="btn-delete" onclick="hapusCatatan(${catatan.id})">Hapus</button>
      </td>  
    `;
    tbody.appendChild(row);  
});

}

//tambah catatan baru
function tambahCatatan(event){
     event.preventDefault();

     const form = document.getElementsById('formCatatan');
     const judul = form.judul.value;
     const tanggal = form.tanggal.value;


//id untuk setiap catatan

    const id = Date.now()

// tambah catatan ke array
    tampilkanCatatan();

//reset form after submit
    form.reset();

}

//isi dengan catatan yang akan diedit
function editCatatan(id){
    const catatan = catatanHarian.find(catatan => catatan.id === id);
    if (!catatan) return;

    const form = document.getElementById('formCatatan');
    form.judul.value = catatan.judul;
    form.tanggal.value = catatan.tanggal;

    //hapus catatan dari array setelah di dedit
    catatanHarian = catatanHarian.filter(catatan => catatan.id !== id);

    //tampilkan ulang setelah diisi
    tampilkanCatatan();
}

//form submit
const formCatatan = document.getElementById('formCatatan');
formCatatan.addEventListener('submit', tambahCatatan);

//menampilkan catatan pertama kali saat halaman dibuat
tampilkanCatatan;