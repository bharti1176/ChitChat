function adduser()
{
    user_name=document.getElementById("input_name").value;
    localStorage.setItem("user name",user_name);
    window.location="kwitter_room.html";
}