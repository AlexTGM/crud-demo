using System;
using MediatR;

namespace TestApplication.Mediator.Requests
{
    public class DeleteOrderRequest : IRequest
    {
        public DeleteOrderRequest(Guid orderId)
        {
            OrderId = orderId;
        }

        public Guid OrderId { get; set; }
    }
}