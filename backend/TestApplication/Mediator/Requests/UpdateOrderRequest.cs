using MediatR;
using System;
using TestApplication.Controllers.Requests;
using TestApplication.Database;

namespace TestApplication.Mediator.Requests
{
    public class UpdateOrderRequest : IRequest<Order>
    {
        public UpdateOrderRequest(Guid orderId, UpdateOrder payload)
        {
            OrderId = orderId;
            Payload = payload;
        }

        public Guid OrderId { get; }
        public UpdateOrder Payload { get; }
    }
}