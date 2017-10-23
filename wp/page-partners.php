<?php 
    /*
        Template Name: Partners Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper">
        <section class="site-section description description--partners">
            <p>Уже несколько сотен барбершопов регулярно используют Barber Wild в своей работе, и новые заявки на сотрудничество все продолжают поступать.</p>

            <p>Если вы желаете стать официальным представителем нашего бренда, продавать и использовать косметику Barber Wild в вашем барбершопе, просто заполните заявку на сотрудничество, и вскоре мы свяжемся с вами, чтобы обсудить все вопросы.</p>

            <form class="form form--partners" action="https://formspree.io/bwildorders@gmail.com" method="POST" id="partners-form">
                <fieldset class="form__fieldset">
                    <legend class="form__legend">Заявка на сотрудничество</legend>
                    <div class="form__input-group">
                        <input class="form__input" type="text" name="fullname" placeholder="Фамилия Имя Отчество" required>
                    </div>

                    <div class="form__input-group">
                        <input class="form__input" type="text" name="phone" placeholder="Номер телефона" required>
                    </div>

                    <div class="form__input-group">
                        <input class="form__input" type="text" name="email" placeholder="Электронная почта" required>
                    </div>
                    
                    <div class="form__input-group">
                        <input class="form__input" type="text" name="address" placeholder="Город" required>
                    </div>

                    <div class="form__input-group">
                        <input class="form__input" type="text" name="company" placeholder="Организация (барбершоп)">
                    </div>

                    <div class="form__input-group form__input-group--policy form__input-group--pt">
                        <label class="form__label">
                            <input class="form__checkbox" type="checkbox" name="policy" required> <span>Я соглашаюсь с <a href="<?php echo esc_url(home_url('/')); ?>policy">политикой конфиденциальности</a></span>
                        </label>
                    </div>

                    <div class="form__input-group">
                        <input class="button" id="partners-submit" type="submit" value="Подтвердить">
                    </div>

                    <!--<div class="form__text">Нажимая кнопку «Подтвердить» вы соглашаетесь с<br> <a href="#">политикой конфиденциальности</a></div>-->
                </fieldset>
            </form>
        </section>

        <section class="site-section site-section--selling-features">
            <header class="site-section__header">
                <h2 class="site-section__title">Почему нас выбирают</h2>
            </header>

            <article class="feature">
                <div class="feature__image"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/partner-benefits.png"></div>
                <h2 class="feature__title">Выгодное партнерство</h2>
                <p class="feature__text">Особые условия для постоянных партнеров, которые вас приятно удивят.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/free-shipping.png"></div>
                <h2 class="feature__title">Бесплатная доставка</h2>
                <p class="feature__text">От 13000 р. Оперативно отправляем заказ транспортной компанией или Почтой России.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/memorable-brand.png"></div>
                <h2 class="feature__title">Запоминаемый бренд</h2>
                <p class="feature__text">Барбершопы по всей России регулярно применяют Barber Wild в своей работе.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/premium-quality.png"></div>
                <h2 class="feature__title">Высокое качество</h2>
                <p class="feature__text">Наша продукция занимает достойное место среди лучших брендов мужской косметики.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/growing-stock.png"></div>
                <h2 class="feature__title">Растущий ассортимент</h2>
                <p class="feature__text">Постоянное расширение линейки продукции, включая создание новых ароматов.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/good-prices.png"></div>
                <h2 class="feature__title">Выгодные цены</h2>
                <p class="feature__text">Прайс на продукцию Barber Wild значительно выгоднее и гибче, чем цены конкурентов.</p>
            </article>
        </section>

        <section class="site-section">
            <header class="site-section__header">
                <h2 class="site-section__title">Наши партнеры</h2>
            </header>

            <div class="partners">
                <a class="partners__item" href="http://oldboybarbershop.com/"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/partners/oldboy.png"></a>
                <a class="partners__item" href="http://www.salonborodach.ru/"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/partners/borodach.png"></a>
                <a class="partners__item" href="http://barberceh.ru/"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/partners/ceh.png"></a>
                <a class="partners__item" href="http://barbershopmagnum.ru/"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/partners/magnum.png"></a>
            </div>
        </section>
    </div>
</main>

<div class="order-popup" id="order-popup">
    <div class="order-popup__content">
        <h2 class="order-popup__title">Отправка заказа</h2>
        <p class="order-popup__text"></p>
        <div class="order-popup__progress"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/drum.png"></div>
        <a class="button order-popup__button" href="#" hidden>OK</a>
    </div>
</div>

<script src="<?php bloginfo('stylesheet_directory'); ?>/partners.js"></script>

<?php 
    get_footer();
?>