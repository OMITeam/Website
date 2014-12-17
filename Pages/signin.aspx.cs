using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Pages_signin : System.Web.UI.Page
{
    public string loginInfo = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        if(Request.Form["login"] != null){
            string email = Request.Form["email"];
            string password = Request.Form["password"];
            check(email, password);
        }
    }

    private void check(string email, string password) {
        loginInfo = "Valdiating Informaition";

    }
}