using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebServer.Models;
using Newtonsoft.Json;

namespace WebServer.Controllers
{
    public class StuController : Controller
    {
        // GET: Stu
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getStuList(string stuno)
        {
            List<Student> list = Student.getStuList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public ContentResult InsertStus(string data)
        {
            Student stu = JsonConvert.DeserializeObject<Student>(data);
            string sRet = Student.InsertStu(stu);
            return Content(sRet);
        }

        public ContentResult updatetStus(string data)
        {
            Student stu = JsonConvert.DeserializeObject<Student>(data);
            string sRet = Student.UpdateStu(stu);
            return Content(sRet);
        }


        public ContentResult deleteStu(string stuNo)
        {
            string sRet = Student.deleteStu(stuNo);
            return Content(sRet);
        }

    }
}