using InventoryManagement_Backend.Models;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InventoryManagement_Backend.Controllers
{
    public class CustomerController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" 
                SELECT CustomerId, CustomerName FROM 
                Customer
                ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Customer cus)
        {
            try
            {
                string query = @" 
                INSERT INTO dbo.Customer VALUES
                ('" + cus.CustomerName + @"')
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Customer added Sucessfully";
            }
            catch (Exception)
            {
                return "Failed to add customer";
            }
        }
        public string Put(Customer cus)
        {
            try
            {
                string query = @" 
                UPDATE dbo.Customer SET CustomerName =
                 '" + cus.CustomerName + @"'
                 WHERE CustomerId = " + cus.CustomerId + @"
                 ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Customer name updated sucessfully";
            }
            catch (Exception)
            {
                return "Failed to update customer name";
            }
        }
        public string Delete(int id)
        {
            try
            {
                string query = @" 
                DELETE FROM dbo.Customer                     
                WHERE CustomerId = " + id + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Customer deleted sucessfully";
            }
            catch (Exception)
            {
                return "Failed to delete customer";
            }
        }
    }
}

