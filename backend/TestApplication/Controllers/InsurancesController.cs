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
    public class InsurancesController : ControllerBase
    {
        public InsurancesController(WarehouseContext context)
        {
            Context = context;
        }

        public WarehouseContext Context { get; }

        public async Task<IEnumerable<InsurancesResponse>> GetAll()
        {
            return Context.Insurances.Select(InsurancesResponseFactory.Convert);
        }
    }
}