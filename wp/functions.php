<?php
    function bw_theme_setup() {
        // Menu support
        register_nav_menus(array(
            "primary"   => __('Primary Menu')
        ));
    }

    add_action('after_setup_theme', 'bw_theme_setup');

    add_filter('wp_nav_menu_items', 'add_social_and_order_to_menu', 10, 2);

    function add_social_and_order_to_menu($items, $args) {
        if ($args -> theme_location == 'primary') {
            // $items .= '<div>Hello world</div>';
            $orderLink = esc_url(home_url('/')) . 'order';
            $items .= '
                <div class="main-menu__order">
                    <a class="button" href="' . $orderLink . '">Оформить заказ</a>
                </div>
                <div class="main-menu__social social">
                    <a class="icon-vkontakte" href="#">VKontakte</a>
                    <a class="icon-facebook" href="#">Faceboot</a>
                    <a class="icon-instagram" href="#">Instagram</a>
                    <a class="icon-youtube-play" href="#">YouTube</a>
                    <a class="icon-mail-alt" href="#">Email</a>
                </div>
            ';
        }

        return $items;
    }
?> 
