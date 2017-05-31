<?php 
    /*
        Template Name: Simple Page
    */

    get_header();
?>

<main class="site-main">
    <div class="wrapper">
        <section class="site-section  site-section--text  site-section--simple">

            <?php
                if(have_posts()) {
                    the_post();
                    the_content();
                }
            ?>

        </section>
    </div>
</main>

<?php 
    get_footer();
?>