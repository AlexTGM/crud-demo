using MediatR;
using TestApplication.Controllers.Requests;
using TestApplication.Database;

namespace TestApplication.Mediator.Requests
{
    public class CreateOrderRequest : IRequest<Order>
    {
        public CreateOrderRequest(CreateOrder payload)
        {
            Payload = payload;
        }

        public CreateOrder Payload { get; }
    }
}