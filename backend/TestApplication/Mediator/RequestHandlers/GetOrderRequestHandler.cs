using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using TestApplication.Database;
using TestApplication.Mediator.Requests;

namespace TestApplication.Mediator.RequestHandlers
{
    public class GetOrderRequestHandler : IRequestHandler<GetOrderRequest, Order>
    {
        public GetOrderRequestHandler(WarehouseContext context)
        {
            Context = context;
        }

        public WarehouseContext Context { get; }

        public Task<Order> Handle(GetOrderRequest request, CancellationToken cancellationToken)
        {
            return Context.Orders
                .Include(x => x.Good)
                .Include(x => x.OrderInsurances)
                .ThenInclude(x => x.Insurance)
                .Include(x => x.Pickpoint)
                .SingleAsync(x => x.Id == request.OrderId);
        }
    }
}