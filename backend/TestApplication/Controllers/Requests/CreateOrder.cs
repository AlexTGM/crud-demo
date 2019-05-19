using System;
using System.Collections.Generic;

namespace TestApplication.Controllers.Requests
{
    public class CreateOrder
    {
        public Guid GoodId { get; set; }

        public IEnumerable<Guid> InsurancesIds { get; set; }

        public DateTime DeliveryDate { get; set; }

        public Guid PickpointId { get; set; }

        public int Count { get; set; }
    }
}