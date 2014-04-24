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
<div class="content">
	<!--<header class="page-header">
		<h1 class="page-title"><?php the_title(); ?></h1>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'gisu' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	<!--<?php edit_post_link( __( 'Edit', 'gisu' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>-->
	</div>
</article><!-- #post-## -->
