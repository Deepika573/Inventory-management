namespace InventoryManagement_Backend.Models
{
    public class ReOrder
    {
        public int ReOrderId { get; set; }
        public int InventoryId { get; set; }
        public string InventoryName { get; set; }
        public int QuantityOfReorder { get; set; }
        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
    }
}