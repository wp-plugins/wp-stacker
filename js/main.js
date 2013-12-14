// If exist, decativate loader and show linklist
if (jQuery('.wpstacker .wpstacker_loader').length != 0 && jQuery('.wpstacker #update-nav-menu').length != 0) {
	jQuery('.wpstacker .wpstacker_loader').fadeOut(250);
	
	setTimeout(function() {
		jQuery('.wpstacker #update-nav-menu').fadeIn(250);
		jQuery('.wpstacker .support').fadeIn(250);
	}, 250);
}

// At submit the form, set the associate in inputs
jQuery('#update-nav-menu').submit(function() {
	// Unbind question
	window.onbeforeunload = null;
	
	jQuery('#update-nav-menu ul li').each(function(key, element) { 
		var regex = /(.*)menu-item-depth-(.*)/g;
		var regex2 = /(.*)menu-item-depth-0(.*)/g;
		
		if (regex.test(jQuery(element).attr('class')) && !regex2.test(jQuery(element).attr('class'))) {
			jQuery(this).find('.associate').val('1');
		}
	});
});

// Edit title of a link HTML update
jQuery('.menu-item-settings .input-title').keyup(function() {
	jQuery(this).parents('li').find('.menu-item-handle .left').html(jQuery(this).val());
});

// Remove a link
jQuery('.menu-item-handle .item-remove').click(function() {
	var answer = confirm('Do you really want to delete this link?');
	
	if (answer) {
		var $this = jQuery(this);
		$this.parents('li').slideUp(300);
		
		setTimeout(function() {
			$this.parents('li').remove();
			
			jQuery('.wpstacker .number-links').html((jQuery('.wpstacker .number-links').html() - 1));
		}, 300);
	}
});

// Change tag field
jQuery('.wpstacker input[name="onlyWithTag"]').change(function() {
	jQuery('.wpstacker .onlyWithTag').toggle();
});