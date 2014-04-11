<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package gisu
 */
?>
			


<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="container">
		<div class="row">
			<div class="site-footer-inner col-sm-12">
			
				<div class="site-info">
					<?php do_action( 'gisu_credits' ); ?>
					<a href="http://wordpress.org/" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', 'gisu' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'gisu' ), 'WordPress' ); ?></a>
					<span class="sep"> | </span>
					<?php printf( __( 'Theme: %1$s by %2$s.', 'gisu' ), 'gisu', '<a href="http://underscores.me/" rel="designer">Underscores.me</a>' ); ?>
				</div><!-- close .site-info -->
			
			</div>	
		</div>
	</div><!-- close .container -->
</footer><!-- close #colophon -->

<?php wp_footer(); ?>

</body>
</html>