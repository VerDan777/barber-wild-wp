<?php
    // vars
    $item_name      = get_field('item-name');
    $item_image     = get_field('item-image');
    $volume         = get_field('volume');
    $price          = get_field('price');
    $description    = get_field('description');
    $ingredients    = get_field('ingredients');
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
                <a href="#">Barber WILD
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
            <div class="hero__scene scene" style="background-image: url('./img/matt-clay-bg.jpg'); background-position: center center; background-atachment: fixed;"></div>

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
                    </p>
                    <div class="item__buttons"><a class="button" href="order.html">Оформить заказ</a></div>
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