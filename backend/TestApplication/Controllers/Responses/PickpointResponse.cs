using System;

namespace TestApplication.Controllers.Responses
{
    public class PickpointResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }
    }
}