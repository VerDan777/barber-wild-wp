<?php
    // vars
    $main_title         = get_field('main-title');
    $main_description   = get_field('main-description');
    $hero_background    = get_field('hero-background');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Barber WILD</title>

    <!--OG-->
    <meta property="og:title" content="<?php the_title(); ?> - Barber WILD">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo $hero_background; ?>">
    <meta propepty="og:url" content="<?php the_permalink(); ?>">
    <meta property="og:description" content="<?php echo $main_description; ?>">
    <meta propepty="og:locale" content="ru_RU">
    <meta property="og:site_name" content="Barber WILD">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('stylesheet_directory'); ?>/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('stylesheet_directory'); ?>/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('stylesheet_directory'); ?>/favicon-16x16.png?v=2">
    <link rel="manifest" href="<?php bloginfo('stylesheet_directory'); ?>/manifest.json">
    <link rel="mask-icon" href="<?php bloginfo('stylesheet_directory'); ?>/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?><?php echo '?v=' . rand(); ?>">

    <?php wp_head(); ?>
</head>

<body>
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
            <div class="hero__scene scene" style="background-image: url('<?php echo $hero_background; ?>'); background-position: center bottom; background-size: cover;"></div>

            <div class="hero__text-content">
                <h1 class="hero__title">
                    <?php echo $main_title; ?>
                </h1>
                <p class="hero__text">
                    <?php echo $main_description; ?>
                </p>
            </div>
        </div>
    </header>