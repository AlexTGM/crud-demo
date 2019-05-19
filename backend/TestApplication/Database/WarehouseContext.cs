using Microsoft.EntityFrameworkCore;

namespace TestApplication.Database
{
    public class WarehouseContext : DbContext
    {
        public WarehouseContext(DbContextOptions<WarehouseContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderInsurance>().HasKey(sc => new { sc.InsuranceId, sc.OrderId });
        }

        public DbSet<Good> Goods { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Insurance> Insurances { get; set; }

        public DbSet<Pickpoint> Pickpoints { get; set; }
    }
}