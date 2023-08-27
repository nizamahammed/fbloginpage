$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4

            },
            sname:{
                required:true,
                minlength:4
            },
            emailadd:{
                required:true,
                email:true
            },
            
            day:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
            gender:{
                required: true,
            },
            passwordadd: {
                required: true,
                minlength: 5
            },
            passconfirm: {
                required: true,
                minlength: 5,
                equalTo: "#passwordadd"
            }
        
           

        },
        messages:{
            fname:"enter full name"
        }

            
           
        
    })
})
