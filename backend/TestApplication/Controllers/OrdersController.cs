using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TestApplication.Controllers.Requests;
using TestApplication.Controllers.Responses;
using TestApplication.Controllers.Responses.Factories;
using TestApplication.Mediator.Requests;

namespace TestApplication.Controllers
{
    [Route("api/[controller]"), ApiController]
    public class OrdersController : ControllerBase
    {
        public OrdersController(IMediator mediator)
        {
            Mediator = mediator;
        }

        public IMediator Mediator { get; }

        public async Task<IEnumerable<OrderResponse>> GetAll()
        {
            Thread.Sleep(1000);

            var result = await Mediator.Send(new GetAllOrdersRequest());

            return result.Select(OrderResponseFactory.Convert);
        }

        [HttpPost]
        public async Task<OrderResponse> CreateOrder(CreateOrder request)
        {
            var result = await Mediator.Send(new CreateOrderRequest(request));

            return OrderResponseFactory.Convert(result);
        }

        [HttpGet("{orderId}")]
        public async Task<OrderResponse> GetOrder(Guid orderId)
        {
            var result = await Mediator.Send(new GetOrderRequest(orderId));

            return OrderResponseFactory.Convert(result);
        }

        [HttpPut("{orderId}")]
        public async Task<OrderResponse> UpdateOrder(Guid orderId, [FromBody]UpdateOrder request)
        {
            var result = await Mediator.Send(new UpdateOrderRequest(orderId, request));

            return OrderResponseFactory.Convert(result);
        }

        [HttpDelete("{orderId}")]
        public Task DeleteOrder(Guid orderId)
        {
            return Mediator.Send(new DeleteOrderRequest(orderId));
        }
    }
}