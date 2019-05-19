using System;

namespace TestApplication.Controllers.Responses
{
    public class GoodResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int InStock { get; set; }
    }
}