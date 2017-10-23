<?php 
    /*
        Template Name: About Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper">
        <section class="site-section description">
            <p>Идея создания мужской косметики Barber WILD пришла в 2015 году. Во время работы два приятеля барбера решили, что существующие средства для волос и бороды недостаточно хороши, и в 2016 году создали собственную линию, которая позволила им проявить свое мастерство в полной мере. Но не только профессиональный барбер — каждый мужчина, который заботится о своем здоровье и облике, может теперь по достоинству оценить качество нашей продукции, а также легко и быстро самостоятельно придать прическе, усам и бороде приятный вид.</p>

            <p>Все, что мы делаем — делаем с душой, начиная от бритья и стрижки, и заканчивая укладкой и уходом за бородой и волосами. Сегодня мы производим сертифицированные средства из натуральных высококлассных компонентов, поставляем их в лучшие барбершопы. Мы отлично разбираемся в своей работе, внимательно следим за качеством продукции и развиваем Barber WILD, создавая новые средства и улучшая существующие.</p>
        </section>

        <section class="site-section site-section--selling-features">
            <header class="site-section__header">
                <h2 class="site-section__title">
                    Наши преимущества
                </h2>
            </header>

            <article class="feature">
                <div class="feature__image">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/barber-friendly.png">
                </div>
                <h2 class="feature__title">От барбера для барбера</h2>
                <p class="feature__text">В создании продукции принимают участие профессиональные барберы.</p>
            </article>

            <article class="feature">
                <div class="feature__image">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/natural-components.png">
                </div>
                <h2 class="feature__title">Натуральные компоненты</h2>
                <p class="feature__text">Косметика оздоравливает кожу и волосы, насыщая их питательными ингредиентами.</p>
            </article>

            <article class="feature">
                <div class="feature__image">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/ergonomic-pack.png">
                </div>
                <h2 class="feature__title">Удобная упаковка</h2>
                <p class="feature__text">Оптимально эргономичная емкость, практичная для использования и хранения.</p>
            </article>

            <article class="feature">
                <div class="feature__image">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/wholesale-discounts.png">
                </div>
                <h2 class="feature__title">Оптовые скидки</h2>      
                <p class="feature__text">Выгодные условия для наших постоянных партнеров и покупателей.</p>
            </article>

            <article class="feature">
                <div class="feature__image">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/growing-popularity.png">
                </div>
                <h2 class="feature__title">Растущая популярность</h2>
                <p class="feature__text">Узнаваемый мужской бренд, получивший широкое распространение в барбершопах</p>
            </article>

            <article class="feature">
                <div class="feature__image">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/img/features/wild-west.png">
                </div>
                <h2 class="feature__title">Дух дикого запада</h2>
                <p class="feature__text">Эффектный ореол свободы и мужественности, идеально подходящий каждому мужчине.</p>
            </article>
        </section>

        <section class="site-section">
            <header class="site-section__header">
                <h2 class="site-section__title">Мы в инстаграме</h2>
            </header>
            <div class="section__content">
                <div class="instafeed" id="instafeed"></div>
            </div>
        </section>
    </div>

    <script src="<?php bloginfo('stylesheet_directory'); ?>/instagram.js"></script>
</main>

<?php 
    get_footer();
?>