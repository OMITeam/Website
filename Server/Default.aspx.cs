using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Pages_Default : System.Web.UI.Page
{
    public string email;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Form["login"] != null) {
            email = Request.Form["email"];
        } else {
            email = "Error";
        }
    }

    public bool checkInformation(string email, string password) {

        return true;
    }
}