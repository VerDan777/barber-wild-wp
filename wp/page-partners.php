<?php 
    /*
        Template Name: Partners Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper">
        <section class="site-section description description--partners">
            <form class="form form--partners" action="https://formspree.io/bwildorders@gmail.com" method="POST">
                <fieldset class="form__fieldset">
                    <legend class="form__legend">Заявка на сотрудничество </legend>

                    <div class="form__input-group">
                        <label class="form__icon">1</label>
                        <input class="form__input" type="text" name="fullname" placeholder="Фамилия Имя Отчество">
                    </div>

                    <div class="form__input-group">
                        <label class="form__icon">2</label>
                        <input class="form__input" type="text" name="phone" placeholder="Номер телефона">
                    </div>

                    <div class="form__input-group">
                        <label class="form__icon">3</label>
                        <input class="form__input" type="text" name="email" placeholder="Электронная почта">
                    </div>

                    <div class="form__input-group">
                        <label class="form__icon">4</label>
                        <input class="form__input" type="text" name="address" placeholder="Город">
                    </div>

                    <div class="form__input-group">
                        <label class="form__icon">5</label>
                        <input class="form__input" type="text" name="company" placeholder="Организация (барбершоп)">
                    </div>

                    <div class="form__input-group">
                        <button class="button" type="submit">Подтвердить</button>
                    </div>

                    <div class="form__text">Нажимая кнопку «Подтвердить» вы соглашаетесь с<br> <a href="#">политикой конфиденциальности</a></div>
                </fieldset>
            </form>

            <p>Уже несколько сотен барбершопов регулярно используют Barber Wild в своей работе, и новые заявки на сотрудничество все продолжают поступать.</p>

            <p>Если вы желаете стать официальным представителем нашего бренда, продавать и использовать косметику Barber Wild в вашем барбершопе, просто заполните заявку на сотрудничество, и вскоре мы свяжемся с вами, чтобы обсудить все вопросы.</p>
        </section>

        <section class="site-section site-section--selling-features">
            <header class="site-section__header">
                <h2 class="site-section__title">Почему нас выбирают</h2>
            </header>

            <article class="feature">
                <div class="feature__image"><img src="./img/features/partner-benefits.png"></div>
                <h2 class="feature__title">Выгодное партнерство</h2>
                <p class="feature__text">Особые условия для постоянных партнеров, которые вас приятно удивят.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="./img/features/free-shipping.png"></div>
                <h2 class="feature__title">Бесплатная доставка</h2>
                <p class="feature__text">От 13000 р. Оперативно отправляем заказ транспортной компанией или Почтой России.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="./img/features/memorable-brand.png"></div>
                <h2 class="feature__title">Запоминаемый бренд</h2>
                <p class="feature__text">Барбершопы по всей России регулярно применяют Barber Wild в своей работе.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="./img/features/premium-quality.png"></div>
                <h2 class="feature__title">Высокое качество</h2>
                <p class="feature__text">Наша продукция занимает достойное место среди лучших брендов мужской косметики.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="./img/features/growing-stock.png"></div>
                <h2 class="feature__title">Растущий ассортимент</h2>
                <p class="feature__text">Постоянное расширение линейки продукции, включая создание новых ароматов.</p>
            </article>

            <article class="feature">
                <div class="feature__image"><img src="./img/features/good-prices.png"></div>
                <h2 class="feature__title">Выгодные цены</h2>
                <p class="feature__text">Прайс на продукцию Barber Wild значительно выгоднее и гибче, чем цены конкурентов.</p>
            </article>
        </section>

        <section class="site-section">
            <header class="site-section__header">
                <h2 class="site-section__title">Наши партнеры</h2>
            </header>

            <div class="partners">
                <a class="partners__item" href=""><img src="./img/partners/oldboy.png"></a>
                <a class="partners__item" href="#"><img src="./img/partners/ceh.png"></a>
                <a class="partners__item" href="#"><img src="./img/partners/magnum.png"></a>
            </div>
        </section>
    </div>
</main>

<?php 
    get_footer();
?>