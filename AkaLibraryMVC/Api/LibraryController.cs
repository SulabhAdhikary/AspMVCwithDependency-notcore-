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

    [RoutePrefix("api/Library")]
    public class LibraryController : ApiController
    {

        private LibraryModel db = new LibraryModel();
        private IlibraraySevice _service;

        public LibraryController(IlibraraySevice service)
        {
            this._service = service;
        }

        public async Task<IEnumerable<dynamic>> Get()
        {
            var res = await db.Libraries.ToListAsync();
            var q = from lib in res select new { id = lib.LibraryId, name = lib.Name, city = lib.City };
            return q.ToList<dynamic>();
        }

        // GET api/<controller>/5
        [Route("{id}")]
        [HttpGet]
        public async Task<dynamic> Get(int id)
        {
            var res = await db.Libraries.Where(t => t.LibraryId == id).Select(k => k).ToListAsync();
            var q = from lib in res select new { id = lib.LibraryId, name = lib.Name, city = lib.City };
            return q.ToList<dynamic>().FirstOrDefault();
        }
    }
}