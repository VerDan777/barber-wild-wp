<footer class="site-footer">
    <div class="site-footer__social"><a class="icon-vkontakte" href="#">VKontakte</a><a class="icon-facebook" href="#">Faceboot</a>
        <a class="icon-instagram"
            href="#">Instagram</a><a class="icon-youtube-play" href="#">YouTube</a><a class="icon-mail-alt" href="#">Email</a></div>
    <nav class="footer-nav">
        <?php
            $args = array(
                'theme_location'    => 'primary',
                'container'         => ''
                // 'menu_class'        => 'main-menu'
            );

            wp_nav_menu($args);
        ?>
    </nav>
</footer>

<?php wp_footer(); ?>

</body>

</html>