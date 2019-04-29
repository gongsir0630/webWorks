using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebServer.Models;

namespace WebServer.Controllers
{
    public class SysController : Controller
    {
        // GET: Sys
        public ActionResult Index()
        {
            return View();
        }


        public ContentResult Login(string username, string userpwd)
        {
            string sRet = Users.UserLogin(username, userpwd);
            return Content(sRet);
        }
    }
}