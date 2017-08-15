<?php 
    /*
        Template Name: Wholesale Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper">

        <section class="site-section site-section--partner-form">
            <form id="order-form" class="form form--order" action="https://formspree.io/bwildorders@gmail.com" method="POST">
                <fieldset class="form__fieldset">
                    <legend class="form__legend">Заказ </legend>
                    <div class="form__input-group">
                        <label class="form__icon">1</label>
                        <input class="form__input" type="text" name="fullname" placeholder="Фамилия Имя Отчество" required>
                    </div>
                    <div class="form__input-group">
                        <label class="form__icon">2</label>
                        <input class="form__input" type="text" name="phone" placeholder="Номер телефона" required>
                    </div>
                    <div class="form__input-group">
                        <label class="form__icon">3</label>
                        <input class="form__input" type="text" name="email" placeholder="Электронная почта" required>
                    </div>
                    <div class="form__input-group">
                        <label class="form__icon">4</label>
                        <input class="form__input" type="text" name="address" placeholder="Адрес доставки" required>
                    </div>

                    <div class="form__input-group form__input-group--left">
                        <label class="form__group-label">Способ доставки:</label>
                        <label class="form__label">
                            <input type="radio" name="delivery" value="Russian Post" checked>
                            Почта России 
                        </label>
                        <label class="form__label">
                            <input type="radio" name="delivery" value="EMS">
                            Курьерская служба EMS
                        </label>
                    </div>
                </fieldset>

                <fieldset class="form__fieldset">
                    <table class="order-table">
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Стоимость</th>
                        </tr>

                        <?php 
                            $args = array(
                                'category_name' => 'shop-item'
                            );

                            query_posts($args);

                            $counter = 1;
                            if (have_posts()) {
                                while (have_posts()) {
                                    the_post();

                                    // vars
                                    $item_name          = get_field('item-name');
                                    $item_form_name     = get_field('item-form-name');
                                    $item_image         = get_field('item-image');
                                    // $price              = get_field('price');
                                    $price              = get_field('wholesale');
                                    $itemID             = get_the_ID();
                        ?>

                        <tr class="table-item">
                            <td class="table-item__number">
                                <?php echo $counter; ?>
                            </td>

                            <td class="table-item__id">
                                <?php echo $itemID; ?>
                            </td>

                            <td class="table-item__image">
                                <img src="<?php echo $item_image; ?>">
                            </td>

                            <td class="table-item__name">
                                <?php echo $item_name; ?>
                            </td>

                            <td class="table-item__count" data-th="Количество">
                                <div class="spinner">
                                    <button class="spinner__button spinner__minus" type="button">–</button>
                                    <input class="spinner__input" name="<?php echo $item_form_name; ?>" type="text" value="0" onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57;">
                                    <button class="spinner__button spinner__plus" type="button">+</button>
                                    <button class="spinner__button spinner__clear" type="button">x</button>
                                </div>
                            </td>

                            <td class="table-item__price" data-th="Цена">
                                <?php echo $price; ?>
                            </td>

                            <td class="table-item__cost" data-th="Стоимость">0</td>
                        </tr>

                        <?php
                                    $counter++;
                                }
                            }
                        ?>

                        <tr class="table-item">
                            <td colspan="3"></td>
                            <td class="table-item__reset"><a href="#" id="reset-form">Сбросить</a></td>
                            <td class="table-item__total">ИТОГО</td>
                            <td class="table-item__summ">0</td>
                        </tr>
                    </table>
                </fieldset>

                <div id="errorBox" style="font-size: 16px;"></div>

                <label class="form__input-group form__input-group--policy form__label">
                    <input class="form__checkbox" type="checkbox" name="policy" required> <span>Я соглашаюсь с <a href="<?php echo esc_url(home_url('/')); ?>policy">политикой конфиденциальности</a></span>
                </label>

                <div class="form__input-group">
                    <input class="button" id="order-submit" type="submit" value="Подтвердить">
                </div>

                <div class="form__text">Бесплатная доставка Почтой России от 13&nbsp;000 рублей и курьерской службой от 30&nbsp;000 рублей.</div>
            </form>

            <div id="form-output"></div>
            
        </section>

    </div>
</main>

<div class="order-popup" id="order-popup">
    <div class="order-popup__content">
        <h2 class="order-popup__title">Отправка заказа</h2>
        <div class="order-popup__progress"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/drum.png"></div>
        <a class="button order-popup__button" href="#" hidden>OK</a>
    </div>
</div>

<!--<script src="<?php bloginfo('stylesheet_directory'); ?>/app.js"></script>-->
<script src="<?php bloginfo('stylesheet_directory'); ?>/orders.js"></script>

<?php 
    get_footer();
?>