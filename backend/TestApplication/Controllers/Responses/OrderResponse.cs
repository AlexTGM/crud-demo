using System;
using System.Collections.Generic;

namespace TestApplication.Controllers.Responses
{
    public class OrderResponse
    {
        public Guid OrderId { get; set; }

        public GoodResponse Good { get; set; }

        public IEnumerable<InsurancesResponse> Insurances { get; set; }

        public PickpointResponse Pickpoint { get; set; }

        public DateTime DeliveryDate { get; set; }

        public int Count { get; set; }
    }
}