using System;
using System.Collections.Generic;
using System.Linq;

namespace TestApplication.Database
{
    public class Order
    {
        private Order() { }

        public Order(Guid goodId, int count, IEnumerable<Guid> insurancesIds, DateTime deliveryDate, Guid pickpointId)
        {
            GoodId = goodId;
            Count = count;
            DeliveryDate = deliveryDate;
            PickpointId = pickpointId;
            OrderInsurances = insurancesIds.Select(x => new OrderInsurance {InsuranceId = x}).ToList();
        }

        public Guid Id { get; set; }

        public Guid GoodId { get; set; }

        public int Count { get; set; }

        public DateTime DeliveryDate { get; set; }

        public Guid PickpointId { get; set; }

        public Pickpoint Pickpoint { get; set; }

        public Good Good { get; set; }

        public IList<OrderInsurance> OrderInsurances { get; set; }
    }
}