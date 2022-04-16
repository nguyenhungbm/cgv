<template>
  <HeaderLayout />  
 
  <div class="main-container col1-layout">
    <div class="main">
        <div class="col-main">
            <div class="std">
                <p></p>
                <div class="widget widget-static-block">
                    <div class="sect-person">
                        <ul>
                            <li><a class="theater" href="https://www.cgv.vn/default/cinox/site/">cgv theater</a></li>
                            <li><a class="now-sh" href="https://www.cgv.vn/default/movies/now-showing.html/">now showing</a></li>
                            <li><a class="special" href="https://www.cgv.vn/default/theaters/special/gold-class">cgv special</a></li>
                            <li><a class="event" href="https://www.cgv.vn/default/du-an-xay-dung-rap-cgv/">cgv under construction</a></li>
                            <li><a class="ticket required-login" href="https://www.cgv.vn/default/contacts/">my ticket info</a></li>
                            <li><a class="dc" href="https://www.cgv.vn/default/newsoffer/">discount info</a></li>
                            <li><a class="login-header" href="https://www.cgv.vn/default/customer/account/create/">create account quick</a></li>
                        </ul>
                    </div>
                </div>
                <p></p>
            </div>
            <div class="slideshow-container">
                <ul id="home_big_banner" class="slideshow" style="overflow: hidden;">
                    <li class="cycle-slide cycle-sentinel" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                        <a href="https://www.cgv.vn/default/gia-toc-gucci.html" style="visibility: hidden;">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/g/u/gucci_banner.jpg" style="visibility: hidden;">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 97; opacity: 1; display: block; visibility: hidden;">
                        <a href="https://www.cgv.vn/default/gia-toc-gucci.html">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/g/u/gucci_banner.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide cycle-slide-active" style="position: absolute; top: 0px; left: 0px; z-index: 99; visibility: visible; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/family-swap.html">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/f/s/fs_980x448.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 97; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/an-mang-tren-song-nile.html">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/o/dotn-980x448_1_.png">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 96; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/chuyen-ma-gan-nha.html">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/m/cmgn_980x448.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 95; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/marry-me.html">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/m/a/marry_me_980x448_2.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 94; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/tra-sua-duong-nau/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_140.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 93; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/cgv-gold-run-2022/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/w/e/web_980x448_22.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 92; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.youtube.com/watch?v=u3JPJsrz9VU">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_12.png">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 91; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/lac-xi-momo/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv--news-_-offer-980x448_1.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 90; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/zalopay-promo-2022/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-kv-980x448_2.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 89; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/scan-pay-voucher/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/s/rsz_1shopee-980x448.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 88; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/premium-combo-hanoi/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/p/r/premium_combo_web-hn_980x448.jpg">
                        </a>
                    </li>
                    <li class="cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 87; visibility: hidden; opacity: 1; display: block;">
                        <a href="https://www.cgv.vn/default/newsoffer/qc-samsung-galaxy-s22/">
                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/s/a/samsung_980x448_1.jpg">
                        </a>
                    </li>
                </ul>
                <div class="slideshow-pager home_big_banner_pager">&nbsp;<span class="pager-box"></span><span class="pager-box cycle-pager-active"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span><span class="pager-box"></span></div>
                <span class="slideshow-prev home_big_banner_prev">&nbsp;</span> 
                <span class="slideshow-next home_big_banner_next">&nbsp;</span>
            </div>
            <div class="home-movie-selection">
                <div class="home-title">
                    <h2>movie selection</h2>
                </div>
                <div class="slideshow-containe-movier feature_slide_show_480_767">
                    <ul class="feature_slide_show" style="position: relative; overflow: hidden;">
                        <li class="poster-film film-lists item cycle-slide active cycle-sentinel" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                            <span class="nmovie-rating nmovie-rating-c18" style="visibility: hidden;">C18</span>
                            <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/b/n/bnn-new-year-poster-2022_1__1.jpg" alt="BẪY NGỌT NGÀO" style="visibility: hidden;">
                            <input type="hidden" value="movie-trailer-3223" style="visibility: hidden;">
                            <div class="feature_film_content" style="visibility: hidden;">
                                <h3 style="visibility: hidden;">BẪY NGỌT NGÀO</h3>
                                <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/bay-ngot-ngao.html" style="visibility: hidden;">Xem chi tiết</a>
                                <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001500');" style="visibility: hidden;"><span style="visibility: hidden;"><span style="visibility: hidden;">Mua vé</span></span></button>
                            </div>
                            <div class="play-button" style="visibility: hidden;">
                                <span style="visibility: hidden;"><span style="visibility: hidden;">Play</span></span>
                                <div style="display: none; visibility: hidden;">
                                    <span class="movie-trailer" style="visibility: hidden;">https://www.youtube.com/embed/8n5Xmnd1iS4?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                </div>
                            </div>
                        </li>
                        <div class="cycle-carousel-wrap" style="margin: 0px; padding: 0px; top: 0px; left: 0px; position: absolute; white-space: nowrap;">
                            <li class="poster-film film-lists item cycle-slide active" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: inline-block; visibility: visible;">
                                <span class="nmovie-rating nmovie-rating-c18">C18</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/b/n/bnn-new-year-poster-2022_1__1.jpg" alt="BẪY NGỌT NGÀO">
                                <input type="hidden" value="movie-trailer-3223">
                                <div class="feature_film_content">
                                    <h3>BẪY NGỌT NGÀO</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/bay-ngot-ngao.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001500');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/8n5Xmnd1iS4?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 99; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c13">C13</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/m/o/moonfall-revised_poster-vietnam_4.jpg" alt="TRĂNG RƠI">
                                <input type="hidden" value="movie-trailer-3924">
                                <div class="feature_film_content">
                                    <h3>TRĂNG RƠI</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/moonfall.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001800');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/zVgF4LY3_Ew?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 97; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c18">C18</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/g/i/gia_t_c_gucci_-_18.02.2022_1__1.jpg" alt="GIA TỘC GUCCI">
                                <input type="hidden" value="movie-trailer-3949">
                                <div class="feature_film_content">
                                    <h3>GIA TỘC GUCCI</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/gia-toc-gucci.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001900');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/CF9Nabk8PUA?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 96; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c18">C18</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/t/e/teaser_poster_cmgn_digital_1__1.jpg" alt="CHUYỆN MA GẦN NHÀ">
                                <input type="hidden" value="movie-trailer-3834">
                                <div class="feature_film_content">
                                    <h3>CHUYỆN MA GẦN NHÀ</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/chuyen-ma-gan-nha.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001400');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/TM3eh9xuGk8?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 95; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c16">C16</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/d/e/death_on_the_nile_poster_1.jpg" alt="ÁN MẠNG TRÊN SÔNG NILE ">
                                <input type="hidden" value="movie-trailer-2952">
                                <div class="feature_film_content">
                                    <h3>ÁN MẠNG TRÊN SÔNG NILE </h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/an-mang-tren-song-nile.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001600');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/_9Xoljxlqg8?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 94; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c18">C18</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_g_i_c_m_c_a_ng_i_t_nh_1.jpg" alt="NGƯỜI TÌNH">
                                <input type="hidden" value="movie-trailer-3964">
                                <div class="feature_film_content">
                                    <h3>NGƯỜI TÌNH</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/nguoi-tinh.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22002000');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/sCXr2iID_Gc?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 93; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c13">C13</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_c_i_em_i_marry_me_11.02.2022_1__1.jpg" alt="CƯỚI EM ĐI">
                                <input type="hidden" value="movie-trailer-3929">
                                <div class="feature_film_content">
                                    <h3>CƯỚI EM ĐI</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/marry-me.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22002200');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/kE-Z48_wkJE?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 92; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c18">C18</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/t/b/tbtsg_main_poster_1__1.jpg" alt="THẦN BỊP: TAY SÁT GÁI">
                                <input type="hidden" value="movie-trailer-3909">
                                <div class="feature_film_content">
                                    <h3>THẦN BỊP: TAY SÁT GÁI</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/tazza-the-hidden-card.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22000700');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/fqxgC80Qxvo?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 91; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c16">C16</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/c/k/cktt_1.jpg" alt="CHÌA KHÓA TRĂM TỶ">
                                <input type="hidden" value="movie-trailer-3558">
                                <div class="feature_film_content">
                                    <h3>CHÌA KHÓA TRĂM TỶ</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/chia-khoa-tram-ty.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001100');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/gVI2rTSgeVA?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 90; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-p">p</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_sing_2_1_1__1.jpg" alt="ĐẤU TRƯỜNG ÂM NHẠC 2">
                                <input type="hidden" value="movie-trailer-3844">
                                <div class="feature_film_content">
                                    <h3>ĐẤU TRƯỜNG ÂM NHẠC 2</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/sing-2.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001000');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/BxUzlrPviZY?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 89; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-p">p</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/e/n/encanto-900x1350_1.jpg" alt="ENCANTO: VÙNG ĐẤT THẦN KỲ">
                                <input type="hidden" value="movie-trailer-3914">
                                <div class="feature_film_content">
                                    <h3>ENCANTO: VÙNG ĐẤT THẦN KỲ</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/encanto.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001200');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/6tUyGnJShzg?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 88; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c13">C13</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/1/9/1990_-_1638wx2048h_-_n_n_xanh_1.jpg" alt="1990">
                                <input type="hidden" value="movie-trailer-3448">
                                <div class="feature_film_content">
                                    <h3>1990</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/phim-1990.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('21005000');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/0wpObK1vu8w?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 87; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c16">C16</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/g/i/gintama-poster_50x70_1__1.jpg" alt="GINTAMA: THE VERY FINAL">
                                <input type="hidden" value="movie-trailer-3969">
                                <div class="feature_film_content">
                                    <h3>GINTAMA: THE VERY FINAL</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/gintama-final.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001700');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/IUC3D2qJVvI?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 86; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c13">C13</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/s/n/snwh_poster_bluemontage_4x5fb_1__1.jpg" alt="NGƯỜI NHỆN KHÔNG CÒN NHÀ">
                                <input type="hidden" value="movie-trailer-3804">
                                <div class="feature_film_content">
                                    <h3>NGƯỜI NHỆN KHÔNG CÒN NHÀ</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/spiderman-nowayhome.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('21008500');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/daHCu_jU5mQ?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 85; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c16">C16</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/o/poster_ff9_-_07.01.2022_3_1.jpg" alt="FAST &amp; FURIOUS 9">
                                <input type="hidden" value="movie-trailer-2556">
                                <div class="feature_film_content">
                                    <h3>FAST &amp; FURIOUS 9</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/fast-furious-9.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('21009800');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/PglP2X5tqzE?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 84; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-p">p</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/p/a/paw_patrol_poster_1__1.jpg" alt="PAW PATROL: ĐỘI ĐẶC NHIỆM SIÊU ĐẲNG">
                                <input type="hidden" value="movie-trailer-3939">
                                <div class="feature_film_content">
                                    <h3>PAW PATROL: ĐỘI ĐẶC NHIỆM SIÊU ĐẲNG</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/paw-patrol.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22001300');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/qT4MjZa3_Uo?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 83; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-p">p</span>
                                <img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/t/r/trang_ti_relauch_tet_-gui_1__1.jpg" alt="TRẠNG TÍ PHIÊU LƯU KÝ">
                                <input type="hidden" value="movie-trailer-3273">
                                <div class="feature_film_content">
                                    <h3>TRẠNG TÍ PHIÊU LƯU KÝ</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/trang-ti.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('21001500');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/r-SR6-b4OQo?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                            <li class="poster-film film-lists item cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 82; display: inline-block;">
                                <span class="nmovie-rating nmovie-rating-c18">C18</span>
                                <span class="events events-50k"></span>						<img class="product-img" src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/t/e/teaser-poster-nh_-kh_ng-b_n_1__1.jpg" alt="NHÀ KHÔNG BÁN">
                                <input type="hidden" value="movie-trailer-3944">
                                <div class="feature_film_content">
                                    <h3>NHÀ KHÔNG BÁN</h3>
                                    <a title="Xem chi tiết" class="button" href="https://www.cgv.vn/default/nha-khong-ban.html">Xem chi tiết</a>
                                    <button type="button" title="Mua vé" class="button btn-booking" onclick="Quickbooking('22000900');"><span><span>Mua vé</span></span></button>
                                </div>
                                <div class="play-button">
                                    <span><span>Play</span></span>
                                    <div style="display:none">
                                        <span class="movie-trailer">https://www.youtube.com/embed/uAt37KNG8oM?rel=0&amp;showinfo=0&amp;autoplay=1</span>									
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <span class="feature_slide_show_prev disabled">&lt;&lt;</span> 
                    <span class="feature_slide_show_next">&gt;&gt;</span>		
                </div>
            </div>
            <div id="loading-mask" style="left: -2px; top: 0px; display: none;z-index: 999999;">
                <p class="loader" id="loading_mask_loader">
                    <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/ajax-loader.gif" alt="Loading...">
                    <br>Đang tải thông tin...		
                </p>
            </div>
            <div class="product-collateral toggle-content tabs home-event">
                <div class="home-title">
                    <h2>event</h2>
                </div>
                <ul class="toggle-tabs">
                    <li class="current"><span>Tin Mới &amp; Ưu Đãi</span></li>
                    <li class="last"><span>Thành Viên CGV</span></li>
                </ul>
                <dl id="collateral-tabs" class="collateral-tabs">
                    <dt class="tab current"><span>Tin Mới &amp; Ưu Đãi</span></dt>
                    <dd class="tab-container current">
                        <div class="tab-content">
                            <div class="home-show-event">
                                <ul class="slide_home_event tinmiui" style="position: relative; overflow: hidden;">
                                    <li class="cycle-slide active cycle-sentinel" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                                        <a href="https://www.cgv.vn/default/newsoffer/qua-vvip-2021/" style="visibility: hidden;">
                                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/q/u/qua_vvip_2021_1.jpeg" style="visibility: hidden;">
                                        </a>
                                    </li>
                                    <div class="cycle-carousel-wrap" style="margin: 0px; padding: 0px; top: 0px; left: 0px; position: absolute; white-space: nowrap;">
                                        <li class="cycle-slide active" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: inline-block; visibility: visible;">
                                            <a href="https://www.cgv.vn/default/newsoffer/qua-vvip-2021/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/q/u/qua_vvip_2021_1.jpeg">
                                            </a>
                                        </li>
                                        <li class="cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 99; display: inline-block;">
                                            <a href="https://www.cgv.vn/default/newsoffer/shopeepay-promo/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/s/p/spp_240x201_1.jpg">
                                            </a>
                                        </li>
                                        <li class="cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 97; display: inline-block;">
                                            <a href="https://www.cgv.vn/en/newsoffer/tra-sua-duong-nau/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_31.jpg">
                                            </a>
                                        </li>
                                        <li class="cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 96; display: inline-block;">
                                            <a href="https://www.cgv.vn/en/newsoffer/zalopay-promo-2022/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-kv-240x201_1.jpg">
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                                <span class="slide_home_event_prev tinmiui_prev disabled">&lt;&lt;</span>
                                <span class="slide_home_event_next tinmiui_next disabled">&gt;&gt;</span>
                            </div>
                        </div>
                    </dd>
                    <dt class="tab last"><span>Thành Viên CGV</span></dt>
                    <dd class="tab-container last">
                        <div class="tab-content">
                            <div class="home-show-event">
                                <ul class="slide_home_event thnhvincgv" style="position: relative; overflow: hidden;">
                                    <li class="cycle-slide active cycle-sentinel" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                                        <a href="https://www.cgv.vn/default/newsoffer/u22-vn/" style="visibility: hidden;">
                                        <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_240x201.jpg" style="visibility: hidden;">
                                        </a>
                                    </li>
                                    <div class="cycle-carousel-wrap" style="margin: 0px; padding: 0px; top: 0px; left: 0px; position: absolute; white-space: nowrap;">
                                        <li class="cycle-slide active" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: inline-block; visibility: visible;">
                                            <a href="https://www.cgv.vn/default/newsoffer/u22-vn/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_240x201.jpg">
                                            </a>
                                        </li>
                                        <li class="cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 99; display: inline-block;">
                                            <a href="https://www.cgv.vn/default/newsoffer/happy-wednesday/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happywednesday240x201_1.jpg">
                                            </a>
                                        </li>
                                        <li class="cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 97; display: inline-block;">
                                            <a href="https://www.cgv.vn/default/newsoffer/cgv-culture-day/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/u/culture-240_1.jpg">
                                            </a>
                                        </li>
                                        <li class="cycle-slide" style="position: static; top: 0px; left: 0px; z-index: 96; display: inline-block;">
                                            <a href="https://www.cgv.vn/default/newsoffer/them-3-thang-len-vip-vvip/">
                                            <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-crm-team-chi-1-duoc-2-240x201.jpg">
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                                <span class="slide_home_event_prev thnhvincgv_prev disabled">&lt;&lt;</span>
                                <span class="slide_home_event_next thnhvincgv_next disabled">&gt;&gt;</span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="home-promotion-card">
                <ul class="promos">
                    <li class="col-ad" igck8hy="" style="opacity: 0;">
                        <div class="format-border"><a href="https://www.cgv.vn/default/newsoffer/dream-party-package/"><img alt="" src="https://www.cgv.vn/media/wysiwyg/packages/214x245.jpg"></a></div>
                    </li>
                    <li class="col-hd">
                        <div class="format-border"><a href="https://www.cgv.vn/default/newsoffer/u22-vn/"><img src="https://www.cgv.vn/media/wysiwyg/2022/022022/u22_homepage.jpg"></a></div>
                    </li>
                    <li class="col-ad" igck8hy="" style="opacity: 0;">
                        <div class="format-border"><a href="https://www.cgv.vn/default/newsoffer/hall-rental-cgv/" target="_blank"><img src="https://www.cgv.vn/media/wysiwyg/2021/CGV-DIGITAL-HALL-RENTAL-214x245.png"></a></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "./Layout/HeaderLayout.vue";
import FooterLayout from "./Layout/FooterLayout.vue";
export default {
  name: "HomeScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

