<?php 
    /*
        Template Name: Order Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper">

        <section class="site-section site-section--partner-form">
            <form class="form form--order">
                <fieldset class="form__fieldset">
                    <legend class="form__legend">Заказ </legend>
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
                        <input class="form__input" type="text" name="address" placeholder="Адрес">
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
                            <td class="table-item__count">
                                <div class="spinner">
                                    <button class="spinner__button spinner__minus" type="button">–</button>
                                    <input class="spinner__input" type="text" value="0" onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57;">
                                    <button class="spinner__button spinner__plus" type="button">+</button>
                                </div>
                            </td>
                            <td class="table-item__price">
                                <?php echo $price; ?>
                            </td>
                            <td class="table-item__cost">0</td>
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
                    <button class="button" type="submit">Подтвердить</button>
                </div>

                <div class="form__text">Доставка от 13 000 рублей бесплатно.<br>Нажимая кнопку «Подтвердить» вы соглашаетесь с <a href="#">политикой конфиденциальности</a></div>
            </form>
        </section>

    </div>
</main>

<script src="<?php bloginfo('stylesheet_directory'); ?>/app.js"></script>

<?php 
    get_footer();
?>