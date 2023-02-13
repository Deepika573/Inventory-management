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
    public class SupplierController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" 
                SELECT SupplierId, SupplierName FROM 
                Supplier
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

        public string Post(Supplier sup)
        {
            try
            {
                string query = @" 
                INSERT INTO dbo.Supplier VALUES
                ('" + sup.SupplierName + @"')
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Supplier added Sucessfully";
            }
            catch (Exception)
            {
                return "Failed to add supplier";
            }
        }
        public string Put(Supplier sup)
        {
            try
            {
                string query = @" 
                   UPDATE dbo.Supplier SET SupplierName =
                   '" + sup.SupplierName + @"'
                   WHERE SupplierId = " + sup.SupplierId + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Supplier name updated sucessfully";
            }
            catch (Exception)
            {
                return "Failed to update supplier name";
            }
        }
        public string Delete(int id)
        {
            try
            {
                string query = @" 
                   DELETE FROM dbo.Supplier                     
                   WHERE SupplierId = " + id + @"
                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InventoryManagementDb"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Supplier deleted sucessfully";
            }
            catch (Exception)
            {
                return "Failed to delete supplier";
            }
        }
    }
}

