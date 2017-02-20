var nav = false;
		function show_hide_nav(id){
			var navbar = document.getElementById(id);
			
			if(nav == false){
				navbar.style.display = "block";
				nav = true;
			}else{
				navbar.style.display = "none";
				nav = false;
			}
		}