<?php 
    /*
        Template Name: Order Page
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
                                    $price              = get_field('price');
                        ?>

                        <tr class="table-item">
                            <td class="table-item__number">
                                <?php echo $counter; ?>
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
                            <td colspan="4"></td>
                            <td class="table-item__total">ИТОГО</td>
                            <td class="table-item__summ">0</td>
                        </tr>
                    </table>
                </fieldset>

                <div class="form__input-group">
                    <input class="button" id="order-submit" type="submit" value="Подтвердить">
                </div>

                <div class="form__text">Доставка от 13 000 рублей бесплатно.<br>Нажимая кнопку «Подтвердить» вы соглашаетесь с <a href="<?php echo esc_url(home_url('/')); ?>policy">политикой конфиденциальности</a></div>
            </form>

            <div id="form-output"></div>
            
        </section>

    </div>
</main>

<!--<script src="<?php bloginfo('stylesheet_directory'); ?>/app.js"></script>-->
<script src="<?php bloginfo('stylesheet_directory'); ?>/orders.js"></script>

<?php 
    get_footer();
?>