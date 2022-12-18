var vue = new Vue({
    el: '#app',
    data: {
        // Tạo biến quản lý lỗi là mảng rỗng
        errors: [],

        // Tạo biến quản lý việc kiếm tra Ràng buộc dữ liệu (validation) hay chưa?
        // Mặc định là chưa kiểm tra
        dakiemtraloixong: false,

        // Khởi tạo giá trị ban đầu cho FORM
        hoten: '',
        cccd: '',
        email: '',
        sodienthoai: '',
        loinhan: ''
    },
    methods: {
        kiemTraDuLieu: function (e) {
            // Dừng sự kiện tiếp theo của FORM
            e.preventDefault();

            // Trước khi kiểm tra, cần reset lại biến lỗi
            // => Giả sử như chưa có lỗi xảy ra
            this.errors = [];
            this.dakiemtraloixong = false;

            // Validate Họ tên
            // Kiểm tra rỗng
            if (this.hoten == "") {
                this.errors.push('Vui lòng nhập Họ tên');
            } else if (this.hoten.length < 5) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập Họ tên 5 ký tự trở lên');
            }
            // validate CCCD
            //kiểm tra rỗng
            if(this.cccd == ""){
                this.errors.push("Vui lòng nhập CCCD");
            }else if(this.cccd.length !=13 && isNaN(this.cccd)==false){//kiểm tra độ dài
                this.errors.push('Vui lòng nhập đúng CCCD')

            }else if(isNaN(this.cccd)==false){//kiểm tra độ dài
                this.errors.push('Vui lòng nhập đúng CCCD')

            }

            // Validate Email
            // Kiểm tra rỗng
            if (this.email == "") {
                this.errors.push('Vui lòng nhập địa chỉ Email');
            } else if (this.email.length < 5) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập địa chỉ Email 5 ký tự trở lên');
            } else if (!this.validateEmail(this.email)) { // Kiểm tra mẫu nhập EMAIL
                this.errors.push('Vui lòng nhập email đúng định dạng');
            }

            // Validate Số điện thoại
            // Kiểm tra rỗng
            if (this.sodienthoai == "") {
                this.errors.push('Vui lòng nhập số điện thoại');
            } else if (this.sodienthoai.length < 5) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập số điện thoại 5 ký tự trở lên');
            }

            // Validate Lời nhắn
            // Kiểm tra rỗng
            if (this.loinhan == "") {
                this.errors.push('Vui lòng nhập lý do');
            } else if (this.loinhan.length < 5) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập lý do 5 ký tự trở lên');
            }else if(this.loinhan.length > 100) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập lý do 100 ký tự trở xuống');
            }

            // Đã kiểm tra lỗi xong
            this.dakiemtraloixong = true;

            // Ví dụ demo, ngưng gởi dữ liệu SUBMIT đi
            // Always return false
            return false;
        },
        validateEmail: function (email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return true;
            }
            return false;
        },
        hienThiThongBaoLoi: function() {
            // Nếu chưa vượt qua bước kiểm tra lỗi thì không được hiển thị thông báo
            if(this.dakiemtraloixong == false) {
                return false;
            }

            // Nếu có bất kỳ lỗi nào (mảng array lỗi không rỗng) => độ dài array > 0)
            // Có lỗi => được hiển thị thông báo lỗi
            if(this.errors.length > 0) {
                return true;
            } 

            // Nếu không có lỗi thì không được hiển thị thông báo lỗi
            return false;
        },
        hienThiThongBaoChaoMung: function() {
            // Nếu chưa vượt qua bước kiểm tra lỗi thì không được hiển thị thông báo
            if(this.dakiemtraloixong == false) {
                return false;
            }

            // Nếu không có bất kỳ lỗi nào (mảng array lỗi là rỗng) => độ dài array == 0)
            // Không có lỗi => được hiển thị thông báo chào mừng
            if(this.errors.length == 0) {
                return true;
            } 

            // Mặc định không hiển thị
            return false;
        }
    }
});