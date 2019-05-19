using System;
using System.Collections.Generic;

namespace TestApplication.Controllers.Requests
{
    public class UpdateOrder
    {
        public int Count { get; set; }

        public IEnumerable<Guid> InsurancesIds { get; set; }

        public DateTime DeliveryDate { get; set; }

        public Guid PickpointId { get; set; }
    }
}