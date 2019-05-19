using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TestApplication.Database;
using TestApplication.Mediator.Requests;

namespace TestApplication.Mediator.RequestHandlers
{
    public class CreateOrderRequestHandler : IRequestHandler<CreateOrderRequest, Order>
    {
        public CreateOrderRequestHandler(WarehouseContext context, IMediator mediator)
        {
            Context = context;
            Mediator = mediator;
        }

        public WarehouseContext Context { get; }
        public IMediator Mediator { get; }

        public async Task<Order> Handle(CreateOrderRequest request, CancellationToken cancellationToken)
        {
            var result =
                Context.Orders.Add(new Order(
                    request.Payload.GoodId,
                    request.Payload.Count,
                    request.Payload.InsurancesIds,
                    request.Payload.DeliveryDate,
                    request.Payload.PickpointId));

            await Context.SaveChangesAsync();

            var order = await Mediator.Send(new GetOrderRequest(result.Entity.Id), cancellationToken);

            return order;
        }
    }
}