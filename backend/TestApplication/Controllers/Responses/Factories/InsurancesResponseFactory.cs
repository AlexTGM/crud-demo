using TestApplication.Database;

namespace TestApplication.Controllers.Responses.Factories
{
    public static class InsurancesResponseFactory
    {
        public static InsurancesResponse Convert(OrderInsurance input)
        {
            return Convert(input.Insurance);
        }

        public static InsurancesResponse Convert(Insurance input)
        {
            return new InsurancesResponse
            {
                Type = input.Type,
                Id = input.Id
            };
        }
    }
}