function validate(){
    Fname=document.RegForm.Fname;
    Lname=document.RegForm.Lname;
    dob=document.RegForm.dob;
    country=document.RegForm.country;
    gender=document.RegForm.checkbox;
    gender2=document.RegForm.checkbox2;
    email=document.RegForm.email;
    number=document.RegForm.number;
    //Checking
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let birthdate = new Date(dob);
    var phonenumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    original="Male";
    if(Fname.value.length<=0)
    {
        alert("First Name is required");
        Fname.focus();
        return false;
    }else if(Lname.value.length<=0)
    {
        alert("Last Name is required");
        Lname.focus();
        return false;
    }else if(dob.value.length<=0 || !birthdate )
    {
        alert("Please provide valid Date Format ");
        dob.focus();
        return false;
    }else if(country.value=="select")
    {
        alert("Country is Required");
        country.focus();
        return false;
    }else if(!gender.checked&& !gender2.checked){
        alert("Gender is Required");
        return false;
    }else if(email.value.length<=0||!email.value.match(mailformat))
    {
        alert("Please provide valid email address");
        email.focus();
        return false;
    }else if(number.value.length<=0 || !number.value.match(phonenumber))
    {
        alert("Please provide valid Mobile Number ");
        number.focus();
        return false;
    }else{
        if(gender2.checked)
        {
           original="Female" 
        }
        alert("First Name: "+Fname.value+"\n"+"Last Name : "+Lname.value+"\n"+"Date Of Birth : "+dob.value+"\n"+"Country : "+country.value+"\n"+"Gender :"+original+"\n"+"Email : "+email.value+"\n"+"Mobile Number : "+number.value+"\n"+"Thank you for filling out your information!");
    }
}
function FunctionReset(){
    reset=document.RegForm.reset;
    reset.reset()

}