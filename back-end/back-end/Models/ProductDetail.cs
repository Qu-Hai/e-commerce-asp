using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class ProductDetail
    {
        public int Id { get; set; }
        public int Amount { get; set; }
        public string Decription { get; set; }
    }
}
