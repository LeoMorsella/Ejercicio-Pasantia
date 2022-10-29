using Microsoft.EntityFrameworkCore;
using Proyecto_Pasantia.Models;
namespace Proyecto_Pasantia
{
    public class AplicationDbContext: DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<Persona> persona { get; set; }
    }
}
