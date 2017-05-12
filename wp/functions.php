<?php
    function bw_theme_setup() {
        // Menu support
        register_nav_menus(array(
            "primary"   => __('Primary Menu')
        ));
    }

    add_action('after_setup_theme', 'bw_theme_setup');
?> 
