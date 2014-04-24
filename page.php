<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package gisu
 */

function inverted_body_class($classes) {
	// add 'class-name' to the $classes array

	if ($classes[0] != "home" && rand(0, 1))
		$classes[] = 'inverted';
	// return the $classes array
	return $classes;
}

add_filter('body_class','inverted_body_class');

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

		<?php get_template_part( 'content', 'page' ); ?>

		<?php
			// If comments are open or we have at least one comment, load up the comment template
			if ( comments_open() || '0' != get_comments_number() )
				comments_template();
		?>

	<?php endwhile; // end of the loop. ?>


<?php get_footer(); ?>
