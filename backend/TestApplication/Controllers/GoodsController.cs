using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestApplication.Controllers.Responses;
using TestApplication.Controllers.Responses.Factories;
using TestApplication.Database;

namespace TestApplication.Controllers
{
    [Route("api/[controller]"), ApiController]
    public class GoodsController : ControllerBase
    {
        public GoodsController(WarehouseContext context)
        {
            Context = context;
        }

        public WarehouseContext Context { get; }

        public async Task<IEnumerable<GoodResponse>> GetAll()
        {
            return Context.Goods.Select(GoodResponseFactory.Convert);
        }
    }
}