<?php
    /*
        Template Name: 404 Page
    */

    // vars
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="<?php echo $meta_description; ?>">
    <title>Barber WILD — <?php the_title(); ?></title>

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
<header class="page-404">
<div class="page-404__img"></div>
<h1 class="page-404__title">404</h1>
</header>
<div class="order-popup order-popup--shown order-popup--404page"></div>
<div class="order-popup__content order-popup__content--shown order-popup__content--404page">
<ul class="page-404__list">
  <h3 class="page-404__subtitle">Страница, на которую вы попали, не существует. Вы можете попробовать следующее:</h3>
  <li class="page-404__item"><a href="<?php bloginfo('stylesheet_url');?>">Перейти к главной странице сайта</a></li>
  <li class="page-404__item">Проверить правиольность введенного адреса</li>
  <li class="page-404__item">Вернуться туда, откуда пришли (<em> нажать кнопку «Назад» в своем браузере</em>)</li>
</ul>
</div>
</body>
</html>