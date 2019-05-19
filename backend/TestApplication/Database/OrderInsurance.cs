using System;

namespace TestApplication.Database
{
    public class OrderInsurance
    {
        public Guid OrderId { get; set; }

        public Order Order { get; set; }

        public Guid InsuranceId { get; set; }

        public Insurance Insurance { get; set; }
    }
}