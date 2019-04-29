using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.OleDb;

namespace WebServer.Models
{
    public class Users
    {
        public string username
        {
            get;
            set;
        }
        public string userpwd
        {
            get;
            set;
        }

        public static string UserLogin(string username,string userpwd){
              //链接数据库
            OleDbConnection conn = new OleDbConnection("Provider = Microsoft.Jet.OLEDB.4.0; Data Source = " + HttpContext.Current.Server.MapPath("~") + "\\bin\\Demo.mdb");
            //打开数据库链接
            conn.Open();
            //执行获取数据命令
            OleDbDataAdapter adapter = new OleDbDataAdapter(string.Format("select  * from tblUser where userName='{0}' and userPwd='{1}' ",username,userpwd), conn);
            //关闭数据库链接
            conn.Close();
            //将查询出的数据填充至数据集对象
            DataSet ds = new DataSet();
            adapter.Fill(ds);
            if(ds.Tables[0].Rows.Count>0)
                return "success";
            else
                 return "fail";

        
        }
    }
}