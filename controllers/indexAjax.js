//kết nối dữ liệu backend dựa vào thư viện axios
var svService = new SinhVienService();
var layDanhSachSinhVienApi = function() {
    var promise = svService.layDanhSachSinhVien(); //Gọi đến backend lấy data
    //Xử lý cho trường hợp gọi thành công
    promise.then(function(result) {
            console.log('Kết quả', result.data);
            renderTable(result.data);

        })
        //Xử lý cho trường hợp thất bại
    promise.catch(function(error) {
        console.log(error);
    })
}
layDanhSachSinhVienApi();

var renderTable = function(mangSinhVien) {
    var noiDungTable = '';
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = new SinhVien();
        sv.maSinhVien = mangSinhVien[i].maSinhVien;
        sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
        sv.diemToan = mangSinhVien[i].diemToan;
        sv.diemLy = mangSinhVien[i].diemLy;
        sv.diemHoa = mangSinhVien[i].diemHoa;
        sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
        sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
        sv.email = mangSinhVien[i].email;
        //Tạo ra tr chứa thông tin sinh viên tương ứng
        noiDungTable += `
     <tr>
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDiemTrungBinh()}</td>
        <td>${sv.xepLoai()}</td>
        <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')" >Xóa</button></td>
        <td><button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')" >Chỉnh sửa</button></td>
    </tr> 
        `;

    }
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}

//---Chức năng thêm sinh viên lưu trữ vào server thông qua api backend---
document.querySelector('#btnXacNhan').onclick = function() {
    //Lấy dữ liệu người dùng nhập vào
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;

    //Dùng axios đưa dữ liệu về server thông qua api backend cung cấp 
    var promise = svService.themSinhVien(sv); //Gọi đến backend lấy data
    //Hàm thực thi khi gọi ajax thành thông
    promise.then(function(result) {
        console.log(result.data);
        //Gọi phương thức lấy thông tin sinh viên tạo lại table mới
        layDanhSachSinhVienApi();
    });
    //Hàm thực thi khi lỗi xảy ra
    promise.catch(function(error) {
        console.log(error.response.data);
    })
}

//---Chức năng xóa sinh viên server dựa vào api backend---
var xoaSinhVien = function(maSinhVien) {
    var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' + maSinhVien,
            method: 'DELETE',
        })
        //Hamd xử lý thành công
    promise.then(function(result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    })
    promise.catch(function(error) {
        console.log(error.response.data);
    })
}

//---Chức năng sửa thuộc tính của sinh viên---
var chinhSua = function(maSinhVien) {

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' + maSinhVien,
        method: 'GET',
    })
    promise.then(function(result) {
        console.log(result.data);
        //Gán dữ liệu server trả về lên giao diện
        var sv = new SinhVien();
        sv = result.data;
        document.querySelector('#maSinhVien').value = sv.maSinhVien;
        document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
        document.querySelector('#email').value = sv.tenSinhVien;
        document.querySelector('#diemToan').value = sv.diemToan;
        document.querySelector('#diemLy').value = sv.diemLy;
        document.querySelector('#diemHoa').value = sv.diemHoa;
        document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
        document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien;

    })
    promise.catch(function(error) {
        console.log(error.response.data);
    })
}

//---Chức năng lưu thông tin server dựa vào api backend cung cấp
document.querySelector('#luuThongTin').onclick = function() {
    //Lấy dữ liệu từ người dùng nhập đưa vào đối tượng theo format dữ liệu của backend yêu cầu
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;

    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.email = document.querySelector('#email').value;


    //Gọi ajax đưa dữ liệu về server được cập nhật
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=' + sv.maSinhVien,
        method: 'PUT',
        data: sv,
    })
    promise.then(function(result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    })
    promise.catch(function(error) {
        console.log(error.response.data);
    })
}