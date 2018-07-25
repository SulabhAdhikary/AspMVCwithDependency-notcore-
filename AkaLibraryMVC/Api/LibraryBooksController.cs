using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLayer;
using System.Threading.Tasks;
using System.Data.Entity;
using LibarayServices;

namespace AkaLibraryMVC.Api
{

    [RoutePrefix("api/LibraryBooks")]
    public class LibraryBooksController : ApiController
    {

        private LibraryModel db = new LibraryModel();
        private IlibraraySevice _service;

        public LibraryBooksController(IlibraraySevice service)
        {
            this._service = service;
        }
        

        [Route("{id}")]
        public async Task<IEnumerable<dynamic>> Get(int id)
        {
            var res = _service.GetLibraryBook(id);
            var q = from lib in res select new { id = lib.BookId, title = lib.BookTitle.Title };
            return q.ToList<dynamic>();

        }
    }
}