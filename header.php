<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package gisu
 */



?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="shortcut icon" href="<?php echo get_bloginfo('template_url'); ?>/favicon.ico" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php do_action( 'before' ); ?>
	
	<header id="masthead" class="site-header" role="banner">
	
 	<!--<img class="logo" src="<?php echo get_bloginfo('template_url') ?>/includes/resources/images/logo.png"/>-->
<h1 class="logo">GI-SU</h1>

					
				

		<a id="menu-button"></a>
		

		<nav id="main-menu" class="site-navigation">	

<?php echo wp_nav_menu(); ?>

		</nav><!-- .site-navigation -->
		<div class="clear"></div>
		

	</header><!-- #masthead -->

