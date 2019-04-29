using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.OleDb;

namespace WebServer.Models
{
    public class Student
    {
        public string stuNo
        {
            get;
            set;
        }
        public string stuName
        {
            get;
            set;
        }
        public string stuGrade
        {
            get;
            set;
        }



        /// <summary>
        /// 查询所有学生信息
        /// </summary>
        /// <returns>返回学生信息集合</returns>
        public static List<Student> getStuList()
        {
            //链接数据库
            OleDbConnection conn = new OleDbConnection("Provider = Microsoft.Jet.OLEDB.4.0; Data Source = " + HttpContext.Current.Server.MapPath("~") + "\\bin\\Demo.mdb");
            //打开数据库链接
            conn.Open();
            //执行获取数据命令
            OleDbDataAdapter adapter = new OleDbDataAdapter("select  * from tblStu", conn);
            //关闭数据库链接
            conn.Close();
            //将查询出的数据填充至数据集对象
            DataSet ds = new DataSet();
            adapter.Fill(ds);

            //遍历数据
            List<Student> list = new List<Student>();
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Student stu = new Student();
                stu.stuNo = dr["stuNo"].ToString();
                stu.stuName = dr["stuName"].ToString();
                stu.stuGrade = dr["stuGrade"].ToString();
                list.Add(stu);
            }
            return list;
        }


        /// <summary>
        /// 写入学生信息
        /// </summary>
        /// <param name="stu">学生对象</param>
        /// <returns>success：成功  fail:失败</returns>
        public static string InsertStu(Student stu)
        {
            //链接数据库
            OleDbConnection conn = new OleDbConnection("Provider = Microsoft.Jet.OLEDB.4.0; Data Source = " + HttpContext.Current.Server.MapPath("~") + "\\bin\\Demo.mdb");
            //打开数据库链接
            conn.Open();
            //执行写入数据命令
            string sql = string.Format("insert into tblStu(stuNo,stuName,stuGrade)values('{0}','{1}','{2}')", stu.stuNo, stu.stuName, stu.stuGrade);

            OleDbCommand comm = new OleDbCommand(sql, conn);
            int iRet = comm.ExecuteNonQuery();
            //关闭数据库链接
            conn.Close();
            if (iRet > 0)
                return "success";
            else
                return "fail";
        }



        /// <summary>
        /// 写入学生信息
        /// </summary>
        /// <param name="stu">学生对象</param>
        /// <returns>success：成功  fail:失败</returns>
        public static string UpdateStu(Student stu)
        {
            //链接数据库
            OleDbConnection conn = new OleDbConnection("Provider = Microsoft.Jet.OLEDB.4.0; Data Source = " + HttpContext.Current.Server.MapPath("~") + "\\bin\\Demo.mdb");
            //打开数据库链接
            conn.Open();
            //执行写入数据命令
            string sql = string.Format("update tblStu set stuName='{0}',stuGrade='{1}' where  stuNo='{2}'", stu.stuName, stu.stuGrade, stu.stuNo);

            OleDbCommand comm = new OleDbCommand(sql, conn);
            int iRet = comm.ExecuteNonQuery();
            //关闭数据库链接
            conn.Close();
            if (iRet > 0)
                return "success";
            else
                return "fail";
        }


        /// <summary>
        /// 删除学生信息
        /// </summary>
        /// <param name="stu">学号</param>
        /// <returns>success：成功  fail:失败</returns>
        public static string deleteStu(string stuno)
        {
            //链接数据库
            OleDbConnection conn = new OleDbConnection("Provider = Microsoft.Jet.OLEDB.4.0; Data Source = " + HttpContext.Current.Server.MapPath("~") + "\\bin\\Demo.mdb");
            //打开数据库链接
            conn.Open();
            //执行写入数据命令
            string sql = string.Format("delete from tblStu where stuNo='{0}'",stuno);

            OleDbCommand comm = new OleDbCommand(sql, conn);
            int iRet = comm.ExecuteNonQuery();
            //关闭数据库链接
            conn.Close();
            if (iRet > 0)
                return "success";
            else
                return "fail";
        }
    }
}