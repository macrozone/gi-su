<?php
/**
 * gisu functions and definitions
 *
 * @package gisu
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 750; /* pixels */

if ( ! function_exists( 'gisu_setup' ) ) :
/**
 * Set up theme defaults and register support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function gisu_setup() {
	global $cap, $content_width;

    // This theme styles the visual editor with editor-style.css to match the theme style.
	add_editor_style();

	if ( function_exists( 'add_theme_support' ) ) {

		/**
		 * Add default posts and comments RSS feed links to head
		*/
		add_theme_support( 'automatic-feed-links' );
		
		/**
		 * Enable support for Post Thumbnails on posts and pages
		 *
		 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		*/
		add_theme_support( 'post-thumbnails' );
		
		/**
		 * Enable support for Post Formats
		*/
		add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );
		
		/**
		 * Setup the WordPress core custom background feature.
		*/
		add_theme_support( 'custom-background', apply_filters( 'gisu_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
			) ) );

	}

	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on gisu, use a find and replace
	 * to change 'winkler' to the name of your theme in all the template files
	*/
	load_theme_textdomain( 'winkler', get_template_directory() . '/languages' );

	/**
	 * This theme uses wp_nav_menu() in one location.
	*/ 
	register_nav_menus( array(
		'primary'  => __( 'Header bottom menu', 'winkler' ),
		) );

}
endif; // gisu_setup
add_action( 'after_setup_theme', 'gisu_setup' );

/**
 * Register widgetized area and update sidebar with default widgets
 */
function gisu_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'winkler' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
		) );
}
add_action( 'widgets_init', 'gisu_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function gisu_scripts() {

    // load bootstrap css
	wp_enqueue_style( 'gisu-bootstrap', get_template_directory_uri() . '/includes/resources/bootstrap/css/bootstrap.css' );
	

    // load gisu styles
	

	$handle = 'gi-su-style';
	$src =  get_template_directory_uri() . '/style.css';
	$deps = '';
	$ver = filemtime( get_template_directory() . '/style.css');
	$media = '';
	wp_enqueue_style( $handle, $src, $deps, $ver, $media );


	wp_enqueue_script( 'gisu-scripts', get_template_directory_uri() . '/build/scripts.js', array('jquery') );
	wp_enqueue_script( 'gisu-skip-link-focus-fix', get_template_directory_uri() . '/includes/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_singular() && wp_attachment_is_image() ) {
		wp_enqueue_script( 'gisu-keyboard-image-navigation', get_template_directory_uri() . '/includes/js/keyboard-image-navigation.js', array( 'jquery' ), '20120202' );
	}

}
add_action( 'wp_enqueue_scripts', 'gisu_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/includes/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/includes/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/includes/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/includes/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/includes/jetpack.php';



add_filter('new_royalslider_skins', 'new_royalslider_add_custom_skin', 10, 2);
function new_royalslider_add_custom_skin($skins) {
	$skins['rsGisu'] = array(
		'label' => 'Gisu skin',
           'path' => get_stylesheet_directory_uri() . '/royalslider/gisu.css'  // get_stylesheet_directory_uri returns path to your theme folder
           );
	return $skins;
}


function omsc_sc_toggle_with_image( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_toggle'))
		return apply_filters('omsc_sc_toggle', $atts, $content);
	
	extract(shortcode_atts(array(
		'title'    	 => '&nbsp;',
		'state'		 => '',
		'src' => null

	), $atts));

	if(!empty($src))
	{
		$image = '<img src="'.$src.'" />';
	}
	if($state == 'opened' || $state == 'expanded'  || $state == 'expand')
		$state='open';

	return
		'<div class="omsc-toggle'.($state=='open'?' omsc-expanded':'').'">'.
			'<div class="omsc-toggle-title">'.$image.'<h3>'.$title.'</h3></div>'.
			'<div class="omsc-toggle-inner"'.($state=='open'?' style="display:block"':'').'>'.
				do_shortcode($content).
			'</div>'.
		'</div>'
	;
	
}
add_shortcode('toggle', 'omsc_sc_toggle_with_image');

