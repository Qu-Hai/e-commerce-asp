using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class ApplicationUser: IdentityUser
    {
        [Column(TypeName ="nvarchar(255)")]
        public string FirstName { get; set; }
        [Column(TypeName = "nvarchar(255)")]
        public string LastName { get; set; }
        public string Avatar { get; set; }
        public ApplicationUser()
        {
            Avatar = "noImg.png";
        }
    }
}
