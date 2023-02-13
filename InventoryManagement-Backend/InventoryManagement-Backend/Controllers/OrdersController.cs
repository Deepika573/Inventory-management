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
    public class OrdersController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" 
                SELECT OrderId, InventoryName, QuantityOfOrder, CustomerName FROM 
                dbo.Orders
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

        public string Post(Orders ord)
        {
            try
            {
                string query = @" 
                INSERT INTO dbo.Orders VALUES
                ( 
                '" + ord.InventoryName + @"' 
                ,'" + ord.QuantityOfOrder + @"'
                ,'" + ord.CustomerName + @"' 
                )
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Order placed Sucessfully";
            }
            catch (Exception)
            {
                return "Order not placed";
            }
        }
            public string Delete(int id)
        {
            try
            {
                string query = @" 
                DELETE FROM dbo.Orders                     
                WHERE OrderId = " + id + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Order Deleted sucessfully";
            }
            catch (Exception)
            {
                return "Failed to delete Order";
            }
        }

        [Route("api/Orders/GetAllInventoryNames")]
        [HttpGet]
        public HttpResponseMessage GetAllInventoryNames()
        {
            string query = @" 
                SELECT InventoryName FROM 
                dbo.Inventory
                WHERE StockQuantity > 0 
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

        [Route("api/Orders/GetAllCustomerNames")]
        [HttpGet]
        public HttpResponseMessage GetAllCustomerNames()
        {
            string query = @" 
                SELECT CustomerName FROM 
                dbo.Customer
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

        [Route("api/Orders/PutupdateInv")]
        [HttpPut]
        public HttpResponseMessage PutupdateInv(Orders ord)
        {
                string query = @" 
                UPDATE dbo.Inventory SET StockQuantity = StockQuantity -
                '" + ord.QuantityOfOrder + @"'
                 WHERE InventoryName = '" + ord.InventoryName + @"'
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
    }
}
