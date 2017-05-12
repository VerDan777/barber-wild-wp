<?php
    /*
        Template Name: Home Page
    */
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Barber WILD</title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<?php wp_head(); ?>

<body>
    <header class="site-header">
        <nav class="main-nav">
            <div class="logo">
                <span>Barber WILD
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/logo.png">
                    <p class="logo__motto">всё, что нужно для твоей головы</p>
                </span>
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

            <div class="for-owners">
                <a href="<?php echo esc_url(home_url('/')); ?>partners">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/for-owners.png">
                </a>
            </div>
        </nav>
        
        <div class="hero">
            <div class="hero__scene scene"></div>
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
                    <div class="shop-item-main__buttons"><a class="button button--right-m" href="#">Подробнее</a></div>
                </div>
                <div class="shop-item-main__deco">
                    
                </div>
            </div>
        </article>

        <?php
                }
            }

        ?>
    </main>
    <section class="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uho9zCQJc9M?autoplay=0&amp;showinfo=0&amp;controls=0"
            frameborder="0" allowfullscreen></iframe>
    </section>


<?php
    get_footer();
?>