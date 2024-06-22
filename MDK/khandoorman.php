<?php
	header('Content-type: text/html; charset=utf-8');
	setlocale(LC_ALL, 'ru_RU.UTF-8');
	$favicon = 'title-icon.png';
	$title = 'Khan Doorman';
	$menu_info = '';
	require('head.html');
	include('header.html');
	include('khandoorman.html');
	include('footer.html');
?>