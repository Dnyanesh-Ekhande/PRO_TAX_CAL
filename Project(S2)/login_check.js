function login()
{
	var pwd=document.getElementById("idpassword");
	if(pwd.value!="admin")
		alert("LOGIN FAILD !!! WRONG USER NAME OR PASSWORD ...");
	else
		alert("LOGIN SUCCESSFUL !!!");
		location.href="c_entry.html"
		
}

function init()
{
	var pwd=document.getElementById("iduname");
	var uname=document.getElementById("idpassword");
	pwd.value=""
	uname.value=""
}

function init_entry()
{
	var cid=document.getElementById("idcid");
	var name=document.getElementById("idcname");
	var add=document.getElementById("idadd");
	var syear=document.getElementById("idsyear");
	
	cid.value=""
	name.value=""
	add.value=""
	syear.value=""


}

function newentry()
{
	location.href=""
}