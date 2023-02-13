namespace InventoryManagement_Backend.Models
{
    public class Orders
    {
        public int OrderId { get; set; }
        public int InventoryId { get; set; }
        public string InventoryName { get; set; }
        public int QuantityOfOrder { get; set; }
        public string CustomerName { get; set; }
    }
}