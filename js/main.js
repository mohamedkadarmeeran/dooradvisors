 // doors advisor js
// alert('CONNECTED!!!');

// $(function(){
//     alert("My First Jquery Test");
//  });


// index hamberger function
$(document).ready(function(){
    $('.listingHeader__menu').click(function(){
        $('.listingHeader__list').toggle();
    });
});

// buyer hambergerfunction
$(document).ready(function(){
    $('.buyerHeader__menu').click(function(){
        $('.buyerHeader__list').toggle();
    });
});

// seller hambergerfunction
$(document).ready(function(){
    $('.sellerHeader__menu').click(function(){
        $('.sellerHeader__list').toggle();
    });
});




//form validation
Submit = () =>{ 
    var success= document.getElementById("success");
    success.style.display = 'none';
    var emailStandard = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    var txtEmail = document.getElementById("email");
     var txtNumber = document.getElementById("phoneno"); 
      var txtMsg = document.getElementById("message");  
        var e = document.getElementById("select");
      var strUser = e.options[e.selectedIndex];  
    var errEmail= document.getElementById("errEmail"); 
     var errNum = document.getElementById("errphoneno");  
    var errMsg= document.getElementById("errmsg"); 
    
   
  	
    if(txtEmail.value ==="" ){
        errEmail.style.display="block";
    }	
    if(txtEmail.value !== ""){  
        if(emailStandard.test(txtEmail.value)== true){ 
            errEmail.style.display="none"; 
        }
        if(emailStandard.test(txtEmail.value)== false){ 
             errEmail.innerHTML="please enter valid email id";
            errEmail.style.display="block"; 
        }
    } 

    if(strUser.value ==0){
      errDropDown.innerHTML = "Please select the drop down box";
       errDropDown.style.display="block";
  }
  if(strUser.value !=0){ 
       errDropDown.style.display="none";
  }

  if(txtMsg.value===""){
        errMsg.innerHTML="please Enter the message box";
        errMsg.style.display="block";   
    }
    
    if(txtMsg.value !== ""){ 
        errMsg.style.display="none";    
    }


     if(txtNumber.value ===""){
      errNum.innerHTML = "Please enter the number";
      errphoneno.style.display="block";
  }
  if(txtNumber.value !== "") { 
      if(isNaN(txtNumber.value))
      {
          errNum.innerHTML = "Please enter phone no number only";
          errphoneno.style.display="block";
      return false;
      }
     else if((txtNumber.value.length != 10))
      {
          errNum.innerHTML = " mobile number should be in 10 digit";
          errphoneno.style.display="block";
      return false;
      }
      else{ errphoneno.style.display="none";}
  }
 

    
    // if(selectOptions.value ==0){
    //     errdrop.style.display="block";
    // }
    // if(selectOptions.value !=0){ 
    //     // this.setState({select:"none"});
    // }
if((emailStandard.test(txtEmail.value)== true) && txtMsg.value.length >= 2 && txtEmail.value !== "" &&  strUser.value !=0 &&  txtMsg.value !=="" && txtNumber.value !== "" ){
        success.style.display="block";
        txtEmail.value=""; 
        e.selectedIndex = 0;
         txtMsg.value="";
        txtNumber.value="";
       
       
    }
    else {
      success.style.display="none";
    }
}




var Pagination = {
    code: '',
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
            a[i].addEventListener('onclick', myfunction());
        }
    },
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 5);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },

    // --------- Initialization-----------
    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a><img src="./assets/images/pagination-left-arrow.png"></a>', // previous button
            '<span></span>',  // pagination container
            '<a><img src="./assets/images/pagination-right-arrow.png"></a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};

 myfunction=( )=>{
  document.getElementById("sha")
   
 }
/* Initialization */
var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size: 30, // pages size
        page: 1,  // selected page
        step: 3   // pages before and after current
    });
};
document.addEventListener('DOMContentLoaded', init, false);



