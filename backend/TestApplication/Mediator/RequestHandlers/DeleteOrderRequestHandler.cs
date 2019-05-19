using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TestApplication.Database;
using TestApplication.Mediator.Requests;

namespace TestApplication.Mediator.RequestHandlers
{
    public class DeleteOrderRequestHandler : AsyncRequestHandler<DeleteOrderRequest>
    {
        public DeleteOrderRequestHandler(WarehouseContext context, IMediator mediator)
        {
            Context = context;
            Mediator = mediator;
        }

        public WarehouseContext Context { get; }
        public IMediator Mediator { get; }

        protected override async Task Handle(DeleteOrderRequest request, CancellationToken cancellationToken)
        {
            var order = await Mediator.Send(new GetOrderRequest(request.OrderId), cancellationToken);

            Context.Orders.Remove(order);

            await Context.SaveChangesAsync();
        }
    }
}