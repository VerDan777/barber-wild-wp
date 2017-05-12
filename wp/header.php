<?php
    // vars
    $main_title         = get_field('main-title');
    $main_description   = get_field('main-description');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Barber WILD</title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

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
                <a href="order.html">Оформить заказ</a>
            </div>
        </nav>

        <div class="hero">
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