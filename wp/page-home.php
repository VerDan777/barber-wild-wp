<?php
    /*
        Template Name: Home Page
    */

    // vars
    $meta_description = get_field('meta-description');
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="<?php echo $meta_description; ?>">
    <title>Barber WILD — мужская косметика с характером</title>

    <!-- OG -->
    <meta property="og:title" content="<?php the_title(); ?> - Barber WILD">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php bloginfo('stylesheet_directory'); ?>/img/main-hero-bg.jpg">
    <meta propepty="og:url" content="<?php the_permalink(); ?>">
    <meta property="og:description" content="Barber WILD - всё, что нужно для твоей головы. Мужская косметика с характером">
    <meta propepty="og:locale" content="ru_RU">
    <meta property="og:site_name" content="Barber WILD">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('stylesheet_directory'); ?>/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('stylesheet_directory'); ?>/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('stylesheet_directory'); ?>/favicon-16x16.png?v=2">
    <link rel="manifest" href="<?php bloginfo('stylesheet_directory'); ?>/manifest.json">
    <link rel="mask-icon" href="<?php bloginfo('stylesheet_directory'); ?>/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<?php wp_head(); ?>

<body>
    <!-- Google Analytics -->
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
        ga('create', 'UA-104753856-1', 'auto');
        ga('send', 'pageview');
        </script>
    <!-- /Google Analytics -->

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter45729837 = new Ya.Metrika({
                        id:45729837,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });
    
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
    
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/45729837" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <header class="site-header">
        <nav class="main-nav">
            <div class="logo">
                <a href="<?php echo esc_url(home_url('/')); ?>">Barber WILD
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/logo.png">
                    <p class="logo__motto">всё, что нужно для твоей головы</p>
                </a>
            </div>

            <div class="main-nav__menu-icon">
                <div class="main-nav__menu-icon__middle"></div>
            </div>

            <?php
                $args = array(
                    'theme_location'    => 'primary',
                    'container'         => '',
                    'menu_class'        => 'main-menu'
                );

                wp_nav_menu($args);
            ?>

            <div class="cart">
                <a href="<?php echo esc_url(home_url('/')); ?>order">Оформить заказ</a>
            </div>

            <div class="for-owners">
                <a href="<?php echo esc_url(home_url('/')); ?>partners">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/for-owners.gif">
                </a>
            </div>
        </nav>
        
        <div class="hero">
            <div class="hero__scene  scene  scene--main"></div>
            <div class="hero__text-content hero__text-content--main">
                <h1 class="hero__title">«Barber WILD»</h1>
                <p class="hero__subtitle">— Мужская косметика с характером</p>
            </div>
        </div>
    </header>

    <main class="site-main site-main--no-bg">
        <?php
            $args = array(
                'category_name' => 'featured-shop-item'
            );

            query_posts($args);
            $counter = 0;

            if (have_posts()) {
                while(have_posts()) {
                    the_post();

                    // vars
                    $item_name          = get_field('item-name');
                    $item_short_desc    = get_field('short-description');
                    $item_image         = get_field('item-image');

                    // decoration
                    $deco_image         = get_field('deco-image');
                    $deco_top           = get_field('deco-top');
                    $deco_right         = get_field('deco-right');
                    $deco_left          = get_field('deco-left');
                    $deco_widht         = get_field('deco-width');
                    $deco_height        = get_field('deco-height');
        ?>

        <article class="shop-item-main">
            <div class="shop-item-main__wrapper">
                <div class="shop-item-main__image">
                    <img src="<?php echo $item_image; ?>">
                </div>
                <div class="shop-item-main__description">
                    <h2 class="shop-item-main__title">
                        <?php echo $item_name; ?>
                    </h2>
                    <p class="shop-item-main__text">
                        <?php echo $item_short_desc; ?>
                    </p>
                    <div class="shop-item-main__buttons">
                        <a class="button button--right-m" href="<?php the_permalink(); ?>">Подробнее</a>
                    </div>
                </div>
                <div class="shop-item-main__deco" style="top:
                <?php   echo $deco_top . 'px;'; 
                        if($deco_right!='') {
                            echo 'right:' . $deco_right . 'px';
                        } else if ($deco_left!='') {
                            echo 'left: ', $deco_left . 'px';
                        }
                ?>">
                    <img src="<?php echo $deco_image; ?>">
                </div>
            </div>
        </article>

        <?php
                }
            }
        ?>

        <div class="show-all">
            <a class="button button--big button--all" href="<?php echo esc_url(home_url('/')); ?>shop">Все товары</a>
        </div>
    </main>

    <section class="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uho9zCQJc9M?autoplay=0&amp;showinfo=0&amp;controls=0"
            frameborder="0" allowfullscreen></iframe>
    </section>


<?php
    get_footer();
?>