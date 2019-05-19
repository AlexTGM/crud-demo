using System;
using MediatR;
using TestApplication.Database;

namespace TestApplication.Mediator.Requests
{
    public class GetOrderRequest : IRequest<Order>
    {
        public GetOrderRequest(Guid orderId)
        {
            OrderId = orderId;
        }

        public Guid OrderId { get; }
    }
}