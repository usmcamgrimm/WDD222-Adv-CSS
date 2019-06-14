$('.accordion').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(150);
  } else {
      $this.parent().parent().find('unitList').removeClass('show');
      $this.parent().parent().find('unitList').slideUp(150);
      $this.next().toggleClass('show');
      $this.next().slideToggle(150);
  }
});