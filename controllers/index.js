var mangSinhVien = [];
var validation = new Validation();
//Định nghĩa sự kiện click khi người dùng bấm nút xác nhận
document.querySelector('#btnXacNhan').onclick = function() {
    //Tạo ra đối tượng sinh viên chứa thông tin người dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    console.log('Sinh viên', sv);

    //Kiểm tra hợp lệ
    var valid = true;
    valid = validation.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '.kiemTraRong-maSinhVien') &
        validation.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '.kiemTraRong-tenSinhVien') &
        validation.kiemTraRong(sv.email, 'Email sinh viên', '.kiemTraRong-emailSinhVien') &
        validation.kiemTraRong(sv.soDienThoai, 'Số điện thoại sinh viên', '.kiemTraRong-soDienThoai') &
        validation.kiemTraRong(sv.diemToan, 'Điểm toán sinh viên', '.kiemTraRong-diemToan') &
        validation.kiemTraRong(sv.diemLy, 'Điểm lý sinh viên', '.kiemTraRong-diemLy') &
        validation.kiemTraRong(sv.diemHoa, 'Điểm hóa sinh viên', '.kiemTraRong-diemHoa') &
        validation.kiemTraRong(sv.diemRenLuyen, 'ĐRL sinh viên', '.kiemTraRong-diemRenLuyen');

    //Kiểm tra định dạng dữ liệu
    //Kiểm tra định dạng email
    valid &= validation.kiemTraEmail(sv.email, 'Email', '.kiemTraDinhDang-email');
    valid &= validation.kiemTraTatCaKyTu(sv.tenSinhVien, 'Tên', '.kiemTraDinhDang-tenSinhVien');
    valid &= validation.kiemTraTatCaLaSo(sv.soDienThoai, 'Số điện thoại', '.kiemTraDinhDang-soDienThoai');
    valid &= validation.kiemTraGiaTri(sv.diemToan, 'Điểm toán', '.kiemTraGiaTri-diemToan', 0, 10) &
        validation.kiemTraGiaTri(sv.diemLy, 'Điểm lý', '.kiemTraGiaTri-diemLy', 0, 10) &
        validation.kiemTraGiaTri(sv.diemHoa, 'Điểm hóa', '.kiemTraGiaTri-diemHoa', 0, 10) &
        validation.kiemTraGiaTri(sv.diemRenLuyen, 'Điểm rèn luyện', '.kiemTraGiaTri-diemRenLuyen', 0, 10);

    valid &= validation.kiemTraDoDaiChuoi(sv.email, 'Email ', '.kiemTraDoDaiChuoi-email', 6, 32);
    valid &= validation.kiemTraDoDaiChuoi(sv.tenSinhVien, 'Tên sinh viên ', '.kiemTraDoDaiChuoi-tenSinhVien', 6, 32);

    if (!valid) {
        return;
    }
    //Kiểm tra rỗng
    // var valid = true;
    // if (sv.maSinhVien.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML = '';
    // }

    // if (sv.tenSinhVien.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML = '';
    // }

    // if (sv.email.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-emailSinhVien').innerHTML = 'Email sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-emailSinhVien').innerHTML = '';
    // }

    // if (sv.soDienThoai.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML = 'Số điện thoại sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML = '';
    // }

    // if (sv.diemToan.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML = 'Điểm toán sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML = '';
    // }

    // if (sv.diemLy.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML = 'Điểm lý sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML = '';
    // }

    // if (sv.diemHoa.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML = 'Điểm hóa sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML = '';
    // }

    // if (sv.diemRenLuyen.trim() === '') {
    //     //Dom đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào inner HTML
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML = 'Điểm rèn luyện sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML = '';
    // }

    // if (valid === false) {
    //     return;
    // }
    //Kiểm tra định dạng dữ liệu


    //Thêm 1 sinh viên vào mảng
    mangSinhVien.push(sv);
    console.log('mảng sinh viên', mangSinhVien);
    //Tạo bảng
    renderTable(mangSinhVien);
    //Lưu vào local storage
    luuLocalStorage();


    // //Tạo thẻ tr sinh viên, Cú pháp tạo thẻ : document.createElement('tenThe');
    // var trSinhVien = document.createElement('tr');

    // //Tạo thẻ tdMaSinhVien => Chứa nội dung sv.maSinhVien
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;

    // //Tạo thẻ tdTenSinhVien
    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;
    // var tdSoDienThoai = document.createElement('td');
    // tdSoDienThoai.innerHTML = sv.soDienThoai;
    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();
    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sv.xepLoai();

    // //Tạo ra td chức năng
    // var tdChucNang = document.createElement('td');

    // var buttonXoa = document.createElement('button');
    // buttonXoa.innerHTML = 'Xóa';
    // buttonXoa.className = 'btn btn-danger';
    // buttonXoa.onclick = function () {
    //     //this: là nút xóa
    //     //this vị trí hiện tại là thẻ button => .parentElement là thẻ td => td.parentElement =>thẻ tr => .remove() :xóa
    //     this.parentElement.parentElement.remove();
    // }

    // //Add button vào td
    // tdChucNang.appendChild(buttonXoa);
    // //Chèn thẻ con vào thẻ cha : theCha.appendChild(theCon)
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdSoDienThoai);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(tdChucNang);


    // //Dom đến thẻ tbody => appendChild thẻ tr vào
    // document.querySelector('#tableSinhVien').appendChild(trSinhVien);

}


