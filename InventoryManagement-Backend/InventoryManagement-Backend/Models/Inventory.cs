namespace InventoryManagement_Backend.Models
{
    public class Inventory
    {
        public int InventoryId { get; set; }
        public string InventoryName { get; set; }
        public int StockQuantity { get; set; }
    }
}