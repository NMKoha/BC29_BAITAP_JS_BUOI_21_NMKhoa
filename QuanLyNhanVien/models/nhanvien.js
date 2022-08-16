function NhanVien(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucVu, _gioLam) {
    this.tknv = _tknv;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tinhTongLuong = function() {
        if (this.chucVu === "Sếp") {
            this.tongLuong = 3 * (parseFloat(this.luongCB));
        }
        if (this.chucVu === "Trưởng phòng") {
            this.tongLuong = 2 * (parseFloat(this.luongCB));
        }
        if (this.chucVu === "Nhân viên") {
            this.tongLuong = (parseFloat(this.luongCB));
        }
    };

    this.xepLoaiNV = function() {

        if (this.gioLam >= 192) {
            return this.xepLoai = "Nhân viên xuất sắc";
        }
        if (this.gioLam >= 176 && this.gioLam < 192) {
            return this.xepLoai = "Nhân viên giỏi";
        }
        if (this.gioLam >= 160 && this.gioLam < 176) {
            return this.xepLoai = "Nhân viên khá";
        } else {
            return this.xepLoai = "Nhân viên trung bình";
        }
    };
};