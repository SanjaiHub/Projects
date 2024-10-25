$(function () {
    var $registerForm = $("#register");
    $registerForm.validate({
        rules: {
            username: {
                required: true,
                lattersonly:true
            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                minlength:10,
                maxlength:12
            },
            gender:{
                required:true
            },
            course:{
                required:true
            },
            password:{
                required:true,
                all:true
            },
            cpassword:{
                required:true,
                equalTo:'#pass'

            }


        },
        messages: {
            username: {
                required: 'username must be required',
                lattersonly:'invalid name'

            },
            email:{
                required:'email must be required',
                email:'email is invalid'
            },
            phone:{
                required:'phone must be required',
                minlength:'min 10 digit',
                maxlength:'max 12 digit'
                
            },
            gender:{
                required:'Gender must be required'

            },
            course:{
                required:'course must be required'
            },
            password:{
                required:'password must be required',
                all:'space is not allowed'
            },
            cpassword:{
                required:'confirm password must be required',
                equalTo:'password mismatch'
            }

        },
        errorPlacement:function(error,element){
            if(element.is(":radio")){
                error.appendTo(element.parents(".gen"));
            }else{
                error.insertAfter(element);
            }
        }

    })
    jQuery.validator.addMethod('lattersonly',function(value,element){
        return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
    });
    jQuery.validator.addMethod('all',function(value,element){
        return /^[^-\s][a-zA-Z0-9_\s-]+$/.test(value);
    })

})