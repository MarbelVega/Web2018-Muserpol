<?php
/**
 * @package Helix Ultimate Framework
 * @author JoomShaper https://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2018 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
*/

defined ('_JEXEC') or die ();

function column_grid_system($device = 'lg')
{
	$col = array(0 =>'Inherit');
	for($i = 1; $i <= 12; $i++)
	{
		if($device == 'xs')
		{
			$col[$i] = 'col-'.$i;
		}
		else
		{
			$col[$i] = 'col-'.$device.'-'.$i;
		}
	}

	return $col;
}

$rowSettings = array(
	'type'=>'general',
	'title'=>'',
	'attr'=>array(

		'name'=>array(
			'type'=>'text',
			'group'=>'general',
			'title'=>\JText::_('Titulo de Seccion'),
			
		),

		'fluidrow'=>array(
			'type'=>'checkbox',
			'group'=>'general',
			'title'=>\JText::_('Pantalla Completa'),
		),

		'custom_class'=>array(
			'type'=>'text',
			'group'=>'general',
			'title'=>\JText::_('Clase de Seccion'),
			'std'=>''
		),

		'padding'=>array(
			'type'=>'text',
			'group'=>'style',
			'title'	=>\JText::_('Padding'),
			'placeholder'=>'0px 0px 0px 0px'
		),

		'margin'=>array(
			'type'=>'text',
			'group'=>'style',
			'title'	=>\JText::_('Margen'),
			'placeholder'=>'0px 0px 0px 0px'
		),

		'color'=>array(
			'type'=>'color',
			'group'=>'style',
			'title'=>\JText::_('Color de Texto')
		),

		'link_color'=>array(
			'type'=>'color',
			'group'=>'style',
			'title'=>\JText::_('Link Color')
		),

		'link_hover_color'=>array(
			'type'=>'color',
			'group'=>'style',
			'title'=>\JText::_('Hover Color de Texto')
		),

		'background_color'=>array(
			'type'=>'color',
			'group'=>'style',
			'title'=>\JText::_('Color de Fondo')
		),
		
		'background_image'=>array(
			'type'=>'media',
			'group'=>'style',
			'title'=>\JText::_('Imagen De Fondo')
		),

		'background_repeat'=>array(
			'type'=>'select',
			'group'=>'style',
			'title'=>\JText::_('Repetir Fondo'),
			'values'=>array(
				'no-repeat'=>\JText::_('No Repetir'),
				'repeat'=>\JText::_('Repetir Fondo'),
				'repeat-x'=>\JText::_('Repetir Horizontalmente'),
				'repeat-y'=>\JText::_('Repetir Verticalmente'),
				'inherit'=>\JText::_('Heredado'),
			)
		),

		'background_size'=>array(
			'type'=>'select',
			'group'=>'style',
			'title'=>\JText::_('Tamaño de Imagen'),
			'values'=>array(
				'cover'=>\JText::_('Cover'),
				'contain'=>\JText::_('Contenido'),
				'inherit'=>\JText::_('Heredado'),
			)
		),

		'background_attachment'=>array(
			'type'=>'select',
			'group'=>'style',
			'title'=>\JText::_('Movimiento de Fondo'),
			'values'=>array(
				'fixed'=>\JText::_('Fixed'),
				'scroll'=>\JText::_('Scroll'),
				'inherit'=>\JText::_('Heredado'),
			)
		),

		'background_position'=>array(
			'type'=>'select',
			'group'=>'style',
			'title'=>\JText::_('Posicion'),
			'values'=>array(
				'0 0'=>\JText::_('Izquierda Superior'),
				'0 50%'=>\JText::_('Izquierda Centro'),
				'0 100%'=>\JText::_('Izquierda Inferior'),
				'50% 0'=>\JText::_('Centro Superior'),
				'50% 50%'=>\JText::_('Centro'),
				'50% 100%'=>\JText::_('Centro Inferior'),
				'100% 0'=>\JText::_('Derecha Superior'),
				'100% 50%'=>\JText::_('Derecha Centro'),
				'100% 100%'=>\JText::_('Derecha Inferior'),
			)
		),

		'hide_on_phone'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar En Movil')
		),

		'hide_on_large_phone'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Largo Movil')
		),

		'hide_on_tablet'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Tablet')
		),

		'hide_on_small_desktop'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Small Escritorio')
		),

		'hide_on_desktop'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Escritorio')
		)
	)
);

$columnSettings = array(
	'type'=>'general',
	'title'=>'',
	'attr'=>array(

		'column_type'=>array(
			'type'=>'checkbox',
			'group'=>'general',
			'title'=>\JText::_('Area Body'),
			'std'=>'',
		),

		'name'=>array(
			'type'=>'select',
			'group'=>'general',
			'title'=>\JText::_('Posicion de Columna'),
			'values'=>array(),
			'std'=>'none',
		),

		'custom_class'=>array(
			'type'=>'text',
			'group'=>'general',
			'title'=>\JText::_('Clase Css'),
			'std'=>''
		),

		'xl_col'=>array(
			'type'=>'select',
			'group'=>'grid',
			'title'=>\JText::_('Posicion Escritorio'),
			'values'=>column_grid_system('xl'),
			'std'=>0,
		),

		'md_col'=>array(
			'type'=>'select',
			'group'=>'grid',
			'title'=>\JText::_('Posicion Tablet'),
			'values'=>column_grid_system('md'),
			'std'=>0,
		),

		'sm_col'=>array(
			'type'=>'select',
			'group'=>'grid',
			'title'=>\JText::_('Posicion Largo Movil'),
			'values'=>column_grid_system('sm'),
			'std'=>0,
		),

		'xs_col'=>array(
			'type'=>'select',
			'group'=>'grid',
			'title'=>\JText::_('Posicion Movil'),
			'values'=>column_grid_system('xs'),
			'std'=>0,
		),

		'hide_on_phone'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Movil')
		),

		'hide_on_large_phone'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Largo Movil')
		),

		'hide_on_tablet'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Tablet')
		),

		'hide_on_small_desktop'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Small Escritorio')
		),

		'hide_on_desktop'=>array(
			'type'=>'checkbox',
			'group'=>'responsive',
			'title'=>\JText::_('Ocultar en Escritorio')
		),
	)
);

