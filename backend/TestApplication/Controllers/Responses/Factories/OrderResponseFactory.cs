using System.Linq;
using TestApplication.Database;

namespace TestApplication.Controllers.Responses.Factories
{
    public static class OrderResponseFactory
    {
        public static OrderResponse Convert(Order input)
        {
            return new OrderResponse
            {
                OrderId = input.Id,
                Good = GoodResponseFactory.Convert(input.Good),
                Count = input.Count,
                Insurances = input.OrderInsurances.Select(InsurancesResponseFactory.Convert),
                DeliveryDate = input.DeliveryDate,
                Pickpoint = PickpointResponseFactory.Convert(input.Pickpoint)
            };
        }
    }
}