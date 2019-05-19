using System.Collections.Generic;
using MediatR;
using TestApplication.Database;

namespace TestApplication.Mediator.Requests
{
    public class GetAllOrdersRequest : IRequest<IEnumerable<Order>>
    {
    }
}