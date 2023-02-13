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
    public class InventoryController: ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" 
                SELECT InventoryId, InventoryName, StockQuantity FROM 
                dbo.Inventory
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

        public string Post(Inventory inv)
        {
            try
            {
                string query = @" 
                INSERT INTO dbo.Inventory VALUES
                (
                '" + inv.InventoryName + @"' 
                ,'" + inv.StockQuantity + @"'
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
                return "Inventory added Sucessfully";
            }
            catch (Exception)
            {
                return "Failed to add inventory";
            }
        }
        public string Put(Inventory inv)
        {
            try
            {
                string query = @" 
                UPDATE dbo.Inventory SET InventoryName =
              '" + inv.InventoryName + @"'
                 WHERE InventoryId = " + inv.InventoryId + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Inventory Name Updated sucessfully";
            }
            catch (Exception)
            {
                return "Failed to update Inventory Name";
            }
        }
        public string Delete(int id)
        {
            try
            {
                string query = @" 
                DELETE FROM dbo.Inventory                     
                WHERE InventoryId = " + id + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Inventory Deleted sucessfully";
            }
            catch (Exception)
            {
                return "Failed to delete Inventory";
            }
        }
    }
}

