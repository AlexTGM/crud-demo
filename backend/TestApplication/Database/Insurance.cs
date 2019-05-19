using System;
using System.Collections.Generic;

namespace TestApplication.Database
{
    public class Insurance
    {
        public Guid Id { get; set; }

        public string Type { get; set; }

        public IList<OrderInsurance> OrderInsurances { get; set; }
    }
}