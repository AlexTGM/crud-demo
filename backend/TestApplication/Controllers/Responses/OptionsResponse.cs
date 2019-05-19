using System;

namespace TestApplication.Controllers.Responses
{
    public class OptionsResponse
    {
        public DateTime DeliveryDate { get; set; }

        public PickpointResponse Pickpoint { get; set; }
    }
}