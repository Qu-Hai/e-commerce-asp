using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class TotalRating
    {
        public int Id { get; set; }
        public int Total { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Statistical { get; set; }
        public TotalRating()
        {
            Total = 0;
            Statistical = "No reviews";
        }
    }
}
