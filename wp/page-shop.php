<?php
    /*
        Template Name: Shop Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper wrapper--center">

        <?php
            $args = array(
                'category_name' => 'shop-item'
            );

            query_posts($args);

            if (have_posts()) {
                while(have_posts()) {
                    the_post();

                    // vars
                    $item_name          = get_field('item-name');
                    $item_image         = get_field('item-image');
                    $volume             = get_field('volume');
                    $price              = get_field('price');
                    $ribbon             = get_field('ribbon');
        ?>

        <article class="shop-item">
        <a href="<?php the_permalink(); ?>">
            <div class="shop-item__wrapper">
                <div class="shop-item__image">
                    <img src="<?php echo $item_image; ?>">
                </div>
                <div class="shop-item__description">
                    <h2 class="shop-item__title">
                        <?php echo $item_name; ?>
                    </h2>
                    <p class="shop-item__volume">
                        <?php echo $volume; ?>
                    </p>
                    <p class="shop-item__price">
                        <?php echo $price; ?> -
                    </p>

        <?php
            switch($ribbon) {
                case "limited":
                    echo "<p class=\"shop-item__limited\">Limited<br>Edition</p>";
                    break;
                case "new":
                    echo "<p class=\"shop-item__new\">New</p>";
                    break;
                case "hot":
                    echo "<p class=\"shop-item__hot\">Hot</p>";
                    break;
            }
        ?>

                    <div class="shop-item__buttons">
                        <a class="button" href="<?php the_permalink(); ?>">Подробнее</a>
                    </div>
                </div>
            </div>
        </a>
        </article>
        
        <?php
                }
            }
        ?>
        <div class="barbershop-owner">
          <div class="barbershop-owner__content">
            <h3 class="barbershop-owner__title">Владелец <small>Барбершопа?</small></h3>
            <p class="barbershop-owner__text">Специально для тебя у нас</p>
            <h3 class="barbershop-owner__title">Особые условия</h3><a class="barbershop-owner__button" href="">Узнать больше</a>
          </div>
        </div>
    </div>
</main>

<?php
    get_footer();
?>

