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
                'theme_location'    => 'footer',
                'container'         => ''
                // 'menu_class'        => 'main-menu'
            );

            wp_nav_menu($args);
        ?>
    </nav>
</footer>

<?php wp_footer(); ?>

<script src="<?php bloginfo('stylesheet_directory'); ?>/scripts.js"></script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-104753856-1', 'auto');
    ga('send', 'pageview');
</script>

</body>

</html>