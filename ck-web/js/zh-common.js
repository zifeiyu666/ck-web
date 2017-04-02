/*新增/删除子项目*/
	/*模板*/
	/*<div class="panel panel-primary"> 
	  <div class="panel-heading">标题<span class='glyphicon glyphicon-plus createItem'></span></div>
	  <div class="panel-body">
	    <form role="form" class='line hideModule'>
	    	<div><span class='glyphicon glyphicon-remove closeItem'></span></div>
		</form>
	  </div>
	</div>*/
	$('.createItem').click(function(){
		var $List=$(this).parent().next().find('.hideModule');
		$List.clone(true).prependTo($(this).parent().next()).removeClass('hideModule');
	})
	$('.closeItem').click(function(){
		var r=confirm("是否确定删除？")
		  if (r==true)
		    {
		    	$(this).closest('.line').remove();
		    }
		
	})
	
	