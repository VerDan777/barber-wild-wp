<?php
    /*
        Template Name: 404 Page
    */
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="<?php echo $meta_description; ?>">
    <title>Barber WILD —
        <?php the_title(); ?>
    </title>

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
    <section class="page-404">
        <header class="page-404__header">
            <h1 class="page-404__title">404</h1>
        </header>

        <div class="page-404__content">
            <h2 class="page-404__subtitle">
                Страница, на которую вы попали, не существует. 
                <br> Вы можете попробовать следующее:
            </h2>

            <ul class="page-404__list">
                <li class="page-404__item">
                    <a href="<?php bloginfo('stylesheet_url');?>">Перейти к главной странице сайта</a>
                </li>
                <li class="page-404__item">Проверить правильность введенного адреса</li>
                <li class="page-404__item">Вернуться туда, откуда пришли (<em>нажать кнопку «Назад» в своем браузере</em>)</li>
            </ul>
        </div>
    </section>
</body>

<?php 
    get_footer();
?>