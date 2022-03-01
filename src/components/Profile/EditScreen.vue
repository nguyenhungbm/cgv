<template>
  <HeaderLayout />
   <div class=" col2-left-layout">
    <div class="main">
        <div class="col-left sidebar col-left-first">
            <div class="block block-account">
                <div class="block-title">
                    <strong><span>Tài khoản CGV</span></strong>
                </div>
                <div class="block-content">
                    <ul>
                        <li><a href="https://www.cgv.vn/default/customer/account/">Thông tin chung</a></li>
                        <li class="current"><a href="https://www.cgv.vn/default/customer/account/edit/">Chi tiết tài khoản</a></li>
                        <li><a href="https://www.cgv.vn/default/loyalty/account/card/">Thẻ thành viên</a></li>
                        <li><a href="https://www.cgv.vn/default/loyalty/account/point/">Điểm thưởng</a></li>
                        <li><a href="https://www.cgv.vn/default/loyalty/account/gift/">Thẻ quà tặng</a></li>
                        <li><a href="https://www.cgv.vn/default/loyalty/account/voucher/">Voucher</a></li>
                        <li><a href="https://www.cgv.vn/default/loyalty/account/coupon/">Coupon</a></li>
                        <li class="last"><a href="https://www.cgv.vn/default/sales/order/history/">Lịch sử giao dịch</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-main">
            <div class="my-account">
                <div class="page-title">
                    <h1>Thay đổi thông tin</h1>
                </div>
                <form action="https://www.cgv.vn/default/customer/account/editPost/" method="post" autocomplete="off" id="form-validate" class="scaffold-form cgv-edit-account" enctype="multipart/form-data">
                    <div class="fieldset edit-account-my-cgv">
                        <input name="form_key" type="hidden" value="lzKJv8SZYbrQsej0">
                        <input type="hidden" name="oldphone" id="oldphone" value="0879428091">
                        <input type="hidden" name="oldemail" id="oldemail" value="hung0913003358@gmail.com">
                        <ul class="form-list edit-info-cgv-left">
                            <li class="fields">
                                <div class="customer-name">
                                    <label for="fullname" class="required"><em>*</em>Tên</label>
                                    <div class="input-box">
                                        <input type="text" id="fullname" name="fullname" value="Nguyễn Hùng" title="" placeholder="" maxlength="255" class="input-text required-entry">
                                    </div>
                                    <!--<div class="field name-lastname">
                                        <div class="input-box">
                                            <input type="text" id="lastname" name="lastname" value="Hùng" title="Họ" placeholder="Họ" maxlength="255" class="input-text validate-alpha-spac required-entry"  />
                                        </div>
                                        </div>-->
                                </div>
                                <!--<div class="customer-name">
                                    <div class="field name-firstname">
                                        <label for="firstname">Name</label>
                                        <div class="input-box">
                                                                    </div>
                                    </div>-->
                            </li>
                            <li class="fields phone_user">
                                <label for="telephone" class="required"><em>*</em>Điện thoại</label>
                                <div class="input-box">
                                    <input type="tel" autocapitalize="off" autocorrect="off" name="telephone" id="telephone" value="0879428091" title="Phone Number" class="input-text validate-mobile required-entry">
                                </div>
                            </li>
                            <li>
                                <label for="gender" class="required"><em>*</em>Giới tính</label>
                                <div class="input-box">
                                    <input type="radio" name="gender" value="1" checked="checked">Nam
                                    <input type="radio" name="gender" value="2">Nữ
                                    <input type="radio" name="gender" value="113">None
                                </div>
                            </li>
                            <li>
                                <label for="month">Ngày sinh</label>
                                <div class="input-box customer-dob">
                                                    NOV 20 1993					
                                </div>
                            </li>
                            <li>
                                <label for="email" class="required"><em>*</em>Địa chỉ email</label>
                                <div class="input-box">
                                                    hung0913003358@gmail.com                
                                </div>
                            </li>
                        </ul>
                        <ul class="form-list edit-info-cgv-right">
                            <li class="fields field-country">
                                <div class="field field-country-first">
                                    <label for="region_id" class="required "><em>*</em>Thành phố/Tỉnh</label>
                                    <div class="input-box">
                                        <select id="region_id" name="region_id" title="Tỉnh/Tp" class="validate-select">
                                            <option value="">Vui lòng chọn...</option>
                                            <option value="65">Hồ Chí Minh</option>
                                            <option value="64" selected="">Hà Nội</option>
                                            <option value="60">Đà Nẵng</option>
                                            <option value="48">Cần Thơ</option>
                                            <option value="39">Đồng Nai</option>
                                            <option value="62">Hải Phòng</option>
                                            <option value="13">Quảng Ninh</option>
                                            <option value="43">Bà Rịa-Vũng Tàu</option>
                                            <option value="31">Bình Định</option>
                                            <option value="57">Bình Dương</option>
                                            <option value="33">Đắk Lắk</option>
                                            <option value="51">Trà Vinh</option>
                                            <option value="06">Yên Bái</option>
                                            <option value="49">Vĩnh Long</option>
                                            <option value="47">Kiên Giang</option>
                                            <option value="73">Hậu Giang</option>
                                            <option value="23">Hà Tĩnh</option>
                                            <option value="32">Phú Yên</option>
                                            <option value="58">Bình Phước</option>
                                            <option value="40">Bình Thuận</option>
                                            <option value="59">Cà Mau</option>
                                            <option value="04">Cao Bang</option>
                                            <option value="72">Dak Nong</option>
                                            <option value="71">Dien Bien</option>
                                            <option value="45">Đồng Tháp</option>
                                            <option value="54">Bac Giang</option>
                                            <option value="30">Gia Lai</option>
                                            <option value="44">An Giang</option>
                                            <option value="55">Bac Lieu</option>
                                            <option value="03">Ha Giang</option>
                                            <option value="63">Ha Nam</option>
                                            <option value="53">Bac Cạn</option>
                                            <option value="56">Bac Ninh</option>
                                            <option value="50">Ben Tre</option>
                                            <option value="15">Ha Tay</option>
                                            <option value="61">Hai Duong</option>
                                            <option value="14">Hoa Binh</option>
                                            <option value="66">Hưng Yên</option>
                                            <option value="34">Khánh Hòa</option>
                                            <option value="28">Kon Tum</option>
                                            <option value="01">Lai Chau</option>
                                            <option value="35">Lam Dong</option>
                                            <option value="09">Lạng Sơn</option>
                                            <option value="02">Lao Cai</option>
                                            <option value="41">Long An</option>
                                            <option value="67">Nam Dinh</option>
                                            <option value="22">Nghệ An</option>
                                            <option value="18">Ninh Binh</option>
                                            <option value="36">Ninh Thuan</option>
                                            <option value="68">Phú Thọ</option>
                                            <option value="24">Quảng Binh</option>
                                            <option value="27">Quảng Nam</option>
                                            <option value="29">Quảng Ngãi</option>
                                            <option value="25">Quảng Tri</option>
                                            <option value="52">Sóc Trăng</option>
                                            <option value="05">Sơn La</option>
                                            <option value="37">Tây Ninh</option>
                                            <option value="20">Thai Binh</option>
                                            <option value="69">Thái Nguyên</option>
                                            <option value="21">Thanh Hoa</option>
                                            <option value="26">Thua Thien-Hue</option>
                                            <option value="46">Tiền Giang</option>
                                            <option value="07">Tuyen Quang</option>
                                            <option value="70">Vinh Phuc</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <!-- <li>
                                <div class="field field-city">
                                    <label for="city" class="required "><em>*</em>Quận</label>
                                    <div class="input-box">
                                        <select class="input-box input-box-city validate-select" id="city" name="city" title="Quận/Huyện" >
                                            <option value="">Vui lòng chọn...</option>
                                                                    </select>
                                    </div>
                                </div>
                                </li> -->
                            <!-- Customer Address -->
                            <li class="wide">
                                <label for="street_1" class="required"><em>*</em>Địa chỉ</label>
                                <div class="input-box">
                                    <input type="text" name="street[]" value="No address 700" title="Địa chỉ" id="street_1" class="input-text  required-entry">
                                </div>
                            </li>
                            <li>
                                <label for="current_password" class="required"><em>*</em>Mật khẩu cũ</label>
                                <div class="input-box">
                                    <!-- This is a dummy hidden field to trick firefox from auto filling the password -->
                                    <input type="text" class="input-text no-display" name="dummy" id="dummy">
                                    <input type="password" title="Mật khẩu cũ" class="input-text required-entry" name="current_password" id="current_password">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="check-field-change-pass control">
                        <input type="checkbox" name="change_password" id="change_password" value="1" onclick="setPasswordForm(this.checked)" title="Đổi mật khẩu" class="checkbox"><label class="change-pass-normal" for="change_password">Tôi muốn thay đổi mật khẩu</label>
                    </div>
                    <div class="fieldset cgv-changepass" style="display:none;">
                        <h2 class="legend">Đổi mật khẩu</h2>
                        <ul class="form-list">
                            <li class="fields">
                                <div class="field left">
                                    <label for="password" class="required"><em>*</em>Mật khẩu mới</label>
                                    <div class="input-box">
                                        <input type="password" title="Mật khẩu mới" class="input-text required-entry validate-password" name="password" id="password">
                                    </div>
                                </div>
                                <div class="field right">
                                    <label for="confirmation" class="required"><em>*</em>Nhập lại mật khẩu mới</label>
                                    <div class="input-box">
                                        <input type="password" title="Nhập lại mật khẩu mới" class="input-text required-entry validate-cpassword" name="confirmation" id="confirmation">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="cgv-option-info">
                        <h3>Thông tin tùy chọn</h3>
                        <div class="fieldset">
                            <ul class="my-cgv-option-info">
                                <!--<li>
                                    <label for="onlineID">Nước ngoài</label>
                                    <div class="input-box">
                                                        Trong nước					</div>
                                    </li>-->
                                <!-- 									    <li class="customer-user-attributes">
                                    <ul class="form-list">
                                                               <li><label for="personal_id">CMND hoặc Hộ chiếu</label>
                                    <div class="input-box">
                                           <span>0123456789</span>
                                       <input type="hidden" id="personal_id" name="personal_id" value="0123456789" class="input-text" />
                                                       
                                    </div>
                                    </li>
                                                   </ul>
                                    </li>
                                                                    -->
                                <li>
                                    <div class="card-member-number">
                                        <label style="width:100%;">Số thẻ thành viên</label>
                                        <span class="currentmembercard">9992-1673-8082-0213</span>
                                    </div>
                                </li>
                                <li class="cgv-edit-row">
                                    <label for="preferSite" class="">Rạp yêu thích</label>
                                    <div class="input-box">
                                        <select id="prefersite" name="prefersite" title="Vui lòng chọn..." class="prefersite">
                                            <option value="">Vui lòng chọn...</option>
                                            <option value="017">CGV Aeon Canary</option>
                                            <option value="090">CGV Aeon Ha Dong</option>
                                            <option value="098" selected="">CGV Aeon Hai Phong</option>
                                            <option value="027">CGV Aeon Long Bien</option>
                                            <option value="034">CGV Aeon Mall Binh Tan</option>
                                            <option value="012">CGV Aeon Tan Phu</option>
                                            <option value="019">CGV Big C Dong Nai</option>
                                            <option value="074">CGV Big C My Tho</option>
                                            <option value="072">CGV Big C Nha Trang</option>
                                            <option value="016">CGV Binh Duong Square</option>
                                            <option value="026">CGV Buon Ma Thuot</option>
                                            <option value="006">CGV CT Plaza</option>
                                            <option value="046">CGV Center Point</option>
                                            <option value="003">CGV Coopmart Bien Hoa</option>
                                            <option value="008">CGV Crescent Mall</option>
                                            <option value="079">CGV Gmall Thu Duc</option>
                                            <option value="018">CGV Ho Guom Plaza</option>
                                            <option value="004">CGV Hung Vuong Plaza</option>
                                            <option value="032">CGV Indochina Plaza Ha Noi</option>
                                            <option value="088">CGV Intresco Ly Chinh Thang</option>
                                            <option value="015">CGV Kim Cuc Plaza</option>
                                            <option value="014">CGV Lam Son square</option>
                                            <option value="022">CGV Liberty centre point</option>
                                            <option value="060">CGV Machinco</option>
                                            <option value="009">CGV Mipec Tower</option>
                                            <option value="010">CGV Pandora</option>
                                            <option value="049">CGV Parkson Dong Khoi</option>
                                            <option value="030">CGV Pearl Plaza</option>
                                            <option value="037">CGV Rice City</option>
                                            <option value="038">CGV Saigonres Nguyen Xi</option>
                                            <option value="073">CGV Satra Cu Chi</option>
                                            <option value="013">CGV Sense City</option>
                                            <option value="080">CGV Soil Leroi</option>
                                            <option value="057">CGV Su Van Hanh</option>
                                            <option value="021">CGV Thao Dien Mall</option>
                                            <option value="048">CGV Trang Tien Plaza</option>
                                            <option value="053">CGV Truong Dinh Shopping Center</option>
                                            <option value="001">CGV Vincom Ba Trieu</option>
                                            <option value="095">CGV Vincom Cam Pha</option>
                                            <option value="092">CGV Vincom Cao Lanh</option>
                                            <option value="083">CGV Vincom D Capitale</option>
                                            <option value="025">CGV Vincom Da Nang</option>
                                            <option value="035">CGV Vincom Dong Khoi</option>
                                            <option value="031">CGV Vincom Go Vap</option>
                                            <option value="020">CGV Vincom Ha Long</option>
                                            <option value="047">CGV Vincom Ha Tinh</option>
                                            <option value="077">CGV Vincom Hai Phong</option>
                                            <option value="029">CGV Vincom Hung Vuong</option>
                                            <option value="096">CGV Vincom Kon Tum</option>
                                            <option value="071">CGV Vincom Landmark</option>
                                            <option value="067">CGV Vincom Lang Son</option>
                                            <option value="056">CGV Vincom Long Bien</option>
                                            <option value="070">CGV Vincom Metropolis Lieu Giai</option>
                                            <option value="091">CGV Vincom Mong Cai</option>
                                            <option value="028">CGV Vincom Nguyen Chi Thanh</option>
                                            <option value="075">CGV Vincom North Tu Liem</option>
                                            <option value="099">CGV Vincom Ocean Park</option>
                                            <option value="051">CGV Vincom Phu Yen</option>
                                            <option value="081">CGV Vincom Quang Ngai</option>
                                            <option value="042">CGV Vincom Rach Gia</option>
                                            <option value="054">CGV Vincom Royal City</option>
                                            <option value="082">CGV Vincom Skylake Pham Hung</option>
                                            <option value="097">CGV Vincom Soc Trang</option>
                                            <option value="062">CGV Vincom Son La</option>
                                            <option value="068">CGV Vincom Tay Ninh</option>
                                            <option value="061">CGV Vincom Thai Nguyen</option>
                                            <option value="023">CGV Vincom Thu Duc</option>
                                            <option value="055">CGV Vincom Times City</option>
                                            <option value="039">CGV Vincom Tra Vinh</option>
                                            <option value="045">CGV Vincom Vi Thanh</option>
                                            <option value="043">CGV Vincom Vinh Long</option>
                                            <option value="036">CGV Vincom Xuan Khanh</option>
                                            <option value="044">CGV Vincom Yen Bai</option>
                                            <option value="086">CGV Vinh Hoa Sen</option>
                                            <option value="005">CGV Vinh Trung Plaza</option>
                                            <option value="024">CGV Vivo City</option>
                                            <option value="011">[CLOSED] CGV Marine Plaza</option>
                                            <option value="058">[CLOSED] Empire Binh Duong</option>
                                            <option value="078">[CLOSED] Happy Land Viet Tri</option>
                                            <option value="064">[CLOSED] Sungrand Ancora Luong Yen</option>
                                            <option value="041">[Temp closed] CGV Artemis Ha Noi</option>
                                            <option value="093">[Temp closed] CGV Ecopark Hung Yen</option>
                                            <option value="059">[Temp closed] CGV IMC Tran Quang Khai</option>
                                            <option value="033">[Temp closed] CGV Liberty Tan Binh</option>
                                            <option value="065">[Temp closed] CGV Petro Vung Tau</option>
                                            <option value="002">[Temp closed] CGV Thuy Duong Plaza</option>
                                        </select>
                                        <input type="hidden" name="hprefersite" value="098">
                                        <!-- <select id="prefersite2" name="prefersite2" title="Vui lòng chọn..." class="prefersite">
                                            <option value="">Vui lòng chọn...</option>
                                                                    </select>
                                            <input type="hidden" name="hprefersite2" value="" /> -->
                                    </div>
                                </li>
                                <!-- <li class="cgv-edit-row">
                                    <label for="preferGenre" class="">Thể loại phim yêu thích</label>
                                    <div class="input-box">
                                                                <select id="prefergenre" name="prefergenre" title="Vui lòng chọn..." class="prefergenre">
                                            <option value="">Vui lòng chọn...</option>
                                                                    </select>
                                        <input type="hidden" name="hprefergenre" value="" />
                                        <select id="prefergenre2" name="prefergenre2" title="Vui lòng chọn..." class="prefergenre">
                                            <option value="">Vui lòng chọn...</option>
                                                                    </select>
                                        <input type="hidden" name="hprefergenre2" value="" />
                                    </div>
                                    </li> -->
                            </ul>
                        </div>
                    </div>
                    <!--<div class="cgv-member-card">
                        <div class="fieldset">
                            <div class="input-box">
                                <div class="membercard-title">Member card number</div>
                                <div class="membercard-number"></div>
                                                <div class="membercard-button"><button type="button" title="Quản lý thẻ" onclick="location.href='https://www.cgv.vn/default/loyalty/account/card/'" class="button"><span><span>Quản lý thẻ</span></span></button></div>
                            </div>
                        </div>
                        </div>-->
                    <div class="my-cgv-withdraw-save">
                        <!-- <div class="cgv-withdraw-member">
                            <div class="fieldset">
                                <div class="input-box">
                                    <div class="withdraw-button"><button type="button" title="Xóa tài khoản" id="delete-button" class="button"><span><span>Xóa tài khoản</span></span></button></div>
                                </div>
                            </div>
                            </div> -->
                        <div class="buttons-set cgv-edit-btn">
                            <p class="back-link"><a href="https://www.cgv.vn/default/customer/account/"><small>« </small>Quay lại</a></p>
                            <button type="submit" title="Lưu lại" class="button"><span><span>Lưu lại</span></span></button>
                        </div>
                    </div>
                    <p class="required">* Thông tin bắt buộc</p>
                    <span id="error-validate"></span>
                </form>
                <div id="reloading-mask" style="left: -2px; top: 0px;">
                    <p class="loader" id="loading_mask_loader">
                        <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/ajax-loader.gif" alt="Loading...">
                        <br>Đang tải thông tin...	
                    </p>
                </div>
            </div>
        </div>
        <div class="col-left sidebar"></div>
    </div>
</div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/components/Layout/HeaderLayout.vue";
import FooterLayout from "@/components/Layout/FooterLayout.vue";
export default {
  name: "EditScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

