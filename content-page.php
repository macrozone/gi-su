<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package gisu
 */

$templates = array(
	"white", "black");

$fullWidth = get_post_meta(get_the_ID(), "full-width");

if(count($fullWidth) > 0)
	$fullWidth = $fullWidth[0];
else
	$fullWidth = false;


?>


<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<div id="content" class="<?php echo $fullWidth? "full-width":""?>">
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
