<?php
   /**
    * The template for displaying the footer
    *
    * Contains the closing of the #content div and all content after.
    *
    * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
    *
    * @package WordPress
    * @subpackage Twenty_Twenty_One
    * @since Twenty Twenty-One 1.0
    */
   
   ?>
<section id="footer" class="footer-section bg-light-pink p-all-4 pt-lg-5 pb-lg-3">
   <div class="container-fluid">
      <div class="row">
         <div class="col-12">
            <div class="footer-logo-box">
               <a href="<?php echo site_url();?>"> <img src="<?php bloginfo('template_url'); ?>/assets/logo/cavaza-footer-logo.png" alt="" class="img-fluid"></a> 
            </div>
         </div>
         <div class="col-md-2">
            <div class="footer-box-01 footer-box">
               <h4>Quick Link</h4>
               <ul>
			    <li><a href="<?php echo site_url();?>">Home</a></li>
                  <li><a href="<?php echo site_url();?>/about-us/">About Us</a></li>                  
                  <li><a href="<?php echo site_url();?>/gallery/">Gallery</a></li>
                  <li><a href="<?php echo site_url();?>/blogs/">Blogs</a></li>
				  <li><a href="<?php echo site_url();?>/contact-us/">Contact Us</a></li>
				  <li><a href="#">Order Online</a></li>
               </ul>
            </div>
         </div>
         <div class="col-md-4 col-6">
            <div class="footer-box-02 footer-box">
               <h4>CAVAZA</h4>
               <ul>
                  <li><a href="tel:+918595228292"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-phone-icon.svg" alt=""
                     class="img-fluid"><span>+91 8595 228292</span></a></li>
                  <li><a href="mailto:query@cavaza.in"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-mail-icon.svg" alt=""
                     class="img-fluid"><span>query@cavaza.in</span></a></li>
               </ul>
               <h4>TiffEnd by CAVAZA</h4>
               <ul>
                  <li><a href="tel:+918750192392"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-phone-icon.svg" alt=""
                     class="img-fluid"><span>+91 8750 192 392</span></a></li>
                  <li>
                     <a href="mailto:support.tiffend@cavaza.in"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-mail-icon.svg" alt="" class="img-fluid">
                     <span>support.tiffend@cavaza.in</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div class="col-md-4 col-6">
            <div class="footer-box-03 footer-box">
               <h4>ChakhhNaa by CAVAZA</h4>
               <ul>
                  <li><a href="tel:+918750330713"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-phone-icon.svg" alt=""
                     class="img-fluid"><span>+91 8750 330 713</span></a></li>
                  <li><a href="mailto:support.chakhhnaa@cavaza.in"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-mail-icon.svg" alt=""
                     class="img-fluid"><span>support.chakhhnaa@cavaza.in</span></a>
                  </li>
               </ul>
               <!--<h4>Condiments by CAVAZA</h4>
               <ul>
                  <li><a href="tel:+918750192392"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-phone-icon.svg" alt=""
                     class="img-fluid"><span>+91 8750 192 392</span></a></li>
                  <li><a href="mailto:support.tiffend@cavaza.in"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-mail-icon.svg" alt=""
                     class="img-fluid"><span>support.tiffend@cavaza.in</span></a></li>
               </ul>-->
            </div>
         </div>
         <div class="col-md-2">
            <div class="footer-box-04 footer-box">
               <h4>Follow Us</h4>
               <ul>
                  <li><a href="https://www.facebook.com/cavazafoods/" target="_blank"><img
                     src="<?php bloginfo('template_url'); ?>/assets/logo/footer-facebook-icon.svg" alt="" class="img-fluid"></a></li>
                  <li><a href="https://www.instagram.com/cavazafoods/" target="_blank"><img
                     src="<?php bloginfo('template_url'); ?>/assets/logo/footer-instagram-icon.svg" alt="" class="img-fluid"></a>
                  </li>
                  <li><a href="https://x.com/cavazafoods" target="_blank"><img src="<?php bloginfo('template_url'); ?>/assets/logo/footer-x-icon.svg" alt=""
                     class="img-fluid"></a></li>
                  <li><a href="https://www.linkedin.com/company/cavazafoods/" target="_blank"><img
                     src="<?php bloginfo('template_url'); ?>/assets/logo/footer-linkdin-icon.svg" alt="" class="img-fluid"></a>
                  </li>
                  <li><a href="https://www.youtube.com/@cavazafoods" target="_blank"><img
                     src="<?php bloginfo('template_url'); ?>/assets/logo/footer-youtube-icon.svg" alt="" class="img-fluid"></a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<footer id="footer-tag" class="footer-tag-section bg-light-pink px-lg-5">
   <div class="container-fluid">
      <div class="row text-center">
         <div class="col-md-12">
            <div class="footer-copyright-box">
               <h6>&copy; CAVAZA FOODS 2025 | All Rights Reserved</h6>
            </div>
         </div>
      </div>
   </div>
</footer>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/aos.js"></script>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/bootstrap.bundle.min.js"></script>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/jquery-3.7.1.min.js"></script>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/owl.carousel.min.js"></script>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/slick.min.js"></script>
<script defer type="module" src="<?php bloginfo('template_url'); ?>/assets/js/main.js"></script>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/swiper-bundle-11-grid.min.js"></script>
<!-- custom js -->
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/script.js"></script>
<script defer src="<?php bloginfo('template_url'); ?>/assets/js/slide-controller.js"></script>
<script defer type="module" src="<?php bloginfo('template_url'); ?>/assets/js/main.js"></script>
<?php wp_footer(); ?>
</body>
</html>