<footer class="site-footer">
    <div class="site-footer__social">
        <a class="icon-vkontakte" href="https://vk.com/barberwild">VKontakte</a>
        <a class="icon-facebook" href="https://www.facebook.com/barberwild">Facebook</a>
        <a class="icon-instagram" href="https://www.instagram.com/barber_wild/">Instagram</a>
        <a class="icon-youtube-play" href="https://www.youtube.com/channel/UCL-Fu9jxOZFgvMaxLeLdXqQ">YouTube</a>
        <a class="icon-mail-alt" href="mailto:barberwild@gmail.com">Email</a></div>
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