using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using TestApplication.Database;
using TestApplication.Mediator.Requests;

namespace TestApplication.Mediator.RequestHandlers
{
    public class GetAllOrdersRequestHandler : IRequestHandler<GetAllOrdersRequest, IEnumerable<Order>>
    {
        public GetAllOrdersRequestHandler(WarehouseContext context)
        {
            Context = context;
        }

        public WarehouseContext Context { get; }

        public async Task<IEnumerable<Order>> Handle(GetAllOrdersRequest request, CancellationToken cancellationToken)
        {
            return await Context.Orders
                .Include(x => x.Good)
                .Include(x => x.OrderInsurances)
                .ThenInclude(x => x.Insurance)
                .Include(x => x.Pickpoint)
                .ToListAsync();
        }
    }
}