  function myFunction() {
	    var input, filter, table, tr, td, i, txtValue, selValue, e;
	    e = document.getElementById("mySelect");
	    selValue = e.options[e.selectedIndex].value;
	    	input = document.getElementById("myInput");
	    	filter = input.value.toUpperCase();
	   		table = document.getElementById("myTable");
	    tr = table.getElementsByTagName("tr");
	   		 for (i = 0; i < tr.length; i++) {
	    	  td = tr[i].getElementsByTagName("td")[selValue];
	      if (td) {
	      		  txtValue = td.textContent || td.innerText;
	        if (txtValue.toUpperCase().indexOf(filter) > -1) {
	         	 tr[i].style.display = "";
	        } else {
	          tr[i].style.display = "none";
	        }
	      }
	    }
	  }