class RowColumnSettings{

	private static function getInputElements( $key, $attr )
	{
		return call_user_func(array( 'HelixUltimateField' . ucfirst( $attr['type'] ), 'getInput'), $key, $attr );
	}

	static public function getRowSettings($row_settings = array())
	{

		$output = '<div style="display: none;">';
		$output .= '<div id="helix-ultimate-row-settings">';

		$options = array();

		foreach ($row_settings['attr'] as $key=>$rowAttr) {
			if(isset($rowAttr['group']) && $rowAttr['group'])
			{
				$options[$rowAttr['group']][$key] = $rowAttr;
				unset($rowAttr['group']);
			}
			else
			{
				$options['general'][$key] = $rowAttr;
			}
		}

		$i = 0;

		foreach($options as $key2=>$option_list)
		{
			$active = '';
			if($i == 0)
			{
				$active = ' active';
			}

			$output .= '<div class="helix-ultimate-option-group helix-ultimate-option-group-'. strtolower($key2) . $active .'">';
			$output .= '<div class="helix-ultimate-option-group-title">';
			$output .= '<span class="fa fa-chevron-up"></span>' . \JText::_('Opciones ' . strtoupper($key2));
			$output .= '</div>';
			$output .= '<div class="helix-ultimate-option-group-list">';
			foreach($option_list as $key3=>$option)
			{
				$output .= self::getInputElements( $key3, $option );
			}
			$output .= '</div>';
			$output .= '</div>';
			$i++;
		}

		$output .= '</div>';
		$output .= '</div>';

		return $output;
	}

	static public function getColumnSettings($col_settings = array())
	{

		$col_settings['attr']['name']['values'] = self::getPositions();

		$output = '<div style="display: none;">';
		$output .= '<div id="helix-ultimate-column-settings">';

		$options = array();

		foreach ($col_settings['attr'] as $key=>$colAttr) {
			if(isset($colAttr['group']) && $colAttr['group'])
			{
				$options[$colAttr['group']][$key] = $colAttr;
				unset($colAttr['group']);
			}
			else
			{
				$options['general'][$key] = $colAttr;
			}
		}

		$i = 0;

		foreach($options as $key2=>$option_list)
		{
			$active = '';
			if($i == 0)
			{
				$active = ' active';
			}

			$output .= '<div class="helix-ultimate-option-group helix-ultimate-option-group-'. strtolower($key2) . $active .'">';
			$output .= '<div class="helix-ultimate-option-group-title">';
			$output .= '<span class="fa fa-chevron-up"></span>' . \JText::_('OPCIONES_' . strtoupper($key2));
			$output .= '</div>';
			$output .= '<div class="helix-ultimate-option-group-list">';
			foreach($option_list as $key3=>$option)
			{
				$output .= self::getInputElements( $key3, $option );
			}
			$output .= '</div>';
			$output .= '</div>';
			$i++;
		}

		$output .= '</div>';
		$output .= '</div>';

		return $output;
	}

	static public function getTemplateName()
	{
		$db = \JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select($db->quoteName(array('template')));
		$query->from($db->quoteName('#__template_styles'));
		$query->where($db->quoteName('client_id') . ' = 0');
		$query->where($db->quoteName('home') . ' = 1');
		$db->setQuery($query);

		return $db->loadObject()->template;
	}


	static public function getPositions()
	{

		$db = \JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select($db->quoteName('position'));
		$query->from($db->quoteName('#__modules'));
		$query->where($db->quoteName('client_id') . ' = 0');
		$query->where($db->quoteName('published') . ' = 1');
		$query->group('position');
		$query->order('position ASC');
		$db->setQuery($query);
		$dbpositions = $db->loadObjectList();

		$template  = self::getTemplateName();

		$templateXML = \JPATH_SITE.'/templates/'.$template.'/templateDetails.xml';
		$templateXml = simplexml_load_file( $templateXML );
		$options = array();

		foreach($dbpositions as $positions)
		{
			$options[] = $positions->position;
		}

		foreach($templateXml->positions[0] as $position)
		{
			$options[] =  (string) $position;
		}

		ksort($options);

		$opts = array_unique($options);

		$options = array();

		foreach ($opts as $opt) {
			$options[$opt] = $opt;
		}

		return $options;
	}

	static public function getSettings($config = ''){
		$data = '';
		if ($config) {
			foreach ($config as $key=>$value) {
				$data .= ' data-'.$key.'="'.$value.'"';
			}
		}
		return $data;
	}
}
