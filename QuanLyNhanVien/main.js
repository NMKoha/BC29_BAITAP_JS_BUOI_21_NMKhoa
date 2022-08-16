var dsnv = new DanhSachNhanVien();
getLocalStorage();

function getEle(id) {
    return document.querySelector(id);
};

function layThongTinNV() {
    var _tknv = getEle("#tknv").value;
    var _name = getEle("#name").value;
    var _email = getEle("#email").value;
    var _password = getEle("#password").value;
    var _datepicker = getEle("#datepicker").value;
    var _luongCB = getEle("#luongCB").value;
    var _chucVu = getEle("#chucvu").value;
    var _gioLam = getEle("#gioLam").value;
    var _tongLuong = 0;
    var _xepLoai = "";

    var nhanVien = new NhanVien(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucVu, _gioLam);
    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNV();
    return nhanVien;
};
getEle("#btnThemNV").onclick = function() {
    var nhanVien = layThongTinNV();
    dsnv.themNV(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
};

function taoBang(data) {
    var content = "";
    data.forEach(function(item, index) {
        content += `
        <tr>
            <td>${item.tknv}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.datepicker}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.xepLoai}</td>
            <td>
            <button class="btn btn-info" onclick="suaNV('${item.tknv}')">Sửa</button>
                <button class="btn btn-danger" onclick="xoaNV('${item.tknv}')">Xoá</button>
            </td>
        </tr>
        `;
    });
    getEle("#tableDanhSach").innerHTML = content;
};

function setLocalStorage() {
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", dataString);
};

function getLocalStorage() {
    var dataString = localStorage.getItem("DSNV");
    if (dataString !== null) {
        var dataJson = JSON.parse(dataString);
        dsnv.arr = dataJson;
    } else {
        dsnv.arr = [];
    }
    taoBang(dsnv.arr);
};

function xoaNV(id) {
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
};

function suaNV(id) {
    var nv = dsnv.suaNV(id);
    if (nv) {
        getEle("#tknv").value = nv.tknv;
        getEle("#name").value = nv.name;
        getEle("#email").value = nv.email;
        getEle("#password").value = nv.password;
        getEle("#datepicker").value = nv.datepicker;
        getEle("#luongCB").value = nv.luongCB;
        getEle("#chucvu").value = nv.chucVu;
        getEle("#gioLam").value = nv.gioLam;

        getEle("#tknv").disabled = true;
        console.log(nv);
    }
}

getEle("#btnCapNhat").onclick = function() {
    var nv = layThongTinNV();
    dsnv.capNhat(nv);
    taoBang(dsnv.arr);
    setLocalStorage();
};

getEle("#searchName").addEventListener("keyup", function() {
    var keyword = getEle("#searchName").value;
    var mangTimKiem = dsnv.timKiemLoaiNV(keyword);
    taoBang(mangTimKiem);
});

var isValid = true;