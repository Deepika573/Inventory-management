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
    public class ReOrderController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" 
                SELECT ReOrderId, InventoryName, QuantityOfReorder,SupplierName FROM 
                dbo.ReOrder
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

        public string Post(ReOrder re)
        {
            try
            {
                string query = @" 
                INSERT INTO dbo.ReOrder VALUES
                (
                '" + re.InventoryName + @"' 
                ,'" + re.QuantityOfReorder + @"'
                ,'" + re.SupplierName + @"' 
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
                return "Reorder placed Sucessfully";
            }
            catch (Exception)
            {
                return "Failed to place Reorder";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @" 
                DELETE FROM dbo.ReOrder                     
                WHERE ReOrderId = " + id + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Reorder Deleted sucessfully";
            }
            catch (Exception)
            {
                return "Failed to delete Reorder";
            }
        }
        [Route("api/Reorder/GetAllInventoryNames")]
        [HttpGet]
        public HttpResponseMessage GetAllInventoryNames()
        {
            string query = @" 
                SELECT InventoryName FROM 
                dbo.Inventory
                  WHERE StockQuantity <= 0
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

        [Route("api/Reorder/GetAllSupplierNames")]
        [HttpGet]
        public HttpResponseMessage GetAllSupplierNames()
        {
            string query = @" 
                SELECT SupplierName FROM 
                dbo.Supplier
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
        [Route("api/Reorder/PutupdateIn")]
        [HttpPut]
        public HttpResponseMessage PutupdateIn(ReOrder re)
        {
            string query = @" 
                UPDATE dbo.Inventory SET StockQuantity = StockQuantity +
                '" + re.QuantityOfReorder + @"'
                 WHERE InventoryName = '" + re.InventoryName + @"'
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

