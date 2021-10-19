using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace E_Forms.DataBase.Contexts
{
    class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) //DbContext must have an instance of DbContextOptions
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
}
