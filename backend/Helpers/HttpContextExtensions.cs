using Microsoft.EntityFrameworkCore;

namespace FourthProj.Helpers
{
    public static class HttpContextExtensions
    {
        public async static Task InsertParametersPaginationInHeader<T>(this HttpContext httpContext,
        IQueryable<T> queryable)
        {
            if(httpContext == null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            } 
            double count = await queryable.CountAsync();
            Console.WriteLine("Total Number of records is " + count);
            httpContext.Response.Headers.Add("totalAmountOfRecords",count.ToString());
        }
        
    }
}