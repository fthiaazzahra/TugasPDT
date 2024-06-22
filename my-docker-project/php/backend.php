<?php
// Koneksi ke database MySQL
$servername = "localhost"; 
$username = "mydatabase"; 
$password = ""; 
$dbname = "jurnal_db"; 

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi database gagal: " . $conn->connect_error);
}

// Menangani form submit untuk tambah catatan
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tanggal = $_POST['tanggal'];
    $judul = $_POST['judul'];
    $catatan = $_POST['catatan'];

    // Query SQL untuk menyimpan catatan baru
    $sql = "INSERT INTO catatan (tanggal, judul, catatan_tambahan) VALUES ('$tanggal', '$judul', '$catatan')";

    if ($conn->query($sql) === TRUE) {
        // Jika berhasil menyimpan, kirim respons JSON
        $response = array("status" => "success", "message" => "Catatan berhasil ditambahkan");
        echo json_encode($response);
    } else {
        // Jika terjadi kesalahan, kirim respons JSON dengan pesan error
        $response = array("status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($response);
    }
}

// Menangani permintaan GET untuk mengambil semua catatan
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Query SQL untuk mengambil semua catatan
    $sql = "SELECT tanggal, judul, catatan_tambahan FROM catatan";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $catatan = array();
        // Loop melalui hasil query dan memasukkan ke dalam array
        while($row = $result->fetch_assoc()) {
            $catatan[] = $row;
        }
        // Mengirimkan data dalam format JSON
        echo json_encode($catatan);
    } else {
        // Jika tidak ada data, kirimkan array kosong dalam format JSON
        echo json_encode(array());
    }
}

// Menutup koneksi ke database
$conn->close();

?>
