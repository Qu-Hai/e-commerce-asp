using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(255)")]
        public string Name { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ImageCover { get; set; }
        public bool State { get; set; }     
        
        public int TotalRatingId { get; set; }
        [ForeignKey("TotalRatingId")]
        public virtual TotalRating TotalRating { get; set; }
        
        public int ProductDetailId { get; set; }
        [ForeignKey("ProductDetailId")]
        public virtual ProductDetail ProductDetail { get; set; }
        public int ProductPropertyId { get; set; }
        [ForeignKey("ProductPropertyId")]
        public virtual ProductProperty ProductProperty { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<Feedback> Feedbacks { get; set; }
        public ICollection<Rate> Rates { get; set; }
        public Product()
        {
            State = true;
        }
    }
}
