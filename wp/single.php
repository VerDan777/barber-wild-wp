<?php
    // vars
    $item_name          = get_field('item-name');
    $item_image         = get_field('item-image');
    $volume             = get_field('volume');
    $price              = get_field('price');
    $description        = get_field('description');
    $og_description     = get_field('og-description');
    $ingredients        = get_field('ingredients');
    $hero_background    = get_field('hero-background');
    $meta_description   = get_field('meta-description');
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="<?php echo $meta_description; ?>">
    <title>Barber WILD — <?php the_title(); ?></title>
    
    <!--OG-->
    <meta property="og:title" content="<?php the_title(); ?> - Barber WILD">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo $hero_background; ?>">
    <meta propepty="og:url" content="<?php the_permalink(); ?>">
    <meta property="og:description" content="<?php echo $og_description; ?>">
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

    <?php wp_head(); ?>
</head>

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

    <header class="site-header site-header--inner">
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
        </nav>

        <div class="hero">
            <div class="hero__scene scene" style="background-image: url('<?php echo $hero_background; ?>'); background-position: center center; background-atachment: fixed;"></div>

            <div class="hero__text-content">
                <h1 class="hero__title">
                    <?php echo $item_name; ?>
                </h1>
            </div>
        </div>
    </header>

    <main class="site-main">
        <div class="wrapper">
            <article class="item">
                <header class="item__header">
                    <div class="item__image">
                        <img src="<?php echo $item_image ?>">
                    </div>
                    <h1 class="item__title">
                        <?php echo $item_name; ?>
                    </h1>
                    <p class="item__volume">
                        <?php echo $volume; ?>
                    </p>
                    <p class="item__price">
                        <?php echo $price; ?> -
                        <!-- <br>
                        <?php echo get_the_ID(); ?> -->
                    </p>
                    <div class="item__buttons">
                        <a class="button" href="<?php echo esc_url(home_url('/')); ?>order">Оформить заказ</a>
                    </div>
                </header>

                <div class="item__description">
                    <h2 class="item__subheading">Описание:</h2>
                    <?php echo $description; ?>
                    <div class="item__ingredients">
                        <div class="item__ingredients-deco"></div>
                        <h2 class="item__subheading">Состав:</h2>
                        <p class="item__text">
                            <?php echo $ingredients; ?>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </main>

<?php
    get_footer();
?>