var renderTable = function(arrSV) {
        //Từ mảng sinh viên tạo ra 1 chuỗi html nhiều thẻ tr dựa vào vòng lặp
        var noiDungTable = '';
        for (var index = 0; index < arrSV.length; index++) {
            //Mỗi lần lặp lấy ra 1 đối tượng sinhVien
            var sinhVien = arrSV[index];
            var sv = new SinhVien(sinhVien.maSinhVien, sinhVien.tenSinhVien, sinhVien.loaiSinhVien, sinhVien.email, sinhVien.soDienThoai, sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen, sinhVien.loaiSinhVien);
            // sv.maSinhVien = sinhVien.maSinhVien;
            // sv.tenSinhVien = sinhVien.tenSinhVien;
            // sv.email = sinhVien.email;
            // sv.soDienThoai = sinhVien.soDienThoai;
            // sv.diemToan = sinhVien.diemToan;
            // sv.diemLy = sinhVien.diemLy;
            // sv.diemHoa = sinhVien.diemHoa;
            // sv.diemRenLuyen = sinhVien.diemRenLuyen;
            // sv.loaiSinhVien = sinhVien.loaiSinhVien;
            //Tạo ra 1 chuỗi + dồn vào nội dung <tr></tr>
            noiDungTable += `
                <tr>
                    <td>${sv.maSinhVien}</td>
                    <td>${sv.tenSinhVien}</td>
                    <td>${sv.email}</td>
                    <td>${sv.soDienThoai}</td>
                    <td>${sv.tinhDiemTrungBinh()}</td>
                    <td>${sv.xepLoai()}</td>

                    <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')" >Xóa</button></td>
                    <td><button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')" >Chỉnh sửa</button></td>
                </tr>            
        `
        }
        console.log(noiDungTable);
        document.querySelector('#tableSinhVien').innerHTML = noiDungTable;


    }
    //Cài đặt sự kiện cho nút button xóa
var xoaSinhVien = function(maSV) {
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        var sv = mangSinhVien[index];
        //Lấy mã sinh viên của từng đối tượng so sánh với maSV được click
        if (sv.maSinhVien === maSV) {
            //splice là hàm xóa phần từ của mảng dựa vào index
            mangSinhVien.splice(index, 1);
        }
    }
    //Sau khi xóa dữ liệu trong mảng gọi hàm tạo lại table truyền vào mảng sinh viên đã xóa
    renderTable(mangSinhVien);
}

var luuLocalStorage = function() {
    //Biến mảng sinh viên thành chuỗi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    //Đem chuỗi mangSinhVien lưu vào localstorage
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

//Viết phương thức lấy dữ liệu từ localstorage => khi người dùng vừa vào trang web
var layMangSinhVienStorage = function() {
    //Kiểm tra dữ liệu có trong localstorage không
    if (localStorage.getItem('mangSinhVien')) {
        //Lấy dữ liệu được lưu trong localstorage ra ngoài
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //Biến dữ liệu từ chuỗi chuyển về object js gán vào mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        //Sau khi lấy dữ liệu ra gọi hàm tạo bảng
        renderTable(mangSinhVien);

    }
}
layMangSinhVienStorage();

var chinhSua = function(maSV) {
    document.querySelector('#maSinhVien').disabled = true;
    //Từ mã sinh viên => tìm sinh viên trong mangSinhVien
    for (var index = 0; index < mangSinhVien.length; index++) {
        //Mỗi lần duyệt mảng lấy ra 1 đối tượng sinh viên
        var sv = mangSinhVien[index];

        //So sánh nếu maSV truyền vào === với dối tượng đang duyệt => gán ngược lại lên các control phía trên
        if (maSV === sv.maSinhVien) {
            document.querySelector('#maSinhVien').value = sv.maSinhVien;
            document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
            document.querySelector('#email').value = sv.email;
            document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
            document.querySelector('#diemToan').value = sv.diemToan;
            document.querySelector('#diemLy').value = sv.diemLy;
            document.querySelector('#diemHoa').value = sv.diemHoa;
            document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
        }
    }
}

//Cập nhật thông tin người dùng
document.querySelector('#luuThongTin').onclick = function() {
    //Lấy thông tin người dùng sau khi thay đổi vào đối tượng sinhVien
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    //Tìm trong mangSinhVien đối tượng cùng mã => cập nhật lại giấ trị
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sinhVienCapNhat = mangSinhVien[index];
        //Tìm ra sinh viên trong mảng có mã = với mã sv trên giao diện => cập nhật giá trị
        if (sinhVienCapNhat.maSinhVien === sv.maSinhVien) {
            sinhVienCapNhat.maSinhVien = sv.maSinhVien;
            sinhVienCapNhat.tenSinhVien = sv.tenSinhVien;
            sinhVienCapNhat.email = sv.email;
            sinhVienCapNhat.soDienThoai = sv.soDienThoai;
            sinhVienCapNhat.diemToan = sv.diemToan;
            sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
            sinhVienCapNhat.diemHoa = sv.diemHoa;
            sinhVienCapNhat.diemLy = sv.diemLy;
        }
    }
    renderTable(mangSinhVien);
    luuLocalStorage();

}