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
        ?>

        <article class="shop-item">
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
                    <div class="shop-item__buttons">
                        <a class="button" href="<?php the_permalink(); ?>">Подробнее</a>
                    </div>
                </div>
            </div>
        </article>

        <?php
                }
            }
        ?>
    </div>
</main>

<?php
    get_footer();
?>

