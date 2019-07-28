const { src, dest, parallel } = require('gulp');
const sass  = require('gulp-sass');
const concat = require('gulp-concat');

const scssList = [
    'assets/social-buttons.scss',
    'assets/cs-oars.styles.scss',
    'assets/cs-font-icon.scss',
    'assets/owl.carousel.css',
    // 'assets/owlnew.carousel.min.css',
    // 'assets/owlnew.carousel.css',
    // 'assets/owlnew.theme.default.min.css',
    // 'assets/cs.animate.css',
    // 'assets/slideshow-fade.css',
    // 'assets/animations.css',
    // 'assets/jquery.fancybox.scss',
];
const liquidList = [
    'assets/social-buttons.scss.liquid',
    'assets/cs-oars.styles.scss.liquid',
    'assets/cs-font-icon.scss.liquid',
    'assets/owl.carousel.css',
    // 'assets/owlnew.carousel.min.css',
    // 'assets/owlnew.carousel.css',
    // 'assets/owlnew.theme.default.min.css',
    // 'assets/cs.animate.css',
    // 'assets/slideshow-fade.css',
    // 'assets/animations.css',
    // 'assets/jquery.fancybox.scss.liquid',
];
function scss() {
    return src(scssList)
        .pipe(concat('bundle1.scss'))
        // .pipe(sass())
    //   .pipe(minifyCSS())
      .pipe(dest('build/css'))
      .pipe(dest('assets/'))
  }
function liquid() {
    return src(liquidList)
        .pipe(concat('bundle1.scss.liquid'))
        // .pipe(sass())
    //   .pipe(minifyCSS())
        .pipe(dest('build/css'))
        .pipe(dest('assets/'))
}
  
const jsBundle1 = [
    'assets/imagesloaded.pkgd.min.js',
    'assets/modernizr.min.js',
    'assets/jquery.touchSwipeMobile.min.js',
    'assets/instafeed.min.js',
    'assets/owl.carousel.min.js',
    'assets/owlnew.carousel.min.js',
    'assets/horizontal-slider.js',
];
const jsBundle2 = [
    'assets/jquery.fancybox.js',
    'assets/classie.js',
    'assets/scripts.js',
    'assets/jquery.flexslider.min.js',
    'assets/jquery.zoom.min.js',
    'assets/application-appear.js',
    'assets/cs-oars.script.js',
    'assets/cs-oars.cart.js',
    'assets/cs-oars.optionSelect.js',
    'assets/cs-oars.wishlist.js',
    'assets/jquery.currencies.min.js',
    'assets/linkOptionSelectors.js',

];

function js1() {
    return src(jsBundle1)
        .pipe(concat('bundle1.js'))
        .pipe(dest('build/js'))
        .pipe(dest('assets'));
}

function js2() {
    return src(jsBundle2)
    .pipe(concat('bundle2.js'))
    .pipe(dest('build/js'))
    .pipe(dest('assets'));
}

  exports.css = parallel(scss, liquid);

exports.js = parallel(
    js1, 
    js2
);
exports.default = parallel(js1);
          