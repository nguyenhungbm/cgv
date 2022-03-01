import { createI18n } from 'vue-i18n'
const messages = {
    en: {
      message: {
        login: 'Login',
        register : 'Register',
        address : 'Address',
        sex     : 'Sex',
        male     : 'Male',
        female     : 'Female',
        password     : 'Password',
        phone       : 'Phone',
        no_result : 'No result found.',
        edit_profile     : 'Edit Profile',
        posts            : 'Posts',
        followers        : 'Followers',
    following        : ' Following',
    folowings        : '',
    folowing         : 'Following',
    create_qr_login  : 'Create QR Login',
    nametag          : 'Nametag',
    app_and_website : 'Apps and Websites',
    notifications  :'Notifications',
    privacy_and_security :'Privacy and Security',
    login_activity :'Login Activity',
    emails_from_instagram :'Emails from Instagram',
    report_problem :'Report a Problem',
    log_out :'Log Out',
    cancel :'Cancel',
    upload_photo :'Upload photo',
    or  :'or', 
    saved :'Saved',
    tag :'Tagged',
    views  :'Views',
    likes :' likes',
    add_comment  :'Add a comment',
    post :'Post',
    about : 'About',
    jobs : 'Jobs',
    help : 'Help',
    privacy : 'Privacy',
    terms : 'Terms',
    top_accounts : 'Top Accounts', 
    locations : 'Locations',
    follow  :'follow',
    see_all :'See All',
    press :'Press',
    message :'Message',
    next :'Next',
    upload_video :'Upload a Video',
    upload :'Upload',
    change_profile_photo :'Change Profile Photo', 
    remove_current_hoto :'Remove Current Photo',
    new_post  : 'New Post',
    back :'Back',
    share :'Share',
    profile : 'Profile',
    settings :  'Settings',
    search  :'Search' ,
    suggestion_for_you :'Suggestions For You',
    see_all :'See All',
    report :'Report',
    go_to_post :'Go to post',
    delete_post :'Delete post',
    share_to :'Share to',
    copy_link :'Copy Link',
    your_messages :'Your Messages',
    send_message :'Send Message',
    to  :'To',
    new_message :'New Message',
    suggested :'Suggested',
    view_more_comment :'View more comments',
    manage_contact :'Manage Contacts',
    email_and_sms :'Email and SMS',
    submit :'Submit',
    name :'Name',
    website :'Website',
    bio :'Bio',
    personal_infomation :'Personal Information',
    phone_number :'Phone Number',
    confirm_phone_number :'Confirm Phone Number',
    gender :'Gender',
    custom :'Custom',  
    not_to_say :'Prefer Not To Say',  
    change_password :'Change Password', 
    old_password : 'Old Password', 
    new_password : 'New Password', 
    confirm_new_password:'Confirm New Password', 
    forgot_password :'Forgot Password?',  
    password_incorrect  :'Your old password was entered incorrectly. Please enter it again.',
    confirm_password_not_match :'Please make sure both passwords match.',
    change_password_success ! :'Change password success !',
    minimum_password : 'Your password needs to be at least 6 characters.',
    new_password_not_match : 'New password can not match old password.',
    instagram :'Instagram', 
    chat :'Chat', 
      }
    },
    vi: {
      message: {
        login: 'Đăng nhập',
        register : 'Đăng ký',
        address : 'Khu vực',
        sex     : 'Giới tính',
        male     : 'Nam',
        famale     : 'Nữ',
        password     : 'Mật khẩu',
        phone:'Số điện thoại',
        name:'Tên',
        no_result                   : 'Không có kết quả.',
        edit_profile                      : 'Chỉnh sửa trang cá nhân',
        posts                              : 'Bài viết',
        followers                          : 'người theo dõi',
        following                         : ' người dùng',
        folowing                          : 'Đang theo dõi ',
        folowings                          : 'Đang theo dõi ',
        nametag                            : 'Thẻ tên',
        app_and_website                  : 'Ứng dụng và trang web',
        notifications                     : 'Thông báo',
        create_qr_login                         : 'Tạo mã QR đăng nhập',
        privacy_and_security               : 'Bảo mật và quyền riêng tư',
        login_activity                     : 'Hoạt động đăng nhập',
        emails_from_instagram            : 'Email từ Instagram',
        report_problem                 : 'Báo cáo sự cố',
        log_out                          : 'Đăng xuất',
        cancel                            : 'Hủy', 
        or                                : 'Hoặc',    
        saved                             : 'Đã lưu',
        tag                             : 'ĐƯỢC GẮN THẺ',
        views                              : 'lượt xem',
        likes                             : ' lượt thích',
        add_comment                     : 'Viết bình luận',
        post                              : 'Đăng',
        about                              : 'Giới thiệu',
        jobs                               : 'Việc làm',
        help                               : 'Trợ giúp',
        privacy                            : 'Quyền riêng tư', 
        terms                             : 'Điều khoản',
        top_accounts                       : 'Tài khoản liên quan nhất', 
        locations                          : 'Vị trí',
        follow                             : 'Theo dõi',
        new_post                           : 'Bài viết mới',
        back                               : 'Quay lại',
        share                              : 'Chia sẻ',
        next                              : 'Kế tiếp',
        upload_video :'Tải video',
        upload :'Tải lên',
        change_profile_photo :'Thay ảnh của bạn',
        upload_photo :'Tải ảnh lên',
        remove_current_hoto :'Gỡ ảnh hiện tại',
        search  : 'Tìm kiếm',
        settings :'Cài đặt',
        profile :'Trang cá nhân',
        suggestion_for_you :'Gợi ý cho bạn',
        see_all :'Xem tất cả',
        press :'Báo chí',
        message :'Nhắn tin',
        report :'Báo cáo',
        go_to_post :'Đi tới bài viết',
        delete_post :'Xóa bài viết',
        share_to :'Chia sẻ lên',
        copy_link :'Sao chép đường dẫn',
        your_messages :'Tin nhắn của bạn',
        send_message :'Gửi tin nhắn',
        to  : 'Đến',
        new_message :'Tin nhắn mới',
        suggested :'Được đề xuất',
        view_more_comment :'Xem thêm bình luận',
        manage_contact  : 'Quản lý danh bạ',
        email_and_sms  : 'Email và SMS',
        Submit :'Gửi',
        website :'Trang web',
        bio :'Tiểu sử',
        personal_infomation :'Thông tin cá nhân',
        phone_number :'Số điện thoại',
        confirm_phone_number :'Xác nhận số điện thoại',
        gender :'Giới tính',
        custom :'Tùy chỉnh',  
        not_to_say :'Không muốn tiết lộ',    
        change_password :'Đổi mật khẩu',     
        old_password :'Mật khẩu cũ',     
        new_password :'Mật khẩu mới',     
        confirm_new_password:'Xác nhận mật khẩu mới' ,    
        forgot_password :'Quên mật khẩu?',
        password_incorrect :'Mật khẩu cũ của bạn đã được nhập không chính xác. Vui lòng nhập lại.',
        confirm_password_not_match :'Hãy đảm bảo rằng cả hai mật khẩu đều khớp.',
        change_password_success ! :'Thay đổi mật khẩu thành công !',
        minimum_password :'Mật khẩu của bạn cần ít nhất 6 ký tự.',
        new_password_not_match : 'Mật khẩu mới không được trùng mật khẩu cũ.',
        instagram :'Instagram', 
        chat :'Nhắn tin', 
      }
    }
}
const i18n = new createI18n({
    locale: 'vn', // set locale
    messages, // set locale messages
  })
export default i18n;