//form validation
Submit1 = () =>{ 
    var success= document.getElementById("success1");
    success1.style.display = 'none';
     var txtNumber = document.getElementById("findphoneno"); 
       var e = document.getElementById("findselecttime");
      var strUser = e.options[e.selectedIndex];  
       var g = document.getElementById("findselecthr");
      var strUser2 = g.options[g.selectedIndex];
       var h = document.getElementById("findselectmins");
      var strUser3 = h.options[h.selectedIndex];
      
     var errNum = document.getElementById("errfindphoneno");  
    
   
      if(strUser.value ==0){
      errfindselecttime.innerHTML = "please select the time";
       errfindselecttime.style.display="block";
  }
  if(strUser.value !=0){ 
       errfindselecttime.style.display="none";
  }

 if(strUser2.value ==0){
      errfindselecthr.innerHTML = "please select the hour";
       errfindselecthr.style.display="block";
  }
  if(strUser2.value !=0){ 
       errfindselecthr.style.display="none";
  }


if(strUser3.value ==0){
      errfindselectmins.innerHTML = "please select the mins";
       errfindselectmins.style.display="block";
  }
  if(strUser3.value !=0){ 
        errfindselectmins.style.display="none";
  }

    
     if(txtNumber.value ===""){
      errNum.innerHTML = "Please enter the phone number";
      errfindphoneno.style.display="block";
  }
  if(txtNumber.value !== "") { 
      if(isNaN(txtNumber.value))
      {
          errNum.innerHTML = "Please enter phone no number only";
          errfindphoneno.style.display="block";
      return false;
      }
     else if((txtNumber.value.length != 10))
      {
          errNum.innerHTML = " mobile number should be in 10 digit";
          errfindphoneno.style.display="block";
      return false;
      }
      else{ errfindphoneno.style.display="none";}
  }
 

if(strUser.value !=0 && strUser2.value !=0 && strUser3.value !=0 &&  txtNumber.value !== ""){
    success1.style.display="block";
    txtNumber.value="";
      e.selectedIndex = 0;
      g.selectedIndex = 0;
      h.selectedIndex = 0;
}
 else {
      success1.style.display="none";
    }
}





//form validation
Submit2 = () =>{ 
    var success= document.getElementById("success2");
    success2.style.display = 'none';
     var txtzip = document.getElementById("zip"); 
     var txtstreet = document.getElementById("street");  
       var txtcity = document.getElementById("city");  
       var txtstate = document.getElementById("state");

            
     var errNum = document.getElementById("errzip");  
     var errstreet = document.getElementById("errstreet");  
     var errcity= document.getElementById("errcity");
     var errstate = document.getElementById("errstate");
    
      

          if(txtstreet.value==="" ){
      errstreet.innerHTML="please Enter the Street Name";
      errstreet.style.display="block";   
      } else if(txtstreet.value !== ""){ 
      errstreet.style.display="none";    
      }

         if(txtcity.value==="" ){
      errcity.innerHTML="please Enter the City Name";
      errcity.style.display="block";   
      } else if(txtcity.value !== ""){ 
      errcity.style.display="none";    
      }

      if(txtstate.value==="" ){
      errstate.innerHTML="please Enter the State Name";
      errstate.style.display="block";   
      } else if(txtstate.value !== ""){ 
      errstate.style.display="none";    
      }

    
     if(txtzip.value ===""){
      errNum.innerHTML = "Please enter the zip code";
      errzip.style.display="block";
  }
  if(txtzip.value !== "") { 
      if(isNaN(txtzip.value))
      {
          errNum.innerHTML = "Please enter zip code  only";
          errzip.style.display="block";
      return false;
      }
     else if((txtzip.value.length != 6))
      {
          errNum.innerHTML = " zip code should be in 6 digit";
          errzip.style.display="block";
      return false;
      }
      else{ errzip.style.display="none";}
  }

if( txtzip.value !== "" && txtstreet.value !== ""  && txtcity.value !== "" && txtstate !== ""){
    success2.style.display="block";
    txtzip.value="";
    txtstreet.value="";
    txtcity.value="";
    txtstate.value="";
}
 else {
      success2.style.display="none";
    }
}



//sliderview//
