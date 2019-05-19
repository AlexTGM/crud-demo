using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestApplication.Database;

namespace TestApplication.Controllers
{
    [Route("api/[controller]"), ApiController]
    public class InitController : ControllerBase
    {
        public InitController(WarehouseContext context)
        {
            Context = context;
        }

        public WarehouseContext Context { get; }

        [HttpGet("init")]
        public async Task Init()
        {
            Context.Pickpoints.Add(new Pickpoint { Address = "Petrovka Ulitsa, 2, Moskva, 125009", Description = "Moscow TSUM", Name = "Moscow TSUM" });
            Context.Pickpoints.Add(new Pickpoint { Address = "Red Square, 3, Moskva, 109012", Description = "Moscow GUM", Name = "Moscow GUM" });
            Context.Pickpoints.Add(new Pickpoint { Address = "Ligovsky Ave, 30А, Sankt-Peterburg, 191040", Description = "St. Peterburg Galery", Name = "St. Peterburg Galery" });
            Context.Pickpoints.Add(new Pickpoint { Address = "Golovinskoye Shosse, 5, Moskva, 125212", Description = "Moscow Tts Vodnyy", Name = "Moscow Tts Vodnyy" });
            Context.Pickpoints.Add(new Pickpoint { Address = "Ulitsa Tipanova, 21, Sankt-Peterburg, 196135", Description = "St. Peterburg Piter", Name = "St. Peterburg Piter" });

            Context.Insurances.Add(new Insurance { Type = "Scratches insurance" });
            Context.Insurances.Add(new Insurance { Type = "Loss insurance" });
            Context.Insurances.Add(new Insurance { Type = "Damage insurance" });
            Context.Insurances.Add(new Insurance { Type = "Prolonged insurance" });

            Context.Goods.Add(new Good { Name = "Samsung Galaxy S10+", Description = "Flagship", InStock = 4 });
            Context.Goods.Add(new Good { Name = "Apple iPhone XS Max", Description = "Flagship", InStock = 5 });
            Context.Goods.Add(new Good { Name = "Huawei P30 Pro", Description = "Flagship", InStock = 6 });
            Context.Goods.Add(new Good { Name = "Xiaomi Mi 9", Description = "Flagship", InStock = 6 });
            Context.Goods.Add(new Good { Name = "Sony Xperia 1", Description = "Flagship", InStock = 6 });

            await Context.SaveChangesAsync();
        }
    }
}