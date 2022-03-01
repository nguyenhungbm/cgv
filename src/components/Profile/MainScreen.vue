<template>
  <HeaderLayout />
  <div class="col2-left-layout">
    <div class="main">
        <div class="col-left sidebar col-left-first">
            <div class="block block-account">
                <div class="block-title">
                    <strong><span>Tài khoản CGV</span></strong>
                </div>
                <div class="block-content">
                    <ul>
                        <li class="current"><a href="https://www.cgv.vn/default/customer/account/">Thông tin chung</a></li>
                        <li><a href="https://www.cgv.vn/default/customer/account/edit/">Chi tiết tài khoản</a></li>
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
                <div class="dashboard">
                    <div class="page-title">
                        <h1>Thông tin chung</h1>
                    </div>
                    <div class="format-profile-cgv">
                        <div class="my-profile-cgv">
                            <div class="image-profile-cgv">
                                <form action="https://www.cgv.vn/default/customer/account/changeavatar/" method="post" enctype="multipart/form-data">
                                    <input name="form_key" type="hidden" value="lzKJv8SZYbrQsej0">
                                    <input name="usersatus" type="hidden" value="1">
                                    <div class="insert-image-profile-cgv">
                                        <label id="fileToUpload" for="fileToUpload">
                                        <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png" width="120" height="120" alt="Avatar Profile">
                                        </label>
                                    </div>
                                    <div class="input-box">
                                        <input type="file" name="avatar" title="Avatar" id="avatar" class="input-text">
                                    </div>
                                    <div class="button-change-image-profile">
                                        <button type="button" id="btnchange">
                                        <span><span>Thay đổi</span></span>
                                        </button>
                                    </div>
                                    <div class="button-change-image-profile">
                                        <button type="submit" id="btnsubmit">
                                        <span><span>Gửi đi</span></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="barcode-my-cgv">
                                <div class="show-barcode-my-cgv">
                                    <strong>Thẻ thành viên</strong>
                                </div>
                                <div class="show-barcode-my-cgv">
                                    <!--<span class="cgv-barcode-img">
                                        <img src="https://www.barcodesinc.com/generator_files/image.php?code=9992167380820213&style=100&type=C39&&width=220&height=50&xres=2&font=2" alt="Barcode." />
                                        </span>-->
                                    <img src="https://www.barcodesinc.com/generator/image.php?code=9992167380820213&amp;style=196&amp;type=C128B&amp;width=220&amp;height=80&amp;xres=1&amp;font=3" alt="Barcode.">
                                </div>
                            </div>
                        </div>
                        <div class="welcome-msg">
                            <p class="hello"><strong>Xin chào Nguyễn Hùng,</strong></p>
                            <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
                        </div>
                        <div class="box-account cgv-info">
                            <div class="cgv-status-member">
                                <div class="cgv-tier">
                                    <label>Cấp Độ Thẻ</label>
                                    <span class="member-icon"></span>
                                </div>
                                <div class="cgv-point total-spending">
                                    <div class="format-acc-point">
                                        <label>Tổng Chi Tiêu</label>
                                        <span class="acc-show-point">
                                                        0 đ				</span>
                                    </div>
                                </div>
                                <div class="cgv-point">
                                    <div class="format-acc-point">
                                        <label>Điểm CGV</label>
                                        <span class="acc-show-point">
                                                        0 P				</span>
                                    </div>
                                </div>
                            </div>
                            <div class="cgv-gift-card cgv-info-detail">
                                <label>Thẻ quà tặng</label>
                                <div class="format-acc">			
                                    <span class="acc-show-point">
                                                    0 đ			</span>
                                    <a href="https://www.cgv.vn/default/loyalty/account/gift/"><span class="icon-acc-add">Xem</span></a>
                                </div>
                            </div>
                            <div class="cgv-voucher cgv-info-detail cgv-coupons">
                                <label>Voucher</label>
                                <div class="format-acc">			
                                    <span class="acc-show-point">
                                                    0			</span>
                                    <a href="https://www.cgv.vn/default/loyalty/account/voucher/"><span class="icon-acc-add">Xem</span></a>
                                </div>
                            </div>
                            <div class="cgv-coupon cgv-info-detail cgv-coupons">
                                <label>Coupon</label>
                                <div class="format-acc">			
                                    <span class="acc-show-point">
                                                    0			</span>
                                    <a href="https://www.cgv.vn/default/loyalty/account/coupon/"><span class="icon-acc-add">Xem</span></a>
                                </div>
                            </div>
                            <div class="cgv-info-member-card cgv-point-last cgv-info-detail">
                                <label>Thẻ Thành Viên</label>
                                <div class="format-acc">
                                    <span class="acc-show-point">
                                                    1			</span>
                                    <a href="https://www.cgv.vn/default/loyalty/account/card/"><span class="icon-acc-add">Xem</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="box-account box-info">
                            <div class="box-head">
                                <h2>Thông tin tài khoản</h2>
                            </div>
                            <div class="box">
                                <div class="box-title">
                                    <h3 class="title-my-cgv">Liên hệ</h3>
                                    <a href="https://www.cgv.vn/default/customer/account/edit/">Thay đổi</a>
                                </div>
                                <div class="box-content box-content-my-cgv col2-set">
                                    <span>Tên : Nguyễn Hùng</span>
                                    <span>Email : hung0913003358@gmail.com</span>
                                    <span>Tên đăng nhập : 0879428091</span>
                                    <span>Điện thoại : 0879428091</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
  name: "MainScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>