using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TestApplication.Database;
using TestApplication.Mediator.Requests;

namespace TestApplication.Mediator.RequestHandlers
{
    public class UpdateOrderRequestHandler : IRequestHandler<UpdateOrderRequest, Order>
    {
        public UpdateOrderRequestHandler(WarehouseContext context, IMediator mediator)
        {
            Context = context;
            Mediator = mediator;
        }

        public WarehouseContext Context { get; }
        public IMediator Mediator { get; }

        public async Task<Order> Handle(UpdateOrderRequest request, CancellationToken cancellationToken)
        {
            var order = await Mediator.Send(new GetOrderRequest(request.OrderId), cancellationToken);

            order.PickpointId = request.Payload.PickpointId;
            order.DeliveryDate = request.Payload.DeliveryDate;
            order.Count = request.Payload.Count;
            order.OrderInsurances = request.Payload.InsurancesIds.Select(x => new OrderInsurance {InsuranceId = x}).ToList();

            Context.Orders.Update(order);

            await Context.SaveChangesAsync();

            return await Mediator.Send(new GetOrderRequest(request.OrderId), cancellationToken);
        }
    }
}