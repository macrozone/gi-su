<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package gisu
 */

$templates = array(
	"white", "black")

?>


<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<div id="content">
<div id="content-wrapper">
	
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'gisu' ),
				'after'  => '</div>',
			) );
		?>

	</div>
	</div>
	<!--<?php edit_post_link( __( 'Edit', 'gisu' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>-->
	
</article><!-- #post-## -->
